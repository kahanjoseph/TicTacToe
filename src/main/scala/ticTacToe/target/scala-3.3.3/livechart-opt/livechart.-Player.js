'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_Player(turn, isAI) {
  this.da = 0;
  this.eV = false;
  this.da = turn;
  this.eV = isAI;
  if ((!((turn === 1) || (turn === 2)))) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), "requirement failed: Turn must be 1 (X) or 2 (O)");
  }
}
export { $c_Llivechart_Player as $c_Llivechart_Player };
$p = $c_Llivechart_Player.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_Player;
/** @constructor */
function $h_Llivechart_Player() {
}
export { $h_Llivechart_Player as $h_Llivechart_Player };
$h_Llivechart_Player.prototype = $p;
$p.bh = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("Player"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, this.da);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().c(acc, (this.eV ? 1231 : 1237));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().A(acc, 2);
});
$p.k = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Llivechart_Player) && ((this.da === x$0.da) && (this.eV === x$0.eV))));
});
$p.w = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().fR(this);
});
$p.aZ = (function() {
  return 2;
});
$p.b1 = (function() {
  return "Player";
});
$p.b0 = (function(n) {
  if ((n === 0)) {
    return this.da;
  }
  if ((n === 1)) {
    return this.eV;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.oo = (function() {
  return ((this.da === 1) ? "X" : "O");
});
function $isArrayOf_Llivechart_Player(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
export { $isArrayOf_Llivechart_Player as $isArrayOf_Llivechart_Player };
var $d_Llivechart_Player = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Player, "livechart.Player", ({
  bu: 1,
  d: 1,
  E: 1,
  a: 1
}));
export { $d_Llivechart_Player as $d_Llivechart_Player };
//# sourceMappingURL=livechart.-Player.js.map
