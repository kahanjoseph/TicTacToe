package livechart

import scala.scalajs.js
import scala.scalajs.js.annotation._
import org.scalajs.dom
import com.raquo.laminar.api.L.{*, given}
import livechart.ModalComponent

// Import the TicTacToe and Player classes
import livechart.TicTacToe
import livechart.ToggleButton
import livechart.GameDiv
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
  val gaming: Var[Boolean] = Var(false) // Variable to track if the game is ongoing

  val playerX = Player(1, false) // Initialize Player X
  val playerO = Player(2, false) // Initialize Player O
  var gameSignal: Var[TicTacToe] = Var(TicTacToe(emptyBoard, 0, playerX, playerO)) // Initialize the game state with proper parameters

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

  // Function to create the main application element
  def appElement(): Element = {
    val localOwner = new Owner {}

    // Observer to handle game state changes
    val gamingObserver = Observer[Boolean] { isGameActive =>
      val player1 = Player(1, xVar.now())

      if (isGameActive) {
        gameSignal.update(_ => TicTacToe(emptyBoard, 0, player1, Player(2, oVar.now()), Some(player1)))
      }else{
        gameSignal.update(_ => TicTacToe(emptyBoard, 0, player1, Player(2, oVar.now())))
      }
    }

    // Attach the observer to the signal
    gaming.signal.addObserver(gamingObserver)(localOwner)

    val currentTurnObserver = Observer[Option[Player]] {
      case Some(player) if gaming.now() && player.isAI =>
        gameSignal.update { currentGame =>
          val move: List[Int] = currentGame.computerMove
          currentGame.makeMove(move(0), move(1))
        }
      case _ => // Handle None or player who is not AI if necessary
    }

    // Observer to detect turn changes and trigger currentTurnObserver only on change
    gameSignal.signal.changes.map(_.currentTurn).distinct
      .addObserver(currentTurnObserver)(localOwner)

    // Observer to check if the game is over by observing the won field specifically
    val gameOverObserver = Observer[Int] { won =>
      if (won == 1 || won == 2) {
        val winner = if (won == 1) "X" else "O"
        modalTitle = s"${winner} has won!!"
        showModal()
      } else if (won == 3) {
        modalTitle = "Stale Mate"
        showModal()
      }
    }

    // Observe changes in the won field
    gameSignal.signal.map(_.won).distinct
      .addObserver(gameOverObserver)(localOwner)

    // Create and return the main app layout
    div(
      cls := "mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 my-20",
      div(
        cls := "col-span-1 grid grid-cols-1",
        ToggleButton(xVar, "X is set to AI", "X is set to human"),
        ToggleButton(oVar, "O is set to AI", "O is set to human"),
        ToggleButton(gaming, "End Game", "Start Game", "bg-green-600 text-white hover:bg-green-900"),
      ),
      GameDiv(gameSignal, gaming),
      child <-- isModalVisible.signal.map { visible =>
        if (visible) ModalComponent(modalTitle, hideModal, isModalVisible.signal) else emptyNode
      }
    )
  }
}