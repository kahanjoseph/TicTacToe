package livechart

import com.raquo.laminar.api.L.{*, given}

object GameDiv {
  // Function to handle cell clicks in the game board
  def handleCellClick(rowIndex: Int, colIndex: Int, gameSignal: Var[TicTacToe], gaming: Var[Boolean]): Unit = {
    if (gaming.now()) {
      gameSignal.update(_.makeMove(rowIndex, colIndex)) // Update the game state reactively
    }
  }

  def apply(gameSignal: Var[TicTacToe], gaming: Var[Boolean]): HtmlElement = {
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
                      onClick.mapTo((rowIndex, colIndex)) --> { case (ri, ci) => handleCellClick(ri, ci, gameSignal, gaming) },
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
    )
  }
}