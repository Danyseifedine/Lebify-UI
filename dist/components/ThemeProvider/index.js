"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,l,a=[],i=!0,f=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=u.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){f=!0,o=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n.default.createContext({theme:"light",setTheme:function(){},toggleTheme:function(){}}),i=function(e){var t=e.children,r=e.defaultTheme,o=void 0===r?"light":r,u=e.storageKey,i=void 0===u?"lebify-theme":u,f=l(n.default.useState((function(){return"undefined"!=typeof window&&localStorage.getItem(i)||o})),2),c=f[0],d=f[1];n.default.useEffect((function(){document.documentElement.setAttribute("data-theme",c),document.body.setAttribute("data-theme",c),"undefined"!=typeof window&&localStorage.setItem(i,c),console.log("Theme changed to:",c)}),[c,i]);return n.default.createElement(a.Provider,{value:{theme:c,setTheme:d,toggleTheme:function(){d((function(e){var t="light"===e?"dark":"light";return console.log("Toggling theme from",e,"to",t),t}))}}},t)};i.propTypes={children:o.default.node.isRequired,defaultTheme:o.default.oneOf(["light","dark"]),storageKey:o.default.string},exports.ThemeProvider=i,exports.default=i,exports.useTheme=function(){return n.default.useContext(a)};
//# sourceMappingURL=index.js.map
