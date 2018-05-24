!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,t){if(m[e]&&w[e]){for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--y&&0===g&&_()}}(e,r),t&&t(e,r)};var r,n=!0,o="44711a35366e022d02ec",c=1e4,a={},d=[],i=[];function l(e){var t=E[e];if(!t)return j;var n=function(n){return t.hot.active?(E[n]?-1===E[n].parents.indexOf(e)&&E[n].parents.push(e):(d=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),j(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var c in j)Object.prototype.hasOwnProperty.call(j,c)&&"e"!==c&&Object.defineProperty(n,c,o(c));return n.e=function(e){return"ready"===p&&s("prepare"),g++,j.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||O(e),0===g&&0===y&&_())}},n}var u=[],p="idle";function s(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,h,v,y=0,g=0,b={},w={},m={};function k(e){return+e+""===e?+e:e}function D(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return n=e,s("check"),(t=c,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,c=j.p+""+o+".hot-update.json";n.open("GET",c,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+c+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return s("idle"),null;w={},b={},m=e.c,v=e.h,s("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});return h={},O(0),"prepare"===p&&0===g&&0===y&&_(),t});var t}function O(e){m[e]?(w[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=j.p+""+e+"."+o+".hot-update.js",t.appendChild(r)}(e)):b[e]=!0}function _(){s("ready");var e=f;if(f=null,e)if(n)Promise.resolve().then(function(){return x(n)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(k(r));e.resolve(t)}}function x(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,n,c,i,l;function u(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),c=o.id,a=o.chain;if((i=E[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<i.parents.length;d++){var l=i.parents[d],u=E[l];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([l]),moduleId:c,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[c]?(r[l]||(r[l]=[]),f(r[l],[c])):(delete r[l],t.push(l),n.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var y={},g=[],b={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var D in h)if(Object.prototype.hasOwnProperty.call(h,D)){var O;l=k(D);var _=!1,x=!1,H=!1,P="";switch((O=h[D]?u(l):{type:"disposed",moduleId:D}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(O),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),H=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return s("abort"),Promise.reject(_);if(x)for(l in b[l]=h[l],f(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(y[l]||(y[l]=[]),f(y[l],O.outdatedDependencies[l]));H&&(f(g,[O.moduleId]),b[l]=w)}var A,S=[];for(n=0;n<g.length;n++)l=g[n],E[l]&&E[l].hot._selfAccepted&&S.push({module:l,errorHandler:E[l].hot._selfAccepted});s("dispose"),Object.keys(m).forEach(function(e){!1===m[e]&&function(e){delete installedChunks[e]}(e)});for(var q,I,M=g.slice();M.length>0;)if(l=M.pop(),i=E[l]){var T={},L=i.hot._disposeHandlers;for(c=0;c<L.length;c++)(r=L[c])(T);for(a[l]=T,i.hot.active=!1,delete E[l],delete y[l],c=0;c<i.children.length;c++){var U=E[i.children[c]];U&&(A=U.parents.indexOf(l))>=0&&U.parents.splice(A,1)}}for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(i=E[l]))for(I=y[l],c=0;c<I.length;c++)q=I[c],(A=i.children.indexOf(q))>=0&&i.children.splice(A,1);for(l in s("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var C=null;for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(i=E[l])){I=y[l];var B=[];for(n=0;n<I.length;n++)if(q=I[n],r=i.hot._acceptedDependencies[q]){if(-1!==B.indexOf(r))continue;B.push(r)}for(n=0;n<B.length;n++){r=B[n];try{r(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:I[n],error:e}),t.ignoreErrored||C||(C=e)}}}for(n=0;n<S.length;n++){var N=S[n];l=N.module,d=[l];try{j(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),t.ignoreErrored||C||(C=r),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||C||(C=e)}}return C?(s("fail"),Promise.reject(C)):(s("idle"),new Promise(function(e){e(g)}))}var E={};function j(t){if(E[t])return E[t].exports;var n=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:D,apply:x,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:a[e]};return r=void 0,t}(t),parents:(i=d,d=[],i),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}j.m=e,j.c=E,j.d=function(e,t,r){j.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},j.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="",j.h=function(){return o},l(6)(j.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addLoadEvent=function(e){var t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t(),e()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sourceData=[{product:"手机",region:"华东",sale:[120,100,140,160,180,185,190,210,230,245,255,270]},{product:"手机",region:"华北",sale:[80,70,90,110,130,145,150,160,170,185,190,200]},{product:"手机",region:"华南",sale:[220,200,240,250,260,270,280,295,310,335,355,380]},{product:"笔记本",region:"华东",sale:[50,60,80,110,30,20,70,30,420,30,20,20]},{product:"笔记本",region:"华北",sale:[30,35,50,70,20,15,30,50,710,130,20,20]},{product:"笔记本",region:"华南",sale:[80,120,130,140,70,75,120,90,550,120,110,100]},{product:"智能音箱",region:"华东",sale:[10,30,4,5,6,5,4,5,6,5,5,25]},{product:"智能音箱",region:"华北",sale:[15,50,15,15,12,11,11,12,12,14,12,40]},{product:"智能音箱",region:"华南",sale:[10,40,10,6,5,6,8,6,6,6,7,26]}]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkboxlist=t.prepareCheckBox=void 0,r(0);var n=r(1);function o(e){for(var t=0,r=1;r<e.length;r++)1==e[r].checked&&t++;return t}function c(e){for(var t=document.querySelector("#app2 #"+e+"-radio-wrapper").querySelectorAll("input:checked"),r="",n=0;n<t.length;n++)"全选"!=t[n].value&&(r+=t[n].value+",");return r}t.prepareCheckBox=function(e,t){var r=e[t],a=t+"-radio-wrapper",d='<label><input type = "checkbox" name = "'+t+'" value = "全选"  checkbox-type = "all">全选</label>';for(var i in r)d+='<label><input type = "checkbox" name = "'+t+'" value = "'+r[i]+'">'+r[i]+"</label>";var l=document.querySelector("#app2 #"+a);l.innerHTML=d,l.onchange=function(e){if(e.target&&"checkbox"==e.target.type){var t=l.querySelectorAll("input[type = 'checkbox']");if("全选"==e.target.value)if(1==e.target.checked)for(var r=1;r<t.length;r++)t[r].checked=t[0].checked;else 0==e.target.checked&&(e.target.checked=!0);else 3==o(t)?t[0].checked=!0:0==o(t)?e.target.checked=!0:t[0].checked=!1}!function(e){var t=document.querySelectorAll("#app2 #region-radio-wrapper input:checked"),r=document.querySelectorAll("#app2 #product-radio-wrapper input:checked"),n=document.querySelector("#app2 #table-wrapper2"),o="<thead><tr>",c="<tbody>";if(1==t.length&&1==r.length){for(var a in o+="<th>商品</th><th>地区</th>",c+="<tr><td>"+e[0].product+"</td><td>"+e[0].region+"</td>",e[0].sale)c+="<td>"+e[0].sale[a]+"</td>";c+="</tr>"}else if(t.length>1&&1==r.length)for(var d in o+="<th>商品</th><th>地区</th>",e){for(var i in c+="<tr>",c+=0==d?"<td rowspan= '"+e.length+"'>"+e[d].product+"</td><td>"+e[d].region+"</td>":"<td>"+e[d].region+"</td>",e[d].sale)c+="<td>"+e[d].sale[i]+"</td>";c+="</tr>"}else if(1==t.length&&r.length>1)for(var l in o+="<th>地区</th><th>商品</th>",e){for(var u in c+="<tr>",c+=0==l?"<td rowspan= '"+e.length+"'>"+e[l].region+"</td><td>"+e[l].product+"</td>":"<td>"+e[l].product+"</td>",e[l].sale)c+="<td>"+e[l].sale[u]+"</td>";c+="</tr>"}else if(t.length>1&&r.length>1){o+="<th>商品</th><th>地区</th>";for(var p=0;p<r.length;p++){var s=!0,f=t.length;4==t.length&&(f=3);for(var h=0;h<t.length;h++){for(var v in c+="<tr>",e)if(e[v].product==r[p].value&&e[v].region==t[h].value)for(var y in s?(s=!1,c+="<td rowspan= '"+f+"'>"+e[v].product+"</td><td>"+e[v].region+"</td>"):c+="<td>"+e[v].region+"</td>",e[v].sale)c+="<td>"+e[v].sale[y]+"</td>";c+="</tr>"}}}for(var g=0;g<12;g++)o+="<th>"+(g+1)+"月</th>";o+="</tr></thead>",c+="</tbody>",n.innerHTML="<table>"+o+c+"</table>"}(function(){var e=new Array,t=c("region"),r=c("product");for(var o in n.sourceData)-1!=t.indexOf(n.sourceData[o].region)&&-1!=r.indexOf(n.sourceData[o].product)&&e.push(n.sourceData[o]);return e}())},l.childNodes[0].click()},t.checkboxlist={region:["华东","华南","华北"],product:["手机","笔记本","智能音箱"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelectValue=t.showTable=void 0,r(0);for(var n=r(1),o=document.querySelectorAll("#app select"),c=0;c<o.length;c++)o[c].onchange=function(){d(a())};function a(){var e=document.querySelectorAll("#app select"),t=new Array,r=e[0].selectedIndex;return t[0]=e[0].querySelectorAll("option")[r].innerText,r=e[1].selectedIndex,t[1]=e[1].querySelectorAll("option")[r].innerText,t}function d(e){for(var t=document.querySelector("#app #table-wrapper"),r="<thead><tr><th>商品</th><th>地区</th>",o=0;o<12;o++)r+="<th>"+(o+1)+"月</th>";r+="</tr></thead>";var c="<tbody>";for(var a in n.sourceData)if(n.sourceData[a].region==e[0]&&n.sourceData[a].product==e[1]){for(var d in c+="<tr><td>"+n.sourceData[a].product+"</td><td>"+n.sourceData[a].region+"</td>",n.sourceData[a].sale)c+="<td>"+n.sourceData[a].sale[d]+"</td>";c+="</tr>"}c+="</tbody>",t.innerHTML="<table>"+r+c+"</table>"}t.showTable=d,t.getSelectValue=a},,function(e,t,r){},function(e,t,r){"use strict";r(5),r(1);var n=r(0),o=r(3),c=r(2);(0,n.addLoadEvent)((0,o.showTable)((0,o.getSelectValue)())),(0,n.addLoadEvent)((0,c.prepareCheckBox)(c.checkboxlist,"region")),(0,n.addLoadEvent)((0,c.prepareCheckBox)(c.checkboxlist,"product"))}]);