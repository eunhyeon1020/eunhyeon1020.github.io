"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[836],{5836:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"store"}},[e("div",{staticClass:"store-header"},[t._m(0),e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-content"},t._l(t.bannerList,(function(i,s){return e("div",{key:s,staticClass:"banner-img"},[e("span",{staticStyle:{color:"#FFF","font-size":"2rem","white-space":"nowrap"}},[t._v(t._s(i.title))]),e("span",{staticStyle:{color:"#FFF","font-size":"2rem","white-space":"nowrap"}},[t._v(t._s(i.content))])])})),0)]),e("div",{staticClass:"store-navigation"},[e("ul",t._l(t.naviList,(function(i,s){return e("li",{key:s,on:{click:t.showAlert}},[t._v(t._s(i))])})),0)]),e("div",{staticClass:"store-body"},[e("div",{staticClass:"bestItem-contain"},[t._m(1),e("div",{staticClass:"bestItem-content"},[e("div",{staticClass:"bestItem-carousel"},t._l(t.bestItemList,(function(i,s){return e("div",{key:s,staticClass:"bestItems"},[e("a",{on:{click:function(e){return t.goToDetail(i)}}},[e("div",{staticClass:"bestitem-img"},[e("img",{attrs:{src:i.imgUrl,alt:"상품 이미지"}})]),e("div",{staticClass:"bestitem-name"},[t._v(" "+t._s(i.itemNm)+" ")]),e("div",{staticClass:"bestitem-price"},[t._v(" "+t._s(i.price.toLocaleString("ko"))+" 원")])])])})),0),t._m(2)])]),t._v(" "),e("div",{staticClass:"newItem-contain"},[t._m(3),e("div",{staticClass:"newItem-content"},t._l(t.newItemList,(function(i,s){return e("div",{key:s,staticClass:"newItems"},[e("a",{on:{click:function(e){return t.goToDetail(i)}}},[e("div",{staticClass:"newitem-img"},[e("img",{attrs:{src:i.imgUrl,alt:"상품 이미지"}})]),e("div",{staticClass:"newitem-name"},[t._v(" "+t._s(i.itemNm)+" ")]),e("div",{staticClass:"newitem-price"},[t._v(" "+t._s(i.price.toLocaleString("ko"))+" 원")])])])})),0)])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-content"},[e("div",{staticClass:"searchBar"},[e("div",{staticClass:"search-box",attrs:{id:"search-box"}},[e("input",{attrs:{type:"hidden",name:"chkButton",id:"chkButton",value:""}}),e("input",{staticClass:"header_search_input",attrs:{type:"text",name:"",value:"",placeholder:"상품, 브랜드 검색"}}),e("i",{staticClass:"ico-search"})]),e("i",{staticClass:"ico-shopping"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bestItem-title"},[e("span",[t._v("BEST ITEM")]),e("span",[t._v("이번 주 가장 인기있는 상품")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bestItem-box"},[e("div",{staticClass:"box-items"},[e("div",{staticClass:"boxItem-img"},[e("img",{attrs:{src:i(1331)}}),e("img",{attrs:{src:i(4472)}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"newItem-title"},[e("span",[t._v("NEW ITEM")]),e("span",[t._v("이번 주 새로 들어온 상품")])])}],c=(i(4114),{data:()=>({bestItemList:[{itemNm:"블루 스피클 캠핑 세트",imgUrl:i(7420),itemDesc:"블루 스피클 캠핑 세트 ( 컵(1) + 주전자(1))",price:39900},{itemNm:"컴팩트 마이크로파이버 타월",imgUrl:i(5527),itemDesc:"흡수력 좋은 오렌지 마이크로파이버 타월 1종",price:15e3},{itemNm:"어드벤터 EDC 생존 키드",imgUrl:i(9950),itemDesc:"휴대하기 좋은 생존형(비상용) 다용도 키트",price:35e3},{itemNm:"루나블루 LED 캠핑 랜턴",imgUrl:i(7665),itemDesc:"한 번 충전으로 최대 48시간 지속 가능한 휴대LED",price:22e3},{itemNm:"접이식 캠핑백",imgUrl:i(6536),itemDesc:"휴대하기 좋은 라임색 접이식 가방",price:29e3},{itemNm:"휴대용 와이어 톱",imgUrl:i(2291),itemDesc:"",price:12e3},{itemNm:"미니 접이식 칼",imgUrl:i(3434),itemDesc:"",price:18500},{itemNm:"초경량 침낭",imgUrl:i(29),itemDesc:"",price:49e3}],newItemList:[{itemNm:"레드 미니멀 키체인 캡슐",imgUrl:i(140),itemDesc:"",price:19e3},{itemNm:"컴팩트 올인원 멀티툴",imgUrl:i(199),itemDesc:"",price:32e3},{itemNm:"클래식 스테인리스 보온병",imgUrl:i(1886),itemDesc:"",price:45e3}],bannerList:[{title:"모든 캠핑의 시작과 끝,",content:"여기서 만나요",imgUrl:i(7892)},{title:"밤하늘과 맞닿는",content:"당신만의 쉼터",imgUrl:i(4751)},{title:"일상의 틀을 벗어나,",content:"자유를 마주하다",imgUrl:i(1462)}],naviList:["전체","텐트 ㆍ 타프","침낭 ㆍ 매트","라이팅","계절 용품","키친","전자 기기","etc"]}),mounted(){"undefined"!==typeof $?this.$nextTick((()=>{window.$(".bestItem-carousel").slick({infinite:!0,autoplay:!0,pauseOnHover:!0,slidesToShow:4,slidesToScroll:4,prevArrow:'<i class="ico-arrow-back"></i>',nextArrow:'<i class="ico-arrow-front"></i>',responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:580,settings:{slidesToShow:2,slidesToScroll:2}}]}),window.$(".banner-content").slick({infinite:!0,autoplay:!0,pauseOnHover:!0,speed:1e3,dots:!0,customPaging:()=>'<span class="custom-dot"></span>',prevArrow:"",nextArrow:"",slidesToShow:1,slidesToScroll:1})})):console.error("jQuery is not loaded")},methods:{goToDetail(t){const e={itemNm:t.itemNm,imgUrl:t.imgUrl,itemDesc:t.itemDesc,price:t.price};console.log("itemInfo:",e),localStorage.setItem("itemInfo",JSON.stringify(e)),this.$router.push("/storedetail")},showAlert(){this.$emit("showAlert",!0)}}}),r=c,a=i(1656),o=(0,a.A)(r,s,n,!1,null,null,null),m=o.exports},7892:function(t,e,i){t.exports=i.p+"img/banner1.a6594bfa.png"},4751:function(t,e,i){t.exports=i.p+"img/banner2.c97395e8.png"},1462:function(t,e,i){t.exports=i.p+"img/banner3.9a0a8e53.png"},1331:function(t,e,i){t.exports=i.p+"img/bestItem-box1.ac71dd51.png"},4472:function(t,e,i){t.exports=i.p+"img/bestItem-box2.f91d73b7.png"},7420:function(t,e,i){t.exports=i.p+"img/bestItem_1.f0bb4dca.png"},5527:function(t,e,i){t.exports=i.p+"img/bestItem_2.30b838c5.png"},9950:function(t,e,i){t.exports=i.p+"img/bestItem_3.04c64a33.png"},7665:function(t,e,i){t.exports=i.p+"img/bestItem_4.79a3fca3.png"},6536:function(t,e,i){t.exports=i.p+"img/bestItem_5.f3599669.png"},2291:function(t,e,i){t.exports=i.p+"img/bestItem_6.5539d9b4.png"},3434:function(t,e,i){t.exports=i.p+"img/bestItem_7.7516fef9.png"},29:function(t,e,i){t.exports=i.p+"img/bestItem_8.6269fad9.png"},140:function(t,e,i){t.exports=i.p+"img/newItem_1.9512a66c.png"},199:function(t,e,i){t.exports=i.p+"img/newItem_2.68c512f2.png"},1886:function(t,e,i){t.exports=i.p+"img/newItem_3.ee50dac0.png"}}]);
//# sourceMappingURL=836.14e0e856.js.map