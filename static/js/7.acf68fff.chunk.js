(this["webpackJsonpweb-admin"]=this["webpackJsonpweb-admin"]||[]).push([[7],{157:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(2),r=t(1),o=t.n(r),i=t(80);function c(e,n){var t=function(t,r){return o.a.createElement(i.a,Object(a.a)({"data-testid":"".concat(n,"Icon"),ref:r},t),e)};return t.muiName=i.a.muiName,o.a.memo(o.a.forwardRef(t))}},158:function(e,n,t){"use strict";var a=t(23);function r(){var e=Object(a.a)(["\n  padding: 16px;\n"]);return r=function(){return e},e}var o=t(38).a.div(r());n.a=o},161:function(e,n,t){"use strict";var a=t(7),r=t(71),o=t(23),i=t(156),c=t(302),l=t(309),u=t(35),s=t(1),d=t.n(s);function m(){var e=Object(o.a)(["\n  .MuiFormLabel-root {\n    font-size: 11px;\n    color: #777;\n    /* text-transform: uppercase; */\n    line-height: 2em;\n  }\n  .MuiInput-root {\n    background-color: #eee;\n  }\n  .MuiInput-input {\n    padding: 6px 5px;\n    font-size: 14px;\n  }\n"]);return m=function(){return e},e}var p=Object(u.a)(m());n.a=function(e){var n=e.name,t=e.control,o=e.error,u=e.rules,s=e.label,m=e.placeholder,f=e.creatable,b=e.getOptionLabel,v=void 0===b?function(e){return(null===e||void 0===e?void 0:e.label)||""}:b,g=e.disableClearable,O=e.renderOption,h=e.autoFocus,j=e.options;return d.a.createElement(i.a,{control:t,name:n,rules:u,render:function(e){var n=e.onChange,t=e.onBlur,i=e.value,u=e.name;return d.a.createElement(c.a,{id:u,autoHighlight:!0,disableClearable:g,options:j,getOptionSelected:function(e,n){return!!n&&e.value===n.value},renderOption:O,selectOnFocus:f,clearOnBlur:f,getOptionLabel:v,value:i,onChange:function(e,t){return n(t)},onBlur:t,renderInput:function(e){var n,t=e.InputLabelProps,i=e.InputProps,c=Object(r.a)(e,["InputLabelProps","InputProps"]);return d.a.createElement(l.a,Object.assign({autoFocus:h,className:p,label:s,error:!!o,InputLabelProps:Object(a.a)({shrink:!0},t),InputProps:Object(a.a)({placeholder:m},i),helperText:null!==(n=null===o||void 0===o?void 0:o.message)&&void 0!==n?n:""},c))}})}})}},162:function(e,n,t){"use strict";var a=t(23),r=t(156),o=t(309),i=t(35),c=t(1),l=t.n(c);function u(){var e=Object(a.a)(["\n  .MuiFormLabel-root {\n    font-size: 11px;\n    color: #777;\n    /* text-transform: uppercase; */\n    line-height: 2em;\n  }\n  .MuiInput-root {\n    background-color: #eee;\n  }\n  .MuiInput-input {\n    padding: 6px 5px;\n    font-size: 14px;\n  }\n"]);return u=function(){return e},e}var s=Object(i.a)(u());n.a=function(e){var n=e.id,t=e.name,a=e.control,i=e.label,c=e.error,u=e.rules,d=e.multiline,m=e.minRows,p=e.placeholder,f=e.disabled,b=e.autoFocus,v=e.transform;return l.a.createElement(r.a,{control:a,name:t,rules:u,render:function(e){var t,a=e.onChange,r=e.onBlur,u=e.value,g=e.name;return l.a.createElement(o.a,{id:n||g,fullWidth:!0,autoFocus:b,className:s,multiline:d,minRows:m,label:i,placeholder:p,onChange:function(e){a(v?v(e.target.value):e.target.value)},onBlur:r,value:u,error:!!c,InputLabelProps:{shrink:!0},helperText:null!==(t=null===c||void 0===c?void 0:c.message)&&void 0!==t?t:"",disabled:f})}})}},165:function(e,n,t){"use strict";var a=t(23),r=t(38),o=t(1),i=t.n(o);function c(){var e=Object(a.a)(["\n\n  @media (min-width: 600px) {\n    border: 2px solid rgba(0,0,0,0.12);\n    padding: 16px;\n  }\n  @media (max-width: 599.95px) {\n    /* padding: 0 0 16px 0; */\n    padding: 0;\n    /* border-bottom: 2px solid rgba(0,0,0,0.12); */\n  }\n"]);return c=function(){return e},e}function l(){var e=Object(a.a)(["\n  display: flex;\n"]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n  font-size: 20px;\n  margin-bottom: 16px;\n  flex-grow: 1;\n"]);return u=function(){return e},e}var s=r.a.div(u()),d=r.a.div(l()),m=r.a.div(c());n.a=function(e){var n=e.children,t=e.title,a=e.ariaLabel;return i.a.createElement(m,{"aria-label":a},t&&i.a.createElement(d,null,i.a.createElement(s,null,t)),n)}},171:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r})),function(e){e[e.None=0]="None",e[e.InvoiceFinance=1]="InvoiceFinance",e[e.Instalments=3]="Instalments"}(a||(a={}));var r=new Map([[a.InvoiceFinance,"Invoice Finance"],[a.Instalments,"Instalments"]])},173:function(e,n,t){"use strict";var a=t(1),r=t(157);n.a=Object(r.a)(a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},174:function(e,n,t){"use strict";var a=t(1),r=t(157);n.a=Object(r.a)(a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return G}));var a=t(16),r=t(7),o=t(5),i=t(23),c=t(75),l=t(1),u=t.n(l),s=t(269),d=t(304),m=t(154),p=t(270),f=t(271),b=Object(s.a)((function(e){return Object(d.a)({filterDrawer:{},filterHeading:{padding:e.spacing(2),margin:0,borderBottom:"1px solid",borderBottomColor:e.palette.grey[200]},filters:{padding:e.spacing(2),minHeight:"100%"},filterDrawerContent:{minWidth:250,display:"grid",height:"100%",gridTemplateRows:"auto 1fr auto"},filterDrawerBackdrop:{background:"rgba(0, 0, 0, 0.1)"},filteredCount:{fontSize:"0.8em",color:e.palette.grey[400],marginLeft:e.spacing(1)},filterFooter:{borderTop:"1px solid",borderTopColor:e.palette.grey[200]}})})),v=function(e){var n=e.isOpen,t=e.onClose,a=e.onClearFilters,r=e.children,o=e.topicName,i=e.filteredCount,c=b(),s=Object(l.useCallback)((function(e){a&&a(),t&&t(e,"escapeKeyDown")}),[a,t]),d=Object(l.useCallback)((function(e){t&&t(e,"escapeKeyDown")}),[t]);return u.a.createElement(m.a,{anchor:"right",className:c.filterDrawer,open:n,onClose:t,ModalProps:{BackdropProps:{className:c.filterDrawerBackdrop}}},u.a.createElement("div",{className:c.filterDrawerContent},u.a.createElement("h2",{className:c.filterHeading},"Filter ",u.a.createElement("span",{className:c.filteredCount},i," ",null===o||void 0===o?void 0:o.toLowerCase())),u.a.createElement("div",{className:c.filters},r),u.a.createElement("div",{className:c.filterFooter},u.a.createElement(p.a,null,u.a.createElement(f.a,{size:"large",color:"primary",onClick:s},"Clear"),u.a.createElement(f.a,{size:"large",onClick:d,variant:"contained",color:"primary"},"Apply")))))},g=t(186),O=t.n(g),h=t(272),j=t(273),E=t(305),x=t(274),C=t(275),w=t(278),y=t(279),k=t(280),I=t(281),N=t(282),F=t(299),P=t(38),M=t(35),z=function(e){return null==e},L=function(e){return Array.isArray(e)},S=function(e){return!z(e)&&!L(e)&&function(e){return"object"===typeof e}(e)&&!(e instanceof Date)},B=function(e){return S(e)&&!Object.keys(e).length};function R(){var e=Object(i.a)(["\n  padding: 10px 5px;\n  width: 100%;\n  color: #777;\n  font-weight: normal;\n  display: inline-flex;\n  align-items: center;\n  flex-direction: inherit;\n  justify-content: flex-start;\n"]);return R=function(){return e},e}function D(){var e=Object(i.a)(["\n  cursor: pointer;\n  &:hover {\n    td {\n      background-color: rgba(0, 0, 0, 0.04);\n    }\n  }\n"]);return D=function(){return e},e}function T(){var e=Object(i.a)(["\n  padding: 10px 5px;\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n  font-size: 14px;\n"]);return T=function(){return e},e}function A(){var e=Object(i.a)(["\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n"]);return A=function(){return e},e}function H(){var e=Object(i.a)(["\n  height: 4px;\n"]);return H=function(){return e},e}var K=P.a.div(H()),q=Object(M.a)(A()),J=Object(M.a)(T()),V=Object(M.a)(D()),W=Object(M.a)(R()),U={total:0,current:1,pageSize:10};function G(e){var n=e.frozenHeader,t=e.height,i=e.columns,s=e.data,d=e.onPaginationChange,m=e.onSortChange,p=e.onRowClick,f=e.pagination,b=e.sort,g=e.filters,P=e.filterable,M=e.isLoading,z=e.rowsPerPageOptions,L=void 0===z?[10,15,20,25]:z,S=e.title,R=e.topic,D=e.onClearFilters,T=Object(l.useState)(b||{}),A=Object(o.a)(T,2),H=A[0],G=A[1],Q=Object(l.useState)(f||U),X=Object(o.a)(Q,2),Y=X[0],Z=X[1],$=Object(l.useState)(!1),_=Object(o.a)($,2),ee=_[0],ne=_[1];Object(l.useEffect)((function(){f&&Z(f)}),[f]);var te=Object(l.useCallback)((function(e,n){var t=Object(r.a)(Object(r.a)({},Y),{},{current:n+1});Z(t),d&&d(t)}),[Y,d]),ae=Object(l.useCallback)((function(e){var n=Object(r.a)(Object(r.a)({},Y),{},{pageSize:+e.target.value,current:1});Z(n),d&&d(n)}),[Y,d]),re=Object(l.useCallback)((function(e,n){p&&p(e,n)}),[p]),oe=Object(l.useMemo)((function(){return p?V:void 0}),[p]),ie=Object(l.useMemo)((function(){return u.a.createElement(h.a,null,i.map((function(e,n){var t=H[e.dataIndex],r=e.dataIndex;return u.a.createElement(j.a,{classes:{root:q},width:e.width,key:n},e.sortable?u.a.createElement(E.a,{className:W,active:!!t,direction:t?"descend"===t?"desc":"asc":void 0,onClick:function(){var e={};"descend"!==t&&(e=Object(a.a)({},r,t?"descend":"ascend")),G(e),m&&m(e)}},e.title):u.a.createElement("span",{className:W},e.title))})))}),[i,m,H]),ce=Object(l.useMemo)((function(){return null===s||void 0===s?void 0:s.map((function(e,n){return u.a.createElement(h.a,{key:n,onClick:function(n){re(e,n)},className:oe},i.map((function(n,t){return u.a.createElement(j.a,{className:J,key:t},n.render?n.render(e[n.dataIndex],e,t):e[n.dataIndex])})))}))}),[i,s,re,oe]),le=Object(l.useMemo)((function(){return i.map((function(e,n){return e.filterComponent&&u.a.createElement(u.a.Fragment,{key:n},e.filterComponent)}))}),[i]),ue=Object(l.useMemo)((function(){return!B(g)}),[g]);return u.a.createElement(u.a.Fragment,null,(S||P)&&u.a.createElement(x.a,{variant:"dense"},u.a.createElement("h2",null,S),P&&u.a.createElement(C.a,{title:"Filter"},u.a.createElement(w.a,{onClick:function(){ne(!0)},"aria-label":"filter list",color:ue?"primary":void 0},u.a.createElement(O.a,null)))),u.a.createElement(K,null,M&&u.a.createElement(c.a,null)),u.a.createElement(y.a,{style:{maxHeight:t}},u.a.createElement(k.a,{stickyHeader:n},u.a.createElement(I.a,null,ie),u.a.createElement(N.a,null,ce))),!!f&&u.a.createElement(F.a,{rowsPerPageOptions:L,count:f.total,rowsPerPage:f.pageSize,page:f.current-1,onPageChange:te,onRowsPerPageChange:ae}),P&&D&&u.a.createElement(v,{filteredCount:(null===f||void 0===f?void 0:f.total)||0,topicName:R,isOpen:ee,onClose:function(){return ne(!1)},onClearFilters:D},le))}},303:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(23),o=t(158),i=t(179),c=t(165),l=t(1),u=t.n(l),s=t(38),d=t(35),m=t(294),p=t(50),f=t(26),b=t(14),v=t(148),g=t(290),O=t(291),h=t(292),j=t(293),E=t(270),x=t(271),C=t(161),w=t(162),y=t(156),k=t(44),I=t(171);function N(){var e=Object(r.a)(["\n  "," {\n    width: 100%\n  }\n  "," {\n    min-width: 500px;\n    width: unset\n  }\n"]);return N=function(){return e},e}var F=Object(d.a)(N(),k.a.xs,k.a.xlMob),P={Name:""},M=Object(f.a)(I.b.entries()).map((function(e){var n=Object(a.a)(e,2),t=n[0];return{label:n[1],value:t}}));var z=function(e){var n=e.isOpen,t=e.onClose,a=e.onSubmit,r=Object(b.a)(),o=Object(v.a)(r.breakpoints.down("xlMob")),i=Object(y.b)({defaultValues:P,mode:"onChange"}),c=i.handleSubmit,l=i.control,s=i.getValues;function d(){t()}return u.a.createElement(g.a,{fullScreen:o,open:n,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},u.a.createElement(O.a,{id:"alert-dialog-title"},"New Account"),u.a.createElement(h.a,{className:F},u.a.createElement("form",{onSubmit:c((function(){}))},u.a.createElement(j.a,{container:!0,spacing:2},u.a.createElement(j.a,{item:!0,xs:12},u.a.createElement(C.a,{name:"AccountType",autoFocus:!0,control:l,label:"Type",options:M,rules:{required:"Required"}})),u.a.createElement(j.a,{item:!0,xs:12},u.a.createElement(w.a,{name:"Name",control:l,label:"Name",rules:{required:"Required"}}))))),u.a.createElement(E.a,null,u.a.createElement(x.a,{onClick:d},"Cancel"),u.a.createElement(x.a,{variant:"contained",onClick:function(){a(s())}},"OK")))},L=t(11);function S(){var e=Object(r.a)(["\n  font-size: 2em;\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n"]);return S=function(){return e},e}function B(){var e=Object(r.a)(["\n  width: 48px;\n  vertical-align: bottom;\n"]);return B=function(){return e},e}var R=s.a.img(B()),D=[{title:"",dataIndex:"avatar",width:100,render:function(e,n){return u.a.createElement(R,{src:"/avatars/".concat(e),alt:n.name})}},{title:"Name",dataIndex:"name"},{title:"Type",dataIndex:"type",width:200,render:function(e,n){return I.b.get(e)}}],T=Object(d.a)(S());n.default=function(){var e=Object(L.g)().push,n=u.a.useState(!1),t=Object(a.a)(n,2),r=t[0],l=t[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.a,null,u.a.createElement(c.a,{title:"Accounts"},u.a.createElement(i.a,{height:720,frozenHeader:!0,data:[{id:1,avatar:"marvel.png",name:"Marvel Cinematic Universe",type:1},{id:2,avatar:"amc.jpg",name:"Breaking Bad",type:1},{id:3,avatar:"black-noir.jpg",name:"The Boys",type:3}],columns:D,onRowClick:function(n){e("/accounts/".concat(n.id))}}))),u.a.createElement(z,{isOpen:r,onClose:function(){l(!1)},onSubmit:function(){l(!1),e("/accounts/4")}}),u.a.createElement(m.a,{"aria-label":"add",color:"primary",className:T,onClick:function(){l(!0)}},u.a.createElement(p.b,null)))}}}]);
//# sourceMappingURL=7.acf68fff.chunk.js.map