webpackJsonp([3],{JMVh:function(t,e,n){t.exports=n.p+"static/img/invite-show.727e9e6.png"},OnCp:function(t,e,n){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var r;r=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),s=n(817),c=n.n(s);function u(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=c()(t);return u("cut"),e};var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof t){var r=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(r),n=c()(r),u("copy"),r.remove()}else n=c()(t),u("copy");return n};function f(t){"@babel/helpers - typeof";return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==f(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:r}):o?"cut"===n?l(o):d(o,{container:r}):void 0};function v(t){"@babel/helpers - typeof";return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(s,o());var e,n,r,i=_(s);function s(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this)).resolveOptions(e),n.listenClick(t),n}return e=s,r=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}],(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=p({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&h(e.prototype,n),r&&h(e,r),s}()},828:function(t){var e=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,n){for(;t&&t.nodeType!==e;){if("function"==typeof t.matches&&t.matches(n))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,o,i){var a=function(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=r()},lvtX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lC5x"),o=n.n(r),i=n("J0Oq"),a=n.n(i),s=n("aYx4"),c=n("OnCp"),u=n.n(c),l=void 0,d=void 0,f=void 0,p=void 0,v=void 0,h={data:function(){return{lang:"zh",lang_list:{},langShow:!1,address:"",short_address:"connect",p_address:"",meanShow:!1,maskShow:!1,lotteryShow:!1,url:""}},created:function(){},mounted:function(){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.lang=sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):"en",t.p_address=t.$route.query.p_address?t.$route.query.p_address:t.getUrlParam("p_address"),t.lang_list=t.en,e.t0=t.lang,e.next="zh"===e.t0?6:"en"===e.t0?8:10;break;case 6:return t.lang_list=t.zh,e.abrupt("break",10);case 8:return t.lang_list=t.en,e.abrupt("break",10);case 10:t.checkNet(),new s.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){},scrollContainer:null}).init();case 13:case"end":return e.stop()}},e,t)}))()},methods:{copyLink:function(){var t=this,e=new u.a("#tag",{text:function(){return t.url}});e.on("success",function(n){t.$toast(t.lang_list.invite_msg4),e.destroy()}),e.on("error",function(n){t.$toast(t.lang_list.invite_msg5),e.destroy()})},todian:function(){window.open("https://t.me/DJT_Group","_self")},toTwitte:function(){window.open("https://twitter.com/DJTsystem","_self")},toTrade:function(){window.open("https://pancakeswap.finance/swap?outputCurrency=0x41D8675E6C64939c3245908EEaf827A995Fc47Ff&inputCurrency=0x55d398326f99059ff775485246999027b3197955&utm_source=tokenpocket","_self")},toWhite:function(){window.open("/static/djt.pdf")},toIndex:function(){this.$router.push({name:"home",params:{}}),this.meanShow=!1},toOrder:function(){this.$router.push({name:"myKey",params:{}}),this.meanShow=!1},toInvite:function(){this.meanShow=!1},switchLang:function(t){switch(t){case"zh":sessionStorage.setItem("lang","zh");break;case"en":sessionStorage.setItem("lang","en")}location.reload()},showLang:function(){this.langShow?this.langShow=!1:this.langShow=!0},showMask:function(){this.maskShow=!0},closeMask:function(){this.maskShow=!1},showMean:function(){this.meanShow=!0},closeMean:function(){this.meanShow=!1},connectWallet:function(){this.address?this.short_address=this.address.substr(0,3)+"..."+this.address.substr(this.address.length-3):this.checkNet()},getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},checkNet:function(){var t=this;return a()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t;try{l=new ethers.providers.Web3Provider(web3.currentProvider),d=l.getSigner(),n.checkLogin()}catch(t){n.$toast(n.lang_list.index_warn)}case 2:case"end":return e.stop()}},e,t)}))()},checkLogin:function(){var t=this;return a()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,setInterval(function(){window.ethereum.enable().then(function(t){(0!=t.length||""==f)&&0!=t.length?t[0]!=f&&(f=t[0],window.location.reload(),console.log("account change, start bat updateData!")):window.location.reload()}).catch(function(t){console.log("User rejected provider access"===t)})},1e3),window.ethereum.enable().then(function(){var t=a()(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.length){t.next=3;break}return console.log("33333"),t.abrupt("return");case 3:if(f=e[0],console.log("defaultAccount: ",f),1!=(p=window.ethereum.networkVersion)){t.next=12;break}return n.type="ETH",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 12:if(42!=p){t.next=18;break}return n.type="ETH",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 18:if(128!=p){t.next=24;break}return n.type="HT",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 24:if(256!=p){t.next=30;break}return n.type="HT",n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 30:if(56!=p){t.next=34;break}n.type="BNB",t.next=40;break;case 34:if(97!=p){t.next=38;break}n.type="BNB",t.next=40;break;case 38:return n.$toast(n.lang_list.index_warn),t.abrupt("return",!1);case 40:v=new ethers.Contract(n.api.conAddress,conAbi,d),""!=f&&(n.address=f,n.url=n.api.baseUrl+"/#/home?p_address="+f,n.getInfo());case 42:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),setTimeout(function(){f&&(n.address=f,n.short_address=n.address.substr(0,3)+"..."+n.address.substr(n.address.length-3))},500);case 4:case"end":return e.stop()}},e,t)}))()},getInfo:function(){var t=this;return a()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,v.myInfo().then(function(t){n.p_address=t[0]}).catch(function(t){console.log(t)});case 3:case"end":return e.stop()}},e,t)}))()}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"djtIndex-top"},[r("div",{staticClass:"djtIndex-top-mean"},[t._m(0),t._v(" "),r("div",{staticClass:"djtIndex-top-mean-right"},[t.address?t._e():[r("span",{staticClass:"djtIndex-top-mean-right-text",on:{click:function(e){return t.showMask()}}},[t._v(t._s(t.short_address))])],t._v(" "),t.address?[r("span",{staticClass:"djtIndex-top-mean-right-text"},[t._v(t._s(t.short_address))])]:t._e(),t._v(" "),r("img",{staticClass:"djtIndex-top-mean-right-img1",attrs:{src:n("2i9y"),alt:""},on:{click:function(e){return t.showLang()}}}),t._v(" "),r("img",{staticClass:"djtIndex-top-mean-right-img2",attrs:{src:n("rjn/"),alt:""},on:{click:function(e){return t.showMean()}}})],2)])]),t._v(" "),r("div",{staticClass:"djtIndex-content"},[r("div",{staticClass:"djtnew-invite-top"},[r("div",{staticClass:"djtnew-invite-tab"},[r("div",{staticStyle:{width:"75%",overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}},[r("span",[t._v(t._s(t.lang_list.invite_link)+"：")]),t._v(" "),r("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.url))])]),t._v(" "),r("div",{staticStyle:{width:"25%","text-align":"right"}},[r("button",{staticClass:"djtnew-invite-button",attrs:{id:"tag"},on:{click:function(e){return t.copyLink()}}},[t._v(t._s(t.lang_list.invite_msg1))])])]),t._v(" "),r("div",{staticStyle:{overflow:"auto"}},[r("span",[t._v(t._s(t.lang_list.invite_msg2)+"：")]),t._v(" "),r("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.p_address))])]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.lang_list.invite_msg3)}}),t._v(" "),t._m(1)])]),t._v(" "),t.meanShow?r("div",{staticClass:"index_pop_content"},[r("div",{staticClass:"index_pop_top"},[t._m(2),t._v(" "),r("div",{on:{click:t.closeMean}},[r("img",{staticClass:"index_pop_top-right",attrs:{src:n("alWW"),alt:""}})])]),t._v(" "),r("div",{staticClass:"index_pop_main_tab"},[r("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toIndex()}}},[r("div",{staticClass:"index_pop_middle_left"},[r("img",{attrs:{src:n("IcIP"),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.lang_list.home_mean1))])])]),t._v(" "),r("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toOrder()}}},[r("div",{staticClass:"index_pop_middle_left"},[r("img",{attrs:{src:n("s+ev"),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.lang_list.home_mean2))])])]),t._v(" "),r("div",{staticClass:"index_pop_middle",on:{click:function(e){return t.toTrade()}}},[r("div",{staticClass:"index_pop_middle_left"},[r("img",{attrs:{src:n("g5Qx"),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.lang_list.home_mean3))])])]),t._v(" "),r("div",{staticClass:"index_pop_middle",on:{click:t.toInvite}},[r("div",{staticClass:"index_pop_middle_left"},[r("img",{attrs:{src:n("IxBA"),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.lang_list.home_mean4))])])]),t._v(" "),r("div",{staticClass:"index_pop_middle",on:{click:t.toWhite}},[r("div",{staticClass:"index_pop_middle_left"},[r("img",{attrs:{src:n("58nC"),alt:""}}),t._v(" "),r("span",[t._v(t._s(t.lang_list.home_mean5))])])])])]):t._e(),t._v(" "),t.maskShow?r("div",{staticClass:"index_mask"},[r("div",{staticClass:"index_mask-content",on:{click:function(e){return t.checkNet()}}},[r("div",{staticClass:"index_mask-title"},[t._v(t._s(t.lang_list.index_mask))]),t._v(" "),r("img",{staticClass:"index_mask-img",attrs:{src:n("L5CL"),alt:""}})]),t._v(" "),r("div",{on:{click:function(e){return t.closeMask()}}},[r("img",{staticClass:"index_mask-close",attrs:{src:n("q6r7"),alt:""}})])]):t._e(),t._v(" "),t.langShow?r("div",{staticClass:"index_lang"},[r("div",{class:"zh"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(e){return t.switchLang("zh")}}},[t._v("中文")]),t._v(" "),r("div",{class:"en"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(e){return t.switchLang("en")}}},[t._v("EN")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"djtIndex-top-mean-left"},[e("img",{staticClass:"djtIndex-top-mean-left-img",attrs:{src:n("dLd/"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"djtnew-invite-img",attrs:{src:n("JMVh"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"index_pop_top-left",attrs:{src:n("dLd/"),alt:""}})])}]},_=n("C7Lr")(h,m,!1,null,null,null);e.default=_.exports}});
//# sourceMappingURL=3.34ff00b951541a660492.js.map