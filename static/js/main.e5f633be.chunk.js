(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),n=a(3),c=a.n(n),r=a(4),l=a(5),d=a(7),i=a(6),u=a(1),m=a.n(u),p=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:""},e.selectedItem=function(t){e.setState({selectedGoods:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",{className:"header__title"},"Selected good: - ",s.a.createElement("span",{className:"header__goods"},t||"goods not selected")),s.a.createElement("button",{onClick:function(){return e.setState({selectedGoods:""})},className:m()({header__close:!0,"header__close--active":t}),type:"button"},"X")),p.length,s.a.createElement("ul",{className:"listOfGoods"},p.map((function(a){return s.a.createElement("li",{key:a},s.a.createElement("button",{className:m()({listOfGoods__goods:!0,"listOfGoods__goods--active":t===a}),onClick:function(){e.selectedItem(a)},type:"button"},a))}))))}}]),a}(s.a.Component);c.a.render(s.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e5f633be.chunk.js.map