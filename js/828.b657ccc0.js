"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[828],{4828:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"map"}},[e("div",{staticStyle:{width:"100%",height:"calc(100vh - 65px)",position:"relative",top:"65px"},attrs:{id:"mapContain"}}),t.isSidebarOpen?e("div",{staticClass:"sidebar"},[e("div",{staticClass:"menuBtn"},[e("div",{class:{menu:"news"===t.menuPage},on:{click:function(e){return t.menuContent("news")}}},[t._v("NEWS")]),e("div",{class:{menu:"review"===t.menuPage},on:{click:function(e){return t.menuContent("review")}}},[t._v("REVIEW")])]),"news"===t.menuPage?e("div",{staticClass:"news"},[e("div",{staticClass:"newsbar-header"},[e("div",{staticClass:"search-icon",domProps:{textContent:t._s(t.searchText)}})]),e("div",{ref:"chatArea",staticClass:"newsbar-body"},t._l(t.searchList,(function(a,s){return e("div",{key:s,staticClass:"newsbar-contain"},[e("div",[e("div",{staticClass:"newsbar-title",domProps:{innerHTML:t._s(a.title)}}),e("a",{staticClass:"newsbar-link",attrs:{href:a.url,target:"_blank"}})]),e("div",{staticClass:"newsbar-datetime",domProps:{innerHTML:t._s(t.formatDate(a.datetime))}}),e("div",{staticClass:"newsbar-contents",domProps:{innerHTML:t._s(a.contents)}})])})),0),e("div",{staticClass:"newsbar-footer"},[e("button",{on:{click:function(e){t.isSidebarOpen=!1}}},[t._v("Close")])])]):e("div",{staticClass:"review"},[e("div",{staticClass:"review-header"},[e("div",{staticClass:"review-icon"}),e("div",{staticClass:"review-title",domProps:{textContent:t._s(t.searchText)}})]),e("div",{ref:"chatArea",staticClass:"review-body"},[t._l(t.reviewContent,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"chatDate"},[e("div",{staticClass:"chatDate-content"},[t._v(" "+t._s(a.chatDate)+" ")])]),e("div",{staticClass:"userId"},[t._v(" "+t._s(a.userID)+" ")]),e("div",{staticClass:"chat"},[e("div",{staticClass:"chatting"},[t._v(" "+t._s(a.chatting)+" ")]),e("div",{staticClass:"chatTime"},[t._v(" "+t._s(a.chatTime)+" ")])])])})),e("div",{staticClass:"chatDate"},[0!==t.reviewList.length?e("div",{staticClass:"myChatdate",domProps:{textContent:t._s(t.currentDate)}}):t._e()]),0!==t.reviewList.length?e("div",{staticClass:"myChat-contain"},t._l(t.reviewList,(function(a,s){return e("div",{key:s,staticClass:"myChat"},[s===t.reviewList.length-1||t.reviewList[s+1]?.time!==a.time?e("div",{staticClass:"myChattime"},[t._v(" "+t._s(a.time)+" ")]):t._e(),e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"}},[e("div",{staticClass:"myChatting"},[t._v(" "+t._s(a.chat)+" ")])])])})),0):t._e()],2),e("div",{staticClass:"review-footer"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reviewText,expression:"reviewText"}],ref:"textarea",attrs:{type:"text",placeholder:"발자국을 남겨주세요."},domProps:{value:t.reviewText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.SendReview.apply(null,arguments)},input:function(e){e.target.composing||(t.reviewText=e.target.value)}}}),t._v(" "),e("div",{staticClass:"review-closeBtn"},[e("button",{on:{click:function(e){t.isSidebarOpen=!1}}},[t._v(" Close")])])])])]):t._e()])},i=[],n=(a(4114),{data:()=>({map:null,overlay:null,isSidebarOpen:!1,searchText:"실미유원지 안전",searchList:[],reviewText:"",reviewList:[],menuPage:"news",reviewContent:[{userID:"차차차",chatting:"여름에 갔는데 샤워실도 있고 수영하기도 좋았어요 !!",chatDate:"2023 . 7 . 27",chatTime:"11 : 20"},{userID:"차린이",chatting:"처음 차박하시는 분들께 추천드립니다!",chatTime:"14 : 22"},{userID:"차박마스터꿈나무",chatting:"바다 보고 싶으시면 왼쪽으로 들어가는 것 ㅊㅊ",chatDate:"2023 . 11 . 23",chatTime:"18 : 37"},{userID:"차박박하사탕탕후루",chatting:"근처 00횟집이 레전드 맛있음;;",chatDate:"2024 . 10 . 17",chatTime:"15 : 20"},{userID:"차박해볼까",chatting:"상당히 추움. 외투 챙겨가세요",chatDate:"2024 . 11 . 16",chatTime:"18 : 33"}],currentDate:"",currentTime:""}),async mounted(){this.currentDate=new Date,window.kakao&&window.kakao.maps?this.loadMap():this.loadScript();const t=await this.$axios.get("https://dapi.kakao.com/v2/search/web",{params:{query:this.searchText,sort:"accuracy",page:1,size:10},headers:{Authorization:"KakaoAK 6f28d7e14b2449fb380b7a2c0af2d9b4"}});this.searchList=t.data&&t.data.documents?t.data.documents:[]},methods:{handleEnter(){const t=this.$refs.textarea;if(t){const e=t.selectionEnd;t.setSelectionRange(e,e)}},searchAction(t){this.searchText=t.target.value},formatDate(t){if(!t)return"";const[e]=t.split("T");return e},loadMap(){const t=document.getElementById("mapContain"),e={center:new window.kakao.maps.LatLng(37.40198,126.4021),level:3};this.map=new window.kakao.maps.Map(t,e);var a=new window.kakao.maps.ZoomControl;this.map.addControl(a,window.kakao.maps.ControlPosition.RIGHT),this.loadMarker()},loadScript(){const t=document.createElement("script");t.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cdb7bc47b59d2de4ee68f3e460e373cf&autoload=false",t.onload=()=>window.kakao.maps.load(this.loadMap),document.head.appendChild(t)},loadMarker(){const t="https://paperless-dev.bizmeka.com/resources/public/template/_kddx/images/marker.svg",e=new window.kakao.maps.Size(30,30),a={offset:new window.kakao.maps.Point(16,20)},s=new window.kakao.maps.MarkerImage(t,e,a),i=new window.kakao.maps.LatLng(37.40198,126.4021),n=new window.kakao.maps.Marker({position:i,image:s});n.setMap(this.map),this.overlay=new window.kakao.maps.CustomOverlay({map:this.map}),this.overlay.setMap(null),window.kakao.maps.event.addListener(n,"click",(()=>{this.overlay.setMap(this.map),this.isSidebarOpen=!0}))},menuContent(t){this.menuPage=t,"review"===this.menuPage&&this.$nextTick((()=>{const t=document.querySelector(".review-body"),e=this.$refs.chatArea;e.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))},SendReview(t){if(13===t.keyCode&&!t.shiftKey){if(t.preventDefault(),!this.reviewText.trim())return;const e={chat:this.reviewText,time:this.timeFormat()};this.reviewList.push(e),this.reviewText="",this.$nextTick((()=>{this.currentDate=this.dateFormat(),this.currentTime=this.timeFormat();const t=document.querySelector(".review-body"),e=this.$refs.chatArea;e.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))}},dateFormat(){const t=new Date,e=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0"),i=e+"."+a+"."+s;return i},timeFormat(t=new Date){const e=t.getHours(),a=t.getMinutes().toString().padStart(2,"0");return e+":"+a}}}),r=n,o=a(1656),c=(0,o.A)(r,s,i,!1,null,"0cd16f04",null),d=c.exports}}]);
//# sourceMappingURL=828.b657ccc0.js.map