(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{1002:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c,r,o,a=t(51),i=t(2),l=t.n(i),s=t(45),u=t(16),d=s.d.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),j=s.d.div(r||(r=Object(a.a)(["\n  flex: 1;\n"]))),h=s.d.div(o||(o=Object(a.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),b=function(e){var n=e.children,t=l.a.Children.toArray(n).length;return Object(u.jsx)(d,{children:l.a.Children.map(n,(function(e,n){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{children:e}),n<t-1&&Object(u.jsx)(h,{})]})}))})}},1019:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c,r=t(51),o=(t(2),t(45)),a=t(16),i=o.d.div(c||(c=Object(r.a)(["\n  background-color: none;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  box-shadow: none !important;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),l=function(e){var n=e.children;return Object(a.jsx)(i,{children:n})}},1020:function(e,n,t){"use strict";var c=t(17),r=t(37),o=t(0),a=t.n(o),i=t(2),l=t(78),s=t(989);n.a=function(e,n,t){var o=Object(i.useState)(null),u=Object(r.a)(o,2),d=u[0],j=u[1],h=Object(l.b)().account,b=Object(s.a)().fastRefresh,f=Object(i.useCallback)(Object(c.a)(a.a.mark((function t(){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.allowance(h,n);case 2:c=t.sent,j(c);case 4:case"end":return t.stop()}}),t)}))),[h,n,e]);return Object(i.useEffect)((function(){h&&n&&e&&f().catch((function(e){return console.error("Failed to fetch allowance: ".concat(e.stack))}))}),[h,n,e,t,f,b]),d}},1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t(2);var c=t(1892),r=t(1112),o=t(16),a=function(){return Object(o.jsx)(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(o.jsx)(r.a,{})})}},1027:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c,r,o=t(51),a=(t(2),t(45)),i=t(16),l=a.d.div(c||(c=Object(o.a)(["\n  align-items: center;\n  background-color: white;\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spacing[3]})),s=a.d.input(r||(r=Object(o.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.color.grey[600]})),u=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,r=e.startAdornment,o=e.value;return Object(i.jsxs)(l,{children:[!!r&&r,Object(i.jsx)(s,{placeholder:c,value:o,onChange:t}),!!n&&n]})}},1037:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c,r=t(17),o=t(0),a=t.n(o),i=t(125),l=t(34),s=t(2),u=t(1030),d=t(1020),j=t(989),h=i.a.constants.MaxUint256,b=l.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(c||(c={})),n.b=function(e,n){var t=Object(u.a)(e.address,n),o=Object(d.a)(e,n,t),i=Object(j.a)().fastRefresh,l=Object(s.useMemo)((function(){return o?o.lt(b)?t?c.PENDING:c.NOT_APPROVED:c.APPROVED:c.UNKNOWN}),[o,t]),f=Object(u.b)(),v=Object(s.useCallback)(Object(r.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l===c.NOT_APPROVED){t.next=3;break}return console.error("approve was called unnecessarily"),t.abrupt("return");case 3:return t.next=5,e.approve(n,h);case 5:r=t.sent,f(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:n}});case 7:case"end":return t.stop()}}),t)}))),[l,i,e,n,f]);return[l,v]}},1042:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c,r=t(51),o=t(2),a=t(45),i=t(16),l=a.d.div(c||(c=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),s=function(e){var n,t=e.size,c=void 0===t?"md":t,r=Object(o.useContext)(a.a).spacing;switch(c){case"lg":n=r[6];break;case"sm":n=r[2];break;default:n=r[4]}return Object(i.jsx)(l,{size:n})}},1064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var c,r=t(2),o=t(45),a=t(51),i=t(16),l=o.d.div(c||(c=Object(a.a)([""]))),s=function(e){var n=e.children;return Object(i.jsx)(l,{children:n})},u=function(e){var n=e.color,t=Object(r.useContext)(o.a).color;return Object(i.jsx)(s,{children:Object(i.jsxs)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(i.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:n||t.grey[400]})]})})},d=function(e){var n=e.color,t=Object(r.useContext)(o.a).color;return Object(i.jsx)(s,{children:Object(i.jsxs)("svg",{viewBox:"0 0 24 24",fill:n||t.grey[400],width:"18px",height:"18px",children:[Object(i.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(i.jsx)("path",{d:"M19 13H5v-2h14v2z"})]})})}},1065:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var c,r,o=t(51),a=(t(2),t(45)),i=t(322),l=t(16),s=a.d.button(c||(c=Object(o.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 10px !important;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #ff6464;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#FF4949"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),u=Object(a.d)(i.b)(r||(r=Object(o.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var n=e.children,t=e.disabled,c=e.onClick,r=e.to;return Object(l.jsx)(s,{disabled:t,onClick:c,children:r?Object(l.jsx)(u,{to:r,children:n}):n})}},1872:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Pe}));var c,r,o,a,i,l,s,u,d,j,h,b,f,v,O,p,x,m,g,y,k=t(37),w=t(43),T=t(51),U=t(2),N=t(78),L=(t(306),t(45)),C=(t(1042),t(1892)),M=t(1243),E=t(1385),A=t(1883),D=t(1019),G=t(1064),S=t(1065),z=t(1009),F=t(1037),I=t(1036),R=t(1013),H=t(1002),P=t(1014),V=t(1027),Y=t(16),_=L.d.div(c||(c=Object(T.a)([""]))),q=L.d.div(r||(r=Object(T.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),B=L.d.div(o||(o=Object(T.a)(["\n  align-items: center;\n  display: flex;\n"]))),W=L.d.div(a||(a=Object(T.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[400]})),K=function(e){var n=e.max,t=(e.symbol,e.onChange),c=e.onSelectMax,r=e.value;return Object(Y.jsxs)(_,{children:[Object(Y.jsxs)(W,{children:["Up to ",n.toLocaleString()," levels currently available."]}),Object(Y.jsx)(V.a,{endAdornment:Object(Y.jsxs)(B,{children:[Object(Y.jsx)(q,{}),Object(Y.jsx)("div",{children:Object(Y.jsx)(A.a,{size:"small",color:"primary",variant:"contained",onClick:c,children:"Max"})})]}),onChange:t,placeholder:"0",value:r}),Object(Y.jsx)(W,{children:"Cost: ".concat(500*Number(r)," DAI.")})]})},J=function(e){var n=e.max,t=e.onConfirm,c=(e.onDismiss,e.tokenName),r=void 0===c?"":c,o=Object(U.useState)(""),a=Object(k.a)(o,2),i=a[0],l=a[1],s=n.toNumber().toString(),u=Object(U.useCallback)((function(e){l(e.currentTarget.value)}),[l]),d=Object(U.useCallback)((function(){l(s)}),[s,l]);return Object(Y.jsxs)(R.a,{children:[Object(Y.jsx)(P.a,{text:"Buy levels using DAI. Each level costs 500 DAI."}),Object(Y.jsx)(K,{value:i,onSelectMax:d,onChange:u,max:s,symbol:r}),Object(Y.jsx)(H.a,{children:Object(Y.jsx)(A.a,{color:"primary",variant:"contained",onClick:function(){return t(i)},children:"Mint"})})]})},Z=t(317),Q=t(1018),X=t(17),$=t(0),ee=t.n($),ne=t(989),te=t(34),ce=function(){var e=Object(U.useState)(te.a.from(5)),n=Object(k.a)(e,2),t=n[0],c=n[1],r=Object(Z.a)(),o=Object(ne.a)().slowRefresh,a=null===r||void 0===r?void 0:r.isUnlocked;return Object(U.useEffect)((function(){function e(){return(e=Object(X.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getMaxTheoryUnlockerLevel();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,r,o]),t},re=function(){var e=Object(U.useState)(te.a.from(0)),n=Object(k.a)(e,2),t=n[0],c=n[1],r=Object(Z.a)(),o=Object(ne.a)().slowRefresh,a=null===r||void 0===r?void 0:r.isUnlocked;return Object(U.useEffect)((function(){function e(){return(e=Object(X.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getTheoryUnlockerTotalSupply();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,r,o]),t},oe=function(){var e=Object(U.useState)(te.a.from(0)),n=Object(k.a)(e,2),t=n[0],c=n[1],r=Object(Z.a)(),o=Object(ne.a)().slowRefresh,a=null===r||void 0===r?void 0:r.isUnlocked;return Object(U.useEffect)((function(){function e(){return(e=Object(X.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getTheoryUnlockerOwnerSupply(r.myAccount);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,r,o]),t},ae=t(992),ie=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onMint:Object(U.useCallback)((function(t){n(e.mintTheoryUnlockerGen1(t,50),"Mint level ".concat(t," Theory Unlocker Gen 1."))}),[e,n])}},le=function(){var e=Object(U.useState)(te.a.from(0)),n=Object(k.a)(e,2),t=n[0],c=n[1],r=Object(Z.a)(),o=Object(ne.a)().slowRefresh,a=null===r||void 0===r?void 0:r.isUnlocked;return Object(U.useEffect)((function(){function e(){return(e=Object(X.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getTheoryUnlockerGen1OwnerSupply(r.myAccount);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,r,o]),t},se=function(e){var n=Object(U.useState)(te.a.from(0)),t=Object(k.a)(n,2),c=t[0],r=t[1],o=Object(Z.a)(),a=Object(ne.a)().slowRefresh,i=null===o||void 0===o?void 0:o.isUnlocked;return Object(U.useEffect)((function(){function n(){return(n=Object(X.a)(ee.a.mark((function n(){return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=r,n.next=4,o.getTheoryUnlockerGen1TotalMinted(e);case 4:n.t1=n.sent,(0,n.t0)(n.t1),n.next=11;break;case 8:n.prev=8,n.t2=n.catch(0),console.error(n.t2);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}i&&function(){n.apply(this,arguments)}()}),[i,o,a]),c},ue=function(e){var n=Object(U.useState)(te.a.from(0)),t=Object(k.a)(n,2),c=t[0],r=t[1],o=Object(Z.a)(),a=Object(ne.a)().slowRefresh,i=null===o||void 0===o?void 0:o.isUnlocked;return Object(U.useEffect)((function(){function n(){return(n=Object(X.a)(ee.a.mark((function n(){return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=r,n.next=4,o.getTheoryUnlockerGen1Supply(e);case 4:n.t1=n.sent,(0,n.t0)(n.t1),n.next=11;break;case 8:n.prev=8,n.t2=n.catch(0),console.error(n.t2);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}i&&function(){n.apply(this,arguments)}()}),[i,o,a]),c},de=L.d.div(i||(i=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),je=L.d.div(l||(l=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),he=(L.d.div(s||(s=Object(T.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),L.d.div(u||(u=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"])))),be=function(){var e=Object(Z.a)(),n=Object(F.b)(e.FTM,e.contracts.TheoryUnlockerGen1.address),t=Object(k.a)(n,2),c=t[0],r=t[1],o=ie().onMint,a=ce(),i=oe(),l=re(),s=le(),u=se(1),d=ue(1),j=Object(I.a)(Object(Y.jsx)(J,{max:a,onConfirm:function(e){o(e),f()},tokenName:"Level"})),h=Object(k.a)(j,2),b=h[0],f=h[1];return Object(Y.jsx)(C.a,{children:Object(Y.jsx)(M.a,{children:Object(Y.jsx)(E.a,{children:Object(Y.jsxs)(he,{children:[Object(Y.jsxs)(de,{children:[Object(Y.jsx)(D.a,{children:Object(Y.jsx)(Q.a,{symbol:"TSHARE"})}),Object(Y.jsx)(z.a,{text:"You have ".concat(i.toNumber()," out of ").concat(l.toNumber()," ").concat(l.eq(1)?"Gen 0 Theory Unlocker":"Gen 0 Theory Unlockers",".")}),Object(Y.jsx)(z.a,{text:"Max supply of Gen 0 Bronze reached. You can no longer mint them for now."}),Object(Y.jsx)(z.a,{text:"You have ".concat(s.toNumber()," out of 300 Bronze Gen 1 Theory Unlockers. There have been ").concat(u.toNumber()," minted so far and the supply is now ").concat(d.toNumber(),".")}),Object(Y.jsx)(z.a,{text:"Mint them with the + button below."})]}),Object(Y.jsx)(je,{children:c!==F.a.APPROVED?Object(Y.jsx)(A.a,{disabled:c!==F.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:r,children:"Approve DAI"}):Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(S.a,{onClick:b,children:Object(Y.jsx)(G.a,{})})})})]})})})})},fe=t(1873),ve=t(983),Oe=t(1257),pe=t(1399),xe=t.n(pe),me=t(1026),ge=t(1063),ye=(t(325),t(1254)),ke=(t(1252),t(31)),we=(t(1253),function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onUnlockTheory:Object(U.useCallback)((function(t){n(e.unlockTheoryWithNFT(t),"Unlock LTHEORY to THEORY with NFT ".concat(t,"."))}),[e,n])}}),Te=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onLevelUp:Object(U.useCallback)((function(t){n(e.levelUpTheoryUnlocker(t),"Level up NFT ".concat(t,"."))}),[e,n])}},Ue=L.d.div(d||(d=Object(T.a)([""]))),Ne=(L.d.div(j||(j=Object(T.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),L.d.div(h||(h=Object(T.a)(["\n  align-items: center;\n  display: flex;\n"]))),L.d.div(b||(b=Object(T.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[400]}))),Le=function(e){var n=e.onChange,t=e.value,c=e.symbol;return Object(Y.jsxs)(Ue,{children:[Object(Y.jsx)(Ne,{children:"Note that the color of the token will be of the token you clicked the merge button on first."}),Object(Y.jsx)(Ne,{children:"The combined level of the two NFTs cannot exceed the current max level."}),"TUG1"==c?Object(Y.jsx)(Ne,{children:"Gen 1 NFTs only be merged once."}):"",Object(Y.jsx)(V.a,{onChange:n,placeholder:"0",value:t})]})},Ce=function(e){var n=e.onConfirm,t=(e.onDismiss,e.tokenName),c=void 0===t?"":t,r=Object(U.useState)(""),o=Object(k.a)(r,2),a=o[0],i=o[1],l=Object(U.useCallback)((function(e){i(e.currentTarget.value)}),[i]);return Object(Y.jsxs)(R.a,{children:[Object(Y.jsx)(P.a,{text:"Select the ID of the token you wish to merge with."}),Object(Y.jsx)(Le,{value:a,onChange:l,symbol:c}),Object(Y.jsx)(H.a,{children:Object(Y.jsx)(A.a,{color:"primary",variant:"contained",onClick:function(){return n(a)},children:"Let's Go"})})]})},Me=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onMerge:Object(U.useCallback)((function(t,c){n(e.mergeTheoryUnlocker(t,c),"Merge Theory Unlocker ".concat(t," with Theory Unlocker ").concat(c,"."))}),[e,n])}},Ee=t(1255),Ae=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onLevelUp:Object(U.useCallback)((function(t){n(e.levelUpTheoryUnlockerGen1(t),"Level up Gen 1 NFT ".concat(t,"."))}),[e,n])}},De=function(){var e=Object(U.useState)(te.a.from(5)),n=Object(k.a)(e,2),t=n[0],c=n[1],r=Object(Z.a)(),o=Object(ne.a)().slowRefresh,a=null===r||void 0===r?void 0:r.isUnlocked;return Object(U.useEffect)((function(){function e(){return(e=Object(X.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,r.getMaxTheoryUnlockerGen1Level();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,r,o]),t},Ge=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onMerge:Object(U.useCallback)((function(t,c){n(e.mergeTheoryUnlockerGen1(t,c),"(Gen 1) Merge Theory Unlocker ".concat(t," with Theory Unlocker ").concat(c,"."))}),[e,n])}},Se=function(){var e=Object(Z.a)(),n=Object(ae.a)();return{onUnlockTheory:Object(U.useCallback)((function(t){n(e.unlockTheoryWithNFTGen1(t),"Unlock LTHEORY to THEORY with Gen 1 NFT ".concat(t,"."))}),[e,n])}},ze=Object(L.c)(f||(f=Object(T.a)(["\n  body {\n    background-color: var(--black);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n* {\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}\n"]))),Fe=Object(fe.a)((function(e){return{gridItem:Object(w.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Ie=(L.d.div(v||(v=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),L.d.div(O||(O=Object(T.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),L.d.div(p||(p=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),L.d.div(x||(x=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),L.d.div(m||(m=Object(T.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]}))),Re=L.d.div(g||(g=Object(T.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),He=L.d.div(y||(y=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Pe=function(){var e="0",n=Object(I.a)(Object(Y.jsx)(Ce,{onConfirm:function(n){O(e,n),r()},tokenName:"TU"})),t=Object(k.a)(n,2),c=t[0],r=t[1],o=Object(I.a)(Object(Y.jsx)(Ce,{onConfirm:function(n){p(e,n),r()},tokenName:"TUG1"})),a=Object(k.a)(o,2),i=a[0],l=(a[1],Fe(),Object(N.b)().account),s=Object(ye.a)(),u=Object(Ee.a)(),d=we().onUnlockTheory,j=Se().onUnlockTheory,h=Te().onLevelUp,b=Ae().onLevelUp,f=ce(),v=De(),O=Me().onMerge,p=Ge().onMerge;return Object(Y.jsxs)(ge.a,{children:[Object(Y.jsx)(ze,{}),l?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ve.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0,children:"NFTs"}),Object(Y.jsx)(Oe.a,{variant:"filled",severity:"info",style:{marginTop:"50px"},children:"You can view, mint, and merge your NFTs, as well as unlock LTHEORY using your NFTs, here."}),Object(Y.jsxs)(Oe.a,{variant:"filled",severity:"info",style:{marginTop:"50px"},children:["Every 15 days starting on ",new Date("2022-03-28T12:00:00Z").toString(),", 5 more levels will be unlocked until max level 50."]}),Object(Y.jsx)(Oe.a,{variant:"filled",severity:"warning",style:{marginTop:"50px"},children:"Your NFT will stay the color it was when you minted it. Certain colors will get certain perks, but you will not be limited in your unlock potential by choosing a lesser color. Merging two NFTs will create an NFT that has the color of the FIRST NFT you selected. Gen 1 NFTs can only be merged once, and only with other Gen 1 NFTs. The colors of the NFTs are as follows: Level 1-19 = Bronze, Level 20-39: Silver, Level 40-49: Gold, Level 50: Platinum. Check the docs for the images."}),Object(Y.jsx)(Oe.a,{variant:"filled",severity:"warning",style:{marginTop:"50px"},children:"Each level costs 500 DAI to mint. This means that: Level 1 = 500 DAI, Level 5 = 2,500 DAI, Level 10 = 5000 DAI, Level 15 = 7500 DAI, Level 20 = 10,000 DAI, Level 25 =12,500 DAI, Level 30 = 15,000 DAI, Level 35 = 17,500 DAI, Level 40 = 20,000 DAI, Level 45 = 22,500 DAI, Level 50 = 25,000 DAI. Gen 1 NFTs also cost GAME to level. The formula is as follows: Current Level + Extra, with Extra starting at 5 and doubling every 5 levels."}),Object(Y.jsx)(Oe.a,{variant:"filled",severity:"warning",style:{marginTop:"50px"},children:"You can only unlock NEWLY locked rewards. Each level of NFT unlocks 1% of your newly locked rewards. Once you use ANY NFT to unlock, you can no longer unlock those rewards with an NFT of the same type. Use the Unlock button in My Wallet to automatically choose the best NFT to use."}),Object(Y.jsx)(C.a,{mt:4,children:Object(Y.jsx)(He,{children:Object(Y.jsx)(be,{})})}),s.map((function(n,t){var r=n.timeLeftToLevel.toNumber(),o=Math.floor(r/24/60/60),a=Math.floor(r-86400*o),i=Math.floor(a/3600),l=Math.floor(a-3600*i),u=Math.ceil(l/60);return 0===u&&(u=1),Object(Y.jsx)(C.a,{mt:4,children:Object(Y.jsx)(He,{children:Object(Y.jsx)(C.a,{children:Object(Y.jsx)(M.a,{children:Object(Y.jsx)(E.a,{children:Object(Y.jsxs)(Re,{children:[Object(Y.jsx)(z.a,{text:"[Gen 0] Theory Unlocker #".concat(n.token_id," (").concat(n.attributes[0].value," Level ").concat(n.level,")")}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(xe.a,{url:n.animation_url,controls:!1,muted:!0,playing:!0,loop:!0}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:n.unlockAmount.eq(0),onClick:function(){return d(n.token_id)},children:"Unlock ".concat(Object(ke.a)(n.unlockAmount)," LTHEORY Using This NFT")}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:!n.timeLeftToLevel.eq(0)||n.level.gte(f),onClick:function(){return h(n.token_id)},children:n.level.eq(f)?"Current max level reached":n.timeLeftToLevel.eq(0)?"Level Up to Level ".concat(n.level.add(1).toNumber()):"".concat(o.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),":").concat(i.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),":").concat(u.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})," (D:H:M) left until next level up")}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:s.length<=1,onClick:function(){e=n.token_id,c()},children:"Merge"})]})})})})})},t)})),u.map((function(n,t){var c=n.timeLeftToLevel.toNumber(),r=Math.floor(c/24/60/60),o=Math.floor(c-86400*r),a=Math.floor(o/3600),l=Math.floor(o-3600*a),s=Math.ceil(l/60);return 0===s&&(s=1),Object(Y.jsx)(C.a,{mt:4,children:Object(Y.jsx)(He,{children:Object(Y.jsx)(C.a,{children:Object(Y.jsx)(M.a,{children:Object(Y.jsx)(E.a,{children:Object(Y.jsxs)(Re,{children:[Object(Y.jsx)(z.a,{text:"[Gen 1] Theory Unlocker #".concat(n.token_id," (").concat(n.attributes[0].value," Level ").concat(n.level,")")}),Object(Y.jsx)(Ie,{}),function(){try{return Object(Y.jsx)(xe.a,{url:n.animation_url,controls:!1,muted:!0,playing:!0,loop:!0})}catch(e){return Object(Y.jsx)(z.a,{text:"Image preview unavailable. Come back later."})}}(),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:n.unlockAmount.eq(0),onClick:function(){return j(n.token_id)},children:"Unlock ".concat(Object(ke.a)(n.unlockAmount)," LTHEORY Using This NFT")}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:!n.timeLeftToLevel.eq(0)||n.level.gte(v),onClick:function(){return b(n.token_id)},children:n.level.eq(v)?"Current max level reached":n.timeLeftToLevel.eq(0)?"Level Up to Level ".concat(n.level.add(1).toNumber()," for ").concat(Object(ke.a)(n.cost,18,0)," GAME"):"".concat(r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),":").concat(a.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),":").concat(s.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})," (D:H:M) left until next level up")}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:!0,children:"Level Up To Specific Level Coming Soon."}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:!0,children:"Level Up To Max Coming Soon."}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(A.a,{color:"primary",variant:"contained",disabled:n.merged||u.length<=1,onClick:function(){e=n.token_id,i()},children:"Merge"})]})})})})})},t)}))]}):Object(Y.jsx)(me.a,{})]})}}}]);
//# sourceMappingURL=16.7980713d.chunk.js.map