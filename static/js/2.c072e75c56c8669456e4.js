webpackJsonp([2],{"20QS":function(t,s,e){t.exports=e.p+"static/img/tab4.2dcb58e.png"},"90Ft":function(t,s,e){t.exports=e.p+"static/img/tab2.4f57680.png"},PVgf:function(t,s,e){t.exports=e.p+"static/img/tab1.da4eb3f.png"},S3QI:function(t,s,e){t.exports=e.p+"static/img/tab3.b987382.png"},VVKd:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("lC5x"),i=e.n(a),n=e("J0Oq"),o=e.n(n),c=e("aYx4"),r=void 0,l=void 0,d=void 0,v={data:function(){return{lang:"zh",lang_list:{},langShow:!1,address:"",short_address:"connect",parents:"",meanShow:!1,maskShow:!1,lotteryShow:!1}},created:function(){},mounted:function(){var t=this;return o()(i.a.mark(function s(){return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:t.lang=sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):"en",t.lang_list=t.en,s.t0=t.lang,s.next="zh"===s.t0?5:"en"===s.t0?7:9;break;case 5:return t.lang_list=t.zh,s.abrupt("break",9);case 7:return t.lang_list=t.en,s.abrupt("break",9);case 9:t.checkNet(),new c.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){},scrollContainer:null}).init();case 12:case"end":return s.stop()}},s,t)}))()},methods:{todian:function(){window.open("https://t.me/DJT_Group","_self")},toTwitte:function(){window.open("https://twitter.com/DJTsystem","_self")},toTrade:function(){window.open("https://pancakeswap.finance/swap?outputCurrency=0x41D8675E6C64939c3245908EEaf827A995Fc47Ff&inputCurrency=0x55d398326f99059ff775485246999027b3197955&utm_source=tokenpocket","_self")},toWhite:function(){window.open("/static/djt.pdf")},toIndex:function(){this.$router.push({name:"home",params:{}}),this.meanShow=!1},toOrder:function(){this.meanShow=!1},toInvite:function(){this.$router.push({name:"myInvite",params:{}}),this.meanShow=!1},switchLang:function(t){switch(t){case"zh":sessionStorage.setItem("lang","zh");break;case"en":sessionStorage.setItem("lang","en")}location.reload()},showLang:function(){this.langShow?this.langShow=!1:this.langShow=!0},showMask:function(){this.maskShow=!0},closeMask:function(){this.maskShow=!1},showMean:function(){this.meanShow=!0},closeMean:function(){this.meanShow=!1},connectWallet:function(){this.address?this.short_address=this.address.substr(0,3)+"..."+this.address.substr(this.address.length-3):this.checkNet()},getUrlParam:function(t){var s=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(s);return null!=e?unescape(e[2]):null},checkNet:function(){var t=this;return o()(i.a.mark(function s(){var e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=t;try{r=new ethers.providers.Web3Provider(web3.currentProvider),r.getSigner(),e.checkLogin()}catch(t){e.$toast(e.lang_list.index_warn)}case 2:case"end":return s.stop()}},s,t)}))()},checkLogin:function(){var t=this;return o()(i.a.mark(function s(){var e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=t,setInterval(function(){window.ethereum.enable().then(function(t){(0!=t.length||""==l)&&0!=t.length?t[0]!=l&&(l=t[0],window.location.reload(),console.log("account change, start bat updateData!")):window.location.reload()}).catch(function(t){console.log("User rejected provider access"===t)})},1e3),window.ethereum.enable().then(function(){var t=o()(i.a.mark(function t(s){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=s.length){t.next=3;break}return console.log("33333"),t.abrupt("return");case 3:if(l=s[0],console.log("defaultAccount: ",l),1!=(d=window.ethereum.networkVersion)){t.next=12;break}return e.type="ETH",e.$toast(e.lang_list.index_warn),t.abrupt("return",!1);case 12:if(42!=d){t.next=18;break}return e.type="ETH",e.$toast(e.lang_list.index_warn),t.abrupt("return",!1);case 18:if(128!=d){t.next=24;break}return e.type="HT",e.$toast(e.lang_list.index_warn),t.abrupt("return",!1);case 24:if(256!=d){t.next=30;break}return e.type="HT",e.$toast(e.lang_list.index_warn),t.abrupt("return",!1);case 30:if(56!=d){t.next=34;break}e.type="BNB",t.next=36;break;case 34:return e.$toast(e.lang_list.index_warn),t.abrupt("return",!1);case 36:""!=l&&(e.address=l);case 37:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()),setTimeout(function(){l&&(e.address=l,e.short_address=e.address.substr(0,3)+"..."+e.address.substr(e.address.length-3))},500);case 4:case"end":return s.stop()}},s,t)}))()}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("div",{staticClass:"djtIndex-top"},[a("div",{staticClass:"djtIndex-top-mean"},[t._m(0),t._v(" "),a("div",{staticClass:"djtIndex-top-mean-right"},[t.address?t._e():[a("span",{staticClass:"djtIndex-top-mean-right-text",on:{click:function(s){return t.showMask()}}},[t._v(t._s(t.short_address))])],t._v(" "),t.address?[a("span",{staticClass:"djtIndex-top-mean-right-text"},[t._v(t._s(t.short_address))])]:t._e(),t._v(" "),a("img",{staticClass:"djtIndex-top-mean-right-img1",attrs:{src:e("2i9y"),alt:""},on:{click:function(s){return t.showLang()}}}),t._v(" "),a("img",{staticClass:"djtIndex-top-mean-right-img2",attrs:{src:e("rjn/"),alt:""},on:{click:function(s){return t.showMean()}}})],2)])]),t._v(" "),t._m(1),t._v(" "),t.meanShow?a("div",{staticClass:"index_pop_content"},[a("div",{staticClass:"index_pop_top"},[t._m(2),t._v(" "),a("div",{on:{click:t.closeMean}},[a("img",{staticClass:"index_pop_top-right",attrs:{src:e("alWW"),alt:""}})])]),t._v(" "),a("div",{staticClass:"index_pop_main_tab"},[a("div",{staticClass:"index_pop_middle",on:{click:function(s){return t.toIndex()}}},[t._m(3)]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:function(s){return t.toOrder()}}},[t._m(4)]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:function(s){return t.toTrade()}}},[t._m(5)]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:t.toInvite}},[t._m(6)]),t._v(" "),a("div",{staticClass:"index_pop_middle",on:{click:t.toWhite}},[t._m(7)])])]):t._e(),t._v(" "),t.maskShow?a("div",{staticClass:"index_mask"},[a("div",{staticClass:"index_mask-content",on:{click:function(s){return t.checkNet()}}},[a("div",{staticClass:"index_mask-title"},[t._v(t._s(t.lang_list.index_mask))]),t._v(" "),a("img",{staticClass:"index_mask-img",attrs:{src:e("L5CL"),alt:""}})]),t._v(" "),a("div",{on:{click:function(s){return t.closeMask()}}},[a("img",{staticClass:"index_mask-close",attrs:{src:e("q6r7"),alt:""}})])]):t._e(),t._v(" "),t.langShow?a("div",{staticClass:"index_lang"},[a("div",{class:"zh"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(s){return t.switchLang("zh")}}},[t._v("中文")]),t._v(" "),a("div",{class:"en"==t.lang?"index_lang-button-active":"index_lang-button",on:{click:function(s){return t.switchLang("en")}}},[t._v("EN")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"djtIndex-top-mean-left"},[s("img",{staticClass:"djtIndex-top-mean-left-img",attrs:{src:e("dLd/"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"djtIndex-content"},[a("div",{staticClass:"djtnew-top"},[a("div",{staticClass:"mykey-top"},[a("div",{staticClass:"mykey-top-left"},[a("div",{staticClass:"mykey-top-left-title"},[t._v("特朗普队")]),t._v(" "),a("div",{staticClass:"mykey-top-left-desc"},[t._v("全网KEY:1000")])]),t._v(" "),a("div",{staticClass:"mykey-top-right"},[a("img",{attrs:{src:e("PVgf"),alt:""}})])]),t._v(" "),a("div",{staticClass:"mykey-top-bottom"},[a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("我的KEY")]),t._v(" "),a("div",[t._v("1000")])]),t._v(" "),a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("权重占比")]),t._v(" "),a("div",[t._v("10%")])])])]),t._v(" "),a("div",{staticClass:"djtnew-top mykey-marginTop"},[a("div",{staticClass:"mykey-top"},[a("div",{staticClass:"mykey-top-left"},[a("div",{staticClass:"mykey-top-left-title"},[t._v("马斯克队")]),t._v(" "),a("div",{staticClass:"mykey-top-left-desc"},[t._v("全网KEY:1000")])]),t._v(" "),a("div",{staticClass:"mykey-top-right"},[a("img",{attrs:{src:e("90Ft"),alt:""}})])]),t._v(" "),a("div",{staticClass:"mykey-top-bottom"},[a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("我的KEY")]),t._v(" "),a("div",[t._v("1000")])]),t._v(" "),a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("权重占比")]),t._v(" "),a("div",[t._v("10%")])])])]),t._v(" "),a("div",{staticClass:"djtnew-top mykey-marginTop"},[a("div",{staticClass:"mykey-top"},[a("div",{staticClass:"mykey-top-left"},[a("div",{staticClass:"mykey-top-left-title"},[t._v("自由女神队")]),t._v(" "),a("div",{staticClass:"mykey-top-left-desc"},[t._v("全网KEY:1000")])]),t._v(" "),a("div",{staticClass:"mykey-top-right"},[a("img",{attrs:{src:e("S3QI"),alt:""}})])]),t._v(" "),a("div",{staticClass:"mykey-top-bottom"},[a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("我的KEY")]),t._v(" "),a("div",[t._v("1000")])]),t._v(" "),a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("权重占比")]),t._v(" "),a("div",[t._v("10%")])])])]),t._v(" "),a("div",{staticClass:"djtnew-top mykey-marginTop"},[a("div",{staticClass:"mykey-top"},[a("div",{staticClass:"mykey-top-left"},[a("div",{staticClass:"mykey-top-left-title"},[t._v("拜登队")]),t._v(" "),a("div",{staticClass:"mykey-top-left-desc"},[t._v("全网KEY:1000")])]),t._v(" "),a("div",{staticClass:"mykey-top-right"},[a("img",{attrs:{src:e("20QS"),alt:""}})])]),t._v(" "),a("div",{staticClass:"mykey-top-bottom"},[a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("我的KEY")]),t._v(" "),a("div",[t._v("1000")])]),t._v(" "),a("div",[a("div",{staticClass:"mykey-top-bottom-opacity"},[t._v("权重占比")]),t._v(" "),a("div",[t._v("10%")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"index_pop_top-left",attrs:{src:e("dLd/"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_pop_middle_left"},[s("img",{attrs:{src:e("IcIP"),alt:""}}),this._v(" "),s("span",[this._v("首页")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_pop_middle_left"},[s("img",{attrs:{src:e("s+ev"),alt:""}}),this._v(" "),s("span",[this._v("我的KEY")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_pop_middle_left"},[s("img",{attrs:{src:e("g5Qx"),alt:""}}),this._v(" "),s("span",[this._v("交易")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_pop_middle_left"},[s("img",{attrs:{src:e("IxBA"),alt:""}}),this._v(" "),s("span",[this._v("我的邀请")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_pop_middle_left"},[s("img",{attrs:{src:e("58nC"),alt:""}}),this._v(" "),s("span",[this._v("游戏白皮书")])])}]},p=e("C7Lr")(v,_,!1,null,null,null);s.default=p.exports}});
//# sourceMappingURL=2.c072e75c56c8669456e4.js.map