(this["webpackJsonpreact-hooks-calendar"]=this["webpackJsonpreact-hooks-calendar"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(11),u=n.n(o),i=n(2),l=(n(20),n(8)),f=n(3);function d(){var e=Object(a.a)(["\n    align-items: center;\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    display: flex;\n    height: 50px;\n    justify-content: center;\n    width: 14.2%;\n"]);return d=function(){return e},e}function b(){var e=Object(a.a)(["\n    background-color: #ff9591;\n    box-sizing: border-box;\n    color: #fff;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 16px;\n    padding: 10px;\n    width: 100%;\n"]);return b=function(){return e},e}function s(){var e=Object(a.a)(["\n    cursor: pointer;\n"]);return s=function(){return e},e}function g(){var e=Object(a.a)(["\n    align-items: center;\n    background-color: #ff5752;\n    box-sizing: border-box;\n    color: #fff;\n    display: flex;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    justify-content: space-between;\n    padding: 0 10px;\n    width: 100%;\n"]);return g=function(){return e},e}function p(){var e=Object(a.a)(["\n    width: 500px;\n"]);return p=function(){return e},e}var h=i.a.div(p()),v=i.a.div(g()),j=i.a.div(s()),O=i.a.div(b()),k=i.a.div(d(),(function(e){var t=e.isToday,n=e.selected;return t&&!n?"#fff":n?"#ff3d6e":"#ff9591"}),(function(e){return e.isToday?"#ff9591":"auto"})),x=function(e){var t=[31,28,31,30,31,30,31,31,30,31,30,31],n=[31,29,31,30,31,30,31,31,30,31,30,31],a=Object(r.useState)(new Date),o=Object(f.a)(a,2),u=o[0],i=o[1],d=Object(r.useState)(u.getDate()),b=Object(f.a)(d,2),s=b[0],g=b[1],p=Object(r.useState)(u.getMonth()),x=Object(f.a)(p,2),w=x[0],m=x[1],y=Object(r.useState)(u.getFullYear()),D=Object(f.a)(y,2),E=D[0],M=D[1],C=Object(r.useState)(N(u)),S=Object(f.a)(C,2),F=S[0],Y=S[1],J=Object(r.useState)(null),T=Object(f.a)(J,2),z=T[0],A=T[1];function N(e){return new Date(e.getFullYear(),e.getMonth(),1).getDay()}function B(e){var t=e.target.id;"prev"===t?i(new Date(E,w-1,s)):"next"===t&&i(new Date(E,w+1,s))}function I(e){var t=e.target.id,n=Number(t)-F+1,a=null;z&&z.getFullYear()&&w===z.getMonth()&&n===z.getDate()?(A(a),P(a)):(a=new Date(E,w,Number(n)),A(a),P(a))}function P(t){e.dateClickedCallback&&e.dateClickedCallback(t)}return Object(r.useEffect)((function(){g(u.getDate()),m(u.getMonth()),M(u.getFullYear()),Y(N(u))}),[u]),c.a.createElement(h,null,c.a.createElement(v,null,c.a.createElement(j,{id:"prev",onClick:B},"Prev Month"),c.a.createElement("div",null,E," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][w]),c.a.createElement(j,{id:"next",onClick:B},"Next Month")),c.a.createElement(O,null,["Su","Mo","Tu","We","Th","Fr","Sa"].map((function(e,t){return c.a.createElement(k,{key:t},e)})),function(){var e=E%4===0&&E%100!==0||E%400===0?n:t,a=new Array(F).fill("blank"),r=[].concat(Object(l.a)(a),Object(l.a)(new Array(e[w]))),o=new Date;return r.map((function(e,t){var n=t-F+1,a=E===o.getFullYear()&&w===o.getMonth()&&n===o.getDate(),r=!!z&&(E===z.getFullYear()&&w===z.getMonth()&&n===z.getDate());return c.a.createElement(k,{key:t,id:t,isToday:a,onClick:I,selected:r},"blank"!==e?n:"")}))}()))};function w(){var e=Object(a.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n"]);return w=function(){return e},e}var m=i.a.div(w());u.a.render(c.a.createElement(m,null,c.a.createElement(x,{dateClickedCallback:function(e){return console.log(e)}})),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7bdc6bd2.chunk.js.map