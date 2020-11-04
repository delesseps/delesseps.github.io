(this["webpackJsonpweb-admin"]=this["webpackJsonpweb-admin"]||[]).push([[11],{168:function(e,t,n){"use strict";var r=n(25);function a(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return a=function(){return e},e}var i=n(42).a.div(a());t.a=i},176:function(e,t,n){"use strict";t.a=function(e){return Array.isArray(e)}},178:function(e,t,n){"use strict";var r=n(6),a=n(4),i=n(326),c=n(1),o=n.n(c);t.a=function(e){var t=e.isOpen,n=e.children,s=Object(c.useState)(t),l=Object(r.a)(s,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){var e;return u!==t&&(t?d(t):e=setTimeout((function(){d(t)}),500)),function(){return clearTimeout(e)}}),[t]),Object(a.jsx)(o.a.Suspense,{fallback:Object(a.jsx)(i.a,{open:!0}),children:u&&n})}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.split(" ").map((function(e){return e.charAt(0)})).join("")},a=function(e){return e.replace(/\s/g,"")}},200:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.Editor=3]="Editor",e[e.Admin=5]="Admin"}(r||(r={}));var a=new Map([[r.View,"Viewer"],[r.Editor,"Editor"],[r.Admin,"Owner"]])},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return Q}));var r=n(17),a=n(8),i=n(6),c=n(25),o=n(4),s=n(81),l=n(1),u=n.n(l),d=n(242),b=n(283),j=n(160),f=n(310),p=n(311),m=Object(d.a)((function(e){return Object(b.a)({filterDrawer:{},filterHeading:{padding:e.spacing(2),margin:0,borderBottom:"1px solid",borderBottomColor:e.palette.grey[200]},filters:{padding:e.spacing(2),minHeight:"100%"},filterDrawerContent:{minWidth:250,display:"grid",height:"100%",gridTemplateRows:"auto 1fr auto"},filterDrawerBackdrop:{background:"rgba(0, 0, 0, 0.1)"},filteredCount:{fontSize:"0.8em",color:e.palette.grey[400],marginLeft:e.spacing(1)},filterFooter:{borderTop:"1px solid",borderTopColor:e.palette.grey[200]}})})),h=function(e){var t=e.isOpen,n=e.onClose,r=e.onClearFilters,a=e.children,i=e.topicName,c=e.filteredCount,s=m(),u=Object(l.useCallback)((function(e){r&&r(),n&&n(e,"escapeKeyDown")}),[r,n]),d=Object(l.useCallback)((function(e){n&&n(e,"escapeKeyDown")}),[n]);return Object(o.jsx)(j.a,{anchor:"right",className:s.filterDrawer,open:t,onClose:n,ModalProps:{BackdropProps:{className:s.filterDrawerBackdrop}},children:Object(o.jsxs)("div",{className:s.filterDrawerContent,children:[Object(o.jsxs)("h2",{className:s.filterHeading,children:["Filter ",Object(o.jsxs)("span",{className:s.filteredCount,children:[c," ",null===i||void 0===i?void 0:i.toLowerCase()]})]}),Object(o.jsx)("div",{className:s.filters,children:a}),Object(o.jsx)("div",{className:s.filterFooter,children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(p.a,{size:"large",color:"primary",onClick:u,children:"Clear"}),Object(o.jsx)(p.a,{size:"large",onClick:d,variant:"contained",color:"primary",children:"Apply"})]})})]})})},O=n(215),x=n.n(O),v=n(312),g=n(313),y=n(343),w=n(243),C=n(314),k=n(317),S=n(318),I=n(319),N=n(320),A=n(321),z=n(339),P=n(42),E=n(38),F=function(e){return null==e},M=n(176),T=function(e){return!F(e)&&!Object(M.a)(e)&&function(e){return"object"===typeof e}(e)&&!(e instanceof Date)},R=function(e){return T(e)&&!Object.keys(e).length};function D(){var e=Object(c.a)(["\n  padding: 10px 5px;\n  width: 100%;\n  color: #777;\n  font-weight: normal;\n  display: inline-flex;\n  align-items: center;\n  flex-direction: inherit;\n  justify-content: flex-start;\n"]);return D=function(){return e},e}function L(){var e=Object(c.a)(["\n  cursor: pointer;\n  &:hover {\n    td {\n      background-color: rgba(0, 0, 0, 0.04);\n    }\n  }\n"]);return L=function(){return e},e}function H(){var e=Object(c.a)(["\n  padding: 10px 5px;\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n  font-size: 14px;\n"]);return H=function(){return e},e}function B(){var e=Object(c.a)(["\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n"]);return B=function(){return e},e}function V(){var e=Object(c.a)(["\n  height: 4px;\n"]);return V=function(){return e},e}var W=P.a.div(V()),K=Object(E.a)(B()),J=Object(E.a)(H()),q=Object(E.a)(L()),G=Object(E.a)(D()),U={total:0,current:1,pageSize:10};function Q(e){var t=e.frozenHeader,n=e.height,c=e.columns,d=e.data,b=e.onPaginationChange,j=e.onSortChange,f=e.onRowClick,p=e.pagination,m=e.sort,O=e.filters,P=e.filterable,E=e.isLoading,F=e.rowsPerPageOptions,M=void 0===F?[10,15,20,25]:F,T=e.title,D=e.topic,L=e.onClearFilters,H=Object(l.useState)(m||{}),B=Object(i.a)(H,2),V=B[0],Q=B[1],X=Object(l.useState)(p||U),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],_=Object(l.useState)(!1),ee=Object(i.a)(_,2),te=ee[0],ne=ee[1];Object(l.useEffect)((function(){p&&$(p)}),[p]);var re=Object(l.useCallback)((function(e,t){var n=Object(a.a)(Object(a.a)({},Z),{},{current:t+1});$(n),b&&b(n)}),[Z,b]),ae=Object(l.useCallback)((function(e){var t=Object(a.a)(Object(a.a)({},Z),{},{pageSize:+e.target.value,current:1});$(t),b&&b(t)}),[Z,b]),ie=Object(l.useCallback)((function(e,t){f&&f(e,t)}),[f]),ce=Object(l.useMemo)((function(){return f?q:void 0}),[f]),oe=Object(l.useMemo)((function(){return Object(o.jsx)(v.a,{children:c.map((function(e,t){var n=V[e.dataIndex],a=e.dataIndex;return Object(o.jsx)(g.a,{classes:{root:K},width:e.width,children:e.sortable?Object(o.jsx)(y.a,{className:G,active:!!n,direction:n?"descend"===n?"desc":"asc":void 0,onClick:function(){var e={};"descend"!==n&&(e=Object(r.a)({},a,n?"descend":"ascend")),Q(e),j&&j(e)},children:e.title}):Object(o.jsx)("span",{className:G,children:e.title})},t)}))})}),[c,j,V]),se=Object(l.useMemo)((function(){return null===d||void 0===d?void 0:d.map((function(e,t){return Object(o.jsx)(v.a,{onClick:function(t){ie(e,t)},className:ce,children:c.map((function(t,n){return Object(o.jsx)(g.a,{className:J,children:t.render?t.render(e[t.dataIndex],e,n):e[t.dataIndex]},n)}))},t)}))}),[c,d,ie,ce]),le=Object(l.useMemo)((function(){return c.map((function(e,t){return e.filterComponent&&Object(o.jsx)(u.a.Fragment,{children:e.filterComponent},t)}))}),[c]),ue=Object(l.useMemo)((function(){return!R(O)}),[O]);return Object(o.jsxs)(o.Fragment,{children:[(T||P)&&Object(o.jsxs)(w.a,{variant:"dense",children:[Object(o.jsx)("h2",{children:T}),P&&Object(o.jsx)(C.a,{title:"Filter",children:Object(o.jsx)(k.a,{onClick:function(){ne(!0)},"aria-label":"filter list",color:ue?"primary":void 0,children:Object(o.jsx)(x.a,{})})})]}),Object(o.jsx)(W,{children:E&&Object(o.jsx)(s.a,{})}),Object(o.jsx)(S.a,{style:{maxHeight:n},children:Object(o.jsxs)(I.a,{stickyHeader:t,children:[Object(o.jsx)(N.a,{children:oe}),Object(o.jsx)(A.a,{children:se})]})}),!!p&&Object(o.jsx)(z.a,{rowsPerPageOptions:M,count:p.total,rowsPerPage:p.pageSize,page:p.current-1,onPageChange:re,onRowsPerPageChange:ae}),P&&L&&Object(o.jsx)(h,{filteredCount:(null===p||void 0===p?void 0:p.total)||0,topicName:D,isOpen:te,onClose:function(){return ne(!1)},onClearFilters:L,children:le})]})}},274:function(e,t,n){var r=n(275),a=function(e,t,n){var r=n<.5?n*(1+t):n+t-n*t,a=2*n-r;return[(e/=360)+1/3,e,e-1/3].map((function(e){return e<0&&e++,e>1&&e--,e=e<1/6?a+6*(r-a)*e:e<.5?r:e<2/3?a+6*(r-a)*(2/3-e):a,Math.round(255*e)}))},i=function(e){var t=[(e=e||{}).lightness,e.saturation].map((function(e){return e=e||[.35,.5,.65],"[object Array]"===Object.prototype.toString.call(e)?e.concat():[e]}));this.L=t[0],this.S=t[1],this.hash=e.hash||r};i.prototype.hsl=function(e){var t,n,r=this.hash(e);return t=r%359,r=parseInt(r/360),n=this.S[r%this.S.length],r=parseInt(r/this.S.length),[t,n,this.L[r%this.L.length]]},i.prototype.rgb=function(e){var t=this.hsl(e);return a.apply(this,t)},i.prototype.hex=function(e){return function(e){var t="#";return e.forEach((function(e){e<16&&(t+=0),t+=e.toString(16)})),t}(this.rgb(e))},e.exports=i},275:function(e,t){e.exports=function(e){var t=0;e+="x";for(var n=parseInt(65745979961613.07),r=0;r<e.length;r++)t>n&&(t=parseInt(t/137)),t=131*t+e.charCodeAt(r);return t}},280:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(25),i=n(4),c=n(42),o=n(147),s=n(148),l=n(2),u=n(3),d=n(1),b=n.n(d),j=(n(5),n(7)),f=n(9),p=n(34),m=d.forwardRef((function(e,t){var n=e.classes,r=e.className,a=Object(u.a)(e,["classes","className"]),i=d.useContext(p.a);return d.createElement("div",Object(l.a)({className:Object(j.a)(n.root,r,"flex-start"===i.alignItems&&n.alignItemsFlexStart),ref:t},a))})),h=Object(f.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(m),O=n(98),x=n(167),v=Object(x.a)(d.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var g,y=d.forwardRef((function(e,t){var n=e.alt,a=e.children,i=e.classes,c=e.className,o=e.component,s=void 0===o?"div":o,b=e.imgProps,f=e.sizes,p=e.src,m=e.srcSet,h=e.variant,x=void 0===h?"circular":h,g=Object(u.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=Object(O.a)(Object(l.a)({},e,{component:s,variant:x}),"MuiAvatar"),w=null,C=function(e){var t=e.src,n=e.srcSet,a=d.useState(!1),i=Object(r.a)(a,2),c=i[0],o=i[1];return d.useEffect((function(){if(t||n){o(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&o("loaded")},r.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),c}({src:p,srcSet:m}),k=p||m,S=k&&"error"!==C;return w=S?d.createElement("img",Object(l.a)({alt:n,src:p,srcSet:m,sizes:f,className:i.img},b)):null!=a?a:k&&n?n[0]:d.createElement(v,{className:i.fallback}),d.createElement(s,Object(l.a)({className:Object(j.a)(i.root,i.system,i[x],y,c,!S&&i.colorDefault),ref:t},g),w)})),w=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(y),C=n(150),k=n(334),S=n(346),I=n(327),N=n(168),A=n(204),z=n(38),P=n(54),E=n(200);!function(e){e[e.None=0]="None",e[e.Invited=1]="Invited",e[e.Active=3]="Active"}(g||(g={}));var F=new Map([[g.Invited,"Invited"],[g.Active,"Active"]]),M=new(n(274))({lightness:.45}),T=n(179),R=n(0);function D(e){return Object(R.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}var L=n(178);function H(){var e=Object(a.a)(["\n"]);return H=function(){return e},e}function B(){var e=Object(a.a)(["\n  font-size: 20px;\n"]);return B=function(){return e},e}function V(){var e=Object(a.a)(["\n"]);return V=function(){return e},e}function W(){var e=Object(a.a)(["\n  font-size: 13px;\n  margin-top: 10px;\n  line-height: 1.7em;\n  color: #777;\n"]);return W=function(){return e},e}function K(){var e=Object(a.a)(["\n  padding: 16px;\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n\n  .MuiListItemAvatar-root {\n    min-width: 56px;\n  }\n"]);return K=function(){return e},e}function J(){var e=Object(a.a)(["\n  font-size: 2em;\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n"]);return J=function(){return e},e}var q=b.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,342))})),G=b.a.lazy((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,335))})),U=Object(z.a)(J()),Q=Object(z.a)(K()),X=c.a.div(W()),Y=c.a.div(V()),Z=c.a.div(B()),$=c.a.div(H()),_=[{id:1,name:"Walter White",email:"walter.white@bb.com",mobile:"+61 456 789 012",accessType:E.a.Admin,status:g.Active},{id:2,name:"Saul Goodman",email:"saul.goodman@itsallgoodman.com",mobile:"+61 432 109 876",accessType:E.a.Editor,status:g.Invited},{id:3,name:"Kim Wexler",email:"kim.wexler@wm.com",mobile:"+61 444 555 666",accessType:E.a.View,status:g.Active}],ee=[{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Mobile",dataIndex:"mobile"},{title:"Role",dataIndex:"accessType",render:function(e,t){return E.b.get(e)}},{title:"",dataIndex:"status",render:function(e,t){return F.get(e)}}];t.default=function(){var e=Object(d.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)(!1),l=Object(r.a)(c,2),u=l[0],j=l[1],f=Object(d.useState)(void 0),p=Object(r.a)(f,2),m=p[0],O=p[1],x=function(e){O(e),j(!0)};return Object(i.jsxs)(b.a.Fragment,{children:[Object(i.jsx)(N.a,{style:{display:"none "},children:Object(i.jsx)(A.a,{data:_,columns:ee,onRowClick:x})}),Object(i.jsx)(o.a,{children:_.map((function(e,t){return Object(i.jsxs)(s.a,{button:!0,alignItems:"flex-start",className:Q,onClick:function(){return x(e)},children:[Object(i.jsx)(h,{children:Object(i.jsx)(w,{alt:e.name,style:{backgroundColor:(n=e.name,M.hex(n))},children:Object(T.a)(e.name)})}),Object(i.jsx)(C.a,{children:Object(i.jsxs)(k.a,{container:!0,spacing:2,children:[Object(i.jsxs)(k.a,{item:!0,xs:8,children:[Object(i.jsx)(Z,{children:e.name}),Object(i.jsxs)(X,{children:[Object(i.jsx)(Y,{children:e.email}),Object(i.jsx)($,{children:e.mobile})]})]}),Object(i.jsx)(k.a,{item:!0,xs:4,children:Object(i.jsx)(S.a,{avatar:e.status===g.Invited?Object(i.jsx)(D,{}):void 0,label:E.b.get(e.accessType),variant:e.accessType===E.a.Admin?"filled":"outlined",color:e.accessType===E.a.View?void 0:"primary"})})]})})]},t);var n}))}),Object(i.jsx)(L.a,{isOpen:n,children:Object(i.jsx)(q,{isOpen:n,onClose:function(){a(!1)},onSubmit:function(){a(!1)}})}),!!m&&Object(i.jsx)(L.a,{isOpen:u,children:Object(i.jsx)(G,{accountUser:m,isOpen:u,onClose:function(){O(void 0),j(!1)},onSubmit:function(){O(void 0),j(!1)}})}),Object(i.jsx)(I.a,{"aria-label":"add",color:"primary",className:U,onClick:function(){a(!0)},children:Object(i.jsx)(P.b,{})})]})}}}]);
//# sourceMappingURL=11.c275844a.chunk.js.map