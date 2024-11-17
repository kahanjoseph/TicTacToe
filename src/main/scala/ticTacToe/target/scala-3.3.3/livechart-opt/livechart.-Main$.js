'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00241 from "./livechart.-Main$$anon$1.js";
import * as $j_livechart$002e$002dModal$002dComponent$0024 from "./livechart.-Modal-Component$.js";
import * as $j_livechart$002e$002dPlayer from "./livechart.-Player.js";
import * as $j_livechart$002e$002dTic$002dTac$002dToe from "./livechart.-Tic-Tac-Toe.js";
var $p;
/** @constructor */
function $c_Llivechart_Main$() {
  this.i5 = null;
  this.gB = null;
  this.i6 = null;
  this.eT = null;
  this.i7 = null;
  this.mn = null;
  this.d9 = null;
  this.gA = null;
  this.eU = null;
  $n_Llivechart_Main$ = this;
  var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(3);
  var i = 0;
  while ((i < 3)) {
    var $x_1 = i;
    var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(3);
    var i$1 = 0;
    while ((i$1 < 3)) {
      array$1.a[i$1] = 0;
      i$1 = ((1 + i$1) | 0);
    }
    array.a[$x_1] = array$1;
    i = ((1 + i) | 0);
  }
  this.i5 = array;
  this.gB = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.eK.fW(false);
  this.i6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.eK.fW(false);
  this.eT = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.eK.fW(false);
  this.i7 = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(1, false);
  this.mn = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(2, false);
  this.d9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.eK.fW(new $j_livechart$002e$002dTic$002dTac$002dToe.$c_Llivechart_TicTacToe(this.i5, 0, this.i7, this.mn, this.i7));
  this.gA = "";
  this.eU = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.eK.fW(false);
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$p = $c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $p;
$p.qG = (function(rowIndex, colIndex) {
  if ((!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.eT.b5).D()))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.d9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$1) => _$1.jm(rowIndex, colIndex))));
  }
});
$p.jB = (function(toggle, textOn, textOff, colors) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.nC().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9(("w-40 px-6 py-9 mb-2 text-xl font-semibold shadow-sm " + colors)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().h1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.h8(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(toggle, (!(!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(toggle.b5).D()))));
  }))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().pD(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(toggle.b5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((isOn) => ((!(!isOn)) ? textOn : textOff))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().ee))])));
});
$p.pB = (function() {
  var localOwner = new $j_livechart$002e$002dMain$0024$0024anon$00241.$c_Llivechart_Main$$anon$1();
  var gamingObserver = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.gq.gf(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((v1) => {
    var isGameActive = (!(!v1));
    var player1 = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(1, (!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.gB.b5).D())));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.d9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$3) => new $j_livechart$002e$002dTic$002dTac$002dToe.$c_Llivechart_TicTacToe(this.i5, 0, player1, new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(2, (!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.i6.b5).D()))), player1))));
    if (isGameActive) {
      if ((!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.gB.b5).D()))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.d9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((currentGame) => {
          var move = currentGame.nI();
          return currentGame.jm(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(move, 0) | 0), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(move, 1) | 0));
        })));
      }
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().eh, true);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.eT.b5, gamingObserver, localOwner);
  var currentTurnObserver = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.gq.gf(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((player) => {
    if (((!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.eT.b5).D())) && player.eV)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.d9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((currentGame$1) => {
        var move$1 = currentGame$1.nI();
        return currentGame$1.jm(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(move$1, 0) | 0), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(move$1, 1) | 0));
      })));
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().eh, true);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_BaseObservable__distinct__Lcom_raquo_airstream_core_Observable(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapStream(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_StreamFromSignal(this.d9.b5, true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$4) => _$4.cn)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())), currentTurnObserver, localOwner);
  var gameOverObserver = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.gq.gf(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((v1$2) => {
    var won = (v1$2 | 0);
    if (((won === 1) || (won === 2))) {
      var winner = ((won === 1) ? "X" : "O");
      this.gA = (winner + " has won!!");
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this.eU, true);
    } else if ((won === 3)) {
      this.gA = "Stale Mate";
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this.eU, true);
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().eh, true);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_BaseObservable__distinct__Lcom_raquo_airstream_core_Observable(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.d9.b5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$5) => _$5.eg)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())), gameOverObserver, localOwner);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 my-20"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("col-span-1 grid grid-cols-1"), this.jB(this.gB, "X is set to AI", "X is set to human", "bg-gray-600 text-white hover:bg-gray-900"), this.jB(this.i6, "O is set to AI", "O is set to human", "bg-gray-600 text-white hover:bg-gray-900"), this.jB(this.eT, "End Game", "Start Game", "bg-green-600 text-white hover:bg-green-900")]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("col-span-2"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().iR(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.eT.b5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((isGaming) => ((!(!isGaming)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9(""), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().iR(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.d9.b5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((game) => {
    var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf();
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("size-96 bg-white grid grid-cols-3 bg-red-300");
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s;
    var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().oK(game.bT);
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var i = 0;
    while ((i < xs$1.a.length)) {
      var x1 = i;
      var arg1 = xs$1.a[x1];
      var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
      matchResult4: {
        var $x_1;
        if ((arg1 !== null)) {
          var row = arg1.Q();
          var rowIndex = (arg1.O() | 0);
          var xs$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().oK(row);
          var f = ((rowIndex) => ((x$1$2) => {
            if ((x$1$2 !== null)) {
              var cell = (x$1$2.Q() | 0);
              var colIndex = (x$1$2.O() | 0);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("border-2 border-black flex justify-center items-center"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().h1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.h8(), false, false)).r2(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(rowIndex, colIndex)))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1$2$1) => {
                matchResult1: {
                  if ((x$1$2$1 !== null)) {
                    this.qG((x$1$2$1.Q() | 0), (x$1$2$1.O() | 0));
                    break matchResult1;
                  }
                  throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2$1);
                }
              }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.aH.b9("h-7 w-7 text-center flex items-center text-5xl"), ((cell === 1) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s, "X", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().ee) : ((cell === 2) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s, "O", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().ee) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s, "", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().ee)))])))])));
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
          }))(rowIndex);
          var len = xs$2.a.length;
          var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
          if ((len > 0)) {
            var i$1 = 0;
            if ((xs$2 !== null)) {
              while ((i$1 < len)) {
                var $x_2 = i$1;
                var arg1$1 = xs$2.a[i$1];
                ys.a[$x_2] = f(arg1$1);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
              while ((i$1 < len)) {
                var $x_3 = i$1;
                var arg1$2 = xs$2.a[i$1];
                ys.a[$x_3] = f(arg1$2);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
              while ((i$1 < len)) {
                var $x_4 = i$1;
                var arg1$3 = xs$2.a[i$1];
                ys.a[$x_4] = f(arg1$3);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
              while ((i$1 < len)) {
                var $x_5 = i$1;
                var t = xs$2.a[i$1];
                var lo = t.p;
                var hi = t.r;
                ys.a[$x_5] = f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
              while ((i$1 < len)) {
                var $x_6 = i$1;
                var arg1$4 = xs$2.a[i$1];
                ys.a[$x_6] = f(arg1$4);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
              while ((i$1 < len)) {
                var $x_7 = i$1;
                var arg1$5 = xs$2.a[i$1];
                ys.a[$x_7] = f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$5));
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
              while ((i$1 < len)) {
                var $x_8 = i$1;
                var arg1$6 = xs$2.a[i$1];
                ys.a[$x_8] = f(arg1$6);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
              while ((i$1 < len)) {
                var $x_9 = i$1;
                var arg1$7 = xs$2.a[i$1];
                ys.a[$x_9] = f(arg1$7);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
              while ((i$1 < len)) {
                var $x_10 = i$1;
                var arg1$8 = xs$2.a[i$1];
                ys.a[$x_10] = f(arg1$8);
                i$1 = ((1 + i$1) | 0);
              }
            } else {
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$2);
            }
          }
          var $x_1 = ys;
          break matchResult4;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(arg1);
      }
      var elems = $x_11.oJ($x_1);
      var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), elems.cv);
      while (it.n()) {
        var elem = it.f();
        var unboxedElem = ((elem === null) ? null : elem);
        jsElems.push(unboxedElem);
      }
      i = ((1 + i) | 0);
    }
    return $x_15.aT($x_14.C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_12, new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(jsElems), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((component) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return component;
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())])));
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().gv, (void 0)))]))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().s.bf().aT($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().C(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([])))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().gv, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().iR(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.eU.b5, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((visible) => ((!(!visible)) ? $j_livechart$002e$002dModal$002dComponent$0024.$m_Llivechart_ModalComponent$().pH(this.gA, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this.eU, false);
  })), this.eU.b5) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().gv, (void 0)))])));
});
var $d_Llivechart_Main$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Main$, "livechart.Main$", ({
  eU: 1
}));
export { $d_Llivechart_Main$ as $d_Llivechart_Main$ };
var $n_Llivechart_Main$;
function $m_Llivechart_Main$() {
  if ((!$n_Llivechart_Main$)) {
    $n_Llivechart_Main$ = new $c_Llivechart_Main$();
  }
  return $n_Llivechart_Main$;
}
export { $m_Llivechart_Main$ as $m_Llivechart_Main$ };
//# sourceMappingURL=livechart.-Main$.js.map
