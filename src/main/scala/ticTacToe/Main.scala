package livechart

import scala.scalajs.js
import scala.scalajs.js.annotation._
import org.scalajs.dom
import com.raquo.laminar.api.L.{*, given}
import livechart.ModalComponent

// Import the TicTacToe and Player classes
import livechart.TicTacToe
import livechart.Player

@main
def LiveChart(): Unit = {
  // Render components on DOM content loaded
  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )
}

object Main {
  // Initialize the necessary variables and state
  var emptyBoard = Array.fill(3, 3)(0) // A 3x3 empty board
  val xVar = Var(false) // Variable to track if X is AI
  val oVar = Var(false) // Variable to track if O is AI
  val gaming = Var(false) // Variable to track if the game is ongoing

  val playerX = Player(1, false) // Initialize Player X
  val playerO = Player(2, false) // Initialize Player O
  var gameSignal: Var[TicTacToe] = Var(TicTacToe(emptyBoard, 0, playerX, playerO, playerX)) // Initialize the game state with proper parameters

  // Function to handle cell clicks in the game board
  def handleCellClick(rowIndex: Int, colIndex: Int): Unit = {
    if (gaming.now()) {
      gameSignal.update(_.makeMove(rowIndex, colIndex)) // Update the game state reactively
    }
  }

  var modalTitle = "" // Variable to hold the title of the modal
  val isModalVisible = Var(false) // Create a Var to hold the modal visibility state

  // Function to show the modal
  def showModal(): Unit = {
    isModalVisible.set(true)
  }

  // Function to hide the modal
  def hideModal(): Unit = {
    isModalVisible.set(false)
  }

  // Function to toggle button display and state
  def toggleElement(
                     toggle: Var[Boolean],
                     textOn: String,
                     textOff: String,
                     colors: String = "bg-gray-600 text-white hover:bg-gray-900"
                   ): Element = {
    button(
      cls := s"w-40 px-6 py-9 mb-2 text-xl font-semibold shadow-sm $colors",
      onClick --> { _ =>
        val newToggleState = !toggle.now()
        toggle.set(newToggleState)
      },
      child.text <-- toggle.signal.map(isOn => if (isOn) textOn else textOff) // Dynamic text based on toggle state
    )
  }

  // Function to create the main application element
  def appElement(): Element = {
    val localOwner = new Owner {}

    // Observer to handle game state changes
    val gamingObserver = Observer[Boolean] { isGameActive =>
      var player1 = Player(1, xVar.now())
      gameSignal.update(_ => TicTacToe(emptyBoard, 0, player1, Player(2, oVar.now()), player1))

      if (isGameActive) {
        if (xVar.now()) {
          gameSignal.update( currentGame => {
            val move: List[Int] = currentGame.computerMove
            currentGame.makeMove(move(0), move(1))
          })
        }
      }
    }

    // Attach the observer to the signal
    gaming.signal.addObserver(gamingObserver)(localOwner)

    // Observer to display the current player's turn and handle AI moves
    val currentTurnObserver = Observer[Player] { player =>
      if (gaming.now() && player.isAI) {
        gameSignal.update { currentGame =>
          val move: List[Int] = currentGame.computerMove
          currentGame.makeMove(move(0), move(1))
        }
      }
    }

    // Observer to detect turn changes and trigger currentTurnObserver only on change
    gameSignal.signal.changes.map(_.currentTurn).distinct
      .addObserver(currentTurnObserver)(localOwner)

    // Observer to check if the game is over by observing the won field specifically
    val gameOverObserver = Observer[Int] { won => {
      if(won == 1 || won == 2){
        val winner = if (won == 1) "X" else "O"
        modalTitle = s"${winner} has won!!"
        showModal()
      }else if(won == 3){
        modalTitle = "Stale Mate"
        showModal()
      }
    }}

    // Observe changes in the won field
    gameSignal.signal.map(_.won).distinct
      .addObserver(gameOverObserver)(localOwner)

    // Create and return the main app layout
    div(
      cls := "mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 my-20",
      div(cls := "col-span-1 grid grid-cols-1",
        toggleElement(xVar, "X is set to AI", "X is set to human"),
        toggleElement(oVar, "O is set to AI", "O is set to human"),
        toggleElement(gaming, "End Game", "Start Game", "bg-green-600 text-white hover:bg-green-900"),
      ),
      div(
        cls := "col-span-2",
        // Conditionally render the game board based on the gaming state
        child <-- gaming.signal.map { isGaming =>
          if (isGaming) {
            div(
              cls := "",
              child <-- gameSignal.signal.map { game =>
                div(
                  cls := "size-96 bg-white grid grid-cols-3 bg-red-300",
                  game.board.zipWithIndex.flatMap { case (row, rowIndex) =>
                    row.zipWithIndex.map { case (cell, colIndex) =>
                      div(
                        cls := "border-2 border-black flex justify-center items-center",
                        onClick.mapTo((rowIndex, colIndex)) --> { case (ri, ci) => handleCellClick(ri, ci) },
                        div(
                          cls := "h-7 w-7 text-center flex items-center text-5xl",
                          cell match {
                            case 1 => "X"
                            case 2 => "O"
                            case _ => ""
                          }
                        )
                      )
                    }
                  }
                )
              }
            )
          } else {
            div() // Render an empty div when not gaming
          }
        }
      ),
      child <-- isModalVisible.signal.map { visible =>
        if (visible) ModalComponent(modalTitle, hideModal, isModalVisible.signal) else emptyNode
      }
    )
  }
}