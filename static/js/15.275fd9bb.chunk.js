(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{1007:function(e,t,n){"use strict";var c=n(4),r=n(1015),a=n(141);t.a=function(){var e=Object(r.b)(),t=Object(a.b)();return Object(c.useCallback)((function(n,c){n.then((function(t){return e(t,{summary:c})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(c[0].toLowerCase()).concat(c.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},1046:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c,r=n(51),a=(n(4),n(45)),i=n(16),s=a.d.div(c||(c=Object(r.a)(["\n  background-color: none;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  box-shadow: none !important;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),o=function(e){var t=e.children;return Object(i.jsx)(s,{children:t})}},1070:function(e,t,n){"use strict";var c=n(20),r=n(37),a=n(0),i=n.n(a),s=n(4),o=n(318),l=n(990);t.a=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],a=t[1],j=Object(l.a)().fastRefresh,d=Object(o.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,d.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,d,j]),n}},1094:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c,r=n(51),a=(n(4),n(45)),i=n(16),s=a.d.div(c||(c=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),o=function(e){var t=e.value;return Object(i.jsx)(s,{children:t})}},1135:function(e,t,n){"use strict";var c=n(20),r=n(37),a=n(0),i=n.n(a),s=n(4),o=n(318),l=n(46);t.a=function(e,t){var n=Object(s.useState)("0"),a=Object(r.a)(n,2),j=a[0],d=a[1],u=Object(o.a)(),b=null===u||void 0===u?void 0:u.isUnlocked,h=Object(s.useCallback)(Object(c.a)(i.a.mark((function n(){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.getDepositTokenPriceInDollars(e,t);case 2:c=n.sent,d(c);case 4:case"end":return n.stop()}}),n)}))),[t,e,u]);return Object(s.useEffect)((function(){if(b){h().catch((function(e){return console.error(e.stack)}));var e=setInterval(h,l.b.refreshInterval);return function(){return clearInterval(e)}}}),[b,d,u,h]),j}},1218:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var c,r=n(4),a=n(45),i=n(51),s=n(16),o=a.d.div(c||(c=Object(i.a)([""]))),l=function(e){var t=e.children;return Object(s.jsx)(o,{children:t})},j=function(e){var t=e.color,n=Object(r.useContext)(a.a).color;return Object(s.jsx)(l,{children:Object(s.jsxs)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})]})})},d=function(e){var t=e.color,n=Object(r.useContext)(a.a).color;return Object(s.jsx)(l,{children:Object(s.jsxs)("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px",children:[Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.jsx)("path",{d:"M19 13H5v-2h14v2z"})]})})}},1220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c,r,a=n(51),i=(n(4),n(45)),s=n(322),o=n(16),l=i.d.button(c||(c=Object(a.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 10px !important;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #ff6464;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#FF4949"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),j=Object(i.d)(s.b)(r||(r=Object(a.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=e.disabled,c=e.onClick,r=e.to;return Object(o.jsx)(l,{disabled:n,onClick:c,children:r?Object(o.jsx)(j,{to:r,children:t}):t})}},1830:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ge}));var c,r,a,i,s,o,l,j,d,u,b,h,O,x,f,m=n(43),p=n(51),v=n(4),g=n(78),w=n(308),y=n.n(w),k=n(45),C=n(1128),E=n(1850),T=n(1221),S=n(1360),R=n(1841),N=n(983),H=n(1020),M=n(1027),A=n(1094),F=n(1046),z=n(37),I=n(318),D=function(){var e=Object(v.useState)({from:new Date,to:new Date}),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(I.a)();return Object(v.useEffect)((function(){r&&r.getUserClaimRewardTime().then(c)}),[r]),n},P=n(20),W=n(0),U=n.n(W),B=n(990),V=function(){var e=Object(B.a)().slowRefresh,t=Object(v.useState)(!1),n=Object(z.a)(t,2),c=n[0],r=n[1],a=Object(I.a)(),i=null===a||void 0===a?void 0:a.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,a.canUserClaimRewardFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,e,a]),c},Y=n(1372),G=n(16),q=k.d.p(c||(c=Object(p.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),L=k.d.div(r||(r=Object(p.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),J=k.d.div(a||(a=Object(p.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),$=k.d.div(i||(i=Object(p.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),Z=function(e){var t=e.base,n=e.deadline,c=e.hideBar,r=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return Object(G.jsxs)($,{children:[Object(G.jsx)(Y.a,{date:n,renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds,a=String(24*t+n),i=String(c),s=String(r);return Object(G.jsxs)(q,{children:[a.padStart(2,"0"),":",i.padStart(2,"0"),":",s.padStart(2,"0")]})}},(new Date).getTime()),c?"":Object(G.jsx)(L,{children:Object(G.jsx)(J,{progress:r})})]})},_=n(1007),K=function(){var e=Object(I.a)(),t=Object(_.a)();return{onReward:Object(v.useCallback)((function(){t(e.harvestCashFromMasonry(),"Claim GAME from Theoretics ")}),[e,t])}},Q=n(34),X=function(){var e=Object(B.a)().slowRefresh,t=Object(v.useState)(Q.a.from(0)),n=Object(z.a)(t,2),c=n[0],r=n[1],a=Object(I.a)(),i=null===a||void 0===a?void 0:a.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,a.getEarningsOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,a,e]),c},ee=n(1070),te=n(32),ne=k.d.div(s||(s=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ce=k.d.div(o||(o=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),re=k.d.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ae=function(){var e=Object(ee.a)(),t=K().onReward,n=X(),c=V(),r=Object(v.useMemo)((function(){return e?Number(e.priceInDollars).toFixed(2):null}),[e]),a=(Number(r)*Number(Object(te.a)(n))).toFixed(2),i=D(),s=i.from,o=i.to;return Object(G.jsxs)(E.a,{children:[Object(G.jsx)(T.a,{children:Object(G.jsx)(S.a,{children:Object(G.jsxs)(re,{children:[Object(G.jsxs)(ne,{children:[Object(G.jsx)(F.a,{children:Object(G.jsx)(H.a,{symbol:"TOMB"})}),Object(G.jsx)(A.a,{value:Object(te.a)(n)}),Object(G.jsx)(M.a,{text:"\u2248 $".concat(a),color:"#5f51c2"}),Object(G.jsx)(M.a,{text:"GAME Earned",color:"#5f51c2"})]}),Object(G.jsx)(ce,{children:Object(G.jsx)(R.a,{onClick:t,color:"primary",variant:"contained",disabled:n.eq(0)||!c,children:"Claim Reward"})})]})})}),Object(G.jsx)(E.a,{mt:2,style:{color:"#FFF"},children:c?"":Object(G.jsx)(T.a,{children:Object(G.jsxs)(S.a,{children:[Object(G.jsx)(N.a,{style:{textAlign:"center"},children:"Claim possible in"}),Object(G.jsx)(Z,{hideBar:!0,base:s,deadline:o,description:"Claim available in"})]})})})]})},ie=n(1218),se=n(1220),oe=n(1099),le=n(1069),je=n(1050),de=function(){var e=Object(v.useState)(!1),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(I.a)(),a=Object(B.a)().slowRefresh,i=null===r||void 0===r?void 0:r.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.canUserUnstakeFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,r,a]),n},ue=n(1045),be=n(1028),he=n(1047),Oe=n(1026),xe=function(e){var t=e.max,n=e.onConfirm,c=(e.onDismiss,e.tokenName),r=void 0===c?"":c,a=Object(v.useState)(""),i=Object(z.a)(a,2),s=i[0],o=i[1],l=Object(v.useMemo)((function(){return Object(te.b)(t,"USDC"===r?6:18)}),[t,r]),j=Object(v.useCallback)((function(e){o(e.currentTarget.value)}),[o]),d=Object(v.useCallback)((function(){o(l)}),[l,o]);return Object(G.jsxs)(ue.a,{children:[Object(G.jsx)(he.a,{text:"Deposit ".concat(r)}),Object(G.jsx)(Oe.a,{value:s,onSelectMax:d,onChange:j,max:l,symbol:r}),Object(G.jsx)(be.a,{children:Object(G.jsx)(R.a,{color:"primary",variant:"contained",onClick:function(){return n(s)},children:"Confirm"})})]})},fe=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),c=e.tokenName,r=void 0===c?"":c,a=Object(v.useState)(""),i=Object(z.a)(a,2),s=i[0],o=i[1],l=Object(v.useMemo)((function(){return Object(te.b)(n)}),[n]),j=Object(v.useCallback)((function(e){o(e.currentTarget.value)}),[o]),d=Object(v.useCallback)((function(){o(l)}),[l,o]);return Object(G.jsxs)(ue.a,{children:[Object(G.jsx)(he.a,{text:"Withdraw ".concat(r)}),Object(G.jsx)(Oe.a,{onSelectMax:d,onChange:j,value:s,max:l,symbol:r}),Object(G.jsx)(be.a,{children:Object(G.jsx)(R.a,{color:"primary",variant:"contained",onClick:function(){return t(s)},children:"Confirm"})})]})},me=function(){var e=Object(B.a)().slowRefresh,t=Object(v.useState)(Q.a.from(0)),n=Object(z.a)(t,2),c=n[0],r=n[1],a=Object(I.a)(),i=null===a||void 0===a?void 0:a.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,a.getStakedSharesOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[e,i,a]),c},pe=n(1135),ve=function(){var e=Object(v.useState)({from:new Date,to:new Date}),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(I.a)();return Object(v.useEffect)((function(){r&&r.getUserUnstakeTime().then(c)}),[r]),n},ge=function(){var e=Object(I.a)(),t=Object(_.a)();return{onStake:Object(v.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," THEORY to the Room "))}),[e,t])}},we=function(){var e=Object(I.a)(),t=Object(_.a)();return{onWithdraw:Object(v.useCallback)((function(n){t(e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," THEORY from Theoretics "))}),[e,t])}},ye=k.d.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ke=k.d.div(d||(d=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),Ce=k.d.div(u||(u=Object(p.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),Ee=k.d.div(b||(b=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Te=function(){var e=Object(I.a)(),t=Object(oe.b)(e.TSHARE,e.contracts.Theoretics.address),n=Object(z.a)(t,2),c=n[0],r=n[1],a=Object(je.a)(e.TSHARE),i=me(),s=ve(),o=s.from,l=s.to,j=Object(pe.a)("TSHARE",e.TSHARE),d=Object(v.useMemo)((function(){return j?(Number(j)*Number(Object(te.a)(i))).toFixed(2).toString():null}),[j,i]),u=ge().onStake,b=we().onWithdraw,h=de(),O=Object(le.a)(Object(G.jsx)(xe,{max:a,onConfirm:function(e){u(e),m()},tokenName:"THEORY"})),x=Object(z.a)(O,2),f=x[0],m=x[1],p=Object(le.a)(Object(G.jsx)(fe,{max:i,onConfirm:function(e){b(e),y()},tokenName:"THEORY"})),g=Object(z.a)(p,2),w=g[0],y=g[1];return Object(G.jsxs)(E.a,{children:[Object(G.jsx)(T.a,{children:Object(G.jsx)(S.a,{children:Object(G.jsxs)(Ee,{children:[Object(G.jsxs)(ye,{children:[Object(G.jsx)(F.a,{children:Object(G.jsx)(H.a,{symbol:"TSHARE"})}),Object(G.jsx)(A.a,{value:Object(te.a)(i)}),Object(G.jsx)(M.a,{text:"\u2248 $".concat(d),color:"#5f51c2"}),Object(G.jsx)(M.a,{text:"THEORY Staked",color:"#5f51c2"})]}),Object(G.jsx)(ke,{children:c!==oe.a.APPROVED?Object(G.jsx)(R.a,{disabled:c!==oe.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:r,children:"Approve THEORY"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(se.a,{disabled:!h,onClick:w,children:Object(G.jsx)(ie.b,{})}),Object(G.jsx)(Ce,{}),Object(G.jsx)(se.a,{onClick:f,children:Object(G.jsx)(ie.a,{})})]})})]})})}),Object(G.jsx)(E.a,{mt:2,style:{color:"#FFF"},children:h?"":Object(G.jsx)(T.a,{children:Object(G.jsxs)(S.a,{children:[Object(G.jsx)(N.a,{style:{textAlign:"center"},children:"Withdraw possible in"}),Object(G.jsx)(Z,{hideBar:!0,base:o,deadline:l,description:"Withdraw available in"})]})})})]})},Se=n(1831),Re=n(1235),Ne=n(1840),He=n(1233),Me=n(1066),Ae=n(1064),Fe=function(e){var t=Object(I.a)(),n=Object(_.a)();return{onRedeem:Object(v.useCallback)((function(){var c=e||"Redeem THEORY from Theoretics ";n(t.exitFromMasonry(),c)}),[t,e,n])}},ze=function(){var e=Object(v.useState)(Q.a.from(0)),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(I.a)(),a=Object(B.a)().slowRefresh;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,r,a]),n},Ie=function(){var e=Object(v.useState)(0),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(v.useState)(0),a=Object(z.a)(r,2),i=a[0],s=a[1],o=Object(I.a)(),l=Object(B.a)().slowRefresh;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,o.getMasonryAPR();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=s,e.next=9,o.getMasonryDPR();case 9:e.t3=e.sent,(0,e.t2)(e.t3),e.next=16;break;case 13:e.prev=13,e.t4=e.catch(0),console.error(e.t4);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,s,o,l]),{apr:n,dpr:i}},De=function(){var e=Object(B.a)().slowRefresh,t=Object(v.useState)({from:new Date,to:new Date}),n=Object(z.a)(t,2),c=n[0],r=n[1],a=Object(I.a)();return Object(v.useEffect)((function(){a&&a.getTreasuryNextAllocationTime().then(r)}),[a,e]),c},Pe=function(){var e=Object(v.useState)(Q.a.from(0)),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(I.a)(),a=Object(B.a)().slowRefresh,i=null===r||void 0===r?void 0:r.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(P.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getTotalStakedInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,a,r]),n},We=Object(k.c)(h||(h=Object(p.a)(["\n  body {\n    background-color: var(--black);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n* {\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}\n"]))),Ue=Object(Se.a)((function(e){return{gridItem:Object(m.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Be=k.d.div(O||(O=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Ve=k.d.div(x||(x=Object(p.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Ye=k.d.div(f||(f=Object(p.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Ge=function(){var e=Ue(),t=Object(g.b)().account,n=Fe().onRedeem,c=me(),r=ze(),a=Pe(),i=Ie(),s=i.apr,o=i.dpr,l=V(),j=de(),d=De().to,u=Object(Re.a)();return Object(G.jsxs)(Ae.a,{children:[Object(G.jsx)(We,{}),t?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(He.a,{variant:"filled",severity:"info",style:{marginTop:"50px"},children:["Theoretics will start at ",new Date("2022-03-28T12:00:00Z").toString(),"."]}),Object(G.jsx)(N.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0,children:"Theoretics"}),Object(G.jsx)(He.a,{variant:"filled",severity:"warning",style:{marginBottom:"50px"},children:"The withdraw fee changes the longer you are in the theoretics. The fees are as follows: 1 block = 25%, less than 1 hour = 8%, less than 1 day = 4%, less than 3 days = 2%, less than 5 days = 1%, less than 2 weeks = 0.5%, less than 4 weeks = 0.25%, equal to or more than 4 weeks = 0.01%."}),Object(G.jsxs)(He.a,{variant:"filled",severity:"warning",style:{marginBottom:"50px"},children:["The amount of rewards locked increases the closer to under-peg GAME is. At 1.01 or lower, it is 95%. At 4.0 or higher, it is 0%. You get your rewards after the epoch is over if the TWAP (time-weighted average price) is greater or equal to 1.01.",u.outOfBootstrap?"":" Also, the bootstrap phase is ongoing for "+u.bootstrapEpochsLeft+" more epochs, so GAME is being printed regardless of the TWAP right now."," View the docs for more info."]}),Object(G.jsxs)(E.a,{mt:5,children:[Object(G.jsxs)(Ne.a,{container:!0,justifyContent:"center",rowSpacing:13,columnSpacing:3,children:[Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{children:[Object(G.jsx)(N.a,{style:{textAlign:"center"},children:"Next Epoch"}),Object(G.jsx)(Z,{base:y()().toDate(),hideBar:!0,deadline:d,description:"Next Epoch"})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"Current Epoch"}),Object(G.jsx)(N.a,{children:Number(r)})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsxs)(N.a,{children:["GAME Price",Object(G.jsx)("small",{children:" (TWAP)"})]}),Object(G.jsxs)(N.a,{children:[u.tombPrice.toFixed(4)," DAI"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsxs)(N.a,{children:["Price",Object(G.jsx)("small",{children:" (Next TWAP)"})]}),Object(G.jsxs)(N.a,{children:[u.tombPriceUpdated.toFixed(4)," DAI"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"APR"}),Object(G.jsxs)(N.a,{children:[!u.outOfBootstrap||u.tombPrice>=1.01?s.toFixed(2):"0.00","%"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"DPR"}),Object(G.jsxs)(N.a,{children:[!u.outOfBootstrap||u.tombPrice>=1.01?o.toFixed(2):"0.00","%"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"Withdraw Fee"}),Object(G.jsxs)(N.a,{children:[(u.currentWithdrawFeeOf/100).toFixed(2),"%"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"Rewards Locked"}),Object(G.jsxs)(N.a,{children:[u.rewardsLocked.toFixed(2),"%"]})]})})}),Object(G.jsx)(Ne.a,{item:!0,xs:12,md:2,lg:2,children:Object(G.jsx)(T.a,{className:e.gridItem,children:Object(G.jsxs)(S.a,{align:"center",children:[Object(G.jsx)(N.a,{children:"THEORY Staked"}),Object(G.jsx)(N.a,{children:Object(te.a)(a)})]})})})]}),Object(G.jsx)(Ne.a,{container:!0,justifyContent:"center",children:Object(G.jsx)(E.a,{mt:3,style:{width:"525px"},children:Object(G.jsxs)(He.a,{variant:"transparent",severity:"info",children:["Rewards can only be claimed after ",u.currentClaimEpochs," ",1==u.currentClaimEpochs?"epoch":"epochs"," since last action. Staked THEORY can only be withdrawn after ",u.currentWithdrawEpochs," ",1==u.currentWithdrawEpochs?"epoch":"epochs"," since last action (deposit, withdraw, etc.)."]})})}),Object(G.jsx)(Ne.a,{container:!0,justifyContent:"center",children:Object(G.jsx)(E.a,{mt:3,style:{width:"525px"},children:Object(G.jsx)(He.a,{variant:"transparent",severity:"info",children:"Next TWAP determines if rewards will be distributed at the end of an epoch. TWAP determines everything else. The number of epochs that you have to wait increases as time progresses. Check the docs for more info."})})}),Object(G.jsx)(E.a,{mt:4,children:Object(G.jsx)(Be,{children:Object(G.jsxs)(Ve,{children:[Object(G.jsx)(Ye,{children:Object(G.jsx)(ae,{})}),Object(G.jsx)(C.a,{}),Object(G.jsx)(Ye,{children:Object(G.jsx)(Te,{})})]})})})]}),Object(G.jsx)(E.a,{mt:5,children:Object(G.jsx)(Ne.a,{container:!0,justifyContent:"center",spacing:3,mt:10,children:Object(G.jsx)(R.a,{disabled:c.eq(0)||!j&&!l,onClick:n,color:"primary",variant:"contained",children:"Claim and Withdraw"})})})]}):Object(G.jsx)(Me.a,{})]})}}}]);
//# sourceMappingURL=15.275fd9bb.chunk.js.map