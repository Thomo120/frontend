(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{1015:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return y}));var a=n(4),i=n(59),u=n(78),p=n(121),s=n(990);function r(){var t=Object(u.b)(),e=t.chainId,n=t.account,s=Object(i.b)();return Object(a.useCallback)((function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.summary,u=a.approval;if(n&&e){var r=t.hash;if(!r)throw Error("No transaction hash found.");s(Object(p.a)({hash:r,from:n,chainId:e,approval:u,summary:i}))}}),[s,e,n])}function o(){var t,e=Object(u.b)().chainId,n=Object(i.c)((function(t){return t.transactions}));return e&&null!==(t=n[e])&&void 0!==t?t:{}}function y(t,e){var n=o(),i=Object(s.a)().fastRefresh;return Object(a.useMemo)((function(){return"string"===typeof t&&"string"===typeof e&&Object.keys(n).some((function(a){var i=n[a];if(!i)return!1;if(i.receipt)return!1;var u=i.approval;return!!u&&(u.spender===e&&u.tokenAddress===t&&function(t){return(new Date).getTime()-t.addedTime<864e5}(i))}))}),[n,e,t,i])}},1026:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var a,i,u,p,s,r,o=n(51),y=(n(4),n(45)),c=n(1841),l=n(16),m=y.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  background-color: white;\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.spacing[3]})),d=y.d.input(i||(i=Object(o.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(t){return t.theme.color.grey[600]})),b=function(t){var e=t.endAdornment,n=t.onChange,a=t.placeholder,i=t.startAdornment,u=t.value;return Object(l.jsxs)(m,{children:[!!i&&i,Object(l.jsx)(d,{placeholder:a,value:u,onChange:n}),!!e&&e]})},f=y.d.div(u||(u=Object(o.a)([""]))),v=y.d.div(p||(p=Object(o.a)(["\n  width: ","px;\n"])),(function(t){return t.theme.spacing[3]})),T=y.d.div(s||(s=Object(o.a)(["\n  align-items: center;\n  display: flex;\n"]))),h=y.d.div(r||(r=Object(o.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(t){return t.theme.color.grey[400]})),x=function(t){var e=t.max,n=t.symbol,a=t.onChange,i=t.onSelectMax,u=t.value;return Object(l.jsxs)(f,{children:[Object(l.jsxs)(h,{children:[e.toLocaleString()," ",n," Available"]}),Object(l.jsx)(b,{endAdornment:Object(l.jsxs)(T,{children:[Object(l.jsx)(v,{}),Object(l.jsx)("div",{children:Object(l.jsx)(c.a,{size:"small",color:"primary",variant:"contained",onClick:i,children:"Max"})})]}),onChange:a,placeholder:"0",value:u})]})}},1028:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a,i,u,p=n(51),s=n(4),r=n.n(s),o=n(45),y=n(16),c=o.d.div(a||(a=Object(p.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(t){return t.theme.color.grey[100]}),(function(t){return t.theme.spacing[4]}),(function(t){return-t.theme.spacing[4]}),(function(t){return-t.theme.spacing[4]}),(function(t){return t.theme.spacing[4]})),l=o.d.div(i||(i=Object(p.a)(["\n  flex: 1;\n"]))),m=o.d.div(u||(u=Object(p.a)(["\n  width: ","px;\n"])),(function(t){return t.theme.spacing[4]})),d=function(t){var e=t.children,n=r.a.Children.toArray(e).length;return Object(y.jsx)(c,{children:r.a.Children.map(e,(function(t,e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(l,{children:t}),e<n-1&&Object(y.jsx)(m,{})]})}))})}},1066:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n(4);var a=n(1850),i=n(1214),u=n(16),p=function(){return Object(u.jsx)(a.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(u.jsx)(i.a,{})})}},1071:function(t,e,n){"use strict";var a=n(20),i=n(37),u=n(0),p=n.n(u),s=n(4),r=n(78),o=n(990);e.a=function(t,e,n){var u=Object(s.useState)(null),y=Object(i.a)(u,2),c=y[0],l=y[1],m=Object(r.b)().account,d=Object(o.a)().fastRefresh,b=Object(s.useCallback)(Object(a.a)(p.a.mark((function n(){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.allowance(m,e);case 2:a=n.sent,l(a);case 4:case"end":return n.stop()}}),n)}))),[m,e,t]);return Object(s.useEffect)((function(){m&&e&&t&&b().catch((function(t){return console.error("Failed to fetch allowance: ".concat(t.stack))}))}),[m,e,t,n,b,d]),c}},1099:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a,i=n(20),u=n(0),p=n.n(u),s=n(126),r=n(34),o=n(4),y=n(1015),c=n(1071),l=n(990),m=s.a.constants.MaxUint256,d=r.a.from("1000000000000000000000000");!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.NOT_APPROVED=1]="NOT_APPROVED",t[t.PENDING=2]="PENDING",t[t.APPROVED=3]="APPROVED"}(a||(a={})),e.b=function(t,e){var n=Object(y.a)(t.address,e),u=Object(c.a)(t,e,n),s=Object(l.a)().fastRefresh,r=Object(o.useMemo)((function(){return u?u.lt(d)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[u,n]),b=Object(y.b)(),f=Object(o.useCallback)(Object(i.a)(p.a.mark((function n(){var i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,t.approve(e,m);case 5:i=n.sent,b(i,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:e}});case 7:case"end":return n.stop()}}),n)}))),[r,s,t,e,b]);return[r,f]}},1128:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a,i=n(51),u=n(4),p=n(45),s=n(16),r=p.d.div(a||(a=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(t){return t.size}),(function(t){return t.size})),o=function(t){var e,n=t.size,a=void 0===n?"md":n,i=Object(u.useContext)(p.a).spacing;switch(a){case"lg":e=i[6];break;case"sm":e=i[2];break;default:e=i[4]}return Object(s.jsx)(r,{size:e})}},1235:function(t,e,n){"use strict";var a=n(20),i=n(37),u=n(0),p=n.n(u),s=n(4),r=n(254),o=n.n(r),y=n(318),c=n(34),l=new o.a("https://rpc.ftm.tools"),m="0x643f98fa70126dB82fd32c29473933Fe8c4BF507",d=new l.eth.Contract([{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"gameAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"BoughtBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"BurnedBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"DaoFundFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"DevFundFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"executor",type:"address"},{indexed:!1,internalType:"uint256",name:"at",type:"uint256"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"gameAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"RedeemedBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"TreasuryFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"theoreticsFunded",type:"event"},{inputs:[],name:"PERIOD",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"allocateSeigniorage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bondDepletionFloorPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondTreasury",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"bootstrapEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bootstrapSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gameAmount",type:"uint256"},{internalType:"uint256",name:"targetPrice",type:"uint256"}],name:"buyBonds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daoFund",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoFundSharedPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"devFund",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"devFundSharedPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"discountPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"epoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochSupplyContractionLeft",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"excludedFromTotalSupply",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"game",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gameOracle",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gamePriceCeiling",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"gamePriceOne",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBondDiscountRate",outputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBondPremiumRate",outputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBurnableGameLeft",outputs:[{internalType:"uint256",name:"_burnableGameLeft",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGameCirculatingSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGamePrice",outputs:[{internalType:"uint256",name:"gamePrice",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGameUpdatedPrice",outputs:[{internalType:"uint256",name:"_gamePrice",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRedeemableBonds",outputs:[{internalType:"uint256",name:"_redeemableBonds",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"governanceRecoverUnsupported",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hodl",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_game",type:"address"},{internalType:"address",name:"_hodl",type:"address"},{internalType:"address",name:"_theory",type:"address"},{internalType:"address",name:"_gameOracle",type:"address"},{internalType:"address",name:"_theoretics",type:"address"},{internalType:"address",name:"_genesisPool",type:"address"},{internalType:"uint256",name:"_startTime",type:"uint256"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isInitialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxDebtRatioPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxDiscountRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxExpansionTiers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxPremiumRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupplyContractionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintingFactorForPayingDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextEpochPoint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"premiumPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"premiumThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"previousEpochGamePrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_bondAmount",type:"uint256"},{internalType:"uint256",name:"targetPrice",type:"uint256"}],name:"redeemBonds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"seigniorageExpansionFloorPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"seigniorageSaved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_bondDepletionFloorPercent",type:"uint256"}],name:"setBondDepletionFloorPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_bondSupplyExpansionPercent",type:"uint256"}],name:"setBondSupplyExpansionPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_bootstrapEpochs",type:"uint256"},{internalType:"uint256",name:"_bootstrapSupplyExpansionPercent",type:"uint256"}],name:"setBootstrap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_discountPercent",type:"uint256"}],name:"setDiscountPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_daoFund",type:"address"},{internalType:"uint256",name:"_daoFundSharedPercent",type:"uint256"},{internalType:"address",name:"_devFund",type:"address"},{internalType:"uint256",name:"_devFundSharedPercent",type:"uint256"}],name:"setExtraFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_gameOracle",type:"address"}],name:"setGameOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gamePriceCeiling",type:"uint256"}],name:"setGamePriceCeiling",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxDebtRatioPercent",type:"uint256"}],name:"setMaxDebtRatioPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxDiscountRate",type:"uint256"}],name:"setMaxDiscountRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"_index",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"setMaxExpansionTiersEntry",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxPremiumRate",type:"uint256"}],name:"setMaxPremiumRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxSupplyContractionPercent",type:"uint256"}],name:"setMaxSupplyContractionPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxSupplyExpansionPercent",type:"uint256"}],name:"setMaxSupplyExpansionPercents",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintingFactorForPayingDebt",type:"uint256"}],name:"setMintingFactorForPayingDebt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"}],name:"setOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_premiumPercent",type:"uint256"}],name:"setPremiumPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_premiumThreshold",type:"uint256"}],name:"setPremiumThreshold",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_time",type:"uint256"}],name:"setStartTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"_index",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"setSupplyTiersEntry",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_theoretics",type:"address"}],name:"setTheoretics",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"supplyTiers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoretics",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"theoreticsAllocateSeigniorage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"theoreticsGetCurrentClaimEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoreticsGetCurrentWithdrawEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoreticsGetLockPercentage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"theoreticsGetWithdrawFeeOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"theoreticsGovernanceRecoverUnsupported",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_withdrawLockupEpochs",type:"uint256"},{internalType:"uint256",name:"_rewardLockupEpochs",type:"uint256"}],name:"theoreticsSetLockUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"}],name:"theoreticsSetOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"theory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],m),b=new l.eth.Contract([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],"0x00B8ba86C1b207f32710e7a4BCaDAB6F04C7dbd2");e.a=function(){var t=Object(s.useState)(0),e=Object(i.a)(t,2),n=e[0],u=e[1],r=Object(s.useState)(0),o=Object(i.a)(r,2),f=o[0],v=o[1],T=Object(s.useState)(0),h=Object(i.a)(T,2),x=h[0],O=h[1],M=Object(s.useState)(0),g=Object(i.a)(M,2),j=g[0],w=g[1],P=Object(s.useState)(0),_=Object(i.a)(P,2),E=_[0],S=_[1],F=Object(s.useState)(0),C=Object(i.a)(F,2),R=C[0],k=C[1],D=Object(s.useState)(!1),A=Object(i.a)(D,2),B=A[0],G=A[1],N=Object(s.useState)(0),W=Object(i.a)(N,2),I=W[0],z=W[1],L=Object(s.useState)(0),U=Object(i.a)(L,2),V=U[0],K=U[1],J=Object(s.useState)(c.a.from(0)),q=Object(i.a)(J,2),H=q[0],Q=q[1],X=Object(s.useState)(0),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],tt=Object(s.useState)(0),et=Object(i.a)(tt,2),nt=et[0],at=et[1],it=Object(y.a)();function ut(){return pt.apply(this,arguments)}function pt(){return pt=Object(a.a)(p.a.mark((function t(){var e,n,a,s,r,o,y,f,T,h,x,M,g;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===it||void 0===it?void 0:it.isUnlocked){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Promise.all([d.methods.getGamePrice().call(),b.methods.balanceOf(m).call(),d.methods.theoreticsGetCurrentWithdrawEpochs().call(),d.methods.theoreticsGetCurrentClaimEpochs().call(),d.methods.theoreticsGetWithdrawFeeOf(it.myAccount).call(),d.methods.theoreticsGetLockPercentage().call(),d.methods.bootstrapEpochs().call(),d.methods.epoch().call(),d.methods.getRedeemableBonds().call(),d.methods.getBondPremiumRate().call(),d.methods.getGameUpdatedPrice().call()]);case 5:e=t.sent,n=Object(i.a)(e,11),a=n[0],s=n[1],r=n[2],o=n[3],y=n[4],f=n[5],T=n[6],h=n[7],x=n[8],M=n[9],g=n[10],u(+l.utils.fromWei(a)),v(+l.utils.fromWei(s)),O(+r),w(+o),S(+y),k(+f),G(+h>=+T),z(+T-+h),K(+l.utils.fromWei(x)),Q(c.a.from(x)),$(+l.utils.fromWei(M)),at(+l.utils.fromWei(g));case 30:case"end":return t.stop()}}),t)}))),pt.apply(this,arguments)}return Object(s.useEffect)((function(){ut();var t=setInterval(ut,1e4);return function(){return clearInterval(t)}}),[it]),{Treasury:d,tombPrice:n,tombAvailable:f,currentWithdrawEpochs:x,currentClaimEpochs:j,currentWithdrawFeeOf:E,rewardsLocked:R,outOfBootstrap:B,bootstrapEpochsLeft:I,maxBondSell:V,maxBondSellBN:H,bondBonus:Z,tombPriceUpdated:nt}}},990:function(t,e,n){"use strict";var a=n(4),i=n(329);e.a=function(){var t=Object(a.useContext)(i.a);return{fastRefresh:t.fast,slowRefresh:t.slow}}}}]);
//# sourceMappingURL=3.8d459364.chunk.js.map