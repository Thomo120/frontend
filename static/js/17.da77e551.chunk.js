(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{1004:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(297),l=n(39);t.a=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),r=n[0],j=n[1],d=Object(s.a)(),b=null===d||void 0===d?void 0:d.isUnlocked,x=Object(i.useCallback)(Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j,t.next=3,e.noUnlockBeforeTransfer(null===d||void 0===d?void 0:d.myAccount);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[e,null===d||void 0===d?void 0:d.myAccount]);return Object(i.useEffect)((function(){if(b){x().catch((function(e){return console.error("Failed to fetch token lock: ".concat(e.stack))}));var e=setInterval(x,l.b.refreshInterval);return function(){return clearInterval(e)}}}),[b,e,x,d]),r}},1005:function(e,t,n){"use strict";var a=n(2),c=n(947);t.a=function(e){var t=Object(c.a)();return{onSetTokenNoUnlockBeforeTransfer:Object(a.useCallback)((function(){t(e.setNoUnlockBeforeTransfer(!0),"Approve Unlock On Claim")}),[e,t])}}},1082:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(29),l=n(297),j=n(943);t.a=function(){var e=Object(j.a)().slowRefresh,t=Object(i.useState)(s.a.from(0)),n=Object(c.a)(t,2),r=n[0],d=n[1],b=Object(l.a)(),x=null===b||void 0===b?void 0:b.isUnlocked;return Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=d,e.next=4,null===b||void 0===b?void 0:b.getStakedSharesOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}x&&function(){e.apply(this,arguments)}()}),[e,x,b]),r}},1124:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(297),l=n(943);t.a=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),n=t[0],r=t[1],j=Object(i.useState)(0),d=Object(c.a)(j,2),b=d[0],x=d[1],O=Object(s.a)(),u=Object(l.a)().slowRefresh;return Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,null===O||void 0===O?void 0:O.getMasonryAPR();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=x,e.next=9,null===O||void 0===O?void 0:O.getMasonryDPR();case 9:e.t3=e.sent,(0,e.t2)(e.t3),e.next=16;break;case 13:e.prev=13,e.t4=e.catch(0),console.error(e.t4);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,x,O,u]),{apr:n,dpr:b}}},1125:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(29),l=n(297),j=n(943);t.a=function(){var e=Object(j.a)().slowRefresh,t=Object(i.useState)(s.a.from(0)),n=Object(c.a)(t,2),r=n[0],d=n[1],b=Object(l.a)(),x=null===b||void 0===b?void 0:b.isUnlocked;return Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=d,e.next=4,null===b||void 0===b?void 0:b.getEarningsOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}x&&function(){e.apply(this,arguments)}()}),[x,b,e]),r}},1130:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(297),l=n(29),j=n(943);t.a=function(){var e=Object(i.useState)(l.a.from(0)),t=Object(c.a)(e,2),n=t[0],r=t[1],d=Object(s.a)(),b=Object(j.a)().slowRefresh;return Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,null===d||void 0===d?void 0:d.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,d,b]),n}},1131:function(e,t,n){"use strict";n(10),n(32),n(1),n(2),n(297),n(943)},1132:function(e,t,n){"use strict";n(10),n(32),n(1),n(2),n(297),n(943)},1133:function(e,t,n){"use strict";var a=n(32),c=n(2),r=n(297),o=n(943);t.a=function(){var e=Object(o.a)().slowRefresh,t=Object(c.useState)({from:new Date,to:new Date}),n=Object(a.a)(t,2),i=n[0],s=n[1],l=Object(r.a)();return Object(c.useEffect)((function(){l&&(null===l||void 0===l||l.getTreasuryNextAllocationTime().then(s))}),[l,e]),i}},1853:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Me}));var a,c,r,o,i=n(32),s=n(2),l=n.n(s),j=n(71),d=n(238),b=n.n(d),x=n(1873),O=n(1875),u=n(1872),h=n(939),f=n(1867),p=n(966),m=n(981),v=n(976),g=n(297),w=function(){var e=Object(s.useState)({from:new Date,to:new Date}),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.a)();return Object(s.useEffect)((function(){c&&(null===c||void 0===c||c.getUserClaimRewardTime().then(a))}),[c]),n},k=n(10),y=n(1),E=n.n(y),T=n(943),A=function(){var e=Object(T.a)().slowRefresh,t=Object(s.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(g.a)(),o=null===r||void 0===r?void 0:r.isUnlocked;return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,null===r||void 0===r?void 0:r.canUserClaimRewardFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o,e,r]),a},N=n(45),R=n(42),C=n(1240),M=n(12),S=R.c.p(a||(a=Object(N.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0;\n"])),(function(e){return e.theme.color.grey[100]})),G=R.c.div(c||(c=Object(N.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),F=R.c.div(r||(r=Object(N.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),L=R.c.div(o||(o=Object(N.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),B=function(e){var t=e.base,n=e.deadline,a=e.hideBar,c=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return Object(M.jsxs)(L,{children:[Object(M.jsx)(C.a,{date:n,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes,c=e.seconds,r=String(24*t+n),o=String(a),i=String(c);return Object(M.jsxs)(S,{children:[r.padStart(2,"0"),":",o.padStart(2,"0"),":",i.padStart(2,"0")]})}},(new Date).getTime()),a?"":Object(M.jsx)(G,{children:Object(M.jsx)(F,{progress:c})})]})},D=n(947),P=function(){var e=Object(g.a)(),t=Object(D.a)();return{onReward:Object(s.useCallback)((function(){t(null===e||void 0===e?void 0:e.harvestCashFromMasonry(),"Claim GAME from Theoretics ")}),[e,t])}},W=n(1125),U=n(995),H=n(23),Y=n(1005),I=n(1004),$=function(e){var t=e.rewardsLocked,n=e.classname,a=Object(U.a)(),c=Object(g.a)(),r=P().onReward,o=Object(W.a)(),i=A(),l=Object(I.a)(null===c||void 0===c?void 0:c.TOMB),j=Object(Y.a)(null===c||void 0===c?void 0:c.TOMB).onSetTokenNoUnlockBeforeTransfer,d=Object(s.useMemo)((function(){return a?Number(a.priceInDollars).toFixed(2):null}),[a]),b=(Number(d)*Number(Object(H.a)(o))).toFixed(2),k=w(),y=k.from,E=k.to;return n=n||"",Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(x.a,{className:n,children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(u.a,{style:{marginBottom:"20px"},children:Object(M.jsx)(v.a,{children:Object(M.jsx)(p.a,{symbol:"TOMB"})})}),Object(M.jsx)(h.a,{variant:"h4",children:Object(M.jsx)(m.a,{value:Object(H.a)(o)})}),Object(M.jsxs)(h.a,{variant:"h4",component:"p",color:"var(--extra-color-2)",children:["$",b]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",style:{marginBottom:"20px"},children:"Total Earned"}),Object(M.jsx)(h.a,{variant:"h4",children:Object(M.jsx)(m.a,{value:"".concat((Number(Object(H.a)(o))*(100-t)/100).toFixed(4))})}),Object(M.jsxs)(h.a,{variant:"h4",component:"p",color:"var(--extra-color-2)",children:["$",(Number(b)*(100-t)/100).toFixed(2)]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",style:{marginBottom:"20px"},children:"GAME Earned"}),Object(M.jsx)(h.a,{variant:"h4",children:Object(M.jsx)(m.a,{value:"".concat((Number(Object(H.a)(o))*t/100).toFixed(4))})}),Object(M.jsxs)(h.a,{variant:"h4",component:"p",color:"var(--extra-color-2)",children:["$",(Number(b)*t/100).toFixed(2)]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",style:{marginBottom:"20px"},children:"LGAME Earned"}),Object(M.jsx)(u.a,{className:"buttonWrap",children:l?Object(M.jsx)(f.a,{onClick:r,variant:"contained",disabled:o.eq(0)||!i,children:"Claim Rewards"}):Object(M.jsx)(f.a,{onClick:j,variant:"contained",children:"Claim Unlock"})})]})}),Object(M.jsx)(u.a,{mt:2,style:{color:"#FFF"},children:i?"":Object(M.jsx)(x.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(h.a,{style:{textAlign:"center"},children:"Claim possible in"}),Object(M.jsx)(B,{hideBar:!0,base:y,deadline:E,description:"Claim available in"})]})})})]})},z=n(1852),V=n(971),J=n.n(V),q=n(988),X=n(969),_=n(974),K=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.a)(),r=Object(T.a)().slowRefresh,o=null===c||void 0===c?void 0:c.isUnlocked;return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,null===c||void 0===c?void 0:c.canUserUnstakeFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o,c,r]),n},Q=n(951),Z=n(949),ee=n(967),te=function(e){var t=e.max,n=e.onConfirm,a=e.onDismiss,c=e.tokenName,r=void 0===c?"":c,o=Object(s.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1],b=Object(s.useMemo)((function(){return Object(H.b)(t,"USDC"===r?6:18)}),[t,r]),x=Object(s.useCallback)((function(e){d(e.currentTarget.value)}),[d]),O=Object(s.useCallback)((function(){d(b)}),[b,d]);return Object(M.jsxs)(Q.a,{text:"Deposit ".concat(r),onDismiss:a,children:[Object(M.jsx)(ee.a,{value:j,onSelectMax:O,onChange:x,max:b,symbol:r}),Object(M.jsx)(Z.a,{children:Object(M.jsx)(f.a,{color:"primary",variant:"contained",onClick:function(){return n(j)},children:"Confirm"})})]})},ne=function(e){var t=e.onConfirm,n=e.onDismiss,a=e.max,c=e.tokenName,r=void 0===c?"":c,o=e.withdrawPercentage,l=Object(s.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1],x=Object(s.useMemo)((function(){return Object(H.b)(a)}),[a]),O=Object(s.useCallback)((function(e){b(e.currentTarget.value)}),[b]),u=Object(s.useCallback)((function(){b(x)}),[x,b]);return o=o||0,Object(M.jsxs)(Q.a,{text:"Withdraw ".concat(r),onDismiss:n,children:[Object(M.jsx)(ee.a,{onSelectMax:u,onChange:O,value:d,max:x,symbol:r}),Object(M.jsxs)(h.a,{variant:"h6",component:"p",style:{marginTop:"20px"},align:"center",children:["Current Withdrawal Fee: ",o,"%"]}),Object(M.jsx)(Z.a,{children:Object(M.jsx)(f.a,{color:"primary",variant:"contained",onClick:function(){return t(d)},children:"Confirm"})})]})},ae=n(1082),ce=n(989),re=function(){var e=Object(s.useState)({from:new Date,to:new Date}),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.a)();return Object(s.useEffect)((function(){c&&(null===c||void 0===c||c.getUserUnstakeTime().then(a))}),[c]),n},oe=function(){var e=Object(g.a)(),t=Object(D.a)();return{onStake:Object(s.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," THEORY to the Theoretics "))}),[e,t])}},ie=function(){var e=Object(g.a)(),t=Object(D.a)();return{onWithdraw:Object(s.useCallback)((function(n){t(null===e||void 0===e?void 0:e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," THEORY from Theoretics "))}),[e,t])}},se=Object(z.a)((function(e){return{button:{width:"2em",height:"2em",fontSize:"14px",padding:"0",minWidth:"auto"}}})),le=function(e){var t=e.withdrawPercentage,n=e.classname;n=n||"",t=t||0;var a=se(),c=Object(g.a)(),r=Object(q.b)(null===c||void 0===c?void 0:c.TSHARE,null===c||void 0===c?void 0:c.contracts.Theoretics.address),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(_.a)(null===c||void 0===c?void 0:c.TSHARE),b=Object(ae.a)(),w=re(),k=w.from,y=w.to,E=Object(ce.a)("THEORY",null===c||void 0===c?void 0:c.TSHARE),T=Object(s.useMemo)((function(){return E?(Number(E)*Number(Object(H.a)(b))).toFixed(2).toString():null}),[E,b]),A=oe().onStake,N=ie().onWithdraw,R=K(),C=Object(X.a)(Object(M.jsx)(te,{max:d,onConfirm:function(e){A(e),F()},tokenName:"THEORY"})),S=Object(i.a)(C,2),G=S[0],F=S[1],L=Object(X.a)(Object(M.jsx)(ne,{max:b,onConfirm:function(e){N(e),W()},withdrawPercentage:t,tokenName:"THEORY"})),D=Object(i.a)(L,2),P=D[0],W=D[1],U=function(){z()},Y=Object(X.a)(Object(M.jsxs)(Q.a,{text:"Withdrawal Fee",onDismiss:U,children:[Object(M.jsx)(h.a,{variant:"h6",color:"#fff",style:{marginBottom:"20px",fontWeight:"500"},children:"Your withdrawal fee for each pool changes the longer your tokens are staked, from your initial deposit or last withdrawal."}),Object(M.jsxs)(h.a,{variant:"h6",color:"#fff",style:{marginBottom:"20px",fontWeight:"500"},children:[Object(M.jsx)("strong",{children:"The fees are as follows:"}),Object(M.jsxs)("ul",{style:{marginTop:"10px"},children:[Object(M.jsx)("li",{children:"1 block (30 seconds) = 25%"}),Object(M.jsx)("li",{children:"less than 1 hour = 8%"}),Object(M.jsx)("li",{children:"less than 1 day = 4%"}),Object(M.jsx)("li",{children:"less than 3 days = 2%"}),Object(M.jsx)("li",{children:"less than 5 days = 1%"}),Object(M.jsx)("li",{children:"less than 2 weeks = 0.5%"}),Object(M.jsx)("li",{children:"less than 4 weeks = 0.25%"}),Object(M.jsx)("li",{children:"4 weeks and longer  = 0.01%"})]})]}),Object(M.jsx)(h.a,{variant:"h6",color:"#fff",children:"Depositing or Claiming tokens does not reset your withdrawal fee."}),Object(M.jsx)(Z.a,{children:Object(M.jsx)(f.a,{color:"primary",variant:"contained",onClick:U,fullWidth:!0,children:"Close"})})]})),I=Object(i.a)(Y,2),$=I[0],z=I[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(x.a,{className:n,children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(u.a,{style:{marginBottom:"20px"},children:Object(M.jsx)(v.a,{children:Object(M.jsx)(p.a,{symbol:"TSHARE"})})}),Object(M.jsx)(h.a,{variant:"h4",children:Object(M.jsx)(m.a,{value:Object(H.a)(b)})}),Object(M.jsxs)(h.a,{variant:"h4",component:"p",color:"var(--extra-color-2)",children:["$",T]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",style:{marginBottom:"20px"},children:"THEORY Staked"}),l!==q.a.APPROVED?Object(M.jsx)(u.a,{className:"buttonWrap",children:Object(M.jsx)(f.a,{disabled:l!==q.a.NOT_APPROVED,variant:"contained",style:{marginTop:"20px"},onClick:j,children:"Approve THEORY"})}):Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(u.a,{className:"buttonWrap",children:[Object(M.jsxs)(h.a,{variant:"body1",component:"p",style:{marginBottom:"20px"},children:["Current Withdrawal Fee ",t,"%",Object(M.jsx)(f.a,{variant:"contained",className:a.button,"aria-label":"More info",style:{marginLeft:"10px"},onClick:$,children:Object(M.jsx)(J.a,{fontSize:"inherit"})})]}),Object(M.jsx)(f.a,{variant:"contained",disabled:!R,onClick:P,style:{marginRight:"15px"},children:"Withdraw"}),Object(M.jsx)(f.a,{variant:"contained",onClick:G,children:"Deposit"})]})})]})}),Object(M.jsx)(u.a,{mt:2,style:{color:"#FFF"},children:R?"":Object(M.jsx)(x.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(h.a,{style:{textAlign:"center"},children:"Withdraw possible in"}),Object(M.jsx)(B,{hideBar:!0,base:k,deadline:y,description:"Withdraw available in"})]})})})]})},je=n(1081),de=n(1866),be=n(1874),xe=n(1838),Oe=n(1219),ue=n(1220),he=n(1222),fe=n(1218),pe=n(1221),me=n(985),ve=n(1001),ge=function(e){var t=Object(g.a)(),n=Object(D.a)();return{onRedeem:Object(s.useCallback)((function(){var a=e||"Redeem THEORY from Theoretics ";n(null===t||void 0===t?void 0:t.exitFromMasonry(),a)}),[t,e,n])}},we=n(1130),ke=n(1124),ye=(n(1131),n(1132),n(1133)),Ee=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.a)(),r=Object(T.a)().slowRefresh,o=null===c||void 0===c?void 0:c.isUnlocked;return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==c&&void 0!==c&&c.isUnlocked){e.next=3;break}return e.abrupt("return");case 3:return e.t0=a,e.next=6,null===c||void 0===c?void 0:c.getTotalTVLInMasonry();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(0),console.error(e.t2);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o,r,c]),n},Te=n(29),Ae=function(){var e=Object(s.useState)(Te.a.from(0)),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.a)(),r=Object(T.a)().slowRefresh,o=null===c||void 0===c?void 0:c.isUnlocked;return Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,null===c||void 0===c?void 0:c.getTotalStakedInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o,r,c]),n},Ne=n(1003),Re=Object(z.a)((function(e){return{section:{padding:"100px 0","@media (max-width: 767px)":{padding:"40px 0"}},button:{width:"2em",height:"2em",fontSize:"14px",padding:"0",minWidth:"auto"},boxed:{overflow:"initial","& .info-wrap":{position:"relative","&:before":{content:'""',position:"absolute",width:"2px",height:"calc(100% - 20px)",background:"var(--extra-color-1)",left:"50%",bottom:"0",transform:"translateX(-50%)",boxShadow:"0px 0px 5px var(--extra-color-1)"}}},boxClear:{border:"none",boxShadow:"none",backdropFilter:"none","& > *":{padding:"0","&:last-child":{paddingBottom:"0"}}},advanced:{textAlign:"center","& .advanced-toggle":{paddingTop:"20px",paddingBottom:"20px"},"& .advanced-info":{display:"none",marginBottom:"20px"},"&.open":{"& .advanced-info":{display:"block"},"& .advanced-toggle":{"& svg":{transform:"rotate(180deg)"}}}}}})),Ce=function(e){return null===e?e:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},Me=function(){var e=Re(),t=Object(j.b)().account,n=(ge().onRedeem,Object(ae.a)(),Object(we.a)()),a=Ee(),c=Ae(),r=Object(ke.a)(),o=r.apr,s=r.dpr,d=(A(),K(),Object(ye.a)().to),u=Object(je.a)(),p=Object(Ne.a)(),m=l.a.useState(!1),v=Object(i.a)(m,2),g=v[0],w=v[1],k=function(){N()},y=Object(X.a)(Object(M.jsxs)(Q.a,{text:"Rewards",onDismiss:k,children:[Object(M.jsxs)(h.a,{variant:"h6",color:"#fff",style:{fontWeight:"500"},children:["Every Round (often called an 'Epoch' in other DeFi protocols) you will recieve rewards based on the yearly and daily percentage rates if the GAME Price is above $1.01. Rewards are paid in GAME and LGAME (Locked GAME) tokens.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"GAME"}),Object(M.jsx)("br",{}),"Are GAME tokens which are available to you straight away.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"LGAME"}),Object(M.jsx)("br",{}),"Locked GAME Tokens are claimable and they unlock over 1 year from claiming them in a real-time linear schedule.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Unlocking LGAME"}),Object(M.jsx)("br",{}),"You can view and unlock LGAME tokens which are available to be unlocked in 'my wallet'.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Round"}),Object(M.jsx)("br",{}),"A round lasts for 6 hours.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"TWAP"}),Object(M.jsx)("br",{}),"Time-Weighted Average Price of GAME during the course of the previous Round."]}),Object(M.jsx)(Z.a,{children:Object(M.jsx)(f.a,{color:"primary",variant:"contained",onClick:k,fullWidth:!0,children:"Close"})})]})),E=Object(i.a)(y,2),T=E[0],N=E[1],R=function(){F()},C=Object(X.a)(Object(M.jsxs)(Q.a,{text:"Advanced Stats",onDismiss:R,children:[Object(M.jsxs)(h.a,{variant:"h6",color:"#fff",style:{fontWeight:"500"},children:[Object(M.jsx)("strong",{children:"LGAME %"}),Object(M.jsx)("br",{}),"The percentage of your rewards that will be in Locked GAME Tokens. This percentage is based on the price of GAME for that Round.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"If the price is below $1.0, no rewards will be given.",Object(M.jsx)("br",{}),"If the price is $1.01, 100% of rewards will be in LGAME.",Object(M.jsx)("br",{}),"If the price is $4.00 or greater, 100% of rewards will be in GAME.",Object(M.jsx)("br",{}),"If the price is in between $1.01 and $4.00, the percentage of LGAME / GAME rewards will be on a linear sliding scale.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Next TWAP"}),Object(M.jsx)("br",{}),"The projected Time-Weighted Average Price of GAME for the next Round.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Next APR"}),Object(M.jsx)("br",{}),"The projected Annual Percentage Rate of rewards for the next Round.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Next DPR"}),Object(M.jsx)("br",{}),"The projected Daily Percentage Rate of rewards for the next Round.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Next LGAME %"}),Object(M.jsx)("br",{}),"The projected percentage of rewards that will be in Locked GAME for the next Round.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Total Value Locked"}),Object(M.jsx)("br",{}),"The total USD value of THEORY tokens staked in the pool.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"THEORY Staked"}),Object(M.jsx)("br",{}),"The total number of THEORY tokens staked in the pool.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"THEORY Staked %"}),Object(M.jsx)("br",{}),"The percentage of all circulating THEORY and Locked THEORY tokens that are staked in the pool."]}),Object(M.jsx)(Z.a,{children:Object(M.jsx)(f.a,{color:"primary",variant:"contained",onClick:R,fullWidth:!0,children:"Close"})})]})),S=Object(i.a)(C,2),G=S[0],F=S[1];return Object(M.jsx)(ve.a,{children:t?Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"section",children:[Object(M.jsx)(h.a,{align:"center",variant:"h1",className:"textGlow pink",style:{marginBottom:"20px"},children:"Theoretics"}),Object(M.jsx)(h.a,{align:"center",variant:"h5",component:"p",style:{marginBottom:"50px",fontWeight:"500"},children:"Deposit THEORY and earn GAME when GAME price is above $1.01"}),Object(M.jsxs)(de.a,{container:!0,justifyContent:"center",spacing:3,style:{marginBottom:"50px"},children:[Object(M.jsx)(de.a,{item:!0,xs:12,md:3,children:Object(M.jsx)(x.a,{className:e.boxClear,children:Object(M.jsxs)(O.a,{align:"center",children:[Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Current Round"}),Object(M.jsx)(h.a,{variant:"h4",children:Number(n)})]})})}),Object(M.jsx)(de.a,{item:!0,xs:6,md:3,children:Object(M.jsx)(x.a,{className:e.boxClear,children:Object(M.jsxs)(O.a,{align:"center",children:[Object(M.jsxs)(h.a,{variant:"body1",component:"p",className:"textGlow",children:["GAME Price",Object(M.jsx)("small",{children:" (TWAP)"})]}),Object(M.jsxs)(h.a,{variant:"h4",children:[u.tombPrice.toFixed(4)," DAI"]})]})})}),Object(M.jsx)(de.a,{item:!0,xs:6,md:3,children:Object(M.jsx)(x.a,{className:e.boxClear,children:Object(M.jsxs)(O.a,{align:"center",children:[Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Next Round"}),Object(M.jsx)(h.a,{variant:"h4",children:Object(M.jsx)(B,{base:b()().toDate(),hideBar:!0,deadline:d,description:"Next Round"})})]})})})]}),Object(M.jsx)(de.a,{container:!0,justifyContent:"center",spacing:3,style:{marginBottom:"30px"},children:Object(M.jsxs)(de.a,{item:!0,xs:12,md:6,children:[Object(M.jsx)("div",{children:Object(M.jsx)(x.a,{className:e.boxed,children:Object(M.jsxs)(O.a,{align:"center",children:[Object(M.jsxs)(h.a,{variant:"h4",className:"kallisto",style:{marginBottom:"20px"},children:["Rewards",Object(M.jsx)(f.a,{variant:"contained",className:e.button,"aria-label":"More info",style:{marginLeft:"10px"},onClick:T,children:Object(M.jsx)(J.a,{fontSize:"inherit"})})]}),Object(M.jsx)("div",{className:"info-wrap",children:Object(M.jsxs)(de.a,{container:!0,justify:"center",spacing:3,children:[Object(M.jsxs)(de.a,{item:!0,xs:6,children:[Object(M.jsxs)(h.a,{variant:"h4",color:"var(--extra-color-2)",children:[Ce(!u.outOfBootstrap||u.tombPrice>=1.01?(o*(100-u.rewardsLocked)/100).toFixed(2):"0.00"),"%"]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"GAME Yearly Awards"})]}),Object(M.jsxs)(de.a,{item:!0,xs:6,children:[Object(M.jsxs)(h.a,{variant:"h4",color:"var(--extra-color-2)",children:[Ce(!u.outOfBootstrap||u.tombPrice>=1.01?(s*(100-u.rewardsLocked)/100).toFixed(2):"0.00"),"%"]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"GAME Daily Awards"})]}),Object(M.jsxs)(de.a,{item:!0,xs:6,children:[Object(M.jsxs)(h.a,{variant:"h4",color:"var(--extra-color-2)",children:[Ce(!u.outOfBootstrap||u.tombPrice>=1.01?(o*u.rewardsLocked/100).toFixed(2):"0.00"),"%"]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"LGAME Yearly Awards"})]}),Object(M.jsxs)(de.a,{item:!0,xs:6,children:[Object(M.jsxs)(h.a,{variant:"h4",color:"var(--extra-color-2)",children:[Ce(!u.outOfBootstrap||u.tombPrice>=1.01?(s*u.rewardsLocked/100).toFixed(2):"0.00"),"%"]}),Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"LGAME Daily Awards"})]})]})})]})})}),Object(M.jsxs)("div",{className:"".concat(e.advanced," ").concat(g?"open":""),children:[Object(M.jsx)("div",{className:"advanced-toggle",onClick:function(){w(!1===g)},children:Object(M.jsxs)(h.a,{align:"center",style:{display:"inline-block",cursor:"pointer",fontWeight:"700"},className:"textGlow pink",children:[Object(M.jsx)("span",{style:{verticalAlign:"middle"},children:g?"Hide Advanced":"Show Advanced"}),Object(M.jsx)(xe.a,{style:{verticalAlign:"middle"}})]})}),Object(M.jsx)("div",{className:"advanced-info",children:Object(M.jsx)(x.a,{children:Object(M.jsxs)(O.a,{align:"center",children:[Object(M.jsxs)(h.a,{variant:"h4",className:"kallisto",style:{marginBottom:"10px"},children:["Advanced Stats",Object(M.jsx)(f.a,{variant:"contained",className:e.button,"aria-label":"Advanced stats info",style:{marginLeft:"10px"},onClick:G,children:Object(M.jsx)(J.a,{fontSize:"inherit"})})]}),Object(M.jsx)(de.a,{container:!0,children:Object(M.jsx)(fe.a,{component:be.a,children:Object(M.jsx)(Oe.a,{"aria-label":"advanced info table",children:Object(M.jsxs)(ue.a,{children:[Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"LGAME %"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[u.rewardsLocked.toFixed(2),"%"]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Next TWAP"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[u.tombPriceUpdated.toFixed(4)," DAI"]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Next APR"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[Ce(!u.outOfBootstrap||u.tombPriceUpdated>=1.01?(o*(100-u.nextRewardsLocked)/100).toFixed(2):"0.00"),"% GAME",Object(M.jsx)("br",{}),Ce(!u.outOfBootstrap||u.tombPriceUpdated>=1.01?(o*u.nextRewardsLocked/100).toFixed(2):"0.00"),"% LGAME"]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Next DPR"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[!u.outOfBootstrap||u.tombPriceUpdated>=1.01?(s*(100-u.nextRewardsLocked)/100).toFixed(2):"0.00","% GAME",Object(M.jsx)("br",{}),!u.outOfBootstrap||u.tombPriceUpdated>=1.01?(s*u.nextRewardsLocked/100).toFixed(2):"0.00","% LGAME"]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Next LGAME %"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[u.nextRewardsLocked.toFixed(2),"%"]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"Total Value Locked"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:["$",Ce(a.toFixed(2)||"0.00")]})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"THEORY Staked"})}),Object(M.jsx)(he.a,{children:Object(M.jsx)(h.a,{children:Ce(Object(H.a)(c)||"0.00")})})]}),Object(M.jsxs)(pe.a,{children:[Object(M.jsx)(he.a,{align:"right",children:Object(M.jsx)(h.a,{variant:"body1",component:"p",className:"textGlow",children:"THEORY Staked %"})}),Object(M.jsx)(he.a,{children:Object(M.jsxs)(h.a,{children:[(Number(Object(H.a)(c))/Number(null===p||void 0===p?void 0:p.circulatingSupply)*100).toFixed(2),"%",Object(M.jsx)("br",{}),"(Circulating + Locked)"]})})]})]})})})})]})})})]})]})}),Object(M.jsxs)(de.a,{container:!0,spacing:3,justifyContent:"center",children:[Object(M.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(M.jsx)($,{rewardsLocked:u.rewardsLocked,classname:"boxed"})}),Object(M.jsx)(de.a,{item:!0,xs:12,md:4,children:Object(M.jsx)(le,{withdrawPercentage:(u.currentWithdrawFeeOf/100).toFixed(2),classname:"boxed"})})]})]})}):Object(M.jsx)(me.a,{})})}},967:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,c,r,o=n(45),i=(n(2),n(42)),s=n(1867),l=n(986),j=n(12),d=i.c.div(a||(a=Object(o.a)([""]))),b=i.c.div(c||(c=Object(o.a)([""]))),x=i.c.div(r||(r=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 16px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: center;\n"]))),O={height:"56px",borderTopLeftRadius:"0",borderBottomLeftRadius:"0"},u=function(e){var t=e.max,n=e.symbol,a=e.onChange,c=e.onSelectMax,r=e.value;return Object(j.jsxs)(d,{children:[Object(j.jsxs)(x,{className:"textGlow",children:[t.toLocaleString()," ",n," Available"]}),Object(j.jsx)(l.a,{endAdornment:Object(j.jsx)(b,{children:Object(j.jsx)(s.a,{style:O,size:"small",color:"primary",variant:"contained",onClick:c,children:"Max"})}),onChange:a,placeholder:"0",value:r})]})}},981:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,c=n(45),r=(n(2),n(42)),o=n(12),i=r.c.div(a||(a=Object(c.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),s=function(e){var t=e.value;return Object(o.jsx)(i,{children:t})}},989:function(e,t,n){"use strict";var a=n(10),c=n(32),r=n(1),o=n.n(r),i=n(2),s=n(297),l=n(39);t.a=function(e,t){var n=Object(i.useState)("0"),r=Object(c.a)(n,2),j=r[0],d=r[1],b=Object(s.a)(),x=null===b||void 0===b?void 0:b.isUnlocked,O=Object(i.useCallback)(Object(a.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===b||void 0===b?void 0:b.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,d(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,b]);return Object(i.useEffect)((function(){if(x){O().catch((function(e){return console.error(e.stack)}));var e=setInterval(O,l.b.refreshInterval);return function(){return clearInterval(e)}}}),[x,d,b,O]),j}}}]);
//# sourceMappingURL=17.da77e551.chunk.js.map