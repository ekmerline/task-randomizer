(this["webpackJsonptask-randomizer"]=this["webpackJsonptask-randomizer"]||[]).push([[0],{79:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(79),n(62)),s=n(21),l=n(47),j=n(128),d=n(127),b=n(63),f=n(129),u=n(121),h=n(59),O=n.n(h),m=n(9),p=Object(b.a)(u.a)(f.b),x=function(t){var e=t.task,n=t.removeTask;return Object(m.jsxs)(p,{variant:"contained",color:"primary",m:1,children:[e,"\u2002",Object(m.jsx)(O.a,{onClick:function(){n(e)}})]})},y=n(60),g=n.n(y),k=n(91),v=n(125),S=n(124),C=n(123),w=Object(C.a)((function(t){return{taskbox:Object(l.a)({width:"100%"},t.breakpoints.up("sm"),{width:"700px"}),taskinput:Object(l.a)({width:"100%"},t.breakpoints.up("xs"),{width:"350px"})}}));var T=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],b=i[1],f=Object(a.useState)(""),h=Object(s.a)(f,2),O=h[0],p=h[1],y=Object(a.useState)(0),C=Object(s.a)(y,2),T=C[0],I=C[1],M=Object(a.useState)(!1),z=Object(s.a)(M,2),N=z[0],E=z[1],J=Object(a.useState)(new Audio("/Test_Sound.wav")),F=Object(s.a)(J,1)[0],P=Object(a.useState)(!1),A=Object(s.a)(P,2),D=A[0],W=A[1],B=w();Object(a.useEffect)((function(){var t=null;return N&&T>0?t=setInterval((function(){I((function(t){return t-1}))}),1e3):(N&&F.play(),clearInterval(t),E(!1)),function(){return clearInterval(t)}}),[F,N,T]),Object(a.useEffect)((function(){L()}),[]);var L=function(){var t=localStorage.getItem("randomizerTasks");null!==t&&r(JSON.parse(t))},R=function(){if(l.length>0){var t=[].concat(Object(o.a)(n),[l]);r(t),b(""),localStorage.setItem("randomizerTasks",JSON.stringify(t))}else W(!0)},G=function(t){var e=n.filter((function(e){return e!==t}));r(e),localStorage.setItem("randomizerTasks",JSON.stringify(e))};return Object(m.jsx)(j.a,{className:"App",display:"flex",bgcolor:"primary.main",height:"100vh",justifyContent:"center",children:Object(m.jsxs)(j.a,{bgcolor:"secondary.light",className:B.taskbox,children:[Object(m.jsx)(j.a,{p:1,display:"flex",justifyContent:"center",bgcolor:"primary.dark",color:"white",children:Object(m.jsx)(k.a,{variant:"h5",children:"I Can't Decide"})}),Object(m.jsx)(j.a,{my:4,ml:2,children:Object(m.jsx)(d.a,{className:B.taskinput,error:D,helperText:D?"Empty field!":" ",id:"outlined-basic",label:"Task",variant:"outlined",style:{maxWidth:500},onChange:function(t){b(t.target.value),D&&W(!1)},onKeyDown:function(t){"Enter"===t.key&&R()},value:l,InputProps:{endAdornment:Object(m.jsx)(S.a,{position:"end",children:Object(m.jsx)(v.a,{onClick:R,children:Object(m.jsx)(g.a,{})})})}})}),Object(m.jsx)(j.a,{ml:1,my:4,display:"flex",flexWrap:"wrap",css:{width:"inherit"},children:n.map((function(t,e){return Object(m.jsx)(x,{task:t,removeTask:G},e)}))}),Object(m.jsx)(j.a,{display:"flex",justifyContent:"center",children:Object(m.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){n.length>0?(p(n[Math.floor(Math.random()*Math.floor(n.length))]),E(!0),I(Math.floor(3001*Math.random()+600))):alert("Please enter a task first!")},children:"Get Random Task"})}),Object(m.jsx)(j.a,{borderRadius:16,bgcolor:"primary.light",border:4,borderColor:"white",my:4,mx:6,display:"flex",alignItems:"center",justifyContent:"center",style:{minHeight:70,fontSize:"1.3em",fontWeight:"bolder"},children:O}),Object(m.jsxs)(j.a,{display:"flex",justifyContent:"center",style:{fontSize:"1.5em"},children:[Math.floor(T/60)>9?Math.floor(T/60):"0".concat(Math.floor(T/60)),":",T%60>9?T%60:"0".concat(T%60)]})]})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))},M=n(61),z=n(126),N=Object(M.a)({palette:{primary:{light:"#b085f5",main:"#7e57c2",dark:"#4d2c91",contrastText:"#ffffff"},secondary:{light:"#e6ceff",main:"#b39ddb",dark:"#836fa9",contrastText:"#000000"}}});i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(z.a,{theme:N,children:Object(m.jsx)(T,{})})}),document.getElementById("root")),I()}},[[88,1,2]]]);
//# sourceMappingURL=main.79cd3b33.chunk.js.map