(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{1182:function(e,t,n){"use strict";var r=n(18),c=n(24),a=n(1),i=n.n(a),s=n(0),o=n(48),l=n(92);t.a=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],d=Object(l.a)().fastRefresh,u=Object(o.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,u.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,u,d]),n}},1183:function(e,t,n){"use strict";var r=n(18),c=n(24),a=n(1),i=n.n(a),s=n(0),o=n(48),l=n(92);t.a=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],d=Object(l.a)().slowRefresh,u=Object(o.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,u.getShareStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,u,d]),n}},1206:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,c=n(23),a=(n(0),n(21)),i=n(2),s=a.d.div(r||(r=Object(c.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),o=function(e){var t=e.value;return Object(i.jsx)(s,{children:t})}},1245:function(e,t,n){"use strict";var r=n(18),c=n(24),a=n(1),i=n.n(a),s=n(0),o=n(48),l=n(47);t.a=function(e,t){var n=Object(s.useState)("0"),a=Object(c.a)(n,2),d=a[0],u=a[1],j=Object(o.a)(),h=null===j||void 0===j?void 0:j.isUnlocked,b=Object(s.useCallback)(Object(r.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.getDepositTokenPriceInDollars(e,t);case 2:r=n.sent,u(r);case 4:case"end":return n.stop()}}),n)}))),[t,e,j]);return Object(s.useEffect)((function(){if(h){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,l.b.refreshInterval);return function(){return clearInterval(e)}}}),[h,u,j,b]),d}},1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r,c=n(0),a=n(21),i=n(23),s=n(2),o=a.d.div(r||(r=Object(i.a)([""]))),l=function(e){var t=e.children;return Object(s.jsx)(o,{children:t})},d=function(e){var t=e.color,n=Object(c.useContext)(a.a).color;return Object(s.jsx)(l,{children:Object(s.jsxs)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})]})})},u=function(e){var t=e.color,n=Object(c.useContext)(a.a).color;return Object(s.jsx)(l,{children:Object(s.jsxs)("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px",children:[Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(s.jsx)("path",{d:"M19 13H5v-2h14v2z"})]})})}},1332:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,c,a=n(23),i=(n(0),n(21)),s=n(79),o=n(2),l=i.d.button(r||(r=Object(a.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 10px !important;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #ff6464;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#FF4949"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),d=Object(i.d)(s.b)(c||(c=Object(a.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),u=function(e){var t=e.children,n=e.disabled,r=e.onClick,c=e.to;return Object(o.jsx)(l,{disabled:n,onClick:r,children:c?Object(o.jsx)(d,{to:c,children:t}):t})}},1883:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ot}));var r=n(27),c=n(23),a=n(0),i=n(51),s=n(274),o=n.n(s),l=n(21),d=n(556),u=n(1107),j=n(1108),h=n(1110),b=n(1102),m=n(292),f=n(142),p=n(106),O=n(1206),x=n(373),v=n(24),g=n(48),y=function(){var e=Object(a.useState)({from:new Date,to:new Date}),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)();return Object(a.useEffect)((function(){c&&c.getUserClaimRewardTime().then(r)}),[c]),n},w=n(18),T=n(1),k=n.n(T),S=n(92),E=function(){var e=Object(S.a)().slowRefresh,t=Object(a.useState)(!1),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(g.a)(),s=null===i||void 0===i?void 0:i.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,i.canUserClaimRewardFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[s,e,i]),r},C=n(25);function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function R(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function A(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var c=N(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return A(this,n)}}function H(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),c=r?r[1]:"",a=r?r[3]:"",i=r?r[2]:n,s=i.length>=t?i:(H(Array(t)).map((function(){return"0"})).join("")+i).slice(-1*t);return"".concat(c).concat(s).concat(a)}var U={daysInHours:!1,zeroPadTime:2};function B(e,t){var n=e.days,r=e.hours,c=e.minutes,a=e.seconds,i=Object.assign(Object.assign({},U),t),s=i.daysInHours,o=i.zeroPadTime,l=i.zeroPadDays,d=void 0===l?o:l,u=Math.min(2,o),j=s?L(r+24*n,o):L(r,u);return{days:s?"":L(n,d),hours:j,minutes:L(c,u),seconds:L(a,u)}}var W=function(e){R(n,e);var t=F(n);function n(){var e;return D(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return M(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(a.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(a.Component);W.propTypes={count:C.number,children:C.element,onComplete:C.func};var G=function(e){R(n,e);var t=F(n);function n(e){var r;if(D(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(a.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(e){r.props.onComplete&&r.props.onComplete(e)},e.date){var c=r.calcTimeDelta();r.state={timeDelta:c,status:c.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return M(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,c=e.controlled,a=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,c=void 0===r?Date.now:r,a=n.precision,i=void 0===a?0:a,s=n.controlled,o=n.offsetTime,l=void 0===o?0:o,d=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=l);var u=s?t:t-c(),j=Math.min(20,Math.max(0,i)),h=Math.round(1e3*parseFloat(((d?u:Math.max(0,u))/1e3).toFixed(j))),b=Math.abs(h)/1e3;return{total:h,days:Math.floor(b/86400),hours:Math.floor(b/3600%24),minutes:Math.floor(b/60%60),seconds:Math.floor(b%60),milliseconds:Number((b%1*1e3).toFixed()),completed:h<=0}}(t,{now:n,precision:r,controlled:c,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var c;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),c=this.handleOnComplete);return this.setState((function(n){var c=t||n.status;return e.completed&&!r.props.overtime?c="COMPLETED":t||"COMPLETED"!==c||(c="STOPPED"),{timeDelta:e,status:c}}),(function(){n&&n(r.state.timeDelta),c&&c(r.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,r=e.zeroPadDays,c=this.state.timeDelta;return Object.assign(Object.assign({},c),{api:this.getApi(),props:this.props,formatted:B(c,{daysInHours:t,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return Object(a.createElement)(W,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var c=this.props,i=c.className,s=c.overtime,o=c.children,l=c.renderer,d=this.getRenderProps();if(l)return l(d);if(o&&this.state.timeDelta.completed&&!s)return Object(a.cloneElement)(o,{countdown:d});var u=d.formatted,j=u.days,h=u.hours,b=u.minutes,m=u.seconds;return Object(a.createElement)("span",{className:i},d.total<0?"-":"",j,j?":":"",h,":",b,":",m)}}]),n}(a.Component);G.defaultProps=Object.assign(Object.assign({},U),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),G.propTypes={date:Object(C.oneOfType)([Object(C.instanceOf)(Date),C.string,C.number]),daysInHours:C.bool,zeroPadTime:C.number,zeroPadDays:C.number,controlled:C.bool,intervalDelay:C.number,precision:C.number,autoStart:C.bool,overtime:C.bool,className:C.string,children:C.element,renderer:C.func,now:C.func,onMount:C.func,onStart:C.func,onPause:C.func,onStop:C.func,onTick:C.func,onComplete:C.func};var V,Y,_,$,q,J,K,Q,X,Z,ee,te,ne,re,ce,ae=G,ie=n(2),se=l.d.p(V||(V=Object(c.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),oe=l.d.div(Y||(Y=Object(c.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),le=l.d.div(_||(_=Object(c.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),de=l.d.div($||($=Object(c.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),ue=function(e){var t=e.base,n=e.deadline,r=e.hideBar,c=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return Object(ie.jsxs)(de,{children:[Object(ie.jsx)(ae,{date:n,renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds,a=String(24*t+n),i=String(r),s=String(c);return Object(ie.jsxs)(se,{children:[a.padStart(2,"0"),":",i.padStart(2,"0"),":",s.padStart(2,"0")]})}},(new Date).getTime()),r?"":Object(ie.jsx)(oe,{children:Object(ie.jsx)(le,{progress:c})})]})},je=n(112),he=function(){var e=Object(g.a)(),t=Object(je.a)();return{onReward:Object(a.useCallback)((function(){t(e.harvestCashFromMasonry(),"Claim GAME from Theoretics ")}),[e,t])}},be=n(45),me=function(){var e=Object(S.a)().slowRefresh,t=Object(a.useState)(be.a.from(0)),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(g.a)(),s=null===i||void 0===i?void 0:i.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,i.getEarningsOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[s,i,e]),r},fe=n(1182),pe=n(34),Oe=l.d.div(q||(q=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),xe=l.d.div(J||(J=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),ve=l.d.div(K||(K=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ge=function(e){var t=e.rewardsLocked,n=Object(fe.a)(),r=he().onReward,c=me(),i=E(),s=Object(a.useMemo)((function(){return n?Number(n.priceInDollars).toFixed(2):null}),[n]),o=(Number(s)*Number(Object(pe.a)(c))).toFixed(2),l=y(),d=l.from,v=l.to;return Object(ie.jsxs)(u.a,{children:[Object(ie.jsx)(j.a,{children:Object(ie.jsx)(h.a,{children:Object(ie.jsxs)(ve,{children:[Object(ie.jsxs)(Oe,{children:[Object(ie.jsx)(x.a,{children:Object(ie.jsx)(f.a,{symbol:"TOMB"})}),Object(ie.jsx)(O.a,{value:Object(pe.a)(c)}),Object(ie.jsx)(p.a,{text:"\u2248 $".concat(o),color:"#89cff0"}),Object(ie.jsx)(p.a,{text:"Total Earned"}),Object(ie.jsx)("br",{}),Object(ie.jsx)(O.a,{value:"".concat((Number(Object(pe.a)(c))*(100-t)/100).toFixed(4))}),Object(ie.jsx)(p.a,{text:"\u2248 $".concat((Number(o)*(100-t)/100).toFixed(2)),color:"#89cff0"}),Object(ie.jsx)(p.a,{text:"GAME Earned"}),Object(ie.jsx)("br",{}),Object(ie.jsx)(O.a,{value:"".concat((Number(Object(pe.a)(c))*t/100).toFixed(4))}),Object(ie.jsx)(p.a,{text:"\u2248 $".concat((Number(o)*t/100).toFixed(2)),color:"#89cff0"}),Object(ie.jsx)(p.a,{text:"LGAME Earned"})]}),Object(ie.jsx)(xe,{children:Object(ie.jsx)(b.a,{onClick:r,color:"primary",variant:"contained",disabled:c.eq(0)||!i,children:"Claim Reward"})})]})})}),Object(ie.jsx)(u.a,{mt:2,style:{color:"#FFF"},children:i?"":Object(ie.jsx)(j.a,{children:Object(ie.jsxs)(h.a,{children:[Object(ie.jsx)(m.a,{style:{textAlign:"center"},children:"Claim possible in"}),Object(ie.jsx)(ue,{hideBar:!0,base:d,deadline:v,description:"Claim available in"})]})})})]})},ye=n(1329),we=n(1332),Te=n(378),ke=n(249),Se=n(247),Ee=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)(),i=Object(S.a)().slowRefresh,s=null===c||void 0===c?void 0:c.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.canUserUnstakeFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[s,c,i]),n},Ce=n(245),De=n(368),Pe=n(246),Me=n(1145),Re=function(e){var t=e.max,n=e.onConfirm,r=(e.onDismiss,e.tokenName),c=void 0===r?"":r,i=Object(a.useState)(""),s=Object(v.a)(i,2),o=s[0],l=s[1],d=Object(a.useMemo)((function(){return Object(pe.b)(t,"USDC"===c?6:18)}),[t,c]),u=Object(a.useCallback)((function(e){l(e.currentTarget.value)}),[l]),j=Object(a.useCallback)((function(){l(d)}),[d,l]);return Object(ie.jsxs)(Ce.a,{children:[Object(ie.jsx)(Pe.a,{text:"Deposit ".concat(c)}),Object(ie.jsx)(Me.a,{value:o,onSelectMax:j,onChange:u,max:d,symbol:c}),Object(ie.jsx)(De.a,{children:Object(ie.jsx)(b.a,{color:"primary",variant:"contained",onClick:function(){return n(o)},children:"Confirm"})})]})},Ne=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),r=e.tokenName,c=void 0===r?"":r,i=Object(a.useState)(""),s=Object(v.a)(i,2),o=s[0],l=s[1],d=Object(a.useMemo)((function(){return Object(pe.b)(n)}),[n]),u=Object(a.useCallback)((function(e){l(e.currentTarget.value)}),[l]),j=Object(a.useCallback)((function(){l(d)}),[d,l]);return Object(ie.jsxs)(Ce.a,{children:[Object(ie.jsx)(Pe.a,{text:"Withdraw ".concat(c)}),Object(ie.jsx)(Me.a,{onSelectMax:j,onChange:u,value:o,max:d,symbol:c}),Object(ie.jsx)(De.a,{children:Object(ie.jsx)(b.a,{color:"primary",variant:"contained",onClick:function(){return t(o)},children:"Confirm"})})]})},Ie=function(){var e=Object(S.a)().slowRefresh,t=Object(a.useState)(be.a.from(0)),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(g.a)(),s=null===i||void 0===i?void 0:i.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.next=4,i.getStakedSharesOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[e,s,i]),r},Ae=n(1245),Fe=function(){var e=Object(a.useState)({from:new Date,to:new Date}),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)();return Object(a.useEffect)((function(){c&&c.getUserUnstakeTime().then(r)}),[c]),n},He=function(){var e=Object(g.a)(),t=Object(je.a)();return{onStake:Object(a.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," THEORY to the Room "))}),[e,t])}},ze=function(){var e=Object(g.a)(),t=Object(je.a)();return{onWithdraw:Object(a.useCallback)((function(n){t(e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," THEORY from Theoretics "))}),[e,t])}},Le=l.d.div(Q||(Q=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),Ue=l.d.div(X||(X=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),Be=l.d.div(Z||(Z=Object(c.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),We=l.d.div(ee||(ee=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Ge=function(){var e=Object(g.a)(),t=Object(Te.b)(e.TSHARE,e.contracts.Theoretics.address),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(Se.a)(e.TSHARE),s=Ie(),o=Fe(),l=o.from,d=o.to,y=Object(Ae.a)("THEORY",e.TSHARE),w=Object(a.useMemo)((function(){return y?(Number(y)*Number(Object(pe.a)(s))).toFixed(2).toString():null}),[y,s]),T=He().onStake,k=ze().onWithdraw,S=Ee(),E=Object(ke.a)(Object(ie.jsx)(Re,{max:i,onConfirm:function(e){T(e),P()},tokenName:"THEORY"})),C=Object(v.a)(E,2),D=C[0],P=C[1],M=Object(ke.a)(Object(ie.jsx)(Ne,{max:s,onConfirm:function(e){k(e),I()},tokenName:"THEORY"})),R=Object(v.a)(M,2),N=R[0],I=R[1];return Object(ie.jsxs)(u.a,{children:[Object(ie.jsx)(j.a,{children:Object(ie.jsx)(h.a,{children:Object(ie.jsxs)(We,{children:[Object(ie.jsxs)(Le,{children:[Object(ie.jsx)(x.a,{children:Object(ie.jsx)(f.a,{symbol:"TSHARE"})}),Object(ie.jsx)(O.a,{value:Object(pe.a)(s)}),Object(ie.jsx)(p.a,{text:"\u2248 $".concat(w),color:"#89cff0"}),Object(ie.jsx)(p.a,{text:"THEORY Staked"})]}),Object(ie.jsx)(Ue,{children:r!==Te.a.APPROVED?Object(ie.jsx)(b.a,{disabled:r!==Te.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:c,children:"Approve THEORY"}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(we.a,{disabled:!S,onClick:N,children:Object(ie.jsx)(ye.b,{})}),Object(ie.jsx)(Be,{}),Object(ie.jsx)(we.a,{onClick:D,children:Object(ie.jsx)(ye.a,{})})]})})]})})}),Object(ie.jsx)(u.a,{mt:2,style:{color:"#FFF"},children:S?"":Object(ie.jsx)(j.a,{children:Object(ie.jsxs)(h.a,{children:[Object(ie.jsx)(m.a,{style:{textAlign:"center"},children:"Withdraw possible in"}),Object(ie.jsx)(ue,{hideBar:!0,base:l,deadline:d,description:"Withdraw available in"})]})})})]})},Ve=n(1098),Ye=n(1336),_e=n(1103),$e=n(1097),qe=n(374),Je=n(369),Ke=function(e){var t=Object(g.a)(),n=Object(je.a)();return{onRedeem:Object(a.useCallback)((function(){var r=e||"Redeem THEORY from Theoretics ";n(t.exitFromMasonry(),r)}),[t,e,n])}},Qe=function(){var e=Object(a.useState)(be.a.from(0)),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)(),i=Object(S.a)().slowRefresh;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,c,i]),n},Xe=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),i=Object(v.a)(c,2),s=i[0],o=i[1],l=Object(g.a)(),d=Object(S.a)().slowRefresh;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,l.getMasonryAPR();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=o,e.next=9,l.getMasonryDPR();case 9:e.t3=e.sent,(0,e.t2)(e.t3),e.next=16;break;case 13:e.prev=13,e.t4=e.catch(0),console.error(e.t4);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,o,l,d]),{apr:n,dpr:s}},Ze=function(){var e=Object(S.a)().slowRefresh,t=Object(a.useState)({from:new Date,to:new Date}),n=Object(v.a)(t,2),r=n[0],c=n[1],i=Object(g.a)();return Object(a.useEffect)((function(){i&&i.getTreasuryNextAllocationTime().then(c)}),[i,e]),r},et=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)(),i=Object(S.a)().slowRefresh,s=null===c||void 0===c?void 0:c.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.getTotalTVLInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[s,i,c]),n},tt=function(){var e=Object(a.useState)(be.a.from(0)),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(g.a)(),i=Object(S.a)().slowRefresh,s=null===c||void 0===c?void 0:c.isUnlocked;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.getTotalStakedInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s&&function(){e.apply(this,arguments)}()}),[s,i,c]),n},nt=n(1183),rt=Object(l.c)(te||(te=Object(c.a)(["\n  body {\n    background-color: var(--black);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n* {\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}\n"]))),ct=Object(Ve.a)((function(e){return{gridItem:Object(r.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),at=l.d.div(ne||(ne=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),it=l.d.div(re||(re=Object(c.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),st=l.d.div(ce||(ce=Object(c.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),ot=function(){var e=ct(),t=Object(i.b)().account,n=Ke().onRedeem,r=Ie(),c=Qe(),a=et(),s=tt(),l=Xe(),f=l.apr,p=l.dpr,O=E(),x=Ee(),v=Ze().to,g=Object(Ye.a)(),y=Object(nt.a)();return Object(ie.jsxs)(Je.a,{children:[Object(ie.jsx)(rt,{}),t?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(m.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0,children:"Theoretics"}),Object(ie.jsx)($e.a,{variant:"filled",severity:"warning",style:{marginBottom:"50px"},children:"The withdraw fee changes the longer you are in the theoretics. The fees are as follows: 1 block = 25%, less than 1 hour = 8%, less than 1 day = 4%, less than 3 days = 2%, less than 5 days = 1%, less than 2 weeks = 0.5%, less than 4 weeks = 0.25%, equal to or more than 4 weeks = 0.01%. Depositing or claiming does not reset your withdraw fee."}),Object(ie.jsxs)($e.a,{variant:"filled",severity:"warning",style:{marginBottom:"50px"},children:["Withdrawing any amount also claims your rewards. The amount of rewards locked increases the closer to under-peg GAME is. At 1.01 or lower, it is 95%. At 4.0 or higher, it is 0%. You get your rewards after the epoch is over if the TWAP (time-weighted average price) is greater or equal to 1.01.",g.outOfBootstrap?"":" Also, the bootstrap phase is ongoing for "+g.bootstrapEpochsLeft+" more epochs, so GAME is being printed regardless of the TWAP right now."," You can find your locked LGAME rewards using the My Wallet button. View the docs for more info."]}),Object(ie.jsxs)(u.a,{mt:5,children:[Object(ie.jsxs)(_e.a,{container:!0,justifyContent:"center",rowSpacing:13,columnSpacing:3,children:[Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{children:[Object(ie.jsx)(m.a,{style:{textAlign:"center"},children:"Next Epoch"}),Object(ie.jsx)(ue,{base:o()().toDate(),hideBar:!0,deadline:v,description:"Next Epoch"})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Current Epoch"}),Object(ie.jsx)(m.a,{children:Number(c)})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsxs)(m.a,{children:["GAME Price",Object(ie.jsx)("small",{children:" (TWAP)"})]}),Object(ie.jsxs)(m.a,{children:[g.tombPrice.toFixed(4)," DAI"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsxs)(m.a,{children:["Price",Object(ie.jsx)("small",{children:" (Next TWAP)"})]}),Object(ie.jsxs)(m.a,{children:[g.tombPriceUpdated.toFixed(4)," DAI"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Total APR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?f.toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Total DPR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?p.toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"GAME APR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?(f*(100-g.rewardsLocked)/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"LGAME APR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?(f*g.rewardsLocked/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"GAME DPR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?(p*(100-g.rewardsLocked)/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"LGAME DPR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPrice>=1.01?(p*g.rewardsLocked/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"LGAME Percentage"}),Object(ie.jsxs)(m.a,{children:[g.rewardsLocked.toFixed(2),"%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Next GAME APR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPriceUpdated>=1.01?(f*(100-g.nextRewardsLocked)/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Next LGAME APR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPriceUpdated>=1.01?(f*g.nextRewardsLocked/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Next GAME DPR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPriceUpdated>=1.01?(p*(100-g.nextRewardsLocked)/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Next LGAME DPR"}),Object(ie.jsxs)(m.a,{children:[!g.outOfBootstrap||g.tombPriceUpdated>=1.01?(p*g.nextRewardsLocked/100).toFixed(2):"0.00","%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Next LGAME Percentage"}),Object(ie.jsxs)(m.a,{children:[g.nextRewardsLocked.toFixed(2),"%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"Your Current Withdraw Fee"}),Object(ie.jsxs)(m.a,{children:[(g.currentWithdrawFeeOf/100).toFixed(2),"%"]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"TVL"}),Object(ie.jsxs)(m.a,{children:["$",a.toFixed(2)]})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"THEORY Staked"}),Object(ie.jsx)(m.a,{children:Object(pe.a)(s)})]})})}),Object(ie.jsx)(_e.a,{item:!0,xs:12,md:2,lg:2,children:Object(ie.jsx)(j.a,{className:e.gridItem,children:Object(ie.jsxs)(h.a,{align:"center",children:[Object(ie.jsx)(m.a,{children:"THEORY Staked % (Circ.+Locked)"}),Object(ie.jsxs)(m.a,{children:[(Number(Object(pe.a)(s))/Number(null===y||void 0===y?void 0:y.circulatingSupply)*100).toFixed(2),"%"]})]})})})]}),Object(ie.jsx)(_e.a,{container:!0,justifyContent:"center",children:Object(ie.jsx)(u.a,{mt:3,style:{width:"525px"},children:Object(ie.jsxs)($e.a,{variant:"transparent",severity:"info",children:["Rewards can only be claimed after ",g.currentClaimEpochs," ",1==g.currentClaimEpochs?"epoch":"epochs"," since last action. Staked THEORY can only be withdrawn after ",g.currentWithdrawEpochs," ",1==g.currentWithdrawEpochs?"epoch":"epochs"," since last action (deposit, withdraw, etc.)."]})})}),Object(ie.jsx)(_e.a,{container:!0,justifyContent:"center",children:Object(ie.jsx)(u.a,{mt:3,style:{width:"525px"},children:Object(ie.jsx)($e.a,{variant:"transparent",severity:"info",children:"Next TWAP determines if rewards will be distributed at the end of an epoch. TWAP determines everything else. The number of epochs that you have to wait increases as time progresses. Check the docs for more info."})})}),Object(ie.jsx)(u.a,{mt:4,children:Object(ie.jsx)(at,{children:Object(ie.jsxs)(it,{children:[Object(ie.jsx)(st,{children:Object(ie.jsx)(ge,{rewardsLocked:g.rewardsLocked})}),Object(ie.jsx)(d.a,{}),Object(ie.jsx)(st,{children:Object(ie.jsx)(Ge,{})})]})})})]}),Object(ie.jsx)(u.a,{mt:5,children:Object(ie.jsx)(_e.a,{container:!0,justifyContent:"center",spacing:3,mt:10,children:Object(ie.jsx)(b.a,{disabled:r.eq(0)||!x&&!O,onClick:n,color:"primary",variant:"contained",children:"Claim and Withdraw"})})})]}):Object(ie.jsx)(qe.a,{})]})}}}]);
//# sourceMappingURL=13.4f737ac0.chunk.js.map