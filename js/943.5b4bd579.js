"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[943],{5943:function(t,i,s){s.r(i),s.d(i,{default:function(){return r}});var e=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"mypage"}},[i("div",{staticClass:"mypage-contain"},[i("div",{staticClass:"mypage-header"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"mypage-logo"})]),i("div",[t._v("My Page")])],1),i("li",{staticClass:"mypage-img"},[i("div",{staticClass:"profile-img"}),i("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),i("div",{staticClass:"userId"},[t._v(t._s(t.userID))])]),i("li",[i("div",{staticClass:"mypage-menu"},[i("div",{class:{"font-700":"mypage"===t.pageStatus},on:{click:function(i){return t.listClick("mypage")}}},[t._v("내프로필")]),i("div",{class:{"font-700":"store"===t.pageStatus},on:{click:function(i){return t.listClick("store")}}},[t._v("스토어")]),i("div",{class:{"font-700":"info"===t.pageStatus},on:{click:function(i){return t.listClick("info")}}},[t._v("고객센터")])]),i("div",{staticStyle:{border:"1px solid #eee"}})]),i("li",{staticClass:"logout"},[i("div",{on:{click:t.logout}},[t._v(" 로그아웃 ")])])])]),"main"===t.infoStatus?[i("div",{staticClass:"mypage-content"},["mypage"===t.pageStatus?i("div",{staticClass:"mypage-profile"},[t._m(0),i("ul",[i("li",{staticClass:"profile-img"}),i("li",[i("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),i("div",{staticClass:"userId"},[t._v(t._s(t.userID))])])]),i("ul",[i("li",[i("div",{staticClass:"tel"},[i("div"),i("div",[t._v(t._s(t.phoneNum))])])])]),i("ul",[i("li",[i("div",{staticClass:"id"},[i("div"),i("div",[t._v(t._s(t.userID))])]),i("div",{staticClass:"pw"},[i("div"),i("div",[t._v(t._s(t.userPassword))])])])]),i("ul",[i("li",[i("div",{staticClass:"adress"},[i("div"),i("div",[t._v(t._s(t.userAdress))])])])]),i("ul",[i("li",[i("div",{staticClass:"email"},[i("div"),i("div",[t._v(t._s(t.userEmail))])])])]),t._m(1)]):"store"===t.pageStatus?i("div",{staticClass:"mypage-store"},[t._v(" 나는 스토어 ")]):i("div",{staticClass:"mypage-service"},[t._m(2),i("ul",{staticClass:"infoBtn"},[i("li",{staticClass:"info-login",on:{click:function(i){return t.showInfoSubPage("login")}}},[t._v(" 계정 & 로그인 ")]),i("li",{staticClass:"info-paymoney",on:{click:function(i){return t.showInfoSubPage("paymoney")}}},[t._v(" 결제 ")]),i("li",{staticClass:"info-service",on:{click:function(i){return t.showInfoSubPage("service")}}},[t._v(" 서비스 ")]),i("li",{staticClass:"info-ask",on:{click:function(i){return t.showInfoSubPage("ask")}}},[t._v(" 1 : 1 문의하기 ")])])])])]:"login"===t.infoStatus?[i("div",{staticClass:"mypage-content"},[i("div",{staticClass:"login-page"},[i("div",[t._v("계정 & 로그인")]),i("ul",t._l(t.loginInquiries,(function(s,e){return i("li",{key:e},[i("div",{class:["inquiry-title",{active:s.isOpen}],on:{click:function(i){return t.toggleContent(e)}}},[t._v(" "+t._s(s.title)+" ")]),s.isOpen?i("div",{staticClass:"inquiry-content"},[t._v(" "+t._s(s.content)+" ")]):t._e()])})),0)]),i("button",{staticClass:"backBtn",on:{click:t.backBtn}},[t._v(" ← 되돌아가기")])])]:"paymoney"===t.infoStatus?[i("div",{staticClass:"mypage-content"},[i("div",{staticClass:"paymoney-page"},[i("div",[t._v("결제")]),i("ul",t._l(t.paymoneyInquiries,(function(s,e){return i("li",{key:e},[i("div",{class:["inquiry-title",{active:s.isOpen}],on:{click:function(i){return t.toggleContent(e)}}},[t._v(" "+t._s(s.title)+" ")]),s.isOpen?i("div",{staticClass:"inquiry-content"},[t._v(" "+t._s(s.content)+" ")]):t._e()])})),0)]),i("button",{staticClass:"backBtn",on:{click:t.backBtn}},[t._v(" ← 되돌아가기")])])]:"service"===t.infoStatus?[i("div",{staticClass:"mypage-content"},[i("div",{staticClass:"service-page"},[i("div",[t._v("서비스")]),i("ul",t._l(t.serviceInquiries,(function(s,e){return i("li",{key:e},[i("div",{class:["inquiry-title",{active:s.isOpen}],on:{click:function(i){return t.toggleContent(e)}}},[t._v(" "+t._s(s.title)+" ")]),s.isOpen?i("div",{staticClass:"inquiry-content"},[t._v(" "+t._s(s.content)+" ")]):t._e()])})),0)]),i("button",{staticClass:"backBtn",on:{click:t.backBtn}},[t._v(" ← 되돌아가기")])])]:[i("div",{staticClass:"mypage-content"},[t._m(3),i("button",{staticClass:"backBtn",on:{click:t.backBtn}},[t._v(" ← 되돌아가기")]),i("button",{staticClass:"askBtn",attrs:{type:"submit"}},[t._v("문의하기")])])],i("div",{staticClass:"isMobile"},[t.isMobile?i("div",{staticClass:"mobile-logoutBtn",on:{click:t.logout}},[t._v("로그아웃")]):t._e()])],2)])},n=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"accountCircle"},[i("div"),i("div",[t._v("기본정보")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"change"},[i("div",[t._v("수정하기")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"info-title"},[i("div",[t._v("FAQ _ 자주 묻는 질문")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"ask-page"},[i("div",[t._v("1 : 1 문의하기")]),i("textarea",{staticClass:"ask-content",attrs:{type:"text",placeholder:"문의를 남겨주세요. "}})])}],a=(s(4114),{data:()=>({pageStatus:"mypage",infoStatus:"main",loginInquiries:[{title:"회원 탈퇴/로그아웃은 어떻게 하나요?",content:"탈퇴 및 로그아웃 방법에 대한 내용입니다.",isOpen:!1},{title:"닉네임을 변경하고 싶어요",content:"닉네임 변경 방법에 대한 내용입니다.",isOpen:!1},{title:"회원가입 시 입력한 이메일을 변경하고 싶어요",content:"이메일 변경에 대한 내용입니다.",isOpen:!1},{title:"비밀번호를 변경하고 싶어요",content:"비밀번호 변경에 대한 내용입니다.",isOpen:!1}],paymoneyInquiries:[{title:"결제를 취소하고 싶어요.",content:"결제 취소에 대한 내용입니다.",isOpen:!1},{title:"현금 결제는 어떻게 하나요?",content:"현금 결제에 대한 내용입니다.",isOpen:!1},{title:"입금자명을 바꾸고 싶어요.",content:"입금자명 변경 방법에 대한 내용입니다.",isOpen:!1},{title:"현금영수증 발급은 어떻게 받나요?",content:"현금영수증 발급 방법에 대한 내용입니다.",isOpen:!1}],serviceInquiries:[{title:"회원가입 시 어떠한 혜택이 있나요?",content:"회원가입 혜택에 대한 내용입니다.",isOpen:!1},{title:"비회원도 주문이 가능한가요?",content:"비회원 주문 방법에 대한 내용입니다.",isOpen:!1},{title:"리뷰는 어떻게 작성해야 하나요",content:"리뷰 작성 방법에 대한 내용입니다.",isOpen:!1},{title:"리뷰를 삭제하고 싶어요.",content:"리뷰 삭제 방법에 대한 내용입니다. ",isOpen:!1}],isMobile:window.innerWidth<=1e3,userName:"",userID:"",userPassword:"",phoneNum:"",userAdress:"",userEmail:"",loginYorN:""}),methods:{updateIsMobile(){this.isMobile=window.innerWidth<=1e3},listClick(t){"store"!==t?(this.pageStatus=t,"info"!==t&&(this.infoStatus="main")):this.$emit("showAlert",!0)},logout(){const t=confirm("로그아웃 하시겠습니까?");if(!t)return;this.$emit("logInOut","로그아웃");const i=JSON.parse(localStorage.getItem("userData"));i.loginYorN="N",localStorage.setItem("userData",JSON.stringify(i)),this.$router.push({path:"/"})},toggleContent(t){this.loginInquiries[t].isOpen=!this.loginInquiries[t].isOpen,this.paymoneyInquiries[t].isOpen=!this.paymoneyInquiries[t].isOpen,this.serviceInquiries[t].isOpen=!this.serviceInquiries[t].isOpen},showInfoSubPage(t){this.infoStatus=t},backBtn(){this.infoStatus="main"}},mounted(){window.addEventListener("resize",this.updateIsMobile);const t=JSON.parse(localStorage.getItem("userData"));t&&(this.userName=t.userName,this.userID=t.userID,this.userPassword=t.userPassword,this.phoneNum=t.phoneNum,this.userAdress=t.userAdress,this.userEmail=t.userEmail)},beforeDestroy(){window.removeEventListener("resize",this.updateIsMobile)}}),o=a,l=s(1656),c=(0,l.A)(o,e,n,!1,null,"75415e22",null),r=c.exports}}]);
//# sourceMappingURL=943.5b4bd579.js.map