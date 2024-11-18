package livechart

// Player class with private constructor
case class Player (turn: Int, isAI: Boolean){
  require(turn == 1 || turn == 2, "Turn must be 1 (X) or 2 (O)")

  override def toString: String = {
    if (turn == 1) "X" else "O"
  }

  def isHumanToString: String = {
    if (isAI) "is AI" else "is Human"
  }
}
//
//// Companion object for Player
//object Player {
//  def apply(turn: Int): Option[Player] = {
//    if (turn == 1 || turn == 2) Some(new Player(turn))
//    else None
//  }
//}