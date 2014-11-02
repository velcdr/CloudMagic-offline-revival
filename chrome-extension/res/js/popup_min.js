/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
 
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});

/*! jQuery Address v1.6 | (c) 2009, 2013 Rostislav Hristov | jquery.org/license */
(function(c){c.address=function(){var s=function(a){a=c.extend(c.Event(a),function(){for(var b={},f=c.address.parameterNames(),m=0,p=f.length;m<p;m++)b[f[m]]=c.address.parameter(f[m]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:f,parameters:b,queryString:c.address.queryString()}}.call(c.address));c(c.address).trigger(a);return a},g=function(a){return Array.prototype.slice.call(a)},k=function(){c().bind.apply(c(c.address),Array.prototype.slice.call(arguments));
return c.address},da=function(){c().unbind.apply(c(c.address),Array.prototype.slice.call(arguments));return c.address},G=function(){return A.pushState&&d.state!==h},T=function(){return("/"+n.pathname.replace(new RegExp(d.state),"")+n.search+(H()?"#"+H():"")).replace(S,"/")},H=function(){var a=n.href.indexOf("#");return a!=-1?n.href.substr(a+1):""},q=function(){return G()?T():H()},U=function(){return"javascript"},M=function(a){a=a.toString();return(d.strict&&a.substr(0,1)!="/"?"/":"")+a},t=function(a,
b){return parseInt(a.css(b),10)},C=function(){if(!I){var a=q();if(decodeURI(e)!=decodeURI(a))if(v&&x<7)n.reload();else{v&&!J&&d.history&&u(N,50);e=a;B(o)}}},B=function(a){u(ea,10);return s(V).isDefaultPrevented()||s(a?W:X).isDefaultPrevented()},ea=function(){if(d.tracker!=="null"&&d.tracker!==D){var a=c.isFunction(d.tracker)?d.tracker:i[d.tracker],b=(n.pathname+n.search+(c.address&&!G()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(c.isFunction(a))a(b);else if(c.isFunction(i.urchinTracker))i.urchinTracker(b);
else if(i.pageTracker!==h&&c.isFunction(i.pageTracker._trackPageview))i.pageTracker._trackPageview(b);else i._gaq!==h&&c.isFunction(i._gaq.push)&&i._gaq.push(["_trackPageview",decodeURI(b)])}},N=function(){var a=U()+":"+o+";document.open();document.writeln('<html><head><title>"+l.title.replace(/\'/g,"\\'")+"</title><script>var "+y+' = "'+encodeURIComponent(q()).replace(/\'/g,"\\'")+(l.domain!=n.hostname?'";document.domain="'+l.domain:"")+"\";<\/script></head></html>');document.close();";if(x<7)j.src=
a;else j.contentWindow.location.replace(a)},Z=function(){if(E&&Y!=-1){var a,b,f=E.substr(Y+1).split("&");for(a=0;a<f.length;a++){b=f[a].split("=");if(/^(autoUpdate|history|strict|wrap)$/.test(b[0]))d[b[0]]=isNaN(b[1])?/^(true|yes)$/i.test(b[1]):parseInt(b[1],10)!==0;if(/^(state|tracker)$/.test(b[0]))d[b[0]]=b[1]}E=D}e=q()},aa=function(){if(!$){$=r;Z();c('a[rel*="address:"]').address();if(d.wrap){var a=c("body");c("body > *").wrapAll('<div style="padding:'+(t(a,"marginTop")+t(a,"paddingTop"))+"px "+
(t(a,"marginRight")+t(a,"paddingRight"))+"px "+(t(a,"marginBottom")+t(a,"paddingBottom"))+"px "+(t(a,"marginLeft")+t(a,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+y+'" style="height:100%;overflow:auto;position:relative;'+(K&&!window.statusbar.visible?"resize:both;":"")+'" />');c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});K&&c('<style type="text/css" />').appendTo("head").text("#"+y+"::-webkit-resizer { background-color: #fff; }")}if(v&&!J){a=l.getElementsByTagName("frameset")[0];
j=l.createElement((a?"":"i")+"frame");j.src=U()+":"+o;if(a){a.insertAdjacentElement("beforeEnd",j);a[a.cols?"cols":"rows"]+=",0";j.noResize=r;j.frameBorder=j.frameSpacing=0}else{j.style.display="none";j.style.width=j.style.height=0;j.tabIndex=-1;l.body.insertAdjacentElement("afterBegin",j)}u(function(){c(j).bind("load",function(){var b=j.contentWindow;e=b[y]!==h?b[y]:"";if(e!=q()){B(o);n.hash=e}});j.contentWindow[y]===h&&N()},50)}u(function(){s("init");B(o)},1);if(!G())if(v&&x>7||!v&&J)if(i.addEventListener)i.addEventListener(F,
C,o);else i.attachEvent&&i.attachEvent("on"+F,C);else fa(C,50);"state"in window.history&&c(window).trigger("popstate")}},ga=function(a){a=a.toLowerCase();a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},h,D=null,y="jQueryAddress",F="hashchange",V="change",W="internalChange",X="externalChange",
r=true,o=false,d={autoUpdate:r,history:r,strict:r,wrap:o},z=function(){var a={},b=ga(navigator.userAgent);if(b.browser){a[b.browser]=true;a.version=b.version}if(a.chrome)a.webkit=true;else if(a.webkit)a.safari=true;return a}(),x=parseFloat(z.version),K=z.webkit||z.safari,v=!c.support.opacity,i=function(){try{return top.document!==h&&top.document.title!==h?top:window}catch(a){return window}}(),l=i.document,A=i.history,n=i.location,fa=setInterval,u=setTimeout,S=/\/{2,9}/g;z=navigator.userAgent;var J=
"on"+F in i,j,E=c("script:last").attr("src"),Y=E?E.indexOf("?"):-1,O=l.title,I=o,$=o,ba=r,L=o,e=q();if(v){x=parseFloat(z.substr(z.indexOf("MSIE")+4));if(l.documentMode&&l.documentMode!=x)x=l.documentMode!=8?7:8;var ca=l.onpropertychange;l.onpropertychange=function(){ca&&ca.call(l);if(l.title!=O&&l.title.indexOf("#"+q())!=-1)l.title=O}}if(A.navigationMode)A.navigationMode="compatible";if(document.readyState=="complete")var ha=setInterval(function(){if(c.address){aa();clearInterval(ha)}},50);else{Z();
c(aa)}c(window).bind("popstate",function(){if(decodeURI(e)!=decodeURI(q())){e=q();B(o)}}).bind("unload",function(){if(i.removeEventListener)i.removeEventListener(F,C,o);else i.detachEvent&&i.detachEvent("on"+F,C)});return{bind:function(){return k.apply(this,g(arguments))},unbind:function(){return da.apply(this,g(arguments))},init:function(){return k.apply(this,["init"].concat(g(arguments)))},change:function(){return k.apply(this,[V].concat(g(arguments)))},internalChange:function(){return k.apply(this,
[W].concat(g(arguments)))},externalChange:function(){return k.apply(this,[X].concat(g(arguments)))},baseURL:function(){var a=n.href;if(a.indexOf("#")!=-1)a=a.substr(0,a.indexOf("#"));if(/\/$/.test(a))a=a.substr(0,a.length-1);return a},autoUpdate:function(a){if(a!==h){d.autoUpdate=a;return this}return d.autoUpdate},history:function(a){if(a!==h){d.history=a;return this}return d.history},state:function(a){if(a!==h){d.state=a;var b=T();if(d.state!==h)if(A.pushState)b.substr(0,3)=="/#/"&&n.replace(d.state.replace(/^\/$/,
"")+b.substr(2));else b!="/"&&b.replace(/^\/#/,"")!=H()&&u(function(){n.replace(d.state.replace(/^\/$/,"")+"/#"+b)},1);return this}return d.state},strict:function(a){if(a!==h){d.strict=a;return this}return d.strict},tracker:function(a){if(a!==h){d.tracker=a;return this}return d.tracker},wrap:function(a){if(a!==h){d.wrap=a;return this}return d.wrap},update:function(){L=r;this.value(e);L=o;return this},title:function(a){if(a!==h){u(function(){O=l.title=a;if(ba&&j&&j.contentWindow&&j.contentWindow.document){j.contentWindow.document.title=
a;ba=o}},50);return this}return l.title},value:function(a){if(a!==h){a=M(a);if(a=="/")a="";if(e==a&&!L)return;e=a;if(d.autoUpdate||L){if(B(r))return this;if(G())A[d.history?"pushState":"replaceState"]({},"",d.state.replace(/\/$/,"")+(e===""?"/":e));else{I=r;if(K)if(d.history)n.hash="#"+e;else n.replace("#"+e);else if(e!=q())if(d.history)n.hash="#"+e;else n.replace("#"+e);v&&!J&&d.history&&u(N,50);if(K)u(function(){I=o},1);else I=o}}return this}return M(e)},path:function(a){if(a!==h){var b=this.queryString(),
f=this.hash();this.value(a+(b?"?"+b:"")+(f?"#"+f:""));return this}return M(e).split("#")[0].split("?")[0]},pathNames:function(){var a=this.path(),b=a.replace(S,"/").split("/");if(a.substr(0,1)=="/"||a.length===0)b.splice(0,1);a.substr(a.length-1,1)=="/"&&b.splice(b.length-1,1);return b},queryString:function(a){if(a!==h){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=e.split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,b,f){var m,
p;if(b!==h){var P=this.parameterNames();p=[];b=b===h||b===D?"":b.toString();for(m=0;m<P.length;m++){var Q=P[m],w=this.parameter(Q);if(typeof w=="string")w=[w];if(Q==a)w=b===D||b===""?[]:f?w.concat([b]):[b];for(var R=0;R<w.length;R++)p.push(Q+"="+w[R])}c.inArray(a,P)==-1&&b!==D&&b!==""&&p.push(a+"="+b);this.queryString(p.join("&"));return this}if(b=this.queryString()){f=[];p=b.split("&");for(m=0;m<p.length;m++){b=p[m].split("=");b[0]==a&&f.push(b.slice(1).join("="))}if(f.length!==0)return f.length!=
1?f:f[0]}},parameterNames:function(){var a=this.queryString(),b=[];if(a&&a.indexOf("=")!=-1){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].split("=")[0];c.inArray(m,b)==-1&&b.push(m)}}return b},hash:function(a){if(a!==h){this.value(e.split("#")[0]+(a?"#"+a:""));return this}a=e.split("#");return a.slice(1,a.length).join("#")}}}();c.fn.address=function(s){this.data("address")||this.on("click",function(g){if(g.shiftKey||g.ctrlKey||g.metaKey||g.which==2)return true;var k=g.currentTarget;if(c(k).is("a")){g.preventDefault();
g=s?s.call(k):/address:/.test(c(k).attr("rel"))?c(k).attr("rel").split("address:")[1].split(" ")[0]:c.address.state()!==undefined&&!/^\/?$/.test(c.address.state())?c(k).attr("href").replace(new RegExp("^(.*"+c.address.state()+"|\\.)"),""):c(k).attr("href").replace(/^(#\!?|\.)/,"");c.address.value(g)}}).on("submit",function(g){var k=g.currentTarget;if(c(k).is("form")){g.preventDefault();g=c(k).attr("action");k=s?s.call(k):(g.indexOf("?")!=-1?g.replace(/&$/,""):g+"?")+c(k).serialize();c.address.value(k)}}).data("address",
true);return this}})(jQuery);
	
/*
jQuery Browser Plugin
	* Version 2.3
	* 2008-09-17 19:27:05
	* URL: http://jquery.thewikies.com/browser
	* Description: jQuery Browser Plugin extends browser detection capabilities and can assign browser selectors to CSS classes.
	* Author: Nate Cavanaugh, Minhchau Dang, & Jonathan Neal
	* Copyright: Copyright (c) 2008 Jonathan Neal under dual MIT/GPL license.
	* JSLint: This javascript file passes JSLint verification.
*//*jslint
		bitwise: true,
		browser: true,
		eqeqeq: true,
		forin: true,
		nomen: true,
		plusplus: true,
		undef: true,
		white: true
*//*global
		jQuery
*/
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);


/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],n=b(document),k=navigator.userAgent.toLowerCase(),l=b(window),g=[],o=null,p=/msie/.test(k)&&!/opera/.test(k),q=/opera/.test(k),m,r;m=p&&/msie 6./.test(k)&&"object"!==typeof window.XMLHttpRequest;r=p&&/msie 7.0/.test(k);b.modal=function(a,h){return b.modal.impl.init(a,h)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=
function(){b.modal.impl.setContainerDimensions()};b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,h){b.modal.impl.update(a,h)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,
close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,h){if(this.d.data)return!1;o=p&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,h);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id",
"simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:g[0],width:g[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||o)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});n.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});l.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||o?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:g[0],width:g[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");n.unbind("keydown.simplemodal");l.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,e){if(e){var f=e[0].style;f.position="absolute";if(2>b)f.removeExpression("height"),f.removeExpression("width"),f.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),f.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,d;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):e.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(d="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),d=-1===d.indexOf("%")?d+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(d.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
d='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');f.removeExpression("top");f.removeExpression("left");f.setExpression("top",c);f.setExpression("left",d)}}})},focus:function(a){var h=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",e=b(":input:enabled:visible:"+a,h.d.wrap);setTimeout(function(){0<e.length?e.focus():h.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?l.height():window.innerHeight;j=[n.height(),n.width()];g=[a,l.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?g[0]:g[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||r,b=this.d.origHeight?this.d.origHeight:q?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:q?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),e=this.d.data.outerHeight(!0),f=
this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||b;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,d=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<g[0]?c:g[0],d=d&&d<g[1]?d:g[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",b=b?this.o.autoResize&&b>c?c:b<i?i:b:e?e>c?c:this.o.minHeight&&"auto"!==i&&e<i?i:e:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>d?d:a<c?c:a:f?
f>d?d:this.o.minWidth&&"auto"!==c&&f<c?c:f:c;this.d.container.css({height:b,width:a});this.d.wrap.css({overflow:e>b||f>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=g[0]/2-this.d.container.outerHeight(!0)/2;b=g[1]/2-this.d.container.outerWidth(!0)/2;var e="fixed"!==this.d.container.css("position")?l.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=e+(this.o.position[0]||a),b=this.o.position[1]||b):
a=e+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});

/* jQuery Mouse Wheel Plugin */
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});



/*
 * jQuery Highlight Regex Plugin v0.1.2
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * (c) 2009-13 Jacob Rothstein
 * MIT license
 */!function(a){var b=function(c){if(c&&c.childNodes){var d=a.makeArray(c.childNodes),e=null;a.each(d,function(a,d){3===d.nodeType?""===d.nodeValue?c.removeChild(d):null!==e?(e.nodeValue+=d.nodeValue,c.removeChild(d)):e=d:(e=null,d.childNodes&&b(d))})}};a.fn.highlightRegex=function(c,d){return"object"==typeof c&&"RegExp"!==c.constructor.name&&(d=c,c=void 0),"undefined"==typeof d&&(d={}),d.className=d.className||"highlight",d.tagType=d.tagType||"span",d.attrs=d.attrs||{},"undefined"==typeof c||""===c.source?a(this).find(d.tagType+"."+d.className).each(function(){a(this).replaceWith(a(this).text()),b(a(this).parent().get(0))}):a(this).each(function(){var e=a(this).get(0);b(e),a.each(a.makeArray(e.childNodes),function(e,f){var g,h,i,j,k,l;if(b(f),3==f.nodeType){if(a(f).parent(d.tagType+"."+d.className).length)return;for(;f.data&&(j=f.data.search(c))>=0&&(k=f.data.slice(j).match(c)[0],k.length>0);)g=document.createElement(d.tagType),g.className=d.className,a(g).attr(d.attrs),l=f.parentNode,h=f.splitText(j),f=h.splitText(k.length),i=h.cloneNode(!0),g.appendChild(i),l.replaceChild(g,h)}else a(f).highlightRegex(c,d)})}),a(this)}}(jQuery);


/* function from http://www.stackoverflow.com/questions/3397168 */ 
(function ($) {
	$.fn.hyperlinkRegex = function (regex, target, ismailto) {
		ismailto = ismailto || false;
		if (regex == undefined || regex.source == '') {
			$(this).find('a').each(function () {
				$(this).replaceWith($(this).text());
				$(this).parent().each(function () {
					node = $(this).get(0);
					if (node.normalize)
						node.normalize();
				});
			});
		} else {
			$(this).each(function () {
				elt = $(this).get(0)
					elt.normalize();
				$.each($.makeArray(elt.childNodes), function (i, node) {
					if (node.nodeType == 3 && node.parentNode.nodeName.toLowerCase() != "a") {
						var searchnode = node;
						while ((pos = searchnode.data.search(regex)) >= 0) {
								match = searchnode.data.slice(pos).match(regex)[0];
								if (match.length == 0)
									break;
								var anode = document.createElement('a');
								var middlebit = searchnode.splitText(pos);
								var searchnode = middlebit.splitText(match.length);
								var middleclone = middlebit.cloneNode(true);
								anode.appendChild(middleclone);
								if (ismailto == true) {
									anode.href = "mailto:" + middleclone.nodeValue;
								} else {
									anode.href = middleclone.nodeValue;
								}
								anode.target = target;
								searchnode.parentNode.replaceChild(anode, middlebit);
							}
					} else {
						if (node.parentNode.nodeName.toLowerCase() != "a") {
							$(node).hyperlinkRegex(regex, target, ismailto);
						}
					}
				})
			})
		}
		return $(this);
	}
})(jQuery);

if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.WidgetHighlightWrapper = function () {
	var self = this;
	var proto = CloudMagic.WidgetHighlightWrapper.prototype;
	self.utils_ = new CloudMagic.WidgetUtilities();
	proto.HighlightSearchDirectPreview = function (s, ifrnode) {
		ifrnode = ifrnode || null;
		s = s.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\**$/, "");
		var a = s.split(' ');
		var r = "";
		for (var i = 0; i < a.length; i++) {
			var item = a[i];
			item = item.replace(/^\s*/, "").replace(/\s*$/, "");
			item = item.toLowerCase();
			if (item == "or" || item == "and") {
				continue;
			}
			var key = "";
			if (r.length > 0) {
				r = r + "\\s" + item;
			} else {
				if (item.charAt(0) != '"') {
					var colonpos = item.indexOf(":");
					if (colonpos != -1) {
						key = item.substr(0, colonpos);
						item = item.substr(colonpos + 1, item.length - colonpos);
						item = item.replace(/^\s*/, "").replace(/\s*$/, "");
					}
				}
				r = item;
			}
			if (r.length > 0 && (r.charAt(0) != '"' || r.charAt(r.length - 1) == '"')) {
				r = r.replace(/\?/gi, "");
				var encdquote = false;
				var encdquotewithstar = false;
				if (r.charAt(0) == '"' && r.charAt(r.length - 1) == '"') {
					encdquote = true;
				}
				r = r.replace(/\"/ig, "");
				r = r.replace(/^\.*/, "").replace(/\.*$/, "");
				r = r.replace(/^@/i, "");
				if (r.charAt(r.length - 1) == '*') {
					encdquotewithstar = true;
				}
				r = r.replace(/\*$/, "");
				if (r.length > 0) {
					var spat;
					if (encdquote == true && encdquotewithstar == false) {
						spat = "((\\b)" + r + "(\\b))";
					} else if (i == a.length - 1) {
						spat = "((\\b)" + r + "([-A-Z0-9]*))";
					} else {
						spat = "((\\b)" + r + "(\\b))";
					}
					var pat = new RegExp(spat, "ig");
					if (key.length > 0) {
						cmjQuery_('.mb-preview-search-value-' + key).highlightRegex(pat);
					} else {
						cmjQuery_('.mb-preview-search-value').highlightRegex(pat);
						if (ifrnode != null) {
							cmjQuery_(ifrnode).highlightRegex(pat);
						}
					}
					r = "";
				}
			}
		}
	};
	proto.HighlightSearchByContactPreview = function (s) {
		s = s.replace(/^\s*/, "").replace(/\s*$/, "");
		var a = s.split(', ');
		var r = "";
		for (var i = 0; i < a.length; i++) {
			var item = a[i];
			item = item.replace(/^\s*/, "").replace(/\s*$/, "");
			item = item.replace(/\'/ig, "");
			item = item.toLowerCase();
			if (item.length > 0) {
				item = item.replace(/\?/gi, "");
				item = item.replace(/\"/ig, "");
				spat = "((\\b)" + item + "(\\b))";
				var pat = new RegExp(spat, "ig");
				cmjQuery_('.mb-preview-search-value-from').highlightRegex(pat);
				cmjQuery_('.mb-preview-search-value-to').highlightRegex(pat);
				cmjQuery_('.mb-preview-search-value-cc').highlightRegex(pat);
				cmjQuery_('.mb-preview-search-value-bcc').highlightRegex(pat);
			}
		}
	};
};
var html4 = {};
html4.atype = {
	'NONE' : 0,
	'URI' : 1,
	'URI_FRAGMENT' : 11,
	'SCRIPT' : 2,
	'STYLE' : 3,
	'ID' : 4,
	'IDREF' : 5,
	'IDREFS' : 6,
	'GLOBAL_NAME' : 7,
	'LOCAL_NAME' : 8,
	'CLASSES' : 9,
	'FRAME_TARGET' : 10
};
html4.ATTRIBS = {
	'*::class' : 9,
	'*::dir' : 0,
	'*::id' : 4,
	'*::lang' : 0,
	'*::onclick' : 2,
	'*::ondblclick' : 2,
	'*::onkeydown' : 2,
	'*::onkeypress' : 2,
	'*::onkeyup' : 2,
	'*::onload' : 2,
	'*::onmousedown' : 2,
	'*::onmousemove' : 2,
	'*::onmouseout' : 2,
	'*::onmouseover' : 2,
	'*::onmouseup' : 2,
	'*::style' : 3,
	'*::title' : 0,
	'a::accesskey' : 0,
	'a::coords' : 0,
	'a::href' : 1,
	'a::hreflang' : 0,
	'a::name' : 7,
	'a::onblur' : 2,
	'a::onfocus' : 2,
	'a::rel' : 0,
	'a::rev' : 0,
	'a::shape' : 0,
	'a::tabindex' : 0,
	'a::target' : 10,
	'a::type' : 0,
	'area::accesskey' : 0,
	'area::alt' : 0,
	'area::coords' : 0,
	'area::href' : 1,
	'area::nohref' : 0,
	'area::onblur' : 2,
	'area::onfocus' : 2,
	'area::shape' : 0,
	'area::tabindex' : 0,
	'area::target' : 10,
	'bdo::dir' : 0,
	'blockquote::cite' : 1,
	'br::clear' : 0,
	'button::accesskey' : 0,
	'button::disabled' : 0,
	'button::name' : 8,
	'button::onblur' : 2,
	'button::onfocus' : 2,
	'button::tabindex' : 0,
	'button::type' : 0,
	'button::value' : 0,
	'caption::align' : 0,
	'col::align' : 0,
	'col::char' : 0,
	'col::charoff' : 0,
	'col::span' : 0,
	'col::valign' : 0,
	'col::width' : 0,
	'colgroup::align' : 0,
	'colgroup::char' : 0,
	'colgroup::charoff' : 0,
	'colgroup::span' : 0,
	'colgroup::valign' : 0,
	'colgroup::width' : 0,
	'del::cite' : 1,
	'del::datetime' : 0,
	'dir::compact' : 0,
	'div::align' : 0,
	'dl::compact' : 0,
	'font::color' : 0,
	'font::face' : 0,
	'font::size' : 0,
	'form::accept' : 0,
	'form::action' : 1,
	'form::autocomplete' : 0,
	'form::enctype' : 0,
	'form::method' : 0,
	'form::name' : 7,
	'form::onreset' : 2,
	'form::onsubmit' : 2,
	'form::target' : 10,
	'h1::align' : 0,
	'h2::align' : 0,
	'h3::align' : 0,
	'h4::align' : 0,
	'h5::align' : 0,
	'h6::align' : 0,
	'hr::align' : 0,
	'hr::noshade' : 0,
	'hr::size' : 0,
	'hr::width' : 0,
	'iframe::align' : 0,
	'iframe::frameborder' : 0,
	'iframe::height' : 0,
	'iframe::marginheight' : 0,
	'iframe::marginwidth' : 0,
	'iframe::width' : 0,
	'img::align' : 0,
	'img::alt' : 0,
	'img::border' : 0,
	'img::height' : 0,
	'img::hspace' : 0,
	'img::ismap' : 0,
	'img::name' : 7,
	'img::src' : 1,
	'img::usemap' : 11,
	'img::vspace' : 0,
	'img::width' : 0,
	'input::accept' : 0,
	'input::accesskey' : 0,
	'input::align' : 0,
	'input::alt' : 0,
	'input::autocomplete' : 0,
	'input::checked' : 0,
	'input::disabled' : 0,
	'input::ismap' : 0,
	'input::maxlength' : 0,
	'input::name' : 8,
	'input::onblur' : 2,
	'input::onchange' : 2,
	'input::onfocus' : 2,
	'input::onselect' : 2,
	'input::readonly' : 0,
	'input::size' : 0,
	'input::src' : 1,
	'input::tabindex' : 0,
	'input::type' : 0,
	'input::usemap' : 11,
	'input::value' : 0,
	'ins::cite' : 1,
	'ins::datetime' : 0,
	'label::accesskey' : 0,
	'label::for' : 5,
	'label::onblur' : 2,
	'label::onfocus' : 2,
	'legend::accesskey' : 0,
	'legend::align' : 0,
	'li::type' : 0,
	'li::value' : 0,
	'map::name' : 7,
	'menu::compact' : 0,
	'ol::compact' : 0,
	'ol::start' : 0,
	'ol::type' : 0,
	'optgroup::disabled' : 0,
	'optgroup::label' : 0,
	'option::disabled' : 0,
	'option::label' : 0,
	'option::selected' : 0,
	'option::value' : 0,
	'p::align' : 0,
	'pre::width' : 0,
	'q::cite' : 1,
	'select::disabled' : 0,
	'select::multiple' : 0,
	'select::name' : 8,
	'select::onblur' : 2,
	'select::onchange' : 2,
	'select::onfocus' : 2,
	'select::size' : 0,
	'select::tabindex' : 0,
	'table::align' : 0,
	'table::bgcolor' : 0,
	'table::border' : 0,
	'table::cellpadding' : 0,
	'table::cellspacing' : 0,
	'table::frame' : 0,
	'table::rules' : 0,
	'table::summary' : 0,
	'table::width' : 0,
	'tbody::align' : 0,
	'tbody::char' : 0,
	'tbody::charoff' : 0,
	'tbody::valign' : 0,
	'td::abbr' : 0,
	'td::align' : 0,
	'td::axis' : 0,
	'td::bgcolor' : 0,
	'td::char' : 0,
	'td::charoff' : 0,
	'td::colspan' : 0,
	'td::headers' : 6,
	'td::height' : 0,
	'td::nowrap' : 0,
	'td::rowspan' : 0,
	'td::scope' : 0,
	'td::valign' : 0,
	'td::width' : 0,
	'textarea::accesskey' : 0,
	'textarea::cols' : 0,
	'textarea::disabled' : 0,
	'textarea::name' : 8,
	'textarea::onblur' : 2,
	'textarea::onchange' : 2,
	'textarea::onfocus' : 2,
	'textarea::onselect' : 2,
	'textarea::readonly' : 0,
	'textarea::rows' : 0,
	'textarea::tabindex' : 0,
	'tfoot::align' : 0,
	'tfoot::char' : 0,
	'tfoot::charoff' : 0,
	'tfoot::valign' : 0,
	'th::abbr' : 0,
	'th::align' : 0,
	'th::axis' : 0,
	'th::bgcolor' : 0,
	'th::char' : 0,
	'th::charoff' : 0,
	'th::colspan' : 0,
	'th::headers' : 6,
	'th::height' : 0,
	'th::nowrap' : 0,
	'th::rowspan' : 0,
	'th::scope' : 0,
	'th::valign' : 0,
	'th::width' : 0,
	'thead::align' : 0,
	'thead::char' : 0,
	'thead::charoff' : 0,
	'thead::valign' : 0,
	'tr::align' : 0,
	'tr::bgcolor' : 0,
	'tr::char' : 0,
	'tr::charoff' : 0,
	'tr::valign' : 0,
	'ul::compact' : 0,
	'ul::type' : 0
};
html4.eflags = {
	'OPTIONAL_ENDTAG' : 1,
	'EMPTY' : 2,
	'CDATA' : 4,
	'RCDATA' : 8,
	'UNSAFE' : 16,
	'FOLDABLE' : 32,
	'SCRIPT' : 64,
	'STYLE' : 128
};
html4.ELEMENTS = {
	'a' : 0,
	'abbr' : 0,
	'acronym' : 0,
	'address' : 0,
	'applet' : 16,
	'area' : 2,
	'b' : 0,
	'base' : 18,
	'basefont' : 18,
	'bdo' : 0,
	'big' : 0,
	'blockquote' : 0,
	'body' : 49,
	'br' : 2,
	'button' : 0,
	'caption' : 0,
	'center' : 0,
	'cite' : 0,
	'code' : 0,
	'col' : 2,
	'colgroup' : 1,
	'dd' : 1,
	'del' : 0,
	'dfn' : 0,
	'dir' : 0,
	'div' : 0,
	'dl' : 0,
	'dt' : 1,
	'em' : 0,
	'fieldset' : 0,
	'font' : 0,
	'form' : 0,
	'frame' : 18,
	'frameset' : 16,
	'h1' : 0,
	'h2' : 0,
	'h3' : 0,
	'h4' : 0,
	'h5' : 0,
	'h6' : 0,
	'head' : 49,
	'hr' : 2,
	'html' : 49,
	'i' : 0,
	'iframe' : 4,
	'img' : 2,
	'input' : 2,
	'ins' : 0,
	'isindex' : 18,
	'kbd' : 0,
	'label' : 0,
	'legend' : 0,
	'li' : 1,
	'link' : 18,
	'map' : 0,
	'menu' : 0,
	'meta' : 18,
	'noframes' : 20,
	'noscript' : 20,
	'object' : 16,
	'ol' : 0,
	'optgroup' : 0,
	'option' : 1,
	'p' : 1,
	'param' : 18,
	'pre' : 0,
	'q' : 0,
	's' : 0,
	'samp' : 0,
	'script' : 84,
	'select' : 0,
	'small' : 0,
	'span' : 0,
	'strike' : 0,
	'strong' : 0,
	'style' : 148,
	'sub' : 0,
	'sup' : 0,
	'table' : 0,
	'tbody' : 1,
	'td' : 1,
	'textarea' : 8,
	'tfoot' : 1,
	'th' : 1,
	'thead' : 1,
	'title' : 24,
	'tr' : 1,
	'tt' : 0,
	'u' : 0,
	'ul' : 0,
	'var' : 0
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.HTMLSanitizer = (function (html4) {
	var lcase;
	if ('script' === 'SCRIPT'.toLowerCase()) {
		lcase = function (s) {
			return s.toLowerCase();
		};
	} else {
		lcase = function (s) {
			return s.replace(/[A-Z]/g, function (ch) {
				return String.fromCharCode(ch.charCodeAt(0) | 32);
			});
		};
	}
	var ENTITIES = {
		lt : '<',
		gt : '>',
		amp : '&',
		nbsp : '\240',
		quot : '"',
		apos : '\''
	};
	var decimalEscapeRe = /^#(\d+)$/;
	var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
	function lookupEntity(name) {
		name = lcase(name);
		if (ENTITIES.hasOwnProperty(name)) {
			return ENTITIES[name];
		}
		var m = name.match(decimalEscapeRe);
		if (m) {
			return String.fromCharCode(parseInt(m[1], 10));
		} else if (!!(m = name.match(hexEscapeRe))) {
			return String.fromCharCode(parseInt(m[1], 16));
		}
		return '';
	}
	function decodeOneEntity(_, name) {
		return lookupEntity(name);
	}
	var nulRe = /\0/g;
	function stripNULs(s) {
		return s.replace(nulRe, '');
	}
	var entityRe = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g;
	function unescapeEntities(s) {
		return s.replace(entityRe, decodeOneEntity);
	}
	var ampRe = /&/g;
	var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
	var ltRe = /</g;
	var gtRe = />/g;
	var quotRe = /\"/g;
	var eqRe = /\=/g;
	function escapeAttrib(s) {
		return s.replace(ampRe, '&amp;').replace(ltRe, '&lt;').replace(gtRe, '&gt;').replace(quotRe, '&#34;').replace(eqRe, '&#61;');
	}
	function normalizeRCData(rcdata) {
		return rcdata.replace(looseAmpRe, '&amp;$1').replace(ltRe, '&lt;').replace(gtRe, '&gt;');
	}
	var INSIDE_TAG_TOKEN = new RegExp('^\\s*(?:'
			 + ('(?:'
				 + '([a-z][a-z-]*)'
				 + ('('
					 + '\\s*=\\s*'
					 + ('('
						 + '\"[^\"]*\"'
						 + '|\'[^\']*\''
						 + '|(?=[a-z][a-z-]*\\s*=)'
						 + '|[^>\"\'\\s]*'
						 + ')')
					 + ')') + '?'
				 + ')')
			 + '|(/?>)'
			 + '|[\\s\\S][^a-z\\s>]*)', 'i');
	var OUTSIDE_TAG_TOKEN = new RegExp('^(?:'
			 + '&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);'
			 + '|<\!--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>'
			 + '|<(/)?([a-z][a-z0-9]*)'
			 + '|([^<&>]+)'
			 + '|([<&>]))', 'i');
	function makeSaxParser(handler) {
		return function parse(htmlText, param) {
			htmlText = String(htmlText);
			var htmlLower = null;
			var inTag = false;
			var attribs = [];
			var tagName = void 0;
			var eflags = void 0;
			var openTag = void 0;
			if (handler.startDoc) {
				handler.startDoc(param);
			}
			while (htmlText) {
				var m = htmlText.match(inTag ? INSIDE_TAG_TOKEN : OUTSIDE_TAG_TOKEN);
				htmlText = htmlText.substring(m[0].length);
				if (inTag) {
					if (m[1]) {
						var attribName = lcase(m[1]);
						var decodedValue;
						if (m[2]) {
							var encodedValue = m[3];
							switch (encodedValue.charCodeAt(0)) {
							case 34:
							case 39:
								encodedValue = encodedValue.substring(1, encodedValue.length - 1);
								break;
							}
							decodedValue = unescapeEntities(stripNULs(encodedValue));
						} else {
							decodedValue = attribName;
						}
						attribs.push(attribName, decodedValue);
					} else if (m[4]) {
						if (eflags !== void 0) {
							if (openTag) {
								if (handler.startTag) {
									handler.startTag(tagName, attribs, param);
								}
							} else {
								if (handler.endTag) {
									handler.endTag(tagName, param);
								}
							}
						}
						if (openTag && (eflags & (html4.eflags.CDATA | html4.eflags.RCDATA))) {
							if (htmlLower === null) {
								htmlLower = lcase(htmlText);
							} else {
								htmlLower = htmlLower.substring(htmlLower.length - htmlText.length);
							}
							var dataEnd = htmlLower.indexOf('</' + tagName);
							if (dataEnd < 0) {
								dataEnd = htmlText.length;
							}
							if (eflags & html4.eflags.CDATA) {
								if (handler.cdata) {
									handler.cdata(htmlText.substring(0, dataEnd), param);
								}
							} else if (handler.rcdata) {
								handler.rcdata(normalizeRCData(htmlText.substring(0, dataEnd)), param);
							}
							htmlText = htmlText.substring(dataEnd);
						}
						tagName = eflags = openTag = void 0;
						attribs.length = 0;
						inTag = false;
					}
				} else {
					if (m[1]) {
						if (handler.pcdata) {
							handler.pcdata(m[0], param);
						}
					} else if (m[3]) {
						openTag = !m[2];
						inTag = true;
						tagName = lcase(m[3]);
						eflags = html4.ELEMENTS.hasOwnProperty(tagName) ? html4.ELEMENTS[tagName] : void 0;
					} else if (m[4]) {
						if (handler.pcdata) {
							handler.pcdata(m[4], param);
						}
					} else if (m[5]) {
						if (handler.pcdata) {
							switch (m[5]) {
							case '<':
								handler.pcdata('&lt;', param);
								break;
							case '>':
								handler.pcdata('&gt;', param);
								break;
							default:
								handler.pcdata('&amp;', param);
								break;
							}
						}
					}
				}
			}
			if (handler.endDoc) {
				handler.endDoc(param);
			}
		};
	}
	function makeHtmlSanitizer(sanitizeAttributes) {
		var stack;
		var ignoring;
		return makeSaxParser({
			startDoc : function (_) {
				stack = [];
				ignoring = false;
			},
			startTag : function (tagName, attribs, out) {
				if (ignoring) {
					return;
				}
				if (!html4.ELEMENTS.hasOwnProperty(tagName)) {
					return;
				}
				var eflags = html4.ELEMENTS[tagName];
				if (eflags & html4.eflags.FOLDABLE) {
					return;
				} else if (eflags & html4.eflags.UNSAFE) {
					ignoring = !(eflags & html4.eflags.EMPTY);
					return;
				}
				attribs = sanitizeAttributes(tagName, attribs);
				if (attribs) {
					if (!(eflags & html4.eflags.EMPTY)) {
						stack.push(tagName);
					}
					out.push('<', tagName);
					for (var i = 0, n = attribs.length; i < n; i += 2) {
						var attribName = attribs[i],
						value = attribs[i + 1];
						if (value !== null && value !== void 0) {
							out.push(' ', attribName, '="', escapeAttrib(value), '"');
						}
					}
					out.push('>');
				}
			},
			endTag : function (tagName, out) {
				if (ignoring) {
					ignoring = false;
					return;
				}
				if (!html4.ELEMENTS.hasOwnProperty(tagName)) {
					return;
				}
				var eflags = html4.ELEMENTS[tagName];
				if (!(eflags & (html4.eflags.UNSAFE | html4.eflags.EMPTY | html4.eflags.FOLDABLE))) {
					var index;
					if (eflags & html4.eflags.OPTIONAL_ENDTAG) {
						for (index = stack.length; --index >= 0; ) {
							var stackEl = stack[index];
							if (stackEl === tagName) {
								break;
							}
							if (!(html4.ELEMENTS[stackEl] & html4.eflags.OPTIONAL_ENDTAG)) {
								return;
							}
						}
					} else {
						for (index = stack.length; --index >= 0; ) {
							if (stack[index] === tagName) {
								break;
							}
						}
					}
					if (index < 0) {
						return;
					}
					for (var i = stack.length; --i > index; ) {
						var stackEl = stack[i];
						if (!(html4.ELEMENTS[stackEl] & html4.eflags.OPTIONAL_ENDTAG)) {
							out.push('</', stackEl, '>');
						}
					}
					stack.length = index;
					out.push('</', tagName, '>');
				}
			},
			pcdata : function (text, out) {
				if (!ignoring) {
					out.push(text);
				}
			},
			rcdata : function (text, out) {
				if (!ignoring) {
					out.push(text);
				}
			},
			cdata : function (text, out) {
				if (!ignoring) {
					out.push(text);
				}
			},
			endDoc : function (out) {
				for (var i = stack.length; --i >= 0; ) {
					out.push('</', stack[i], '>');
				}
				stack.length = 0;
			}
		});
	}
	function sanitize(htmlText, opt_uriPolicy, opt_nmTokenPolicy, StyleSanitizer) {
		var out = [];
		makeHtmlSanitizer(function sanitizeAttribs(tagName, attribs) {
			for (var i = 0; i < attribs.length; i += 2) {
				var attribName = attribs[i];
				var value = attribs[i + 1];
				var atype = null,
				attribKey;
				if ((attribKey = tagName + '::' + attribName, html4.ATTRIBS.hasOwnProperty(attribKey)) || (attribKey = '*::' + attribName, html4.ATTRIBS.hasOwnProperty(attribKey))) {
					atype = html4.ATTRIBS[attribKey];
				}
				if (atype !== null) {
					switch (atype) {
					case html4.atype.NONE:
						break;
					case html4.atype.SCRIPT:
					case html4.atype.STYLE:
						value = StyleSanitizer ? StyleSanitizer(value) : null;
						break;
					case html4.atype.ID:
					case html4.atype.IDREF:
					case html4.atype.IDREFS:
					case html4.atype.GLOBAL_NAME:
					case html4.atype.LOCAL_NAME:
					case html4.atype.CLASSES:
						value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
						break;
					case html4.atype.URI:
						value = opt_uriPolicy && opt_uriPolicy(value);
						break;
					case html4.atype.URI_FRAGMENT:
						if (value && '#' === value.charAt(0)) {
							value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
							if (value) {
								value = '#' + value;
							}
						} else {
							value = null;
						}
						break;
					default:
						value = null;
						break;
					}
				} else {
					value = null;
				}
				attribs[i + 1] = value;
			}
			return attribs;
		})(htmlText, out);
		return out.join('');
	}
	return {
		escapeAttrib : escapeAttrib,
		makeHtmlSanitizer : makeHtmlSanitizer,
		makeSaxParser : makeSaxParser,
		normalizeRCData : normalizeRCData,
		sanitize : sanitize,
		unescapeEntities : unescapeEntities
	};
})(html4);
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.Common = function (parent, iswidget) {
	var self = this;
	var proto = CloudMagic.Common.prototype;
	var base = parent;
	self.isWidget_ = iswidget;
	cmjQuery_.browser.safari = false;
	if (cmjQuery_.browser.webkit == true) {
		cmjQuery_.browser.safari = (cmjQuery_.browser.chrome == undefined || cmjQuery_.browser.chrome == false) ? true : false;
	}
	proto.SearchBoxKeypressHandler = function (e) {
		var code = base.utils_.GetKeyCode(e);
		console.log(code);
		switch (code) {
		case 27:
			break;
		case 13:
			if (base.GetCurrentViewType() != base.c_.NO_VIEW) {
				if (cmjQuery_(base.searchBox_).val() == base.activeSearchString_ && base.prevSearchableItems == base.SearchableItems) {
					break;
				}
			}
		default:
			if (code < 32 && code != 8 && code != 13) {
				break;
			}
			if (e.ctrlKey == 1 && (code == 46 || code == 190 || code == 110)) {
				break;
			}
			if (cmjQuery_.browser.webkit == true) {
				if (typeof base.plugin_.plugin_.GetAutoComplete == "undefined") {
					base.ShowReloadMessage();
					return;
				}
			}
			if (base.acTimeout_) {
				clearTimeout(base.acTimeout_);
				base.acTimeout_ = null;
			}
			base.acTimeout_ = window.setTimeout(function () {
					base.HandleClearButton();
					self.HandleAutoComplete(code, true);
				}, base.c_.AUTOCOMPLETE_DELAY);
		}
		return false;
	};
	proto.HandleDataMigration = function () {
		if (base.statusMsg_ != null && base.statusMsg_.migrationStatus != 0) {
			return false;
		}
		self.ShowNoSearchResultMessage(base.c_.MIGRATING_MSG);
		if (base.acTimeout_) {
			clearTimeout(base.acTimeout_);
			base.acTimeout_ = null;
		}
		base.acTimeout_ = window.setTimeout(function () {
				if (base.GetCurrentViewType() == base.c_.AC_VIEW) {
					self.HandleAutoComplete(0);
				}
			}, base.c_.UPDATE_STATUS_DELAY);
		return true;
	};
	proto.HandleAutoComplete = function (keycode, resethash) {
		resethash = resethash || false;
		if (self.CheckForVersionConflict() == true) {
			base.utils_.CMLOG("VersionConflict");
			return;
		}
		if (self.HandleDataMigration() == true) {
			base.utils_.CMLOG("HandleDataMigration");
			return;
		}
		if (self.IsSameSearch() == true) {
			keycode = keycode || 0;
			if ((base.GetCurrentViewType() == base.c_.AC_VIEW || keycode != 13) && base.prevSearchableItems == base.SearchableItems) {
				return;
			}
		}
		self.ClearACTimers();
		if (base.searchString_.length == 0 || base.searchString_ == base.c_.EMPTY_SEARCH) {
			base.ShowView(base.c_.NO_VIEW);
			return;
		}
		base.ShowView(base.c_.AC_VIEW);
		base.ResetResults();
		self.ExecuteAutoComplete();
		if (resethash == true) {
			if (base.searchString_ == cmjQuery_(base.searchBox_).val()) {
				base.SetNewUrl();
			}
		}
	};
	proto.ExecuteAutoComplete = function () {
		base.prevSearchableItems = base.SearchableItems;
		self.ClearACTimers(true);
		base.activeSearchString_ = base.searchString_;
		self.HandleTracking(parseInt(base.SearchableItems));
		base.plugin_.GetAutoComplete(base.searchString_, parseInt(base.SearchableItems), base.accountUserId_ || "", self.GetAutoCompleteHandler());
	};
	proto.IsSameSearch = function () {
		var str = cmjQuery_(base.searchBox_).val();
		str = str.replace(/^\s*/, "").replace(/\s*$/, "");
		if (str != base.searchString_) {
			base.searchString_ = str;
			return false;
		}
		return true;
	};
	proto.ClearACTimers = function (onlymore) {
		onlymore = onlymore || false;
		if (base.acTimeout_ && onlymore == false) {
			clearTimeout(base.acTimeout_);
			base.acTimeout_ = null;
		}
		if (base.acMoreContactsTimeout) {
			clearTimeout(base.acMoreContactsTimeout);
			base.acMoreContactsTimeout = null;
		}
		if (base.acMoreCalsTimeout) {
			clearTimeout(base.acMoreCalsTimeout);
			base.acMoreCalsTimeout = null;
		}
		if (base.acMoreTweetsTimeout) {
			clearTimeout(base.acMoreTweetsTimeout);
			base.acMoreTweetsTimeout = null;
		}
		if (base.acMoreMailsTimeout) {
			clearTimeout(base.acMoreMailsTimeout);
			base.acMoreMailsTimeout = null;
		}
		if (base.acMoreDocsTimeout) {
			clearTimeout(base.acMoreDocsTimeout);
			base.acMoreDocsTimeout = null;
		}
	};
	proto.GetAutoCompleteHandler = function () {
		var func = function (response) {
			try {
				var result = JSON.parse(response);
				if ((base.SearchableItems & base.c_.MAIL) > 0) {
					base.searchMailResultCount_ = 0;
					base.currentMailSelectionRowId_ = -1;
				}
				if ((base.SearchableItems & base.c_.CONTACT) > 0) {
					base.searchContactResultCount_ = 0;
					base.currentContactSelectionRowId_ = -1;
				}
				if ((base.SearchableItems & base.c_.DOC) > 0) {
					base.searchDocResultCount_ = 0;
					base.currentDocSelectionRowId_ = -1;
				}
				if ((base.SearchableItems & base.c_.TWEET) > 0) {
					base.searchTweetResultCount_ = 0;
					base.currentTweetSelectionRowId_ = -1;
				}
				if ((base.SearchableItems & base.c_.EVENT) > 0) {
					base.searchEventResultCount_ = 0;
					base.currentEventSelectionRowId_ = -1;
				}
				base.ShowACResult(result);
				if ((base.SearchableItems & base.c_.MAIL) > 0) {
					base.searchMailResultCountPrev_ = base.searchMailResultCount_;
					self.CheckForRemainingMailResult(result, 0);
				}
				if ((base.SearchableItems & base.c_.CONTACT) > 0) {
					base.searchContactResultCountPrev_ = base.searchContactResultCount_;
					self.CheckForRemainingContactResult(result, 0);
				}
				if ((base.SearchableItems & base.c_.DOC) > 0) {
					base.searchDocResultCountPrev_ = base.searchDocResultCount_;
					self.CheckForRemainingDocResult(result, 0);
				}
				if ((base.SearchableItems & base.c_.TWEET) > 0) {
					base.searchTweetResultCountPrev_ = base.searchTweetResultCount_;
					self.CheckForRemainingTweetResult(result, 0);
				}
				if ((base.SearchableItems & base.c_.EVENT) > 0) {
					base.searchEventResultCountPrev_ = base.searchEventResultCount_;
					self.CheckForRemainingEventResult(result, 0);
				}
				base.ResizeResultPane();
				cmjQuery_.cookie("_mWS", base.searchString_, {
					expires : 365
				});
			} catch (e) {
				base.utils_.CMLOG(e);
			}
		};
		return func;
	};
	proto.GetTwitterUserProfileURLTag = function (username, ismentions) {
		ismentions = ismentions || false;
		var userprofilelink = self.GetTwitterUserProfileURL(username);
		var a = "<a target ='_blank' class='mb-tweet-special-nodes mb-remove-click-event' href = '" + userprofilelink + "'>"
			 + (ismentions == true ? '@' : ' ') + username
			 + "</a>";
		return a;
	};
	proto.GetTwitterUserProfileURL = function (username) {
		var baseurl;
		username = username || "";
		baseurl = "http://twitter.com/#!/" + username;
		return baseurl;
	};
	proto.GetTwitterHashTagSearchURL = function (tag_name) {
		var baseurl;
		tag_name = tag_name || "";
		baseurl = "http://twitter.com/#!/search?q=" + tag_name;
		return baseurl;
	};
	proto.CompareFun = function (a, b) {
		return (a.start_pos - b.start_pos);
	};
	proto.AddTweetTitle = function (_tbody, _title) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).addClass('mb-tweet-title');
		cmjQuery_(td).html(_title);
		cmjQuery_(tr).append(td);
		cmjQuery_(_tbody).append(tr);
	};
	proto.AddTweetLocation = function (_location, _statustype, _tbody) {
		if (_location.length == 0) {
			return;
		}
		if (_statustype == base.c_.TWEET_STATUS_HOME_TIMELINE || _statustype == base.c_.TWEET_STATUS_USER_TIMELINE) {
			self.AddTweetTitle(_tbody, "Near:");
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			cmjQuery_(td).addClass('mb-preview-search-value-near mb-preview-search-value');
			cmjQuery_(td).html(_location);
			cmjQuery_(tr).append(td);
			cmjQuery_(_tbody).append(tr);
		}
	};
	proto.AddMentions = function (_mentions, _tbody) {
		var tr;
		var td;
		var mentionscount = _mentions.length;
		if (mentionscount == 0) {
			return;
		}
		self.AddTweetTitle(_tbody, "Mentioned in this Tweet:");
		for (i = 0; i < mentionscount; i++) {
			tr = document.createElement("tr");
			td = document.createElement("td");
			cmjQuery_(td).addClass('mb-single-line mb-font-big mb-preview-search-value-mentions mb-preview-search-value');
			var atag = document.createElement("a");
			cmjQuery_(atag).addClass('mb-tweet-special-nodes');
			var tweetprofileurl;
			tweetprofileurl = self.GetTwitterUserProfileURL(_mentions[i].sn);
			cmjQuery_(atag).attr("href", tweetprofileurl);
			cmjQuery_(atag).attr("target", "_blank");
			cmjQuery_(atag).html(_mentions[i].sn);
			cmjQuery_(td).append(atag);
			span = document.createElement("span");
			cmjQuery_(span).addClass("mb-font-normal mb-tweet-username");
			cmjQuery_(span).html('&nbsp;' + _mentions[i].n);
			cmjQuery_(td).append(span);
			cmjQuery_(tr).append(td);
			cmjQuery_(_tbody).append(tr);
		}
	};
	proto.AddExpandedUrls = function (_urls, _tbody) {
		var tr;
		var td;
		var urlscount = _urls.length;
		if (urlscount == 0) {
			return;
		}
		self.AddTweetTitle(_tbody, "URLs present in this Tweet:");
		for (i = 0; i < urlscount; i++) {
			if (_urls[i].eu.length == 0) {
				continue;
			}
			tr = document.createElement("tr");
			td = document.createElement("td");
			cmjQuery_(td).addClass('mb-font-big mb-preview-search-value-url mb-preview-search-value');
			var atag = document.createElement("a");
			cmjQuery_(atag).addClass('mb-tweet-special-nodes');
			cmjQuery_(atag).attr("target", "_blank");
			cmjQuery_(atag).attr("href", _urls[i].eu);
			cmjQuery_(atag).html(_urls[i].eu);
			cmjQuery_(td).append(atag);
			cmjQuery_(tr).append(td);
			cmjQuery_(_tbody).append(tr);
		}
	};
	proto.GetTweetContentwithLinks = function (tweet) {
		var urls = tweet.urls;
		var hashtagsobj = tweet.hashtags;
		var mentions = tweet.mentions;
		var resultanttweet = "";
		var orignialtweet = tweet.tweet;
		var rttagtruncatelen = 0;
		if (orignialtweet.length == 0) {
			return " ";
		}
		var i;
		var nodeslist = new Array();
		var nodelistlen = 0;
		for (i = 0; i < mentions.length; i++) {
			var nodeobj = new Object;
			nodeobj.start_pos = mentions[i].s;
			nodeobj.type = 2;
			nodeobj.number = i;
			nodeslist[nodelistlen++] = nodeobj;
		}
		for (i = 0; i < urls.length; i++) {
			var nodeobj = new Object;
			nodeobj.start_pos = urls[i].s;
			nodeobj.type = 1;
			nodeobj.number = i;
			nodeslist[nodelistlen++] = nodeobj;
		}
		for (i = 0; i < hashtagsobj.length; i++) {
			var nodeobj = new Object;
			nodeobj.start_pos = hashtagsobj[i].s;
			nodeobj.type = 3;
			nodeobj.number = i;
			nodeslist[nodelistlen++] = nodeobj;
		}
		nodeslist.sort(self.CompareFun);
		var len = nodeslist.length;
		var startpos = 0;
		var endpos = 0;
		var nextstartpos;
		var reststr;
		for (i = 0; i < len; i++) {
			var node = nodeslist[i];
			var reslen;
			var a;
			if (node.type == 1) {
				var displayurl = (urls[node.number].du.length == 0 ? urls[node.number].u : urls[node.number].du);
				a = "<a target ='_blank' class='mb-tweet-special-nodes mb-remove-click-event' href = '"
					+urls[node.number].u + "'>"
					+displayurl
					 + "</a>";
				endpos = urls[node.number].s - rttagtruncatelen;
				nextstartpos = urls[node.number].e - rttagtruncatelen;
			} else if (node.type == 2) {
				a = self.GetTwitterUserProfileURLTag(mentions[node.number].sn, true);
				endpos = mentions[node.number].s - rttagtruncatelen;
				nextstartpos = mentions[node.number].e - rttagtruncatelen;
			} else {
				var hashtagurl;
				hashtagurl = self.GetTwitterHashTagSearchURL(hashtagsobj[node.number].ht);
				a = "<a target ='_blank'class='mb-tweet-special-nodes mb-remove-click-event'  href = '" + hashtagurl + "'>#"
					+hashtagsobj[node.number].ht
					 + "</a>";
				endpos = hashtagsobj[node.number].s - rttagtruncatelen;
				nextstartpos = hashtagsobj[node.number].e - rttagtruncatelen;
			}
			var reststr;
			endpos = endpos - startpos;
			reststr = orignialtweet.substr(startpos, endpos);
			reststr = reststr + a;
			resultanttweet = resultanttweet + reststr;
			startpos = nextstartpos;
		}
		endpos = orignialtweet.length - startpos;
		resultanttweet += orignialtweet.substr(startpos, endpos);
		return resultanttweet;
	};
	proto.GetMailBoxName = function (mailboxtype) {
		var mailboxname = "";
		if (mailboxtype == 0) {
			mailboxname = "drafts";
		} else if (mailboxtype == 1) {
			mailboxname = "inbox";
		} else if (mailboxtype == 2) {
			mailboxname = "sent";
		}
		return mailboxname;
	};
	proto.ShowNoAccountMsg = function (unregaccount, result, searchtype) {
		if (cmjQuery_(".mb-no-account-msg").length != 0) {
			cmjQuery_(".mb-no-account-msg").remove();
		}
		var msg = document.createElement("div");
		var baseurl = "http://127.0.0.1:" + base.port_ + "/manageaccount.html?q=1&ts=" + CloudMagic.CMSCRIPTTS;
		cmjQuery_(msg).attr("class", "mb-no-account-msg");
		var link = document.createElement("div");
		var direct_ui_url = "";
		var type = 0;
		if (searchtype == base.c_.TWEET) {
			type = 1;
		}
		url = baseurl + "&type=" + type;
		if (self.isWidget_ == true) {
			base.ShowPromoMessage(msg, true);
		}
		if (unregaccount == 1 && self.isWidget_ == true) {
			if (base.accountUserId_ != null) {
				var typemsg;
				if (base.domain_ == base.c_.TWEET) {
					typemsg = "Twitter";
					type = 1;
				} else {
					typemsg = "Google";
					type = 0;
				}
				url = baseurl + "&type=" + type;
				direct_ui_url = base.utils_.GetDirectSearchUrl(null);
				cmjQuery_(msg).append("As '" + base.accountUserId_ + "' is not added to CloudMagic no search results are shown for privacy reasons. <br/><br/>To see search results:<br/>");
				url = url + "&e=" + encodeURIComponent(base.accountUserId_);
				cmjQuery_(link).append("1. Open a <span id='mbNewSearchWindow' class='mb-link'>new search window</span><br/>");
				cmjQuery_(link).append("&nbsp;&nbsp;&nbsp;or<br/>");
				cmjQuery_(link).append("2. Login to an already added account<br/>");
				cmjQuery_(link).append("&nbsp;&nbsp;&nbsp;or<br/>");
				cmjQuery_(link).append("3. <a id='mbAddAccount' target='_blank' href='" + url + "'>Add this account</a>");
			}
		} else {
			if (searchtype == base.c_.TWEET) {
				cmjQuery_(msg).append("No Twitter account(s) added with CloudMagic.<br/>");
			} else if (searchtype == base.c_.MAIL || searchtype == base.c_.DOC || searchtype == base.c_.CONTACT || searchtype == base.c_.EVENT) {
				cmjQuery_(msg).append("No Google account(s) added with CloudMagic.<br/>");
			} else {
				cmjQuery_(msg).append("No account(s) added with CloudMagic.<br/>");
			}
			cmjQuery_(link).html("<a id='mbAddAccount' target='_blank' href='" + url + "'>Add an account</a>");
		}
		cmjQuery_(link).attr("class", "mb-no-account-msg");
		cmjQuery_(base.autocompleteViewNode_).append(msg);
		cmjQuery_(base.autocompleteViewNode_).append(link);
		cmjQuery_('#mbAddAccount').click(function () {
			cmjQuery_(base.searchBox_).val("");
			base.HandleClearButton();
			base.ShowView(base.c_.NO_VIEW);
			cmjQuery_(base.searchBox_).focus();
		});
		cmjQuery_('#mbNewSearchWindow').click(function () {
			base.plugin_.OpenInTab(direct_ui_url, null);
		});
		if (base.GetCurrentViewType() != base.c_.AC_VIEW || self.isWidget_ != true) {
			base.ShowView(base.c_.AC_VIEW, true);
		}
	};
	proto.ShowUnableToReadDataFileMsg = function (logpath) {
		if (cmjQuery_("#mbDataFileAcessError").length == 0) {
			var msg = document.createElement("div");
			cmjQuery_(msg).attr("class", "mb-no-account-msg");
			cmjQuery_(msg).html("Unable to read your data from index files.<br/> \
				                                 If the problem persists, send cloudmagic.log file to \
				                                 <a href=\"mailto:feedback@cloudmagic.com\">feedback@cloudmagic.com</a>\
				                                 <br/><br/><b>Log file path</b>:<br/>" + logpath);
			cmjQuery_(base.autocompleteViewNode_).empty();
			cmjQuery_(base.autocompleteViewNode_).append(msg);
		}
		if (base.GetCurrentViewType() != base.c_.AC_VIEW || self.isWidget_ != true) {
			base.ShowView(base.c_.AC_VIEW, true);
		}
	};
	proto.CheckForRemainingMailResult = function (result, startindex) {
		base.searchMailResultCount_ = result.mails.length + startindex;
		if (result.moremails == 1) {
			if (self.isWidget_ == true || startindex != 0) {
				self.ShowLoading(base.c_.MAIL);
			}
			base.acMoreMailsTimeout = window.setTimeout(function () {
					self.GetRemainingMailResult(base.searchMailResultCount_, result.mailqueryid);
				}, base.c_.CHECK_FOR_MORE_DELAY);
		} else {
			var ismore = true;
			if (base.isAllView_ == true) {
				ismore = self.IsMoreItemsForAllView(base.searchMailResultCount_, base.searchMailResultCountPrev_);
			} else {
				if ((base.searchMailResultCount_ - base.searchMailResultCountPrev_) < base.maxSearchResultCount_) {
					ismore = false;
				}
			}
			base.acMoreMailsTimeout = null;
			if (result.accountcount > 0) {
				self.ShowACMoreResultMessage(ismore, base.c_.MAIL);
			}
		}
		base.InitializeACViewKeyboardNavigation(base.c_.MAIL);
	};
	proto.IsMoreItemsForAllView = function (searchresultcount, searchresultcountprevs) {
		var ismore = true;
		if ((searchresultcount - searchresultcountprevs) < base.c_.ALL_VIEW_MAX_SEARCH_RESULT_COUNT) {
			ismore = false;
		}
		return ismore;
	}
	proto.CheckForRemainingDocResult = function (result, startindex) {
		base.searchDocResultCount_ = result.docs.length + startindex;
		if (result.moredocs == 1) {
			if (self.isWidget_ == true || startindex != 0) {
				self.ShowLoading(base.c_.DOC);
			}
			base.acMoreDocsTimeout = window.setTimeout(function () {
					self.GetRemainingDocResult(base.searchDocResultCount_, result.docqueryid);
				}, base.c_.CHECK_FOR_MORE_DELAY);
		} else {
			var ismore = true;
			if (base.isAllView_ == true) {
				ismore = self.IsMoreItemsForAllView(base.searchDocResultCount_, base.searchDocResultCountPrev_);
			} else {
				if ((base.searchDocResultCount_ - base.searchDocResultCountPrev_) < base.maxSearchResultCount_) {
					ismore = false;
				}
			}
			base.acMoreDocTimeout = null;
			if (result.accountcount > 0) {
				self.ShowACMoreResultMessage(ismore, base.c_.DOC);
			}
		}
		base.InitializeACViewKeyboardNavigation(base.c_.DOC);
	};
	proto.CheckForRemainingContactResult = function (result, startindex) {
		base.searchContactResultCount_ = result.contacts.length + startindex;
		if (result.morecontacts == 1) {
			if (self.isWidget_ == true || startindex != 0) {
				self.ShowLoading(base.c_.CONTACT);
			}
			if (base.acMoreContactsTimeout) {
				clearTimeout(base.acMoreContactsTimeout);
				base.acMoreContactsTimeout = null;
			}
			base.acMoreContactsTimeout = window.setTimeout(function () {
					self.GetRemainingContactResult(base.searchContactResultCount_, result.contactqueryid);
				}, base.c_.CHECK_FOR_MORE_DELAY);
		} else {
			var ismore = true;
			if (base.isAllView_ == true) {
				ismore = self.IsMoreItemsForAllView(base.searchContactResultCount_, base.searchContactResultCountPrev_);
			} else {
				if ((base.searchContactResultCount_ - base.searchContactResultCountPrev_) < base.maxContactSearchResultCount_) {
					ismore = false;
				}
			}
			if (result.accountcount > 0) {
				self.ShowACMoreResultMessage(ismore, base.c_.CONTACT);
			}
		}
		base.InitializeACViewKeyboardNavigation(base.c_.CONTACT);
	};
	proto.CheckForRemainingEventResult = function (result, startindex) {
		base.searchEventResultCount_ = result.events.length + startindex;
		if (result.moreevents == 1) {
			if (self.isWidget_ == true || startindex != 0) {
				self.ShowLoading(base.c_.EVENT);
			}
			if (base.acMoreCalsTimeout) {
				clearTimeout(base.acMoreCalsTimeout);
				base.acMoreCalsTimeout = null;
			}
			base.acMoreCalsTimeout = window.setTimeout(function () {
					self.GetRemainingEventResult(base.searchEventResultCount_, result.eventqueryid);
				}, base.c_.CHECK_FOR_MORE_DELAY);
		} else {
			var ismore = true;
			if (base.isAllView_ == true) {
				ismore = self.IsMoreItemsForAllView(base.searchEventResultCount_, base.searchEventResultCountPrev_);
			} else {
				if ((base.searchEventResultCount_ - base.searchEventResultCountPrev_) < base.maxSearchResultCount_) {
					ismore = false;
				}
			}
			if (result.accountcount > 0) {
				self.ShowACMoreResultMessage(ismore, base.c_.EVENT);
			}
		}
		base.InitializeACViewKeyboardNavigation(base.c_.EVENT);
	};
	proto.CheckForRemainingTweetResult = function (result, startindex) {
		base.searchTweetResultCount_ = result.tweets.length + startindex;
		if (result.moretweets == 1) {
			if (self.isWidget_ == true || startindex != 0) {
				self.ShowLoading(base.c_.TWEET);
			}
			if (base.acMoreTweetTimeout) {
				clearTimeout(base.acMoreTweetTimeout);
				base.acMoreTweetTimeout = null;
			}
			base.acMoreTweetTimeout = window.setTimeout(function () {
					self.GetRemainingTweetResult(base.searchTweetResultCount_, result.tweetqueryid);
				}, base.c_.CHECK_FOR_MORE_DELAY);
		} else {
			var ismore = true;
			if (base.isAllView_ == true) {
				ismore = self.IsMoreItemsForAllView(base.searchTweetResultCount_, base.searchTweetResultCountPrev_);
			} else {
				if ((base.searchTweetResultCount_ - base.searchTweetResultCountPrev_) < base.maxSearchResultCount_) {
					ismore = false;
				}
			}
			if (result.accountcount > 0) {
				self.ShowACMoreResultMessage(ismore, base.c_.TWEET);
			}
		}
		base.InitializeACViewKeyboardNavigation(base.c_.TWEET);
	};
	proto.GetRemainingEventResult = function (index, queryid) {
		base.plugin_.GetRemainingACEvents(index, queryid, self.GetRemainingEventResultHandler(index, queryid));
	};
	proto.GetRemainingTweetResult = function (index, queryid) {
		base.plugin_.GetRemainingACTweets(index, queryid, self.GetRemainingTweetResultHandler(index, queryid));
	};
	proto.GetRemainingEventResultHandler = function (index, queryid) {
		var func = function (response) {
			var result = JSON.parse(response);
			if (base.eventsTbody_ == null) {
				base.ShowACResult(result);
			} else {
				base.ShowEvents(result.events, base.eventsTbody_, base.c_.AC_VIEW);
			}
			base.ResizeResultPane();
			if (base.acMoreCalsTimeout) {
				clearTimeout(base.acMoreCalsTimeout);
				base.acMoreCalsTimeout = null;
			}
			self.CheckForRemainingEventResult(result, index);
		};
		return func;
	};
	proto.GetRemainingTweetResultHandler = function (index, queryid) {
		var func = function (response) {
			var result = JSON.parse(response);
			if (base.tweetsTbody_ == null) {
				base.ShowACResult(result);
			} else {
				base.ShowTweets(result.tweets, base.tweetsTbody_, base.c_.AC_VIEW);
			}
			base.ResizeResultPane();
			if (base.acMoreTweetsTimeout) {
				clearTimeout(base.acMoreTweetsTimeout);
				base.acMoreTweetsTimeout = null;
			}
			self.CheckForRemainingTweetResult(result, index);
		};
		return func;
	};
	proto.GetRemainingDocResult = function (index, queryid) {
		base.plugin_.GetRemainingACDocs(index, queryid, self.GetRemainingDocResultHandler(index, queryid));
	};
	proto.GetRemainingDocResultHandler = function (index, queryid) {
		var func = function (response) {
			var result = JSON.parse(response);
			if (base.docsTbody_ == null) {
				base.ShowACResult(result);
			} else {
				base.ShowDocs(result.docs, base.docsTbody_, base.c_.AC_VIEW);
			}
			base.ResizeResultPane();
			if (base.acMoreDocsTimeout) {
				clearTimeout(base.acMoreDocsTimeout);
				base.acMoreDocsTimeout = null;
			}
			self.CheckForRemainingDocResult(result, index);
		};
		return func;
	};
	proto.GetRemainingMailResult = function (index, queryid) {
		base.plugin_.GetRemainingACMails(index, queryid, self.GetRemainingMailResultHandler(index, queryid));
	};
	proto.GetRemainingMailResultHandler = function (index, queryid) {
		var func = function (response) {
			var result = JSON.parse(response);
			if (base.mailsTbody_ == null) {
				base.ShowACResult(result);
			} else {
				base.ShowMails(result.mails, base.mailsTbody_, base.c_.AC_VIEW);
			}
			base.ResizeResultPane();
			if (base.acMoreMailsTimeout) {
				clearTimeout(base.acMoreMailsTimeout);
				base.acMoreMailsTimeout = null;
			}
			self.CheckForRemainingMailResult(result, index);
		};
		return func;
	};
	proto.GetRemainingContactResult = function (index, queryid) {
		base.plugin_.GetRemainingACContacts(index, queryid, self.GetRemainingContactResultHandler(index, queryid));
	};
	proto.GetRemainingContactResultHandler = function (index, queryid) {
		var func = function (response) {
			var result = JSON.parse(response);
			if (base.contactsTbody_ == null) {
				base.ShowACResult(result);
			} else {
				base.ShowContacts(result.contacts, base.contactsTbody_);
			}
			base.ResizeResultPane();
			self.CheckForRemainingContactResult(result, index);
		};
		return func;
	};
	proto.ShowLoading = function (sectype, searchbycontact) {
		searchbycontact = searchbycontact || false;
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-loading-result");
		cmjQuery_(td).width("100%");
		cmjQuery_(tr).append(td);
		switch (sectype) {
		case base.c_.CONTACT:
			if (cmjQuery_("#mbLoadingContacts").length > 0) {
				return;
			}
			cmjQuery_(tr).attr("id", "mbLoadingContacts");
			cmjQuery_("#mbSearchMoreContacts").remove();
			cmjQuery_(base.contactsTbody_).append(tr);
			break;
		case base.c_.TWEET:
			if (cmjQuery_("#mbLoadingTweets").length > 0) {
				return;
			}
			cmjQuery_(tr).attr("id", "mbLoadingTweets");
			cmjQuery_("#mbSearchMoreTweets").remove();
			cmjQuery_(base.tweetsTbody_).append(tr);
			break;
		case base.c_.MAIL:
			if (searchbycontact == true) {
				if (cmjQuery_("#mbLoadingMailList").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingMailList");
				cmjQuery_("#mbSearchMoreListMails").remove();
				cmjQuery_(base.mailsListTbody_).append(tr);
			} else {
				if (cmjQuery_("#mbLoadingMails").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingMails");
				cmjQuery_("#mbSearchMoreMails").remove();
				cmjQuery_(base.mailsTbody_).append(tr);
			}
			break;
		case base.c_.DOC:
			if (searchbycontact == true) {
				if (cmjQuery_("#mbLoadingDocList").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingDocList");
				cmjQuery_("#mbSearchMoreListDocs").remove();
				cmjQuery_(base.docsListTbody_).append(tr);
			} else {
				if (cmjQuery_("#mbLoadingDocs").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingDocs");
				cmjQuery_("#mbSearchMoreDocs").remove();
				cmjQuery_(base.docsTbody_).append(tr);
			}
			break;
		case base.c_.EVENT:
			if (searchbycontact == true) {
				if (cmjQuery_("#mbLoadingCalList").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingEventList");
				cmjQuery_("#mbSearchMoreListEvents").remove();
				cmjQuery_(base.eventsTbody_).append(tr);
			} else {
				if (cmjQuery_("#mbLoadingEvents").length > 0) {
					return;
				}
				cmjQuery_(tr).attr("id", "mbLoadingEvents");
				cmjQuery_("#mbSearchMoreEvents").remove();
				cmjQuery_(base.eventsTbody_).append(tr);
			}
			break;
		}
	};
	proto.ShowACMoreResultMessage = function (ismore, sectype) {
		var caption = "";
		var classname = "mb-search-no-more";
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var isemptymsg = false;
		var morelinkid = null;
		var fun = null;
		if (ismore == true) {
			classname = "mb-search-more";
			var id;
			var func;
			var rowclassname = "";
			switch (sectype) {
			case base.c_.CONTACT:
				func = self.GetSearchMoreContactsHandler();
				id = "mbSearchMoreContacts";
				caption = "More contacts";
				rowclassname = "mb-contacts-result-row";
				break;
			case base.c_.MAIL:
				func = self.GetSearchMoreMailsHandler();
				id = "mbSearchMoreMails";
				caption = "More mails";
				rowclassname = "mb-mails-result-row";
				break;
			case base.c_.DOC:
				func = self.GetSearchMoreDocsHandler();
				id = "mbSearchMoreDocs";
				caption = "More docs";
				rowclassname = "mb-docs-result-row";
				break;
			case base.c_.EVENT:
				func = self.GetSearchMoreEventsHandler();
				id = "mbSearchMoreEvents";
				caption = "More events";
				rowclassname = "mb-events-result-row";
				break;
			case base.c_.TWEET:
				func = self.GetSearchMoreTweetsHandler();
				id = "mbSearchMoreTweets";
				caption = "More tweets";
				rowclassname = "mb-tweets-result-row";
				break;
			}
			cmjQuery_(td).click(func);
			cmjQuery_(tr).attr("class", rowclassname);
			cmjQuery_(tr).attr("id", id);
		} else {
			switch (sectype) {
			case base.c_.CONTACT:
				morelinkid = "cmMoreLinkContact";
				if (base.searchContactResultCount_ == 0) {
					cmjQuery_('.cm-search-result-contacts').remove();
				}
				if (base.searchContactResultCount_ == 0) {
					caption = self.GetEmptyMessage(sectype);
					isemptymsg = true;
				} else {
					caption = "";
				}
				break;
			case base.c_.MAIL:
				if (base.searchMailResultCount_ == 0) {
					cmjQuery_('.cm-search-result-mails').remove();
				}
				morelinkid = "cmMoreLinkMail";
				if (base.searchMailResultCount_ == 0) {
					caption = self.GetEmptyMessage(sectype);
					isemptymsg = true;
				} else {
					caption = "";
				}
				break;
			case base.c_.DOC:
				if (base.searchDocResultCount_ == 0) {
					cmjQuery_('.cm-search-result-docs').remove();
				}
				morelinkid = "cmMoreLinkDoc";
				if (base.searchDocResultCount_ == 0) {
					caption = self.GetEmptyMessage(sectype);
					isemptymsg = true;
				} else {
					caption = "";
				}
				break;
			case base.c_.EVENT:
				if (base.searchEventResultCount_ == 0) {
					cmjQuery_('.cm-search-result-events').remove();
				}
				morelinkid = "cmMoreLinkEvent";
				if (base.searchEventResultCount_ == 0) {
					caption = self.GetEmptyMessage(sectype);
					isemptymsg = true;
				} else {
					caption = "";
				}
				break;
			case base.c_.TWEET:
				if (base.searchTweetResultCount_ == 0) {
					cmjQuery_('.cm-search-result-tweets').remove();
				}
				if (base.searchTweetResultCount_ == 0) {
					caption = self.GetEmptyMessage(sectype);
					isemptymsg = true;
				} else {
					caption = "";
				}
				break;
			}
		}
		if (self.isWidget_ == true || isemptymsg == true) {
			classname = classname + " mb-font-normal";
		} else {
			classname = classname + " mb-font-big";
		}
		cmjQuery_(td).html(caption);
		var isaddmorelink = false;
		if (self.isWidget_ != true && isemptymsg != true) {
			cmjQuery_(td).attr("class", "mb-search-handler");
			if (ismore == true) {
				isaddmorelink = true;
			}
		}
		cmjQuery_(td).addClass(classname);
		cmjQuery_(td).width("100%");
		var loadingdiv = null;
		var resulttbody;
		switch (sectype) {
		case base.c_.CONTACT:
			cmjQuery_('#mbLoadingContacts').remove();
			cmjQuery_('#cmMoreLinkContact').remove();
			resulttbody = cmjQuery_(base.contactsTbody_);
			if (isaddmorelink == true) {
				morelinkid = cmjQuery_('#cmContactResult');
				base.AddMoreLink(morelinkid, "Contact");
				if (func)
					cmjQuery_('#cmMoreLinkContact').click(func);
			}
			break;
		case base.c_.MAIL:
			cmjQuery_('#mbLoadingMails').remove();
			cmjQuery_('#cmMoreLinkMail').remove();
			resulttbody = cmjQuery_(base.mailsTbody_);
			if (isaddmorelink == true) {
				morelinkid = cmjQuery_('#cmMailResult');
				base.AddMoreLink(morelinkid, "Mail");
				if (func)
					cmjQuery_('#cmMoreLinkMail').click(func);
			}
			break;
		case base.c_.DOC:
			cmjQuery_('#mbLoadingDocs').remove();
			cmjQuery_('#cmMoreLinkDoc').remove();
			resulttbody = cmjQuery_(base.docsTbody_);
			if (isaddmorelink == true) {
				morelinkid = cmjQuery_('#cmDocResult');
				base.AddMoreLink(morelinkid, "Doc");
				if (func)
					cmjQuery_('#cmMoreLinkDoc').click(func);
			}
			break;
		case base.c_.TWEET:
			cmjQuery_('#mbLoadingTweets').remove();
			cmjQuery_('#cmMoreLinkTweet').remove();
			resulttbody = cmjQuery_(base.tweetsTbody_);
			if (isaddmorelink == true) {
				morelinkid = cmjQuery_('#cmTweetResult');
				base.AddMoreLink(morelinkid, "Tweet");
				if (func)
					cmjQuery_('#cmMoreLinkTweet').click(func);
			}
			break;
		case base.c_.EVENT:
			cmjQuery_('#mbLoadingEvents').remove();
			cmjQuery_('#cmMoreLinkEvent').remove();
			resulttbody = cmjQuery_(base.eventsTbody_);
			if (isaddmorelink == true) {
				morelinkid = cmjQuery_('#cmEventResult');
				base.AddMoreLink(morelinkid, "Event");
				if (func)
					cmjQuery_('#cmMoreLinkEvent').click(func);
			}
			if (base.isAllView_ == false && isemptymsg == true) {
				if (self.isWidget_ == true) {
					self.AddShowPastEventURL(resulttbody, true);
				} else if (cmjQuery_(".mb-no-account-msg").length == 0) {
					self.AddShowPastEventURL(base.autocompleteViewNode_, false);
				}
			}
			break;
		}
		if (isemptymsg == true || self.isWidget_ == true || base.isAllView_ == false) {
			if (resulttbody) {
				cmjQuery_(resulttbody).append(tr);
			}
			cmjQuery_(tr).append(td);
		}
		if (self.isWidget_ == false) {
			if (cmjQuery_("#mbAddAccount").length == 0 && cmjQuery_('.cm-search-result-contacts').length == 0 && cmjQuery_('.cm-search-result-mails').length == 0 && cmjQuery_('.cm-search-result-docs').length == 0 && cmjQuery_('.cm-search-result-events').length == 0 && cmjQuery_('.cm-search-result-tweets').length == 0) {
				if (base.isAllView_ == true) {
					caption = self.GetEmptyMessage(base.c_.EVERYTHING);
				}
				cmjQuery_(base.autocompleteViewNode_).append(caption);
			}
		}
		if (base.GetCurrentViewType() != base.c_.AC_VIEW || self.isWidget_ != true) {
			base.ShowView(base.c_.AC_VIEW);
		}
	};
	proto.AddGuestEventAcessPermissions = function (event, tbody) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line");
		cmjQuery_(td).addClass("mb-event-name");
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("Guests can:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		cmjQuery_(tr).append(td);
		if (event.metadata.modify != undefined && event.metadata.modify == 1) {
			var div = document.createElement("div");
			cmjQuery_(div).append("modify event");
			cmjQuery_(td).append(div);
		} else {
			if (event.metadata.invite != undefined && event.metadata.invite == 1) {
				var div = document.createElement("div");
				cmjQuery_(div).css("padding-down", "3px");
				cmjQuery_(div).append("invite others");
				cmjQuery_(td).append(div);
			}
			if (event.metadata.invite != undefined && event.metadata.see == 1) {
				var div = document.createElement("div");
				cmjQuery_(div).append("see guest list");
				cmjQuery_(td).append(div);
			}
		}
		cmjQuery_(tbody).append(tr);
	};
	proto.AddShowPastEventURL = function (node, istable) {
		var prefoptionhandle = cmjQuery_("#mbShowPastEvents");
		if (prefoptionhandle != undefined && prefoptionhandle.length > 0) {
			cmjQuery_(prefoptionhandle).remove();
		}
		if (istable) {
			var tr = document.createElement("tr");
			var td = document.createElement("td");
		}
		cmjQuery_(td).css("padding", "3px");
		var div = document.createElement("span");
		var showpastevents = 0;
		if (base.pref_.show_past_events != undefined) {
			showpastevents = parseInt(base.pref_.show_past_events);
		}
		cmjQuery_(div).attr("id", "mbShowPastEvents");
		cmjQuery_(div).attr("class", "mb-show-past-events-link");
		if (showpastevents == 0) {
			cmjQuery_(div).text("Show past events");
		} else {
			cmjQuery_(div).text("Hide past events");
		}
		cmjQuery_(div).click(function () {
			var textvalue = cmjQuery_(this).text();
			var showpastevents = 0;
			if (textvalue != undefined) {
				if (textvalue.substring(0, 4) == "Show") {
					showpastevents = 1;
					textvalue = "Hide past events";
				} else {
					textvalue = "Show past events";
				}
			}
			base.pref_.show_past_events = showpastevents;
			base.plugin_.SetPreferences("show_past_events", showpastevents, null);
			if (self.isWidget_ == true) {
				self.ExecuteAutoComplete();
			} else {
				base.acTimeout_ = window.setTimeout(function () {
						base.searchEventResultCount_ = 0;
						base.currentEventSelectionRowId_ = -1;
						base.eventsTbody_ = null;
						base.plugin_.GetAutoComplete(base.searchString_, base.c_.EVENT, base.accountUserId_ || "", self.SearchForEventHandler());
					}, 200);
			}
		});
		if (istable) {
			cmjQuery_(td).append(div);
			cmjQuery_(tr).append(td);
			cmjQuery_(node).append(tr);
		} else {
			cmjQuery_(div).append("<br/><br/>");
			cmjQuery_(div).addClass('cm-font-small-all-view');
			cmjQuery_(node).append(div);
		}
	}
	proto.AddEventGuests = function (event, tbody, isdirect) {
		var tr = document.createElement("tr");
		isdirect = isdirect || false;
		var classname = "mb-event-name";
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr("colspan", 2);
		cmjQuery_(tr).append(td);
		if (event.guests == undefined || event.guests.length == 0) {
			return;
		}
		var guesttable = document.createElement("table");
		cmjQuery_(guesttable).attr({
			cellspacing : 1,
			cellpadding : 0
		});
		cmjQuery_(guesttable).attr("class", "mb-font-normal mb-guests-border");
		cmjQuery_(guesttable).css('table-layout', 'fixed');
		cmjQuery_(guesttable).css('width', '100%');
		var guesttbody = document.createElement("tbody");
		cmjQuery_(guesttable).append(guesttbody);
		cmjQuery_(td).append("<div class=\"" + classname + "\">Guests:</div>");
		cmjQuery_(td).append(guesttable);
		for (var i = 0; i < event.guests.length; i++) {
			var guestsdetails = event.guests[i];
			var innertr = document.createElement("tr");
			cmjQuery_(guesttbody).append(innertr);
			var guestsdetails = event.guests[i];
			var attendestatusurl = self.GuestAttendeStatus(guestsdetails.s, true);
			var innertd = document.createElement("td");
			cmjQuery_(innertd).attr("class", attendestatusurl);
			cmjQuery_(innertd).addClass("mb-guest-td-padding");
			cmjQuery_(innertd).width(16);
			cmjQuery_(innertr).append(innertd);
			var guestval = "";
			if (guestsdetails.n != undefined) {
				if (guestsdetails.n.length > 0) {
					guestval = guestsdetails.n;
				}
			} else if (guestsdetails.e != undefined) {
				if (guestsdetails.e.length > 0) {
					guestval = guestsdetails.e;
				}
			}
			innertd = document.createElement("td");
			cmjQuery_(innertd).text(guestval)
			cmjQuery_(innertd).attr("class", "mb-single-line-with-wrap mb-guest-td-padding mb-preview-search-value mb-preview-search-value-whom");
			cmjQuery_(innertr).append(innertd);
			innertd = document.createElement("td");
			cmjQuery_(innertd).attr("class", "mb-guest-td-padding");
			cmjQuery_(innertd).text(guestsdetails.s == undefined ? "" : guestsdetails.s);
			cmjQuery_(innertd).width(70);
			cmjQuery_(innertr).append(innertd);
		}
	};
	proto.getEventDateHeader = function (timeval, istoday) {
		var ret;
		if (istoday == true) {
			ret = "Today";
		} else {
			var eventdate;
			var dateformat;
			if (isNaN(parseInt(timeval)) == false) {
				eventdate = new Date(parseInt(timeval));
			} else {
				eventdate = new Date(timeval);
			}
			todaydate = new Date();
			if (eventdate != undefined && todaydate != undefined && todaydate.getFullYear() == eventdate.getFullYear()) {
				dateformat = "dddd, mmmm d";
			} else {
				dateformat = "dddd, mmmm d, yyyy";
			}
			ret = base.dateFormat_.formatDateWith(timeval, dateformat);
		}
		return ret;
	};
	proto.getEventDateTimeStampValue = function (_timeValue) {
		var value = _timeValue || 0;
		if (value == 0) {
			rec_date = new Date();
		} else if (isNaN(parseInt(value)) == false) {
			rec_date = new Date(parseInt(value));
		} else {
			rec_date = new Date(value);
		}
		rec_day = rec_date.getDate();
		rec_year = rec_date.getFullYear();
		rec_month = rec_date.getMonth();
		var d = new Date(rec_year, rec_month, rec_day, 0, 0, 0);
		return (d.getTime());
	};
	proto.GetFormattedEventDate = function (event, eventdatets, todaydatets, istoday) {
		var eventdate = "All day";
		if (event.metadata.isallday != 1) {
			var et = event.endtime * 1000;
			var st = event.starttime * 1000;
			if ((et >= todaydatets && et <= (todaydatets + 86400000) && st >= todaydatets) || (et <= eventdatets + 86400000)) {
				et = base.dateFormat_.formatDateWith(et, "hh:MMtt");
			} else {
				if (et >= todaydatets && et <= (todaydatets + 86400000)) {
					et = "Today " + base.dateFormat_.formatDateWith(et, "hh:MMtt");
				} else {
					et = base.dateFormat_.formatDate(et) + " " + base.dateFormat_.formatDateWith(et, "hh:MMtt");
				}
			}
			if (st >= todaydatets && st <= (todaydatets + 86400000)) {
				st = base.dateFormat_.formatDateWith(st, "hh:MMtt");
			} else {
				st = base.dateFormat_.formatDate(st) + " " + base.dateFormat_.formatDateWith(st, "hh:MMtt");
			}
			eventdate = st + " - " + et;
		} else if (istoday == false) {
			eventdate = base.dateFormat_.formatDate(event.starttime * 1000) + ", All day";
		}
		return eventdate;
	};
	proto.AddEventReminderDetails = function (event, tbody, isdirect) {
		var totreminders = event.reminderdetails.length;
		isdirect = isdirect || false;
		if (totreminders == 0) {
			return;
		}
		var classname = "mb-event-name";
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line");
		cmjQuery_(td).addClass(classname);
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("Reminders:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		cmjQuery_(td).attr('width', "100%");
		cmjQuery_(tr).append(td);
		for (var i = 0; i < totreminders; i++) {
			var reminder = event.reminderdetails[i];
			var type = reminder.t;
			if (reminder.t == "email") {
				type = "Email";
			} else if (reminder.t == "alert") {
				type = "Pop-up";
			} else if (reminder.t == "sms") {
				type = "SMS";
			}
			var div = document.createElement("div");
			var reminderval;
			var timevalue;
			timevalue = parseInt(reminder.m);
			if ((timevalue % (60 * 24 * 7)) == 0) {
				reminderval = (timevalue / (60 * 24 * 7)) + " weeks";
			} else if ((timevalue % (60 * 24)) == 0) {
				reminderval = (timevalue / (60 * 24)) + " days";
			} else if ((timevalue % 60) == 0) {
				reminderval = (timevalue / 60) + " hours";
			} else {
				reminderval = timevalue + " minutes";
			}
			cmjQuery_(div).html(type + " before " + reminderval);
			cmjQuery_(td).append(div);
		}
	};
	proto.AddEventDate = function (event, tbody, isallday) {
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var stime = parseInt(event.starttime);
		var whenstr = self.GetEventDate(event, isallday);
		var td = document.createElement("td");
		cmjQuery_(td).text("When:");
		var classname = "mb-event-name";
		cmjQuery_(td).attr("class", "mb-single-line");
		cmjQuery_(td).addClass(classname);
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-single-line-with-wrap");
		cmjQuery_(td).html(whenstr);
		cmjQuery_(tr).append(td);
	};
	proto.GetSearchMoreContactsHandler = function (tbody) {
		var func = function () {
			self.ShowLoading(base.c_.CONTACT);
			base.activeSearchString_ = base.searchString_;
			window.setTimeout(function () {
				var result = base.plugin_.SearchForContacts(base.activeSearchString_, base.searchContactResultCount_, self.SearchForContacts());
			}, 1);
		};
		return func;
	};
	proto.SearchForContacts = function () {
		var func = function (response) {
			var result = JSON.parse(response);
			var resultrowcount = self.GetRecordsCountAbove(base.c_.CONTACT);
			base.ShowContacts(result.contacts, base.contactsTbody_);
			if (result.contacts.length > 0) {
				base.InitializeACViewKeyboardNavigation();
			} else {}
			base.searchContactResultCountPrev_ = base.searchContactResultCount_;
			self.CheckForRemainingContactResult(result, base.searchContactResultCount_);
			if (self.isWidget_ == true) {
				cmjQuery_(base.searchBox_).focus();
			}
		};
		return func;
	};
	proto.CreateContactTableView = function (nodediv, nodeprop, param, isdirect, contactaccountemail) {
		param = param || null;
		isdirect = isdirect || false;
		contactaccountemail = contactaccountemail || null;
		var table1 = document.createElement("table");
		cmjQuery_(table1).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table1).css('table-layout', 'fixed');
		cmjQuery_(table1).attr("class", "mb-font-normal");
		cmjQuery_(table1).css('width', '100%');
		var tbody1 = document.createElement("tbody");
		cmjQuery_(tbody1).attr('class', "mb-contact-result-row");
		for (var i = 0; i < nodeprop.length; i++) {
			var tr1 = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			if (isdirect == true) {
				cmjQuery_(td1).width("15%");
				cmjQuery_(td1).css("padding-right", "5px");
			} else {
				cmjQuery_(td1).width("25%");
			}
			cmjQuery_(td1).attr("valign", "top");
			cmjQuery_(td1).css("overflow", "hidden");
			cmjQuery_(td1).css("text-align", "right");
			cmjQuery_(td1).attr("class", "mb-grey mb-single-line");
			var nodename = nodeprop[i].e;
			var nodevalue = nodeprop[i].w;
			cmjQuery_(td1).text(self.Capitalize(nodename));
			cmjQuery_(tr1).append(td1);
			if (param == "phonelist_") {
				cmjQuery_(td2).append("<a class='cm-phone' href='callto:" + nodevalue + "'>" + nodevalue + "</a>");
			} else if (param == "websites_") {
				var checkhttp = nodevalue.substr(0, 4);
				var hrefval = nodevalue;
				if (nodevalue.substr(0, 3) != "ftp" && nodevalue.substr(0, 4) != "http") {
					hrefval = "http://" + nodevalue;
				}
				cmjQuery_(td2).append("<a class='mb-link' target=_blank href=" + hrefval + ">" + nodevalue + "</a>");
				cmjQuery_(td2).attr("class", "mb-single-line");
			} else if (param == "emails_") {
				var baseurl = base.utils_.GetBaseMailUrl(contactaccountemail, true, false);
				var url = baseurl + "view=cm&fs=1&tf=1&to=" + encodeURIComponent(nodevalue);
				var target = "_blank";
				cmjQuery_(td2).append("<a class='cm-email' target='" + target + "' href='" + url + "'>" + nodevalue + "</a><br/>");
				cmjQuery_(td2).attr("class", "mb-single-line");
			} else if (param == "address_") {
				var addressval = self.ReplaceNewLineWithBR(nodevalue);
				cmjQuery_(td2).append(addressval);
			} else if (param == "imsg_" && nodename == "Skype") {
				cmjQuery_(td2).append("<a class='mb-link' href='callto:" + nodevalue + "'>" + nodevalue + "</a>");
			} else {
				cmjQuery_(td2).text(nodevalue);
			}
			cmjQuery_(td2).attr("class", "mb-contact-info-value-padding");
			cmjQuery_(td2).addClass("mb-preview-search-value");
			cmjQuery_(tr1).append(td2);
			cmjQuery_(tbody1).append(tr1);
		}
		cmjQuery_(table1).append(tbody1);
		cmjQuery_(nodediv).append(table1);
	};
	proto.ReplaceNewLineWithBR = function (text) {
		var buf = escape(text);
		if (buf.indexOf('%0D%0A') > -1) {
			re_nlchar = /%0D%0A/g;
		} else if (buf.indexOf('%0A') > -1) {
			re_nlchar = /%0A/g;
		} else if (buf.indexOf('%0D') > -1) {
			re_nlchar = /%0D/g;
		} else {
			return text;
		}
		return unescape(buf.replace(re_nlchar, '<br/>'));
	};
	proto.Capitalize = function (str) {
		return str.replace(/^\w/, function ($0) {
			return $0.toUpperCase();
		})
	};
	proto.GetRecordsCountAbove = function (layout) {
		var count = 0;
		var morehandle = null;
		switch (layout) {
		case base.c_.MAIL:
			count += base.searchMailResultCount_;
			morehandle = cmjQuery_("#mbSearchMoreMails");
			break;
		case base.c_.DOC:
			count += base.searchDocResultCount_;
			morehandle = cmjQuery_("#mbSearchMoreDocs");
			break;
		case base.c_.CONTACT:
			morehandle = cmjQuery_("#mbSearchMoreContacts");
			count += base.searchContactResultCount_;
			break;
		case base.c_.EVENT:
			morehandle = cmjQuery_("#mbSearchMoreEvents");
			count += base.searchEventResultCount_;
			break;
		case base.c_.TWEET:
			morehandle = cmjQuery_("#mbSearchMoreTweets");
			count += base.searchTweetResultCount_;
			break;
		}
		if (morehandle != null && cmjQuery_(morehandle).length > 0) {
			count++;
		}
		return count;
	};
	proto.GetSearchMoreMailsHandler = function (tbody) {
		var func = function () {
			self.ShowLoading(base.c_.MAIL);
			window.setTimeout(function () {
				var result = base.plugin_.SearchForMails(base.activeSearchString_, base.mailRecIndex_, base.mailRecTsRowId_.toString(), base.searchMailResultCount_, self.SearchForMailsHandler());
			}, 1);
		};
		return func;
	};
	proto.SearchForMailsHandler = function () {
		var func = function (response) {
			var result = JSON.parse(response);
			var resultrowcount = self.GetRecordsCountAbove(base.c_.MAIL);
			base.ShowMails(result.mails, base.mailsTbody_, base.c_.AC_VIEW);
			if (result.mails && result.mails.length > 0) {
				base.InitializeACViewKeyboardNavigation();
			} else {}
			base.searchMailResultCountPrev_ = base.searchMailResultCount_;
			self.CheckForRemainingMailResult(result, base.searchMailResultCount_);
			if (self.isWidget_ == true) {
				cmjQuery_(base.searchBox_).focus();
			}
			base.ResizeResultPane();
		};
		return func;
	};
	proto.GetSearchMoreEventsHandler = function () {
		var func = function () {
			self.ShowLoading(base.c_.EVENT);
			window.setTimeout(function () {
				var result = base.plugin_.SearchForEvents(base.activeSearchString_, base.eventRecIndex_, base.eventRecTsRowId_.toString(), base.searchEventResultCount_, self.SearchForEventHandler());
			}, 1);
		};
		return func;
	};
	proto.GetSearchMoreTweetsHandler = function () {
		var func = function () {
			self.ShowLoading(base.c_.TWEET);
			window.setTimeout(function () {
				var result = base.plugin_.SearchForTweets(base.activeSearchString_, base.tweetRecIndex_, base.tweetRecTsRowId_.toString(), base.searchTweetResultCount_, self.SearchForTweetHandler());
			}, 1);
		};
		return func;
	};
	proto.GetSearchMoreDocsHandler = function () {
		var func = function () {
			self.ShowLoading(base.c_.DOC);
			window.setTimeout(function () {
				var result = base.plugin_.SearchForDocs(base.activeSearchString_, base.docRecIndex_, base.docRecTsRowId_.toString(), base.searchDocResultCount_, self.SearchForDocsHandler());
			}, 1);
		};
		return func;
	};
	proto.SearchForDocsHandler = function () {
		var func = function (response) {
			result = JSON.parse(response);
			var resultrowcount = self.GetRecordsCountAbove(base.c_.DOC);
			base.ShowDocs(result.docs, base.docsTbody_, base.c_.AC_VIEW);
			if (result.docs && result.docs.length > 0) {
				base.InitializeACViewKeyboardNavigation();
			} else {}
			base.searchDocResultCountPrev_ = base.searchDocResultCount_;
			self.CheckForRemainingDocResult(result, base.searchDocResultCount_);
			if (self.isWidget_ == true) {
				cmjQuery_(base.searchBox_).focus();
			}
			base.ResizeResultPane();
		};
		return func;
	};
	proto.SearchForTweetHandler = function () {
		var func = function (response) {
			result = JSON.parse(response);
			var resultrowcount = self.GetRecordsCountAbove(base.c_.TWEET);
			base.ShowTweets(result.tweets, base.tweetsTbody_, base.c_.AC_VIEW);
			if (result.tweets && result.tweets.length > 0) {
				base.InitializeACViewKeyboardNavigation();
			} else {}
			base.searchTweetResultCountPrev_ = base.searchTweetResultCount_;
			self.CheckForRemainingTweetResult(result, base.searchTweetResultCount_);
			if (self.isWidget_ == true) {
				cmjQuery_(base.searchBox_).focus();
			}
			base.ResizeResultPane();
		};
		return func;
	};
	proto.SearchForEventHandler = function () {
		var func = function (response) {
			result = JSON.parse(response);
			var resultrowcount = self.GetRecordsCountAbove(base.c_.EVENT);
			base.ShowEvents(result.events, base.eventsTbody_, base.c_.AC_VIEW);
			if (result.events && result.events.length > 0) {
				base.InitializeACViewKeyboardNavigation();
			} else {}
			base.searchEventResultCountPrev_ = base.searchEventResultCount_;
			self.CheckForRemainingEventResult(result, base.searchEventResultCount_);
			if (self.isWidget_ == true) {
				cmjQuery_(base.searchBox_).focus();
			}
			base.ResizeResultPane();
		};
		return func;
	};
	proto.ShowNoSearchResultMessage = function (msg) {
		var msgnode = document.createElement("div");
		cmjQuery_(msgnode).attr("class", "mb-no-account-msg");
		cmjQuery_(msgnode).html(msg);
		cmjQuery_(base.autocompleteViewNode_).empty();
		cmjQuery_(base.autocompleteViewNode_).append(msgnode);
		if (base.GetCurrentViewType() != base.c_.AC_VIEW) {
			base.ShowView(base.c_.AC_VIEW);
		}
	};
	proto.ReExecuteAutoComplete = function () {
		self.ShowLoadingMsg();
		base.acTimeout_ = window.setTimeout(function () {
				base.common_.ExecuteAutoComplete()
			}, 200);
	};
	proto.ShowLoadingMsg = function () {
		var msgnode = document.createElement("div");
		cmjQuery_(msgnode).attr("class", "mb-loading-result");
		cmjQuery_(msgnode).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(base.autocompleteViewNode_).empty();
		cmjQuery_(base.autocompleteViewNode_).append(msgnode);
		if (base.GetCurrentViewType() != base.c_.AC_VIEW) {
			base.ShowView(base.c_.AC_VIEW);
		}
	};
	proto.CheckForVersionConflict = function () {
		try {
			if (base.statusMsg_ && base.statusMsg_.isValidResponse == 0) {
				self.ShowLoadingMsg();
				base.acTimeout_ = window.setTimeout(function () {
						base.common_.ExecuteAutoComplete()
					}, 200);
				return true;
			} else if (base.statusMsg_ && base.statusMsg_.collectionVersionConflict != 0) {
				var msgstart = "CloudMagic version mismatch detected. ";
				var msgnew = "A newer version of CloudMagic is running in this browser or another browser. ";
				var msgold = "An older version of CloudMagic is running in this browser or another browser. ";
				var msgend = "Upgrade CloudMagic in all browsers from <a href='http://www.cloudmagic.com' target='_blank'>www.cloudmagic.com</a>";
				if (base.statusMsg_.collectionVersionConflict == 2) {
					msg = msgstart + msgnew + msgend;
				} else {
					msg = msgstart + msgold + msgend;
				}
				self.ShowNoSearchResultMessage(msg);
				return true;
			} else if (base.statusMsg_ && (base.statusMsg_.schemaVersionConflict == 1 || base.statusMsg_.migrationStatus == 0)) {
				var msg;
				if (base.statusMsg_ && base.statusMsg_.migrationStatus == 0) {
					self.ShowNoSearchResultMessage(base.c_.MIGRATING_MSG);
				} else {
					self.ShowNoSearchResultMessage(base.c_.SCHEMA_CONFLICT_MSG);
				}
				return true;
			}
		} catch (err) {
			base.utils_.CMLOG("Exception: " + err);
			return true;
		}
		return false;
	};
	proto.AddEmailHeader = function (tbody, caption, emails) {
		if (emails.length == 0) {
			return;
		}
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(base.utils_.SetCaption(caption));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		for (var i = 0; i < emails.length; i++) {
			if (i != 0) {
				var tr = document.createElement("tr");
				var td = document.createElement("td");
				cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
				cmjQuery_(td).append(base.utils_.SetCaption("&nbsp;"));
				cmjQuery_(tr).append(td);
				td = document.createElement("td");
			}
			cmjQuery_(td).attr("class", "mb-preview-header-td mb-preview-search-value mb-preview-search-value-" + caption);
			var t = emails[i];
			var sep = "";
			if (i != emails.length - 1) {
				sep = ", ";
			}
			if (t.n.length > 0) {
				self.AddText(td, t.n + " <" + t.e + ">" + sep);
			} else {
				self.AddText(td, t.e + sep);
			}
			cmjQuery_(tr).append(td);
			cmjQuery_(tbody).append(tr);
		}
	};
	proto.ShowPreviewWindow = function (basenode, type, previewid) {
		try {
			var left = 0;
			var winwidth = base.c_.MAX_PREVIEW_WINDOW_WIDTH;
			var w = cmjQuery_(window).width();
			var isleftarrow = true;
			var node = null;
			switch (type) {
			case base.c_.MAIL:
				node = cmjQuery_(".cm-search-result-mails");
				break;
			case base.c_.DOC:
				node = cmjQuery_(".cm-search-result-docs");
				break;
			case base.c_.TWEET:
				node = cmjQuery_(".cm-search-result-tweets");
				break;
			case base.c_.CONTACT:
				node = cmjQuery_(".cm-search-result-contacts");
				break;
			case base.c_.EVENT:
				node = cmjQuery_(".cm-search-result-events");
				break;
			}
			if (node == null) {
				return;
			}
			var offset = cmjQuery_(node).offset();
			var width = cmjQuery_(node).width();
			left = offset.left + width;
			if (w - left - 10 < winwidth) {
				winwidth = w - left - 10;
			}
			if (left - width > winwidth) {
				if (left - width > base.c_.MAX_PREVIEW_WINDOW_WIDTH) {
					left = left - width - base.c_.MAX_PREVIEW_WINDOW_WIDTH;
					winwidth = base.c_.MAX_PREVIEW_WINDOW_WIDTH;
				} else {
					winwidth = left - width - 10;
					left = 10;
				}
				isleftarrow = false;
			}
			left = offset.left + 100;
			winwidth = base.c_.MAX_PREVIEW_WINDOW_WIDTH;
			if (w - left > winwidth) {
				left = w - winwidth - 10;
			}
			if (w - left - 10 < winwidth) {
				winwidth = w - left - 10;
			}
			isleftarrow = true;
			var closebtn = document.createElement("div");
			cmjQuery_(closebtn).attr("class", "cm-preview-close");
			cmjQuery_(closebtn).attr("title", "Close");
			var div = document.createElement("div");
			cmjQuery_(div).attr("class", "cm-preview-content");
			cmjQuery_(div).attr("preview_id", previewid);
			var arrow = document.createElement("div");
			if (isleftarrow == true) {
				cmjQuery_(arrow).attr("class", "cm-preview-arrow cm-preview-arrow-left");
			} else {
				cmjQuery_(arrow).attr("class", "cm-preview-arrow cm-preview-arrow-right");
			}
			var e = base.previewInvokeEvent_;
			var ch = cmjQuery_(window).height();
			cmjQuery_(div).width(winwidth);
			var pd = 220;
			var ph = ch - pd;
			var ay = cmjQuery_(e.target).parent().parent().offset();
			var eh = cmjQuery_(e.target).parent().parent().height();
			var py = ay.top;
			var cy = e.clientY - (e.pageY - py);
			py = py + eh / 2 - ph / 2;
			cy = cy + eh / 2 - ph / 2;
			if (cy + ph > (ch - pd / 2)) {
				py = py - (cy + ph - (ch - pd / 2));
				if (py < (ay.top + eh - ph)) {
					py = ay.top + eh - ph;
				}
			} else if (cy < pd / 2) {
				py = py + (cy * -1 + pd / 2);
				if (py > ay.top) {
					py = ay.top;
				}
			}
			cmjQuery_(div).css("top", py);
			var arrowtop = ay.top - py + eh / 2 - 14;
			cmjQuery_(arrow).css("top", arrowtop + "px");
			if (isleftarrow == false) {
				cmjQuery_(arrow).css("left", winwidth - 1);
			}
			cmjQuery_(div).height(ph);
			cmjQuery_(div).css("left", left);
			cmjQuery_(div).append(basenode);
			cmjQuery_(div).click(function (e) {
				try {
					if (cmjQuery_(e.target).parent().hasClass("mb-locate-link") == true || cmjQuery_(e.target).attr("tagName") == "A" || (cmjQuery_(e.target).attr("tagName") == "SPAN" && cmjQuery_(e.target).parent().attr("tagName") == "A")) {
						return true;
					}
				} catch (e) {}
				return false;
			});
			cmjQuery_(closebtn).click(function () {
				self.ClosePreview();
			});
			cmjQuery_(div).append(closebtn);
			cmjQuery_(div).append(arrow);
			cmjQuery_(document.body).append(div);
			cmjQuery_(".cm-preview-container").height(ph - 28);
			cmjQuery_(".cm-selected-result").addClass("cm-selected-result-onpopup");
			cmjQuery_(".cm-selected-result").removeClass("cm-selected-result");
		} catch (e) {
			base.utils_.CMLOG(e);
		}
	};
	proto.ClosePreview = function () {
		cmjQuery_(".cm-selected-result-onpopup").addClass("cm-selected-result");
		cmjQuery_(".cm-selected-result-onpopup").removeClass("cm-selected-result-onpopup");
		cmjQuery_(".cm-preview-close").remove();
		cmjQuery_(".cm-preview-content").remove();
		cmjQuery_(".cm-preview-overlay").remove();
	};
	proto.AddMailTopSubject = function (mail, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-title mb-font-big mb-preview-search-value mb-preview-search-value-subject');
		cmjQuery_(div).text(mail && mail.subject ? mail.subject : "");
		cmjQuery_(node).append(div);
	};
	proto.AddRecipient = function (email, reci) {
		var det = "";
		if (reci.e == email) {
			det = "me";
		} else if (reci.n.length > 0) {
			det = reci.n;
		} else {
			det = reci.e;
		}
		return det;
	};
	proto.AddMailTopHeader = function (mail, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-header');
		var d = document.createElement("div");
		cmjQuery_(d).attr("id", "mbMailFromTo");
		var fromdetails = "";
		var todetails = "";
		var todetailswrapper = "";
		if (mail.type == 0) {
			cmjQuery_(d).attr('class', 'mb-single-line cm-draft-caption');
			cmjQuery_(d).text("Draft");
		} else {
			cmjQuery_(d).attr('class', 'mb-single-line mb-preview-from-to-details');
			if (mail.sendername.length > 0) {
				fromdetails = mail.sendername;
			} else {
				fromdetails = mail.senderaddress;
			}
			if (mail.to.length > 0 || mail.cc.length > 0 || mail.bcc.length > 0) {
				todetailswrapper = "<span class='mb-to-details'> to <span class='mb-preview-search-value'>";
			}
			var sep = "";
			if (mail.to.length > 0) {
				for (var i = 0; i < mail.to.length; i++) {
					var t = mail.to[i];
					sep = "";
					if (i != mail.to.length - 1 || mail.cc.length > 0 || mail.bcc.length > 0) {
						sep = ", ";
					}
					todetails = todetails + self.AddRecipient(mail.accountemail, t) + sep;
				}
			}
			if (mail.cc.length > 0) {
				for (var i = 0; i < mail.cc.length; i++) {
					var t = mail.cc[i];
					sep = "";
					if (i != mail.cc.length - 1 || mail.bcc.length > 0) {
						sep = ", ";
					}
					todetails = todetails + self.AddRecipient(mail.accountemail, t) + sep;
				}
			}
			if (mail.bcc.length > 0) {
				for (var i = 0; i < mail.bcc.length; i++) {
					if (i == 0) {
						todetails = todetails + "bcc: ";
					}
					var t = mail.bcc[i];
					sep = "";
					if (i != mail.bcc.length - 1) {
						sep = ", ";
					}
					todetails = todetails + self.AddRecipient(mail.accountemail, t) + sep;
				}
			}
			if (todetailswrapper.length > 0) {
				todetailswrapper = todetailswrapper + todetails + "</span></span>";
			}
			cmjQuery_(d).append("<span class='mb-preview-search-value mb-preview-search-value-from'>" + fromdetails + "</span>");
			cmjQuery_(d).append(todetailswrapper);
			cmjQuery_(d).attr("title", fromdetails + " to " + todetails);
		}
		cmjQuery_(div).append(d);
		cmjQuery_(node).append(div);
		var div = document.createElement("div");
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var gotolink = document.createElement("div");
		cmjQuery_(gotolink).attr("class", "mb-locate-link");
		base.AddLinkToMail(mail, gotolink);
		cmjQuery_(td).append(gotolink);
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', 'mb-preview-show-details');
		cmjQuery_(td).width(150);
		var span = document.createElement("span");
		cmjQuery_(span).attr('class', 'mb-link');
		cmjQuery_(span).text("show details");
		cmjQuery_(span).attr('title', 'show details');
		cmjQuery_(span).click(function () {
			if (cmjQuery_(".mb-preview-header-table").is(':visible') == true) {
				cmjQuery_(this).html("show details");
				cmjQuery_(this).attr('title', 'show details');
				cmjQuery_(".mb-preview-header-table").hide();
			} else {
				cmjQuery_(".mb-preview-header-table").show();
				cmjQuery_(this).html("hide details");
				cmjQuery_(this).attr('title', 'hide details');
			}
		});
		cmjQuery_(td).append(span);
		cmjQuery_(td).append(" " + base.dateFormat_.formatDate((mail.timestamp) * 1000));
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(div).append(table);
		cmjQuery_(node).append(div);
	};
	proto.AddLinkToCalendar = function (event, node) {
		if (typeof event == "undefined" || event.url == "undefined") {
			return false;
		}
		var a = document.createElement("a");
		cmjQuery_(a).attr("href", event.url.toLowerCase());
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("title", "View thread in Gmail");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View thread in Gmail");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.AddDocFolderInfo = function (doc, node) {
		cmjQuery_(node).append("&nbsp;");
		if (doc.folder && doc.folder.length > 0) {
			for (var i = 0; i < doc.folder.length; i++) {
				var foldername = doc.folder[i].n;
				var folder = document.createElement("span");
				cmjQuery_(folder).attr('class', 'cm-font-small cm-folder');
				cmjQuery_(folder).text(foldername);
				cmjQuery_(folder).attr("title", "collections: " + foldername);
				cmjQuery_(node).append("&nbsp;");
				cmjQuery_(node).append(folder);
			}
		}
	};
	proto.AddDocTopTitle = function (doc, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-title mb-font-big mb-preview-search-value mb-doc-search-value-title');
		cmjQuery_(div).text(doc && doc.title ? doc.title : "");
		self.AddDocFolderInfo(doc, div);
		cmjQuery_(node).append(div);
	};
	proto.AddEventTopTitle = function (event, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-title mb-font-big mb-preview-search-value mb-preview-search-value-what mb-doc-search-value-title mb-single-line');
		cmjQuery_(div).text(event && event.title ? event.title : "");
		cmjQuery_(node).append(div);
	};
	proto.AddTweetTopTitle = function (tweet, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-title mb-font-big mb-preview-search-value mb-doc-search-value-title mb-single-line');
		cmjQuery_(div).text(tweet && tweet.tweet ? tweet.tweet : "");
		cmjQuery_(node).append(div);
	};
	proto.AddDocTopHeader = function (doc, node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-header');
		var d = document.createElement("div");
		cmjQuery_(d).attr('class', 'mb-single-line-with-wrap mb-preview-shared-details');
		var fromdetails = "";
		var todetails = "";
		var todetailswrapper = "";
		if (doc.sharedmembers.length == 0) {
			todetails = "Not shared";
		} else {
			if (base.accountUserId_ != null && base.utils_.strnicmp(doc.accountemail, base.accountUserId_, doc.accountemail.length) == true) {
				fromdetails = "me";
			} else {
				fromdetails = doc.owner;
			}
			var collaborators = 0;
			var viewers = 0;
			for (var i = 0; i < doc.sharedmembers.length; i++) {
				var m = doc.sharedmembers[i];
				if (m.p == "c") {
					collaborators++;
				} else if (m.p == "v") {
					viewers++;
				}
			}
			doc.collaborators = collaborators;
			doc.viewers = viewers;
			if (collaborators > 0) {
				todetails = todetails + " to " + collaborators + " Collaborator";
				if (collaborators > 1) {
					todetails = todetails + "s";
				}
			}
			if (viewers > 0) {
				if (collaborators > 0) {
					todetails = todetails + ", ";
				} else {
					todetails = todetails + " to ";
				}
				todetails = todetails + "" + viewers + " Viewer";
				if (viewers > 1) {
					todetails = todetails + "s";
				}
			}
			cmjQuery_(d).append("<span class='mb-preview-search-value mb-preview-search-value-from'>" + fromdetails + "</span>");
		}
		cmjQuery_(d).append("<span class='mb-grey'>" + todetails + "</span>");
		cmjQuery_(div).append(d);
		cmjQuery_(div).attr("title", cmjQuery_(div).text());
		cmjQuery_(node).append(div);
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-preview-top-header mb-grey');
		var today = new Date();
		var timeNow = today.getTime();
		var diffTime = timeNow - doc.updatedtime * 1000;
		var datestring;
		if (diffTime < (24 * 60 * 60 * 1000)) {
			datestring = base.dateFormat_.formatDate(doc.updatedtime * 1000, true, true);
		} else {
			datestring = base.dateFormat_.formatDateWith(doc.updatedtime * 1000, "m/d/yy h:MM:ss tt");
		}
		var updateduserinfo = "Updated " + datestring + " by ";
		if (doc.lastmodifiedusername.length > 0) {
			updateduserinfo = updateduserinfo + doc.lastmodifiedusername;
		} else {
			updateduserinfo = updateduserinfo + doc.lastmodifieduseremail;
		}
		cmjQuery_(div).html(updateduserinfo);
		cmjQuery_(node).append(div);
		var div = document.createElement("div");
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var gotolink = document.createElement("div");
		cmjQuery_(gotolink).attr("class", "mb-locate-link");
		base.AddLinkToDoc(doc, gotolink);
		cmjQuery_(td).append(gotolink);
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', 'mb-preview-show-details');
		cmjQuery_(td).width(80);
		var span = document.createElement("span");
		cmjQuery_(span).attr('class', 'mb-link');
		cmjQuery_(span).text("show details");
		cmjQuery_(span).attr('title', 'show details');
		cmjQuery_(span).click(function () {
			if (cmjQuery_(".mb-preview-header-table").is(':visible') == true) {
				cmjQuery_(this).html("show details");
				cmjQuery_(this).attr('title', 'show details');
				cmjQuery_(".mb-preview-header-table").hide();
			} else {
				cmjQuery_(".mb-preview-header-table").show();
				cmjQuery_(this).html("hide details");
				cmjQuery_(this).attr('title', 'hide details');
			}
		});
		cmjQuery_(td).append(span);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(div).append(table);
		cmjQuery_(node).append(div);
	};
	proto.AddDocSharedMembers = function (doc, tbody) {
		if (doc.sharedmembers.length == 0) {
			return;
		}
		if (doc.collaborators > 0) {
			var index = 0;
			for (var i = 0; i < doc.sharedmembers.length; i++) {
				var d = doc.sharedmembers[i];
				if (d.p != "c") {
					continue;
				}
				self.AddMember(d, tbody, "can edit", index, doc.collaborators);
				index++;
			}
		}
		if (doc.viewers > 0) {
			var index = 0;
			for (var i = 0; i < doc.sharedmembers.length; i++) {
				var d = doc.sharedmembers[i];
				if (d.p != "v") {
					continue;
				}
				self.AddMember(d, tbody, "can view", index, doc.viewers);
				index++;
			}
		}
	};
	proto.AddMember = function (doc, tbody, caption, index, max) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		if (index != 0) {
			cmjQuery_(td).append(base.utils_.SetCaption("&nbsp;"));
		} else {
			cmjQuery_(td).append(base.utils_.SetCaption(caption));
		}
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td mb-preview-search-value mb-preview-search-value-to");
		var sep = "";
		if (index != max - 1) {
			sep = ", ";
		}
		self.AddText(td, doc.e + sep);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
	};
	proto.MakeHyperlink = function () {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		cmjQuery_(".mb-preview-search-value-body").hyperlinkRegex(exp, "_blank", false);
		exp = /(\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b)/ig;
		cmjQuery_(".mb-preview-search-value-body").hyperlinkRegex(exp, "_blank", true);
	};
	proto.FindOwnerGuestIndexInGuestJson = function (guests, accountemail) {
		for (var i = 0; i < guests.length; i++) {
			if (accountemail == guests[i].e) {
				return i;
			}
		}
		return -1;
	};
	proto.GetEventDate = function (event, isallday) {
		var today = new Date();
		var curr_day = today.getDate();
		var curr_year = today.getFullYear();
		var curr_month = today.getMonth();
		var rec_date = null;
		var rec_day = null;
		var rec_year = null;
		var rec_month = null;
		var stimedateobj;
		var etimedateobj
		if (event.starttime == undefined || event.endtime == undefined) {
			return " ";
		}
		var stime = event.starttime * 1000;
		var etime = event.endtime * 1000;
		if (isNaN(parseInt(stime)) == false) {
			stimedateobj = new Date(parseInt(stime));
		} else {
			stimedateobj = new Date(stime);
		}
		if (stimedateobj == null) {
			return " ";
		}
		if (isNaN(parseInt(etime)) == false) {
			etimedateobj = new Date(parseInt(etime));
		} else {
			etimedateobj = new Date(etime);
		}
		if (etimedateobj == null) {
			return " ";
		}
		var dateformat;
		if (curr_year == stimedateobj.getFullYear()) {
			if (isallday == true) {
				dateformat = "mmm d";
			} else {
				dateformat = "mmm d hh:MMtt";
			}
		} else {
			if (isallday == true) {
				dateformat = "mm/dd/yyyy";
			} else {
				dateformat = "mm/dd/yyyy hh:MMtt";
			}
		}
		eventdate = base.dateFormat_.dateFormat(stimedateobj, dateformat);
		dateformat = null;
		if (stimedateobj.getFullYear() != etimedateobj.getFullYear()) {
			dateformat = "mm/dd/yyyy ";
		} else if (stimedateobj.getMonth() != etimedateobj.getMonth() || stimedateobj.getDay() != etimedateobj.getDay()) {
			dateformat = "mmm d ";
		}
		if (isallday != true) {
			if (dateformat != null) {
				dateformat += "hh:MMtt";
			} else {
				dateformat = "hh:MMtt";
			}
		}
		if (dateformat != null) {
			var endtimestr = base.dateFormat_.dateFormat(etimedateobj, dateformat);
			eventdate += " to " + endtimestr;
		}
		return eventdate;
	};
	proto.GuestAttendeStatus = function (gueststatus, asguesticon) {
		gueststatus = gueststatus || "accepted";
		var status = " ";
		if (gueststatus == "accepted") {
			if (asguesticon == true) {
				status = "mb-event-guest-yes-status";
			} else if (asguesticon == false) {
				status = "mb-event-status-yes";
			} else {
				status = "Yes, I'm going";
			}
		} else if (gueststatus == "declined") {
			if (asguesticon == true) {
				status = "mb-event-guest-no-status";
			} else if (asguesticon == false) {
				status = "mb-event-status-no";
			} else {
				status = "No, I'm not going";
			}
		} else if (gueststatus == "tentative") {
			if (asguesticon == true) {
				status = "mb-event-guest-maybe-status";
			} else if (asguesticon == false) {
				status = "mb-event-status-maybe";
			} else {
				status = "I might go";
			}
		} else {
			if (asguesticon == true) {
				status = "";
			} else if (asguesticon == false) {
				status = "";
			} else {
				status = "";
			}
		}
		return status;
	};
	proto.GetEmptyMessage = function (sectype) {
		var typemsg = "";
		switch (sectype) {
		case base.c_.CONTACT:
			typemsg = "contacts";
			break;
		case base.c_.MAIL:
			typemsg = "mails";
			break;
		case base.c_.EVENT:
			typemsg = "events";
			break;
		case base.c_.TWEET:
			typemsg = "tweets";
			break;
		case base.c_.DOC:
		case base.c_.EVERYTHING:
			typemsg = "documents";
			break;
		}
		var msg = "<span class='cm-font-normal' style='color:black'>Your search - <span style='font-weight:bold'>" + base.activeSearchString_ + "</span> - did not match any " + typemsg + ".<br/>" + "<br/>Suggestions:<br/><br/>" + "  * Make sure all words are spelled correctly.<br/>" + "   * Try different keywords.<br/>" + "  * Try more general keywords.</span>";
		return msg;
	};
	proto.UpdateStatus = function () {
		try {
			var result = base.plugin_.GetIndexStatus(function (response) {
					var result = JSON.parse(response);
					base.statusMsg_ = result;
					base.accountInfo_ = JSON.stringify(result.accounts);
					var timeout = 500;
					if (base.statusMsg_ && typeof(base.statusMsg) != undefined && base.statusMsg_.isValidResponse == 1) {
						base.SetStatusMessage();
						timeout = base.c_.UPDATE_STATUS_DELAY;
					}
					window.setTimeout(function () {
						self.UpdateStatus();
					}, timeout);
				});
		} catch (e) {
			base.utils_.CMLOG(e);
		}
	};
	proto.HandleTracking = function (category, issingleview) {
		return;
	};
	proto.AddText = function (node, value) {
		var div = document.createElement("div");
		cmjQuery_(div).text(value);
		cmjQuery_(node).append(div);
	};
	proto.InitializeIframe = function (iframe) {
		var headID = iframe.contentWindow.document.getElementsByTagName("head")[0];
		try {
			headID.innerHTML = "<style>.highlight{background-color: #FFF7CB !important;border: 1px solid #FFE475 !important;}</style>";
		} catch (e) {}
		iframe.contentWindow.document.body.innerHTML = "Loading...";
		cmjQuery_(iframe.contentWindow.document.body).css("font-size", "12px");
	};
	proto.GetAttachmentHandler = function (mail, attachment) {
		var func = function (e) {
			base.plugin_.OpenAttachment(mail.accountemail, mail.accountid, mail.uid, attachment.s, attachment.n, attachment.e, self.OpenAttachemntHandler(e));
		};
		return func;
	};
	proto.OpenAttachemntHandler = function (e) {
		var func = function (response) {
			var FILE_DOWNLOAD_ALREADY_IN_PROGRESS = -3;
			var FILE_NOTDOWNLOADED = 0;
			base.attachmentDownloadStatus_ = response;
			if (base.attachmentDownloadStatus_ == FILE_DOWNLOAD_ALREADY_IN_PROGRESS) {
				alert("One download is already in progress, please try after some time");
				return;
			} else if (base.attachmentDownloadStatus_ == FILE_NOTDOWNLOADED) {
				var anchor = cmjQuery_(e.target);
				base.utils_.AppendBusy(anchor);
				window.setTimeout(function () {
					self.CheckForOpenAttachment(anchor);
				}, base.c_.ATTACHMENT_OPEN_DELAY);
			} else {
				base.utils_.RemoveBusy(anchor);
				self.ReportOpenAttachmentErrorStatus(base.attachmentDownloadStatus_);
			}
		};
		return func;
	};
	proto.ReportOpenAttachmentErrorStatus = function (_errno) {
		if (_errno == -1) {
			alert("Failed to open attachment");
		} else if (_errno == -2) {
			alert("Failed to download attachment, Check \"Manage Accounts\" for more details");
		}
	};
	proto.CheckForOpenAttachment = function (target) {
		base.plugin_.CheckForOpenAttachment(self.CheckForOpenAttachmentHandler(target));
	};
	proto.CheckForOpenAttachmentHandler = function (target) {
		var func = function (response) {
			var FILE_NOTDOWNLOADED = 0;
			base.attachmentDownloadStatus_ = response;
			if (base.attachmentDownloadStatus_ == FILE_NOTDOWNLOADED) {
				window.setTimeout(function (target) {
					self.CheckForOpenAttachment();
				}, base.c_.ATTACHMENT_OPEN_DELAY);
			} else {
				base.utils_.RemoveBusy(target);
				self.ReportOpenAttachmentErrorStatus(base.attachmentDownloadStatus_);
			}
		};
		return func;
	};
	proto.CalculateSearchResultCount = function () {
		var singlerowheight = 46;
		if (self.isWidget_ != true) {
			singlerowheight = 60;
		}
		var unusedheight = 125;
		if (self.isWidget_ != true) {
			unusedheight = 160;
		}
		var containerhgt = screen.height - unusedheight;
		base.maxContactSearchResultCount_ = parseInt(Math.ceil(containerhgt / singlerowheight));
		if (base.maxContactSearchResultCount_ < 5) {
			base.maxContactSearchResultCount_ = 5;
		}
		base.maxSearchResultCount_ = parseInt(Math.ceil(base.maxContactSearchResultCount_ * 2 / 3));
		if (base.maxSearchResultCount_ < 5) {
			base.maxSearchResultCount_ = 5;
		}
		base.plugin_.SetMaxSearchResult(base.maxContactSearchResultCount_, base.maxSearchResultCount_, function () {});
	};
	proto.HandleMouseEvents = function () {
		window.setTimeout(function () {
			if (base.acTimeout_) {
				clearTimeout(base.acTimeout_);
				base.acTimeout_ = null;
			}
			base.acTimeout_ = window.setTimeout(function () {
					base.HandleClearButton();
					base.common_.HandleAutoComplete(0);
				}, base.c_.AUTOCOMPLETE_DELAY);
		}, 100);
	};
	proto.EscapeMailMessageId = function (mail) {
		if (mail && mail.messageid) {
			try {
				mail.messageid = mail.messageid.replace(/^<*/, "").replace(/>*$/, "");
				mail.messageid = mail.messageid.replace(/^-*/, "");
				while (1) {
					var ch = mail.messageid.charAt(0);
					if (ch == "!" || ch == "&") {
						mail.messageid = mail.messageid.substring(1, mail.messageid.length);
					} else {
						break;
					}
				}
			} catch (e) {}

		}
	};
	proto.IsPluginLoaded = function () {
		if (cmjQuery_.browser.webkit != true) {
			var evt = document.createEvent("Events");
			evt.initEvent("CM_FF_Plugin_Load_Check", true, false);
			base.plugin_.plugin_.dispatchEvent(evt);
			var attribname = "IsPluginLoaded";
			window.setTimeout(function () {
				if (cmjQuery_(base.plugin_.plugin_).hasAttr(attribname) == true) {
					var response = cmjQuery_(base.plugin_.plugin_).attr(attribname);
					if (response == "false") {
						base.ShowRestartMessage();
					}
				}
			}, 200);
		}
		return true;
	};
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.Constants = function () {
	var self = this;
	var proto = CloudMagic.Constants.prototype;
	self.MAX_SEARCH_RESULT_COUNT = 20;
	self.ALL_VIEW_MAX_SEARCH_RESULT_COUNT = 5;
	self.MAX_WIDGET_SEARCH_RESULT_COUNT = 20;
	self.MAX_SINGLE_SEARCH_RESULT_COUNT = 20;
	self.EMPTY_SEARCH = "Search...(Ctrl+/)";
	self.UPDATE_STATUS_DELAY = 30000;
	self.ATTACHMENT_OPEN_DELAY = 2000;
	self.CHECK_FOR_MORE_DELAY = 150;
	self.AUTOCOMPLETE_DELAY = 200;
	self.WIDGET_MIN_HEIGHT = 200;
	self.WIDGET_DEFAULT_TOP = 40;
	self.WIDGET_DEFAULT_TOP_SINGLE_DOC = 40;
	self.WIDGET_DEFAULT_TOP_TWEET = 93;
	self.WIDGET_DEFAULT_WIDTH_GMAIL = 306;
	self.WIDGET_DEFAULT_WIDTH_GDOC = 335;
	self.WIDGET_DEFAULT_WIDTH_GCAL = 306;
	self.WIDGET_DEFAULT_LEFT_GMAIL = 170;
	self.WIDGET_DEFAULT_LEFT_DOC = 400;
	self.DEF_MAIL_VIEW_WIDTH = 310;
	self.MAX_SNIPPET_CHAR_SIZE = 149;
	self.MAX_PREVIEW_WINDOW_HEIGHT = 450;
	self.MAX_PREVIEW_WINDOW_WIDTH = 700;
	self.CONTENT_TOP = 155;
	self.PREVIEW_WINDOW_LEFT_POS = 450;
	self.ELLIPSIS = "&#8230;";
	self.MAIL_SUBJECT_SHOW_LEN = 80;
	self.EVENT_TITLE_SHOW_LEN = 10;
	self.MAIL_ROW_LWN = 110;
	self.TWEET_STATUS_HOME_TIMELINE = 0;
	self.TWEET_STATUS_USER_TIMELINE = 1;
	self.SHOW_MAILS_ON_MOUSE_MOVE = 0;
	self.NO_VIEW = 0;
	self.AC_VIEW = 1;
	self.ML_VIEW = 2;
	self.M_VIEW = 3;
	self.EVERYTHING = 0;
	self.CONTACT = 1;
	self.MAIL = 2;
	self.DOC = 4;
	self.EVENT = 8;
	self.TWEET = 16;
	self.DEFAULT_TAB_SELECTED = "SelectedWidgetTab";
	self.DEFAULT_SEARCHABLE_ITEMS = 31;
	self.DEFAULT_SEARCHABLE_ITEMS_IN_GMAIL = 250;
	self.DEFAULT_SEARCHABLE_ITEMS_IN_GDOC = 252;
	self.DEFAULT_WIDGET_LAYOUT = 421;
	self.DEFAULT_WIDGET_LAYOUT_IN_GMAIL = 142;
	self.DEFAULT_WIDGET_LAYOUT_IN_GDOC = 124;
	self.SNIPPET_HIGHLIGHT_SPAN_PATTERN = "<span class='highlight'>"
		self.SNIPPET_HIGHLIGHT_SPAN_PATTERN_LEN = 24;
	self.TWEET_USER_PROFILE_IMAGE = 'https://api.twitter.com/1/users/profile_image?screen_name=';
	self.MIGRATING_MSG = "Preparing your data files. This may take a few seconds. Please try after sometime.";
	self.SCHEMA_CONFLICT_MSG = "Found newer version of data files. Please update CloudMagic extension.";
	self.NEW_USER_BALLOON_MESSAGE = "<a target='_blank' id='mbRegisterAccount' href='#'>Add your accounts</a> and start searching!<br/><br/><b>Tip</b>: Drag the search bar to move it to a location more convenient to you.";
	self.EXISTING_USER_BALLOON_MESSAGE1 = "CloudMagic is reindexing to improve search speeds up to 100 times!";
	self.EXISTING_USER_BALLOON_MESSAGE2 = "This is just a one time activity and NOT done with every CloudMagic update.";
	self.BALLOON_MESSAGE_1 = "CloudMagic is now available for smartphones (iPhone and Android). With this new upgrade you can use CloudMagic across desktop and mobile. <a target='_blank' href='http://blog.cloudmagic.com/2012/01/11/cloudmagic-now-available-for-iphone-and-android-devices/'>Read more...</a>";
	self.BALLOON_MESSAGE_2 = "<a target='_blank' id='mbUpgradeExtension' href='#'>Click here to upgrade and create an account</a>.";
	self.COMMON_BALLOON_MESSAGE_1 = "<div class='mb-balloon-dismiss' id='mbCloseBalloonMsg'></div>";
	self.COMMON_BALLOON_MESSAGE_2 = "<div class='mb-balloon-dismiss-2'><span id='mbCloseBalloonMsg' class='mb-link'>Dismiss</span></div>";
	self.CHROME_GALLERY_URL = "https://chrome.google.com/webstore/detail/eeabeiioncmgphlgcgnmhjahjjmimkmp";
	self.FIREFOX_GALLERY_URL = "https://addons.mozilla.org/firefox/addon/cloudmagic/";
	self.PROMO_MSG = "This version of CloudMagic is discontinued! <br/>" + "<a target='_blank' id='mbUpgradeExtension' href='#'>Please click here to upgrade</a>.<br/><br/>" + "What's new in CloudMagic?<br/>" + "&nbsp;&nbsp;1. Create one account and use it across desktop and mobile.<br/>" + "&nbsp;&nbsp;2. Apps for iPhone and Android.<br/>" + "&nbsp;&nbsp;3. Extensions for Chrome, Firefox and Safari.<br/>" + "&nbsp;&nbsp;4. <a target='_blank' href='http://blog.cloudmagic.com/2012/01/11/cloudmagic-now-available-for-iphone-and-android-devices/'>Read more...</a><br/>";
	self.PREVIEW_WINDOW_OPTIONS = {
		autoPosition : true,
		opacity : 70,
		overlayCss : {
			backgroundColor : "#000000"
		},
		overlayClose : true,
		containerCss : {
			border : "2px solid #666666",
			padding : "10px",
			backgroundColor : "white",
			width : "50%",
			height : "50%"
		}
	};
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.InterfacePlugin = function () {
	var self = this;
	var proto = CloudMagic.InterfacePlugin.prototype;
	self.plugin_ = null;
	self.pluginElement_ = null;
	self.utils_ = new CloudMagic.WidgetUtilities();
	self.INVALID_ARGUMENTS = "Invalid arguments!";
	self.RESPONSE_TIMEOUT = 30000;
	self.dataRequestMetaInfo = {};
	proto.Init = function () {
		cmjQuery_('#cmInterfacePlugin').remove();
		var p;
		p = document.createElement("embed");
		p.id = 'cmInterfacePlugin';
		p.type = 'application/x-cloudmagic-interface';
		p.width = 0;
		p.height = 0;
		document.body.appendChild(p);
		self.plugin_ = p;
	};
	proto.GetRequestMetaInfo = function (requestname) {
		if (typeof self.dataRequestMetaInfo[requestname] == "undefined") {
			self.dataRequestMetaInfo[requestname] = new Object();
		}
		return self.dataRequestMetaInfo[requestname];
	};
	proto.InvokeXPCOMFunction = function (functionname, callback) {
		cmjQuery_(self.plugin_).removeAttr(functionname);
		cmjQuery_(self.plugin_).attr("requestType", functionname);
		var evt = document.createEvent("Events");
		evt.initEvent("CMDataRequest", true, false);
		self.plugin_.dispatchEvent(evt);
		var req = self.GetRequestMetaInfo(functionname);
		self.HandleResponse(functionname, callback, req);
	};
	proto.SetParameters = function (functionname, arglist, test) {
		for (var i = 0; i < arglist.length - 1; i++) {
			cmjQuery_(self.plugin_).attr(functionname + "_Param" + (i + 1), arglist[i].toString());
		}
	};
	proto.GetAppPort = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[GetAppPort]");
		}
		var response = self.plugin_.GetAppPort();
		if (callback) {
			callback(response);
		}
	};
	proto.GetAppUUID = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[GetAppUUID]");
		}
		var response = self.plugin_.GetAppUUID();
		if (callback) {
			callback(response);
		}
	};
	proto.GetAppVersion = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[GetAppVersion]");
		}
		var response = self.plugin_.GetAppVersion();
		if (callback) {
			callback(response);
		}
	};
	proto.GetIndexStatus = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[GetIndexStatus]");
		}
		var response = self.plugin_.GetIndexStatus();
		if (callback) {
			callback(response);
		}
	};
	proto.IsNewVersion = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[IsNewVersion]");
		}
		var response = self.plugin_.IsNewVersion();
		if (callback) {
			callback(response);
		}
	};
	proto.GetPreferences = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[GetPreferences]");
		}
		var response = self.plugin_.GetPreferences();
		if (callback) {
			callback(response);
		}
	};
	proto.SetPreferences = function (name, value, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[SetPreferences]");
		}
		var response = self.plugin_.SetPreferences(name, value.toString());
		if (callback) {
			callback(response);
		}
	};
	proto.OpenAttachment = function (email, accountid, mailuid, section, filename, encoding, callback) {
		if (arguments.length != 7) {
			alert(self.INVALID_ARGUMENTS + "[OpenAttachment]");
		}
		var response = self.plugin_.OpenAttachment(email, accountid, mailuid, section, filename, encoding);
		if (callback) {
			callback(response);
		}
	};
	proto.CheckForOpenAttachment = function (callback) {
		if (arguments.length != 1) {
			alert(self.INVALID_ARGUMENTS + "[CheckForOpenAttachment]");
		}
		var response = self.plugin_.CheckForOpenAttachment();
		if (callback) {
			callback(response);
		}
	};
	proto.GetAutoComplete = function (query, searchtype, email, callback) {
		if (arguments.length != 4) {
			alert(self.INVALID_ARGUMENTS + "[GetAutoComplete]");
		}
		var response = self.plugin_.GetAutoComplete(query, searchtype, email);
		if (callback) {
			callback(response);
		}
	};
	proto.GetRemainingACMails = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingACMails]");
		}
		var response = self.plugin_.GetRemainingACMails(offset, queryid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetRemainingACDocs = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingACDocs]");
		}
		var response = self.plugin_.GetRemainingACDocs(offset, queryid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetRemainingACEvents = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingACEvents]");
		}
		var response = self.plugin_.GetRemainingACEvents(offset, queryid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetRemainingACTweets = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingACTweets]");
		}
		var response = self.plugin_.GetRemainingACTweets(offset, queryid);
		if (callback) {
			callback(response);
		}
	}
	proto.GetRemainingACContacts = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingACContacts]");
		}
		var response = self.plugin_.GetRemainingACContacts(offset, queryid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetRemainingContacts = function (offset, queryid, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[GetRemainingContacts]");
		}
		var response = self.plugin_.GetRemainingContacts(offset, queryid);
		if (callback) {
			callback(response);
		}
	};
	proto.SearchForMails = function (query, recindex, rectts, offset, callback) {
		if (arguments.length != 5) {
			alert(self.INVALID_ARGUMENTS + "[SearchForMails]");
		}
		var response = self.plugin_.SearchForMails(query, recindex, rectts, offset);
		if (callback) {
			callback(response);
		}
	};
	proto.SearchForDocs = function (query, recindex, rectts, offset, callback) {
		if (arguments.length != 5) {
			alert(self.INVALID_ARGUMENTS + "[SearchForDocs]");
		}
		var response = self.plugin_.SearchForDocs(query, recindex, rectts, offset);
		if (callback) {
			callback(response);
		}
	};
	proto.SearchForContacts = function (query, offset, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[SearchForContacts]");
		}
		var response = self.plugin_.SearchForContacts(query, offset);
		if (callback) {
			callback(response);
		}
	};
	proto.SearchForEvents = function (query, recindex, rectts, offset, callback) {
		if (arguments.length != 5) {
			alert(self.INVALID_ARGUMENTS + "[SearchForEvents]");
		}
		var response = self.plugin_.SearchForEvents(query, recindex, rectts, offset);
		if (callback) {
			callback(response);
		}
	};
	proto.SearchForTweets = function (query, recindex, rectts, offset, callback) {
		if (arguments.length != 5) {
			alert(self.INVALID_ARGUMENTS + "[SearchForTweets]");
		}
		var response = self.plugin_.SearchForTweets(query, recindex, rectts, offset);
		if (callback) {
			callback(response);
		}
	};
	proto.GetMail = function (mailid, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[GetMail]");
		}
		var response = self.plugin_.GetMail(mailid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetDoc = function (docid, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[GetDoc]");
		}
		var response = self.plugin_.GetDoc(docid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetEvent = function (eventid, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[GetEvent]");
		}
		var response = self.plugin_.GetEvent(eventid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetTweet = function (eventid, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[GetTweet]");
		}
		var response = self.plugin_.GetTweet(eventid);
		if (callback) {
			callback(response);
		}
	};
	proto.GetContact = function (contactid, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[GetDoc]");
		}
		var response = self.plugin_.GetContact(contactid);
		if (callback) {
			callback(response);
		}
	};
	proto.SetMaxSearchResult = function (contactcount, noncontactcount, callback) {
		if (arguments.length != 3) {
			alert(self.INVALID_ARGUMENTS + "[SetMaxSearchResult]");
		}
		var response = self.plugin_.SetMaxSearchResult(contactcount, noncontactcount);
		if (callback) {
			callback(response);
		}
	};
	proto.SetAccountEmail = function (email, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[SetAccountEmail]");
		}
		var response = self.plugin_.SetAccountEmail(email);
		if (callback) {
			callback(response);
		}
	};
	proto.SetUIType = function (type, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[SetUIType]");
		}
		var response = self.plugin_.SetUIType(type);
		if (callback) {
			callback(response);
		}
	};
	proto.OpenInTab = function (url, callback) {
		if (arguments.length != 2) {
			alert(self.INVALID_ARGUMENTS + "[OpenInTab]");
		}
		if (window.location.protocol == "chrome-extension:") {
			chrome.extension.sendRequest({
				requestType : "CloudMagicOpenInTab",
				openUrl : url
			}, function () {});
		} else {
			var functionname = "CloudMagicOpenInTab";
			proto.SetParameters(functionname, arguments);
			var evt = document.createEvent("Events");
			evt.initEvent(functionname, true, false);
			self.plugin_.dispatchEvent(evt);
		}
	};
	proto.HandleResponse = function (responseAttribute, func, reqqobj, totalelapsedtime) {
		totalelapsedtime = totalelapsedtime || 0;
		var DELAY = 100;
		reqqobj.timer = window.setTimeout(function () {
				if (cmjQuery_(self.plugin_).hasAttr(responseAttribute) == true) {
					var response = cmjQuery_(self.plugin_).attr(responseAttribute);
					if (func != null) {
						func(response);
					}
				} else {
					if (totalelapsedtime > self.RESPONSE_TIMEOUT) {
						if (func != null) {
							func(null);
						}
					} else {
						totalelapsedtime += DELAY;
						self.HandleResponse(responseAttribute, func, reqobj, totalelapsedtime);
					}
				}
			}, DELAY);
	};
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.DateUtilities = function () {
	var self = this;
	var proto = CloudMagic.DateUtilities.prototype;
	proto.dateFormat = function () {
		var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len)
				val = "0" + val;
			return val;
		};
		return function (date, mask, utc) {
			var dF = self.dateFormat;
			if (arguments.length == 1 && (typeof date == "string" || date instanceof String) && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}
			date = date ? new Date(date) : new Date();
			if (isNaN(date))
				throw new SyntaxError("invalid date");
			mask = String(dF.masks[mask] || mask || dF.masks["default"]);
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}
			var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d : d,
				dd : pad(d),
				ddd : dF.i18n.dayNames[D],
				dddd : dF.i18n.dayNames[D + 7],
				m : m + 1,
				mm : pad(m + 1),
				mmm : dF.i18n.monthNames[m],
				mmmm : dF.i18n.monthNames[m + 12],
				yy : String(y).slice(2),
				yyyy : y,
				h : H % 12 || 12,
				hh : pad(H % 12 || 12),
				H : H,
				HH : pad(H),
				M : M,
				MM : pad(M),
				s : s,
				ss : pad(s),
				l : pad(L, 3),
				L : pad(L > 99 ? Math.round(L / 10) : L),
				t : H < 12 ? "a" : "p",
				tt : H < 12 ? "am" : "pm",
				T : H < 12 ? "A" : "P",
				TT : H < 12 ? "AM" : "PM",
				Z : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o : (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S : ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};
			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}
	();
	proto.dateFormat.masks = {
		"default" : "ddd mmm dd yyyy HH:MM:ss",
		shortDate : "m/d/yy",
		mediumDate : "mmm d, yyyy",
		longDate : "mmmm d, yyyy",
		fullDate : "dddd, mmmm d, yyyy",
		shortTime : "h:MM TT",
		mediumTime : "h:MM:ss TT",
		longTime : "h:MM:ss TT Z",
		isoDate : "yyyy-mm-dd",
		isoTime : "HH:MM:ss",
		isoDateTime : "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime : "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};
	proto.dateFormat.i18n = {
		dayNames : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		monthNames : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	};
	proto.formatDate = function (_timeValue, _showDiffFromCurrent, _onlyDiff) {
		var today = new Date();
		var diff = _showDiffFromCurrent || false;
		var curr_day = today.getDate();
		var curr_year = today.getFullYear();
		var curr_month = today.getMonth();
		var rec_date = null;
		var rec_day = null;
		var rec_year = null;
		var rec_month = null;
		var received = null;
		var value = _timeValue;
		if (isNaN(parseInt(value)) == false) {
			rec_date = new Date(parseInt(value));
		} else {
			rec_date = new Date(value);
		}
		rec_day = rec_date.getDate();
		rec_year = rec_date.getFullYear();
		rec_month = rec_date.getMonth();
		received = null;
		if (curr_day == rec_day && curr_month == rec_month && curr_year == rec_year) {
			received = self.dateFormat(rec_date, "h:MM tt");
		} else if (curr_year == rec_year) {
			received = self.dateFormat(rec_date, "mmm d");
		} else {
			received = self.dateFormat(rec_date, "m/d/yy");
		}
		if (diff == true) {
			var timeNow = today.getTime();
			var diffTime = timeNow - _timeValue;
			var timeForOneMinute = 1000 * 60;
			var timeForOneHour = timeForOneMinute * 60;
			var timeForOneDay = timeForOneHour * 24;
			var noOfDays = Math.floor(diffTime / timeForOneDay);
			var googleTypeAgoTime = "";
			if (noOfDays > 1 && noOfDays < 14) {
				googleTypeAgoTime = noOfDays + " days ago";
			} else if (noOfDays == 1) {
				googleTypeAgoTime = noOfDays + " day ago";
			} else if (noOfDays == 0) {
				var noOfHours = Math.floor(diffTime / timeForOneHour);
				if (noOfHours > 1 && noOfHours < 24) {
					googleTypeAgoTime = noOfHours + " hrs ago";
				} else if (noOfHours == 1) {
					googleTypeAgoTime = noOfHours + " hr ago";
				} else if (noOfHours == 0) {
					var noOfMinutes = Math.floor(diffTime / timeForOneMinute);
					if (noOfMinutes > 1 && noOfMinutes < 60) {
						googleTypeAgoTime = noOfMinutes + " mins ago";
					} else if (noOfMinutes == 1) {
						googleTypeAgoTime = noOfMinutes + " min ago";
					}
				}
			}
			if (googleTypeAgoTime == "") {
				received = String(received);
			} else if (_onlyDiff == true) {
				received = googleTypeAgoTime;
			} else {
				received = String(received) + " (" + googleTypeAgoTime + ")";
			}
		}
		return String(received);
	};
	proto.formatDateWith = function (_timeValue, _format) {
		var rec_date;
		_format = _format || "m/d/yy HH:MM:ss";
		if (isNaN(parseInt(_timeValue)) == false) {
			rec_date = new Date(parseInt(_timeValue));
		} else {
			rec_date = new Date(_timeValue);
		}
		var formateddate = self.dateFormat(rec_date, _format);
		return String(formateddate);
	};
};

/*!
 * jQuery corner plugin: simple corner rounding
 * Examples and documentation at: http://jquery.malsup.com/corner/
 * version 2.13 (19-FEB-2013)
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Dave Methvin and Mike Alsup
 */
(function(e){function f(t,n){return parseInt(e.css(t,n),10)||0}function l(e){e=parseInt(e,10).toString(16);return e.length<2?"0"+e:e}function c(t){while(t){var n=e.css(t,"backgroundColor"),r;if(n&&n!="transparent"&&n!="rgba(0, 0, 0, 0)"){if(n.indexOf("rgb")>=0){r=n.match(/\d+/g);return"#"+l(r[0])+l(r[1])+l(r[2])}return n}if(t.nodeName.toLowerCase()=="html")break;t=t.parentNode}return"#ffffff"}function h(e,t,n){switch(e){case"round":return Math.round(n*(1-Math.cos(Math.asin(t/n))));case"cool":return Math.round(n*(1+Math.cos(Math.asin(t/n))));case"sharp":return n-t;case"bite":return Math.round(n*Math.cos(Math.asin((n-t-1)/n)));case"slide":return Math.round(n*Math.atan2(t,n/t));case"jut":return Math.round(n*Math.atan2(n,n-t-1));case"curl":return Math.round(n*Math.atan(t));case"tear":return Math.round(n*Math.cos(t));case"wicked":return Math.round(n*Math.tan(t));case"long":return Math.round(n*Math.sqrt(t));case"sculpt":return Math.round(n*Math.log(n-t-1,n));case"dogfold":case"dog":return t&1?t+1:n;case"dog2":return t&2?t+1:n;case"dog3":return t&3?t+1:n;case"fray":return t%2*n;case"notch":return n;case"bevelfold":case"bevel":return t+1;case"steep":return t/2+1;case"invsteep":return(n-t)/2+1}}var t=/MSIE/.test(navigator.userAgent);var n=document.createElement("div").style,r=n["MozBorderRadius"]!==undefined,i=n["WebkitBorderRadius"]!==undefined,s=n["borderRadius"]!==undefined||n["BorderRadius"]!==undefined,o=document.documentMode||0,u=t&&(!o||o<8),a=t&&function(){var e=document.createElement("div");try{e.style.setExpression("width","0+0");e.style.removeExpression("width")}catch(t){return false}return true}();e.support=e.support||{};e.support.borderRadius=r||i||s;e.fn.corner=function(n){if(this.length===0){if(!e.isReady&&this.selector){var o=this.selector,l=this.context;e(function(){e(o,l).corner(n)})}return this}return this.each(function(o){var l=e(this),p=[l.attr(e.fn.corner.defaults.metaAttr)||"",n||""].join(" ").toLowerCase(),d=/keep/.test(p),v=(p.match(/cc:(#[0-9a-f]+)/)||[])[1],m=(p.match(/sc:(#[0-9a-f]+)/)||[])[1],g=parseInt((p.match(/(\d+)px/)||[])[1],10)||10,y=/round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,b=(p.match(y)||["round"])[0],w=/dogfold|bevelfold/.test(p),E={T:0,B:1},S={TL:/top|tl|left/.test(p),TR:/top|tr|right/.test(p),BL:/bottom|bl|left/.test(p),BR:/bottom|br|right/.test(p)},x,T,N,C,k,L,A,O,M,_,D,P,H,B;if(!S.TL&&!S.TR&&!S.BL&&!S.BR)S={TL:1,TR:1,BL:1,BR:1};if(e.fn.corner.defaults.useNative&&b=="round"&&(s||r||i)&&!v&&!m){if(S.TL)l.css(s?"border-top-left-radius":r?"-moz-border-radius-topleft":"-webkit-border-top-left-radius",g+"px");if(S.TR)l.css(s?"border-top-right-radius":r?"-moz-border-radius-topright":"-webkit-border-top-right-radius",g+"px");if(S.BL)l.css(s?"border-bottom-left-radius":r?"-moz-border-radius-bottomleft":"-webkit-border-bottom-left-radius",g+"px");if(S.BR)l.css(s?"border-bottom-right-radius":r?"-moz-border-radius-bottomright":"-webkit-border-bottom-right-radius",g+"px");return}x=document.createElement("div");e(x).css({overflow:"hidden",height:"1px",minHeight:"1px",fontSize:"1px",backgroundColor:m||"transparent",borderStyle:"solid"});T={T:parseInt(e.css(this,"paddingTop"),10)||0,R:parseInt(e.css(this,"paddingRight"),10)||0,B:parseInt(e.css(this,"paddingBottom"),10)||0,L:parseInt(e.css(this,"paddingLeft"),10)||0};if(typeof this.style.zoom!==undefined)this.style.zoom=1;if(!d)this.style.border="none";x.style.borderColor=v||c(this.parentNode);N=e(this).outerHeight();for(C in E){k=E[C];if(k&&(S.BL||S.BR)||!k&&(S.TL||S.TR)){x.style.borderStyle="none "+(S[C+"R"]?"solid":"none")+" none "+(S[C+"L"]?"solid":"none");L=document.createElement("div");e(L).addClass("jquery-corner");A=L.style;k?this.appendChild(L):this.insertBefore(L,this.firstChild);if(k&&N!="auto"){if(e.css(this,"position")=="static")this.style.position="relative";A.position="absolute";A.bottom=A.left=A.padding=A.margin="0";if(a)A.setExpression("width","this.parentNode.offsetWidth");else A.width="100%"}else if(!k&&t){if(e.css(this,"position")=="static")this.style.position="relative";A.position="absolute";A.top=A.left=A.right=A.padding=A.margin="0";if(a){O=f(this,"borderLeftWidth")+f(this,"borderRightWidth");A.setExpression("width","this.parentNode.offsetWidth - "+O+'+ "px"')}else A.width="100%"}else{A.position="relative";A.margin=!k?"-"+T.T+"px -"+T.R+"px "+(T.T-g)+"px -"+T.L+"px":T.B-g+"px -"+T.R+"px -"+T.B+"px -"+T.L+"px"}for(M=0;M<g;M++){_=Math.max(0,h(b,M,g));D=x.cloneNode(false);D.style.borderWidth="0 "+(S[C+"R"]?_:0)+"px 0 "+(S[C+"L"]?_:0)+"px";k?L.appendChild(D):L.insertBefore(D,L.firstChild)}if(w&&e.support.boxModel){if(k&&u)continue;for(P in S){if(!S[P])continue;if(k&&(P=="TL"||P=="TR"))continue;if(!k&&(P=="BL"||P=="BR"))continue;H={position:"absolute",border:"none",margin:0,padding:0,overflow:"hidden",backgroundColor:x.style.borderColor};B=e("<div/>").css(H).css({width:g+"px",height:"1px"});switch(P){case"TL":B.css({bottom:0,left:0});break;case"TR":B.css({bottom:0,right:0});break;case"BL":B.css({top:0,left:0});break;case"BR":B.css({top:0,right:0});break}L.appendChild(B[0]);var j=e("<div/>").css(H).css({top:0,bottom:0,width:"1px",height:g+"px"});switch(P){case"TL":j.css({left:g});break;case"TR":j.css({right:g});break;case"BL":j.css({left:g});break;case"BR":j.css({right:g});break}L.appendChild(j[0])}}}}})};e.fn.uncorner=function(){if(s||r||i)this.css(s?"border-radius":r?"-moz-border-radius":"-webkit-border-radius",0);e("div.jquery-corner",this).remove();return this};e.fn.corner.defaults={useNative:true,metaAttr:"data-corner"}})(jQuery);


if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.DateUtilities = function () {
	var self = this;
	var proto = CloudMagic.DateUtilities.prototype;
	proto.dateFormat = function () {
		var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len)
				val = "0" + val;
			return val;
		};
		return function (date, mask, utc) {
			var dF = self.dateFormat;
			if (arguments.length == 1 && (typeof date == "string" || date instanceof String) && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}
			date = date ? new Date(date) : new Date();
			if (isNaN(date))
				throw new SyntaxError("invalid date");
			mask = String(dF.masks[mask] || mask || dF.masks["default"]);
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}
			var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d : d,
				dd : pad(d),
				ddd : dF.i18n.dayNames[D],
				dddd : dF.i18n.dayNames[D + 7],
				m : m + 1,
				mm : pad(m + 1),
				mmm : dF.i18n.monthNames[m],
				mmmm : dF.i18n.monthNames[m + 12],
				yy : String(y).slice(2),
				yyyy : y,
				h : H % 12 || 12,
				hh : pad(H % 12 || 12),
				H : H,
				HH : pad(H),
				M : M,
				MM : pad(M),
				s : s,
				ss : pad(s),
				l : pad(L, 3),
				L : pad(L > 99 ? Math.round(L / 10) : L),
				t : H < 12 ? "a" : "p",
				tt : H < 12 ? "am" : "pm",
				T : H < 12 ? "A" : "P",
				TT : H < 12 ? "AM" : "PM",
				Z : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o : (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S : ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};
			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}
	();
	proto.dateFormat.masks = {
		"default" : "ddd mmm dd yyyy HH:MM:ss",
		shortDate : "m/d/yy",
		mediumDate : "mmm d, yyyy",
		longDate : "mmmm d, yyyy",
		fullDate : "dddd, mmmm d, yyyy",
		shortTime : "h:MM TT",
		mediumTime : "h:MM:ss TT",
		longTime : "h:MM:ss TT Z",
		isoDate : "yyyy-mm-dd",
		isoTime : "HH:MM:ss",
		isoDateTime : "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime : "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};
	proto.dateFormat.i18n = {
		dayNames : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		monthNames : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	};
	proto.formatDate = function (_timeValue, _showDiffFromCurrent, _onlyDiff) {
		var today = new Date();
		var diff = _showDiffFromCurrent || false;
		var curr_day = today.getDate();
		var curr_year = today.getFullYear();
		var curr_month = today.getMonth();
		var rec_date = null;
		var rec_day = null;
		var rec_year = null;
		var rec_month = null;
		var received = null;
		var value = _timeValue;
		if (isNaN(parseInt(value)) == false) {
			rec_date = new Date(parseInt(value));
		} else {
			rec_date = new Date(value);
		}
		rec_day = rec_date.getDate();
		rec_year = rec_date.getFullYear();
		rec_month = rec_date.getMonth();
		received = null;
		if (curr_day == rec_day && curr_month == rec_month && curr_year == rec_year) {
			received = self.dateFormat(rec_date, "h:MM tt");
		} else if (curr_year == rec_year) {
			received = self.dateFormat(rec_date, "mmm d");
		} else {
			received = self.dateFormat(rec_date, "m/d/yy");
		}
		if (diff == true) {
			var timeNow = today.getTime();
			var diffTime = timeNow - _timeValue;
			var timeForOneMinute = 1000 * 60;
			var timeForOneHour = timeForOneMinute * 60;
			var timeForOneDay = timeForOneHour * 24;
			var noOfDays = Math.floor(diffTime / timeForOneDay);
			var googleTypeAgoTime = "";
			if (noOfDays > 1 && noOfDays < 14) {
				googleTypeAgoTime = noOfDays + " days ago";
			} else if (noOfDays == 1) {
				googleTypeAgoTime = noOfDays + " day ago";
			} else if (noOfDays == 0) {
				var noOfHours = Math.floor(diffTime / timeForOneHour);
				if (noOfHours > 1 && noOfHours < 24) {
					googleTypeAgoTime = noOfHours + " hrs ago";
				} else if (noOfHours == 1) {
					googleTypeAgoTime = noOfHours + " hr ago";
				} else if (noOfHours == 0) {
					var noOfMinutes = Math.floor(diffTime / timeForOneMinute);
					if (noOfMinutes > 1 && noOfMinutes < 60) {
						googleTypeAgoTime = noOfMinutes + " mins ago";
					} else if (noOfMinutes == 1) {
						googleTypeAgoTime = noOfMinutes + " min ago";
					}
				}
			}
			if (googleTypeAgoTime == "") {
				received = String(received);
			} else if (_onlyDiff == true) {
				received = googleTypeAgoTime;
			} else {
				received = String(received) + " (" + googleTypeAgoTime + ")";
			}
		}
		return String(received);
	};
	proto.formatDateWith = function (_timeValue, _format) {
		var rec_date;
		_format = _format || "m/d/yy HH:MM:ss";
		if (isNaN(parseInt(_timeValue)) == false) {
			rec_date = new Date(parseInt(_timeValue));
		} else {
			rec_date = new Date(_timeValue);
		}
		var formateddate = self.dateFormat(rec_date, _format);
		return String(formateddate);
	};
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.WidgetUtilities = function () {
	var self = this;
	var proto = CloudMagic.WidgetUtilities.prototype;
	self.dateFormat_ = new CloudMagic.DateUtilities();
	self.c_ = new CloudMagic.Constants();
	proto.GetBaseMailUrl = function (email, isforcompose, iswidget) {
		domaininfo = self.GetDomainInfo();
		var protocol = window.location.protocol;
		var url;
		if (email == "all") {
			url = "mail.google.com/mail/u/0/";
		} else if (iswidget == true && domaininfo == self.c_.MAIL) {
			url = "mail.google.com/mail/";
			var winhref = window.location.href;
			index = winhref.indexOf(url);
			if (index != -1) {
				isoldgoogleapps = false;
				var macurl = "mail.google.com/mail/u/";
				index = winhref.indexOf(macurl);
				if (index != -1) {
					var start = index + macurl.length;
					index = winhref.indexOf("/", start);
					if (index != -1) {
						var macindex = winhref.substring(start, index);
						url = macurl + macindex + "/";
					}
				}
			}
		} else {
			url = "mail.google.com/mail/b/" + email + "/";
		}
		if (isforcompose == false) {
			url = url + "?shva=1";
		} else {
			url = url + "?";
		}
		if (protocol != "http:" && protocol != "https:") {
			protocol = "https:";
		}
		url = protocol + "//" + url;
		return url;
	};
	proto.GetMultiAccountSignInIndex = function () {
		var winhref = window.location.href;
		var macurl = "mail.google.com/mail/u/";
		var index = winhref.indexOf(macurl);
		var macindex = -1;
		if (index != -1) {
			var start = index + macurl.length;
			index = winhref.indexOf("/", start);
			if (index != -1) {
				macindex = winhref.substring(start, index);
			}
		}
		return macindex;
	};
	proto.HtmlEntities = function (string, quotestyle) {
		var hashmap = {};
		var symbol = '';
		var tmpstr = '';
		var entity = '';
		tmpstr = string.toString();
		if (false === (hashmap = self.GetHtmlTranslationTable('HTML_ENTITIES', quotestyle))) {
			return false;
		}
		hashmap["'"] = '&#039;';
		for (symbol in hashmap) {
			entity = hashmap[symbol];
			tmpstr = tmpstr.split(symbol).join(entity);
		}
		return tmpstr;
	};
	proto.GetHtmlTranslationTable = function (table, quotestyle) {
		var entities = {};
		var hashmap = {};
		var dec = 0;
		var symbol = '';
		var constMappingTable = {};
		var constMappingQuoteStyle = {};
		var useTable = {};
		var useQuoteStyle = {};
		constMappingTable[0] = 'HTML_SPECIALCHARS';
		constMappingTable[1] = 'HTML_ENTITIES';
		constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
		constMappingQuoteStyle[2] = 'ENT_COMPAT';
		constMappingQuoteStyle[3] = 'ENT_QUOTES';
		useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
		useQuoteStyle = !isNaN(quotestyle) ? constMappingQuoteStyle[quotestyle] : quotestyle ? quotestyle.toUpperCase() : 'ENT_COMPAT';
		if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
			throw new Error("Table: " + useTable + ' not supported');
		}
		entities['38'] = '&amp;';
		if (useTable === 'HTML_ENTITIES') {
			entities['160'] = '&nbsp;';
			entities['161'] = '&iexcl;';
			entities['162'] = '&cent;';
			entities['163'] = '&pound;';
			entities['164'] = '&curren;';
			entities['165'] = '&yen;';
			entities['166'] = '&brvbar;';
			entities['167'] = '&sect;';
			entities['168'] = '&uml;';
			entities['169'] = '&copy;';
			entities['170'] = '&ordf;';
			entities['171'] = '&laquo;';
			entities['172'] = '&not;';
			entities['173'] = '&shy;';
			entities['174'] = '&reg;';
			entities['175'] = '&macr;';
			entities['176'] = '&deg;';
			entities['177'] = '&plusmn;';
			entities['178'] = '&sup2;';
			entities['179'] = '&sup3;';
			entities['180'] = '&acute;';
			entities['181'] = '&micro;';
			entities['182'] = '&para;';
			entities['183'] = '&middot;';
			entities['184'] = '&cedil;';
			entities['185'] = '&sup1;';
			entities['186'] = '&ordm;';
			entities['187'] = '&raquo;';
			entities['188'] = '&frac14;';
			entities['189'] = '&frac12;';
			entities['190'] = '&frac34;';
			entities['191'] = '&iquest;';
			entities['192'] = '&Agrave;';
			entities['193'] = '&Aacute;';
			entities['194'] = '&Acirc;';
			entities['195'] = '&Atilde;';
			entities['196'] = '&Auml;';
			entities['197'] = '&Aring;';
			entities['198'] = '&AElig;';
			entities['199'] = '&Ccedil;';
			entities['200'] = '&Egrave;';
			entities['201'] = '&Eacute;';
			entities['202'] = '&Ecirc;';
			entities['203'] = '&Euml;';
			entities['204'] = '&Igrave;';
			entities['205'] = '&Iacute;';
			entities['206'] = '&Icirc;';
			entities['207'] = '&Iuml;';
			entities['208'] = '&ETH;';
			entities['209'] = '&Ntilde;';
			entities['210'] = '&Ograve;';
			entities['211'] = '&Oacute;';
			entities['212'] = '&Ocirc;';
			entities['213'] = '&Otilde;';
			entities['214'] = '&Ouml;';
			entities['215'] = '&times;';
			entities['216'] = '&Oslash;';
			entities['217'] = '&Ugrave;';
			entities['218'] = '&Uacute;';
			entities['219'] = '&Ucirc;';
			entities['220'] = '&Uuml;';
			entities['221'] = '&Yacute;';
			entities['222'] = '&THORN;';
			entities['223'] = '&szlig;';
			entities['224'] = '&agrave;';
			entities['225'] = '&aacute;';
			entities['226'] = '&acirc;';
			entities['227'] = '&atilde;';
			entities['228'] = '&auml;';
			entities['229'] = '&aring;';
			entities['230'] = '&aelig;';
			entities['231'] = '&ccedil;';
			entities['232'] = '&egrave;';
			entities['233'] = '&eacute;';
			entities['234'] = '&ecirc;';
			entities['235'] = '&euml;';
			entities['236'] = '&igrave;';
			entities['237'] = '&iacute;';
			entities['238'] = '&icirc;';
			entities['239'] = '&iuml;';
			entities['240'] = '&eth;';
			entities['241'] = '&ntilde;';
			entities['242'] = '&ograve;';
			entities['243'] = '&oacute;';
			entities['244'] = '&ocirc;';
			entities['245'] = '&otilde;';
			entities['246'] = '&ouml;';
			entities['247'] = '&divide;';
			entities['248'] = '&oslash;';
			entities['249'] = '&ugrave;';
			entities['250'] = '&uacute;';
			entities['251'] = '&ucirc;';
			entities['252'] = '&uuml;';
			entities['253'] = '&yacute;';
			entities['254'] = '&thorn;';
			entities['255'] = '&yuml;';
		}
		if (useQuoteStyle !== 'ENT_NOQUOTES') {
			entities['34'] = '&quot;';
		}
		if (useQuoteStyle === 'ENT_QUOTES') {
			entities['39'] = '&#39;';
		}
		entities['60'] = '&lt;';
		entities['62'] = '&gt;';
		for (dec in entities) {
			symbol = String.fromCharCode(dec);
			hashmap[symbol] = entities[dec];
		}
		return hashmap;
	};
	proto.GetKeyCode = function (e) {
		var code = 0;
		if (!e) {
			e = window.event
		}
		if (e.keyCode) {
			code = e.keyCode;
		} else if (e.which) {
			code = e.which;
		}
		return code;
	};
	proto.GetButton = function (e) {
		var code = 0;
		if (!e) {
			e = window.event
		}
		if (e.which) {
			code = e.which;
		} else if (e.button) {
			code = e.button;
		}
		return code;
	};
	proto.replaceURLWithHTMLLinksHelper = function (text) {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return text.replace(exp, "$1 ");
	};
	proto.addBlankToHTMLLinks = function (text) {
		var exp = /<(a)([^>]+)>/ig;
		return text.replace(exp, "<$1 target='_blank' $2>");
	};
	proto.makeShowQuotedTextVisible = function (text) {
		var exp = /<div\s*class=\s*(\"|')h5(\"|')\s*>/ig;
		text = text.replace(exp, '<div class="h5" style="display:block" ');
		return text;
	};
	proto.ReplaceSlashNWithBR = function (str) {
		return str.replace(/\n/g, '<br />\n');
	};
	proto.ScrollIntoView = function (node, anchorNode) {
		var sctop = cmjQuery_(anchorNode).attr('scrollTop');
		var hgt = cmjQuery_(anchorNode).height();
		var nodeoffset = cmjQuery_(node).attr('offsetTop');
		var nodehgt = cmjQuery_(node).height();
		var n = cmjQuery_(node).parent();
		var tagname = "";
		try {
			while (tagname != "table") {
				tagname = cmjQuery_(n).get(0).tagName.toLowerCase();
				var temp = cmjQuery_(n).attr('offsetTop')
					nodeoffset += temp;
				n = cmjQuery_(n).parent();
			}
		} catch (e) {
			self.CMLOG(e);
		}
		var s = sctop + hgt;
		var n = nodeoffset + nodehgt;
		if (s < n) {
			var r = n - hgt;
			cmjQuery_(anchorNode).attr('scrollTop', r);
		} else if (nodeoffset - 55 < sctop) {
			var r = nodeoffset - 85;
			cmjQuery_(anchorNode).attr('scrollTop', r);
		}
	};
	proto.InsertPlugin = function () {
		try {
			var p = new CloudMagic.InterfacePlugin();
			p.Init();
		} catch (e) {
			alert(e);
		}
		return p;
	};
	proto.SetCaption = function (caption) {
		return "<span class='mb-attribute-caption'>" + caption + "</span>";
	};
	proto.AppendBusy = function (node) {
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'mb-busy-node');
		cmjQuery_(div).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(node).append(div);
	};
	proto.RemoveBusy = function (node) {
		cmjQuery_('.mb-busy-node').remove();
	};
	proto.AppendDate = function (node, ts, type, ismail) {
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-search-mail-date");
		var title = "";
		if (ismail == true) {
			if (type == 2) {
				cmjQuery_(div).addClass("mb-sent-mail");
				title = "Sent Mail";
			} else if (type == 1) {
				cmjQuery_(div).addClass("mb-recv-mail");
				title = "Received Mail";
			} else if (type == 0) {
				cmjQuery_(div).addClass("mb-draft");
				title = "Draft";
			}
		} else {
			var filetype = type.toLowerCase().substring(0, 5);
			switch (filetype) {
			case "image":
				cmjQuery_(div).addClass("mb-photo");
				title = "Image";
				break;
			case "docum":
				cmjQuery_(div).addClass("mb-doc");
				title = "Document";
				break;
			case "sprea":
				cmjQuery_(div).addClass("mb-spread");
				title = "Spreadsheet";
				break;
			case "prese":
				cmjQuery_(div).addClass("mb-presentation");
				title = "Presentation";
				break;
			case "pdf":
				cmjQuery_(div).addClass("mb-pdf");
				title = "pdf";
				break;
			default:
				cmjQuery_(div).addClass("mb-generic");
				title = "Unknown";
			}
		}
		cmjQuery_(div).html(self.dateFormat_.formatDate(ts * 1000));
		var fulldate = self.dateFormat_.formatDateWith(ts * 1000, "ddd, mmm d, yyyy") + " at " +
			self.dateFormat_.formatDateWith(ts * 1000, "h:MM TT")
			if (title.length > 0) {
				title = title + " - ";
			}
			title = title + fulldate;
		cmjQuery_(div).attr("title", title);
		cmjQuery_(node).append(div);
	};
	proto.AppendAttachmentIcon = function (node, hasattachments, attachments) {
		if (hasattachments == 1) {
			var div = document.createElement("div");
			cmjQuery_(div).attr("class", "mb-preview-with-attachment");
			var title = "";
			for (var i = 0; i < attachments.length; i++) {
				title = title + attachments[i].n + " ";
			}
			cmjQuery_(div).attr("title", title);
			cmjQuery_(node).append(div);
		}
	};
	proto.ConvertEmailToHyperlink = function (node, email) {
		cmjQuery_("a[href^=mailto]", node).click(function () {
			var url = self.GetBaseMailUrl(email, true, false) + "view=cm&fs=1&tf=1&to=" +
				encodeURIComponent(cmjQuery_(this).text());
			window.open(url, '', 'width=700, height=780');
			return false;
		});
	};
	proto.GetMouseWheelDelta = function (e) {
		var delta = 0;
		if (e.detail) {
			delta = (-1 * e.detail / 3);
		} else if (e.wheelDelta) {
			delta = e.wheelDelta / 120;
		}
		return delta;
	};
	proto.MouseWheelHandler = function (e) {
		var func = function (e) {
			var delta = self.GetMouseWheelDelta(e);
			var scrolltop = cmjQuery_(this).attr("scrollTop");
			if (delta > 0 && scrolltop == 0) {
				return false;
			}
			var scrolllheight = cmjQuery_(this).attr("scrollHeight");
			var offsetheight = cmjQuery_(this).attr("offsetHeight");
			if (delta < 0 && (scrolltop >= (scrolllheight - offsetheight))) {
				e.preventDefault();
				return false;
			}
		};
		return func;
	};

	proto.AddShareLinks = function (anchorNode, email, iswidget) {
		var table = document.createElement("table");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		if (iswidget == true) {
			var td = document.createElement("td");
			cmjQuery_(td).width("100%");
			cmjQuery_(td).attr("class", "mb-share mb-grey");
			cmjQuery_(td).html("Like CloudMagic? ");
			cmjQuery_(tr).append(td);
			cmjQuery_(table).css('width', '260px');
		} else {
			var div = document.createElement("div");
			cmjQuery_(div).attr("class", "mb-share");
			cmjQuery_(div).html("Like CloudMagic? ");
			cmjQuery_(anchorNode).append(div);
			cmjQuery_(table).css('width', '140px');
		}
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-share-on-fb");
		cmjQuery_(td).attr("title", "Share on Facebook");
		cmjQuery_(td).attr("id", "mbFacebookLike");
		cmjQuery_(td).width(51);
		cmjQuery_(td).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(td).click(function () {
			var fbURL = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent("http://www.cloudmagic.com") + "&t=" + encodeURIComponent("Instant search for your online data");
			self.OpenWindow(fbURL, "");
		});
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-share-on-tweet");
		cmjQuery_(td).attr("title", "Share on Twitter");
		cmjQuery_(td).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(td).width(51);
		cmjQuery_(td).click(function () {
			var tweetURL = "http://twitter.com/share?text=I%20use%20CloudMagic%20for%20lightning%20fast%20search%20on%20my%20online%20data&url=http://www.cloudmagic.com&via=cloudmagic";
			self.OpenWindow(tweetURL, "");
		});
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-share-on-email");
		cmjQuery_(td).attr("title", "Share via Email");
		cmjQuery_(td).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(td).width(51);
		cmjQuery_(td).click(function () {
			if (email == null) {
				email = "m@gmail.com";
			}
			var composeURL = "";
			if (self.GetDomainInfo() == self.c_.TWEET) {
				composeURL = self.GetBaseMailUrl("all", true, false);
			} else {
				composeURL = self.GetBaseMailUrl(email, true, false);
			}
			composeURL = composeURL + "view=cm&fs=1&tf=1&to=&su=" +
				encodeURIComponent("CloudMagic - Instant search for your online data") + "&body=" + encodeURIComponent("Hi, I found this cool tool - http://cloudmagic.com and thought you may find it useful too. Instant search for Gmail, Google Calendars, Google Docs, Contacts and Twitter.");
			self.OpenWindow(composeURL, "");
		});

		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).css('height', '24px');
		cmjQuery_(table).append(tbody);
		cmjQuery_(anchorNode).append(table);
	};

	proto.OpenWindow = function (url, caption) {
		var CM_POPUP_WINDOW = "fullscreen=no,titlebar=no,menubar=no," + "location=no,toolbar=yes,resizable=yes," + "scrollbars=yes,status=no,top=100,left=50" + ",height=600,width=900";
		window.open(url, caption, CM_POPUP_WINDOW);
	};

	proto.CMLOG = function (msg) {
		try {
			if (window.top.console) {
				window.top.console.log(msg);
			}
		} catch (e) {}

	};

	proto.CMLTS = function (name) {};

	proto.CMLTE = function (name) {};
	proto.MBCLS = function () {};
	proto.strnicmp = function (a, b, length) {
		a = a.substring(0, length);
		b = b.substring(0, length);
		return a.toLowerCase() == b.toLowerCase();
	};

	proto.strncmp = function (a, b, length) {
		a = a.substring(0, length);
		b = b.substring(0, length);
		return a == b;
	};

	proto.TriggerKeypress = function (node) {
		var e;
		if (cmjQuery_.browser.webkit == true) {
			e = cmjQuery_.Event("keyup");
			e.keyCode = 13;
		} else {
			e = cmjQuery_.Event("keypress");
			e.which = 13;
		}
		cmjQuery_(node).trigger(e);
	};

	proto.GetLoggedUserId = function (twitter) {
		var userid = null;
        	
		
		twitter = twitter || false;
		if (twitter == true) {
			var node = cmjQuery_('#screen-name');
			if (node.length != 0) {
				userid = node.text();
				userid = userid.replace(/^\s*/, "").replace(/\s*$/, "");
			} else {
				var node = cmjQuery_('li#user-dropdown>ul>li>a>div>div');
				if (node.length != 0) {
					userid = node.attr("data-screen-name");
					userid = userid.replace(/^\s*/, "").replace(/\s*$/, "");
				}
			}
		} else {
		

		
			var node = cmjQuery_('div>span.gbps2');
			if (node.length != 0) {
				userid = node.text();
				return userid;
			}
            
			//standard gmail account (email form left menu)
			var node = cmjQuery_('#gb>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>div>A').attr('title');			
			if (node != undefined){
			    var arruserid = node.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
			    if (arruserid[0].length != 0) { 
					userid = arruserid[0];
					console.log("CloudMagic - Gmail username found - in the dropdown menu");
				    return userid;
				}
			}
				
			//hosted domains/google apps (email form left menu)
			var node = cmjQuery_('#gb>div>div>div>div:nth-child(3)>div>A').attr('title');
			if (node != undefined){
			    var arruserid = node.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
			    if (arruserid[0].length != 0) { 
					userid = arruserid[0];
					console.log("CloudMagic - Google apps username found - in the dropdown menu");
				    return userid;
				}
			}

			// if the above two methods, we are searching in the page title
			var node = cmjQuery_('title').text();
			if (node.length != 0) {
				var arruserid = node.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
				if (arruserid[0].length != 0) { 
					userid = arruserid[0];
					console.log("CloudMagic - Google username found - in the page title");
				    return userid;
				}
			}

			var node = cmjQuery_('#gbmpc>div');
			if (node.length != 0) {
				userid = node.text();
			} else {
				node = cmjQuery_('#guser>nobr>b>a>u');
				if (node.length != 0) {
					userid = node.text();
				} else {
					node = cmjQuery_('#guser>nobr>b');
					if (node.length != 0) {
						userid = node.text();
					} else {
						node = cmjQuery_('#guser>nobr>span>span>a>u>b');
						if (node.length != 0) {
							userid = node.text();
						}
					}
				}
			}
		}
		return userid;
	};

	proto.GetDomainInfo = function () {
		var domaininfo = null;
		if (window.location.host.indexOf("twitter.com") != -1) {
			domaininfo = self.c_.TWEET;
		} else if (window.location.host.indexOf("mail.") != -1) {
			domaininfo = self.c_.MAIL;
		} else if (window.location.host.indexOf("docs.") != -1 || window.location.host.indexOf("spreadsheets.") != -1) {
			domaininfo = self.c_.DOC;
		} else if (window.location.href.indexOf("www.google.com/calendar/") != -1) {
			domaininfo = self.c_.EVENT;
		}
		return domaininfo;
	};
	proto.GetURLParameters = function (name) {
		name = name.replace(/[\[]/, "/\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + name + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.href);
		if (results == null)
			return "";
		return decodeURIComponent(results[1]);
	};
	proto.GetDirectSearchUrl = function (version) {
		var direct_ui_url;
		if (window.location.protocol == "chrome-extension:") {
			direct_ui_url = "res/cloudmagic.html?ts=" + CloudMagic.CMSCRIPTTS + "#search";
		} else if (window.location.protocol == "chrome:") {
			direct_ui_url = "chrome://cloudmagic/content/res/cloudmagic.html?ts=" + CloudMagic.CMSCRIPTTS + "#search";
		} else if (window.location.protocol == "file:") {
			direct_ui_url = "cloudmagic.html?ts=" + CloudMagic.CMSCRIPTTS + "#search";
		} else {
			if (CloudMagic.CMBROWSER == "gc") {
				direct_ui_url = "chrome-extension://" + document.body.getAttribute("CloudMagic_Ext_UUID") + "/res/cloudmagic.html?ts=" + CloudMagic.CMSCRIPTTS + "#search";
			} else {
				direct_ui_url = "chrome://cloudmagic/content/res/cloudmagic.html?ts=" + CloudMagic.CMSCRIPTTS + "#search";
			}
		}
		return direct_ui_url;
	};
	proto.SetPopoutWithSearchUrl = function (validquery, query, tabtype, version) {
		var direct_ui_url = self.GetDirectSearchUrl(version);
		if (validquery == true) {
			var category = "";
			switch (tabtype) {
			case self.c_.MAIL:
				category = "mail";
				break;
			case self.c_.DOC:
				category = "doc";
				break;
			case self.c_.CONTACT:
				category = "contact";
				break;
			case self.c_.EVENT:
				category = "event";
				break;
			case self.c_.TWEET:
				category = "tweet";
				break;
			default:
				self.CMLOG("Error");
			}
			direct_ui_url = direct_ui_url + "?category=" + encodeURIComponent(category);
			direct_ui_url = direct_ui_url + "&query=" + encodeURIComponent(query);
		}
		cmjQuery_("#mbNewWindowWithThisSearch").attr("href", direct_ui_url);
	};
	proto.IsScrolledIntoView = function (elem) {
		var docViewTop = cmjQuery_(window).scrollTop(),
		docViewBottom = docViewTop + cmjQuery_(window).height(),
		elemTop = cmjQuery_(elem).offset().top,
		elemBottom = elemTop + cmjQuery_(elem).height();
		return ((elemTop + ((elemBottom - elemTop) / 2)) >= docViewTop && ((elemTop + ((elemBottom - elemTop) / 2)) <= docViewBottom));
	};
	proto.Sleep = function (interval) {
		var ctime = new Date().getTime();
		while (1) {
			var time = new Date().getTime();
			if (time - ctime >= interval) {
				break;
			}
		}
	};
	proto.StyleSanitizer = function (value) {
		var allowablecsslist1 = new Array(/(\w\/\/)/i, /(\w\/\/*\*)/i, /(\/\*\/)/i);
		var allowablecsslist2 = new Array(/(\bdata:\b|eval|cookie|\bwindow\b|\bparent\b|\bthis\b)/i, /behaviou?r|expression|moz-binding|@import|@charset|(java|vb)?script|[\<]|\\\w/i, /[\<>]/i, /[\x7f-\xff]/i, /[\x00-\x08\x0B\x0C\x0E-\x1F]/i, /&\#/i);
		var i;
		var len = allowablecsslist1.length;
		var pattern;
		if (value == undefined || value == null) {
			return " ";
		}
		for (i = 0; i < len; i++) {
			pattern = allowablecsslist1[i];
			if (pattern.test(value) == true) {
				return " ";
			}
		}
		value = value.replace(/(\/\*.*?\*\/)/, "");
		value = value.replace("\n", "");
		len = allowablecsslist2.length;
		for (i = 0; i < len; i++) {
			pattern = allowablecsslist2[i];
			if (pattern.test(value) == true) {
				return " ";
			}
		}
		return value;
	};
	proto.HTMLSanitizer = function (emailcontent) {
		emailcontent = CloudMagic.HTMLSanitizer.sanitize(emailcontent, function (ahref) {
				var patt1 = /(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])/i;
				var patt2 = /^mailto:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
				var patt3 = /^callto:/i;
				if (patt1.test(ahref) != true && patt2.test(ahref) != true && patt3.test(ahref) != true) {
					ahref = " ";
				}
				return ahref;
			}, null, self.StyleSanitizer);
		return emailcontent;
	}
};

/*! jQuery UI - v1.11.2 - 2014-11-01
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, button.js, datepicker.js, progressbar.js, slider.js, spinner.js, tabs.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return n=!a&&o.length?e.widget.extend.apply(null,[n].concat(o)):n,a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))}),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.draggable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)
}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=u-t.height,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.selectable",e.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();
for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=h&&l.down||l,d=function(){o._toggleComplete(i)};return"number"==typeof u&&(a=u),"string"==typeof u&&(n=u),n=n||u.easing||l.easing,a=a||u.duration||l.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?r+=i.now:"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,d):e.animate(this.showProps,a,n,d)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}});var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")
}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.2"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,P,A,I,z,H,F,E,W,L,O,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";
for(N+=M+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),A=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((A+P)/7),z=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=z,H=this._daylightSavingAdjust(new Date(et,Z,1-A)),F=0;z>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[H]):[!0,""],L=H.getMonth()!==Z,O=L&&!y||!W[0]||Q&&Q>H||$&&H>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(L?" ui-datepicker-other-month":"")+(H.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===H.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(L&&!v?"":" "+W[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(L&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(O?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(L&&!v?"&#xa0;":O?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===R.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(L?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.2",e.datepicker,e.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-e},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()
}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),s._trigger("load",i,r)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})});


if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
CloudMagic.WidgetDropdownMenu = function () {
	var self = this;
	var proto = CloudMagic.WidgetDropdownMenu.prototype;
	self.timeout = 500;
	self.closetimer = 0;
	self.menuroot = null;
	self.menuanchor = null;
	proto.Open = function () {
		if (cmjQuery_("#mbdropdownmenu > li > ul").css('visibility') == 'visible') {
			self.CancelTimer();
			self.Close();
		} else {
			self.CancelTimer();
			self.Close();
			cmjQuery_(self.menuanchor).addClass("mb-menu-open");
			var correction = cmjQuery_("#mbdropdownmenu > li > ul").width();
			var leftpos = cmjQuery_(".mb-search-widget").width() - correction;
			if (leftpos < 0) {
				var offsetleft = cmjQuery_(".mb-search-widget").offset().left;
				var diff = offsetleft + leftpos;
				if (diff < 0) {
					leftpos = 0;
				}
			}
			cmjQuery_("#mbdropdownmenu > li > ul").css("left", leftpos);
			cmjQuery_("#mbdropdownmenu > li > ul").show();
			cmjQuery_("#mbdropdownmenu > li > ul").css('visibility', 'visible');
			cmjQuery_("#mbdropdownmenu > li > ul").css('background', 'white');
			return false;
		}
	};
	proto.Close = function () {
		cmjQuery_("#mbdropdownmenu > li > ul").css('visibility', 'hidden');
		cmjQuery_("#mbdropdownmenu > li > ul").hide();
		cmjQuery_(self.menuanchor).removeClass("mb-menu-open");
	};
	proto.Timer = function () {
		self.closetimer = window.setTimeout(self.Close, self.timeout);
	};
	proto.CancelTimer = function () {
		if (self.closetimer) {
			window.clearTimeout(self.closetimer);
			self.closetimer = null;
		}
	};
	proto.Initialize = function () {
		document.onclick = self.Close;
		cmjQuery_('#mbdropdownmenu > li > ul').corner("3px");
	};
	proto.AddMenuItem = function (caption, linkorfunc) {
		var li = document.createElement("li");
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mbdropdownmenudiv");
		var a = document.createElement("a");
		if (typeof linkorfunc == "function") {
			cmjQuery_(a).click(linkorfunc);
			cmjQuery_(a).attr("href", "#");
		} else {
			cmjQuery_(a).attr("href", linkorfunc);
		}
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).text(caption);
		cmjQuery_(div).append(a);
		cmjQuery_(li).append(div);
		cmjQuery_(self.menuroot).append(li);
	};
	proto.CreateMenu = function (td) {
		var wrapperul = document.createElement("ul");
		cmjQuery_(wrapperul).attr("id", "mbdropdownmenu");
		var wrapperli = document.createElement("li");
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-options");
		cmjQuery_(div).attr("title", "Options");
		cmjQuery_(div).html("&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(wrapperli).append(div);
		var ul = document.createElement("ul");
		cmjQuery_(wrapperli).append(ul);
		cmjQuery_(wrapperul).append(wrapperli);
		self.menuroot = ul;
		cmjQuery_(td).append(wrapperul);
		self.menuanchor = td;
	};
};
if ("undefined" == typeof(CloudMagic)) {
	var CloudMagic = {};
};
$.fn.hasAttr = function (name) {
	return this.attr(name) !== undefined;
};
if (window.location.host.indexOf("twitter.com") != -1) {
	cmjQuery_ = jQuery.noConflict(true);
} else {
	jQuery.noConflict();
	cmjQuery_ = window.jQuery;
}
CloudMagic.Widget = function () {
	var self = this;
	var proto = CloudMagic.Widget.prototype;
	self.utils_ = new CloudMagic.WidgetUtilities();
	self.highlight_ = new CloudMagic.WidgetHighlightWrapper();
	self.dDMenu_ = new CloudMagic.WidgetDropdownMenu();
	self.dateFormat_ = new CloudMagic.DateUtilities();
	self.c_ = new CloudMagic.Constants();
	self.common_ = new CloudMagic.Common(self, true);
	self.searchString_ = "";
	self.activeSearchString_ = "";
	self.searchResult_ = null;
	self.currentMailSelectionRowId_ = -1;
	self.currentDocSelectionRowId_ = -1;
	self.currentContactSelectionRowId_ = -1;
	self.currentEventSelectionRowId_ = -1;
	self.currentTweetSelectionRowId_ = -1;
	self.plugin_ = null;
	self.activePreview_ = null;
	self.trackingTimer_ = null;
	self.autocompleteViewNode_ = null;
	self.previewNode_ = null;
	self.previewContentNode_ = null;
	self.footer_ = null;
	self.searchBox_ = null;
	self.clearButton_ = null;
	self.searchContainerNode_ = null;
	self.mailsTbody_ = null;
	self.contactsTbody_ = null;
	self.docsTbody_ = null;
	self.eventsTbody_ = null;
	self.tweetsTbody_ = null;
	self.acTimeout_ = null;
	self.mailRecIndex_ = 0;
	self.mailRecTsRowId_ = 0;
	self.docRecIndex_ = 0;
	self.docRecTsRowId_ = 0;
	self.eventRecIndex_ = 0;
	self.eventRecTsRowId_ = 0;
	self.tweetRecIndex_ = 0;
	self.tweetRecTsRowId_ = 0;
	self.searchMailResultCount_ = 0;
	self.searchContactResultCount_ = 0;
	self.searchDocResultCount_ = 0;
	self.searchEventResultCount_ = 0;
	self.searchTweetResultCount_ = 0;
	self.searchMailResultCountPrev_ = 0;
	self.searchContactResultCountPrev_ = 0;
	self.searchDocResultCountPrev_ = 0;
	self.searchEventResultCountPrev_ = 0;
	self.searchTweetResultCountPrev_ = 0;
	self.widgetNode_ = null;
	self.footerNode_ = null;
	self.port_ = 0;
	self.uuid_ = null;
	self.version_ = null;
	self.usageCount_ = 0;
	self.lastTrackingTS_ = 0;
	self.statusMsg_ = null;
	self.accountInfo_ = "";
	self.toolbarNode_ = null;
	self.accountUserId_ = null;
	self.pgBarTextNode_ = null;
	self.pgBarNode_ = null;
	self.mailSlideDirection_ = "left";
	self.getMailTimer_ = null;
	self.getTweetTimer_ = null;
	self.attachmentDownloadStatus_ = null;
	self.tabNavigatorInFocus_ = null;
	self.isAllView_ = false;
	self.prevSearchableItems = 0;
	self.SearchableItems = self.c_.DEFAULT_SEARCHABLE_ITEMS;
	self.domain_ = 0;
	self.pref_ = {};
	self.maxContactSearchResultCount_ = self.c_.MAX_WIDGET_SEARCH_RESULT_COUNT;
	self.maxSearchResultCount_ = self.c_.MAX_WIDGET_SEARCH_RESULT_COUNT;
	self.isSidebar_ = (self.utils_.GetURLParameters("sb") == 1);
	CloudMagic.CMBROWSER = (cmjQuery_.browser.webkit == true) ? "gc" : "mf";

	proto.CreateGmailWidget = function (attempts) {
		var ATTEMPTS = 20;
		var DELAY = 500;
		
		if (cmjQuery_('#gbar').length > 0 || cmjQuery_('#gbg').length > 0 || cmjQuery_('#gbmpdv').length > 0 || cmjQuery_('#user-dropdown').length > 0 || cmjQuery_("#screen-name").length > 0 || cmjQuery_("#gb").length > 0) {
			self.utils_.CMLOG("CloudMagic - found gbar|gbg|gbmpdv|screen-name|user-dropdown|gb");

			self.CreateWidget();
			cmjQuery_(document).keydown(function (e) {
				self.HandleDocumentKeydown(e);
			});
			cmjQuery_(window).resize(function () {
				self.ResizeResultPane();
			});
			return;
		} else {
			attempts = attempts || 0;
			self.utils_.CMLOG("CloudMagic - Load Error[" + attempts + "]");
			if (attempts < ATTEMPTS) {
				var _arg = arguments;
				setTimeout(function () {
					_arg.callee.call(self, ++attempts);
				}, DELAY);
			} else {
				self.utils_.CMLOG("CloudMagic - Load Terminated");
				return;
			}
		}
	};
	proto.HandlePreferences = function (response) {
		self.pref_ = JSON.parse(response);
		self.domain_ = self.utils_.GetDomainInfo();
		if (self.domain_ == self.c_.MAIL) {
			if (typeof self.pref_.SelectedWidgetTab_Gmail == "undefined" || isNaN(self.pref_.SelectedWidgetTab_Gmail)) {
				self.pref_.SelectedWidgetTab_Gmail = self.c_.MAIL;
			}
			self.pref_.SelectedWidgetTab = self.pref_.SelectedWidgetTab_Gmail;
		} else if (self.domain_ == self.c_.DOC) {
			if (typeof self.pref_.SelectedWidgetTab_Gdoc == "undefined" || isNaN(self.pref_.SelectedWidgetTab_Gdoc)) {
				self.pref_.SelectedWidgetTab_Gdoc = self.c_.DOC;
			}
			self.pref_.SelectedWidgetTab = self.pref_.SelectedWidgetTab_Gdoc;
		} else if (self.domain_ == self.c_.TWEET) {
			if (typeof self.pref_.SelectedWidgetTab_Twitter == "undefined" || isNaN(self.pref_.SelectedWidgetTab_Twitter)) {
				self.pref_.SelectedWidgetTab_Twitter = self.c_.TWEET;
			}
			self.pref_.SelectedWidgetTab = self.pref_.SelectedWidgetTab_Twitter;
		} else if (self.domain_ == self.c_.EVENT) {
			if (typeof self.pref_.SelectedWidgetTab_Gcal == "undefined" || isNaN(self.pref_.SelectedWidgetTab_Gcal)) {
				self.pref_.SelectedWidgetTab_Gcal = self.c_.EVENT;
			}
			self.pref_.SelectedWidgetTab = self.pref_.SelectedWidgetTab_Gcal;
		} else {
			if (typeof self.pref_.SelectedWidgetTab == "undefined" || isNaN(self.pref_.SelectedWidgetTab)) {
				self.pref_.SelectedWidgetTab = self.c_.MAIL;
			}
		}
		if (typeof self.pref_.LastBalloonMessageVersion == "undefined" || isNaN(self.pref_.LastBalloonMessageVersion)) {
			self.pref_.LastBalloonMessageVersion = 0;
		}
		self.tabNavigatorInFocus_ = self.pref_.SelectedWidgetTab;
		self.SearchableItems = parseInt(self.pref_.SelectedWidgetTab);
	};
	proto.GetPreferencesHandler = function () {
		var func = function (response) {
			self.HandlePreferences(response);
			if (self.isSidebar_ == false) {
				if (window.location.host.indexOf("mail.google.com") != -1) {
					if (typeof self.pref_.gmail_searchbox != "undefined" && self.pref_.gmail_searchbox == "0") {
						self.utils_.CMLOG("Search bar is disabled in Gmail");
						return;
					}
				} else {
					var str = window.location.host;
					if (str.search(/docs[0-9]{0,}.google.com/i) != -1 || str.search(/spreadsheets[0-9]{0,}.google.com/i) != -1) {
						if (typeof self.pref_.gdoc_searchbox != "undefined" && self.pref_.gdoc_searchbox == "0") {
							self.utils_.CMLOG("Search bar is disabled in Google documents");
							return;
						}
					} else {
						str = window.location.href;
						if (str.search(/www.google.com\/calendar/i) != -1) {
							if (typeof self.pref_.gcal_searchbox != "undefined" && self.pref_.gcal_searchbox == "0") {
								self.utils_.CMLOG("Search bar is disabled in Google calendar");
								return;
							}
						} else {
							if (str.search(/twitter.com/i) != -1) {
								if (typeof self.pref_.twitter_searchbox != "undefined" && self.pref_.twitter_searchbox == "0") {
									self.utils_.CMLOG("Search bar is disabled in Twitter");
									return;
								}
							}
						}
					}
				}
			}
			

			
			self.accountUserId_ = (self.isSidebar_ == true) ? "all" : self.utils_.GetLoggedUserId((self.domain_ == self.c_.TWEET ? true : false));
			cmjQuery_('.mb-search-widget').remove();
			self.widgetNode_ = document.createElement("div");
			cmjQuery_(self.widgetNode_).attr("class", "mb-search-widget");
			if (self.isSidebar_ == true) {
				cmjQuery_(self.widgetNode_).css("cursor", "default");
			}
			self.InsertSearchBar(self.widgetNode_);
			self.InsertToolbar(self.widgetNode_);
			self.InsertSearchResultViewContainer(self.widgetNode_);
			self.InsertFooter(self.widgetNode_);
			cmjQuery_("#cmExtReloadMsg").remove();
			var parentnode = cmjQuery_("div#gb");
			if (parentnode && parentnode.length > 0) {
				parentnode.append(self.widgetNode_);
			} else {
				parentnode = cmjQuery_("div#top-bar");
				if (parentnode && parentnode.length > 0) {
					parentnode.append(self.widgetNode_);
					cmjQuery_("#signin-dropdown").css("z-index", "888");
					cmjQuery_("span#session>div.dropdown").css("z-index", "888");
				} else {
					cmjQuery_(document.body).append(self.widgetNode_);
				}
			}
			proto.SetWidgetWidth(self.widgetNode_);
			self.PositionSearchWidget(self.widgetNode_);
			self.ResizeResultPane();
			self.SetRoundedEdges();
			self.SetHandlers(self.widgetNode_);
			self.plugin_.GetAppPort(self.GetAppPortHandler());
			if (self.isSidebar_ == true) {
				var searchstr = cmjQuery_.cookie("_mWS");
				if (searchstr && searchstr.length > 0) {
					cmjQuery_(self.searchBox_).val(searchstr);
					window.setTimeout(function () {
						self.common_.HandleAutoComplete(0, false);
					}, 500);
				}
			}
			self.HandleClearButton();
			if (self.isSidebar_ == true) {
				cmjQuery_(self.searchBox_).focus();
			}
			window.setTimeout(function () {
				cmjQuery_("#mbdropdownmenu > li > ul").hide();
			}, 500);
			self.ShowBalloonMessage();
		};
		return func;
	};
	proto.GetAppPortHandler = function () {
		var func = function (response) {
			self.InitApplicationLinks(response);
			self.common_.UpdateStatus();
			cmjQuery_(self.searchBox_).attr('value', self.c_.EMPTY_SEARCH);
			cmjQuery_(self.searchBox_).addClass("mb-search-empty");
			window.setTimeout(function () {
				self.PositionSearchWidget(self.widgetNode_);
				self.ResizeResultPane();
			}, 100);
		};
		return func;
	};
	proto.InitApplicationLinks = function (response) {
		self.port_ = response;
		var direct_ui_url = self.utils_.GetDirectSearchUrl(self.version_);
		var remove_search_box_msg = "";
		var remove_search_box_pref_key = "";
		var baseurl = "http://127.0.0.1:" + self.port_ + "/";
		self.dDMenu_.AddMenuItem("Manage Accounts", baseurl + "index.html?ts=" + CloudMagic.CMSCRIPTTS);
		self.dDMenu_.AddMenuItem("New Search Window", function () {
			self.plugin_.OpenInTab(direct_ui_url, null);
			return false;
		});
		var caption;
		var showreplacemenu = true;
		var showhidemenu = true;
		if (self.domain_ == self.c_.MAIL) {
			caption = "Replace Gmail Search";
			remove_search_box_msg = "CloudMagic search box inside Gmail is now hidden. To show it again please visit 'Preferences'.";
			remove_search_box_pref_key = "gmail_searchbox";
		} else if (self.domain_ == self.c_.EVENT) {
			caption = "Replace Google Calendar Search";
			remove_search_box_msg = "CloudMagic search box inside Google Calendar is now hidden. To show it again please visit 'Preferences'.";
			remove_search_box_pref_key = "gcal_searchbox";
		} else if (self.domain_ == self.c_.DOC) {
			caption = "Replace Google docs Search";
			remove_search_box_pref_key = "gdoc_searchbox";
			remove_search_box_msg = "CloudMagic search box inside Google Docs is now hidden. To show it again please visit 'Preferences'.";
			var gsearch = cmjQuery_('input#search');
			if (gsearch.length == 0) {
				showreplacemenu = false;
			}
		} else if (self.domain_ == self.c_.TWEET) {
			showreplacemenu = false;
			remove_search_box_pref_key = "twitter_searchbox";
			remove_search_box_msg = "CloudMagic search box inside twitter is now hidden. To show it again please visit 'Preferences'.";
		} else {
			showreplacemenu = false;
			showhidemenu = false
		}
		if (self.isSidebar_ == false && showhidemenu == true) {
			self.dDMenu_.AddMenuItem("Hide Search box", function () {
				cmjQuery_('.mb-search-widget').remove();
				self.plugin_.SetPreferences(remove_search_box_pref_key, "0", null);
				alert(remove_search_box_msg);
				return false;
			});
		}
		if (showreplacemenu == true) {
			self.dDMenu_.AddMenuItem(caption, function () {
				self.dDMenu_.Close();
				var gsearch = cmjQuery_('table[role="search"]');
				if (gsearch.length == 0) {
					gsearch = cmjQuery_('input#search');
					if (gsearch.length == 0) {
						gsearch = cmjQuery_('input#maininput');
						if (gsearch.length == 0) {
							return false;
						} else {
							cmjQuery_(self.widgetNode_).width(parseInt(self.c_.WIDGET_DEFAULT_WIDTH_GCAL));
						}
					} else {
						cmjQuery_(self.widgetNode_).width(parseInt(self.c_.WIDGET_DEFAULT_WIDTH_GDOC));
					}
				} else {
					if (cmjQuery_.browser.webkit == true) {
						gsearch = gsearch.parent();
					}
					cmjQuery_(self.widgetNode_).width(parseInt(self.c_.WIDGET_DEFAULT_WIDTH_GMAIL));
				}
				var top = cmjQuery_(gsearch).offset().top - 5;
				var left = cmjQuery_(gsearch).offset().left - 2;
				cmjQuery_(self.widgetNode_).css("top", top);
				cmjQuery_(self.widgetNode_).css("left", left);
				self.SaveWidgetPosition();
				return false;
			});
		}
		self.dDMenu_.AddMenuItem("Preferences", baseurl + "preferences.html?p=1&ts=" + CloudMagic.CMSCRIPTTS);
		self.dDMenu_.AddMenuItem("Help", baseurl + "help.html?ts=" + CloudMagic.CMSCRIPTTS);
	};
	proto.CreateWidget = function () {
		self.plugin_ = self.utils_.InsertPlugin();
		self.common_.CalculateSearchResultCount();
		self.GetAppInfo();
		self.plugin_.GetPreferences(self.GetPreferencesHandler());
		return;
	};
	proto.GetAppUUIDHandler = function () {
		var func = function (response) {
			self.uuid_ = response;
		};
		return func;
	};
	proto.GetAppVersionHandler = function () {
		var func = function (response) {
			self.version_ = JSON.parse(response);
		};
		return func;
	};
	proto.GetAppInfo = function () {
		self.plugin_.GetAppUUID(self.GetAppUUIDHandler());
		self.plugin_.GetAppVersion(self.GetAppVersionHandler());
	};
	proto.SetHandlers = function (widgetNode) {
		cmjQuery_(widgetNode).keydown(function (e) {
			return self.HandleWidgetKeydown(e);
		});
		cmjQuery_(widgetNode).mouseleave(function (e) {
			if (self.getMailTimer_) {
				clearTimeout(self.getMailTimer_);
				self.getMailTimer_ = null;
			}
		});
		cmjQuery_(self.autocompleteViewNode_).scroll(function (e) {
			var tabtype = self.GetActiveTab();
			var id = self.GetActiveTabMoreResultId(tabtype);
			id = "#" + id;
			if (cmjQuery_(id).length == 0) {
				return;
			}
			var ret = self.utils_.IsScrolledIntoView(id);
			if (ret == true) {
				id = id + ">td";
				cmjQuery_(id).trigger("click");
			}
		});
		cmjQuery_(".mb-search-result").mouseleave(function (e) {
			if (self.getMailTimer_) {
				clearTimeout(self.getMailTimer_);
				self.getMailTimer_ = null;
			}
		});
		var wdt = cmjQuery_(window).width();
		wdt = (parseInt(wdt) < 800) ? 800 : wdt;
		if (self.isSidebar_ == false) {
			cmjQuery_(widgetNode).resizable({
				maxHeight : 30,
				minWidth : 306,
				maxWidth : wdt,
				distance : 0,
				handles : 'e, w',
				start : function (event, ui) {
					self.dDMenu_.Close();
				},
				resize : function (event, ui) {
					self.HandlePopupWidth();
					cmjQuery_(self.previewNode_).hide();
					cmjQuery_(".mb-refresh-msg").width(cmjQuery_(self.widgetNode_).width() - 2);
				},
				stop : function (event, ui) {
					self.SaveWidgetPosition();
				}
			});
			cmjQuery_(widgetNode).draggable({
				containment : 'document',
				handle : '.mb-search-container',
				stop : function (event, ui) {
					self.ResizeResultPane();
					self.SaveWidgetPosition();
					cmjQuery_(self.searchBox_).focus();
				}
			});
		}
		cmjQuery_(self.searchBox_).focus(function () {
			if (cmjQuery_(this).val() === self.c_.EMPTY_SEARCH) {
				cmjQuery_(self.searchBox_).val("");
			}
			cmjQuery_(this).removeClass("mb-search-empty");
		}).blur(function () {
			if (cmjQuery_(this).val() === '' || cmjQuery_(this).val() === self.c_.EMPTY_SEARCH) {
				cmjQuery_(this).addClass("mb-search-empty");
				cmjQuery_(this).val(self.c_.EMPTY_SEARCH);
				cmjQuery_(self.autocompleteViewNode_).fadeOut(100, function () {
					cmjQuery_(self.footerNode_).hide();
				});
			}
		});
		self.dDMenu_.Initialize();
		self.SetMouseWheelHandlers();
	};
	proto.SetRoundedEdges = function () {
		cmjQuery_('.mb-search-box-wrapper').corner("3px");
		cmjQuery_('.mb-category-menu').corner("top 4px");
		cmjQuery_('#mbSearchContainer').corner("3px");
		cmjQuery_('.mb-search-widget').corner("3px");
		cmjQuery_(self.footerNode_).corner("bottom 3px");
		cmjQuery_(self.previewNode_).corner("left 6px")
	};
	proto.SaveWidgetPosition = function () {
		var top = cmjQuery_(self.widgetNode_).css("top");
		var left = cmjQuery_(self.widgetNode_).css("left");
		var wdt = cmjQuery_(self.widgetNode_).width();
		cmjQuery_.cookie("_mWW", wdt, {
			expires : 365
		});
		cmjQuery_.cookie("_mWT", top, {
			expires : 365
		});
		cmjQuery_.cookie("_mWL", left, {
			expires : 365
		});
	};
	proto.SetWidgetWidth = function (widgetNode) {
		var wdt = cmjQuery_.cookie("_mWW");
		if (wdt != null) {
			wdt = parseInt(wdt);
			if (wdt < self.c_.WIDGET_DEFAULT_WIDTH_GMAIL) {
				wdt = self.c_.WIDGET_DEFAULT_WIDTH_GMAIL;
			}
			cmjQuery_(widgetNode).width(wdt);
		}
	};
	proto.PositionSearchWidget = function (widgetNode) {
		if (self.isSidebar_ == true) {
			cmjQuery_(widgetNode).css("position", "absolute");
			cmjQuery_(widgetNode).css("top", "5px");
			cmjQuery_(widgetNode).css("left", "5px");
			return;
		}
		var top = cmjQuery_.cookie("_mWT");
		var left = cmjQuery_.cookie("_mWL");
		var wdt = cmjQuery_.cookie("_mWW");
		if (wdt != null) {
			wdt = parseInt(wdt);
			if (wdt < self.c_.WIDGET_DEFAULT_WIDTH_GMAIL) {
				wdt = self.c_.WIDGET_DEFAULT_WIDTH_GMAIL;
			}
			cmjQuery_(widgetNode).width(wdt);
		}
		if (top != null) {
			top = parseInt(top);
		}
		if (left != null) {
			left = parseInt(left);
		}
		if (top == null || top < 0 || top > cmjQuery_(window).height()) {
			top = self.c_.WIDGET_DEFAULT_TOP;
			if (self.domain_ == self.c_.DOC) {
				var gsearch = cmjQuery_('input#search');
				if (gsearch.length == 0) {
					top = self.c_.WIDGET_DEFAULT_TOP_SINGLE_DOC;
				}
			} else if (self.domain_ == self.c_.TWEET) {
				top = self.c_.WIDGET_DEFAULT_TOP_TWEET;
			}
		}
		if (left == null || left < 0 || left > (cmjQuery_(window).width() - cmjQuery_(widgetNode).width() - 30)) {
			left = cmjQuery_(window).width() - cmjQuery_(widgetNode).width() - 140;
		}
		cmjQuery_(widgetNode).css("position", "absolute");
		cmjQuery_(widgetNode).css("top", top);
		cmjQuery_(widgetNode).css("left", left);
	};
	proto.InsertFooter = function (widgetNode) {
		var footer = document.createElement("div");
		var sharelinks = document.createElement("div");
		cmjQuery_(sharelinks).attr("class", "mb-sharelinks");
		self.utils_.AddShareLinks(sharelinks, self.accountUserId_, true);
		cmjQuery_(footer).append(sharelinks);
		var pgbar = document.createElement("div");
		var pgbartext = document.createElement("div");
		cmjQuery_(footer).attr("class", "mb-footer");
		cmjQuery_(pgbartext).attr("class", "mb-pgbar-text mb-font-small");
		cmjQuery_(pgbar).attr("class", "mb-pgbar");
		cmjQuery_(footer).attr("id", "mbFooter");
		cmjQuery_(footer).append(pgbar);
		cmjQuery_(footer).append(pgbartext);
		cmjQuery_(widgetNode).append(footer);
		self.footerNode_ = footer;
		self.pgBarTextNode_ = pgbartext;
		self.pgBarNode_ = pgbar;
	};
	proto.InsertSearchResultViewContainer = function (widgetNode) {
		var autocompleteview = document.createElement("div");
		cmjQuery_(autocompleteview).attr("class", "mb-search-result");
		cmjQuery_(autocompleteview).attr("id", "mbAutocompleteView");
		cmjQuery_(widgetNode).append(autocompleteview);
		self.autocompleteViewNode_ = autocompleteview;
		var preview = document.createElement("div");
		cmjQuery_(preview).attr("class", "mb-search-mail-result mb-hidden mb-mail-view ");
		cmjQuery_(preview).attr("id", "mbPreview");
		cmjQuery_(widgetNode).append(preview);
		self.previewNode_ = preview;
	};
	proto.InsertToolbar = function (widgetNode) {
		self.toolbarNode_ = document.createElement("div");
		cmjQuery_(self.toolbarNode_).attr("class", "mb-toolbar");
		cmjQuery_(self.toolbarNode_).attr("id", "mbToolbarNode");
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).css('width', '100%');
		cmjQuery_(table).css('height', '100%');
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		self.AddCategoryMenu(td);
		cmjQuery_(td).width("100%");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-search-help");
		var a = document.createElement("a");
		cmjQuery_(a).attr("class", "mb-search-help");
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("tabindex", "-1");
		cmjQuery_(a).attr("title", "Advanced Search Tips");
		var helphref = "http://cloudmagic.com/advanced_search_operators.php";
		cmjQuery_(a).attr("href", helphref);
		cmjQuery_(a).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(td).append(a);
		cmjQuery_(td).width("18px");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-close-result");
		cmjQuery_(td).attr("title", "Close (Esc)");
		cmjQuery_(td).html("&nbsp;&nbsp;");
		cmjQuery_(td).width("22px");
		cmjQuery_(td).click(function () {
			self.ShowView(self.c_.NO_VIEW);
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(self.toolbarNode_).append(table);
		cmjQuery_(widgetNode).append(self.toolbarNode_);
	};
	proto.InsertSearchBar = function (widgetNode) {
		var searchcontainer = document.createElement("div");
		cmjQuery_(searchcontainer).attr("class", "mb-search-container");
		cmjQuery_(searchcontainer).attr("id", "mbSearchContainer");
		self.searchContainerNode_ = searchcontainer;
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).css('width', '100%');
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).html("&nbsp;");
		cmjQuery_(td).attr("class", "mb-logo");
		cmjQuery_(td).width("27px");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).css('vertical-align', 'top');
		var searchboxwrapper = document.createElement("div");
		cmjQuery_(searchboxwrapper).attr("class", "mb-search-box-wrapper");
		var stable = document.createElement("table");
		cmjQuery_(stable).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(stable).css('table-layout', 'fixed');
		cmjQuery_(stable).attr("class", "mb-font-normal");
		cmjQuery_(stable).css('width', '100%');
		var stbody = document.createElement("tbody");
		var str = document.createElement("tr");
		std = document.createElement("td");
		cmjQuery_(std).css('width', '100%');
		var searchbox = document.createElement("input");
		cmjQuery_(searchbox).attr("type", "text");
		cmjQuery_(searchbox).attr("value", "");
		cmjQuery_(searchbox).attr("class", "mb-search-box mb-input");
		cmjQuery_(searchbox).height(26);
		cmjQuery_(searchbox).attr("id", "mbSearchInput");
		if (cmjQuery_.browser.webkit == true) {
			cmjQuery_(searchbox).keyup(function (e) {
				self.common_.SearchBoxKeypressHandler(e, self, true);
				if (self.domain_ == self.c_.TWEET) {
					e.stopPropagation();
				}
			});
			cmjQuery_(searchbox).keydown(function (e) {
				var code = self.utils_.GetKeyCode(e);
				switch (code) {
				case 27:
				case 32:
				case 37:
				case 38:
				case 39:
				case 40:
				case 13:
					break;
				default:
					if (self.domain_ == self.c_.TWEET && e.ctrlKey != 1) {
						e.stopPropagation();
					}
				}
			});
			cmjQuery_(searchbox).keypress(function (e) {
				if (self.domain_ == self.c_.TWEET) {
					e.stopPropagation();
				}
			});
		} else {
			cmjQuery_(searchbox).keypress(function (e) {
				self.common_.SearchBoxKeypressHandler(e, self, true);
				if (self.domain_ == self.c_.TWEET) {
					e.stopPropagation();
				}
			});
		}
		cmjQuery_(searchbox).bind('paste', function (e) {
			self.common_.HandleMouseEvents();
		});
		cmjQuery_(searchbox).bind('cut', function (e) {
			self.common_.HandleMouseEvents();
		});
		cmjQuery_(searchbox).bind('undo', function (e) {
			self.common_.HandleMouseEvents();
		});
		cmjQuery_(std).append(searchbox);
		cmjQuery_(str).append(std);
		std = document.createElement("td");
		cmjQuery_(std).css('width', '16px');
		var clearbutton = document.createElement("div");
		cmjQuery_(clearbutton).attr("class", "mb-clear-button");
		cmjQuery_(clearbutton).attr("title", "Clear");
		cmjQuery_(clearbutton).html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		cmjQuery_(std).append(clearbutton);
		cmjQuery_(str).append(std);
		cmjQuery_(clearbutton).click(function (e) {
			cmjQuery_(searchbox).val("");
			self.HandleClearButton();
			self.ShowView(self.c_.NO_VIEW);
			cmjQuery_(searchbox).focus();
		});
		self.searchBox_ = searchbox;
		self.clearButton_ = clearbutton;
		cmjQuery_(stbody).append(str);
		cmjQuery_(stable).append(stbody);
		cmjQuery_(searchboxwrapper).append(stable);
		cmjQuery_(td).append(searchboxwrapper);
		cmjQuery_(tr).append(td);
		var direct_ui_url = self.utils_.GetDirectSearchUrl(self.version_);
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-popout-wrapper");
		var a = document.createElement("div");
		cmjQuery_(a).attr("class", "mb-popout");
		cmjQuery_(a).attr("id", "mbNewWindowWithThisSearch");
		cmjQuery_(a).attr("href", direct_ui_url);
		cmjQuery_(a).attr("title", "New Search Window");
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).click(function () {
			var url = cmjQuery_(a).attr("href");
			self.plugin_.OpenInTab(url, null);
		})
		cmjQuery_(td).append(a);
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-options-wrapper");
		self.dDMenu_.CreateMenu(div);
		cmjQuery_(div).click(function () {
			return self.dDMenu_.Open();
		});
		cmjQuery_(td).append(div);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(searchcontainer).append(table);
		cmjQuery_(widgetNode).append(searchcontainer);
	};
	proto.HandleClearButton = function () {
		var searchval = cmjQuery_(self.searchBox_).val();
		if (searchval.length > 0 && searchval != self.c_.EMPTY_SEARCH) {
			cmjQuery_(self.clearButton_).fadeIn();
		} else {
			cmjQuery_(self.clearButton_).fadeOut();
		}
	};
	proto.HideMailView = function () {
		if (self.getMailTimer_) {
			clearTimeout(self.getMailTimer_);
			self.getMailTimer_ = null;
		}
		if (cmjQuery_(self.previewNode_).is(':visible') == true) {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
		}
	};
	proto.OpenMail = function (mail) {
		if (cmjQuery_(self.previewNode_).is(':visible') == true) {
			var messageid_with_accountid = cmjQuery_(self.previewNode_).attr("message_id_with_account_id");
			if (messageid_with_accountid == (mail.messageid + "mbpaccid_" + mail.accountid)) {
				self.ShowView(self.c_.M_VIEW);
				window.setTimeout(function () {
					self.ResizeResultPane();
				}, 10);
				return true;
			}
		}
		var result = self.plugin_.GetMail(mail.tsrowid.toString(), function (response) {
				var result = JSON.parse(response);
				self.ShowMail(result);
			});
		return true;
	};
	proto.OpenDoc = function (doc) {
		if (cmjQuery_(self.previewNode_).is(':visible') == true) {
			var messageid_with_accountid = cmjQuery_(self.previewNode_).attr("message_id_with_account_id");
			if (messageid_with_accountid == (doc.resourceid + "mbpaccid_" + doc.accountid)) {
				self.ShowView(self.c_.M_VIEW);
				window.setTimeout(function () {
					self.ResizeResultPane();
				}, 10);
				return true;
			}
		}
		var result = self.plugin_.GetDoc(doc.rowuid.toString(), function (response) {
				var result = JSON.parse(response);
				self.ShowDoc(result);
			});
		return true;
	};
	proto.OpenEvent = function (event) {
		if (cmjQuery_(self.previewNode_).is(':visible') == true) {
			var messageid_with_accountid = cmjQuery_(self.previewNode_).attr("message_id_with_account_id");
			if (messageid_with_accountid == (event.rowuid.toString() + "mbpaccid_" + event.accountid)) {
				self.ShowView(self.c_.M_VIEW);
				window.setTimeout(function () {
					self.ResizeResultPane();
				}, 10);
				return true;
			}
		}
		var result = self.plugin_.GetEvent(event.rowuid.toString(), function (response) {
				var result = JSON.parse(response);
				self.ShowEvent(result);
			});
		return true;
	};
	proto.OpenTweet = function (tweet) {
		if (cmjQuery_(self.previewNode_).is(':visible') == true) {
			var messageid_with_accountid = cmjQuery_(self.previewNode_).attr("message_id_with_account_id");
			if (messageid_with_accountid == (tweet.rowuid.toString() + "mbpaccid_" + tweet.accountid)) {
				self.ShowView(self.c_.M_VIEW);
				window.setTimeout(function () {
					self.ResizeResultPane();
				}, 10);
				return true;
			}
		}
		var result = self.plugin_.GetTweet(tweet.rowuid.toString(), function (response) {
				var result = JSON.parse(response);
				self.ShowTweet(result);
			});
		return true;
	};
	proto.GetShowMailClickHandler = function (mail) {
		var func = function () {
			if (self.getMailTimer_) {
				clearTimeout(self.getMailTimer_);
				self.getMailTimer_ = null;
			}
			self.getMailTimer_ = window.setTimeout(function () {
					self.OpenMail(mail);
				}, 1);
		};
		return func;
	};
	proto.GetShowDocClickHandler = function (doc) {
		var func = function () {
			if (self.getDocTimer_) {
				clearTimeout(self.getDocTimer_);
				self.getDocTimer_ = null;
			}
			self.getDocTimer_ = window.setTimeout(function () {
					self.OpenDoc(doc);
				}, 1);
		};
		return func;
	};
	proto.GetShowEventClickHandler = function (event) {
		var func = function () {
			if (self.getEventTimer_) {
				clearTimeout(self.getEventTimer_);
				self.getEventTimer_ = null;
			}
			self.getEventTimer_ = window.setTimeout(function () {
					self.OpenEvent(event);
				}, 1);
		};
		return func;
	};
	proto.AddLinkToMail = function (mail, node) {
		var a;
		var debug = false;
		var mailurl = "";
		a = document.createElement("a");
		if (self.utils_.strnicmp(mail.accountemail, self.accountUserId_, mail.accountemail.length) == true) {
			mailurl = self.utils_.GetBaseMailUrl(mail.accountemail, false, true) + '#' +
				self.common_.GetMailBoxName(mail.type) + '/' + mail.messageid;
			if (window.location.host == "mail.google.com") {
				if (CloudMagic.CMBROWSER != "gc") {
					cmjQuery_(a).attr("target", "_content");
				} else {
					cmjQuery_(a).attr("target", "_top");
				}
			} else {
				cmjQuery_(a).attr("target", "_blank");
			}
		} else {
			mailurl = self.utils_.GetBaseMailUrl(mail.accountemail, false, false) + '#' +
				self.common_.GetMailBoxName(mail.type) + '/' + mail.messageid;
			cmjQuery_(a).attr("target", "_blank");
		}
		cmjQuery_(a).attr("href", mailurl.toLowerCase());
		cmjQuery_(a).click(function (e) {
			if (e.shiftKey || e.ctrlKey) {
				cmjQuery_(a).attr("target", "_blank");
				return true;
			}
			if (cmjQuery_(a).attr("target") != "_blank") {
				cmjQuery_(self.previewNode_).hide();
				cmjQuery_(self.searchBox_).focus();
			}
		});
		cmjQuery_(a).attr("title", "View thread in Gmail(CTRL+<DOT>)");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View thread in Gmail");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.GetShowTweetClickHandler = function (tweet) {
		var func = function () {
			if (self.getTweetTimer_) {
				clearTimeout(self.getTweetTimer_);
				self.getTweetTimer_ = null;
			}
			self.getTweetTimer_ = window.setTimeout(function () {
					self.OpenTweet(tweet);
				}, 1);
		};
		return func;
	};
	proto.AddLinkToEvent = function (event, node) {
		var a;
		var eventurl = event.viewurl;
		a = document.createElement("a");
		var macindex = -1;
		var index = eventurl.indexOf("?eid=");
		if (index != -1) {
			var eid = eventurl.substring(index, eventurl.length);
			eventurl = "https://www.google.com/calendar/b/" +
				event.accountemail + "/render" + eid + "&sf=true&output=xml";
		}
		cmjQuery_(a).attr("href", eventurl);
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("title", "View event in Google Calendar (CTRL+<DOT>)");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View event in Google Calendar");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.AddLinkToTweet = function (tweet, node) {
		var statusurl;
		if (tweet.statustype == self.c_.TWEET_STATUS_HOME_TIMELINE || tweet.statustype == self.c_.TWEET_STATUS_USER_TIMELINE) {
			statusurl = "http://twitter.com/#!/" + tweet.fromuserdetails.sn
				 + "/statuses/" + tweet.id;
		} else {
			statusurl = 'http://twitter.com/#!/messages';
		}
		a = document.createElement("a");
		cmjQuery_(a).attr("href", statusurl);
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("title", "View tweet in Twitter (CTRL+<DOT>)");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View tweet in Twitter");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.AddLinkToDoc = function (doc, node) {
		var a;
		var debug = false;
		var mailurl = doc.viewurl;
		a = document.createElement("a");
		cmjQuery_(a).attr("href", mailurl);
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("title", "View document in Google Docs (CTRL+<DOT>)");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View document in Google Docs");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.AddLinkToContact = function (contact, node) {
		var a;
		var url = "#";
		if (contact.contactbase != undefined && contact.contactbase.length > 0) {
			var baseurl = self.utils_.GetBaseMailUrl(contact.accountemail, false, false);
			url = baseurl + "#contact/" + encodeURIComponent(contact.contactbase);
		}
		a = document.createElement("a");
		cmjQuery_(a).attr("href", url);
		cmjQuery_(a).attr("target", "_blank");
		cmjQuery_(a).attr("title", "View contact in Google Contacts (CTRL+<DOT>)");
		cmjQuery_(a).attr("id", "mbLocateOriginal");
		cmjQuery_(a).text("View contact in Google Contacts");
		cmjQuery_(a).addClass("mb-link");
		cmjQuery_(node).append(a);
	};
	proto.AddEventToolbar = function (event, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-cal");
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(td).html(event.accountemail);
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.AddTweetToolbar = function (tweet, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		if (tweet.statustype == self.c_.TWEET_STATUS_HOME_TIMELINE || tweet.statustype == self.c_.TWEET_STATUS_USER_TIMELINE) {
			cmjQuery_(td).addClass("mb-twitter-button mb-twitter-timeline");
		} else {
			cmjQuery_(td).addClass("mb-twitter-button mb-twitter-message");
		}
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		cmjQuery_(td).attr("float", "right");
		cmjQuery_(td).css("padding-right", "2px");
		cmjQuery_(td).attr("align", "left");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.AddContactToolbar = function (contact, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		cmjQuery_(td).addClass("mb-contact");
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(td).html(contact.accountemail);
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.AddDocToolbar = function (doc, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		var filetype = doc.type.toLowerCase().substring(0, 5);
		switch (filetype) {
		case "image":
			cmjQuery_(td).addClass("mb-photo");
			cmjQuery_(td).attr("title", "Image");
			break;
		case "docum":
			cmjQuery_(td).addClass("mb-doc");
			cmjQuery_(td).attr("title", "Document");
			break;
		case "sprea":
			cmjQuery_(td).addClass("mb-spread");
			cmjQuery_(td).attr("title", "Spreadsheet");
			break;
		case "prese":
			cmjQuery_(td).addClass("mb-presentation");
			cmjQuery_(td).attr("title", "Presentation");
			break;
		case "pdf":
			cmjQuery_(td).addClass("mb-pdf");
			cmjQuery_(td).attr("title", "pdf");
			break;
		default:
			cmjQuery_(td).addClass("mb-generic");
			cmjQuery_(td).attr("title", doc.type);
		}
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(td).html(doc.accountemail);
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.AddEmailToolbar = function (mail, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		if (mail.type == 2) {
			cmjQuery_(td).attr("class", "mb-sent-mail mb-button");
			cmjQuery_(td).attr("title", "Sent Mail");
		} else if (mail.type == 1) {
			cmjQuery_(td).attr("class", "mb-recv-mail mb-button");
			cmjQuery_(td).attr("title", "Received Mail");
		} else if (mail.type == 0) {
			cmjQuery_(td).attr("class", "mb-draft mb-button");
			cmjQuery_(td).attr("title", "Draft");
		}
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(td).html(mail.accountemail);
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.ShowMail = function (mail) {
		if (self.CheckForError(mail, self.c_.MAIL) == true) {
			return;
		}
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-preview-container");
		self.previewContentNode_ = div;
		cmjQuery_(self.previewContentNode_).mousewheel(self.utils_.MouseWheelHandler());
		cmjQuery_(div).keydown(function (e) {
			var code = self.utils_.GetKeyCode(e);
			switch (code) {
			case 27:
			case 32:
				break;
			default:
				e.stopPropagation();
			}
		});
		self.common_.AddMailTopSubject(mail, div);
		self.common_.AddMailTopHeader(mail, div);
		var table = document.createElement("table");
		cmjQuery_(table).attr("class", "mb-preview-header-table mb-font-normal");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(self.utils_.SetCaption("from"));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td mb-preview-search-value mb-preview-search-value-from");
		if (mail.sendername.length > 0) {
			self.common_.AddText(td, mail.sendername + " <" + mail.senderaddress + ">");
		} else {
			self.common_.AddText(td, mail.senderaddress);
		}
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		self.common_.AddEmailHeader(tbody, "to", mail.to);
		self.common_.AddEmailHeader(tbody, "cc", mail.cc);
		self.common_.AddEmailHeader(tbody, "bcc", mail.bcc);
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(self.utils_.SetCaption("date"));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td");
		var d = self.dateFormat_.formatDateWith(mail.timestamp * 1000, "ddd, mmm dd, yyyy") + " at " +
			self.dateFormat_.formatDateWith(mail.timestamp * 1000, "h:MM TT");
		self.common_.AddText(td, d);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(self.utils_.SetCaption("subject"));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td mb-preview-search-value mb-preview-search-value-subject");
		self.common_.AddText(td, mail.subject);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(div).append(table);
		var mailcontent = document.createElement("div");
		cmjQuery_(mailcontent).attr("class", "mb-preview mb-preview-search-value mb-preview-search-value-body");
		var text = mail.body;
		if (mail.contenttype != 1) {
			text = self.utils_.replaceURLWithHTMLLinksHelper(text);
			text = self.utils_.HtmlEntities(text, "ENT_NOQUOTES");
			text = self.utils_.ReplaceSlashNWithBR(text);
		} else {
			text = self.utils_.HTMLSanitizer(text);
			text = self.utils_.addBlankToHTMLLinks(text);
			text = self.utils_.makeShowQuotedTextVisible(text);
		}
		cmjQuery_(mailcontent).append(text);
		cmjQuery_(mailcontent).append("<br/>");
		for (var i = 0; i < mail.attachments.length; i++) {
			if (i == 0) {
				cmjQuery_(mailcontent).append("<br/>");
				cmjQuery_(mailcontent).append("<div class='mb-attachment-header'></div>");
			}
			var a = mail.attachments[i];
			var adiv = document.createElement("div");
			var aspan = document.createElement("span");
			cmjQuery_(adiv).attr("class", " mb-preview-attachments mb-single-line mb-preview-search-value-filename");
			cmjQuery_(aspan).attr("class", "mb-link");
			var filename = a.n;
			if (filename.length > 30) {
				var part1 = filename.substring(0, 14);
				var part2 = filename.substring(filename.length - 14, filename.length);
				filename = part1 + "..." + part2;
			}
			cmjQuery_(aspan).text(filename);
			cmjQuery_(aspan).attr('title', a.n);
			var func = self.common_.GetAttachmentHandler(mail, a);
			cmjQuery_(aspan).click(func);
			cmjQuery_(adiv).append(aspan);
			cmjQuery_(mailcontent).append(adiv);
		}
		cmjQuery_(div).append(mailcontent);
		cmjQuery_(div).append("<br/>");
		self.ResizeResultPane();
		cmjQuery_(self.previewNode_).empty();
		self.AddEmailToolbar(mail, self.previewNode_);
		cmjQuery_(self.previewNode_).append(div);
		cmjQuery_(self.previewNode_).attr("message_id_with_account_id", (mail.messageid + "mbpaccid_" + mail.accountid));
		self.ShowView(self.c_.M_VIEW);
		self.activePreview_ = self.c_.MAIL;
		self.common_.HandleTracking(self.c_.MAIL, true);
		self.getMailTimer_ = window.setTimeout(function () {
				self.ResizeResultPane();
				self.getMailTimer_ = window.setTimeout(function () {
						self.common_.MakeHyperlink();
						self.HighlightMailView();
						self.utils_.ConvertEmailToHyperlink(self.previewNode_, mail.accountemail);
					}, 10);
			}, 10);
	};
	proto.AddEmailToolbar = function (mail, div) {
		var table = document.createElement("table");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		if (mail.type == 2) {
			cmjQuery_(td).attr("class", "mb-sent-mail mb-button");
			cmjQuery_(td).attr("title", "Sent Mail");
		} else if (mail.type == 1) {
			cmjQuery_(td).attr("class", "mb-recv-mail mb-button");
			cmjQuery_(td).attr("title", "Received Mail");
		} else if (mail.type == 0) {
			cmjQuery_(td).attr("class", "mb-draft mb-button");
			cmjQuery_(td).attr("title", "Draft");
		}
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button");
		cmjQuery_(td).attr("title", "Source account");
		cmjQuery_(td).attr("class", "mb-source-account");
		cmjQuery_(td).html(mail.accountemail);
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-button mb-hide-mail-left");
		cmjQuery_(td).attr("title", "Close (Esc)");
		self.mailCloseButton_ = td;
		cmjQuery_(td).click(function () {
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.searchBox_).focus();
		});
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-preview-toolbar");
		cmjQuery_(d).append(table);
		self.previewToolbarNode_ = d;
		cmjQuery_(div).append(d);
	};
	proto.ShowTweet = function (tweet) {
		if (self.CheckForError(tweet, self.c_.TWEET) == true) {
			return;
		}
		cmjQuery_(self.previewNode).empty();
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-preview-container");
		self.previewContentNode_ = div;
		var tweetpreviewheader = document.createElement("div");
		cmjQuery_(tweetpreviewheader).attr("id", "mbPreviewHeader");
		cmjQuery_(self.previewContentNode_).mousewheel(self.utils_.MouseWheelHandler());
		cmjQuery_(div).keydown(function (e) {
			var code = self.utils_.GetKeyCode(e);
			switch (code) {
			case 27:
			case 32:
				break;
			default:
				e.stopPropagation();
			}
		});
		var headercontainer = document.createElement("div");
		cmjQuery_(headercontainer).css("padding", "5px");
		var tweettable = document.createElement("table");
		cmjQuery_(tweettable).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(tweettable).css('table-layout', 'fixed');
		cmjQuery_(tweettable).css('width', '100%');
		cmjQuery_(tweettable).css('padding-top', '5px');
		var tweettbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-font-normal");
		cmjQuery_(td).css("width", "22%");
		var image = document.createElement("img");
		profileurl = self.c_.TWEET_USER_PROFILE_IMAGE + tweet.fromuserdetails.sn + '&size=normal';
		cmjQuery_(image).attr("src", profileurl);
		cmjQuery_(image).width(64);
		cmjQuery_(image).height(64);
		cmjQuery_(td).append(image);
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).css('padding-left', '5px');
		cmjQuery_(td).css('vertical-align', 'top');
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', "mb-single-line mb-font-bigger");
		cmjQuery_(div).css('height', '20px');
		var atag = document.createElement("a");
		var tweetprofileurl;
		tweetprofileurl = self.common_.GetTwitterUserProfileURL(tweet.fromuserdetails.sn);
		cmjQuery_(atag).attr("href", tweetprofileurl);
		cmjQuery_(atag).attr("target", "_blank");
		cmjQuery_(atag).attr("class", "mb-user-profile-single-view mb-single-line mb-preview-search-value \
			        mb-preview-search-value-from mb-preview-search-value-to mb-preview-search-value-owner");
		cmjQuery_(atag).text(tweet.fromuserdetails.sn);
		cmjQuery_(div).append(atag);
		cmjQuery_(td).append(div);
		div = document.createElement("div");
		cmjQuery_(div).attr('class', "mb-single-line mb-font-bigger mb-tweet-username mb-preview-search-value \
			        mb-preview-search-value-from mb-preview-search-value-to mb-preview-search-value-owner");
		cmjQuery_(div).css('height', '20px');
		cmjQuery_(div).text(tweet.fromuserdetails.n);
		cmjQuery_(td).append(div);
		tweetstatuslink = document.createElement("div");
		cmjQuery_(tweetstatuslink).css('height', '20px');
		cmjQuery_(tweetstatuslink).attr('align', 'bottom');
		self.AddLinkToTweet(tweet, tweetstatuslink);
		cmjQuery_(td).append(tweetstatuslink);
		cmjQuery_(tr).append(td);
		cmjQuery_(tweettbody).append(tr);
		cmjQuery_(tweettable).append(tweettbody);
		cmjQuery_(headercontainer).append(tweettable);
		cmjQuery_(tweetpreviewheader).append(headercontainer);
		var detailsdiv = document.createElement("div");
		cmjQuery_(detailsdiv).attr("class", "mb-preview");
		cmjQuery_(tweetpreviewheader).append(detailsdiv);
		var innertable = document.createElement("table");
		cmjQuery_(innertable).css('table-layout', 'fixed');
		cmjQuery_(innertable).attr("class", "mb-font-normal");
		cmjQuery_(innertable).css('width', '100%');
		cmjQuery_(detailsdiv).append(innertable);
		var innertbody = document.createElement("tbody");
		cmjQuery_(innertable).append(innertbody);
		var innertr = document.createElement("tr");
		var innertd = document.createElement("td");
		cmjQuery_(innertd).addClass("mb-font-normal mb-preview-search-value mb-preview-search-value-mentions \
			        mb-preview-search-value-tweet mb-preview-search-value-hashtags mb-preview-search-value-url");
		var resultanttweettxt;
		resultanttweettxt = self.common_.GetTweetContentwithLinks(tweet);
		cmjQuery_(innertd).html(resultanttweettxt);
		cmjQuery_(innertr).append(innertd);
		cmjQuery_(innertbody).append(innertr);
		cmjQuery_(innertbody).append("<br>");
		innertr = document.createElement("tr");
		innertd = document.createElement("td");
		cmjQuery_(innertd).attr("id", "viaSource");
		cmjQuery_(innertd).addClass("mb-single-line mb-font-big");
		var tweettime = self.dateFormat_.formatDate(tweet.createdtime * 1000, true, true);
		var tweettimestr = tweettime;
		if (tweet.statustype == self.c_.TWEET_STATUS_HOME_TIMELINE || tweet.statustype == self.c_.TWEET_STATUS_USER_TIMELINE) {
			if (tweet.source.length > 0) {
				tweettimestr += "&nbsp;via&nbsp;" + tweet.source;
			}
		}
		cmjQuery_(innertd).html(tweettimestr);
		cmjQuery_(innertr).append(innertd);
		cmjQuery_(innertbody).append(innertr);
		innertr = document.createElement("tr");
		innertd = document.createElement("td");
		cmjQuery_(innertd).addClass("mb-single-line mb-font-big");
		var retweetname = "";
		if (tweet.fromuserdetails != undefined && tweet.fromuserdetails.rn != undefined) {
			retweetname = tweet.fromuserdetails.rn;
		}
		if (retweetname != undefined && retweetname.length > 0) {
			span = document.createElement("span");
			cmjQuery_(tweetcontainer).append(span);
			cmjQuery_(span).addClass("mb-font-normal mb-single-line mb-retweet-row");
			cmjQuery_(span).html("Retweeted By&nbsp;");
			cmjQuery_(innertd).append(span);
			var userprofilelink = self.common_.GetTwitterUserProfileURL(retweetname);
			a = document.createElement("a");
			cmjQuery_(a).addClass('mb-preview-search-value');
			cmjQuery_(a).attr('href', userprofilelink);
			cmjQuery_(a).attr('target', '_blank');
			cmjQuery_(a).text(retweetname);
			cmjQuery_(innertd).append(a);
			cmjQuery_(innertr).append(innertd);
			cmjQuery_(innertbody).append(innertr);
		}
		cmjQuery_(innertbody).append("<br>");
		if (tweet.mentions.length > 0) {
			self.common_.AddMentions(tweet.mentions, innertbody);
		}
		self.common_.AddExpandedUrls(tweet.urls, innertbody);
		var location = tweet.fromuserdetails.l;
		self.common_.AddTweetLocation(location, tweet.statustype, innertbody);
		cmjQuery_(self.previewNode_).empty();
		self.AddTweetToolbar(tweet, self.previewNode_);
		cmjQuery_(self.previewContentNode_).append(tweetpreviewheader);
		cmjQuery_(self.previewNode_).append(self.previewContentNode_);
		cmjQuery_('#viaSource > a').attr('target', '_blank');
		cmjQuery_(self.previewNode_).attr("message_id_with_account_id", tweet.id);
		self.ShowView(self.c_.M_VIEW);
		self.activePreview_ = self.c_.TWEET;
		self.common_.HandleTracking(self.c_.TWEET, true);
		self.ResizeResultPane();
		self.getTweetTimer_ = window.setTimeout(function () {
				self.HighlightMailView();
			}, 10);
	};
	proto.ShowEvent = function (event) {
		if (self.CheckForError(event, self.c_.EVENT) == true) {
			return;
		}
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-preview-container");
		self.previewContentNode_ = div;
		var header = document.createElement("div");
		cmjQuery_(header).attr("id", "mbPreviewHeader");
		cmjQuery_(calendarnamediv).css("padding", "3px");
		cmjQuery_(self.previewContentNode_).mousewheel(self.utils_.MouseWheelHandler());
		cmjQuery_(div).keydown(function (e) {
			var code = self.utils_.GetKeyCode(e);
			switch (code) {
			case 27:
			case 32:
				break;
			default:
				e.stopPropagation();
			}
		});
		self.common_.AddEventTopTitle(event, header);
		var calendarname = " ";
		if (event.calendardetails.name != undefined) {
			calendarname = event.calendardetails.name;
		}
		var calendarnamediv = document.createElement("div");
		cmjQuery_(calendarnamediv).attr("class", "mb-font-normal mb-single-line");
		cmjQuery_(calendarnamediv).css("title", calendarname);
		cmjQuery_(calendarnamediv).css("padding", "3px");
		cmjQuery_(calendarnamediv).html("<b>Calendar:</b>&nbsp;&nbsp;<span class='mb-preview-search-value mb-preview-search-value-calendar'>" + calendarname + "</span>");
		cmjQuery_(header).append(calendarnamediv);
		var attendstatustopdiv = document.createElement("div");
		cmjQuery_(attendstatustopdiv).css("padding", "3px");
		cmjQuery_(header).append(attendstatustopdiv);
		var index = self.common_.FindOwnerGuestIndexInGuestJson(event.guests, self.accountUserId_);
		if (index != -1) {
			gueststatus = event.guests[index].s;
			if (gueststatus != "" && gueststatus != "invited") {
				var imageclass = self.common_.GuestAttendeStatus(event.guests[index].s, false);
				var attendstatusval = self.common_.GuestAttendeStatus(event.guests[index].s);
				var attendstatusdiv = document.createElement("div");
				cmjQuery_(attendstatusdiv).text(attendstatusval);
				cmjQuery_(attendstatusdiv).attr("class", imageclass);
				cmjQuery_(attendstatustopdiv).append(attendstatusdiv);
			}
		}
		var linktocal = document.createElement("div");
		cmjQuery_(linktocal).attr("class", "mb-locate-link");
		self.AddLinkToEvent(event, linktocal);
		cmjQuery_(header).append(linktocal);
		var detailsdiv = document.createElement("div");
		cmjQuery_(detailsdiv).attr("class", "mb-preview");
		cmjQuery_(header).append(detailsdiv);
		var table = document.createElement("table");
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).attr("class", "mb-font-normal");
		cmjQuery_(table).attr("cellspacing", 5);
		cmjQuery_(table).css('width', '100%');
		cmjQuery_(detailsdiv).append(table);
		var tbody = document.createElement("tbody");
		cmjQuery_(table).append(tbody);
		var isallday = event.metadata.isallday;
		self.common_.AddEventDate(event, tbody, isallday);
		if (event.title == undefined || event.title != "") {
			var tr = document.createElement("tr");
			cmjQuery_(tbody).append(tr);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
			cmjQuery_(td).text("What:");
			cmjQuery_(td).attr('valign', "top");
			cmjQuery_(tr).append(td);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-font-normal mb-preview-search-value mb-preview-search-value-what");
			cmjQuery_(td).text(event.title);
			cmjQuery_(tr).append(td);
		}
		if (event.where == undefined || event.where != "") {
			var tr = document.createElement("tr");
			cmjQuery_(tbody).append(tr);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
			cmjQuery_(td).text("Where:");
			cmjQuery_(td).attr('valign', "top");
			cmjQuery_(tr).append(td);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-font-normal mb-preview-search-value mb-preview-search-value-where");
			cmjQuery_(td).text(event.where);
			cmjQuery_(tr).append(td);
		}
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("Repeat:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		cmjQuery_(td).text((event.metadata.isrepeat == true ? "Yes" : "No"));
		cmjQuery_(tr).append(td);
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("All day:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		cmjQuery_(td).text((isallday == true ? "Yes" : "No"));
		cmjQuery_(tr).append(td);
		if (event.description == undefined || event.description != "") {
			var tr = document.createElement("tr");
			cmjQuery_(tbody).append(tr);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
			cmjQuery_(td).attr('valign', "top");
			cmjQuery_(td).text("Description:");
			cmjQuery_(tr).append(td);
			var td = document.createElement("td");
			cmjQuery_(td).attr('class', "mb-font-normal mb-preview-search-value mb-preview-search-value-description");
			cmjQuery_(td).text(event.description);
			cmjQuery_(tr).append(td);
		}
		self.common_.AddEventReminderDetails(event, tbody);
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("Show me as:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		var availablestr;
		if (event.metadata.available == undefined || event.metadata.available == 1) {
			availablestr = "Available";
		} else {
			availablestr = "Busy";
		}
		cmjQuery_(td).text(availablestr);
		cmjQuery_(tr).append(td);
		var tr = document.createElement("tr");
		cmjQuery_(tbody).append(tr);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-single-line mb-event-name");
		cmjQuery_(td).attr('valign', "top");
		cmjQuery_(td).text("Privacy:");
		cmjQuery_(tr).append(td);
		var td = document.createElement("td");
		cmjQuery_(td).attr('class', "mb-font-normal");
		self.common_.AddEventGuests(event, tbody);
		var visibility = " ";
		if (event.metadata.visibility != undefined) {
			visibility = event.metadata.visibility;
			visibility = visibility.charAt(0).toUpperCase() + visibility.slice(1);
		}
		cmjQuery_(td).text(visibility);
		cmjQuery_(tr).append(td);
		cmjQuery_(self.previewContentNode_).append(header);
		self.common_.AddGuestEventAcessPermissions(event, tbody);
		cmjQuery_(self.previewNode_).empty();
		self.AddEventToolbar(event, self.previewNode_);
		cmjQuery_(self.previewNode_).append(div);
		self.ResizeResultPane();
		cmjQuery_(self.previewNode_).attr("message_id_with_account_id", (event.uid + "mbpaccid_" + event.accountid));
		self.ShowView(self.c_.M_VIEW);
		self.activePreview_ = self.c_.EVENT;
		self.common_.HandleTracking(self.c_.EVENT, true);
		self.getMailTimer_ = window.setTimeout(function () {
				self.ResizeResultPane();
				self.getMailTimer_ = window.setTimeout(function () {
						self.common_.MakeHyperlink();
						self.HighlightMailView();
						self.utils_.ConvertEmailToHyperlink(self.previewNode_, event.accountemail);
					}, 10);
			}, 10);
	};
	proto.ShowDoc = function (doc) {
		if (self.CheckForError(doc, self.c_.DOC) == true) {
			return;
		}
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-preview-container");
		self.previewContentNode_ = div;
		var docheader = document.createElement("div");
		cmjQuery_(docheader).attr("id", "mbPreviewHeader");
		cmjQuery_(self.previewContentNode_).mousewheel(self.utils_.MouseWheelHandler());
		cmjQuery_(div).keydown(function (e) {
			var code = self.utils_.GetKeyCode(e);
			switch (code) {
			case 27:
			case 32:
				break;
			default:
				e.stopPropagation();
			}
		});
		self.common_.AddDocTopTitle(doc, docheader);
		self.common_.AddDocTopHeader(doc, docheader);
		var table = document.createElement("table");
		cmjQuery_(table).attr("class", "mb-preview-header-table mb-font-normal");
		cmjQuery_(table).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(table).css('table-layout', 'fixed');
		cmjQuery_(table).width("100%");
		var tbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(self.utils_.SetCaption("owner"));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td mb-preview-search-value mb-preview-search-value-from");
		self.common_.AddText(td, doc.owner);
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		self.common_.AddDocSharedMembers(doc, tbody);
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header mb-preview-header-td");
		cmjQuery_(td).append(self.utils_.SetCaption("published date"));
		cmjQuery_(tr).append(td);
		td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-preview-header-td");
		self.common_.AddText(td, self.dateFormat_.formatDate(doc.publishedtime * 1000));
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
		cmjQuery_(table).append(tbody);
		cmjQuery_(docheader).append(table);
		cmjQuery_(div).append(docheader);
		var doccontent = document.createElement("div");
		if (doc.content.length > 0) {
			cmjQuery_(doccontent).attr("class", "mb-preview mb-preview-search-value mb-preview-search-value-content");
			var ifr = document.createElement("iframe");
			cmjQuery_(ifr).attr("class", "mb-preview-iframe mb-font-normal");
			ifr.src = "";
			cmjQuery_(ifr).load(function () {
				try {
					var previewiframe = cmjQuery_(ifr)[0];
					self.common_.InitializeIframe(previewiframe);
					var docContent = self.utils_.addBlankToHTMLLinks(doc.content);
					cmjQuery_(previewiframe.contentWindow).keydown(function (e) {
						var code = self.utils_.GetKeyCode(e);
						if (code == 27) {
							self.HandlePopupWidth();
							cmjQuery_(self.previewNode_).hide();
							cmjQuery_(self.searchBox_).focus();
						}
					});
					window.setTimeout(function () {
						previewiframe.contentWindow.document.body.innerHTML = docContent;
						self.getMailTimer_ = window.setTimeout(function () {
								self.common_.MakeHyperlink();
								self.highlight_.HighlightSearchDirectPreview(self.activeSearchString_, previewiframe.contentWindow.document);
								self.utils_.ConvertEmailToHyperlink(self.previewContentNode_, doc.accountemail);
							}, 10);
					}, 0);
				} catch (e) {
					alert("Failed to load doc");
				}
			});
			cmjQuery_(doccontent).append(ifr);
		} else {
			cmjQuery_(doccontent).attr("class", "mb-preview mb-new-preview mb-font-bigger");
			cmjQuery_(doccontent).append("No preview available<br/>");
			var d1 = document.createElement("span");
			cmjQuery_(d1).attr("class", "mb-font-small");
			cmjQuery_(d1).append("type:&nbsp;");
			var d2 = document.createElement("span");
			cmjQuery_(d2).attr("class", "mb-preview-search-value mb-preview-search-value-type");
			cmjQuery_(d2).append(doc.type);
			cmjQuery_(d1).append(d2);
			cmjQuery_(doccontent).append(d1);
		}
		cmjQuery_(doccontent).append("<br/>");
		cmjQuery_(div).append(doccontent);
		cmjQuery_(self.previewNode_).empty();
		self.AddDocToolbar(doc, self.previewNode_);
		self.ResizeResultPane();
		cmjQuery_(self.previewNode_).append(div);
		cmjQuery_(self.previewNode_).attr("message_id_with_account_id", (doc.resourceid + "mbpaccid_" + doc.accountid));
		self.ShowView(self.c_.M_VIEW);
		self.activePreview_ = self.c_.DOC;
		self.common_.HandleTracking(self.c_.DOC, true);
		self.getMailTimer_ = window.setTimeout(function () {
				self.ResizeResultPane();
				self.getMailTimer_ = window.setTimeout(function () {
						self.common_.MakeHyperlink();
						self.HighlightMailView();
						self.utils_.ConvertEmailToHyperlink(self.previewNode_, doc.accountemail);
					}, 10);
			}, 10);
	};
	proto.AddText = function (node, value) {
		var div = document.createElement("div");
		cmjQuery_(div).text(value);
		cmjQuery_(node).append(div);
	};
	proto.SetStatusMessage = function () {
		var accountCount = 0;
		if (self.statusMsg_ && typeof(self.statusMsg) != undefined && typeof(self.statusMsg_.accountcount) != undefined) {
			accountCount = self.statusMsg_.accountcount;
		}
		if (accountCount == 0) {
			cmjQuery_(self.pgBarTextNode_).html("");
			cmjQuery_(self.pgBarNode_).hide();
			return;
		}
		if (self.statusMsg_.accountstatus.error == -1) {
			cmjQuery_(self.pgBarTextNode_).html("Connecting...");
			cmjQuery_(self.pgBarNode_).hide();
			return;
		}
		if (self.statusMsg_.accountstatus.error == 1) {
			var url = "http://127.0.0.1:" + self.port_ + "/index.html?ts=" + CloudMagic.CMSCRIPTTS;
			cmjQuery_(self.pgBarTextNode_).html("<a target='_blank' href='" +
				url + "'>Problem with indexing</a>");
			cmjQuery_(self.pgBarNode_).hide();
			return;
		}
		if (self.statusMsg_.index.indexstatus == 0 || self.statusMsg_.docindexstatus == 0 || self.statusMsg_.calindexstatus == 0 || self.statusMsg_.contactindexstatus == 0 || self.statusMsg_.twitterindexstatus == 0) {
			cmjQuery_(self.pgBarTextNode_).html("Indexing");
			cmjQuery_(self.pgBarNode_).hide();
		} else if (self.statusMsg_.accountstatus.updatedtime != 0) {
			var updateTime = self.statusMsg_.accountstatus.updatedtime;
			updateTime = self.dateFormat_.formatDate(updateTime * 1000, "false");
			cmjQuery_(self.pgBarTextNode_).html("Last updated: " + updateTime);
			cmjQuery_(self.pgBarNode_).hide();
		} else {
			cmjQuery_(self.pgBarTextNode_).html("Indexing");
			cmjQuery_(self.pgBarNode_).hide();
		}
	};
	proto.HandleDocumentKeydown = function (e) {
		var code = self.utils_.GetKeyCode(e);
		if (code == 27) {
			if (cmjQuery_("#mbdropdownmenu > li > ul").css('visibility') == "visible" || cmjQuery_("#mbSearchOptionsDialog").css('visibility') == "visible") {
				self.dDMenu_.Close();
			} else if (cmjQuery_(self.previewNode_).is(':visible') == true) {
				self.HandlePopupWidth();
				cmjQuery_(self.previewNode_).hide();
				window.setTimeout(function () {
					cmjQuery_(self.searchBox_).focus();
				}, 10);
			} else {
				if (self.GetCurrentViewType() == self.c_.NO_VIEW) {
					self.dDMenu_.Close();
					cmjQuery_(self.searchBox_).blur();
				} else {
					self.ShowView(self.c_.NO_VIEW);
					self.dDMenu_.Close();
					cmjQuery_(self.searchBox_).focus();
				}
			}
		} else if (code == 191 || code == 111) {
			if (e.ctrlKey == 1) {
				self.dDMenu_.Close();
				cmjQuery_(self.searchBox_).focus();
				cmjQuery_(self.searchBox_).select();
				return false;
			}
		} else if (code == 190 || code == 110) {
			if (e.ctrlKey == 1 && cmjQuery_(self.previewNode_).is(':visible') == true) {
				var a = cmjQuery_("#mbLocateOriginal");
				var href = cmjQuery_(a).attr("href");
				if (href && href.length > 0) {
					if (self.activePreview_ == self.c_.MAIL && window.location.host == "mail.google.com" && href.indexOf("mail.google.com/mail/u") != -1) {
						window.top.location = href;
					} else {
						self.plugin_.OpenInTab(href, null);
						return;
					}
				}
				cmjQuery_(a).click();
			}
		}
	};
	proto.HandleWidgetKeydown = function (e) {
		var code = self.utils_.GetKeyCode(e);
		switch (code) {
		case 38:
			return self.Navigate('up');
			break;
		case 40:
			return self.Navigate('down');
			break;
		case 13:
			return self.HandleWidgetEnterKey();
			break;
		case 27:
			break;
		case 37:
			if (e.altKey != true) {
				break;
			}
		case 8:
			if (cmjQuery_('.mb-back-to-search').is(':visible')) {
				cmjQuery_('.mb-back-to-search>a').trigger("click");
				return false;
			}
		}
		return true;
	};
	proto.HandleWidgetEnterKey = function () {
		var viewType = self.GetCurrentViewType();
		if (viewType == self.c_.AC_VIEW) {
			if (self.tabNavigatorInFocus_ != null && self.tabNavigatorInFocus_ != self.GetActiveTab()) {
				return true;
			}
			var tabtype = self.GetActiveTab();
			var id = self.GetRowResultId(tabtype);
			var selectionid = self.GetActiveTabRowSelectionId(tabtype);
			if (self[selectionid] != -1) {
				id = id + ">td";
				cmjQuery_(id).eq(self[selectionid]).trigger('click');
			}
			return false;
		}
		return true;
	};
	proto.GetCurrentViewType = function () {
		var viewType = self.c_.NO_VIEW;
		if (cmjQuery_(self.autocompleteViewNode_).is(':visible')) {
			viewType = self.c_.AC_VIEW;
		}
		return viewType;
	};
	proto.GetActiveTab = function () {
		return self.SearchableItems;
	};
	proto.InitializeACViewKeyboardNavigation = function (tabtype) {
		var id = self.GetRowResultId(tabtype);
		for (var i = 0; i < cmjQuery_(id).size(); i++) {
			cmjQuery_(id).eq(i).data("number", i);
		}
		cmjQuery_(id).unbind('click');
		cmjQuery_(id).click(function () {
			var selectionid = self.GetActiveTabRowSelectionId(tabtype);
			self[selectionid] = cmjQuery_(this).data("number");
			self.SetSelectedRow(self[selectionid]);
		}, function () {
			cmjQuery_(id).removeClass("mb-search-item-hover");
		});
	};
	proto.GetRowResultId = function (tabtype) {
		var id;
		switch (tabtype) {
		case self.c_.DOC:
			id = "tr.mb-docs-result-row";
			break;
		case self.c_.CONTACT:
			id = "tr.mb-contacts-result-row";
			break;
		case self.c_.EVENT:
			id = "tr.mb-event-result-row";
			break;
		case self.c_.TWEET:
			id = "tr.mb-tweet-result-row";
			break;
		case self.c_.MAIL:
		default:
			id = "tr.mb-mails-result-row";
		}
		return id;
	};
	proto.GetActiveTabRowSelectionId = function (tabtype) {
		var id;
		switch (tabtype) {
		case self.c_.DOC:
			id = "currentDocSelectionRowId_";
			break;
		case self.c_.CONTACT:
			id = "currentContactSelectionRowId_";
			break;
		case self.c_.EVENT:
			id = "currentCalSelectionRowId_";
			break;
		case self.c_.TWEET:
			id = "currentTweetSelectionRowId_";
			break;
		case self.c_.MAIL:
		default:
			id = "currentMailSelectionRowId_";
		}
		return id;
	};
	proto.GetActiveTabMoreResultId = function (tabtype) {
		var id;
		switch (tabtype) {
		case self.c_.DOC:
			id = "mbSearchMoreDocs";
			break;
		case self.c_.CONTACT:
			id = "mbSearchMoreContacts";
			break;
		case self.c_.EVENT:
			id = "mbSearchMoreEvents";
			break;
		case self.c_.TWEET:
			id = "mbSearchMoreTweets";
			break;
		case self.c_.MAIL:
		default:
			id = "mbSearchMoreMails";
		}
		return id;
	};
	proto.Navigate = function (direction) {
		self.dDMenu_.Close();
		var viewType = self.GetCurrentViewType();
		if (viewType != self.c_.AC_VIEW) {
			return;
		}
		var tabtype = self.GetActiveTab();
		var id = self.GetRowResultId(tabtype);
		var hoverid = id + ".mb-search-item-hover";
		var selectionid = self.GetActiveTabRowSelectionId(tabtype);
		if (cmjQuery_(hoverid).size() == 0) {
			self[selectionid] = -1;
		}
		if (direction == 'up' && self[selectionid] != -1) {
			if (self[selectionid] != 0) {
				self[selectionid] = self[selectionid] - 1;
			}
		} else if (direction == 'down') {
			if (self[selectionid] != cmjQuery_(id).size() - 1) {
				self[selectionid] = self[selectionid] + 1;
			}
		}
		self.SetSelectedRow(self[selectionid]);
		return false;
	};
	proto.SetSelectedRow = function (menuitem) {
		var tabtype = self.GetActiveTab();
		var id = self.GetRowResultId(tabtype);
		var selectionid = self.GetActiveTabRowSelectionId(tabtype);
		self[selectionid] = menuitem;
		cmjQuery_(id).removeClass("mb-search-item-hover");
		if (self[selectionid] == -1) {
			if (cmjQuery_(id).length > 0) {
				self.utils_.ScrollIntoView(cmjQuery_(id).eq(0), self.autocompleteViewNode_);
			}
			return;
		}
		if (cmjQuery_(id).length > 0) {
			cmjQuery_(id).eq(menuitem).addClass("mb-search-item-hover");
			self.utils_.ScrollIntoView(cmjQuery_(id).eq(menuitem), self.autocompleteViewNode_);
		}
	};
	proto.ResizeResultPane = function () {
		var resultpane = cmjQuery_('.mb-search-result');
		var whgt = cmjQuery_(window).height();
		var pos = cmjQuery_('.mb-search-widget').css("top");
		var correction = (self.isSidebar_ == true) ? 36 : 52;
		var hgt = whgt - parseInt(pos) - cmjQuery_(self.searchContainerNode_).height() -
			cmjQuery_(self.footerNode_).height() -
			correction;
		var minhgt = self.c_.WIDGET_MIN_HEIGHT;
		if (hgt < minhgt) {
			hgt = minhgt;
		}
		cmjQuery_(self.autocompleteViewNode_).height(hgt);
		cmjQuery_(self.contactViewNode_).height(hgt);
		var previewcorrection = (self.isSidebar_ == true) ? 55 : 40;
		cmjQuery_(self.previewNode_).height(hgt + correction + previewcorrection);
		cmjQuery_(self.previewContentNode_).height(hgt + correction -
			cmjQuery_(self.previewToolbarNode_).height() + 36);
		cmjQuery_(".mb-preview-iframe").height(hgt + correction - cmjQuery_(self.previewToolbarNode_).height() + 36 - cmjQuery_("#mbPreviewHeader").height() - 10);
	};
	proto.ShowView = function (viewType) {
		switch (viewType) {
		case self.c_.AC_VIEW:
			cmjQuery_(self.toolbarNode_).show();
			cmjQuery_(self.contactViewNode_).hide();
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.footerNode_).show();
			cmjQuery_(self.autocompleteViewNode_).fadeIn(200, function () {
				self.SetStatusMessage();
				self.ResizeResultPane();
			});
			cmjQuery_('.mb-category-wrapper').show();
			cmjQuery_('.mb-back-to-search').hide();
			cmjQuery_('.mb-search-box-wrapper').show();
			self.ResizeResultPane();
			cmjQuery_(self.searchBox_).focus();
			cmjQuery_(self.autocompleteViewNode_).attr('scrollTop', 0);
			self.utils_.SetPopoutWithSearchUrl(true, cmjQuery_(self.searchBox_).val(), self.GetActiveTab(), self.version_);
			break;
		case self.c_.M_VIEW:
			var left = cmjQuery_(self.widgetNode_).css("left");
			left = parseInt(left);
			var wdt = cmjQuery_(self.widgetNode_).width()
				wdt = parseInt(wdt);
			if (left < self.c_.DEF_MAIL_VIEW_WIDTH && self.isSidebar_ == false) {
				self.mailSlideDirection_ = 'left';
				cmjQuery_(self.previewNode_).removeClass("mb-preview-view-left");
				cmjQuery_(self.previewNode_).addClass("mb-preview-view-right");
				cmjQuery_(self.previewNode_).css("left", wdt);
				cmjQuery_(self.mailCloseButton_).removeClass("mb-hide-mail-left");
				cmjQuery_(self.mailCloseButton_).addClass("mb-hide-mail-right");
				cmjQuery_(self.previewNode_).uncorner();
				cmjQuery_(self.previewNode_).corner("right 6px");
			} else {
				self.mailSlideDirection_ = 'right';
				cmjQuery_(self.previewNode_).removeClass("mb-preview-view-right");
				cmjQuery_(self.previewNode_).addClass("mb-preview-view-left");
				cmjQuery_(self.mailCloseButton_).removeClass("mb-hide-mail-right");
				cmjQuery_(self.mailCloseButton_).addClass("mb-hide-mail-left");
				cmjQuery_(self.previewNode_).css("left", "-302px");
				cmjQuery_(self.previewNode_).uncorner();
				cmjQuery_(self.previewNode_).corner("left 6px");
			}
			cmjQuery_(self.previewNode_).show();
			self.HandlePopupWidth(true);
			cmjQuery_(self.previewContentNode_).attr('scrollTop', 0);
			cmjQuery_(self.previewContentNode_).attr('scrollLeft', 0);
			cmjQuery_(self.searchBox_).focus();
			break;
		case self.c_.NO_VIEW:
			self.common_.ClearACTimers();
			cmjQuery_(self.autocompleteViewNode_).attr('scrollTop', 0);
			self.utils_.SetPopoutWithSearchUrl(true, cmjQuery_(self.searchBox_).val(), null, self.version_);
			cmjQuery_(self.autocompleteViewNode_).fadeOut(10, function () {
				cmjQuery_(self.footerNode_).hide();
			});
			self.HandlePopupWidth();
			cmjQuery_(self.previewNode_).hide();
			cmjQuery_(self.contactViewNode_).hide();
			cmjQuery_('.mb-back-to-search').hide();
			cmjQuery_('.mb-search-box-wrapper').show();
			cmjQuery_(self.widgetNode_).height(cmjQuery_('#mbSearchContainer').height());
			cmjQuery_(self.toolbarNode_).hide();
			self.ResizeResultPane();
			self.activeSearchString_ = "";
			self.searchString_ = "";
			if (self.isSidebar_ == true) {
				cmjQuery_.cookie("_mWS", self.searchString_, {
					expires : 365
				});
			}
			break;
		default:
			self.utils_.CMLOG("Invalid viewType : " + viewType);
		}
	};
	proto.HandlePopupWidth = function (isshow) {
		isshow = isshow || false;
		if (self.isSidebar_ == true) {
			var left = "5px";
			var width = 300;
			if (isshow == true) {
				width = width * 2;
				left = "305px";
			}
			cmjQuery_(self.widgetNode_).css("left", left);
			cmjQuery_(document.body).width(width);
		}
	};
	proto.HighlightMailView = function () {
		self.highlight_.HighlightSearchDirectPreview(self.activeSearchString_);
	};
	proto.ShowNewVersionMessage = function (data) {
		var cver = self.version_.majorversion + "." + self.version_.minorversion
			cver = parseFloat(cver);
		var nver = parseFloat(data.version);
		if (cver < nver) {
			if (cmjQuery_(".mb-safari-update").length != 0) {
				return;
			}
			var div = document.createElement("div");
			cmjQuery_(div).attr("class", "mb-top-msg-banner mb-safari-update");
			cmjQuery_(div).append('CloudMagic <span id="cmVersionInfo">' + data.version + '</span> is available. <br />Do you want to download now? <br />');
			var span = document.createElement("span");
			cmjQuery_(span).append('<a class="mb-link" href="http://www.cloudmagic.com/install.php">Download</a>&nbsp;&nbsp;');
			var span2 = document.createElement("span");
			cmjQuery_(span2).attr("class", "mb-link");
			cmjQuery_(span2).html("Close");
			cmjQuery_(span2).click(function () {
				cmjQuery_(".mb-safari-update").remove();
			});
			cmjQuery_(span).append(span2);
			cmjQuery_(div).append(span);
			cmjQuery_(self.widgetNode_).append(div);
			cmjQuery_(div).show();
		}
	};
	proto.ShowReloadMessage = function () {
		if (cmjQuery_(".mb-reload-msg").length != 0) {
			return;
		}
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-top-msg-banner mb-reload-msg");
		cmjQuery_(div).append("CloudMagic successfully updated.<br/> Click <span class='mb-link'>here</span> to reload");
		cmjQuery_(self.widgetNode_).append(div);
		cmjQuery_(".mb-reload-msg").width(cmjQuery_(self.widgetNode_).width() - 2);
		cmjQuery_(".mb-reload-msg").slideDown(500);
		cmjQuery_(".mb-reload-msg").corner("3px");
		cmjQuery_(".mb-reload-msg>span").click(function () {
			window.top.location.reload();
		});
	};
	proto.ShowRestartMessage = function () {
		if (cmjQuery_(".mb-restart-msg").length != 0) {
			return;
		}
		var showrestartmsg = cmjQuery_.cookie("_mRM");
		if (showrestartmsg && showrestartmsg.length > 0 && showrestartmsg == "1") {
			return;
		}
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-top-msg-banner mb-restart-msg mb-font-smaller");
		cmjQuery_(div).append('It seems that you have updated Firefox. One or more components of CloudMagic failed to load properly. Normally, CloudMagic will work after restarting Firefox. <br/>If you are not able to use CloudMagic even after restarting Firefox, contact us at <a href="mailto:feedback@cloudmagic.com">feedback@cloudmagic.com</a>&nbsp;&nbsp;<span class="mb-link" id="mbHideRestartMsg"><b>Hide</b></span>');
		cmjQuery_(document.body).append(div);
		cmjQuery_("#mbHideRestartMsg").click(function () {
			cmjQuery_.cookie("_mRM", "1");
			cmjQuery_(".mb-restart-msg").remove();
			return false;
		});
		cmjQuery_(".mb-restart-msg").slideDown(500);
		cmjQuery_(".mb-restart-msg").corner("3px");
	};
	proto.ShowBalloonMessage = function () {
		if (CloudMagic.CMSHOWNEWFEATUREMSG != "1" || self.isSidebar_ == true) {
			return;
		}
		var cver = parseFloat(self.version_.majorversion + "." + self.version_.minorversion);
		if (self.pref_.LastBalloonMessageVersion > 3.18) {
			return;
		}
		var balloon = document.createElement("div");
		cmjQuery_(balloon).attr("class", "mb-balloon");
		var content = document.createElement("div");
		cmjQuery_(content).attr("class", "mb-balloon-content");
		var tip = document.createElement("div");
		cmjQuery_(tip).attr("class", "mb-balloon-tip");
		cmjQuery_(content).html(self.c_.PROMO_MSG);
		var upgradeurl = "";
		if (cmjQuery_.browser.webkit == true) {
			upgradeurl = self.c_.CHROME_GALLERY_URL;
		} else {
			upgradeurl = self.c_.FIREFOX_GALLERY_URL;
		}
		cmjQuery_("#mbUpgradeExtension", content).attr("href", upgradeurl);
		var sbarheight = cmjQuery_(self.widgetNode_).height();
		cmjQuery_(balloon).append(tip);
		cmjQuery_(balloon).append(self.c_.COMMON_BALLOON_MESSAGE_1);
		cmjQuery_(balloon).append(content);
		cmjQuery_(self.widgetNode_).append(balloon);
		var w = parseInt(cmjQuery_(balloon).width());
		cmjQuery_(tip).css("left", w - 11);
		cmjQuery_(tip).css("top", 11);
		cmjQuery_(content).corner("4px")
		var l = parseInt(cmjQuery_(self.widgetNode_).css("left"));
		if (l < (w + 200)) {
			left = (w + 200) + "px";
			cmjQuery_(self.widgetNode_).css("left", left);
			cmjQuery_.cookie("_mWL", left, {
				expires : 365
			});
		}
		var left = parseInt(cmjQuery_(self.widgetNode_).css("left"));
		left = (-1 * w) - 10;
		cmjQuery_(balloon).css("left", left);
		cmjQuery_("#mbCloseBalloonMsg").click(function () {
			cmjQuery_(".mb-balloon").remove();
			self.plugin_.SetPreferences("LastBalloonMessageVersion", cver, null);
		});
	};
	proto.SetMouseWheelHandlers = function () {
		cmjQuery_(self.contactViewNode_).mousewheel(self.utils_.MouseWheelHandler());
		cmjQuery_(self.autocompleteViewNode_).mousewheel(self.utils_.MouseWheelHandler());
	};
	proto.ShowContacts = function (contacts, tbody) {
		if (typeof contacts == "undefined" || contacts.length == 0) {
			return false;
		}
		if (self.searchContactResultCount_ == 0) {
			self.ShowPromoMessage(tbody);
		}
		var len = contacts.length;
		cmjQuery_("#mbLoadingContacts").remove();
		for (var i = 0; i < len; i++) {
			var c = contacts[i];
			var tr = document.createElement("tr");
			cmjQuery_(tr).attr("Class", "mb-contacts-result-row");
			var td = document.createElement("td");
			cmjQuery_(td).attr("class", "mb-result-column");
			var image = document.createElement("img");
			if (c.photo.length > 0) {
				cmjQuery_(image).attr("src", "data:image/jpeg;base64," + c.photo);
			} else {
				cmjQuery_(image).attr("src", "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAIAAACom36dAAAABnRSTlMA3wDjAO6JFU6fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAL3UlEQVR4nLVa25bbOJKMSJBSld27//+Xsz3H5ZJEImIeMkFSN/e8LE7ZpeIFyBsyIwOibYyxrlq7tj9hC7BNEoch27B1fBXOfwYIGMdbkgDaNuB6ifn7OLOtAPr2sAAblMAUQRbIz4/TNOb12iUdlkoZfHflcOPxGuuyKb66WW+kUscPd+aAASrvUAaBBqauNiLAgAPA2rV2PchnW68klg0CxEt1ACBw7xgYxhCRB5WfJ7ADcMA2DIKyxfQ9g7ANgZNtSRJ2s5J58VkekrYJ2ndOIOEMiQqM/SbJIDRMkG4P8smHtAF1I8ODpAEagLUpT8jABJTN9klSCT57L6MTkh6cIJWYBCUdI1WS4YMFOAL2cW4AoqkQQOYaQVAQELDsIOGu6agrIPl1GKPiKjV+MUhCMHxUNhWxx0v7p5cLiE6vCTZBwLQAGgbNMVMJ7RHryo16b+bNFQaeY7kMRwCQHHF0Pb1FDCDYMhkvTQKQlWRS4oxhGjQE03CKleFhjRzGV1Fhj2ixVTMeJPb4VCksIjBynOsJAibBFyljWA2ARyY0aWg4ypV+XNackHlX25LPEldMjCTw8AxBsm7C9tqX3nvXOrUpYmKLCGbYkai99WzmklpGDOM4Uw3DMASA9dS0Lfsqh5VbWalyZKz79Xrvy3Lr68qgu9a+Luva+zrP8xQzW5umeWoTIsr2L61tONL/hg0LiEpXZbHY3ptevD+UP0540GIfEq7Xy+Vyud1uva/pKJIkW2vrui5abLc2nc7nef6INr3yJQAgjpOTiCwHGX1yxKE4vBa60jCP8j4Okuu6fH193W7XiGitbdfTMgTZAkCXvn59TdNlPn+ez5/TNI1avi2XGzkjV0TAAOSxk9IcWSEBTGkYjrc98hK5ly4+JhMDVPfl8t37GhGPm4Gg97wRIKdQ1+X3l7s+f/5sbRqPwTJBMGzJjIBXCUFG1l+DrTJfkOAx++TCWyGzXwX58EMgfv/++v7+/T7hPP0RiODl8uvr339bHbVYWixAB4IEDDJa7j4g48SI4xoptGUXXjIMy3oXFSnA5Xq5XL5tPUssVYH0gBkbmLAd0W6367///lfvKwC7mzZlebVqo9OgyoBUo4PQwTgBQLlfTY9gfr3Bs2DKAC/Xy9r7SxvjyUeWmRAkwWZw7f1yuRAY5WIfRBjoEJHa0Ghde74rob1Xw9ch4S0LGSDXZVlu10QLT4+OeaP2xD7nAUTZut1+L7crWLIICJod8i565VzL98odK+pbUIDhXIKwf339Wvv6LK5VxY+g5LKNC6XZd2p61W251kt5pbugV7Yeb3EDJu/jSW4mXHDt83F1WW4Dynl/sh6D7EK+5R9HK32OKxi6XC/RzqdpQgStTlIMdDtsmTAC6CTlQxthvy8upXGJVHneXpbbw/6rIutUwnShhULyBAfQvJ+f6FqX62maLZsm4ADEDuVGDIQdzwEwHaeplTCw/GiMdvBhXy6/j+C1cgSIbJZ2ZFX2B+nHrmh7131dZEfAHQjInQqWV2m/3DejCShRx+wetSilJ4ECn9YBvxeUSPx50HyTOq3wLn8aWLtQPQ1pUFuVAyvt+RkZTiWIMtfVEzt82iO5flUNOiKT4x9xd2H44cUgIEPS2pcJM0BJwy5lrkTYDyvZx+xBZF+2L/TkG8PVsY/m6qnT2/Shj6n1aWjghd5XIwwXhoZ43/9u+g8TeEDTXOahmX0uHXbvfQuQRzTFym6VWF7GY0p8MCPZRhl0JSmCPuamx1GdSxaWt4scdK1UP3xSuuUnwXBEDKT0p3nqRUZrc0G8xNA2iBHNDzY5Cs2K5UPfX7M/DrK1qfqcTJ7k3gOSkbjUvi/wGwbdYCMIM+J0/pzb1A1QgVAGrDDagaOuNZOBYPWxHPA9txphDoxLObEtyfj8/GkRSZ6MvoIpx0g4NcP+s48MjFa7nfMUfVQug6CFROI8iFPDAxa+aoyBrUKCe+BmZopo0aYMKKt6BQYNOuHUu9bVaSTEAanLAJV2MfS+8YWypc7VDp4HnFSQRt4cTd22qhGt/fzrfyImdJOIxhc55I9jSGwDjQ2A0YPhw70HC0oKRBkzubxSRdQIHBu9uNFy6FYfCM7zHBFbQrPt/qetR0LG9khNu+0+gQjZwddpPaNXJQgI7mW82sI90bp7a4gdZC8HAGBrbUF5Zq+C70w7gn43kEFimhpbcy5Ey9zg6Gbj/S87WEC6CMhE2ZIZwGjvMq9JjkAfbF2Oj48fkq7X6wilo9SFJ3f9D3plw0F4nk6fn385QJsZ05vjyj8cXEt9tjJ7O8kaSp2s8rLTWgOZSXv+yfQWrX3++F/1/7vdLsADBVoK7JXq/nY2L9Pc2KaNOt9gq48vjRkkYdNgtFsCkG8SlKC7Hfhi2GitzaczRwf6/ADGvhpYa/R16CSn6SR1CTKfifD0/2ip7pXZOhePbt1+muCd2NY0z621BxB37Nm411FoW1kMRkR71Xc8LLIvdrycQlMoDvkNYfc8aGuepmmaHmHNYcVtLQ0lbEfjfJqYlNHjOuZWJSrVlBkP22akvKyH+sdEsCtdRppPH/N82pqroRE2durxmt3maT596FVU2buUeDLwNtNdRfyzgQeTgdGao/fe5vnHj7+izTqGnbC3CgZYDpU1TdP59IMxvetltCXzDY894ZjXZfzhoQ0X5yaXktI0EZDn0+nj48fWPhiHHw8DMze659NpPp3/YeMc+Rc+2tt/Evou81ZIyEz+zXmWgwAjoU4UU3EwCxFRbUFyTpFg/+Xec3Us3Ju3xxZpzMqdgPQofmMOAHWYpfpnRtiKCKkD7BRHH53FSEr0B7jI2zpP45hUxIHgqk+CMDixjNKnOB08MsCkEI77xcZ2UBIZA7TzoGSQRsiukwHL1MZcegeoZBWXJ3Jk70THggcD+93mu7N0ALlpTGwMsMvvghGyy0ygLXEkXdgiDKn3roNHRx15RPGCLfXjCaXrOM2HevfPIzbzglYePALJvgDdlpxk6zgFEWElFYkQwrfb9Xa9ZoyjztNedj1mcF3X5fpddhrkFcH/xsalZ5E1YS2OIGGpA1E5noE0OGgl92EyrEhwtS7L5fJrua12nY5s5P39GJgXBHz5/lpul/Pnz3k+59Npe744xn0xCpp6BbKMa4TwUCqxJ02z28GEvnBfl+v1crvdLMmj73ppF78oWb33769f1/Z9On/M0wkM+781dUHTJN88JB8ka27oEGU40BiW0Jf1ev29LIukoneeUV4C43FW/RSvBPMsu6v3pV3m08c0nxHBN2fyJe5IbBuFkP1ltrEdQFLMAIhGallv63rr69r7uvaeIu2t7N3QSBx7Dts5kAO8IiF1qfe+xu3SYm7T1KY5IgpLvTK9i6wxANNh5+k5gpR0WxdJa5f7Kq9rByBX2A5s8Tznq49VKAYGrZSXB/RQl7uWFUvcGluQ0drUWouIiImxFchq4idUMWIQQifQpevtuqyL1C10dPRk7Afd8ATr998x8sFRaJdvvW3H0SckV5Fzw+pakguKyDOziGjTPE/zmRn3oMcxM1BtirtwuXxfvn/LdQTB7Pr/BP/eWBeZAT0A5mNLtpGaQO0NJs1LAF674BXGstzOZ50//xrtRHF522q8Xr+ul2+AeThYoOedvB5Fb1tdBziTPG/yxwlR6tFNAZfEGQHlw0EHcnxPxb7dvtnaPJ+xVcSNvZb6uty0v//OrsJOr94/FJsOo2PB4KwI5rcLapIU3YPdusdHe31y5u/l9r0ZL7NH4jX0vsp4Bf2OAXCw7vFYdxO6QlijtQCJ3u9zHglkijvAdNx1KMdmAFUwladeRUACIUNKbFR05L6GhWCxmIx7rnK4GHnOwipv4GAp0ioPibqEYc3wyj5P37Ho6zLNHwVNYXaLbNJtfN3u/gXywLsa9xxIAeysn3WwmgDoCOXu1z9skndl8OG6baqbUXm6NU6tRcQaU2vRGvBgaT6Qn8ee/e5Je/fv8QDska3n9v9z/R8x8bBZiGjtNMU8Ndq+LT2/e3S5XNZ1eT48fr7yB5jw//fwPJ/m+RTB/wBIdrK5rle+tQAAAABJRU5ErkJggg==");
			}
			cmjQuery_(image).attr("class", "mb-contact-small-photo");
			cmjQuery_(td).append(image);
			var name = document.createElement("div");
			cmjQuery_(name).attr('class', 'mb-contact-name mb-single-line');
			var contactname;
			contactname = c.name;
			if (contactname.length == 0) {
				contactname = "(unknown)";
			}
			cmjQuery_(name).html(contactname);
			cmjQuery_(td).append(name);
			var details = document.createElement("div");
			cmjQuery_(details).attr('class', 'mb-contact-result-wrapper mb-single-line');
			if (c.email && c.email.length != 0) {
				var emails = c.email.split("\n");
				for (j = 0; j < emails.length; j++) {
					if (j != 0 && emails[j].length > 0) {
						cmjQuery_(details).append(",&nbsp;");
					}
					cmjQuery_(details).append(emails[j]);
				}
				cmjQuery_(details).append("&nbsp;");
			}
			if (c.phone && c.phone.length != 0) {
				var numbers = c.phone.split("\n");
				for (var j = 0; j < numbers.length; j++) {
					if (j != 0 && numbers[j].length > 0) {
						cmjQuery_(details).append(",&nbsp;");
					}
					var number = numbers[j].replace(/^[\s|\']*/, "").replace(/[\s|\']*$/, "");
					cmjQuery_(details).append(number);
				}
				cmjQuery_(details).append("&nbsp;");
			}
			if (c.notes && c.notes.length > 0) {
				var notes = document.createElement("div");
				cmjQuery_(notes).text(c.notes);
				cmjQuery_(details).append(notes);
			}
			cmjQuery_(td).append(details);
			var details = document.createElement("div");
			cmjQuery_(details).attr('class', 'mb-contact-result-wrapper mb-snippet mb-single-line');
			cmjQuery_(details).html(c.snippet);
			cmjQuery_(td).append(details);
			cmjQuery_(td).width("100%");
			cmjQuery_(tr).append(td);
			var func = self.GetOpenContactHandler(c);
			cmjQuery_(td).click(func);
			cmjQuery_(tbody).append(tr);
		}
		return true;
	};
	proto.GetOpenContactHandler = function (contact) {
		var func = function () {
			if (self.getContactTimer_) {
				clearTimeout(self.getContactTimer_);
				self.getContactTimer_ = null;
			}
			self.getContactTimer_ = window.setTimeout(function () {
					self.OpenContact(contact);
				}, 1);
		};
		return func;
	};
	proto.OpenContact = function (contact) {
		var result = self.plugin_.GetContact(contact.id.toString(), function (response) {
				var result = JSON.parse(response);
				self.ShowContact(result);
			});
		return true;
	};
	proto.ShowPreviewError = function (viewtype) {
		cmjQuery_(self.previewNode_).empty();
		var div = document.createElement("div");
		cmjQuery_(div).attr('class', 'cm-error-info');
		var msg;
		var type;
		switch (viewtype) {
		case self.c_.MAIL:
			type = "mail";
			break;
		case self.c_.DOC:
			type = "document";
			break;
		case self.c_.CONTACT:
			type = "contact";
			break;
		case self.c_.EVENT:
			type = "event";
			break;
		case self.c_.TWEET:
			type = "tweet";
			break;
		}
		msg = "Failed to get " + type + " details,  try after sometime";
		cmjQuery_(div).html(msg);
		cmjQuery_(self.previewNode_).append(div);
		self.ShowView(self.c_.M_VIEW);
		return;
	};
	proto.CheckForError = function (result, type) {
		if (result.hasOwnProperty("error") && result.error.length > 1) {
			self.ShowPreviewError(type);
			return true;
		}
		return false;
	};
	proto.ShowContact = function (contact) {
		if (self.CheckForError(contact, self.c_.CONTACT) == true) {
			return;
		}
		var previewnode = document.createElement("div");
		cmjQuery_(previewnode).attr('class', 'mb-preview-container');
		self.previewContentNode_ = previewnode;
		cmjQuery_(previewnode).keydown(function (e) {
			var code = self.utils_.GetKeyCode(e);
			switch (code) {
			case 27:
			case 32:
				break;
			default:
				e.stopPropagation();
			}
		});
		var contactcontainer = document.createElement("div");
		var contactinfo = document.createElement("div");
		cmjQuery_(contactinfo).attr('class', 'cm-contact-info');
		var contacttable = document.createElement("table");
		cmjQuery_(contacttable).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(contacttable).css('table-layout', 'fixed');
		cmjQuery_(contacttable).attr("class", "mb-font-normal");
		cmjQuery_(contacttable).css('width', '100%');
		var contacttbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		cmjQuery_(tr).attr('class', "mb-contact-result-row");
		var td = document.createElement("td");
		cmjQuery_(td).width("100%");
		cmjQuery_(td).attr("valign", "top");
		cmjQuery_(td).css("border-bottom", "1px solid #EAEAEA");
		var innertable = document.createElement("table");
		cmjQuery_(innertable).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(innertable).css('table-layout', 'fixed');
		cmjQuery_(innertable).attr("class", "mb-font-normal");
		cmjQuery_(innertable).css('width', '100%');
		var innertbody = document.createElement("tbody");
		var innertr = document.createElement("tr");
		var innertd = document.createElement("td");
		var photo = document.createElement("img");
		if (contact.photo.length == 0) {
			cmjQuery_(photo).attr("src", "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAIAAACom36dAAAABnRSTlMA3wDjAO6JFU6fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAL3UlEQVR4nLVa25bbOJKMSJBSld27//+Xsz3H5ZJEImIeMkFSN/e8LE7ZpeIFyBsyIwOibYyxrlq7tj9hC7BNEoch27B1fBXOfwYIGMdbkgDaNuB6ifn7OLOtAPr2sAAblMAUQRbIz4/TNOb12iUdlkoZfHflcOPxGuuyKb66WW+kUscPd+aAASrvUAaBBqauNiLAgAPA2rV2PchnW68klg0CxEt1ACBw7xgYxhCRB5WfJ7ADcMA2DIKyxfQ9g7ANgZNtSRJ2s5J58VkekrYJ2ndOIOEMiQqM/SbJIDRMkG4P8smHtAF1I8ODpAEagLUpT8jABJTN9klSCT57L6MTkh6cIJWYBCUdI1WS4YMFOAL2cW4AoqkQQOYaQVAQELDsIOGu6agrIPl1GKPiKjV+MUhCMHxUNhWxx0v7p5cLiE6vCTZBwLQAGgbNMVMJ7RHryo16b+bNFQaeY7kMRwCQHHF0Pb1FDCDYMhkvTQKQlWRS4oxhGjQE03CKleFhjRzGV1Fhj2ixVTMeJPb4VCksIjBynOsJAibBFyljWA2ARyY0aWg4ypV+XNackHlX25LPEldMjCTw8AxBsm7C9tqX3nvXOrUpYmKLCGbYkai99WzmklpGDOM4Uw3DMASA9dS0Lfsqh5VbWalyZKz79Xrvy3Lr68qgu9a+Luva+zrP8xQzW5umeWoTIsr2L61tONL/hg0LiEpXZbHY3ptevD+UP0540GIfEq7Xy+Vyud1uva/pKJIkW2vrui5abLc2nc7nef6INr3yJQAgjpOTiCwHGX1yxKE4vBa60jCP8j4Okuu6fH193W7XiGitbdfTMgTZAkCXvn59TdNlPn+ez5/TNI1avi2XGzkjV0TAAOSxk9IcWSEBTGkYjrc98hK5ly4+JhMDVPfl8t37GhGPm4Gg97wRIKdQ1+X3l7s+f/5sbRqPwTJBMGzJjIBXCUFG1l+DrTJfkOAx++TCWyGzXwX58EMgfv/++v7+/T7hPP0RiODl8uvr339bHbVYWixAB4IEDDJa7j4g48SI4xoptGUXXjIMy3oXFSnA5Xq5XL5tPUssVYH0gBkbmLAd0W6367///lfvKwC7mzZlebVqo9OgyoBUo4PQwTgBQLlfTY9gfr3Bs2DKAC/Xy9r7SxvjyUeWmRAkwWZw7f1yuRAY5WIfRBjoEJHa0Ghde74rob1Xw9ch4S0LGSDXZVlu10QLT4+OeaP2xD7nAUTZut1+L7crWLIICJod8i565VzL98odK+pbUIDhXIKwf339Wvv6LK5VxY+g5LKNC6XZd2p61W251kt5pbugV7Yeb3EDJu/jSW4mXHDt83F1WW4Dynl/sh6D7EK+5R9HK32OKxi6XC/RzqdpQgStTlIMdDtsmTAC6CTlQxthvy8upXGJVHneXpbbw/6rIutUwnShhULyBAfQvJ+f6FqX62maLZsm4ADEDuVGDIQdzwEwHaeplTCw/GiMdvBhXy6/j+C1cgSIbJZ2ZFX2B+nHrmh7131dZEfAHQjInQqWV2m/3DejCShRx+wetSilJ4ECn9YBvxeUSPx50HyTOq3wLn8aWLtQPQ1pUFuVAyvt+RkZTiWIMtfVEzt82iO5flUNOiKT4x9xd2H44cUgIEPS2pcJM0BJwy5lrkTYDyvZx+xBZF+2L/TkG8PVsY/m6qnT2/Shj6n1aWjghd5XIwwXhoZ43/9u+g8TeEDTXOahmX0uHXbvfQuQRzTFym6VWF7GY0p8MCPZRhl0JSmCPuamx1GdSxaWt4scdK1UP3xSuuUnwXBEDKT0p3nqRUZrc0G8xNA2iBHNDzY5Cs2K5UPfX7M/DrK1qfqcTJ7k3gOSkbjUvi/wGwbdYCMIM+J0/pzb1A1QgVAGrDDagaOuNZOBYPWxHPA9txphDoxLObEtyfj8/GkRSZ6MvoIpx0g4NcP+s48MjFa7nfMUfVQug6CFROI8iFPDAxa+aoyBrUKCe+BmZopo0aYMKKt6BQYNOuHUu9bVaSTEAanLAJV2MfS+8YWypc7VDp4HnFSQRt4cTd22qhGt/fzrfyImdJOIxhc55I9jSGwDjQ2A0YPhw70HC0oKRBkzubxSRdQIHBu9uNFy6FYfCM7zHBFbQrPt/qetR0LG9khNu+0+gQjZwddpPaNXJQgI7mW82sI90bp7a4gdZC8HAGBrbUF5Zq+C70w7gn43kEFimhpbcy5Ey9zg6Gbj/S87WEC6CMhE2ZIZwGjvMq9JjkAfbF2Oj48fkq7X6wilo9SFJ3f9D3plw0F4nk6fn385QJsZ05vjyj8cXEt9tjJ7O8kaSp2s8rLTWgOZSXv+yfQWrX3++F/1/7vdLsADBVoK7JXq/nY2L9Pc2KaNOt9gq48vjRkkYdNgtFsCkG8SlKC7Hfhi2GitzaczRwf6/ADGvhpYa/R16CSn6SR1CTKfifD0/2ip7pXZOhePbt1+muCd2NY0z621BxB37Nm411FoW1kMRkR71Xc8LLIvdrycQlMoDvkNYfc8aGuepmmaHmHNYcVtLQ0lbEfjfJqYlNHjOuZWJSrVlBkP22akvKyH+sdEsCtdRppPH/N82pqroRE2durxmt3maT596FVU2buUeDLwNtNdRfyzgQeTgdGao/fe5vnHj7+izTqGnbC3CgZYDpU1TdP59IMxvetltCXzDY894ZjXZfzhoQ0X5yaXktI0EZDn0+nj48fWPhiHHw8DMze659NpPp3/YeMc+Rc+2tt/Evou81ZIyEz+zXmWgwAjoU4UU3EwCxFRbUFyTpFg/+Xec3Us3Ju3xxZpzMqdgPQofmMOAHWYpfpnRtiKCKkD7BRHH53FSEr0B7jI2zpP45hUxIHgqk+CMDixjNKnOB08MsCkEI77xcZ2UBIZA7TzoGSQRsiukwHL1MZcegeoZBWXJ3Jk70THggcD+93mu7N0ALlpTGwMsMvvghGyy0ygLXEkXdgiDKn3roNHRx15RPGCLfXjCaXrOM2HevfPIzbzglYePALJvgDdlpxk6zgFEWElFYkQwrfb9Xa9ZoyjztNedj1mcF3X5fpddhrkFcH/xsalZ5E1YS2OIGGpA1E5noE0OGgl92EyrEhwtS7L5fJrua12nY5s5P39GJgXBHz5/lpul/Pnz3k+59Npe744xn0xCpp6BbKMa4TwUCqxJ02z28GEvnBfl+v1crvdLMmj73ppF78oWb33769f1/Z9On/M0wkM+781dUHTJN88JB8ka27oEGU40BiW0Jf1ev29LIukoneeUV4C43FW/RSvBPMsu6v3pV3m08c0nxHBN2fyJe5IbBuFkP1ltrEdQFLMAIhGallv63rr69r7uvaeIu2t7N3QSBx7Dts5kAO8IiF1qfe+xu3SYm7T1KY5IgpLvTK9i6wxANNh5+k5gpR0WxdJa5f7Kq9rByBX2A5s8Tznq49VKAYGrZSXB/RQl7uWFUvcGluQ0drUWouIiImxFchq4idUMWIQQifQpevtuqyL1C10dPRk7Afd8ATr998x8sFRaJdvvW3H0SckV5Fzw+pakguKyDOziGjTPE/zmRn3oMcxM1BtirtwuXxfvn/LdQTB7Pr/BP/eWBeZAT0A5mNLtpGaQO0NJs1LAF674BXGstzOZ50//xrtRHF522q8Xr+ul2+AeThYoOedvB5Fb1tdBziTPG/yxwlR6tFNAZfEGQHlw0EHcnxPxb7dvtnaPJ+xVcSNvZb6uty0v//OrsJOr94/FJsOo2PB4KwI5rcLapIU3YPdusdHe31y5u/l9r0ZL7NH4jX0vsp4Bf2OAXCw7vFYdxO6QlijtQCJ3u9zHglkijvAdNx1KMdmAFUwladeRUACIUNKbFR05L6GhWCxmIx7rnK4GHnOwipv4GAp0ioPibqEYc3wyj5P37Ho6zLNHwVNYXaLbNJtfN3u/gXywLsa9xxIAeysn3WwmgDoCOXu1z9skndl8OG6baqbUXm6NU6tRcQaU2vRGvBgaT6Qn8ee/e5Je/fv8QDska3n9v9z/R8x8bBZiGjtNMU8Ndq+LT2/e3S5XNZ1eT48fr7yB5jw//fwPJ/m+RTB/wBIdrK5rle+tQAAAABJRU5ErkJggg==");
		} else {
			cmjQuery_(photo).attr("src", "data:image/jpeg;base64," + contact.photo);
		}
		cmjQuery_(photo).width(64);
		cmjQuery_(photo).height(64);
		cmjQuery_(innertd).css('width', '25%');
		cmjQuery_(innertd).attr("valign", "top");
		cmjQuery_(innertd).append(photo);
		cmjQuery_(innertr).append(innertd);
		cmjQuery_(innertbody).append(innertr);
		cmjQuery_(innertable).append(innertbody);
		cmjQuery_(td).append(innertable);
		cmjQuery_(tr).append(td);
		var innertd = document.createElement("td");
		cmjQuery_(innertd).attr("class", "mb-contact-info-value-padding");
		cmjQuery_(innertd).css('vertical-align', 'top');
		var name = document.createElement("div");
		cmjQuery_(name).attr('class', 'mb-contact-info-name cm-font-bigger mb-single-line mb-preview-search-value');
		cmjQuery_(name).text(contact.name);
		cmjQuery_(innertd).append(name);
		if (contact.fullname.length > 0) {
			var fullname = document.createElement("div");
			var fullname1 = contact.fullname[0].f;
			var nickname = contact.fullname[0].n;
			if (fullname1 != contact.name && fullname1 != nickname) {
				cmjQuery_(innertd).append("<br/>");
			} else {
				cmjQuery_(innertd).append(fullname);
			}
			if (nickname && nickname != contact.name && nickname != fullname1) {
				cmjQuery_(fullname).append("\"" + nickname + "\"");
			} else {
				cmjQuery_(innertd).append("<br/>");
			}
			cmjQuery_(fullname).addClass('mb-preview-search-value');
		} else {
			cmjQuery_(innertd).append("<br/>");
			cmjQuery_(innertd).append("<br/>");
		}
		cmjQuery_(innertd).append(fullname);
		var orgdetails = document.createElement("div");
		var titlespan = document.createElement("span");
		cmjQuery_(titlespan).attr("class", "mb-grey mb-preview-search-value");
		cmjQuery_(orgdetails).append(titlespan);
		if (contact.org.length > 0) {
			var designation = contact.org[0].t;
			var companyname = contact.org[0].n;
			var contactorg;
			contactorg = designation;
			if (designation != undefined && designation.length > 0 && companyname != undefined && companyname.length > 0) {
				contactorg = contactorg + ", ";
			}
			cmjQuery_(orgdetails).append(contactorg + companyname);
			cmjQuery_(orgdetails).attr("class", "mb-preview-search-value");
			cmjQuery_(innertd).append(orgdetails);
		} else {
			cmjQuery_(innertd).append("<br/>");
		}
		var gotolink = document.createElement("div");
		self.AddLinkToContact(contact, gotolink);
		cmjQuery_(innertd).append(gotolink);
		cmjQuery_(innertr).append(innertd);
		cmjQuery_(contacttbody).append(tr);
		cmjQuery_(contacttable).append(contacttbody);
		cmjQuery_(contactinfo).append(contacttable);
		var contacttable = document.createElement("table");
		cmjQuery_(contacttable).attr({
			cellspacing : 0,
			cellpadding : 0
		});
		cmjQuery_(contacttable).attr("id", "mbContactDisc");
		cmjQuery_(contacttable).css('table-layout', 'fixed');
		cmjQuery_(contacttable).attr("class", "cm-font-normal");
		cmjQuery_(contacttable).css('width', '100%');
		var contacttbody = document.createElement("tbody");
		var tr = document.createElement("tr");
		cmjQuery_(tr).attr('class', "mb-contact-result-row");
		var td = document.createElement("td");
		cmjQuery_(td).width("100%");
		cmjQuery_(td).attr("class", "mb-preview-search-value-body");
		if (contact.email.length > 0) {
			var emaildiv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(emaildiv).append(titlespan);
			var param = "emails_";
			self.common_.CreateContactTableView(emaildiv, contact.email, param, false, contact.accountemail);
			cmjQuery_(td).append(emaildiv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.phonelist.length > 0) {
			var phonediv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(phonediv).append(titlespan);
			var param = "phonelist_";
			self.common_.CreateContactTableView(phonediv, contact.phonelist, param, false, contact.accountemail);
			cmjQuery_(td).append(phonediv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.address.length > 0) {
			var addressdiv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(addressdiv).append(titlespan);
			var param = "address_";
			self.common_.CreateContactTableView(addressdiv, contact.address, param, false, contact.accountemail);
			cmjQuery_(td).append(addressdiv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.events.length > 0) {
			var eventdiv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(eventdiv).append(titlespan);
			self.common_.CreateContactTableView(eventdiv, contact.events, false, false, contact.accountemail);
			cmjQuery_(td).append(eventdiv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.websites.length > 0) {
			var websitediv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(websitediv).append(titlespan);
			var param = "websites_";
			self.common_.CreateContactTableView(websitediv, contact.websites, param, false, contact.accountemail);
			cmjQuery_(td).append(websitediv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.relations.length > 0) {
			var relationdiv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(relationdiv).append(titlespan);
			self.common_.CreateContactTableView(relationdiv, contact.relations, false, false, contact.accountemail);
			cmjQuery_(td).append(relationdiv);
			cmjQuery_(td).append("<br/>");
		}
		if (contact.imessanger.length > 0) {
			var messangerdiv = document.createElement("div");
			var titlespan = document.createElement("span");
			cmjQuery_(titlespan).attr("class", "mb-grey");
			cmjQuery_(messangerdiv).append(titlespan);
			var param = "imsg_";
			self.common_.CreateContactTableView(messangerdiv, contact.imessanger, param, false, contact.accountemail);
			cmjQuery_(td).append(messangerdiv);
			cmjQuery_(td).append("<br/><br/>");
		}
		if (contact.notes.length > 0) {
			var notes = document.createElement("div");
			cmjQuery_(notes).attr('class', 'mb-note-caption mb-grey');
			cmjQuery_(notes).html("Notes");
			cmjQuery_(td).append(notes);
			var notes = document.createElement("div");
			cmjQuery_(notes).attr('class', 'mb-contact-notes mb-preview-search-value-notes mb-preview-search-value');
			cmjQuery_(notes).text(contact.notes);
			cmjQuery_(td).append(notes);
		}
		cmjQuery_(tr).append(td);
		cmjQuery_(contacttbody).append(tr);
		cmjQuery_(contacttable).append(contacttbody);
		cmjQuery_(contactinfo).append(contacttable);
		cmjQuery_(contactcontainer).append(contactinfo);
		cmjQuery_(previewnode).append(contactcontainer);
		cmjQuery_(self.previewNode_).empty();
		self.AddContactToolbar(contact, self.previewNode_);
		cmjQuery_(self.previewNode_).append(previewnode);
		self.ShowView(self.c_.M_VIEW);
		self.common_.HandleTracking(self.c_.CONTACT, true);
		self.activePreview_ = self.c_.CONTACT;
		self.getContactTimer_ = window.setTimeout(function () {
				self.ResizeResultPane();
				self.getContactTimer_ = window.setTimeout(function () {
						self.common_.MakeHyperlink();
						self.HighlightMailView();
						self.utils_.ConvertEmailToHyperlink(self.previewNode_, contact.accountemail);
					}, 10);
			}, 10);
	};

	proto.ShowPromoMessage = function (node, isempty) {
		//removed
	};

	proto.ShowMails = function (mails, tbody, viewtype) {
		if (typeof mails == "undefined" || mails.length == 0) {
			return false;
		}
		var len = mails.length;
		cmjQuery_("#mbLoadingMails").remove();
		cmjQuery_("#mbLoadingMailList").remove();
		if (self.searchMailResultCount_ == 0) {
			self.mailRecTsRowId_ = mails[0].tsrowid;
			self.ShowPromoMessage(tbody);
		}
		for (var i = 0; i < len; i++) {
			var m = mails[i];
			var tr = document.createElement("tr");
			cmjQuery_(tr).attr("Class", "mb-mails-result-row");
			var td = document.createElement("td");
			cmjQuery_(td).attr("class", "mb-result-column mb-mail-result");
			self.utils_.AppendDate(td, m.ts, m.type, true);
			self.utils_.AppendAttachmentIcon(td, m.has_attachments, m.attachments);
			self.AppendSearchResultSubject(m, td);
			self.AppendSearchResultName(m, td);
			self.AppendSearchResultBody(m, td);
			self.AppendSearchResultSnippet(m, td);
			self.mailRecIndex_ = m.recindex;
			cmjQuery_(td).width("100%");
			cmjQuery_(tr).append(td);
			var func = self.GetShowMailClickHandler(m);
			cmjQuery_(td).click(func);
			cmjQuery_(tbody).append(tr);
		}
		return true;
	};
	proto.AppendSearchResultBody = function (mail, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-result-mail-body mb-single-line");
		cmjQuery_(d).text(mail.body);
		cmjQuery_(node).append(d);
	};
	proto.AppendSearchResultSnippet = function (mail, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-snippet mb-single-line");
		cmjQuery_(d).html(mail.snippet);
		cmjQuery_(node).append(d);
	};
	proto.AppendSearchResultName = function (mail, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr('class', 'mb-single-line mb-preview-list-from-to-details mb-font-big');
		var fromtodetails = "";
		if (mail.type == 2) {
			if (mail.to.length > 0) {
				if (mail.to[0].n.length > 0) {
					fromtodetails = mail.to[0].n;
				} else {
					fromtodetails = mail.to[0].e;
				}
			}
			if (fromtodetails.length == 0 && mail.cc.length > 0) {
				if (mail.cc[0].n.length > 0) {
					fromtodetails = mail.cc[0].n;
				} else {
					fromtodetails = mail.cc[0].e;
				}
			}
			if (fromtodetails.length == 0 && mail.bcc.length > 0) {
				if (mail.bcc[0].n.length > 0) {
					fromtodetails = mail.bcc[0].n;
				} else {
					fromtodetails = mail.bcc[0].e;
				}
			}
			if (fromtodetails.length == 0) {
				fromtodetails = "(unknown)";
			}
		} else if (mail.type == 0) {
			fromtodetails = "<span class='cm-draft-caption'>Draft<span>";
		} else {
			if (mail.sname.length > 0) {
				fromtodetails = mail.sname;
			} else if (mail.from.length > 0) {
				fromtodetails = mail.from;
			} else {
				fromtodetails = "(unknown)";
			}
		}
		if (mail.type != 0) {
			cmjQuery_(d).text(fromtodetails);
		} else {
			cmjQuery_(d).html(fromtodetails);
		}
		cmjQuery_(node).append(d);
	};
	proto.AppendSearchResultSubject = function (mail, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr('class', 'mb-single-line mb-preview-list-subject mb-font-bold  mb-font-big');
		cmjQuery_(d).text(mail.subject);
		cmjQuery_(node).append(d);
	};
	proto.ShowTweets = function (tweets, tbody, viewtype) {
		if (typeof tweets == "undefined" || tweets.length == 0) {
			return false;
		}
		var len = tweets.length;
		cmjQuery_("#mbLoadingTweets").remove();
		if (self.searchTweetResultCount_ == 0) {
			self.tweetRecTsRowId_ = tweets[0].tsrowid;
			self.ShowPromoMessage(tbody);
		}
		var i;
		var tr;
		var td;
		for (i = 0; i < len; i++) {
			var tweet = tweets[i];
			self.tweetRecIndex_ = tweet.recindex;
			var tr = document.createElement("tr");
			cmjQuery_(tr).attr("Class", "mb-tweet-result-row");
			var td = document.createElement("td");
			cmjQuery_(td).attr("class", "mb-result-column mb-mail-result");
			var innertable = document.createElement("table");
			cmjQuery_(innertable).css('table-layout', 'fixed');
			cmjQuery_(innertable).css('width', '100%');
			cmjQuery_(innertable).attr({
				cellspacing : 0,
				cellpadding : 0
			});
			var innertbody = document.createElement("tbody");
			var innertr = document.createElement("tr");
			var innertd = document.createElement("td");
			cmjQuery_(innertd).css("width", "32px");
			var img = document.createElement("img");
			cmjQuery_(img).attr("align", "bottom");
			cmjQuery_(img).attr("class", "cm-tweet-image");
			cmjQuery_(innertd).css("vertical-align", "top");
			cmjQuery_(innertd).append(img);
			cmjQuery_(innertr).append(innertd);
			if (tweet.fromuserdetails != "undefined") {
				profileurl = self.c_.TWEET_USER_PROFILE_IMAGE + tweet.fromuserdetails.sn + '&size=normal';
				cmjQuery_(img).attr("src", profileurl);
			}
			innertd = document.createElement("td");
			tweetcontainer = document.createElement("div");
			cmjQuery_(tweetcontainer).attr("class", "mb-result-tweet");
			var datediv = document.createElement("div");
			cmjQuery_(datediv).addClass("mb-tweet-createdtime mb-single-line");
			var tweettime = self.dateFormat_.formatDate(tweet.createdtime * 1000, true, true)
				cmjQuery_(datediv).text(tweettime);
			cmjQuery_(tweetcontainer).append(datediv);
			div = document.createElement("div");
			cmjQuery_(div).addClass("mb-single-line mb-font-normal mb-tweet-profile");
			var pos = tweet.owner.indexOf(" ");
			var screenname = tweet.owner.substr(0, pos);
			var username = tweet.owner.substr(pos);
			var atag = document.createElement("a");
			cmjQuery_(atag).addClass("mb-font-normal mb-font-bold");
			var tweetprofileurl;
			tweetprofileurl = self.common_.GetTwitterUserProfileURL(tweet.fromuserdetails.sn);
			cmjQuery_(atag).attr("href", tweetprofileurl);
			cmjQuery_(atag).attr("target", "_blank");
			cmjQuery_(atag).attr("class", "mb-user-profile mb-font-bold mb-remove-click-event");
			cmjQuery_(atag).html(screenname);
			cmjQuery_(div).append(atag);
			span = document.createElement("span");
			cmjQuery_(span).addClass("mb-font-normal mb-tweet-username");
			cmjQuery_(span).html('&nbsp;' + username);
			cmjQuery_(div).append(span);
			cmjQuery_(tweetcontainer).append(div);
			div = document.createElement("div");
			cmjQuery_(div).addClass("mb-font-normal mb-tweet-content");
			cmjQuery_(div).text(tweet.tweet);
			cmjQuery_(tweetcontainer).append(div);
			div = document.createElement("div");
			cmjQuery_(div).addClass("mb-font-normal mb-snippet mb-single-line");
			cmjQuery_(div).html(tweet.snippet);
			cmjQuery_(tweetcontainer).append(div);
			var func = self.GetShowTweetClickHandler(tweet);
			cmjQuery_(td).click(func);
			cmjQuery_(innertd).append(tweetcontainer);
			cmjQuery_(innertr).append(innertd);
			cmjQuery_(innertbody).append(innertr);
			cmjQuery_(innertable).append(innertbody);
			cmjQuery_(td).append(innertable);
			cmjQuery_(tr).append(td);
			cmjQuery_(tbody).append(tr);
			cmjQuery_('.mb-remove-click-event').click(function (e) {
				e.stopPropagation();
			});
		}
		return true;
	};
	proto.ShowEvents = function (events, tbody, viewtype) {
		if (typeof events == "undefined" || events.length == 0) {
			return false;
		}
		var len = events.length;
		cmjQuery_("#mbLoadingEvents").remove();
		cmjQuery_("#mbLoadingEventList").remove();
		if (self.searchEventResultCount_ == 0) {
			self.common_.AddShowPastEventURL(tbody, true);
			self.eventRecTsRowId_ = events[0].tsrowid;
			self.ShowPromoMessage(tbody);
		}
		var i;
		var todaydatets = self.common_.getEventDateTimeStampValue();
		var tr;
		var td;
		for (i = 0; i < len; i++) {
			var event = events[i];
			self.eventRecIndex_ = event.recindex;
			var eventdatets = self.common_.getEventDateTimeStampValue(event.starttime * 1000);
			var shownewdateheader = false;
			var istoday = false;
			if ((eventdatets >= todaydatets) && (eventdatets < (todaydatets + 86400000))) {
				istoday = true;
			}
			var tr = document.createElement("tr");
			cmjQuery_(tr).attr("Class", "mb-event-result-row");
			var td = document.createElement("td");
			cmjQuery_(td).attr("class", "mb-result-column mb-mail-result");
			var div = document.createElement("div");
			cmjQuery_(div).addClass("mb-single-line mb-preview-list-from-to-details mb-font-normal mb-font-bold");
			if (event.what.length == 0) {
				cmjQuery_(div).text("(Untitled event)");
			} else {
				cmjQuery_(div).text(event.what);
			}
			cmjQuery_(td).append(div);
			var eventdate = self.common_.GetFormattedEventDate(event, eventdatets, todaydatets, istoday);
			div = document.createElement("div");
			cmjQuery_(div).addClass("mb-single-line mb-event-date-row");
			cmjQuery_(div).html(eventdate);
			cmjQuery_(td).append(div);
			div = document.createElement("div");
			cmjQuery_(div).addClass("mb-single-line mb-preview-list-from-to-details mb-font-normal mb-result-event-body");
			var details;
			details = event.description;
			if (event.where.length > 0) {
				if (details.length > 0) {
					details += " | ";
				}
				details += event.where;
			}
			if (details.length > 0) {
				cmjQuery_(div).text(details);
				cmjQuery_(td).append(div);
			}
			var div = document.createElement("div");
			cmjQuery_(div).addClass("mb-snippet mb-single-line");
			cmjQuery_(div).html(event.snippet);
			cmjQuery_(td).append(div);
			var func = self.GetShowEventClickHandler(event);
			cmjQuery_(td).click(func);
			cmjQuery_(tr).append(td);
			cmjQuery_(tbody).append(tr);
		}
		return true;
	};
	proto.ShowDocs = function (docs, tbody, viewtype) {
		if (typeof docs == "undefined" || docs.length == 0) {
			return false;
		}
		var len = docs.length;
		cmjQuery_("#mbLoadingDocs").remove();
		cmjQuery_("#mbLoadingDocList").remove();
		if (self.searchDocResultCount_ == 0) {
			self.docRecTsRowId_ = docs[0].tsrowid;
			self.ShowPromoMessage(tbody);
		}
		for (var i = 0; i < len; i++) {
			var d = docs[i];
			var tr = document.createElement("tr");
			cmjQuery_(tr).attr("Class", "mb-docs-result-row");
			var td = document.createElement("td");
			cmjQuery_(td).attr("class", "mb-result-column mb-mail-result");
			self.docRecIndex_ = d.recindex;
			self.utils_.AppendDate(td, d.updatedtime, d.type, false);
			self.AppendDocTitle(d, td);
			self.AppendDocOwner(d, td);
			self.AppendDocContent(d, td);
			self.AppendDocSnippet(d, td);
			cmjQuery_(td).width("100%");
			cmjQuery_(tr).append(td);
			var func = self.GetShowDocClickHandler(d);
			cmjQuery_(td).click(func);
			cmjQuery_(tbody).append(tr);
		}
		return true;
	};
	proto.AppendDocOwner = function (doc, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr('class', 'mb-single-line mb-preview-list-from-to-details mb-font-normal');
		cmjQuery_(d).text(doc.owner);
		cmjQuery_(node).append(d);
	};
	proto.AppendDocTitle = function (doc, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr('class', 'mb-single-line mb-preview-list-subject mb-font-bold mb-font-big');
		cmjQuery_(d).text(doc.title);
		self.common_.AddDocFolderInfo(doc, d);
		cmjQuery_(node).append(d);
	};
	proto.AppendDocContent = function (doc, node) {
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-result-mail-body mb-single-line");
		filetype = doc.type.toLowerCase();
		if (filetype == "document" || filetype == "spreadsheet" || filetype == "presentation") {
			cmjQuery_(d).text(doc.content);
		} else {
			cmjQuery_(d).append("No preview available, ");
			cmjQuery_(d).append("type: " + doc.type + ", ");
		}
		cmjQuery_(node).append(d);
	};
	proto.AppendDocSnippet = function (doc, node) {
		if (doc.snippet.length == 0) {
			return;
		}
		var d = document.createElement("div");
		cmjQuery_(d).attr("class", "mb-snippet mb-single-line");
		cmjQuery_(d).html(doc.snippet);
		cmjQuery_(node).append(d);
	};
	proto.ResetResults = function () {
		cmjQuery_("#mbMailsTable").remove();
		cmjQuery_("#mbDocsTable").remove();
		cmjQuery_("#mbEventsTable").remove();
		cmjQuery_("#mbContactsTable").remove();
		cmjQuery_("#mbTweetsTable").remove();
		self.mailsTbody_ = null;
		self.docsTbody_ = null;
		self.contactsTbody_ = null;
		self.eventsTbody_ = null;
		self.tweetsTbody_ = null;
		self.searchMailResultCount_ = 0;
		self.currentMailSelectionRowId_ = -1;
		self.searchContactResultCount_ = 0;
		self.currentContactSelectionRowId_ = -1;
		self.searchDocResultCount_ = 0;
		self.currentDocSelectionRowId_ = -1;
		self.searchTweetResultCount_ = 0;
		self.currentTweetSelectionRowId_ = -1;
		self.searchEventResultCount_ = 0;
		self.currentEventSelectionRowId_ = -1;
	};
	proto.ShowACResult = function (result) {
		try {
			if (result.hasOwnProperty("isthreadavailable") && result.isthreadavailable == 0) {
				self.common_.ReExecuteAutoComplete();
				return;
			}
			if (result.hasOwnProperty("issqliteerror") && result.issqliteerror == 1) {
				self.common_.ShowUnableToReadDataFileMsg(result.logpath);
				return;
			}
			if (result.accountcount == 0 || (result.unregisteredaccount != undefined && result.unregisteredaccount == 1)) {
				self.common_.ShowNoAccountMsg(result.unregisteredaccount, result, self.pref_.SelectedWidgetTab);
				return;
			}
			switch (parseInt(self.pref_.SelectedWidgetTab)) {
			case self.c_.MAIL:
				cmjQuery_("#mbMailsTable").remove();
				cmjQuery_(".mb-no-account-msg").hide();
				var mailtable = document.createElement("table");
				cmjQuery_(mailtable).attr({
					cellspacing : 0,
					cellpadding : 0
				});
				cmjQuery_(mailtable).attr("id", "mbMailsTable");
				cmjQuery_(mailtable).css('table-layout', 'fixed');
				cmjQuery_(mailtable).attr("class", "mb-font-normal");
				cmjQuery_(mailtable).css('width', '100%');
				var mailtbody = document.createElement("tbody");
				var mailstatus = self.ShowMails(result.mails, mailtbody, self.c_.AC_VIEW);
				cmjQuery_(mailtable).append(mailtbody);
				cmjQuery_(self.autocompleteViewNode_).append(mailtable);
				self.mailsTbody_ = mailtbody;
				break;
			case self.c_.DOC:
				cmjQuery_("#mbDocsTable").remove();
				cmjQuery_(".mb-no-account-msg").hide();
				var doctable = document.createElement("table");
				cmjQuery_(doctable).attr({
					cellspacing : 0,
					cellpadding : 0
				});
				cmjQuery_(doctable).attr("id", "mbDocsTable");
				cmjQuery_(doctable).css('table-layout', 'fixed');
				cmjQuery_(doctable).attr("class", "mb-font-normal");
				cmjQuery_(doctable).css('width', '100%');
				var doctbody = document.createElement("tbody");
				var docstatus = self.ShowDocs(result.docs, doctbody, self.c_.AC_VIEW);
				cmjQuery_(doctable).append(doctbody);
				cmjQuery_(self.autocompleteViewNode_).append(doctable);
				self.docsTbody_ = doctbody;
				break;
			case self.c_.EVENT:
				cmjQuery_("#mbEventsTable").remove();
				cmjQuery_(".mb-no-account-msg").hide();
				var eventtable = document.createElement("table");
				cmjQuery_(eventtable).attr({
					cellspacing : 0,
					cellpadding : 0
				});
				cmjQuery_(eventtable).attr("id", "mbEventsTable");
				cmjQuery_(eventtable).css('table-layout', 'fixed');
				cmjQuery_(eventtable).attr("class", "mb-font-normal");
				cmjQuery_(eventtable).css('width', '100%');
				var eventtbody = document.createElement("tbody");
				var eventstatus = self.ShowEvents(result.events, eventtbody, self.c_.AC_VIEW);
				cmjQuery_(eventtable).append(eventtbody);
				cmjQuery_(self.autocompleteViewNode_).append(eventtable);
				self.eventsTbody_ = eventtbody;
				break;
			case self.c_.CONTACT:
				cmjQuery_("#mbContactsTable").remove();
				cmjQuery_(".mb-no-account-msg").hide();
				var contacttable = document.createElement("table");
				cmjQuery_(contacttable).attr({
					cellspacing : 0,
					cellpadding : 0
				});
				cmjQuery_(contacttable).attr("id", "mbContactsTable");
				cmjQuery_(contacttable).css('table-layout', 'fixed');
				cmjQuery_(contacttable).attr("class", "mb-font-normal");
				cmjQuery_(contacttable).css('width', '100%');
				var contacttbody = document.createElement("tbody");
				var contactstatus = self.ShowContacts(result.contacts, contacttbody);
				cmjQuery_(contacttable).append(contacttbody);
				cmjQuery_(self.autocompleteViewNode_).append(contacttable);
				self.contactsTbody_ = contacttbody;
				break;
			case self.c_.TWEET:
				cmjQuery_("#mbTweetsTable").remove();
				cmjQuery_(".mb-no-account-msg").hide();
				var tweettable = document.createElement("table");
				cmjQuery_(tweettable).attr({
					cellspacing : 0,
					cellpadding : 0
				});
				cmjQuery_(tweettable).attr("id", "mbTweetsTable");
				cmjQuery_(tweettable).css('table-layout', 'fixed');
				cmjQuery_(tweettable).attr("class", "mb-font-normal");
				cmjQuery_(tweettable).css('width', '100%');
				var tweettbody = document.createElement("tbody");
				var tweetstatus = self.ShowTweets(result.tweets, tweettbody, self.c_.AC_VIEW);
				cmjQuery_(tweettable).append(tweettbody);
				cmjQuery_(self.autocompleteViewNode_).append(tweettable);
				self.tweetsTbody_ = tweettbody;
				break;
			}
			if (self.GetCurrentViewType() != self.AC_VIEW) {
				self.ShowView(self.c_.AC_VIEW);
			}
			self.InitializeACViewKeyboardNavigation(self.c_.MAIL);
			self.InitializeACViewKeyboardNavigation(self.c_.DOC);
			self.InitializeACViewKeyboardNavigation(self.c_.CONTACT);
			self.InitializeACViewKeyboardNavigation(self.c_.EVENT);
			self.InitializeACViewKeyboardNavigation(self.c_.TWEET);
			self.SetSelectedRow(-1);
		} catch (e) {
			self.utils_.CMLOG(e);
		}
	};
	proto.AddCategoryHeader = function (tbody, caption) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		cmjQuery_(td).attr("class", "mb-search-category");
		cmjQuery_(td).html(caption);
		cmjQuery_(td).width("100%");
		cmjQuery_(tr).append(td);
		cmjQuery_(tbody).append(tr);
	};
	proto.SetNewUrl = function () {};
	proto.AddCategoryMenu = function (anchorNode) {
		var div = document.createElement("div");
		cmjQuery_(div).attr("class", "mb-category-wrapper");
		var mails = document.createElement("a");
		var docs = document.createElement("a");
		var contacts = document.createElement("a");
		var calendars = document.createElement("a");
		var twitter = document.createElement("a");
		cmjQuery_(mails).text("Mails");
		cmjQuery_(mails).attr("class", "mb-category-menu");
		cmjQuery_(mails).attr("href", "#");
		cmjQuery_(mails).click(function () {
			self.HandleTabSelection(this, self.c_.MAIL);
		});
		cmjQuery_(docs).text("Docs");
		cmjQuery_(docs).attr("class", "mb-link mb-category-menu");
		cmjQuery_(docs).attr("href", "#");
		cmjQuery_(docs).click(function () {
			self.HandleTabSelection(this, self.c_.DOC);
		});
		cmjQuery_(contacts).text("Contacts");
		cmjQuery_(contacts).attr("class", "mb-link mb-category-menu");
		cmjQuery_(contacts).attr("href", "#");
		cmjQuery_(contacts).click(function () {
			self.HandleTabSelection(this, self.c_.CONTACT);
		});
		cmjQuery_(calendars).text("Events");
		cmjQuery_(calendars).attr("class", "mb-link mb-category-menu");
		cmjQuery_(calendars).attr("href", "#");
		cmjQuery_(calendars).click(function () {
			self.HandleTabSelection(this, self.c_.EVENT);
		});
		cmjQuery_(twitter).text("Tweets");
		cmjQuery_(twitter).attr("class", "mb-link mb-category-menu");
		cmjQuery_(twitter).attr("href", "#");
		cmjQuery_(twitter).click(function () {
			self.HandleTabSelection(this, self.c_.TWEET);
		});
		cmjQuery_(div).append(mails);
		cmjQuery_(div).append(calendars);
		cmjQuery_(div).append(docs);
		cmjQuery_(div).append(contacts);
		cmjQuery_(div).append(twitter);
		cmjQuery_(mails).focus(function () {
			self.tabNavigatorInFocus_ = self.c_.MAIL;
		});
		cmjQuery_(mails).blur(function () {
			self.tabNavigatorInFocus_ = null;
		});
		cmjQuery_(calendars).focus(function () {
			self.tabNavigatorInFocus_ = self.c_.EVENT;
		});
		cmjQuery_(calendars).blur(function () {
			self.tabNavigatorInFocus_ = null;
		});
		cmjQuery_(twitter).focus(function () {
			self.tabNavigatorInFocus_ = self.c_.TWEET;
		});
		cmjQuery_(twitter).blur(function () {
			self.tabNavigatorInFocus_ = null;
		});
		cmjQuery_(docs).focus(function () {
			self.tabNavigatorInFocus_ = self.c_.DOC;
		});
		cmjQuery_(docs).blur(function () {
			self.tabNavigatorInFocus_ = null;
		});
		cmjQuery_(contacts).focus(function () {
			self.tabNavigatorInFocus_ = self.c_.CONTACT;
		});
		cmjQuery_(contacts).blur(function () {
			self.tabNavigatorInFocus_ = null;
		});
		cmjQuery_(".mb-category-menu").removeClass("mb-category-menu-selected");
		cmjQuery_(".mb-category-menu").addClass("mb-link");
		switch (parseInt(self.pref_.SelectedWidgetTab)) {
		case self.c_.DOC:
			cmjQuery_(docs).removeClass("mb-link");
			cmjQuery_(docs).addClass("mb-category-menu-selected");
			break;
		case self.c_.EVENT:
			cmjQuery_(contacts).removeClass("mb-link");
			cmjQuery_(calendars).addClass("mb-category-menu-selected");
			break;
		case self.c_.CONTACT:
			cmjQuery_(contacts).removeClass("mb-link");
			cmjQuery_(contacts).addClass("mb-category-menu-selected");
			break;
		case self.c_.TWEET:
			cmjQuery_(twitter).removeClass("mb-link");
			cmjQuery_(twitter).addClass("mb-category-menu-selected");
			break;
		case self.c_.MAIL:
		default:
			cmjQuery_(mails).removeClass("mb-link");
			cmjQuery_(mails).addClass("mb-category-menu-selected");
			break;
		}
		cmjQuery_(anchorNode).append(div);
	};
	proto.SaveTabSelected = function (type) {
		var key = self.c_.DEFAULT_TAB_SELECTED;
		if (self.domain_ == self.c_.MAIL) {
			key = key + "_Gmail";
		} else if (self.domain_ == self.c_.DOC) {
			key = key + "_Gdoc";
		} else if (self.domain_ == self.c_.EVENT) {
			key = key + "_Gcal";
		} else if (self.domain_ == self.c_.TWEET) {
			key = key + "_GTwitter";
		}
		self.plugin_.SetPreferences(key, type.toString(), null);
	};
	proto.HandleTabSelection = function (node, tabtype) {
		self.HandlePopupWidth();
		cmjQuery_(self.previewNode_).hide();
		cmjQuery_(".mb-category-menu").removeClass("mb-category-menu-selected");
		cmjQuery_(".mb-category-menu").addClass("mb-link");
		cmjQuery_(node).removeClass("mb-link");
		cmjQuery_(node).addClass("mb-category-menu-selected");
		var invokesearch = false;
		switch (tabtype) {
		case self.c_.DOC:
			cmjQuery_("#mbMailsTable").hide();
			cmjQuery_("#mbContactsTable").hide();
			cmjQuery_("#mbEventsTable").hide();
			cmjQuery_("#mbTweetsTable").hide();
			if (cmjQuery_("#mbDocsTable").length > 0) {
				cmjQuery_("#mbDocsTable").show();
				self.SetSelectedRow(self.currentDocSelectionRowId_);
			} else {
				invokesearch = true;
			}
			break;
		case self.c_.EVENT:
			cmjQuery_("#mbMailsTable").hide();
			cmjQuery_("#mbDocsTable").hide();
			cmjQuery_("#mbContactsTable").hide();
			cmjQuery_("#mbTweetsTable").hide();
			if (cmjQuery_("#mbEventsTable").length > 0) {
				cmjQuery_("#mbEventsTable").show();
				self.SetSelectedRow(self.currentCalSelectionRowId_);
			} else {
				invokesearch = true;
			}
			break;
		case self.c_.CONTACT:
			cmjQuery_("#mbMailsTable").hide();
			cmjQuery_("#mbDocsTable").hide();
			cmjQuery_("#mbEventsTable").hide();
			cmjQuery_("#mbTweetsTable").hide();
			if (cmjQuery_("#mbContactsTable").length > 0) {
				cmjQuery_("#mbContactsTable").show();
				self.SetSelectedRow(self.currentContactSelectionRowId_);
			} else {
				invokesearch = true;
			}
			break;
		case self.c_.TWEET:
			cmjQuery_("#mbMailsTable").hide();
			cmjQuery_("#mbDocsTable").hide();
			cmjQuery_("#mbEventsTable").hide();
			cmjQuery_("#mbContactsTable").hide();
			if (cmjQuery_("#mbTweetsTable").length > 0) {
				cmjQuery_("#mbTweetsTable").show();
				self.SetSelectedRow(self.currentTweetSelectionRowId_);
			} else {
				invokesearch = true;
			}
			break;
		case self.c_.MAIL:
		default:
			cmjQuery_("#mbDocsTable").hide();
			cmjQuery_("#mbContactsTable").hide();
			cmjQuery_("#mbEventsTable").hide();
			cmjQuery_("#mbTweetsTable").hide();
			if (cmjQuery_("#mbMailsTable").length > 0) {
				cmjQuery_("#mbMailsTable").show();
				self.SetSelectedRow(self.currentMailSelectionRowId_);
			} else {
				invokesearch = true;
			}
			break;
		}
		cmjQuery_(".mb-no-account-msg").hide();
		self.pref_.SelectedWidgetTab = tabtype;
		self.SearchableItems = tabtype;
		if (invokesearch == true) {
			self.common_.ExecuteAutoComplete();
		}
		window.setTimeout(function () {
			self.SaveTabSelected(tabtype);
		}, 1);
		self.utils_.SetPopoutWithSearchUrl(true, cmjQuery_(self.searchBox_).val(), self.GetActiveTab(), self.version_);
		cmjQuery_(node).focus();
	};
};
