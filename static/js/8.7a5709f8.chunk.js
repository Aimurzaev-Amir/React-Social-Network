(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[8],{226:function(e,s,a){e.exports={dialogsGrid:"Messages_dialogsGrid__hakV6",dialogs:"Messages_dialogs__1Q5YH",active:"Messages_active__7CxnT",dialogsItem:"Messages_dialogsItem__oPWYg",dialogsItemPhoto:"Messages_dialogsItemPhoto__1Y9_j",UserName:"Messages_UserName__2oKdK",messagesWindow:"Messages_messagesWindow__1L0uO",messages:"Messages_messages__gYzQO",messageInput:"Messages_messageInput__2BdCG",sendButton:"Messages_sendButton__3DgDC",message:"Messages_message__1mPXA",answer:"Messages_answer__3raqT",userMessage:"Messages_userMessage__MAxur",userAnswer:"Messages_userAnswer__2p65G"}},227:function(e,s,a){"use strict";a.d(s,"a",(function(){return g}));var t=a(33),n=a(34),r=a(35),m=a(36),o=a(0),c=a.n(o),i=a(17),l=a(21),u=function(e){return{isAuth:e.Auth.isAuth}},g=function(e){var s=function(s){Object(m.a)(o,s);var a=Object(r.a)(o);function o(){return Object(t.a)(this,o),a.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),o}(c.a.Component);return Object(i.b)(u)(s)}},309:function(e,s,a){e.exports=a.p+"static/media/send.0039ddf4.svg"},323:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),r=a(226),m=a.n(r),o=a(6),c=function(e){return n.a.createElement(o.b,{to:"/messages/UserMessages"+e.id},n.a.createElement("div",{className:m.a.dialogsItem},n.a.createElement("div",{className:m.a.dialogsItemPhoto},n.a.createElement("img",{src:e.userPhoto,alt:""})),n.a.createElement("div",{className:m.a.UserName},e.userName)))},i=function(e){return n.a.createElement("div",{className:m.a.message},n.a.createElement("div",{className:m.a.dialogsItemPhoto},n.a.createElement("img",{src:e.userPhoto,alt:""})),n.a.createElement("div",{className:m.a.userMessage},n.a.createElement("p",null,e.messageText)))},l=function(e){return n.a.createElement("div",{className:m.a.answer},n.a.createElement("div",{className:m.a.userAnswer},n.a.createElement("p",null,e.answerText)),n.a.createElement("div",{className:m.a.dialogsItemPhoto},n.a.createElement("img",{src:e.userPhoto,alt:""})))},u=a(309),g=a.n(u),d=a(322),_=a(320),E=Object(_.a)({form:"Messages"})((function(e){return n.a.createElement("form",{className:m.a.messageInput,onSubmit:e.handleSubmit},n.a.createElement(d.a,{placeholder:"Write a message",name:"newMessage",component:"textarea"}),n.a.createElement("button",{className:m.a.sendButton},n.a.createElement("img",{src:g.a,alt:"submit"})))})),p=function(e){var s=e.MessagesItems.map((function(e){return n.a.createElement(i,{key:e.id,id:e.id,userPhoto:e.userPhoto,messageText:e.messageText})})),a=e.Answers.map((function(e){return n.a.createElement(l,{key:e.id,id:e.id,userPhoto:e.userPhoto,answerText:e.answerText})}));return n.a.createElement("div",{className:m.a.messagesWindow},n.a.createElement("div",{className:m.a.messages},s,a),n.a.createElement(E,{addAnswer:e.addAnswer,onSubmit:function(s){e.addAnswer(s.newMessage)}}))},h=function(e){var s=e.Dialogs.map((function(e){return n.a.createElement(c,{key:e.id,id:e.id,userName:e.userName,userPhoto:e.userPhoto})}));return n.a.createElement("div",{className:"pageContentstl"},n.a.createElement("div",{className:m.a.dialogsGrid},n.a.createElement("div",{className:m.a.dialogs},s),n.a.createElement(p,{Answers:e.Answers,MessagesItems:e.MessagesItems,addAnswer:e.addAnswer})))},w=a(79),M=a(17),f=a(18),v=a(227);s.default=Object(f.d)(Object(M.b)((function(e){return{MessagesItems:e.messagesPage.Messages,Answers:e.messagesPage.Answers,Dialogs:e.messagesPage.Dialogs}}),{addAnswer:w.a}),v.a)(h)}}]);
//# sourceMappingURL=8.7a5709f8.chunk.js.map