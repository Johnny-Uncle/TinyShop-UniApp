(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00a1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=n},"09d8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".rf-swiper-slide[data-v-ad9c3b2e]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding:0 %?30?%;border-bottom:solid %?2?% #f6f6f6}.rf-swiper-slide .rf-swiper[data-v-ad9c3b2e]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?30?%}.rf-swiper-slide .rf-swiper .rf-swiper-item[data-v-ad9c3b2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.rf-swiper-slide .rf-swiper .rf-swiper-item .right[data-v-ad9c3b2e],.rf-swiper-slide .rf-swiper .rf-swiper-item .text[data-v-ad9c3b2e]{height:%?80?%;line-height:%?80?%}",""]),t.exports=e},"0c2f":function(t,e,i){"use strict";i.r(e);var n=i("35c5"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"1ab5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-floor-index"},[t.bannerShow?i("v-uni-view",{staticClass:"banner",on:{click:function(e){e=t.$handleEvent(e),t.toBanner(t.banner.jump_type,t.banner.jump_link)}}},[i("v-uni-image",{attrs:{src:t.banner.cover,mode:"aspectFill"}})],1):t._e(),i("v-uni-view",{staticClass:"f-header",on:{click:function(e){e=t.$handleEvent(e),t.toList(e)}}},[i("i",{staticClass:"iconfont icontuijian"}),i("v-uni-view",{staticClass:"tit-box"},[i("v-uni-text",{staticClass:"tit"},[t._v(t._s(t.header.title))]),i("v-uni-text",{staticClass:"tit2"},[t._v(t._s(t.header.desc))])],1),i("i",{staticClass:"iconfont iconyou"})],1),i("v-uni-view",{staticClass:"rf-product-list"},t._l(t.list.length>0?t.list:[0,0],(function(e,n){return i("v-uni-view",{key:n,staticClass:"product-item",on:{click:function(i){i=t.$handleEvent(i),t.detail(e.id)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.picture,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"sketch in1line"},[t._v(t._s(e.sketch))])],1),e.name?i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.name))]):t._e(),e.name?i("v-uni-view",{staticClass:"last-line"},[i("v-uni-text",{staticClass:"price in1line"},[t._v(t._s(e.price)),parseFloat(e.market_price)>parseFloat(e.price)?i("v-uni-text",{staticClass:"m-price"},[t._v("¥ "+t._s(e.market_price))]):t._e()],1),i("v-uni-text",{staticClass:"sales in1line"},[i("v-uni-text",{staticClass:"red"},[t._v(t._s(e.sales))]),t._v("付款")],1)],1):t._e()],1)})),1)],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"1ab9":function(t,e,i){"use strict";var n=i("797b"),r=i.n(n);r.a},2284:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("3b8d")),a={props:{headerShow:{type:Boolean,default:!0},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,searchValue:this.placeholder}},methods:{handleSearchValueChange:function(t){this.searchValue=t.detail.value},discard:function(){},link:function(){this.$emit("link")},toSearch:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$emit("search",{searchValue:this.searchValue});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=a},2667:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"rfFloorIndex",props:{list:{type:Array,default:function(){return[]}},banner:{type:Object,default:function(){return{}}},header:{type:Object,default:function(){return{}}},bannerShow:{type:Boolean,default:!0}},data:function(){return{}},methods:{detail:function(t){t&&this.$emit("detail",{id:t})},toBanner:function(t,e){this.$emit("toBanner",{type:t,id:e})},toList:function(){this.$emit("toList")}}};e.default=n},"268f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-swiper__warp[data-v-c3f7ac54]{position:relative;width:100%;box-sizing:border-box;overflow:hidden}.uni-swiper__dots-box[data-v-c3f7ac54]{position:absolute;bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:box-sizing;width:100%}.uni-swiper__dots-item[data-v-c3f7ac54]{-webkit-flex-shrink:0;flex-shrink:0;width:%?16?%;border-radius:50%;margin-left:%?12?%;background:rgba(0,0,0,.3);-webkit-transition:all .2s linear;transition:all .2s linear}.uni-swiper__dots-item[data-v-c3f7ac54]:first-child{margin:0}.uni-swiper__dots-default[data-v-c3f7ac54]{border-radius:50%}.uni-swiper__dots-long[data-v-c3f7ac54]{border-radius:%?100?%}.uni-swiper__dots-bar[data-v-c3f7ac54]{border-radius:%?100?%}.uni-swiper__dots-nav[data-v-c3f7ac54]{bottom:0;height:%?60?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;background:rgba(0,0,0,.2);box-sizing:box-sizing;overflow:hidden;z-index:10}.uni-swiper__dots-nav-item[data-v-c3f7ac54]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#fff;box-sizing:box-sizing;margin:0 %?30?%}.uni-swiper__dots-indexes[data-v-c3f7ac54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?24?%}",""]),t.exports=e},"2b55":function(t,e,i){var n=i("268f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("267cd9ee",n,!0,{sourceMap:!1,shadowMode:!1})},"2b74":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notifyAnnounceView=e.notifyAnnounceIndex=e.wechatConfig=e.configList=e.payCreate=e.advList=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var n="/tiny-shop/v1/common/provinces/index";e.provinceList=n;var r="/tiny-shop/v1/common/collect/create";e.collectCreate=r;var a="/tiny-shop/v1/common/collect/delete";e.collectDel=a;var o="/tiny-shop/v1/common/transmit/create";e.transmitCreate=o;var s="/tiny-shop/v1/common/adv/index";e.advList=s;var c="/tiny-shop/v1/common/config/index";e.configList=c;var d="/tiny-shop/v1/common/pay/create";e.payCreate=d;var l="/tiny-shop/v1/third-party/wechat-js-sdk";e.wechatConfig=l;var u="/tiny-shop/v1/common/notify-announce/index";e.notifyAnnounceIndex=u;var f="/tiny-shop/v1/common/notify-announce/view";e.notifyAnnounceView=f},"2ebe":function(t,e,i){var n=i("5743");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("14b0f37f",n,!0,{sourceMap:!1,shadowMode:!1})},3323:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){e=t.$handleEvent(e),t._onClick(e)}}},[t._t("default")],2)],1):t._e()},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"339b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("rf-search-bar",{attrs:{title:"分类",icon:"iconfenlei1",headerShow:t.headerShow,placeholder:t.hotSearchDefault},on:{link:function(e){e=t.$handleEvent(e),t.toCategory(e)},search:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),i("v-uni-view",{staticClass:"swiper"},[i("v-uni-view",{staticClass:"swiper-box"},[i("rf-swipe-dot",{attrs:{info:t.carouselList.index_top,mode:"nav",current:t.current,field:"title"}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{autoplay:"true"},on:{change:function(e){e=t.$handleEvent(e),t.handleDotChange(e)}}},t._l(t.carouselList.index_top,(function(e,n){return i("v-uni-swiper-item",{key:n,on:{click:function(i){i=t.$handleEvent(i),t.indexTopToDetailPage(e.jump_type,e.jump_link)}}},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:e.cover,mode:"aspectFill"}})],1)],1)})),1)],1)],1)],1),i("v-uni-view",{staticClass:"category-list"},t._l(t.productCateList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"category",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.navToList(e.id)}}},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.cover,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))])],1)})),1),i("rf-swiper-slide",{attrs:{list:t.announceList}},[i("v-uni-view",{staticClass:"swiper-slide-header",attrs:{slot:"header"},slot:"header"},[i("v-uni-image",{staticClass:"swiper-slide-image",attrs:{src:"/static/news.png"}})],1)],1),i("rf-floor-index",{attrs:{list:t.newProductList,header:{title:"新品上市",desc:"New Products Listed"},banner:t.carouselList.index_new&&t.carouselList.index_new[0]},on:{toBanner:function(e){e=t.$handleEvent(e),t.indexTopToDetailPage(e)},toList:function(e){e=t.$handleEvent(e),t.toProductList({is_new:1})},detail:function(e){e=t.$handleEvent(e),t.navToDetailPage(e)}}}),i("rf-floor-index",{attrs:{list:t.recommendProductList,header:{title:"推荐商品",desc:"Recommend Product"},banner:t.carouselList.index_recommend&&t.carouselList.index_recommend[0]},on:{toBanner:function(e){e=t.$handleEvent(e),t.indexTopToDetailPage(e)},toList:function(e){e=t.$handleEvent(e),t.toProductList({is_recommend:1})},detail:function(e){e=t.$handleEvent(e),t.navToDetailPage(e)}}}),i("rf-floor-index",{attrs:{list:t.hotProductList,header:{title:"热门商品",desc:"Hot Product"},banner:t.carouselList.index_hot&&t.carouselList.index_hot[0]},on:{toBanner:function(e){e=t.$handleEvent(e),t.indexTopToDetailPage(e)},toList:function(e){e=t.$handleEvent(e),t.toProductList({is_hot:1})},detail:function(e){e=t.$handleEvent(e),t.navToDetailPage(e)}}}),i("rf-floor-index",{attrs:{list:t.guessYouLikeProductList,header:{title:"猜你喜欢",desc:"Guess You Like It"},bannerShow:!1},on:{toList:function(e){e=t.$handleEvent(e),t.toProductList({guessYouLike:1})},detail:function(e){e=t.$handleEvent(e),t.navToDetailPage(e)}}}),t.config.web_site_icp?i("v-uni-view",{staticClass:"copyright"},[t._v(t._s(t.config.copyright_desc)),i("a",{attrs:{href:"http://www.beian.miit.gov.cn"}},[t._v(t._s(t.config.web_site_icp))])]):t._e(),t.loading?i("rf-loading"):t._e()],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"35c5":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("2ba4")),a={name:"rf-swiper-slide",components:{uniIcons:r.default},data:function(){return{indicatorDots:!1,autoplay:!0,interval:2e3,duration:500}},props:{list:{type:Array,default:function(){return[]}}},methods:{navTo:function(t){uni.navigateTo({url:t})}}};e.default=a},"3c05":function(t,e,i){"use strict";i.r(e);var n=i("00a1"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"3c94":function(t,e,i){"use strict";i.r(e);var n=i("7896"),r=i("3c05");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("514c");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"c3f7ac54",null);e["default"]=s.exports},"3f39":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-search-bar"},[t.headerShow?i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.headerShow?i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.link(e)}}},[i("i",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.title))]),t.inputDisabled?i("v-uni-view",{staticClass:"input-box",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.discard(e)}}},[i("v-uni-input",{staticStyle:{color:"#888"},attrs:{value:t.placeholder,placeholder:t.placeholder?"":"请输入关键字","placeholder-style":"color:#ccc;"},on:{confirm:function(e){e=t.$handleEvent(e),t.toSearch(e)},input:function(e){e=t.$handleEvent(e),t.handleSearchValueChange(e)}}}),i("v-uni-view",{staticClass:"icon search",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.toSearch(e)}}})],1):i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{disabled:"",value:t.placeholder,"placeholder-style":"color:#ccc;"},on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),i("v-uni-view",{staticClass:"icon search"})],1)],1):t._e(),t.headerShow?i("v-uni-view",{staticClass:"place"}):t._e()],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"3f390":function(t,e,i){"use strict";var n=i("f7de"),r=i.n(n);r.a},4516:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0},attrs:{id:t.elId}},[t._t("default")],2)],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"46aa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("6b54"),i("c5f6");var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"514c":function(t,e,i){"use strict";var n=i("2b55"),r=i.n(n);r.a},5743:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-grid-item[data-v-9cbe37b8]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-9cbe37b8]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-9cbe37b8]{position:relative;border-bottom-color:#c8c7cc;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#c8c7cc;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-9cbe37b8]{border-top-color:#c8c7cc;border-top-style:solid;border-top-width:1px;height:100%;box-sizing:border-box}.uni-highlight[data-v-9cbe37b8]:active{background-color:#f1f1f1}",""]),t.exports=e},6279:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("c5f6");var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},"6fb5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".rf-floor-index .banner[data-v-278aa560]{width:92%;margin:%?20?% 4% 0}.rf-floor-index .banner uni-image[data-v-278aa560]{width:100%;height:25vw;border-radius:%?20?%;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.05)}.rf-floor-index .f-header[data-v-278aa560]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?120?%;padding:%?6?% %?20?%;margin:0 0 %?20?%;background:#fff;border-bottom:%?1?% solid rgba(0,0,0,.05)}.rf-floor-index .f-header .iconfont[data-v-278aa560]{color:#fa436a;font-size:%?62?%;margin-right:%?20?%}.rf-floor-index .f-header .tit-box[data-v-278aa560]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.rf-floor-index .f-header .tit[data-v-278aa560]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.rf-floor-index .f-header .tit2[data-v-278aa560]{font-size:%?24?%;color:#909399}.rf-floor-index .f-header .iconyou[data-v-278aa560]{font-size:%?36?%;color:#909399}",""]),t.exports=e},7048:function(t,e,i){"use strict";i.r(e);var n=i("8239"),r=i("0c2f");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("b285");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"ad9c3b2e",null);e["default"]=s.exports},7896:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(n===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):t._e(),"dot"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"round"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===t.current&&"uni-swiper__dots-long"],style:{width:(n===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor}},[i("v-uni-view",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length)+"\n\t\t\t\t"+t._s(t.info[t.current]&&t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:n===t.current?t.dots.selectedColor:t.dots.color,"background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}},[t._v(t._s(n+1))])})),1):t._e()],2)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},"797b":function(t,e,i){var n=i("6fb5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("36ab1e0b",n,!0,{sourceMap:!1,shadowMode:!1})},"7c08":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".index[data-v-b09b2b0e]{background-color:#fff}.index .swiper[data-v-b09b2b0e]{width:100%;margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.index .swiper .swiper-box[data-v-b09b2b0e]{width:92%;height:40vw;overflow:hidden;border-radius:%?15?%;box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);position:relative;z-index:1}.index .swiper .swiper-box uni-swiper[data-v-b09b2b0e]{width:100%;height:40vw}.index .swiper .swiper-box uni-swiper uni-swiper-item uni-image[data-v-b09b2b0e]{width:100%;height:40vw}.index .swiper-slide-header[data-v-b09b2b0e]{width:%?120?%;height:%?80?%;line-height:%?88?%}.index .swiper-slide-header .swiper-slide-image[data-v-b09b2b0e]{width:100%;height:%?30?%}.index .swiper-item-text[data-v-b09b2b0e]{position:absolute;bottom:%?16?%;left:%?30?%;height:%?48?%;line-height:%?48?%;background:rgba(0,0,0,.2);width:90%;color:#fff;border-bottom-left-radius:%?12?%;padding-left:%?20?%}.index .category-list[data-v-b09b2b0e]{width:100%;padding:0 0 %?30?% 0;border-bottom:solid %?2?% #f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .category-list .category[data-v-b09b2b0e]{width:20%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.index .category-list .category .img[data-v-b09b2b0e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.index .category-list .category .img uni-image[data-v-b09b2b0e]{width:9vw;height:9vw}.index .category-list .category .text[data-v-b09b2b0e]{margin-top:%?16?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#3c3c3c}.index .copyright[data-v-b09b2b0e]{margin:%?10?% 0;width:100%;text-align:center;color:#666}.index .copyright a[data-v-b09b2b0e]{display:block;color:#666;text-decoration:none}.index .uni-list[data-v-b09b2b0e]{padding:%?20?% 0}.index .uni-list .uni-list-cell .uni-input[data-v-b09b2b0e]{padding:0}",""]),t.exports=e},8069:function(t,e,i){"use strict";i.r(e);var n=i("c973"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},8239:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list.length>0?i("v-uni-view",{staticClass:"rf-swiper-slide"},[t._t("header"),i("v-uni-swiper",{staticClass:"rf-swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,vertical:"true"}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"rf-swiper-item",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.navTo("/pages/notice/notice")}}},[i("v-uni-view",{staticClass:"text in1line"},[i("v-uni-text",{staticClass:"newsTitle"},[t._v(t._s(e.title||e.member_nickname+" 拼团成功"))])],1),i("uni-icons",{staticClass:"right",attrs:{size:"18",type:"forward"}})],1)})),1)],2):t._e()},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},8492:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.merchantIndex=e.merchantView=void 0;var n="/merchants/v1/merchant/view";e.merchantView=n;var r="/merchants/v1/merchant/index";e.merchantIndex=r},8999:function(t,e,i){"use strict";i.r(e);var n=i("2284"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"9f3a":function(t,e,i){"use strict";i.r(e);var n=i("3f39"),r=i("8999");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("f142");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"09a88da5",null);e["default"]=s.exports},a0f7:function(t,e,i){"use strict";i.r(e);var n=i("46aa"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},a6e3:function(t,e,i){var n=i("09d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1b99e9ff",n,!0,{sourceMap:!1,shadowMode:!1})},a9e7:function(t,e,i){"use strict";i.r(e);var n=i("1ab5"),r=i("beff");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("1ab9");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"278aa560",null);e["default"]=s.exports},b285:function(t,e,i){"use strict";var n=i("a6e3"),r=i.n(n);r.a},bbc1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-grid-wrap[data-v-9de5e218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-9de5e218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-9de5e218]{border-left-color:#c8c7cc;border-left-style:solid;border-left-width:1px}",""]),t.exports=e},beff:function(t,e,i){"use strict";i.r(e);var n=i("2667"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},c4af:function(t,e,i){"use strict";var n=i("c510"),r=i.n(n);r.a},c4c8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cartItemCount=e.cartItemUpdateSku=e.orderProductExpressDetails=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var n="/tiny-shop/v1/index/index";e.indexList=n;var r="/tiny-shop/v1/product/cate/index";e.productCate=r;var a="/tiny-shop/v1/product/cate/list";e.productCateList=a;var o="/tiny-shop/v1/product/product/index";e.productList=o;var s="/tiny-shop/v1/product/product/view";e.productDetail=s;var c="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=c;var d="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=d;var l="/tiny-shop/v1/member/cart-item/index";e.cartItemList=l;var u="/tiny-shop/v1/member/cart-item/count";e.cartItemCount=u;var f="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=f;var h="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=h;var p="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=p;var b="/tiny-shop/v1/member/cart-item/update-sku";e.cartItemUpdateSku=b;var v="/tiny-shop/v1/order/order/create";e.orderCreate=v;var w="/tiny-shop/v1/order/order/preview";e.orderPreview=w;var g="/tiny-shop/v1/member/order/close";e.orderClose=g;var x="/tiny-shop/v1/common/pay/create";e.orderPay=x;var m="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=m;var y="/tiny-shop/v1/product/evaluate/index";e.evaluateList=y;var k="/tiny-shop/v1/member/order-product-express/details";e.orderProductExpressDetails=k},c510:function(t,e,i){var n=i("7c08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5b57f926",n,!0,{sourceMap:!1,shadowMode:!1})},c973:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("386d"),i("96cf");var r=n(i("3b8d"));i("6b54");var a=i("c4c8"),o=i("8492"),s=n(i("cff3")),c=n(i("e395")),d=n(i("2ba4")),l=n(i("3c94")),u=n(i("a9e7")),f=n(i("9f3a")),h=n(i("7048")),p=i("2b74"),b={components:{uniGrid:s.default,uniIcons:d.default,uniGridItem:c.default,rfFloorIndex:u.default,rfSwipeDot:l.default,rfSearchBar:f.default,rfSwiperSlide:h.default},data:function(){return{current:0,headerShow:!0,carouselList:{},hotProductList:[],recommendProductList:[],guessYouLikeProductList:[],newProductList:[],productCateList:[],brandList:[],config:{},index:0,merchantList:[],announceList:[],loading:!0,hotSearchDefault:"请输入关键字"}},onShow:function(){uni.getStorageSync("accessToken")&&uni.getStorageSync("cartNum")&&(0==uni.getStorageSync("cartNum")?uni.removeTabBarBadge({index:2}):uni.setTabBarBadge({index:2,text:uni.getStorageSync("cartNum").toString()})),this.initData()},onShareAppMessage:function(){return{title:"欢迎来到RageFrame商城",path:"/pages/index/index"}},onPullDownRefresh:function(){this.getIndexList("refresh")},methods:{bindPickerChange:function(t){uni.setStorageSync("merchantId",this.merchantList[t.target.value].id),uni.setStorageSync("merchantIndex",t.target.value),this.index=t.target.value,uni.removeStorage({key:"userInfo"}),uni.removeStorage({key:"accessToken"}),this.getIndexList()},handleDotChange:function(t){this.current=t.detail.current},initData:function(){uni.removeStorageSync("cateTop"),this.getIndexList()},navToList:function(t){uni.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},indexTopToDetailPage:function(t,e){var i,n,r;switch(e?(r=e,n=t):(n=t.type,r=t.id),n){case"product_view":i="/pages/product/product?id=".concat(r);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":i="/pages/coupon/detail?id=".concat(r);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":i="/pages/product/list?cate_id=".concat(r);break;default:break}i&&uni.navigateTo({url:i})},toProductList:function(t){uni.navigateTo({url:"/pages/product/list?params=".concat(JSON.stringify(t))})},getIndexList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(a.indexList),{}).then(function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.loading=!1,i.getMerchantIndex(),i.getNotifyAnnounceIndex(),"refresh"===e&&uni.stopPullDownRefresh(),i.productCateList=n.data.cate,i.carouselList=n.data.adv,i.search=n.data.search,uni.setStorageSync("search",i.search),i.hotSearchDefault="请输入关键字"+(n.data.search.hot_search_default?"如:"+n.data.search.hot_search_default:""),uni.setStorage({key:"hotSearchDefault",data:n.data.search.hot_search_default}),i.hotProductList=n.data.product_hot,i.recommendProductList=n.data.product_recommend,i.guessYouLikeProductList=n.data.guess_you_like,i.newProductList=n.data.product_new,i.config=n.data.config;case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){i.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getMerchantIndex:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(o.merchantIndex),{}).then((function(t){e.merchantList=t.data,e.index=uni.getStorageSync("merchantIndex")||t.data.length-1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getNotifyAnnounceIndex:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(p.notifyAnnounceIndex),{}).then((function(t){e.announceList=t.data}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),navToDetailPage:function(t){var e=t.id;e&&uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},toSearch:function(){uni.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toCategory:function(){uni.reLaunch({url:"/pages/category/category"})}}};e.default=b},cff3:function(t,e,i){"use strict";i.r(e);var n=i("4516"),r=i("a0f7");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("3f390");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"9de5e218",null);e["default"]=s.exports},d259:function(t,e,i){"use strict";i.r(e);var n=i("6279"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e395:function(t,e,i){"use strict";i.r(e);var n=i("3323"),r=i("d259");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("e47d");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"9cbe37b8",null);e["default"]=s.exports},e47d:function(t,e,i){"use strict";var n=i("2ebe"),r=i.n(n);r.a},eee6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".rf-search-bar[data-v-09a88da5]{background-color:#fff}.rf-search-bar .status[data-v-09a88da5]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.rf-search-bar .header[data-v-09a88da5]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.rf-search-bar .header .addr[data-v-09a88da5]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.rf-search-bar .header .addr .iconfont[data-v-09a88da5]{height:%?60?%;margin-right:%?6?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?35?%;color:#fa436a}.rf-search-bar .header .input-box[data-v-09a88da5]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?20?% 0 %?10?%}.rf-search-bar .header .input-box .icon[data-v-09a88da5]{z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.rf-search-bar .header .input-box uni-input[data-v-09a88da5]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .place[data-v-09a88da5]{background-color:#fff;height:%?100?%}",""]),t.exports=e},f142:function(t,e,i){"use strict";var n=i("fc67"),r=i.n(n);r.a},f75a:function(t,e,i){"use strict";i.r(e);var n=i("339b"),r=i("8069");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("c4af");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"b09b2b0e",null);e["default"]=s.exports},f7de:function(t,e,i){var n=i("bbc1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("d87c593a",n,!0,{sourceMap:!1,shadowMode:!1})},fc67:function(t,e,i){var n=i("eee6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("6dc5a4a4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);