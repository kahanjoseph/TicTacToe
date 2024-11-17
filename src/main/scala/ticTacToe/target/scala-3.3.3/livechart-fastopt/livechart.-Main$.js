'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00241 from "./livechart.-Main$$anon$1.js";
import * as $j_livechart$002e$002dModal$002dComponent$0024 from "./livechart.-Modal-Component$.js";
import * as $j_livechart$002e$002dPlayer from "./livechart.-Player.js";
import * as $j_livechart$002e$002dTic$002dTac$002dToe from "./livechart.-Tic-Tac-Toe.js";
/** @constructor */
function $c_Llivechart_Main$() {
  this.Llivechart_Main$__f_emptyBoard = null;
  this.Llivechart_Main$__f_xVar = null;
  this.Llivechart_Main$__f_oVar = null;
  this.Llivechart_Main$__f_gaming = null;
  this.Llivechart_Main$__f_playerX = null;
  this.Llivechart_Main$__f_playerO = null;
  this.Llivechart_Main$__f_gameSignal = null;
  this.Llivechart_Main$__f_modalTitle = null;
  this.Llivechart_Main$__f_isModalVisible = null;
  $n_Llivechart_Main$ = this;
  var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(3);
  var i = 0;
  while ((i < 3)) {
    var $x_1 = i;
    var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(3);
    var i$1 = 0;
    while ((i$1 < 3)) {
      array$1.set(i$1, 0);
      i$1 = ((1 + i$1) | 0);
    }
    array.set($x_1, array$1);
    i = ((1 + i) | 0);
  }
  this.Llivechart_Main$__f_emptyBoard = array;
  this.Llivechart_Main$__f_xVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  this.Llivechart_Main$__f_oVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  this.Llivechart_Main$__f_gaming = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  this.Llivechart_Main$__f_playerX = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(1, false);
  this.Llivechart_Main$__f_playerO = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(2, false);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var;
  var board = this.Llivechart_Main$__f_emptyBoard;
  var player1 = this.Llivechart_Main$__f_playerX;
  var player2 = this.Llivechart_Main$__f_playerO;
  var currentTurn = this.Llivechart_Main$__f_playerX;
  this.Llivechart_Main$__f_gameSignal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__O__Lcom_raquo_airstream_state_Var(new $j_livechart$002e$002dTic$002dTac$002dToe.$c_Llivechart_TicTacToe(board, 0, player1, player2, currentTurn));
  this.Llivechart_Main$__f_modalTitle = "";
  this.Llivechart_Main$__f_isModalVisible = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$.prototype.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $c_Llivechart_Main$.prototype;
$c_Llivechart_Main$.prototype.handleCellClick__I__I__V = (function(rowIndex, colIndex) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gaming);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lcom_raquo_airstream_state_SourceVar__f_signal);
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$2)).get__O())) {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$1) => {
      var _$1$1 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(_$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1$1).makeMove__I__I__Llivechart_TicTacToe(rowIndex, colIndex);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$4, mod);
  }
});
$c_Llivechart_Main$.prototype.toggleElement__Lcom_raquo_airstream_state_Var__T__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(toggle, textOn, textOff, colors) {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter(("w-40 px-6 py-9 mb-2 text-xl font-semibold shadow-sm " + colors));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$2) => {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toggle);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var newToggleState = (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$4)).get__O()));
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toggle);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$5, newToggleState);
  }));
  var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$6, onNext);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toggle).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((isOn) => {
    var isOn$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(isOn);
    return (isOn$1 ? textOn : textOff);
  }));
  var textSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$7, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_inserters_DynamicInserter(textSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable)])));
});
$c_Llivechart_Main$.prototype.appElement__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var localOwner = new $j_livechart$002e$002dMain$0024$0024anon$00241.$c_Llivechart_Main$$anon$1();
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Observer);
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((v1) => {
    var isGameActive = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(v1);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_xVar);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var isAI = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$3)).get__O());
    var player1 = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(1, isAI);
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$3) => {
      $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(_$3);
      var board = this.Llivechart_Main$__f_emptyBoard;
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_oVar);
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.Lcom_raquo_airstream_state_SourceVar__f_signal);
      var isAI$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$6)).get__O());
      var player2 = new $j_livechart$002e$002dPlayer.$c_Llivechart_Player(2, isAI$1);
      return new $j_livechart$002e$002dTic$002dTac$002dToe.$c_Llivechart_TicTacToe(board, 0, player1, player2, player1);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$9, mod);
    if (isGameActive) {
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_xVar);
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$10.Lcom_raquo_airstream_state_SourceVar__f_signal);
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$11)).get__O())) {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal);
        var mod$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((currentGame) => {
          var currentGame$1 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(currentGame);
          var move = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentGame$1).computerMove__sci_List();
          var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentGame$1);
          var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(move);
          var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$12, 0));
          var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(move);
          return $x_2.makeMove__I__I__Llivechart_TicTacToe($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$13, 1)));
        }));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$14, mod$1);
      }
    }
  }));
  var gamingObserver = this$15.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gaming).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$16, gamingObserver, localOwner);
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Observer);
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((player) => {
    var player$1 = $j_livechart$002e$002dPlayer.$as_Llivechart_Player(player);
    var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gaming);
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$17.Lcom_raquo_airstream_state_SourceVar__f_signal);
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$18)).get__O()) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(player$1).Llivechart_Player__f_isAI)) {
      var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal);
      var mod$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((currentGame$2) => {
        var currentGame$3 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(currentGame$2);
        var move$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentGame$3).computerMove__sci_List();
        var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentGame$3);
        var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(move$1);
        var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$19, 0));
        var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(move$1);
        return $x_4.makeMove__I__I__Llivechart_TicTacToe($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$20, 1)));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$21, mod$2);
    }
  }));
  var currentTurnObserver = this$22.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var this$24 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_StreamFromSignal(this$23, true);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$4) => {
    var _$4$1 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(_$4);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$4$1).Llivechart_TicTacToe__f_currentTurn;
  }));
  var this$25 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapStream(this$24, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_BaseObservable__distinct__Lcom_raquo_airstream_core_Observable(this$25)), currentTurnObserver, localOwner);
  var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Observer);
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((v1$2) => {
    var won = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(v1$2);
    if (((won === 1) || (won === 2))) {
      var winner = ((won === 1) ? "X" : "O");
      this.Llivechart_Main$__f_modalTitle = (winner + " has won!!");
      var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_isModalVisible);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$26, true);
    } else if ((won === 3)) {
      this.Llivechart_Main$__f_modalTitle = "Stale Mate";
      var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_isModalVisible);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$27, true);
    }
  }));
  var gameOverObserver = this$28.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((_$5) => {
    var _$5$1 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(_$5);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$5$1).Llivechart_TicTacToe__f_won;
  }));
  var this$30 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$29, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_BaseObservable__distinct__Lcom_raquo_airstream_core_Observable(this$30)), gameOverObserver, localOwner);
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 my-20");
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("col-span-1 grid grid-cols-1"), this.toggleElement__Lcom_raquo_airstream_state_Var__T__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(this.Llivechart_Main$__f_xVar, "X is set to AI", "X is set to human", "bg-gray-600 text-white hover:bg-gray-900"), this.toggleElement__Lcom_raquo_airstream_state_Var__T__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(this.Llivechart_Main$__f_oVar, "O is set to AI", "O is set to human", "bg-gray-600 text-white hover:bg-gray-900"), this.toggleElement__Lcom_raquo_airstream_state_Var__T__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(this.Llivechart_Main$__f_gaming, "End Game", "Start Game", "bg-green-600 text-white hover:bg-green-900")])));
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("col-span-2");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gaming).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((isGaming) => {
    var isGaming$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(isGaming);
    if (isGaming$1) {
      var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("");
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_gameSignal).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((game) => {
        var game$1 = $j_livechart$002e$002dTic$002dTac$002dToe.$as_Llivechart_TicTacToe(game);
        var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("size-96 bg-white grid grid-cols-3 bg-red-300");
        var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(game$1).Llivechart_TicTacToe__f_board;
        var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(xs);
        var capacity = 0;
        var size = 0;
        var jsElems = null;
        capacity = 0;
        size = 0;
        jsElems = [];
        var i = 0;
        while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length)) {
          var x1 = i;
          var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).get(x1);
          var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(arg1);
          matchResult4: {
            var arg1$9;
            if ((x$1 !== null)) {
              var row = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1)._1__O(), 1);
              var rowIndex = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1)._2__O());
              var xs$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(row);
              var f = ((rowIndex) => ((x$1$2) => {
                var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
                if ((x$1$1 !== null)) {
                  var cell = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
                  var colIndex = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
                  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
                  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
                  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("border-2 border-black flex justify-center items-center");
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
                  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
                  var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapTo__F0__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(rowIndex, colIndex)))));
                  var onNext$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((x$1$2$1) => {
                    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2$1);
                    matchResult1: {
                      if ((x$1$3 !== null)) {
                        var ri = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
                        var ci = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
                        this.handleCellClick__I__I__V(ri, ci);
                        break matchResult1;
                      }
                      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
                    }
                  }));
                  var $x_10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$42, onNext$3);
                  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
                  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
                  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("h-7 w-7 text-center flex items-center text-5xl");
                  if ((cell === 1)) {
                    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
                    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
                    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$43, "X", r);
                  } else if ((cell === 2)) {
                    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
                    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
                    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$44, "O", r$1);
                  } else {
                    var this$45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
                    var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
                    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$45, "", r$2);
                  }
                  return $x_13.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_11, $x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_7, $x_6])))])));
                }
                throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
              }))(rowIndex);
              var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$2).u.length;
              var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(len);
              if ((len > 0)) {
                var i$1 = 0;
                if ((xs$2 !== null)) {
                  while ((i$1 < len)) {
                    var $x_14 = i$1;
                    var arg1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$2).get(i$1);
                    ys.set($x_14, f(arg1$1));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
                  var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_15 = i$1;
                    var arg1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i$1);
                    ys.set($x_15, f(arg1$2));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
                  var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_16 = i$1;
                    var arg1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i$1);
                    ys.set($x_16, f(arg1$3));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
                  var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_17 = i$1;
                    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i$1);
                    var lo = t.RTLong__f_lo;
                    var hi = t.RTLong__f_hi;
                    ys.set($x_17, f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
                  var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_18 = i$1;
                    var arg1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i$1);
                    ys.set($x_18, f(arg1$4));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
                  var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_19 = i$1;
                    var arg1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i$1);
                    ys.set($x_19, f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(arg1$5)));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
                  var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_20 = i$1;
                    var arg1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i$1);
                    ys.set($x_20, f(arg1$6));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
                  var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_21 = i$1;
                    var arg1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i$1);
                    ys.set($x_21, f(arg1$7));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else if ((xs$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
                  var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs$2, 1);
                  while ((i$1 < len)) {
                    var $x_22 = i$1;
                    var arg1$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i$1);
                    ys.set($x_22, f(arg1$8));
                    i$1 = ((1 + i$1) | 0);
                  }
                } else {
                  throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$2);
                }
              }
              var arg1$9 = ys;
              break matchResult4;
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
          }
          var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(arg1$9);
          var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(elems);
          var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), this$49.scm_ArraySeq$ofRef__f_array);
          while (it.hasNext__Z()) {
            var elem = it.next__O();
            var unboxedElem = ((elem === null) ? null : elem);
            jsElems.push(unboxedElem);
          }
          i = ((1 + i) | 0);
        }
        var modifiers = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(jsElems);
        var asModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((component) => {
          var component$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(component);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable;
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$3);
          return component$1;
        }));
        var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$();
        return $x_25.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_23, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$52, modifiers, asModifier, renderableSeq)])));
      }));
      var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$53, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      return $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_26, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
    } else {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
    }
  }));
  var childSource$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$55, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_5 = $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_isModalVisible).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1(((visible) => {
    var visible$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(visible);
    return (visible$1 ? $j_livechart$002e$002dModal$002dComponent$0024.$m_Llivechart_ModalComponent$().apply__T__F0__Lcom_raquo_airstream_core_Signal__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this.Llivechart_Main$__f_modalTitle, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0((() => {
      var this$57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_isModalVisible);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$57, false);
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_isModalVisible).Lcom_raquo_airstream_state_SourceVar__f_signal) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
  }));
  var childSource$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$59, project$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_35.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_34.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_33, $x_32, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
var $d_Llivechart_Main$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$, "livechart.Main$", ({
  Llivechart_Main$: 1
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
