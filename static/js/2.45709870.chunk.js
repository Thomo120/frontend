(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{1145:function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var a,i,u,p,s=n(23),y=(n(0),n(21)),o=n(1102),r=n(379),l=n(2),m=y.d.div(a||(a=Object(s.a)([""]))),d=y.d.div(i||(i=Object(s.a)(["\n  width: ","px;\n"])),(function(t){return t.theme.spacing[3]})),c=y.d.div(u||(u=Object(s.a)(["\n  align-items: center;\n  display: flex;\n"]))),b=y.d.div(p||(p=Object(s.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(t){return t.theme.color.grey[400]})),T=function(t){var e=t.max,n=t.symbol,a=t.onChange,i=t.onSelectMax,u=t.value;return Object(l.jsxs)(m,{children:[Object(l.jsxs)(b,{children:[e.toLocaleString()," ",n," Available"]}),Object(l.jsx)(r.a,{endAdornment:Object(l.jsxs)(c,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{children:Object(l.jsx)(o.a,{size:"small",color:"primary",variant:"contained",onClick:i,children:"Max"})})]}),onChange:a,placeholder:"0",value:u})]})}},1336:function(t,e,n){"use strict";var a=n(18),i=n(24),u=n(1),p=n.n(u),s=n(0),y=n(295),o=n.n(y),r=n(48),l=n(45),m=new o.a("https://rpc.ftm.tools"),d="0x98F5cdda1489503e755Da30BEc5FCD341C949791",c=new m.eth.Contract([{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"gameAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"BoughtBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"BurnedBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"DaoFundFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"DevFundFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"executor",type:"address"},{indexed:!1,internalType:"uint256",name:"at",type:"uint256"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"gameAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bondAmount",type:"uint256"}],name:"RedeemedBonds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"TreasuryFunded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"seigniorage",type:"uint256"}],name:"theoreticsFunded",type:"event"},{inputs:[],name:"PERIOD",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"allocateSeigniorage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bondDepletionFloorPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondTreasury",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"bootstrapEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bootstrapSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gameAmount",type:"uint256"},{internalType:"uint256",name:"targetPrice",type:"uint256"}],name:"buyBonds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"daoFund",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoFundSharedPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"devFund",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"devFundSharedPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"discountPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"epoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"epochSupplyContractionLeft",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"excludedFromTotalSupply",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"game",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gameOracle",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gamePriceCeiling",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"gamePriceOne",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBondDiscountRate",outputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBondPremiumRate",outputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBurnableGameLeft",outputs:[{internalType:"uint256",name:"_burnableGameLeft",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGameCirculatingSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGamePrice",outputs:[{internalType:"uint256",name:"gamePrice",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGameUpdatedPrice",outputs:[{internalType:"uint256",name:"_gamePrice",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRedeemableBonds",outputs:[{internalType:"uint256",name:"_redeemableBonds",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"governanceRecoverUnsupported",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"hodl",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_game",type:"address"},{internalType:"address",name:"_hodl",type:"address"},{internalType:"address",name:"_theory",type:"address"},{internalType:"address",name:"_gameOracle",type:"address"},{internalType:"address",name:"_theoretics",type:"address"},{internalType:"address",name:"_genesisPool",type:"address"},{internalType:"uint256",name:"_startTime",type:"uint256"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isInitialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxDebtRatioPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxDiscountRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxExpansionTiers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxPremiumRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupplyContractionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupplyExpansionPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintingFactorForPayingDebt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextEpochPoint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"premiumPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"premiumThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"previousEpochGamePrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_bondAmount",type:"uint256"},{internalType:"uint256",name:"targetPrice",type:"uint256"}],name:"redeemBonds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"seigniorageExpansionFloorPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"seigniorageSaved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_bondDepletionFloorPercent",type:"uint256"}],name:"setBondDepletionFloorPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_bondSupplyExpansionPercent",type:"uint256"}],name:"setBondSupplyExpansionPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_bootstrapEpochs",type:"uint256"},{internalType:"uint256",name:"_bootstrapSupplyExpansionPercent",type:"uint256"}],name:"setBootstrap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_discountPercent",type:"uint256"}],name:"setDiscountPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_daoFund",type:"address"},{internalType:"uint256",name:"_daoFundSharedPercent",type:"uint256"},{internalType:"address",name:"_devFund",type:"address"},{internalType:"uint256",name:"_devFundSharedPercent",type:"uint256"}],name:"setExtraFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_gameOracle",type:"address"}],name:"setGameOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gamePriceCeiling",type:"uint256"}],name:"setGamePriceCeiling",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxDebtRatioPercent",type:"uint256"}],name:"setMaxDebtRatioPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxDiscountRate",type:"uint256"}],name:"setMaxDiscountRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"_index",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"setMaxExpansionTiersEntry",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxPremiumRate",type:"uint256"}],name:"setMaxPremiumRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxSupplyContractionPercent",type:"uint256"}],name:"setMaxSupplyContractionPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxSupplyExpansionPercent",type:"uint256"}],name:"setMaxSupplyExpansionPercents",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintingFactorForPayingDebt",type:"uint256"}],name:"setMintingFactorForPayingDebt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"}],name:"setOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_premiumPercent",type:"uint256"}],name:"setPremiumPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_premiumThreshold",type:"uint256"}],name:"setPremiumThreshold",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_time",type:"uint256"}],name:"setStartTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"_index",type:"uint8"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"setSupplyTiersEntry",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_theoretics",type:"address"}],name:"setTheoretics",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"supplyTiers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoretics",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"theoreticsAllocateSeigniorage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"theoreticsGetCurrentClaimEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoreticsGetCurrentWithdrawEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"theoreticsGetLockPercentage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"theoreticsGetWithdrawFeeOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"theoreticsGovernanceRecoverUnsupported",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_withdrawLockupEpochs",type:"uint256"},{internalType:"uint256",name:"_rewardLockupEpochs",type:"uint256"}],name:"theoreticsSetLockUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_operator",type:"address"}],name:"theoreticsSetOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"theory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],d),b=new m.eth.Contract([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],"0x56EbFC2F3873853d799C155AF9bE9Cb8506b7817"),T=new m.eth.Contract([{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"executor",type:"address"},{indexed:!1,internalType:"uint256",name:"at",type:"uint256"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOperator",type:"address"},{indexed:!0,internalType:"address",name:"newOperator",type:"address"}],name:"OperatorTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lockAmount",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[{internalType:"address",name:"_toAdd",type:"address"}],name:"addAuthorized",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"allocateSeigniorage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"authorized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"theorist",type:"address"}],name:"canClaimReward",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"theorist",type:"address"}],name:"canWithdraw",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"theorist",type:"address"}],name:"earned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"epoch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"exit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"farm",outputs:[{internalType:"contract IFarm",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"feeStagePercentage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"feeStageTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"game",outputs:[{internalType:"contract IERC20Lockable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentClaimEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentWithdrawEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getGamePrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"theorist",type:"address"}],name:"getLastSnapshotIndexOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLockPercentage",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getWithdrawFeeOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"governanceRecoverUnsupported",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20Lockable",name:"_game",type:"address"},{internalType:"contract IERC20Lockable",name:"_share",type:"address"},{internalType:"contract ITreasury",name:"_treasury",type:"address"},{internalType:"contract IFarm",name:"_farm",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initialized",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isOperator",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"latestSnapshotIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextEpochPoint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"operator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pegMaxUnlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_toRemove",type:"address"}],name:"removeAuthorized",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_time",type:"uint256"}],name:"reviseDeposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_time",type:"uint256"}],name:"reviseWithdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardLockupEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardPerShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"sameBlockFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"_feeStageTime",type:"uint256[]"},{internalType:"uint256[]",name:"_feeStagePercentage",type:"uint256[]"}],name:"setFeeStages",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_withdrawLockupEpochs",type:"uint256"},{internalType:"uint256",name:"_rewardLockupEpochs",type:"uint256"},{internalType:"uint256",name:"_pegMaxUnlock",type:"uint256"}],name:"setLockUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"setSameBlockFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"share",outputs:[{internalType:"contract IERC20Lockable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"theoreticsHistory",outputs:[{internalType:"uint256",name:"time",type:"uint256"},{internalType:"uint256",name:"rewardReceived",type:"uint256"},{internalType:"uint256",name:"rewardPerShare",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"theorists",outputs:[{internalType:"uint256",name:"lastSnapshotIndex",type:"uint256"},{internalType:"uint256",name:"rewardEarned",type:"uint256"},{internalType:"uint256",name:"epochTimerStart",type:"uint256"},{internalType:"uint256",name:"lastDepositBlock",type:"uint256"},{internalType:"uint256",name:"lastWithdrawTime",type:"uint256"},{internalType:"uint256",name:"firstDepositTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOperator_",type:"address"}],name:"transferOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"treasury",outputs:[{internalType:"contract ITreasury",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawLockupEpochs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0x670433FB874d4B7b94CF1D16E95fa241474E6787");e.a=function(){var t=Object(s.useState)(0),e=Object(i.a)(t,2),n=e[0],u=e[1],y=Object(s.useState)(0),o=Object(i.a)(y,2),f=o[0],v=o[1],M=Object(s.useState)(0),w=Object(i.a)(M,2),h=w[0],x=w[1],g=Object(s.useState)(0),_=Object(i.a)(g,2),O=_[0],P=_[1],S=Object(s.useState)(0),j=Object(i.a)(S,2),E=j[0],F=j[1],C=Object(s.useState)(0),k=Object(i.a)(C,2),R=k[0],B=k[1],D=Object(s.useState)(!1),L=Object(i.a)(D,2),G=L[0],A=L[1],I=Object(s.useState)(0),W=Object(i.a)(I,2),z=W[0],U=W[1],J=Object(s.useState)(0),H=Object(i.a)(J,2),N=H[0],q=H[1],K=Object(s.useState)(l.a.from(0)),Q=Object(i.a)(K,2),V=Q[0],X=Q[1],Y=Object(s.useState)(0),Z=Object(i.a)(Y,2),$=Z[0],tt=Z[1],et=Object(s.useState)(0),nt=Object(i.a)(et,2),at=nt[0],it=nt[1],ut=Object(s.useState)(0),pt=Object(i.a)(ut,2),st=pt[0],yt=pt[1],ot=Object(r.a)();function rt(t,e,n){return t=l.a.from(t),e=l.a.from(e),n=l.a.from(n),e.gt(t)?n.lte(t)?l.a.from(0):n.gte(e)?l.a.from(95):n.sub(t).mul(95).div(e.sub(t)):l.a.from(0)}function lt(){return mt.apply(this,arguments)}function mt(){return mt=Object(a.a)(p.a.mark((function t(){var e,n,a,s,y,o,r,f,M,w,h,g,_,O,S;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===ot||void 0===ot?void 0:ot.isUnlocked){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Promise.all([c.methods.getGamePrice().call(),b.methods.balanceOf(d).call(),c.methods.theoreticsGetCurrentWithdrawEpochs().call(),c.methods.theoreticsGetCurrentClaimEpochs().call(),c.methods.theoreticsGetWithdrawFeeOf(ot.myAccount).call(),c.methods.theoreticsGetLockPercentage().call(),c.methods.bootstrapEpochs().call(),c.methods.epoch().call(),c.methods.getRedeemableBonds().call(),c.methods.getBondPremiumRate().call(),c.methods.getGameUpdatedPrice().call(),c.methods.gamePriceCeiling().call(),T.methods.pegMaxUnlock().call()]);case 5:e=t.sent,n=Object(i.a)(e,13),a=n[0],s=n[1],y=n[2],o=n[3],r=n[4],f=n[5],M=n[6],w=n[7],h=n[8],g=n[9],_=n[10],O=n[11],S=n[12],u(+m.utils.fromWei(a)),v(+m.utils.fromWei(s)),x(+y),P(+o),F(+r),B(+f),A(+w>=+M),U(+M-+w),q(+m.utils.fromWei(h)),X(l.a.from(h)),tt(+m.utils.fromWei(g)),it(+m.utils.fromWei(_)),yt(95-+rt(O,S,_));case 33:case"end":return t.stop()}}),t)}))),mt.apply(this,arguments)}return Object(s.useEffect)((function(){lt();var t=setInterval(lt,1e4);return function(){return clearInterval(t)}}),[ot]),{Treasury:c,tombPrice:n,tombAvailable:f,currentWithdrawEpochs:h,currentClaimEpochs:O,currentWithdrawFeeOf:E,rewardsLocked:R,outOfBootstrap:G,bootstrapEpochsLeft:z,maxBondSell:N,maxBondSellBN:V,bondBonus:$,tombPriceUpdated:at,nextRewardsLocked:st}}}}]);
//# sourceMappingURL=2.45709870.chunk.js.map