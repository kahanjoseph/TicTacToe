package livechart

import scala.collection.immutable.Vector
import scala.util.control.Breaks.{break, breakable}
import livechart.Player

case class TicTacToe(
                      board: Array[Array[Int]] = Array.fill(3, 3)(0),// Initialize 3x3 board filled with 0s
                      won: Int = 0, // Game won status: 0 = not won, 1 = player X, 2 = player O
                      player1: Player,
                      player2: Player,
                      currentTurn: Option[Player] = None
                    ) {
  // Define the winning lines for TicTacToe
  val winningLines: Vector[Vector[(Int, Int)]] = Vector(
    // Horizontal lines
    Vector((0, 0), (0, 1), (0, 2)),
    Vector((1, 0), (1, 1), (1, 2)),
    Vector((2, 0), (2, 1), (2, 2)),
    // Vertical lines
    Vector((0, 0), (1, 0), (2, 0)),
    Vector((0, 1), (1, 1), (2, 1)),
    Vector((0, 2), (1, 2), (2, 2)),
    // Diagonal lines
    Vector((0, 0), (1, 1), (2, 2)),
    Vector((0, 2), (1, 1), (2, 0))
  )

  // Method to check if a player has won the game
  private def checkIfWon(localBoard: Array[Array[Int]]): Int = {
    var won = 0 // Initialize won status to 0

    breakable {
      // Check for stalemate
      if (localBoard.flatten.forall(_ != 0)) {
        won = 3
        println("Stalemate!!")
        break // Exit the loop if a stalemate is found
      }

      // Check for winning conditions
      for (line <- winningLines) {
        if (
          localBoard(line(0)(0))(line(0)(1)) != 0 &&
            localBoard(line(0)(0))(line(0)(1)) == localBoard(line(1)(0))(line(1)(1)) &&
            localBoard(line(0)(0))(line(0)(1)) == localBoard(line(2)(0))(line(2)(1))
        ) {
          won = localBoard(line(0)(0))(line(0)(1))
          println(s"GAME OVER!! ${if (currentTurn == player1) player1.toString else player2.toString} has won!!")
          break // Exit the loop if a winning line is found
        }
      }
    }

    won // Return the won status
  }

  // Method to determine the computer's move
  def computerMove: List[Int] = {
    var returnMove: List[Int] = List() // Initialize return move
    var filledLines: List[(List[List[Int]], List[List[Int]], List[List[Int]])] = List()

    winningLines.foreach { line =>
      var samePlayerCells: List[List[Int]] = List()
      var otherPlayerCells: List[List[Int]] = List()
      var emptyCells: List[List[Int]] = List()

      for (cell <- line) {
        if (board(cell(0))(cell(1)) == currentTurn.map(_.turn).getOrElse(-1)) {
          samePlayerCells = samePlayerCells :+ List(cell(0), cell(1))
        } else if (board(cell(0))(cell(1)) == 0) {
          emptyCells = emptyCells :+ List(cell(0), cell(1))
        } else {
          otherPlayerCells = otherPlayerCells :+ List(cell(0), cell(1))
        }
      }
      filledLines = filledLines :+ (samePlayerCells, otherPlayerCells, emptyCells)
    }

    // TODO Improve AI logic - https://stackoverflow.com/questions/125557/what-algorithm-for-a-tic-tac-toe-game-can-i-use-to-determine-the-best-move-for

    // Define the middle cell
    val middleCell = List(1, 1)

    // Check if a winning move can be made
    filledLines.find(line => line(0).length == 2 && line(2).nonEmpty)
      .orElse(
        // Check if can block a winning move
        filledLines.find(line => line(1).length == 2 && line(2).nonEmpty)
      )
      .orElse(
        // Check if can make a strategic move
        filledLines.find(line => line(0).length == 1 && line(2).nonEmpty)
      )
      .orElse(
        // Check if the middle cell is empty
        if (board(middleCell(0))(middleCell(1)) == 0) Some((List(), List(), List(middleCell))) else None
      )
      .orElse(
        // Find an empty cell
        filledLines.find(line => line(2).nonEmpty)
      )
      // Get the first empty cell from the line found by previous logic
      .map(line => line(2).head)
      .getOrElse(List(0, 0))
  }

  // Method to make a move on the board
  def makeMove(x: Int, o: Int): TicTacToe = {
    if (won != 0) {
      this
    } else if (board(x)(o) == 0) {
      val updatedBoard = board.updated(x, board(x).updated(o, currentTurn.map(_.turn).getOrElse(-1))) // Update board
      val gameWon = checkIfWon(updatedBoard) // Check if the move results in a win
      copy(board = updatedBoard, currentTurn = if (currentTurn.contains(player1)) Some(player2) else Some(player1), won = gameWon) // Return updated game state
    } else {
      println("Invalid move! Try again.")
      this // Return the same instance if the move is invalid
    }
  }
}