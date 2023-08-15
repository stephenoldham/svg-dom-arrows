!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("SvgDomArrows",[],o):"object"==typeof exports?exports.SvgDomArrows=o():t.SvgDomArrows=o()}(this,(()=>(()=>{"use strict";var t={312:(t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.SVGNS=void 0,o.SVGNS="http://www.w3.org/2000/svg"},607:function(t,o,n){var e=this&&this.__createBinding||(Object.create?function(t,o,n,e){void 0===e&&(e=n);var i=Object.getOwnPropertyDescriptor(o,n);i&&!("get"in i?!o.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return o[n]}}),Object.defineProperty(t,e,i)}:function(t,o,n,e){void 0===e&&(e=n),t[e]=o[n]}),i=this&&this.__exportStar||function(t,o){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(o,n)||e(o,t,n)};Object.defineProperty(o,"__esModule",{value:!0}),i(n(909),o),i(n(312),o)},293:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),s=this&&this.__spreadArray||function(t,o,n){if(n||2===arguments.length)for(var e,i=0,s=o.length;i<s;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return t.concat(e||Array.prototype.slice.call(o))};Object.defineProperty(o,"__esModule",{value:!0}),o.ArcPath=void 0;var r=function(t){function o(o){return t.call(this,o)||this}return i(o,t),o.prototype.getPath=function(){var t=this.getSVGProportions(),o=t.width,n=t.height,e=t.start,i=t.end,r=e.x>i.x?o:0,a=e.y>i.y?n:0,c=o-r,h=n-a,p=s(s([{x:r,y:a}],[{x:Math.abs(r-.2*(r+c)),y:Math.abs(a-.6*(a+h))}],!1),[{x:c,y:h}],!1);return this.svgPath(p)},o.prototype.svgPath=function(t){return"\n    M ".concat(t[0].x,",").concat(t[0].y," \n    C ").concat(t[1].x,",").concat(t[1].y," ").concat(t[1].x,",").concat(t[1].y,"\n    ").concat(t[2].x,",").concat(t[2].y,"\n    ")},o}(n(565).Path);o.ArcPath=r},972:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),s=this&&this.__spreadArray||function(t,o,n){if(n||2===arguments.length)for(var e,i=0,s=o.length;i<s;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return t.concat(e||Array.prototype.slice.call(o))};Object.defineProperty(o,"__esModule",{value:!0}),o.CurvyPath=void 0;var r=function(t){function o(o){return t.call(this,o)||this}return i(o,t),o.prototype.getPath=function(){var t=this.getSVGProportions(),o=t.width,n=t.height,e=t.start,i=t.end;console.log(this.options.start,this.options.end);var r=e.x>i.x?o:0,a=e.y>i.y?n:0,c=o-r,h=n-a,p=s(s([{x:r,y:a}],[{x:Math.abs(r-.5*(r+c)),y:a},{x:Math.abs(r-.5*(r+c)),y:Math.abs(a-.5*(a+h))},{x:Math.abs(r-.5*(r+c)),y:h}],!1),[{x:c,y:h}],!1);return this.svgPath(p)},o.prototype.svgPath=function(t){return"\n    M ".concat(t[0].x,",").concat(t[0].y,"\n    C ").concat(t[1].x,",").concat(t[1].y," ").concat(t[1].x,",").concat(t[1].y," ").concat(t[2].x,",").concat(t[2].y,"\n    C ").concat(t[3].x,",").concat(t[3].y," ").concat(t[3].x,",").concat(t[3].y," ").concat(t[4].x,",").concat(t[4].y,"\n    ")},o}(n(565).Path);o.CurvyPath=r},691:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(o,"__esModule",{value:!0}),o.LinePath=void 0;var s=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return i(o,t),o.prototype.getPath=function(){var t=this.getSVGProportions(),o=t.width,n=t.height,e=t.start,i=t.end,s=e.x>i.x?o:0,r=e.y>i.y?n:0,a=[{x:s,y:r},{x:o-s,y:n-r}];return this.svgPath(a)},o.prototype.svgPath=function(t){return"M ".concat(t[0].x,",").concat(t[0].y," ").concat(t[1].x,",").concat(t[1].y)},o}(n(565).Path);o.LinePath=s},565:(t,o,n)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Path=void 0;var e=n(312),i=function(){function t(t){this.options=Object.assign(t),this.startBbox=this.options.start.element.getBoundingClientRect(),this.endBbox=this.options.end.element.getBoundingClientRect(),t.start.position||(this.options.start.position={top:0,left:0}),t.end.position||(this.options.end.position={top:0,left:0}),this.options.start.position.offsetX=this.options.start.position.left*this.startBbox.width,this.options.start.position.offsetY=this.options.start.position.top*this.startBbox.height,this.options.end.position.offsetX=this.options.end.position.left*this.endBbox.width,this.options.end.position.offsetY=this.options.end.position.top*this.endBbox.height,t.svgPath&&(this.svgPath=t.svgPath),this.options.manualRender||this.render()}return t.prototype.render=function(){return this.containerDiv=document.createElement("div"),this.svgElement=document.createElementNS(e.SVGNS,"svg"),this.svgPathLine=document.createElementNS(e.SVGNS,"path"),this.options.customClass&&this.setCustomClass(),this.options.appendTo&&this.options.appendTo.appendChild(this.containerDiv),this.options.markers&&this.setPathMarkers(),this.containerDiv.appendChild(this.svgElement),this.svgElement.appendChild(this.svgPathLine),this.setDivAttrs(),this.setSvgAttrs(),this.svgPathLine.setAttribute("d",this.getPath()),this.options.debug&&(this.svgElement.style.background="rgba(128,0,0,.2)",this.containerDiv.classList.add("debug"),this.containerDiv.style.background="rgba(128,128,0,.2)"),this.svgPathLine.setAttribute("style",this.options.style),{container:this.containerDiv,svg:this.svgElement,path:this.svgPathLine,defs:this.defs}},t.prototype.recalculate=function(){this.redraw()},t.prototype.redraw=function(){this.startBbox=this.options.start.element.getBoundingClientRect(),this.endBbox=this.options.end.element.getBoundingClientRect(),this.options.start.position.offsetX=this.options.start.position.left*this.startBbox.width,this.options.start.position.offsetY=this.options.start.position.top*this.startBbox.height,this.options.end.position.offsetX=this.options.end.position.left*this.endBbox.width,this.options.end.position.offsetY=this.options.end.position.top*this.endBbox.height,this.svgPathLine.setAttribute("d",this.getPath()),this.setDivAttrs(),this.setSvgAttrs()},t.prototype.release=function(){this.containerDiv.remove()},t.prototype.setPathMarkers=function(){var t=this;this.options.markers.length>0&&(this.defs=document.createElementNS(e.SVGNS,"defs"),this.options.markers.forEach((function(o){t.defs.setAttribute("id","defs1"),t.defs.appendChild(o)})),this.svgElement.appendChild(this.defs),this.options.start.markerId&&this.svgPathLine.setAttribute("marker-start","url(".concat(this.options.start.markerId,")")),this.options.end.markerId&&this.svgPathLine.setAttribute("marker-end","url(".concat(this.options.end.markerId,")")))},t.prototype.setSvgAttrs=function(){var t=this.getSVGProportions(),o=t.top,n=t.left,e=t.width,i=t.height;this.svgElement.style.top="".concat(o,"px"),this.svgElement.style.left="".concat(n,"px"),this.svgElement.style.position="absolute",this.svgElement.style.overflow="visible",this.svgElement.setAttribute("width","".concat(e)),this.svgElement.setAttribute("height","".concat(i))},t.prototype.setDivAttrs=function(){var t=Math.abs(Math.min(this.startBbox.left,this.endBbox.left)-Math.max(this.endBbox.right,this.startBbox.right)),o=Math.abs(Math.min(this.startBbox.top,this.endBbox.top)-Math.max(this.endBbox.bottom,this.startBbox.bottom)),n=Math.min(this.startBbox.top,this.endBbox.top),e=Math.min(this.startBbox.left,this.endBbox.left);if(this.containerDiv.style.position="absolute",this.containerDiv.style.width="".concat(t,"px"),this.containerDiv.style.height="".concat(o,"px"),this.options.appendTo&&this.options.appendTo!==document.body){var i=this.options.appendTo.getBoundingClientRect().y,s=this.options.appendTo.getBoundingClientRect().x;this.containerDiv.style.top="".concat(n-i,"px"),this.containerDiv.style.left="".concat(e-s,"px")}else this.containerDiv.style.top="".concat(n+window.pageYOffset,"px"),this.containerDiv.style.left="".concat(e+window.pageXOffset,"px")},t.prototype.getSVGProportions=function(){var t=this.startBbox.top+this.options.start.position.offsetY,o=this.endBbox.top+this.options.end.position.offsetY,n=this.startBbox.left+this.options.start.position.offsetX,e=this.endBbox.left+this.options.end.position.offsetX;return{width:Math.abs(n-e)+1,height:Math.abs(t-o)+1,start:{x:n,y:t},end:{x:e,y:o},top:t<o?this.options.start.position.offsetY:this.options.end.position.offsetY,left:n<e?this.options.start.position.offsetX:this.options.end.position.offsetX}},t.prototype.setCustomClass=function(){var t,o,n,e=this.options.customClass,i=e.container,s=e.svgElement,r=e.svgPath;i&&(t=this.containerDiv.classList).add.apply(t,i.split(" ")),s&&(o=this.svgElement.classList).add.apply(o,s.split(" ")),r&&(n=this.svgPathLine.classList).add.apply(n,r.split(" "))},t}();o.Path=i},750:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),s=this&&this.__spreadArray||function(t,o,n){if(n||2===arguments.length)for(var e,i=0,s=o.length;i<s;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return t.concat(e||Array.prototype.slice.call(o))};Object.defineProperty(o,"__esModule",{value:!0}),o.SquarePath=void 0;var r=function(t){function o(o){return t.call(this,o)||this}return i(o,t),o.prototype.getPath=function(){var t=this.getSVGProportions(),o=t.width,n=t.height,e=t.start,i=t.end,r=e.x>i.x?o:0,a=e.y>i.y?n:0,c=o-r,h=n-a,p=s(s([{x:r,y:a}],[{x:Math.abs(r-.5*(r+c)),y:Math.abs(a-.5*(a+h))}],!0),[{x:c,y:h}],!1);return this.svgPath(p)},o.prototype.svgPath=function(t){return"\n    M ".concat(t[0].x,",").concat(t[0].y,"\n    H ").concat(t[1].x,"\n    V ").concat(t[2].y,"\n    H ").concat(t[2].x,"\n    ")},o}(n(565).Path);o.SquarePath=r},153:function(t,o,n){var e,i=this&&this.__extends||(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}),s=this&&this.__spreadArray||function(t,o,n){if(n||2===arguments.length)for(var e,i=0,s=o.length;i<s;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return t.concat(e||Array.prototype.slice.call(o))};Object.defineProperty(o,"__esModule",{value:!0}),o.SuperCurvyPath=void 0;var r=function(t){function o(o){return t.call(this,o)||this}return i(o,t),o.prototype.getPath=function(){var t=this.getSVGProportions(),o=t.width,n=t.height,e=t.start,i=t.end,r=e.x>i.x?o:0,a=e.y>i.y?n:0,c=o-r,h=n-a,p=s(s([{x:r,y:a}],(1===this.options.start.position.top||0===this.options.end.position.top)&&a<h?[{x:r,y:Math.abs(a-.5*(a+h))},{x:Math.abs(r-.5*(r+c)),y:Math.abs(a-.5*(a+h))},{x:c,y:Math.abs(a-.5*(a+h))}]:[{x:Math.abs(r-.5*(r+c)),y:a},{x:Math.abs(r-.5*(r+c)),y:Math.abs(a-.5*(a+h))},{x:Math.abs(r-.5*(r+c)),y:h}],!0),[{x:c,y:h}],!1);return this.svgPath(p)},o.prototype.svgPath=function(t){return"\n    M ".concat(t[0].x,",").concat(t[0].y,"\n    C ").concat(t[1].x,",").concat(t[1].y," ").concat(t[1].x,",").concat(t[1].y," ").concat(t[2].x,",").concat(t[2].y,"\n    C ").concat(t[3].x,",").concat(t[3].y," ").concat(t[3].x,",").concat(t[3].y," ").concat(t[4].x,",").concat(t[4].y,"\n    ")},o}(n(565).Path);o.SuperCurvyPath=r},909:function(t,o,n){var e=this&&this.__createBinding||(Object.create?function(t,o,n,e){void 0===e&&(e=n);var i=Object.getOwnPropertyDescriptor(o,n);i&&!("get"in i?!o.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return o[n]}}),Object.defineProperty(t,e,i)}:function(t,o,n,e){void 0===e&&(e=n),t[e]=o[n]}),i=this&&this.__exportStar||function(t,o){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(o,n)||e(o,t,n)};Object.defineProperty(o,"__esModule",{value:!0}),i(n(565),o),i(n(293),o),i(n(972),o),i(n(153),o),i(n(691),o),i(n(750),o)}},o={};return function n(e){var i=o[e];if(void 0!==i)return i.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}(607)})()));