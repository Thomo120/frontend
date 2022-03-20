(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{1221:function(e,t,a){"use strict";var n=a(14),r=a(26),o=a(4),i=a(319),c=a(975),s=a(320),l=a(321),d=a(1848),j=a(957),u=a(976);function b(e){return Object(j.a)("MuiCard",e)}Object(u.a)("MuiCard",["root"]);var h=a(16),v=["className","raised"],m=Object(s.a)(d.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),p=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCard"}),o=a.className,s=a.raised,d=void 0!==s&&s,j=Object(r.a)(a,v),u=Object(n.a)({},a,{raised:d}),p=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(u);return Object(h.jsx)(m,Object(n.a)({className:Object(i.default)(p.root,o),elevation:d?8:void 0,ref:t,ownerState:u},j))}));t.a=p},1233:function(e,t,a){"use strict";var n=a(14),r=a(4),o=a(1356),i=a(16),c=!1;t.a=r.forwardRef((function(e,t){return c||(console.warn(["MUI: The Alert component was moved from the lab to the core.","","You should use `import { Alert } from '@mui/material'`","or `import Alert from '@mui/material/Alert'`"].join("\n")),c=!0),Object(i.jsx)(o.a,Object(n.a)({ref:t},e))}))},1356:function(e,t,a){"use strict";var n=a(43),r=a(26),o=a(14),i=a(4),c=a(319),s=a(975),l=a(974),d=a(320),j=a(321),u=a(253),b=a(1848),h=a(957),v=a(976);function m(e){return Object(h.a)("MuiAlert",e)}var p,O=Object(v.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),f=a(1851),x=a(996),g=a(16),y=Object(x.a)(Object(g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=Object(x.a)(Object(g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),M=Object(x.a)(Object(g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=Object(x.a)(Object(g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),z=Object(x.a)(Object(g.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),S=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],k=Object(d.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(u.a)(a.color||a.severity))]]}})((function(e){var t=e.theme,a=e.ownerState,r="light"===t.palette.mode?l.b:l.d,i="light"===t.palette.mode?l.d:l.b,c=a.color||a.severity;return Object(o.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},c&&"standard"===a.variant&&Object(n.a)({color:r(t.palette[c].light,.6),backgroundColor:i(t.palette[c].light,.9)},"& .".concat(O.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"outlined"===a.variant&&Object(n.a)({color:r(t.palette[c].light,.6),border:"1px solid ".concat(t.palette[c].light)},"& .".concat(O.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"filled"===a.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[c].dark:t.palette[c].main})})),A=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),R=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),N=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),H={success:Object(g.jsx)(y,{fontSize:"inherit"}),warning:Object(g.jsx)(C,{fontSize:"inherit"}),error:Object(g.jsx)(M,{fontSize:"inherit"}),info:Object(g.jsx)(w,{fontSize:"inherit"})},T=i.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiAlert"}),n=a.action,i=a.children,l=a.className,d=a.closeText,b=void 0===d?"Close":d,h=a.color,v=a.icon,O=a.iconMapping,x=void 0===O?H:O,y=a.onClose,C=a.role,M=void 0===C?"alert":C,w=a.severity,T=void 0===w?"success":w,I=a.variant,L=void 0===I?"standard":I,E=Object(r.a)(a,S),V=Object(o.a)({},a,{color:h,severity:T,variant:L}),B=function(e){var t=e.variant,a=e.color,n=e.severity,r=e.classes,o={root:["root","".concat(t).concat(Object(u.a)(a||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(s.a)(o,m,r)}(V);return Object(g.jsxs)(k,Object(o.a)({role:M,elevation:0,ownerState:V,className:Object(c.default)(B.root,l),ref:t},E,{children:[!1!==v?Object(g.jsx)(A,{ownerState:V,className:B.icon,children:v||x[T]||H[T]}):null,Object(g.jsx)(R,{ownerState:V,className:B.message,children:i}),null!=n?Object(g.jsx)(N,{className:B.action,children:n}):null,null==n&&y?Object(g.jsx)(N,{ownerState:V,className:B.action,children:Object(g.jsx)(f.a,{size:"small","aria-label":b,title:b,color:"inherit",onClick:y,children:p||(p=Object(g.jsx)(z,{fontSize:"small"}))})}):null]}))}));t.a=T},1360:function(e,t,a){"use strict";var n=a(14),r=a(26),o=a(4),i=a(319),c=a(975),s=a(320),l=a(321),d=a(957),j=a(976);function u(e){return Object(d.a)("MuiCardContent",e)}Object(j.a)("MuiCardContent",["root"]);var b=a(16),h=["className","component"],v=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),o=a.className,s=a.component,d=void 0===s?"div":s,j=Object(r.a)(a,h),m=Object(n.a)({},a,{component:d}),p=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(m);return Object(b.jsx)(v,Object(n.a)({as:d,className:Object(i.default)(p.root,o),ownerState:m,ref:t},j))}));t.a=m},1837:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a(37),r=a(51),o=a(4),i=a.n(o),c=a(78),s=a(49),l=a(1355),d=a(1845),j=a(983),u=a(1850),b=a(1840),h=a(1233),v=a(1066),m=a(1064),p=a(322),O=a(1221),f=a(1360),x=a(26),g=a(14),y=a(319),C=a(975),M=a(320),w=a(321),z=a(957),S=a(976);function k(e){return Object(z.a)("MuiCardActions",e)}Object(S.a)("MuiCardActions",["root","spacing"]);var A,R=a(16),N=["disableSpacing","className"],H=Object(M.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(g.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),T=o.forwardRef((function(e,t){var a=Object(w.a)({props:e,name:"MuiCardActions"}),n=a.disableSpacing,r=void 0!==n&&n,o=a.className,i=Object(x.a)(a,N),c=Object(g.a)({},a,{disableSpacing:r}),s=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(C.a)(a,k,t)}(c);return Object(R.jsx)(H,Object(g.a)({className:Object(y.default)(s.root,o),ownerState:c,ref:t},i))})),I=a(1841),L=a(1020),E=function(e){var t=e.bank;return Object(R.jsx)(b.a,{item:!0,xs:12,md:4,lg:4,children:Object(R.jsxs)(O.a,{variant:"outlined",style:{border:"1px solid var(--white)"},children:[Object(R.jsx)(f.a,{children:Object(R.jsxs)(u.a,{style:{position:"relative"},children:[Object(R.jsx)(u.a,{style:{position:"absolute",right:"0px",top:"-5px",height:"48px",width:"48px",borderRadius:"40px",backgroundColor:"transparent",alignItems:"center",display:"flex",justifyContent:"center"},children:Object(R.jsx)(L.a,{size:32,symbol:t.depositTokenName})}),Object(R.jsx)(j.a,{variant:"h5",component:"h2",children:t.depositTokenName}),Object(R.jsxs)(j.a,{color:"textSecondary",children:["Deposit ",t.depositTokenName," and Earn "," ".concat(t.earnTokenName)]}),Object(R.jsxs)(j.a,{color:"textSecondary",children:["Allocation: ",t.multiplier]})]})}),Object(R.jsxs)(T,{style:{justifyContent:"flex-end"},children:[Object(R.jsx)(I.a,{color:"primary",size:"small",variant:"contained",target:"_blank",href:"".concat(t.site),children:"\u2197"}),Object(R.jsx)(I.a,{color:"primary",size:"small",variant:"contained",target:"_blank",href:"".concat(t.buyLink),children:"Buy"}),Object(R.jsx)(I.a,{color:"primary",size:"small",variant:"contained",component:p.b,to:"/farms/".concat(t.page),children:"Stake"})]})]})})},V=a(45),B=a(1234),D=Object(V.c)(A||(A=Object(r.a)(["\n  body {\n    background-color: var(--black);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n* {\n    border-radius: 0 !important;\n}\n"]))),P=function(){var e=Object(B.a)(),t=Object(n.a)(e,1)[0],a=Object(s.g)().path,r=Object(c.b)().account,o=t.filter((function(e){return!e.finished}));return Object(R.jsx)(s.c,{children:Object(R.jsxs)(m.a,{children:[Object(R.jsxs)(s.a,{exact:!0,path:a,children:[Object(R.jsx)(D,{}),r?Object(R.jsxs)(d.a,{maxWidth:"lg",children:[Object(R.jsx)(j.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0,children:"Farms"}),Object(R.jsxs)(h.a,{variant:"filled",severity:"info",style:{marginTop:"50px"},children:["These pools will start at ",new Date("2022-03-25T12:00:00Z").toString(),"."]}),Object(R.jsxs)(u.a,{mt:5,children:[Object(R.jsxs)("div",{hidden:0===o.filter((function(e){return 2===e.sectionInUI})).length,children:[Object(R.jsx)(j.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,children:"Earn THEORY by staking LP Tokens"}),Object(R.jsx)(b.a,{container:!0,spacing:3,children:o.filter((function(e){return 2===e.sectionInUI})).map((function(e){return Object(R.jsx)(i.a.Fragment,{children:Object(R.jsx)(E,{bank:e})},e.name)}))})]}),Object(R.jsx)(h.a,{variant:"filled",severity:"info",style:{marginTop:"50px"},children:Date.now()<new Date("2022-03-22T12:00:00Z")?"These pools will start at ".concat(new Date("2022-03-22T12:00:00Z"),"."):"These pools have started and will end at ".concat(new Date("2022-03-25T12:00:00Z"),".")}),Object(R.jsxs)("div",{hidden:0===o.filter((function(e){return 0===e.sectionInUI})).length,children:[Object(R.jsx)(j.a,{color:"textPrimary",variant:"h4",gutterBottom:!0,style:{marginTop:"15px",marginBottom:"30px"},children:"Genesis Pools"}),Object(R.jsx)(b.a,{container:!0,spacing:3,children:o.filter((function(e){return 0===e.sectionInUI})).map((function(e){return Object(R.jsx)(i.a.Fragment,{children:Object(R.jsx)(E,{bank:e})},e.name)}))})]})]})]}):Object(R.jsx)(v.a,{})]}),Object(R.jsxs)(s.a,{path:"".concat(a,"/:bankId"),children:[Object(R.jsx)(D,{}),Object(R.jsx)(l.a,{})]})]})})}}}]);
//# sourceMappingURL=17.ebbf375e.chunk.js.map