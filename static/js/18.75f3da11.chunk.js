(this["webpackJsonpweb-mui"]=this["webpackJsonpweb-mui"]||[]).push([[18],{320:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="1200px"},352:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return O}));var a=n(23),c=n(0),r=n.n(c),o=n(45),u=n(404),i={steps:[],stepIndex:0,run:!1,continuous:!0,scrollToFirstStep:!0,showProgress:!0,showSkipButton:!0},l=function(e,t){switch(t.type){case"Start":return Object(u.a)(e,(function(e){e.stepIndex=0,e.run=!0}));case"Pause":return Object(u.a)(e,(function(e){e.run=!1}));case"Resume":return Object(u.a)(e,(function(e){e.run=!0}));case"Finish":return Object(u.a)(e,(function(e){e.run=!1,e.stepIndex=0}));case"NextStep":return Object(u.a)(e,(function(t){t.stepIndex=e.stepIndex+(e.run?1:0)}));case"PrevStep":return Object(u.a)(e,(function(t){t.stepIndex=e.stepIndex-(e.run?1:0)}));case"SetStep":return Object(u.a)(e,(function(e){e.stepIndex=t.payload}));case"AssignSteps":return Object(o.a)(Object(o.a)({},e),{},{steps:t.payload});default:return e}},s=n(405),b=300;function d(e){var t=e.onTourChange,n=f(),o=Object(a.a)(n,2),u=o[0],i=o[1],l=u.stepIndex,d=u.steps,p=u.run,O=u.showProgress,m=u.showSkipButton,j=u.continuous,v=u.scrollToFirstStep,h=i.finish,g=i.pause,k=i.resume,y=i.prev,x=i.next,C=Object(c.useCallback)((function(e){t&&t(e),"close"===e.action||"finished"===e.status||"skipped"===e.status?h():p&&"step:after"===e.type&&("next"===e.action?(x(),g(),l!==e.size-1&&setTimeout((function(){k()}),b)):"prev"===e.action&&(y(),g(),setTimeout((function(){k()}),b)))}),[h,x,t,g,y,k,p,l]);return r.a.createElement(s.a,{run:p,stepIndex:l,steps:d,continuous:j,scrollToFirstStep:v,showProgress:O,showSkipButton:m,callback:C})}var p=Object(c.createContext)(void 0),f=function(){return Object(c.useContext)(p)};function O(e){var t=e.children,n=Object(c.useReducer)(l,i),o=Object(a.a)(n,2),u=o[0],s=o[1],b=Object(c.useCallback)((function(){s({type:"Resume"})}),[s]),d=Object(c.useCallback)((function(){s({type:"Pause"})}),[s]),f=Object(c.useCallback)((function(e){s({type:"SetStep",payload:e})}),[s]),O=Object(c.useCallback)((function(){s({type:"Start"})}),[s]),m=Object(c.useCallback)((function(){s({type:"NextStep"})}),[s]),j=Object(c.useCallback)((function(){s({type:"PrevStep"})}),[s]),v=Object(c.useCallback)((function(){s({type:"Finish"})}),[s]),h=Object(c.useCallback)((function(e){s({type:"AssignSteps",payload:e})}),[s]),g=Object(c.useMemo)((function(){return{resume:b,pause:d,start:O,finish:v,assignSteps:h,setStep:f,next:m,prev:j}}),[b,d,O,v,h,f,m,j]);return r.a.createElement(p.Provider,{value:[u,g]},t)}},353:function(e,t,n){"use strict";var a=n(105),c=n(110),r=n(0),o=n.n(r),u=n(296),i=n(3),l=n(302),s=n(320);function b(){var e=Object(a.a)(["\n  flex-grow: 1;\n"]);return b=function(){return e},e}function d(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  max-width: ",";\n"]);return d=function(){return e},e}var p=c.a.div(d(),s.a),f=c.a.div(b());t.a=function(e){var t=e.profileMenu,n=Object(i.g)();return o.a.createElement(p,null,o.a.createElement(f,null,o.a.createElement(l.a,{onClick:function(){n.push("/")}},o.a.createElement(u.d,null))),o.a.createElement("div",null,t))}},451:function(e,t,n){"use strict";n.r(t);var a=n(352),c=n(0),r=n.n(c),o=n(23),u=n(105),i=n(51),l=n(353),s=n(110),b=n(3),d=n(64),p=n(435),f=n(437),O=n(438),m=n(456),j=n(310),v=n(436),h=n(432),g=n(433),k=n(346),y=n(430),x=n(2),C=n(44),S=n(431),E=n(309),P=function(e){e.icon;var t=e.primary,n=e.to,a=e.exact,c=(Object(x.a)(e,["icon","primary","to","exact"]),r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(C.c,Object.assign({exact:a,to:n,innerRef:t},e))}))}),[n,a]));return r.a.createElement(S.a,{button:!0,component:c},r.a.createElement(E.a,{primary:t}))};function w(){var e=Object(u.a)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return w=function(){return e},e}function T(){var e=Object(u.a)(["\n  padding: 20px;\n"]);return T=function(){return e},e}var B=s.a.div(T()),I=s.a.div(w());var z=function(){var e=Object(b.i)().accountId;return r.a.createElement(B,null,r.a.createElement(I,null,"Tasks"),r.a.createElement(y.a,null,r.a.createElement(P,{to:"/account/".concat(e,"/customers"),primary:"Provide Insurance Details"}),r.a.createElement(P,{to:"/account/".concat(e,"/customers"),primary:"Provide Terms of Business for customer Customer Pty Ltd"}),r.a.createElement(P,{to:"/account/".concat(e,"/customers"),primary:"Provide ABN for customer XYZ Pty Ltd"}),r.a.createElement(P,{to:"/account/".concat(e,"/structure"),primary:"Provide trust deed for XYZ Family Trust"})))},A=n(302),F=n(403),M=n(308);var D=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.d)(),i=Object(o.a)(u,2)[1];function l(){c(null)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{"aria-label":"more","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},r.a.createElement(k.c,null)),r.a.createElement(F.a,{anchorEl:n,getContentAnchorEl:null,keepMounted:!0,open:Boolean(n),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(M.a,{onClick:function(){i.start(),l()}},"Show Tour"),r.a.createElement(M.a,{onClick:l},"Profile"),r.a.createElement(M.a,{onClick:l},"Logout")))},R=n(320);function L(){var e=Object(u.a)(["\n  margin: 0 auto;\n  max-width: ",";\n\n  .MuiTabs-indicator {\n    height: 4px;\n  }\n"]);return L=function(){return e},e}function q(){var e=Object(u.a)(["\n  margin: 0 auto;\n  max-width: ",";\n"]);return q=function(){return e},e}function N(){var e=Object(u.a)(["\n  position: relative;\n\n  :before {\n    content: '';\n    position: absolute;\n    top: 44px;\n    left: 0;\n    right: 0;\n    border-bottom: 4px solid #eee;\n  }\n"]);return N=function(){return e},e}function X(){var e=Object(u.a)(["\n  font-size: 1.5em;\n"]);return X=function(){return e},e}function Y(){var e=Object(u.a)(["\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n"]);return Y=function(){return e},e}function J(){var e=Object(u.a)(["\n  font-size: 18px;\n  margin: 0;\n  padding: 16px;\n  font-weight: 400;\n  margin: 0 auto;\n  max-width: ",";\n"]);return J=function(){return e},e}var Z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(5),n.e(14)]).then(n.bind(null,459))})),U=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,454))})),V=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(15)]).then(n.bind(null,460))})),W=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,457))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,450))})),H=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(12),n.e(17)]).then(n.bind(null,449))})),K=s.a.h1(J(),R.a),Q=Object(i.c)(Y()),$=Object(i.c)(X()),_=s.a.div(N()),ee=s.a.div(q(),R.a),te=Object(i.c)(L(),R.a);var ne=function(){var e=Object(b.i)(),t=Object(b.g)(),n=e.tab,u=e.itemId,s=e.accountId,y=r.a.useState(n),x=Object(o.a)(y,2),C=x[0],S=x[1],E=r.a.useState(!1),P=Object(o.a)(E,2),w=P[0],T=P[1],B=r.a.useRef(null),I=Object(a.d)(),A=Object(o.a)(I,2),F=A[0].run,M=A[1],R=M.pause,L=M.setStep,q=M.resume,N=M.assignSteps,X=M.start,Y=Object(b.h)().pathname;r.a.useEffect((function(){T(!1),F&&R()}),[Y,R]);var J=Object(c.useCallback)((function(e){F&&("next"===e.action&&1===e.index&&T(!0),"next"===e.action&&2===e.index&&(T(!1),"customers"!==n&&t.push("/account/".concat(s,"/customers")),R(),L(3),setTimeout((function(){q()}),a.c)),"prev"===e.action&&2===e.index&&T(!1)),F||"paused"!==e.status||2!==e.index||"stop"!==e.action||(L(3),setTimeout((function(){q()}),a.c))}),[s,t,R,q,F,L,n]);function ne(){T(!1)}return Object(c.useEffect)((function(){N([{title:"Welcome to APositive",target:"body",content:"Let's get started by taking a quick look at how Tasks can streamline your application.",disableBeacon:!0,disableOverlayClose:!0,placement:"center",floaterProps:{disableAnimation:!0}},{title:"Tasks Button",target:B.current,content:"Click the button to reveal your application tasks",spotlightClicks:!0,disableBeacon:!0,disableOverlayClose:!0,placement:"top",floaterProps:{disableAnimation:!0}},{title:"Tasks View",target:".MuiDrawer-paper",content:"Click on a specific task and it will take you to the required location",spotlightClicks:!0,spotlightPadding:0,disableBeacon:!0,disableOverlayClose:!0,placement:"left",styles:{options:{zIndex:1e4,overlayColor:"rgba(0, 0, 0, 0.01)"}},floaterProps:{disableAnimation:!0}},{title:"My first Task: Insurance Details",target:'div[aria-label="InsuranceDetails"]',content:"Answer the question here to complete the task",spotlightClicks:!0,disableBeacon:!0,disableOverlayClose:!0,hideFooter:!0,placement:"bottom",floaterProps:{disableAnimation:!0}},{title:"Congratulations!",target:"body",content:"You've finished your first task. This completes the tour.",spotlightClicks:!0,disableBeacon:!0,hideCloseButton:!0,disableOverlayClose:!0,hideBackButton:!0,placement:"center",floaterProps:{disableAnimation:!0}}])}),[N,X]),Object(c.useEffect)((function(){S(n)}),[n,S]),Object(i.d)(r.a.Fragment,null,Object(i.d)(l.a,{profileMenu:Object(i.d)(D,null)}),Object(i.d)(K,null,"Breaking Bad Pty Ltd - Invoice Finance Application"),Object(i.d)(_,null,Object(i.d)(h.a,{value:C},Object(i.d)(g.a,{css:te,variant:"scrollable",scrollButtons:"auto",indicatorColor:"primary",onChange:function(e,n){t.push("/account/".concat(s,"/").concat(n))}},Object(i.d)(p.a,{label:"Business",value:"business"}),Object(i.d)(p.a,{label:"Owners",value:"owners"}),Object(i.d)(p.a,{label:"Customers",value:"customers"}),Object(i.d)(p.a,{label:"Corporate Structure",value:"structure"}),Object(i.d)(p.a,{label:"Directory",value:"directory",onClick:function(e){u&&t.push("/account/".concat(s,"/").concat(n))}}),Object(i.d)(p.a,{label:"Xero",value:"xero"}),Object(i.d)(p.a,{label:"Timesheets",value:"timesheets"}),Object(i.d)(p.a,{label:"Supporting Information",value:"support"}),Object(i.d)(p.a,{label:"Offer",value:"offer"})),Object(i.d)(ee,null,Object(i.d)(v.a,{value:"business"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(Z,null))),Object(i.d)(v.a,{value:"owners"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(V,null))),Object(i.d)(v.a,{value:"customers"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(U,null))),Object(i.d)(v.a,{value:"structure"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(G,null))),Object(i.d)(v.a,{value:"directory"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(W,null))),Object(i.d)(v.a,{value:"xero"}),Object(i.d)(v.a,{value:"timesheets"}),Object(i.d)(v.a,{value:"support"},Object(i.d)(r.a.Suspense,{fallback:Object(i.d)(d.a,null)},Object(i.d)(H,null))),Object(i.d)(v.a,{value:"offer"})))),Object(i.d)(f.a,{badgeContent:12,max:20,color:"primary",css:Q},Object(i.d)(O.a,{"aria-label":"tasks",css:$,onClick:function(){F&&(R(),L(2),setTimeout((function(){q()}),a.c)),T(!0)},ref:B},Object(i.d)(k.b,null))),Object(i.d)(m.a,{mdDown:!0},Object(i.d)(j.a,{anchor:"right",open:w,onClose:ne},Object(i.d)(z,null))),Object(i.d)(m.a,{mdUp:!0},Object(i.d)(j.a,{anchor:"bottom",open:w,onClose:ne},Object(i.d)(z,null))),Object(i.d)(a.a,{onTourChange:J}))};t.default=function(){return r.a.createElement(a.b,null,r.a.createElement(ne,null))}}}]);
//# sourceMappingURL=18.75f3da11.chunk.js.map