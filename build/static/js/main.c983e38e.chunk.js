(this.webpackJsonpforcreative=this.webpackJsonpforcreative||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n,r=c(0),i=c.n(r),a=c(9),s=c.n(a),l=(c(27),c(28),c(11)),o=c(15),j=c(3),d=c(4),b=c(2),u={flats:[],likeFlats:[],error:!1,loading:!1},O="ADD_ALL_FLATS",h="LIKE_FLAT",x="DISLIKE_FLAT",m="ERROR",f="LOADING",p=function(){return{type:f}},v=function(){return function(e){fetch("http://localhost:3001/response").then((function(e){return e.json()})).then((function(t){return[e(p()),e((c=t,{type:O,payload:c}))];var c})).catch((function(t){return e({type:m})}))}},_=(c(35),c(1)),g=function(e){var t,c=e.item,n=Object(j.b)(),i=c,a=i.type,s=i.id,o=i.attributes,b=i.relationships,u=o.title,O=o.rooms,m=o.address,f=o.area,p=o.unit,v=m.city,g=m.street,N=m.house,k=m.room,y=b.type,F=(b.id,b.attributes),I=F.first_name,E=F.last_name,L=F.middle_name,w=Object(r.useState)(!0),A=Object(l.a)(w,2),C=A[0],S=A[1],D=function(){S(!C),n(!0===C?{type:h,payload:s}:function(e){return{type:x,payload:e}}(s))},T=function(e){var t=e.classChecked,c=void 0===t?"":t;return Object(_.jsx)("i",{className:"cardItem__icon".concat(c," fa fa-heart"),onClick:D,children:" "})};return Object(_.jsxs)("div",{className:"cardItem",children:[Object(_.jsxs)("div",{className:"cardItem__description",children:[Object(_.jsx)("div",{className:"cardItem__description__attributes",children:Object(_.jsxs)("ul",{className:"cardItem__items",children:[Object(_.jsx)("li",{className:"item",children:"\u0422\u0438\u043f : ".concat(a," ,")}),Object(_.jsx)("li",{className:"item",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 : ".concat(u,",")}),Object(_.jsx)("li",{className:"item",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442 : ".concat(O," ,")}),Object(_.jsx)("li",{className:"item",children:"\u0410\u0434\u0440\u0435\u0441 : ".concat(v,", ").concat(g," ").concat(N,"; \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 ").concat(k," ,")}),Object(_.jsx)("li",{className:"item",children:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c : ".concat(f," ").concat(p," ;")})]})}),Object(_.jsx)("div",{className:"cardItem__description__relationships",children:Object(_.jsx)("ul",{children:Object(_.jsx)("li",{className:"item",children:"".concat((t=y,Object(d.a)(t).map((function(e,t){return 0===t?e.toUpperCase():e})).join(""))," : ").concat(E," ").concat(I," ").concat(L)})})})]}),Object(_.jsx)("div",{className:"cardItem__icon-wrapper",children:!0!==C?Object(_.jsx)(T,{classChecked:"_checked"}):Object(_.jsx)(T,{})})]})},N=(c(37),function(){return Object(_.jsx)("div",{className:"error",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438!"})}),k=(c(38),function(){return Object(_.jsx)("div",{className:"loadingio-spinner-spin-6ke7djstohu",children:Object(_.jsxs)("div",{className:"ldio-vavmzy6d25f",children:[Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{})})]})})}),y=(c(39),c(17).a.button(n||(n=Object(o.a)(["\ntext-align:center;\nborder:none;\nwidth:100px;\ntext-decoration: none;\ndisplay: block;\ncolor: white;\npadding: 10px 0;\nmargin: 0 10px;\nborder-radius: 10px;\ntext-transform: uppercase;\nletter-spacing: 2px;\nbackground-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);\nbackground-size: 200% auto;\nbox-shadow: 0 0 20px rgba(0, 0, 0, .1);\noutline:none;\ncursor:pointer\n"]))));var F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.flats})),c=Object(j.c)((function(e){return e.likeFlats})),n=Object(j.c)((function(e){return e.error})),i=Object(j.c)((function(e){return e.loading})),a=Object(r.useState)(!1),s=Object(l.a)(a,2),o=s[0],d=s[1],b=function(){d(!o)},u=function(e){return e.map((function(e){return Object(_.jsx)(g,{item:e},e.id)}))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(_.jsxs)(y,{Button:!0,onClick:function(){return e()},children:[" ",t]})};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"btns",children:[Object(_.jsx)(y,{onClick:function(){return[e(p()),e(v())]},children:"Upload"}),t.length>0&&!n?O(b,o?"All":"Liked"):null]}),0!==t.length||i?0===t.length&&i?Object(_.jsx)(k,{}):null:Object(_.jsx)("h1",{className:"cards__title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(_.jsx)("div",{className:"cards",children:n?Object(_.jsx)(N,{}):t.length>0&&!n?o?c.length>0?u(c):Object(_.jsx)("h1",{className:"cards__title_grid",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0435\u0441\u044f \u0432\u0430\u043c \u043f\u043e\u0441\u0442\u044b"}):u(t):null})]})};var I=function(){return Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(F,{})})},E=c(6),L=c(21),w=c(22),A=Object(E.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{error:!1,flats:Object(d.a)(t.payload)});case h:var c=t.payload,n=e.flats.filter((function(e){return e.id===c}));return Object(b.a)(Object(b.a)({},e),{},{likeFlats:[].concat(Object(d.a)(e.likeFlats),Object(d.a)(n))});case x:var r=t.payload,i=e.likeFlats.filter((function(e){return e.id!==r}));return Object(b.a)(Object(b.a)({},e),{},{likeFlats:Object(d.a)(i)});case f:return Object(b.a)(Object(b.a)({},e),{},{error:!1,loading:!e.loading});case m:return Object(b.a)(Object(b.a)({},e),{},{flats:[],loading:!1,error:!0});default:return e}}),Object(L.composeWithDevTools)(Object(E.applyMiddleware)(w.a)));s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(j.a,{store:A,children:Object(_.jsx)(I,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c983e38e.chunk.js.map