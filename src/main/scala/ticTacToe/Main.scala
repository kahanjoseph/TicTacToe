package livechart

import scala.scalajs.js
import scala.scalajs.js.annotation._
import org.scalajs.dom
import com.raquo.laminar.api.L.{*, given}

// Import the TicTacToe and Player classes
import livechart.TicTacToe
import livechart.Player

@js.native @JSImport("/javascript.svg", JSImport.Default)
val javascriptLogo: String = js.native

@main
def LiveChart(): Unit = {
  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )
}

object Main {
  // Initialize the necessary variables and state
  var emptyBoard = Array.fill(3, 3)(0)
  val xVar = Var(false)
  val oVar = Var(false)
  val gaming = Var(false)

  val playerX = Player(1, false)
  val playerO = Player(2, false)
  var gameSignal: Var[TicTacToe] = Var(TicTacToe(emptyBoard, 0, playerX, playerO, playerX)) // Initialize the game state with proper parameters

  def handleCellClick(rowIndex: Int, colIndex: Int): Unit = {
    if (gaming.now()) {
      gameSignal.update(_.makeMove(rowIndex, colIndex)) // Update the game state reactively
    }
  }

  // Changes the display of the button as well as the value of "toggle"
  def toggleElement(toggle: Var[Boolean], textOn: String, textOff: String, colors: String = "bg-gray-600 text-white hover:bg-gray-900"): Element = {
    button(
      cls := s"w-40 px-6 py-9 mb-2 text-xl font-semibold shadow-sm $colors",
      onClick --> { _ =>
        val newToggleState = !toggle.now()
        toggle.set(newToggleState)
        //println(newToggleState)  // Print the state after it is toggled
      },
      child.text <-- toggle.signal.map(isOn => if (isOn) textOn else textOff) // Dynamic text based on toggle state
    )
  }

  def appElement(): Element = {
    val localOwner = new Owner {}

    // Observer to handle game state changes
    val gamingObserver = Observer[Boolean] { isGameActive =>
      var player1 = Player(1, xVar.now())
      gameSignal.update(_ => TicTacToe(emptyBoard, 0, player1, Player(2, oVar.now()), player1))

      if (isGameActive) {
        if (xVar.now()) {
          gameSignal.update( currentGame =>
            val move: List[Int] = currentGame.computerMove
            currentGame.makeMove(move(0), move(1))
            )
        }
      }
    }

    // Attach the observer to the signal
    gaming.signal.addObserver(gamingObserver)(localOwner)

    // Observer to display the current player's turn and handle AI moves
    val currentTurnObserver = Observer[TicTacToe] { game =>
      if (gaming.now() && game.currentTurn.isAI) {
        gameSignal.update { currentGame =>
          val move: List[Int] = currentGame.computerMove
          currentGame.makeMove(move(0), move(1))
        }
      }
    }

    // Observer to detect turn changes and trigger currentTurnObserver only on change
    val turnObserver = gameSignal.signal.changes.map(_.currentTurn).distinct.map(_ => gameSignal.now())
      .addObserver(currentTurnObserver)(localOwner)

    div(
      cls := "mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 my-20",
      div(cls := "col-span-1 grid grid-cols-1",
        toggleElement(xVar, "X is set to AI", "X is set to human"),
        toggleElement(oVar, "O is set to AI", "O is set to human"),
        toggleElement(gaming, "End Game", "Start Game", "bg-green-600 text-white hover:bg-green-900")
      ),
      div(
        cls := "col-span-2",
        // Conditionally render the game board
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
    )
  }
}