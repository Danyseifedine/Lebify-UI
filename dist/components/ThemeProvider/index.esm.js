import e from"react";import t from"prop-types";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,f=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){f=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=["light","dark"],a=e.createContext({theme:"light",setTheme:function(){},toggleTheme:function(){},autoTheme:!1,setAutoTheme:function(){},availableThemes:u}),l=function(){var t=e.useContext(a);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},f=function(t){var r=t.children,n=t.defaultTheme,l=void 0===n?"light":n,f=t.identifier,c=void 0===f?"lebify-theme":f,m=t.autoTheme,s=void 0!==m&&m,d=t.morningHour,h=void 0===d?6:d,v=t.eveningHour,y=void 0===v?18:v,b=t.themes,g=void 0===b?u:b,p=e.useMemo((function(){var e=i(new Set(g));return u.forEach((function(t){e.includes(t)||e.push(t)})),e.includes(l)||(console.warn('Default theme "'.concat(l,'" not found in themes. Adding it.')),e.push(l)),e}),[g,l]),T=o(e.useState((function(){if("undefined"!=typeof window){var e=localStorage.getItem(c);return e&&p.includes(e)?e:l}return l})),2),w=T[0],A=T[1],S=o(e.useState(s),2),I=S[0],E=S[1];e.useEffect((function(){if(I){var e=function(){var e=(new Date).getHours();A(e>=h&&e<y?"light":"dark")};e();var t=setInterval(e,6e4);return function(){return clearInterval(t)}}}),[I,h,y]),e.useEffect((function(){"undefined"!=typeof window&&(document.documentElement.setAttribute("data-theme",w),document.body.setAttribute("data-theme",w),I||localStorage.setItem(c,w))}),[w,c,I]);var j=e.useCallback((function(){I&&E(!1),A((function(e){var t=(p.indexOf(e)+1)%p.length;return p[t]}))}),[I,p]),x=e.useMemo((function(){return{theme:w,setTheme:A,toggleTheme:j,autoTheme:I,setAutoTheme:E,availableThemes:p}}),[w,j,I,p]);return e.createElement(a.Provider,{value:x},r)};f.propTypes={children:t.node.isRequired,defaultTheme:t.string,identifier:t.string,autoTheme:t.bool,morningHour:t.number,eveningHour:t.number,themes:t.arrayOf(t.string)};export{f as ThemeProvider,f as default,l as useTheme};
//# sourceMappingURL=index.esm.js.map
