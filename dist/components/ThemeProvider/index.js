"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],l=!0,f=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){f=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n.default.createContext({theme:"light",setTheme:function(){},toggleTheme:function(){},autoTheme:!1,setAutoTheme:function(){}}),l=function(e){var t=e.children,r=e.defaultTheme,o=void 0===r?"light":r,u=e.storageKey,l=void 0===u?"lebify-theme":u,f=e.autoTheme,d=void 0!==f&&f,c=e.morningHour,s=void 0===c?6:c,m=e.eveningHour,h=void 0===m?18:m,g=a(n.default.useState((function(){return"undefined"!=typeof window&&localStorage.getItem(l)||o})),2),v=g[0],y=g[1],p=a(n.default.useState((function(){if("undefined"!=typeof window){var e=localStorage.getItem("".concat(l,"-auto"));return e?JSON.parse(e):d}return d})),2),b=p[0],T=p[1];n.default.useEffect((function(){if(b){var e=function(){var e;y((e=(new Date).getHours())>=s&&e<h?"light":"dark")};e();var t=setInterval(e,6e4);return function(){return clearInterval(t)}}}),[b,s,h]),n.default.useEffect((function(){"undefined"!=typeof window&&localStorage.setItem("".concat(l,"-auto"),JSON.stringify(b))}),[b,l]),n.default.useEffect((function(){document.documentElement.setAttribute("data-theme",v),document.body.setAttribute("data-theme",v),"undefined"==typeof window||b||localStorage.setItem(l,v)}),[v,l,b]);return n.default.createElement(i.Provider,{value:{theme:v,setTheme:y,toggleTheme:function(){b&&T(!1),y((function(e){return"light"===e?"dark":"light"}))},autoTheme:b,setAutoTheme:T}},t)};l.propTypes={children:o.default.node.isRequired,defaultTheme:o.default.oneOf(["light","dark"]),storageKey:o.default.string,autoTheme:o.default.bool,morningHour:o.default.number,eveningHour:o.default.number},exports.ThemeProvider=l,exports.default=l,exports.useTheme=function(){return n.default.useContext(i)};
//# sourceMappingURL=index.js.map
