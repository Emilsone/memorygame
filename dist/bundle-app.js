!function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=class{constructor(){this.cardDeck=[{symbol:"fa-diamond",visible:!1,matched:!1},{symbol:"fa-diamond",visible:!1,matched:!1},{symbol:"fa-paper-plane-o",visible:!1,matched:!1},{symbol:"fa-paper-plane-o",visible:!1,matched:!1},{symbol:"fa-anchor",visible:!1,matched:!1},{symbol:"fa-anchor",visible:!1,matched:!1},{symbol:"fa-bolt",visible:!1,matched:!1},{symbol:"fa-bolt",visible:!1,matched:!1},{symbol:"fa-cube",visible:!1,matched:!1},{symbol:"fa-cube",visible:!1,matched:!1},{symbol:"fa-leaf",visible:!1,matched:!1},{symbol:"fa-leaf",visible:!1,matched:!1},{symbol:"fa-bicycle",visible:!1,matched:!1},{symbol:"fa-bicycle",visible:!1,matched:!1},{symbol:"fa-bomb",visible:!1,matched:!1},{symbol:"fa-bomb",visible:!1,matched:!1}]}getCardDeck(){return this.cardDeck}shuffle(e){for(var t,r,o=e.length;0!==o;)r=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[r],e[r]=t;return e}}},function(e,t,r){"use strict";(function(e){var t=r(0),o=r.n(t);e.exports=class{constructor(e){this.cardDeck=e,this.gameDeck=[]}startNewGame(){this.gameDeck=o.a.shuffle(this.cardDeck.getCardDeck())}}}).call(this,r(2)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o);let n=new(r(1).default)(l),l=new a.a;n.startNewGame(),console.log("Results of shuffle: ",l.gameDeck)},function(e,t,r){e.exports=r(3)}]);