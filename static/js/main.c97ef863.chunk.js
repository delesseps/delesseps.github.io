(this["webpackJsonpweb-admin"]=this["webpackJsonpweb-admin"]||[]).push([[3],{112:function(t,e,i){"use strict";i.r(e);var o=i(4),n=i(1),r=i.n(n),a=i(27),d=i.n(a),s=i(8),c=i(81),l=i(25),u=i(87),v=i(42),b=i(159),p=i(49);function h(){var t=Object(l.a)(["\n  "," {\n    flex-grow: 1;\n  }\n"]);return h=function(){return t},t}function j(){var t=Object(l.a)(["\n  "," {\n    display: flex; // Messes with scrolling tabs on mobile when navigation hidden\n  }\n"]);return j=function(){return t},t}var f=v.a.div(j(),p.a.md),m=v.a.main(h(),p.a.md),g=function(t){var e=t.children;return Object(o.jsxs)(f,{children:[Object(o.jsx)(b.a,{mdDown:!0,children:Object(o.jsx)(u.a,{})}),Object(o.jsx)(m,{children:e})]})},O=i(12),x=r.a.lazy((function(){return i.e(14).then(i.bind(null,278))})),y=r.a.lazy((function(){return i.e(13).then(i.bind(null,279))})),k=r.a.lazy((function(){return Promise.all([i.e(0),i.e(1),i.e(2),i.e(7)]).then(i.bind(null,316))})),M=r.a.lazy((function(){return Promise.all([i.e(9),i.e(15)]).then(i.bind(null,307))}));var I=function(){return Object(o.jsx)(g,{children:Object(o.jsx)(r.a.Suspense,{fallback:Object(o.jsx)(c.a,{}),children:Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{exact:!0,path:"/",component:y}),Object(o.jsx)(O.b,{exact:!0,path:"/accounts/:accountId",render:function(t){return Object(o.jsx)(O.a,Object(s.a)({to:"/accounts/".concat(t.match.params.accountId,"/business")},t))}}),Object(o.jsx)(O.b,{path:"/accounts/:accountId/:tab/:itemId?",component:M}),Object(o.jsx)(O.b,{exact:!0,path:"/accounts",component:k}),Object(o.jsx)(O.b,{component:x})]})})})},w=i(96);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=i(156),L=i(161),T=i(155),B=i(52),z=i(47),S=Object(z.a)({key:"a",prefix:!1});var F=function(t){var e=t.children;return Object(o.jsx)(B.a,{value:S,children:e})},R=i(69),A=i(80);var $=function(t){var e=t.error,i=t.resetErrorBoundary;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Something went wrong:"}),Object(o.jsx)("pre",{children:null===e||void 0===e?void 0:e.message}),Object(o.jsx)("button",{onClick:i,children:"Try again"})]})};d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(R.a,{basename:"",children:Object(o.jsx)(C.b,{injectFirst:!0,children:Object(o.jsx)(F,{children:Object(o.jsxs)(L.a,{theme:p.b,children:[Object(o.jsx)(T.a,{}),Object(o.jsx)(A.a,{children:Object(o.jsx)(w.ErrorBoundary,{FallbackComponent:$,children:Object(o.jsx)(I,{})})})]})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},49:function(t,e,i){"use strict";i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return c}));var o=i(17),n=i(8),r=i(65),a={xs:0,smMob:320,lgMob:375,xlMob:430,sm:600,md:960,lg:1280,xl:1920},d=Object.keys(a).reduce((function(t,e){return t[e]="@media (min-width: ".concat(a[e],"px)"),t}),{}),s=Object(r.a)({typography:{fontFamily:["Lato","Arial","sans-serif"].join(","),fontSize:12},breakpoints:{values:a},palette:{background:{default:"#fff"},primary:{main:"#000"},secondary:{main:"#000"}}}),c=Object(r.a)(Object(n.a)(Object(n.a)({},s),{},{components:{MuiCssBaseline:{styleOverrides:{"@global":{}}},MuiFilledInput:{styleOverrides:{root:{backgroundColor:void 0,"&:hover":{backgroundColor:void 0},"&$focused":{backgroundColor:void 0}},input:{padding:void 0}}},MuiFormLabel:{styleOverrides:{root:{padding:void 0,color:void 0,"&$focused":{color:void 0}},filled:{}}},MuiOutlinedInput:{styleOverrides:{root:{position:void 0,borderRadius:void 0}}},MuiInput:{styleOverrides:{underline:{"&:before":{left:void 0,right:void 0,bottom:void 0,content:void 0,position:void 0,transform:void 0,transition:void 0,borderBottom:void 0,pointerEvents:void 0},"&:after":{left:void 0,right:void 0,bottom:void 0,content:void 0,position:void 0,transform:void 0,transition:void 0,borderBottom:void 0,pointerEvents:void 0}},formControl:{"label + &":{marginTop:void 0}}}},MuiInputLabel:{styleOverrides:{root:{transformOrigin:void 0},shrink:{transform:void 0,transformOrigin:void 0},outlined:{pointerEvents:void 0,zIndex:void 0,transform:void 0,"&$shrink":{transform:void 0}},filled:{pointerEvents:void 0,zIndex:void 0,transform:void 0,"&$shrink":{transform:void 0}},formControl:{transform:void 0,top:void 0,left:void 0,position:void 0}}},MuiInputBase:{styleOverrides:{input:{padding:0},multiline:{padding:void 0}}},MuiTabs:{styleOverrides:{root:{}}},MuiTab:{styleOverrides:{root:Object(o.a)({padding:void 0,minWidth:void 0,fontSize:void 0,textTransform:void 0},s.breakpoints.up("sm"),{minWidth:void 0}),textColorInherit:{opacity:void 0,"&$selected":{opacity:void 0}}}},MuiTabPanel:{styleOverrides:{root:{padding:void 0}}},MuiButton:{styleOverrides:{root:{textTransform:void 0,fontSize:void 0},startIcon:{marginRight:void 0},endIcon:{marginLeft:void 0}}},MuiToolbar:{styleOverrides:{dense:{minHeight:void 0},gutters:Object(o.a)({paddingLeft:void 0,paddingRight:void 0},s.breakpoints.up("sm"),{paddingLeft:void 0,paddingRight:void 0})}},MuiAutocomplete:{styleOverrides:{inputRoot:{'&[class*="MuiInput-root"]':{paddingBottom:void 0,"& $input":{padding:void 0},"& $input:first-child":{padding:void 0}},"$hasPopupIcon$hasClearIcon &":{paddingRight:void 0}},option:{minHeight:void 0},listbox:{padding:"4px 0"}}},MuiTableCell:{styleOverrides:{root:{padding:void 0,verticalAlign:void 0,fontFamily:void 0,fontSize:void 0,fontWeight:void 0,lineHeight:void 0,borderBottom:void 0},head:{lineHeight:void 0,color:void 0,fontWeight:void 0},body:{color:void 0},sizeSmall:{padding:void 0},stickyHeader:{backgroundColor:void 0}}},MuiIconButton:{styleOverrides:{root:{color:void 0}}},MuiDropzoneArea:{styleOverrides:{root:{position:void 0,width:void 0,minHeight:void 0,backgroundColor:void 0,border:void 0,borderColor:void 0,borderRadius:void 0,boxSizing:void 0,overflow:void 0},active:{animation:void 0,backgroundImage:void 0,backgroundSize:void 0,border:void 0,borderColor:void 0},invalid:{backgroundImage:void 0,borderColor:void 0},text:{marginBottom:void 0,marginTop:void 0,fontSize:"inherit"},icon:{width:void 0,height:void 0,color:void 0}}},MuiDrawer:{styleOverrides:{paperAnchorDockedLeft:{borderRight:void 0},paperAnchorDockedRight:{borderLeft:void 0},paperAnchorDockedTop:{borderBottom:void 0},paperAnchorDockedBottom:{borderTop:void 0}}},MuiList:{styleOverrides:{padding:{paddingTop:void 0,paddingBottom:void 0}}},MuiListItem:{styleOverrides:{root:{paddingTop:void 0,paddingBottom:void 0},gutters:{paddingLeft:void 0,paddingRight:void 0}}},MuiListItemText:{styleOverrides:{root:{marginTop:void 0,marginBottom:void 0},multiline:{marginTop:void 0,marginBottom:void 0}}},MuiListItemIcon:{styleOverrides:{root:{color:void 0,minWidth:void 0}}},MuiDivider:{styleOverrides:{inset:{marginLeft:void 0}}},MuiListItemAvatar:{styleOverrides:{root:{minWidth:void 0},alignItemsFlexStart:{marginTop:void 0}}},MuiChip:{styleOverrides:{root:{fontSize:void 0,"& $avatarColorPrimary":{color:"inherit",backgroundColor:"inherit"},"& $avatar":{color:void 0,height:"16px",width:"16px",fontSize:void 0},outlined:{"& $avatar":{marginLeft:void 0}}}}},MuiDialog:{styleOverrides:{paper:{margin:void 0}}},MuiDialogActions:{styleOverrides:{root:{padding:"16px 24px"}}},MuiCheckbox:{styleOverrides:{root:{padding:"6px"}}},MuiFormControlLabel:{styleOverrides:{root:{marginLeft:void 0,marginRight:void 0},labelPlacementTop:{marginLeft:void 0}}},MuiSwitch:{styleOverrides:{root:{width:"54px",height:"32px",padding:"4px"},switchBase:{padding:"6px 7px"},track:{borderRadius:"12px"}}},MuiBackdrop:{styleOverrides:{root:{backgroundColor:"rgba(0, 0, 0, 0.33)"}}}}}))},81:function(t,e,i){"use strict";var o=i(4),n=i(1),r=i(141),a=i(6),d=function(t){var e=Object(n.useState)(!0),i=Object(a.a)(e,2),o=i[0],r=i[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return r(!1)}),t);return function(){return clearTimeout(e)}}),[t]),function(t){return!o&&t()}};e.a=function(t){var e=t.delay;return d(void 0===e?300:e)((function(){return Object(o.jsx)(r.a,{})}))}},87:function(t,e,i){"use strict";var o=i(22),n=i(6),r=i(25),a=i(4),d=i(38),s=i(1),c=i.n(s),l=i(160),u=i(147),v=i(148),b=i(149),p=i(150),h=i(153),j=i(151),f=i(152),m=i(92),g=i(54),O=i(93),x=i(91),y=function(){return[{path:"/",icon:Object(a.jsx)(x.a,{}),label:"Dashboard"},{path:"/accounts",icon:Object(a.jsx)(g.a,{}),label:"Accounts"},{path:"/entities",icon:Object(a.jsx)(g.c,{}),label:"Entities",subFeatures:[{path:"/entities/people",label:"People"},{path:"/entities/companies",label:"Companies"},{path:"/entities/trusts",label:"Trusts"}]},{path:"/users",icon:Object(a.jsx)(m.a,{}),label:"Users"},{path:"/reports",icon:Object(a.jsx)(O.a,{}),label:"Reports",subFeatures:[{path:"/reports/invoiceverification",label:"Invoice Verification"},{path:"/reports/exceptions",label:"Exceptions"}]},{path:"/settings",icon:Object(a.jsx)(g.f,{}),label:"Settings",subFeatures:[{path:"/settings/administrators",label:"Administrators"},{path:"/settings/referrers",label:"Referrers"},{path:"/settings/permissions",label:"Permissions"},{path:"/settings/integrations",label:"Integrations"}]}]},k=i(12),M=i(42);function I(){var t=Object(r.a)(["\n  min-width: 32px;\n  font-size: 16px;\n"]);return I=function(){return t},t}function w(){var t=Object(r.a)(["\n  :after {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    z-index: 1;\n    position: absolute;\n    border-right: 4px solid;\n    border-right-color: #000;\n  }\n"]);return w=function(){return t},t}function C(){var t=Object(r.a)(["\n  padding: 10px 16px;\n"]);return C=function(){return t},t}function L(){var t=Object(r.a)(["\n  padding: 10px 0;\n"]);return L=function(){return t},t}function T(){var t=Object(r.a)(["\n  width: 200px;\n  \n  &:after {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    position: absolute;\n    border-right: 1px solid;\n    border-right-color: rgba(0, 0, 0, 0.12);\n  }\n"]);return T=function(){return t},t}function B(){var t=Object(r.a)(["\n  width: 200px;\n  flex-shrink: 0;\n"]);return B=function(){return t},t}function z(){var t=Object(r.a)(["\n  text-transform: lowercase;\n  font-size: 12px;\n  position: absolute;\n  top: 31px;\n  left: 145px;\n"]);return z=function(){return t},t}function S(){var t=Object(r.a)(["\n  height: 45px;\n  filter: contrast(6) grayscale(100%);\n  position: relative;\n  left: 20px;\n"]);return S=function(){return t},t}var F=M.a.img(S()),R=M.a.span(z()),A=Object(d.a)(B()),$=Object(d.a)(T()),D=Object(d.a)(L()),E=Object(d.a)(C()),P=Object(d.a)(w()),W=Object(d.a)(I());e.a=function(){var t=Object(k.h)().pathname,e=Object(k.g)().push,i=Object(s.useMemo)((function(){return y()}),[]),r=Object(s.useState)([]),d=Object(n.a)(r,2),m=d[0],g=d[1],O=Object(s.useState)({}),x=Object(n.a)(O,2),M=x[0],I=x[1];c.a.useEffect((function(){var e,n=i.findIndex((function(e){return"/"===e.path?t===e.path:t.startsWith(e.path)})),r=n>-1&&i[n].subFeatures?null===(e=i[n].subFeatures)||void 0===e?void 0:e.findIndex((function(e){return t===e.path})):void 0;I({firstLevel:n,secondLevel:r}),n>-1&&void 0!==r&&r>-1&&-1===m.indexOf(n)&&g([].concat(Object(o.a)(m),[n]))}),[i,t]);var w=Object(s.useCallback)((function(t){var e=m.indexOf(t);m.includes(t)?g(m.slice(0,e).concat(m.slice(e+1))):g([].concat(Object(o.a)(m),[t]))}),[m]),C=function(t,i,o){e(t)};return Object(a.jsxs)(l.a,{className:A,variant:"permanent",classes:{paper:$},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(F,{src:"https://static.apos-test.com.au/client-au/logo.png",alt:"APositive"}),Object(a.jsx)(R,{children:"Noir"})]}),Object(a.jsx)(u.a,{disablePadding:!0,className:D,children:i.map((function(t,e){var i=t.path,o=t.icon,n=t.label,r=t.subFeatures;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)(v.a,{button:!0,classes:{root:E,selected:P},onClick:function(){return r?w(e):C(i)},selected:M.firstLevel===e&&void 0===M.secondLevel,children:[Object(a.jsx)(b.a,{className:W,children:!!o&&o}),Object(a.jsx)(p.a,{primary:n}),!!r&&(m.includes(e)?Object(a.jsx)(j.a,{}):Object(a.jsx)(f.a,{}))]}),!!r&&Object(a.jsx)(h.a,{in:m.includes(e),children:Object(a.jsx)(u.a,{disablePadding:!0,children:r.map((function(t,i){var o=t.path,n=t.label;return Object(a.jsxs)(v.a,{button:!0,classes:{root:E,selected:P},onClick:function(){return C(o)},selected:M.firstLevel===e&&M.secondLevel===i,children:[Object(a.jsx)(b.a,{className:W}),Object(a.jsx)(p.a,{primary:n})]},i)}))})})]},e)}))})]})}}},[[112,4,5]]]);
//# sourceMappingURL=main.c97ef863.chunk.js.map