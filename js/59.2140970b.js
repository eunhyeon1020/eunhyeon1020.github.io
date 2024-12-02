"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[59],{9059:function(s,e,r){r.r(e),r.d(e,{default:function(){return l}});var t=function(){var s=this,e=s._self._c;return e("div",{attrs:{id:"sign"}},[e("div",{staticClass:"sign-content"},[e("div",{staticClass:"sign-logo later"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"sign-logo-img"})])],1),e("div",{staticClass:"sign-box"},[e("form",{attrs:{id:"sign-form"},on:{submit:function(e){return e.preventDefault(),s.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"sign-title"},[e("div",[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"sign-logo"})]),e("h3",[s._v("회원가입")])],1),s._m(0)]),e("div",{staticClass:"sign-input-area"},[e("div",{staticClass:"input-IdPw"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userID,expression:"userID"}],staticClass:"sign-id",attrs:{type:"text",placeholder:"아이디 입력"},domProps:{value:s.userID},on:{input:[function(e){e.target.composing||(s.userID=e.target.value)},s.validateID]}}),s.error.userID?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.userID))]):s._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:s.userPassword,expression:"userPassword"}],staticClass:"sign-pw",attrs:{type:"password",placeholder:"비밀번호 입력"},domProps:{value:s.userPassword},on:{input:[function(e){e.target.composing||(s.userPassword=e.target.value)},s.validatePassword]}}),s.error.userPassword?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.userPassword))]):s._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:s.checkuserPassword,expression:"checkuserPassword"}],staticClass:"sign-aginPw",attrs:{type:"password",placeholder:"비밀번호 재확인"},domProps:{value:s.checkuserPassword},on:{input:function(e){e.target.composing||(s.checkuserPassword=e.target.value)}}}),s.error.checkuserPassword?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.checkuserPassword))]):s._e()]),e("div",{staticClass:"input-name"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userName,expression:"userName"}],staticClass:"sign-top",attrs:{type:"text",placeholder:"이름"},domProps:{value:s.userName},on:{input:[function(e){e.target.composing||(s.userName=e.target.value)},s.validateName]}}),s.error.userName?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.userName))]):s._e()]),e("div",{staticClass:"input-adress"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userAdress,expression:"userAdress"}],staticClass:"sign-adress",attrs:{type:"text",placeholder:"주소 입력"},domProps:{value:s.userAdress},on:{input:function(e){e.target.composing||(s.userAdress=e.target.value)}}}),s.error.userAdress?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.userAdress))]):s._e()]),e("div",{staticClass:"input-email"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.userEmail,expression:"userEmail"}],staticClass:"sign-email",attrs:{type:"text",placeholder:"이메일 EX:) 이메일@naver.com"},domProps:{value:s.userEmail},on:{input:[function(e){e.target.composing||(s.userEmail=e.target.value)},s.validateEmail]}}),s.error.userEmail?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.userEmail))]):s._e()]),e("div",{staticClass:"signPhone-content"},[e("div",{staticClass:"input-phoneNum"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.phoneNum,expression:"phoneNum"}],staticClass:"sign-phoneNum",attrs:{type:"text",name:"phoneNum",placeholder:"전화번호(-제외)"},domProps:{value:s.phoneNum},on:{input:[function(e){e.target.composing||(s.phoneNum=e.target.value)},s.validatePhoneNum]}}),s.error.phoneNum?e("span",{staticClass:"error-message"},[s._v(s._s(s.error.phoneNum))]):s._e()])]),e("button",{staticClass:"signup-btn",attrs:{type:"submit"}},[s._v("회원가입")])])])])])])},a=[function(){var s=this,e=s._self._c;return e("div",[e("span",[s._v("차박박과 함께 여행을 떠날 준비 되셨나요?")])])}],i=(r(4114),{name:"signupForm",data(){return{userID:"",userPassword:"",checkuserPassword:"",userName:"",userAdress:"",userEmail:"",phoneNum:"",loginYorN:"N",error:{userID:"",userPassword:"",checkuserPassword:"",userName:"",userAdress:"",userEmail:"",phoneNum:""}}},methods:{validateID(){const s=/^[a-zA-Z0-9]{5,}$/;this.error.userID=s.test(this.userID)?"":"아이디는 5자 이상이며 영어와 숫자만 입력 가능합니다."},validatePassword(){const s=/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;this.error.userPassword=s.test(this.userPassword)?"":"비밀번호는 최소 8자 이상, 문자와 숫자를 포함해야 합니다."},validateName(){const s=/^[가-힣]+$/;this.error.userName=s.test(this.userName)?"":"이름은 한글만 입력 가능합니다."},validateEmail(){const s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.error.userEmail=s.test(this.userEmail)?"":"올바른 이메일 형식을 입력해 주세요."},validatePhoneNum(){const s=/^\d{11}$/;this.error.phoneNum=s.test(this.phoneNum)?"":"올바른 전화번호 형식을 입력해 주세요."},submitForm(){if(this.validateID(),this.validatePassword(),this.error.checkuserPassword=this.userPassword!==this.checkuserPassword?"비밀번호가 일치하지 않습니다.":"",this.validateName(),this.error.userAdress=this.userAdress?"":"주소를 입력해 주세요.",this.validateEmail(),this.validatePhoneNum(),Object.values(this.error).some((s=>s)))return void alert("입력된 정보를 다시 확인해 주세요.");const s={userID:this.userID,userPassword:this.userPassword,userName:this.userName,userAdress:this.userAdress,userEmail:this.userEmail,phoneNum:this.phoneNum,loginYorN:this.loginYorN};localStorage.setItem("userData",JSON.stringify(s)),alert("회원가입이 성공적으로 완료되었습니다."),this.$router.push("/login")}}}),o=i,u=r(1656),n=(0,u.A)(o,t,a,!1,null,"2df721ff",null),l=n.exports}}]);
//# sourceMappingURL=59.2140970b.js.map