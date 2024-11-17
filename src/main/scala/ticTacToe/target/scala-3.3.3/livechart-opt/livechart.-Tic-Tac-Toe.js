'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
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
    var len = localBoard.a.length;
    var size$1 = 0;
    var i = 0;
    while ((i < len)) {
      var x1 = i;
      var x1$1 = localBoard.a[x1];
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$is_sc_IterableOnce(x1$1)) {
        var k = x1$1.y();
        if ((k > 0)) {
          size$1 = ((size$1 + k) | 0);
        }
      } else if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().pK(x1$1, 1)) {
        size$1 = ((size$1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_reflect_Array$().b4(x1$1)) | 0);
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < len)) {
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
      var x1$2 = i;
      var elems = $x_1.qL(localBoard.a[x1$2]);
      var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator$mcI$sp(elems.cM);
      while (it.l()) {
        var elem = it.nk();
        jsElems.push(elem);
      }
      i = ((1 + i) | 0);
    }
    var xs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array(jsElems));
    _return: {
      var i$1 = 0;
      while ((i$1 < xs.a.length)) {
        if ((!(xs.a[i$1] !== 0))) {
          var $x_2 = false;
          break _return;
        }
        i$1 = ((1 + i$1) | 0);
      }
      var $x_2 = true;
    }
    if ($x_2) {
      var ev$5 = 3;
      won.cp = ev$5;
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$().gR().gN("Stalemate!!\n");
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_Breaks$().mJ();
    }
    $thiz.hQ.bH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((line) => {
      if ((((localBoard.a[(line.r(0).T() | 0)].a[(line.r(0).P() | 0)] !== 0) && (localBoard.a[(line.r(0).T() | 0)].a[(line.r(0).P() | 0)] === localBoard.a[(line.r(1).T() | 0)].a[(line.r(1).P() | 0)])) && (localBoard.a[(line.r(0).T() | 0)].a[(line.r(0).P() | 0)] === localBoard.a[(line.r(2).T() | 0)].a[(line.r(2).P() | 0)]))) {
        var ev$6 = localBoard.a[(line.r(0).T() | 0)].a[(line.r(0).P() | 0)];
        won.cp = ev$6;
        var x = $thiz.c0;
        var x$2 = $thiz.ch;
        var x$1 = (("GAME OVER!! " + (((x === null) ? (x$2 === null) : x.j(x$2)) ? $thiz.ch.nw() : $thiz.d8.nw())) + " has won!!");
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$().gR().gN((x$1 + "\n"));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_Breaks$().mJ();
      }
    })));
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      if ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_control_BreakControl)) {
        if ((e$2 === this$2.gz)) {
          break matchEnd8;
        }
      }
      throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.O : e$2);
    }
  }
  return won.cp;
}
export { $p_Llivechart_TicTacToe__checkIfWon__AAI__I as $p_Llivechart_TicTacToe__checkIfWon__AAI__I };
/** @constructor */
function $c_Llivechart_TicTacToe(board, won, player1, player2, currentTurn) {
  this.bN = null;
  this.eM = 0;
  this.ch = null;
  this.d8 = null;
  this.c0 = null;
  this.hQ = null;
  this.bN = board;
  this.eM = won;
  this.ch = player1;
  this.d8 = player2;
  this.c0 = currentTurn;
  this.hQ = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sci_Vector.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 2)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 1)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 2)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().bY($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, 2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, 1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, 0)])))])));
}
export { $c_Llivechart_TicTacToe as $c_Llivechart_TicTacToe };
$p = $c_Llivechart_TicTacToe.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_TicTacToe;
/** @constructor */
function $h_Llivechart_TicTacToe() {
}
export { $h_Llivechart_TicTacToe as $h_Llivechart_TicTacToe };
$h_Llivechart_TicTacToe.prototype = $p;
$p.b9 = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("TicTacToe"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().K(this.bN));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, this.eM);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().K(this.ch));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().K(this.d8));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().K(this.c0));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().z(acc, 5);
});
$p.j = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_TicTacToe)) {
    if ((this.eM === x$0.eM)) {
      var x = this.bN;
      var x$2 = x$0.bN;
      var $x_3 = (x === x$2);
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.ch;
      var x$4 = x$0.ch;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.j(x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.d8;
      var x$6 = x$0.d8;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.j(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.c0;
      var x$8 = x$0.c0;
      return ((x$7 === null) ? (x$8 === null) : x$7.j(x$8));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().fI(this);
});
$p.aW = (function() {
  return 5;
});
$p.aY = (function() {
  return "TicTacToe";
});
$p.aX = (function(n) {
  switch (n) {
    case 0: {
      return this.bN;
      break;
    }
    case 1: {
      return this.eM;
      break;
    }
    case 2: {
      return this.ch;
      break;
    }
    case 3: {
      return this.d8;
      break;
    }
    case 4: {
      return this.c0;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$p.mP = (function() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([])));
  var filledLines = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))));
  this.hQ.bH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((line) => {
    var samePlayerCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))));
    var otherPlayerCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))));
    var emptyCells = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))));
    line.bH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((cell) => {
      if ((this.bN.a[(cell.T() | 0)].a[(cell.P() | 0)] === this.c0.d7)) {
        var ev$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(samePlayerCells.a5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().g4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([(cell.T() | 0), (cell.P() | 0)])))));
        samePlayerCells.a5 = ev$7;
        ev$7 = null;
      } else if ((this.bN.a[(cell.T() | 0)].a[(cell.P() | 0)] === 0)) {
        var ev$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(emptyCells.a5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().g4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([(cell.T() | 0), (cell.P() | 0)])))));
        emptyCells.a5 = ev$8;
        ev$8 = null;
      } else {
        var ev$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(otherPlayerCells.a5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().g4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([(cell.T() | 0), (cell.P() | 0)])))));
        otherPlayerCells.a5 = ev$9;
        ev$9 = null;
      }
    })));
    var ev$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(filledLines.a5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3(samePlayerCells.a5, otherPlayerCells.a5, emptyCells.a5));
    filledLines.a5 = ev$10;
    ev$10 = null;
  })));
  var middleCell = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().g4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([1, 1]))));
  var this$20 = filledLines.a5;
  _return: {
    var these = this$20;
    while ((!these.b())) {
      var arg1 = these.q();
      if (((arg1.ec.s() === 2) && (!arg1.ci.b()))) {
        var this$22 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.q());
        break _return;
      }
      these = these.u();
    }
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$22.b()) {
    var this$23 = filledLines.a5;
    _return$1: {
      var these$1 = this$23;
      while ((!these$1.b())) {
        var arg1$1 = these$1.q();
        if (((arg1$1.eO.s() === 2) && (!arg1$1.ci.b()))) {
          var this$25 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these$1.q());
          break _return$1;
        }
        these$1 = these$1.u();
      }
      var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$25 = this$22;
  }
  if (this$25.b()) {
    var this$26 = filledLines.a5;
    _return$2: {
      var these$2 = this$26;
      while ((!these$2.b())) {
        var arg1$2 = these$2.q();
        if (((arg1$2.ec.s() === 1) && (!arg1$2.ci.b()))) {
          var this$28 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these$2.q());
          break _return$2;
        }
        these$2 = these$2.u();
      }
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$28 = this$25;
  }
  var this$34 = (this$28.b() ? ((this.bN.a[($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(middleCell, 0) | 0)].a[($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(middleCell, 1) | 0)] === 0) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ep(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().Q(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sci_List.r().C)([middleCell]))))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : this$28);
  if (this$34.b()) {
    var this$35 = filledLines.a5;
    _return$3: {
      var these$3 = this$35;
      while ((!these$3.b())) {
        if ((!these$3.q().ci.b())) {
          var this$37 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these$3.q());
          break _return$3;
        }
        these$3 = these$3.u();
      }
      var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } else {
    var this$37 = this$34;
  }
  var this$38 = (this$37.b() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(this$37.B().ci.q()));
  return (this$38.b() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().b8($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().g4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([0, 0])))) : this$38.B());
});
$p.j4 = (function(x, o) {
  if ((this.eM !== 0)) {
    return this;
  } else if ((this.bN.a[x].a[o] === 0)) {
    var xs = this.bN;
    var xs$1 = this.bN.a[x];
    var elem = this.c0.d7;
    if (((o < 0) || (o >= xs$1.a.length))) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), (((o + " is out of bounds (min 0, max ") + (((-1) + xs$1.a.length) | 0)) + ")"));
    }
    var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(xs$1.a.length);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().mS(xs$1, destination, 0, 2147483647);
    destination.a[o] = elem;
    if (((x < 0) || (x >= xs.a.length))) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), (((x + " is out of bounds (min 0, max ") + (((-1) + xs.a.length) | 0)) + ")"));
    }
    var destination$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(xs.a.length);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().mS(xs, destination$1, 0, 2147483647);
    destination$1.a[x] = destination;
    var won = $p_Llivechart_TicTacToe__checkIfWon__AAI__I(this, destination$1);
    var x$2 = this.c0;
    var x$3 = this.ch;
    if (((x$2 === null) ? (x$3 === null) : x$2.j(x$3))) {
      var currentTurn$1 = this.d8;
    } else {
      var currentTurn$1 = this.ch;
    }
    return new $c_Llivechart_TicTacToe(destination$1, won, this.ch, this.d8, currentTurn$1);
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Console$().gR().gN("Invalid move! Try again.\n");
    return this;
  }
});
function $isArrayOf_Llivechart_TicTacToe(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
export { $isArrayOf_Llivechart_TicTacToe as $isArrayOf_Llivechart_TicTacToe };
var $d_Llivechart_TicTacToe = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_TicTacToe, "livechart.TicTacToe", ({
  bq: 1,
  d: 1,
  E: 1,
  a: 1
}));
export { $d_Llivechart_TicTacToe as $d_Llivechart_TicTacToe };
//# sourceMappingURL=livechart.-Tic-Tac-Toe.js.map
