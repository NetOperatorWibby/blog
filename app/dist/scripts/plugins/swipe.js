/* !
 * Swipe 2.2.10
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/
!function(a,b) {"function" == typeof define && define.amd ? define([],function() {return a.Swipe = b(),a.Swipe;}) : "object" == typeof module && module.exports ? module.exports = b() : a.Swipe = b();}(this,function() {function Swipe(c,d) {"use strict"; function e() {I.addEventListener ? (N.removeEventListener("touchstart",R,!1),N.removeEventListener("mousedown",R,!1),N.removeEventListener("webkitTransitionEnd",R,!1),N.removeEventListener("msTransitionEnd",R,!1),N.removeEventListener("oTransitionEnd",R,!1),N.removeEventListener("otransitionend",R,!1),N.removeEventListener("transitionend",R,!1),a.removeEventListener("resize",R,!1)) : a.onresize = null;}function f() {I.addEventListener ? (I.touch && N.addEventListener("touchstart",R,!1),d.draggable && N.addEventListener("mousedown",R,!1),I.transitions && (N.addEventListener("webkitTransitionEnd",R,!1),N.addEventListener("msTransitionEnd",R,!1),N.addEventListener("oTransitionEnd",R,!1),N.addEventListener("otransitionend",R,!1),N.addEventListener("transitionend",R,!1)),a.addEventListener("resize",R,!1)) : a.onresize = Q;}function g(a) {var b = a.cloneNode(!0);

  N.appendChild(b),b.setAttribute("data-cloned",!0),b.removeAttribute("id");}function h() {J = N.children,M = J.length; for(var a = 0; a < J.length; a++)J[a].getAttribute("data-cloned") && M--; J.length < 2 && (d.continuous = !1),I.transitions && d.continuous && J.length < 3 && (g(J[0]),g(J[1]),J = N.children),K = new Array(J.length),L = c.getBoundingClientRect().width || c.offsetWidth,N.style.width = J.length * L * 2 + "px"; for(var b = J.length; b--;) {var h = J[b];

  h.style.width = L + "px",h.setAttribute("data-index",b),I.transitions && (h.style.left = b * -L + "px",p(b,O > b ? -L : O < b ? L : 0,0));}d.continuous && I.transitions && (p(m(O - 1),-L,0),p(m(O + 1),L,0)),I.transitions || (N.style.left = O * -L + "px"),c.style.visibility = "visible",e(),f();}function i() {E || (d.continuous ? o(O - 1) : O && o(O - 1));}function j() {E || (d.continuous ? o(O + 1) : O < J.length - 1 && o(O + 1));}function k(a,b,c) {d.callback && d.callback(a,b,c);}function l(a,b) {d.transitionEnd && d.transitionEnd(a,b);}function m(a) {return(J.length + a % J.length) % J.length;}function n() {var a = O;

  return a >= M && (a -= M),a;}function o(a,b) {if(a = "number" != typeof a ? parseInt(a,10) : a,O !== a) {if(I.transitions) {var c = Math.abs(O - a) / (O - a);

  if(d.continuous) {var e = c;

    c = -K[m(a)] / L,c !== e && (a = -c * J.length + a);}for(var f = Math.abs(O - a) - 1; f--;)p(m((a > O ? a : O) - f - 1),L * c,0); a = m(a),p(O,L * c,b || P),p(a,0,b || P),d.continuous && p(m(a - c),-L * c,0);}else a = m(a),r(O * -L,a * -L,b || P); O = a,G(function() {k(n(),J[O],c);});}}function p(a,b,c) {q(a,b,c),K[a] = b;}function q(a,b,c) {var d = J[a]; var e = d && d.style;

  e && (e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = c + "ms",e.webkitTransform = "translate(" + b + "px,0)translateZ(0)",e.msTransform = e.MozTransform = e.OTransform = "translateX(" + b + "px)");}function r(a,b,c) {if(!c)return void (N.style.left = b + "px"); var e = +new Date; var f = setInterval(function() {var g = +new Date - e;

  if(g > c)return N.style.left = b + "px",(D || d.autoRestart) && u(),l(n(),J[O]),void clearInterval(f); N.style.left = (b - a) * (Math.floor(g / c * 100) / 100) + a + "px";},4);}function s() {(D = d.auto || 0) && (A = setTimeout(j,D));}function t() {D = 0,clearTimeout(A);}function u() {t(),s();}function v() {t(),E = !0;}function w() {E = !1,u();}function x(a) {return/^mouse/.test(a.type);}function y() {t(),c.style.visibility = "",N.style.width = "",N.style.left = ""; for(var a = J.length; a--;) {I.transitions && q(a,0,0); var b = J[a];

  if(b.getAttribute("data-cloned")) {b.parentElement.removeChild(b);}b.style.width = "",b.style.left = "",b.style.webkitTransitionDuration = b.style.MozTransitionDuration = b.style.msTransitionDuration = b.style.OTransitionDuration = b.style.transitionDuration = "",b.style.webkitTransform = b.style.msTransform = b.style.MozTransform = b.style.OTransform = "";}e(),Q.cancel();}d = d || {}; var z; var A; var B = {}; var C = {}; var D = d.auto || 0; var E = !1; var F = function() {}; var G = function(a) {setTimeout(a || F,0);}; var H = function(a,b) {function c() {e && clearTimeout(e);}function d() {var d = this; var f = arguments;

  c(),e = setTimeout(function() {e = null,a.apply(d,f);},b);}b = b || 100; var e = null;

return d.cancel = c,d;}; var I = { addEventListener:!!a.addEventListener,touch:"ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch,transitions:function(a) {var b = ["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];

  for(var c in b)if(void 0 !== a.style[b[c]])return!0; return!1;}(b.createElement("swipe")) };

if(c) {var J; var K; var L; var M; var N = c.children[0]; var O = parseInt(d.startSlide,10) || 0; var P = d.speed || 300;

  d.continuous = void 0 === d.continuous || d.continuous,d.autoRestart = void 0 !== d.autoRestart && d.autoRestart; var Q = H(h); var R = { handleEvent:function(a) {if(!E) {switch(a.type) {case"mousedown": case"touchstart": this.start(a); break; case"mousemove": case"touchmove": this.move(a); break; case"mouseup": case"mouseleave": case"touchend": this.end(a); break; case"webkitTransitionEnd": case"msTransitionEnd": case"oTransitionEnd": case"otransitionend": case"transitionend": this.transitionEnd(a); break; case"resize": Q();}d.stopPropagation && a.stopPropagation();}},start:function(a) {var b;

    x(a) ? (b = a,a.preventDefault()) : b = a.touches[0],B = { x:b.pageX,y:b.pageY,time:+new Date },z = void 0,C = {},x(a) ? (N.addEventListener("mousemove",this,!1),N.addEventListener("mouseup",this,!1),N.addEventListener("mouseleave",this,!1)) : (N.addEventListener("touchmove",this,!1),N.addEventListener("touchend",this,!1));},move:function(a) {var b;

    if(x(a))b = a; else{if(a.touches.length > 1 || a.scale && 1 !== a.scale)return; d.disableScroll && a.preventDefault(),b = a.touches[0];}C = { x:b.pageX - B.x,y:b.pageY - B.y },void 0 === z && (z = !!(z || Math.abs(C.x) < Math.abs(C.y))),z || (a.preventDefault(),t(),d.continuous ? (q(m(O - 1),C.x + K[m(O - 1)],0),q(O,C.x + K[O],0),q(m(O + 1),C.x + K[m(O + 1)],0)) : (C.x = C.x / (!O && C.x > 0 || O === J.length - 1 && C.x < 0 ? Math.abs(C.x) / L + 1 : 1),q(O - 1,C.x + K[O - 1],0),q(O,C.x + K[O],0),q(O + 1,C.x + K[O + 1],0)));},end:function(a) {var b = +new Date - B.time; var c = Number(b) < 250 && Math.abs(C.x) > 20 || Math.abs(C.x) > L / 2; var e = !O && C.x > 0 || O === J.length - 1 && C.x < 0;

    d.continuous && (e = !1); var f = Math.abs(C.x) / C.x;

    z || (c && !e ? (f < 0 ? (d.continuous ? (p(m(O - 1),-L,0),p(m(O + 2),L,0)) : p(O - 1,-L,0),p(O,K[O] - L,P),p(m(O + 1),K[m(O + 1)] - L,P),O = m(O + 1)) : (d.continuous ? (p(m(O + 1),L,0),p(m(O - 2),-L,0)) : p(O + 1,L,0),p(O,K[O] + L,P),p(m(O - 1),K[m(O - 1)] + L,P),O = m(O - 1)),k(n(),J[O],f)) : d.continuous ? (p(m(O - 1),-L,P),p(O,0,P),p(m(O + 1),L,P)) : (p(O - 1,-L,P),p(O,0,P),p(O + 1,L,P))),x(a) ? (N.removeEventListener("mousemove",R,!1),N.removeEventListener("mouseup",R,!1),N.removeEventListener("mouseleave",R,!1)) : (N.removeEventListener("touchmove",R,!1),N.removeEventListener("touchend",R,!1));},transitionEnd:function(a) {parseInt(a.target.getAttribute("data-index"),10) === O && ((D || d.autoRestart) && u(),l(n(),J[O]));} };

  return h(),s(),{ setup:h,slide:function(a,b) {t(),o(a,b);},prev:function() {t(),i();},next:function() {t(),j();},restart:u,stop:t,getPos:n,disable:v,enable:w,getNumSlides:function() {return M;},kill:y };}}var a = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this; var b = a.document;

return(a.jQuery || a.Zepto) && function(a) {a.fn.Swipe = function(b) {return this.each(function() {a(this).data("Swipe",new Swipe(a(this)[0],b));});};}(a.jQuery || a.Zepto),Swipe;});