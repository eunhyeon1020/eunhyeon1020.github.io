"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[818],{4818:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("div",{staticClass:"login-box"},[t("router-link",{attrs:{to:"/"}},[t("div",{staticClass:"login-logo"})]),t("form",{attrs:{id:"login-form"},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"login-top-text"},[t("h3",[e._v("로그인")]),t("div",[t("span",{staticClass:"check-newbie-ment"},[e._v("신규 이용자신가요?")]),t("router-link",{attrs:{to:"sign"}},[t("span",{staticClass:"make-account-ment"},[e._v("계정 만들기")])])],1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userID,expression:"userID"}],attrs:{type:"text",id:"userID",name:"userID",placeholder:"아이디 입력"},domProps:{value:e.userID},on:{input:function(t){t.target.composing||(e.userID=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],attrs:{type:"password",id:"userPassword",name:"userPassword",placeholder:"비밀번호 입력"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),t("input",{staticStyle:{cursor:"pointer"},attrs:{type:"submit",value:"로그인"}})]),t("div",{staticClass:"find-text"},[e.isMobile?t("div",[t("router-link",{attrs:{to:"/sign"}},[e._v(" 계정 만들기 ")])],1):e._e(),t("div",[t("p",{on:{click:e.showAlert}},[e._v("비밀번호 찾기")]),t("p",[e._v("|")]),t("p",{on:{click:e.showAlert}},[e._v("아이디 찾기")])])])])],1)])},o=[],i=(s(4114),{data:()=>({userID:"",userPassword:"",isMobile:window.innerWidth<=750}),methods:{submitForm(){const e=localStorage.getItem("userData");if(!e)return void alert("저장된 계정 정보가 없습니다. 회원가입을 진행해주세요.");const t=JSON.parse(e);console.log("userData:",t),this.userID===t.userID&&this.userPassword===t.userPassword?(t.loginYorN="Y",localStorage.setItem("userData",JSON.stringify(t)),alert("로그인 성공!"),this.$router.push("/")):alert("아이디 또는 비밀번호가 올바르지 않습니다.")},updateIsMobile(){this.isMobile=window.innerWidth<=750},showAlert(){this.$emit("showAlert",!0)}},mounted(){window.addEventListener("resize",this.updateIsMobile)},beforeDestroy(){window.removeEventListener("resize",this.updateIsMobile)}}),a=i,n=s(1656),u=(0,n.A)(a,r,o,!1,null,null,null),l=u.exports}}]);
//# sourceMappingURL=818.a1446714.js.map