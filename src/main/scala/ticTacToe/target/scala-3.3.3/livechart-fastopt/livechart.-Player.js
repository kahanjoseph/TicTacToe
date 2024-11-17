'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Player(turn, isAI) {
  this.Llivechart_Player__f_turn = 0;
  this.Llivechart_Player__f_isAI = false;
  this.Llivechart_Player__f_turn = turn;
  this.Llivechart_Player__f_isAI = isAI;
  var requirement = ((turn === 1) || (turn === 2));
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), "requirement failed: Turn must be 1 (X) or 2 (O)");
  }
}
export { $c_Llivechart_Player as $c_Llivechart_Player };
$c_Llivechart_Player.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Player.prototype.constructor = $c_Llivechart_Player;
/** @constructor */
function $h_Llivechart_Player() {
}
export { $h_Llivechart_Player as $h_Llivechart_Player };
$h_Llivechart_Player.prototype = $c_Llivechart_Player.prototype;
$c_Llivechart_Player.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Player.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("Player");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Llivechart_Player__f_turn;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = (this.Llivechart_Player__f_isAI ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2);
});
$c_Llivechart_Player.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Player)) {
    var x$0$2 = $as_Llivechart_Player(x$0);
    return (((this.Llivechart_Player__f_turn === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Player__f_turn) && (this.Llivechart_Player__f_isAI === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Player__f_isAI)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Llivechart_Player.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Player.prototype.productArity__I = (function() {
  return 2;
});
$c_Llivechart_Player.prototype.productPrefix__T = (function() {
  return "Player";
});
$c_Llivechart_Player.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Llivechart_Player__f_turn;
  }
  if ((n === 1)) {
    return this.Llivechart_Player__f_isAI;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
$c_Llivechart_Player.prototype.playerToString__T = (function() {
  return ((this.Llivechart_Player__f_turn === 1) ? "X" : "O");
});
function $as_Llivechart_Player(obj) {
  return (((obj instanceof $c_Llivechart_Player) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Player"));
}
export { $as_Llivechart_Player as $as_Llivechart_Player };
function $isArrayOf_Llivechart_Player(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Player)));
}
export { $isArrayOf_Llivechart_Player as $isArrayOf_Llivechart_Player };
function $asArrayOf_Llivechart_Player(obj, depth) {
  return (($isArrayOf_Llivechart_Player(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Player;", depth));
}
export { $asArrayOf_Llivechart_Player as $asArrayOf_Llivechart_Player };
var $d_Llivechart_Player = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Player, "livechart.Player", ({
  Llivechart_Player: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Player as $d_Llivechart_Player };
//# sourceMappingURL=livechart.-Player.js.map
