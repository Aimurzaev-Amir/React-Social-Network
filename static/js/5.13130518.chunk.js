(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[5],{225:function(e,t,a){e.exports={wrapper:"ProfileInfo_wrapper__14ntP",profileBanner:"ProfileInfo_profileBanner__1wCVo",profileIntroBg:"ProfileInfo_profileIntroBg__32IoD",profileIntro:"ProfileInfo_profileIntro__33Mx1",profilePhoto:"ProfileInfo_profilePhoto__2xgT4",profileUser:"ProfileInfo_profileUser__13Wc1",bannerText:"ProfileInfo_bannerText__uNswV",userName:"ProfileInfo_userName__2OrHH",userLocation:"ProfileInfo_userLocation__3Yc9D",profileButtons:"ProfileInfo_profileButtons__uAtg2",profileSocial:"ProfileInfo_profileSocial__2ATRi",socialNetwork:"ProfileInfo_socialNetwork__1KmqL",socialFacebook:"ProfileInfo_socialFacebook__1po0A",socialTwitter:"ProfileInfo_socialTwitter__3iW_b",socialInstagram:"ProfileInfo_socialInstagram__8r270",socialVk:"ProfileInfo_socialVk__qmdFG",socialGooglePlus:"ProfileInfo_socialGooglePlus__16Ray"}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(63);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,o=!1,n=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(l){o=!0,n=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw n}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},312:function(e,t,a){e.exports=a.p+"static/media/gps.152423da.svg"},313:function(e,t,a){e.exports=a.p+"static/media/facebook.eeb63b5e.svg"},314:function(e,t,a){e.exports=a.p+"static/media/twitter.1b9f8339.svg"},315:function(e,t,a){e.exports=a.p+"static/media/vk.306c74c0.svg"},316:function(e,t,a){e.exports=a.p+"static/media/google-plus-logo.22c67793.svg"},317:function(e,t,a){e.exports=a.p+"static/media/instagram.0bafb58b.svg"},321:function(e,t,a){"use strict";a.r(t);var r=a(33),o=a(34),n=a(35),s=a(36),c=a(0),l=a.n(c),i=a(17),u=a(225),f=a.n(u),m=function(){return l.a.createElement("div",{className:f.a.profileBanner})},p=function(){return l.a.createElement("div",{className:f.a.profileButtons},l.a.createElement("button",null,"Add friend"),l.a.createElement("button",null,"Private message"))},d=a(312),b=a.n(d),_=a(68),E=a.n(_),g=a(313),v=a.n(g),I=function(e){return l.a.createElement("a",{href:e.facebook},l.a.createElement("div",{className:"".concat(f.a.socialNetwork," ").concat(f.a.socialFacebook)},l.a.createElement("img",{src:v.a,alt:"be able users facebook"})))},h=a(314),N=a.n(h),P=function(e){return l.a.createElement("a",{href:e.twitter},l.a.createElement("div",{className:"".concat(f.a.socialNetwork," ").concat(f.a.socialTwitter)},l.a.createElement("img",{src:N.a,alt:"be able users twitter"})))},w=a(315),k=a.n(w),S=function(e){return l.a.createElement("a",{href:e.vk},l.a.createElement("div",{className:"".concat(f.a.socialNetwork," ").concat(f.a.socialVk)},l.a.createElement("img",{src:k.a,alt:"be able users vk"})))},y=a(316),j=a.n(y),U=function(e){return l.a.createElement("a",{href:e.website},l.a.createElement("div",{className:"".concat(f.a.socialNetwork," ").concat(f.a.socialGooglePlus)},l.a.createElement("img",{src:j.a,alt:"be able users google plus +"})))},x=a(317),O=a.n(x),B=function(e){return l.a.createElement("a",{href:e.instagram},l.a.createElement("div",{className:"".concat(f.a.socialNetwork," ").concat(f.a.socialInstagram)},l.a.createElement("img",{src:O.a,alt:"be able users instagram"})))},T=function(e){return l.a.createElement("div",{className:f.a.profileSocial},l.a.createElement(I,{facebook:e.contacts.facebook}),l.a.createElement(P,{twitter:e.contacts.twitter}),l.a.createElement(B,{instagram:e.contacts.instagram}),l.a.createElement(S,{vk:e.contacts.vk}),l.a.createElement(U,{website:e.contacts.website}))},A=a(233),F=l.a.memo((function(e){var t=Object(c.useState)(!1),a=Object(A.a)(t,2),r=a[0],o=a[1],n=Object(c.useState)(e.status),s=Object(A.a)(n,2),i=s[0],u=s[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return l.a.createElement("div",null,r?l.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateUserStatus(i)},type:"text",value:i}):l.a.createElement("p",{onClick:function(){o(!0)}},e.status?e.status:"User status"))})),V=function(e){return l.a.createElement("div",{className:f.a.profileUser},l.a.createElement("div",{className:f.a.profilePhoto},l.a.createElement("img",{src:e.photos?e.photos:E.a,alt:""})),l.a.createElement("div",{className:f.a.bannerText},l.a.createElement("p",{className:f.a.userName},e.fullName?e.fullName:"userName"),l.a.createElement("div",{className:f.a.userLocation},l.a.createElement("img",{src:b.a,alt:"be able user location"}),l.a.createElement(F,{status:e.status,updateUserStatus:e.updateUserStatus})),l.a.createElement(T,{contacts:e.contacts})))},C=function(e){return l.a.createElement("div",{className:f.a.profileIntroBg},l.a.createElement("div",{className:"".concat(f.a.profileIntro," ").concat(f.a.wrapper)},l.a.createElement(V,{contacts:e.profile.contacts,photos:e.profile.photos.large,fullName:e.profile.fullName,status:e.status,updateUserStatus:e.updateUserStatus}),l.a.createElement(p,null)))},G=a(37),L=function(e){return e.profile?l.a.createElement("div",{className:"ProfileInfo"},l.a.createElement(m,null),l.a.createElement(C,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus})):l.a.createElement(G.a,null)},D=a(21),q=a(62),H=a(18),J=function(e){Object(s.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={userId:e.props.match.params.userId},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.userId||(this.state.userId=this.props.userId),this.props.setProfile(this.state.userId),this.props.getUserStatus(this.state.userId)}},{key:"render",value:function(){return l.a.createElement(L,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})}}]),a}(l.a.Component);t.default=Object(H.d)(Object(i.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.Auth.userId}}),{setProfile:q.d,getUserStatus:q.c,updateUserStatus:q.e}),D.f)(J)}}]);
//# sourceMappingURL=5.13130518.chunk.js.map