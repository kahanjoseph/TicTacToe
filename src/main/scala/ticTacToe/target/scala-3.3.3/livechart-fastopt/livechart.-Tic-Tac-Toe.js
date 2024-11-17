'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
function $p_Llivechart_TicTacToe__checkIfWon__AAI__I($thiz, localBoard) {
  var won = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_Breaks$();
  try {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).u.length;
    var size$1 = 0;
    var i = 0;
    while ((i < len)) {
      var x1 = i;
      var x1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get(x1);
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$is_sc_IterableOnce(x1$1)) {
        var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(x1$1);
        var k = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).knownSize__I();
        if ((k > 0)) {
          size$1 = ((size$1 + k) | 0);
        }
      } else if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().isArray__O__I__Z(x1$1, 1)) {
        size$1 = ((size$1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_reflect_Array$().getLength__O__I(x1$1)) | 0);
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < len)) {
      var x1$2 = i;
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get(x1$2);
      var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(arg1, 1);
      var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapIntArray__AI__scm_ArraySeq$ofInt(xs);
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(elems);
      var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator$mcI$sp(this$9.scm_ArraySeq$ofInt__f_array);
      while (it.hasNext__Z()) {
        var elem = it.next$mcI$sp__I();
        jsElems.push(elem);
      }
      i = ((1 + i) | 0);
    }
    var xs$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array(jsElems));
    _return: {
      var i$1 = 0;
      while ((i$1 < xs$1.u.length)) {
        var arg1$1 = xs$1.get(i$1);
        if ((!(arg1$1 !== 0))) {
          var $x_1 = false;
          break _return;
        }
        i$1 = ((1 + i$1) | 0);
      }
      var $x_1 = true;
    }
    if ($x_1) {
      var ev$5 = 3;
      won.sr_IntRef__f_elem = ev$5;
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$();
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$13.out__Ljava_io_PrintStream());
      this$14.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Stalemate!!\n");
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_Breaks$().break__E();
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Llivechart_TicTacToe__f_winningLines).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((line) => {
      var line$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(line);
      if (((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._2__O())) !== 0) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._2__O())) === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(1)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(1)))._2__O())))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._2__O())) === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(2)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(2)))._2__O()))))) {
        var ev$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(localBoard).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).apply__I__O(0)))._2__O()));
        won.sr_IntRef__f_elem = ev$6;
        var x = $thiz.Llivechart_TicTacToe__f_currentTurn;
        var x$2 = $thiz.Llivechart_TicTacToe__f_player1;
        var x$1 = (("GAME OVER!! " + (((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Llivechart_TicTacToe__f_player1).playerToString__T() : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Llivechart_TicTacToe__f_player2).playerToString__T())) + " has won!!");
        var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$();
        var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$17.out__Ljava_io_PrintStream());
        this$18.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$1 + "\n"));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_Breaks$().break__E();
      }
    })));
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      if ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_control_BreakControl)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_control_BreakControl(e$2);
        if ((x5 === this$2.s_util_control_Breaks__f_scala$util$control$Breaks$$breakException)) {
          break matchEnd8;
        }
      }
      throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e$2));
    }
  }
  return won.sr_IntRef__f_elem;
}
export { $p_Llivechart_TicTacToe__checkIfWon__AAI__I as $p_Llivechart_TicTacToe__checkIfWon__AAI__I };
/** @constructor */
function $c_Llivechart_TicTacToe(board, won, player1, player2, currentTurn) {
  this.Llivechart_TicTacToe__f_board = null;
  this.Llivechart_TicTacToe__f_won = 0;
  this.Llivechart_TicTacToe__f_player1 = null;
  this.Llivechart_TicTacToe__f_player2 = null;
  this.Llivechart_TicTacToe__f_currentTurn = null;
  this.Llivechart_TicTacToe__f_winningLines = null;
  this.Llivechart_TicTacToe__f_board = board;
  this.Llivechart_TicTacToe__f_won = won;
  this.Llivechart_TicTacToe__f_player1 = player1;
  this.Llivechart_TicTacToe__f_player2 = player2;
  this.Llivechart_TicTacToe__f_currentTurn = currentTurn;
  var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2)]));
  var $x_7 = this$4.from__sc_IterableOnce__sci_Vector(elems);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 2)]));
  var $x_6 = this$8.from__sc_IterableOnce__sci_Vector(elems$1);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]));
  var $x_5 = this$12.from__sc_IterableOnce__sci_Vector(elems$2);
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0)]));
  var $x_4 = this$16.from__sc_IterableOnce__sci_Vector(elems$3);
  var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 1)]));
  var $x_3 = this$20.from__sc_IterableOnce__sci_Vector(elems$4);
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]));
  var $x_2 = this$24.from__sc_IterableOnce__sci_Vector(elems$5);
  var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]));
  var $x_1 = this$28.from__sc_IterableOnce__sci_Vector(elems$6);
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0)]));
  var elems$8 = $x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sci_Vector.getArrayOf().constr)([$x_7, $x_6, $x_5, $x_4, $x_3, $x_2, $x_1, this$32.from__sc_IterableOnce__sci_Vector(elems$7)]));
  this.Llivechart_TicTacToe__f_winningLines = this$33.from__sc_IterableOnce__sci_Vector(elems$8);
}
export { $c_Llivechart_TicTacToe as $c_Llivechart_TicTacToe };
$c_Llivechart_TicTacToe.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_TicTacToe.prototype.constructor = $c_Llivechart_TicTacToe;
/** @constructor */
function $h_Llivechart_TicTacToe() {
}
export { $h_Llivechart_TicTacToe as $h_Llivechart_TicTacToe };
$h_Llivechart_TicTacToe.prototype = $c_Llivechart_TicTacToe.prototype;
$c_Llivechart_TicTacToe.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_TicTacToe.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("TicTacToe");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Llivechart_TicTacToe__f_board;
  var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = this.Llivechart_TicTacToe__f_won;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$1 = this.Llivechart_TicTacToe__f_player1;
  var data$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$1);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var x$2 = this.Llivechart_TicTacToe__f_player2;
  var data$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$2);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  var x$3 = this.Llivechart_TicTacToe__f_currentTurn;
  var data$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$3);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$5, data$5);
  var hash$6 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$6, 5);
});
$c_Llivechart_TicTacToe.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_TicTacToe)) {
    var x$0$2 = $as_Llivechart_TicTacToe(x$0);
    if ((this.Llivechart_TicTacToe__f_won === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_TicTacToe__f_won)) {
      var x = this.Llivechart_TicTacToe__f_board;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_TicTacToe__f_board;
      if ((x === null)) {
        var $x_4 = (x$2 === null);
      } else {
        var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $x_4 = (this$1 === x$2);
      }
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$3 = this.Llivechart_TicTacToe__f_player1;
      var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_TicTacToe__f_player1;
      var $x_3 = ((x$3 === null) ? (x$4 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).equals__O__Z(x$4));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$5 = this.Llivechart_TicTacToe__f_player2;
      var x$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_TicTacToe__f_player2;
      var $x_2 = ((x$5 === null) ? (x$6 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$5).equals__O__Z(x$6));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$7 = this.Llivechart_TicTacToe__f_currentTurn;
      var x$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_TicTacToe__f_currentTurn;
      var $x_1 = ((x$7 === null) ? (x$8 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7).equals__O__Z(x$8));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Llivechart_TicTacToe.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_TicTacToe.prototype.productArity__I = (function() {
  return 5;
});
$c_Llivechart_TicTacToe.prototype.productPrefix__T = (function() {
  return "TicTacToe";
});
$c_Llivechart_TicTacToe.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_TicTacToe__f_board;
      break;
    }
    case 1: {
      return this.Llivechart_TicTacToe__f_won;
      break;
    }
    case 2: {
      return this.Llivechart_TicTacToe__f_player1;
      break;
    }
    case 3: {
      return this.Llivechart_TicTacToe__f_player2;
      break;
    }
    case 4: {
      return this.Llivechart_TicTacToe__f_currentTurn;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Llivechart_TicTacToe.prototype.computerMove__sci_List = (function() {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  var filledLines = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_winningLines).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((line) => {
    var line$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(line);
    var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
    var samePlayerCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem$1);
    var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var elem$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
    var otherPlayerCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem$2);
    var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var elem$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
    var emptyCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem$3);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((cell) => {
      var cell$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(cell);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_board).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._2__O())) === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_currentTurn).Llivechart_Player__f_turn)) {
        var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(samePlayerCells.sr_ObjectRef__f_elem));
        var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._2__O())])));
        var elem$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
        var ev$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$12, elem$4));
        samePlayerCells.sr_ObjectRef__f_elem = ev$7;
        ev$7 = null;
      } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_board).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._1__O()))).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._2__O())) === 0)) {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(emptyCells.sr_ObjectRef__f_elem));
        var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._2__O())])));
        var elem$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
        var ev$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$14, elem$5));
        emptyCells.sr_ObjectRef__f_elem = ev$8;
        ev$8 = null;
      } else {
        var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(otherPlayerCells.sr_ObjectRef__f_elem));
        var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cell$1)._2__O())])));
        var elem$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$7);
        var ev$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$16, elem$6));
        otherPlayerCells.sr_ObjectRef__f_elem = ev$9;
        ev$9 = null;
      }
    })));
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(filledLines.sr_ObjectRef__f_elem));
    var _1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(samePlayerCells.sr_ObjectRef__f_elem);
    var _2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(otherPlayerCells.sr_ObjectRef__f_elem);
    var _3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(emptyCells.sr_ObjectRef__f_elem);
    var elem$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3(_1, _2, _3);
    var ev$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$18, elem$7));
    filledLines.sr_ObjectRef__f_elem = ev$10;
    ev$10 = null;
  })));
  var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([1, 1])));
  var middleCell = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$8);
  var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(filledLines.sr_ObjectRef__f_elem));
  _return: {
    var these = this$20;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var line$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(arg1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$2).T3__f__1)).length__I() === 2)) {
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$2).T3__f__3));
        var $x_1 = (!this$21.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var this$22 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
        break _return;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$22.isEmpty__Z()) {
    var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(filledLines.sr_ObjectRef__f_elem));
    _return$1: {
      var these$1 = this$23;
      while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
        var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
        var line$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(arg1$1);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$3).T3__f__2)).length__I() === 2)) {
          var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$3).T3__f__3));
          var $x_2 = (!this$24.isEmpty__Z());
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var this$25 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O());
          break _return$1;
        }
        these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O());
      }
      var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$25 = this$22;
  }
  if (this$25.isEmpty__Z()) {
    var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(filledLines.sr_ObjectRef__f_elem));
    _return$2: {
      var these$2 = this$26;
      while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$2).isEmpty__Z())) {
        var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$2).head__O();
        var line$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(arg1$2);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$4).T3__f__1)).length__I() === 1)) {
          var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$4).T3__f__3));
          var $x_3 = (!this$27.isEmpty__Z());
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          var this$28 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$2).head__O());
          break _return$2;
        }
        these$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$2).tail__O());
      }
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$28 = this$25;
  }
  if (this$28.isEmpty__Z()) {
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_board);
    var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(middleCell);
    var $x_4 = $x_5.get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$29, 0)));
    var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(middleCell);
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).get($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$30, 1))) === 0)) {
      var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
      var _1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$9);
      var elems$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
      var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$10);
      var elems$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sci_List.getArrayOf().constr)([middleCell]));
      var _3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$11);
      var value = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3(_1$1, _2$1, _3$1);
      var this$36 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
    } else {
      var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$36 = this$28;
  }
  if (this$36.isEmpty__Z()) {
    var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(filledLines.sr_ObjectRef__f_elem));
    _return$3: {
      var these$3 = this$37;
      while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$3).isEmpty__Z())) {
        var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$3).head__O();
        var line$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(arg1$3);
        var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$5).T3__f__3));
        if ((!this$38.isEmpty__Z())) {
          var this$39 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$3).head__O());
          break _return$3;
        }
        these$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$3).tail__O());
      }
      var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$39 = this$36;
  }
  if (this$39.isEmpty__Z()) {
    var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var arg1$4 = this$39.get__O();
    var line$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(arg1$4);
    var this$40 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$6).T3__f__3)).head__O()));
  }
  if (this$40.isEmpty__Z()) {
    var elems$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([0, 0])));
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$12);
  } else {
    var $x_6 = this$40.get__O();
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($x_6);
});
$c_Llivechart_TicTacToe.prototype.makeMove__I__I__Llivechart_TicTacToe = (function(x, o) {
  if ((this.Llivechart_TicTacToe__f_won !== 0)) {
    return this;
  } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_board).get(x)).get(o) === 0)) {
    var xs = this.Llivechart_TicTacToe__f_board;
    var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_board).get(x);
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_TicTacToe__f_currentTurn).Llivechart_Player__f_turn;
    if (((o < 0) || (o >= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length))) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), (((o + " is out of bounds (min 0, max ") + (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length) | 0)) + ")"));
    }
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length;
    var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$1, destination, 0, 2147483647);
    destination.set(o, elem);
    if (((x < 0) || (x >= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length))) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), (((x + " is out of bounds (min 0, max ") + (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length) | 0)) + ")"));
    }
    var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
    var destination$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(len$1);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs, destination$1, 0, 2147483647);
    destination$1.set(x, destination);
    var won = $p_Llivechart_TicTacToe__checkIfWon__AAI__I(this, destination$1);
    var x$2 = this.Llivechart_TicTacToe__f_currentTurn;
    var x$3 = this.Llivechart_TicTacToe__f_player1;
    if (((x$2 === null) ? (x$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).equals__O__Z(x$3))) {
      var currentTurn$1 = this.Llivechart_TicTacToe__f_player2;
    } else {
      var currentTurn$1 = this.Llivechart_TicTacToe__f_player1;
    }
    var player1$1 = this.Llivechart_TicTacToe__f_player1;
    var player2$1 = this.Llivechart_TicTacToe__f_player2;
    return new $c_Llivechart_TicTacToe(destination$1, won, player1$1, player2$1, currentTurn$1);
  } else {
    var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$();
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$17.out__Ljava_io_PrintStream());
    this$18.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Invalid move! Try again.\n");
    return this;
  }
});
function $as_Llivechart_TicTacToe(obj) {
  return (((obj instanceof $c_Llivechart_TicTacToe) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.TicTacToe"));
}
export { $as_Llivechart_TicTacToe as $as_Llivechart_TicTacToe };
function $isArrayOf_Llivechart_TicTacToe(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_TicTacToe)));
}
export { $isArrayOf_Llivechart_TicTacToe as $isArrayOf_Llivechart_TicTacToe };
function $asArrayOf_Llivechart_TicTacToe(obj, depth) {
  return (($isArrayOf_Llivechart_TicTacToe(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.TicTacToe;", depth));
}
export { $asArrayOf_Llivechart_TicTacToe as $asArrayOf_Llivechart_TicTacToe };
var $d_Llivechart_TicTacToe = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_TicTacToe, "livechart.TicTacToe", ({
  Llivechart_TicTacToe: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_TicTacToe as $d_Llivechart_TicTacToe };
//# sourceMappingURL=livechart.-Tic-Tac-Toe.js.map
