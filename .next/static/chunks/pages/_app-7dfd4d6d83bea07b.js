(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{6170:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2448)}])},4929:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,O:()=>o});var l=r(4848),n=r(6540),a=r(6715);let s=(0,n.createContext)(),o=e=>{let{children:t}=e,[r,o]=(0,n.useState)(null),u=(0,a.useRouter)();(0,n.useEffect)(()=>{let e=localStorage.getItem("user");e&&o(JSON.parse(e))},[]);let i=e=>{o(e),localStorage.setItem("user",JSON.stringify(e)),u.push("/")};return(0,l.jsx)(s.Provider,{value:{user:r,login:i,signup:e=>{i(e)},logout:()=>{o(null),localStorage.removeItem("user"),u.push("/authpage")}},children:t})},u=()=>(0,n.useContext)(s)},1392:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var l=r(4848),n=r(1106),a=r.n(n),s=r(4929);function o(){let{logout:e}=(0,s.A)();return(0,l.jsx)("nav",{className:"px-6 py-4 shadow-lg",children:(0,l.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,l.jsx)("div",{className:"text-2xl font-bold",children:(0,l.jsx)("a",{href:"/",children:"Logo"})}),(0,l.jsxs)("ul",{className:"flex space-x-6 items-center",children:[(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/server",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"Server Data"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/dummyuser",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"users"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/gallary",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"Gallary"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/todo",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"Todo List"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/about",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"about"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{href:"/contactus",className:"hover:border-b-2 hover:border-teal-600 transition-colors duration-200",children:"contactus"})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{className:"bg-teal-500 hover:bg-teal-600 text-white  px-4 py-2 rounded-lg ",children:(0,l.jsx)("button",{onClick:e,children:"logout"})})})]})]})})}},627:(e,t)=>{"use strict";var r,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return n},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return o},PrefetchCacheEntryStatus:function(){return l},PrefetchKind:function(){return r}});let n="refresh",a="navigate",s="restore",o="server-patch",u="prefetch",i="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(l||(l={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,r)=>{"use strict";function l(e,t,r,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return l}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let l=r(7677),n=r(4848),a=l._(r(6540)),s=r(6847),o=r(7785),u=r(2772),i=r(1278),c=r(6185),d=r(7644),f=r(9258),x=r(6334),p=r(5157),h=r(296),b=r(627),m=r(1903),g=new Set;function v(e,t,r,l,n,a){if(a||(0,o.isLocalURL)(t)){if(!l.bypassPrefetchedCheck&&!a){let n=t+"%"+r+"%"+(void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0);if(g.has(n))return;g.add(n)}(async()=>a?e.prefetch(t,n):e.prefetch(t,r,l))().catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=a.default.forwardRef(function(e,t){let r,l;let{href:u,as:g,children:y,prefetch:N=null,passHref:_,replace:C,shallow:w,scroll:O,locale:P,onClick:E,onMouseEnter:S,onTouchStart:M,legacyBehavior:R=!1,...A}=e;r=y,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let k=a.default.useContext(d.RouterContext),T=a.default.useContext(f.AppRouterContext),I=null!=k?k:T,L=!k,U=!1!==N,D=null===N?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:F,as:H}=a.default.useMemo(()=>{if(!k){let e=j(u);return{href:e,as:g?j(g):e}}let[e,t]=(0,s.resolveHref)(k,u,!0);return{href:e,as:g?(0,s.resolveHref)(k,g):t||e}},[k,u,g]),q=a.default.useRef(F),K=a.default.useRef(H);R&&(l=a.default.Children.only(r));let V=R?l&&"object"==typeof l&&l.ref:t,[G,J,W]=(0,x.useIntersection)({rootMargin:"200px"}),X=a.default.useCallback(e=>{(K.current!==H||q.current!==F)&&(W(),K.current=H,q.current=F),G(e)},[H,F,W,G]),z=(0,m.useMergedRef)(X,V);a.default.useEffect(()=>{I&&J&&U&&v(I,F,H,{locale:P},{kind:D},L)},[H,F,J,P,U,null==k?void 0:k.locale,I,L,D]);let B={ref:z,onClick(e){R||"function"!=typeof E||E(e),R&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,l,n,s,u,i,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==u||u;"beforePopState"in t?t[n?"replace":"push"](r,l,{shallow:s,locale:i,scroll:e}):t[n?"replace":"push"](l||r,{scroll:e})};c?a.default.startTransition(f):f()}(e,I,F,H,C,w,O,P,L)},onMouseEnter(e){R||"function"!=typeof S||S(e),R&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),I&&(U||!L)&&v(I,F,H,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:D},L)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),I&&(U||!L)&&v(I,F,H,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:D},L)}};if((0,i.isAbsoluteUrl)(H))B.href=H;else if(!R||_||"a"===l.type&&!("href"in l.props)){let e=void 0!==P?P:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);B.href=t||(0,h.addBasePath)((0,c.addLocale)(H,e,null==k?void 0:k.defaultLocale))}return R?a.default.cloneElement(l,B):(0,n.jsx)("a",{...A,...B,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let l=r(6540),n=r(4959),a="function"==typeof IntersectionObserver,s=new Map,o=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,i=u||!a,[c,d]=(0,l.useState)(!1),f=(0,l.useRef)(null),x=(0,l.useCallback)(e=>{f.current=e},[]);return(0,l.useEffect)(()=>{if(a){if(i||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:l,observer:n,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},l=o.find(e=>e.root===r.root&&e.margin===r.margin);if(l&&(t=s.get(l)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},o.push(r),s.set(r,t),t}(r);return a.set(e,t),n.observe(e),function(){if(a.delete(e),n.unobserve(e),0===a.size){n.disconnect(),s.delete(l);let e=o.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[i,r,t,c,f.current]),[x,c,(0,l.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let l=r(6540);function n(e,t){let r=(0,l.useRef)(()=>{}),n=(0,l.useRef)(()=>{});return(0,l.useMemo)(()=>e&&t?l=>{null===l?(r.current(),n.current()):(r.current=a(e,l),n.current=a(t,l))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2448:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var l=r(4848),n=r(4929),a=r(1392),s=r(7856);r(4472);let o=e=>{let{Component:t,pageProps:r}=e,{user:o}=(0,n.A)();return o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.A,{}),(0,l.jsx)(t,{...r})]}):(0,l.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,l.jsx)(s.default,{})})},u=e=>{let{Component:t,pageProps:r}=e;return(0,l.jsx)(n.O,{children:(0,l.jsx)(o,{Component:t,pageProps:r})})}},7856:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var l=r(4848),n=r(6540),a=r(4929);let s=e=>{let{toggle:t}=e,[r,s]=(0,n.useState)(""),[o,u]=(0,n.useState)(""),{login:i}=(0,a.A)();return(0,l.jsxs)("div",{className:"w-96 p-8 bg-gray-50 rounded-lg shadow-lg",children:[(0,l.jsx)("h2",{className:"text-2xl text-center font-bold mb-4 text-teal-600",children:"Login"}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),i({email:r,password:o})},className:"space-y-6",children:[(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bxs-user text-xl text-gray-500"}),(0,l.jsx)("input",{type:"email",value:r,onChange:e=>s(e.target.value),required:!0,placeholder:"Email",className:"ml-2 w-full bg-transparent outline-none text-gray-700"})]}),(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bxs-lock-alt text-xl text-gray-500"}),(0,l.jsx)("input",{type:"password",value:o,onChange:e=>u(e.target.value),required:!0,placeholder:"Password",className:"ml-2 w-full bg-transparent outline-none text-gray-700"})]}),(0,l.jsx)("button",{type:"submit",className:"mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-all",children:"Log In"})]}),(0,l.jsxs)("p",{className:"mt-4 text-sm text-gray-600 text-center",children:["Don't have an account?"," ",(0,l.jsx)("b",{className:"text-teal-500 cursor-pointer",onClick:t,children:"Sign up here"})]})]})},o=e=>{let{toggle:t}=e,[r,s]=(0,n.useState)(""),[o,u]=(0,n.useState)(""),[i,c]=(0,n.useState)(""),[d,f]=(0,n.useState)(""),{signup:x}=(0,a.A)();return(0,l.jsxs)("div",{className:"w-96 p-8 bg-gray-50 rounded-lg shadow-lg",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-teal-600 text-center",children:"Sign Up"}),(0,l.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),o!==i){alert("Passwords do not match");return}x({email:r,password:o,username:d})},className:"space-y-6",children:[(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bxs-user text-xl text-gray-500"}),(0,l.jsx)("input",{type:"text",value:d,onChange:e=>f(e.target.value),placeholder:"Username",className:"ml-2 w-full bg-transparent outline-none text-gray-700",required:!0})]}),(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bx-mail-send text-xl text-gray-500"}),(0,l.jsx)("input",{type:"email",value:r,onChange:e=>s(e.target.value),placeholder:"Email",className:"ml-2 w-full bg-transparent outline-none text-gray-700",required:!0})]}),(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bxs-lock-alt text-xl text-gray-500"}),(0,l.jsx)("input",{type:"password",value:o,onChange:e=>u(e.target.value),placeholder:"Password",className:"ml-2 w-full bg-transparent outline-none text-gray-700",required:!0})]}),(0,l.jsxs)("div",{className:"flex items-center border rounded-lg px-3 py-2",children:[(0,l.jsx)("i",{className:"bx bxs-lock-alt text-xl text-gray-500"}),(0,l.jsx)("input",{type:"password",value:i,onChange:e=>c(e.target.value),placeholder:"Confirm Password",className:"ml-2 w-full bg-transparent outline-none text-gray-700",required:!0})]}),(0,l.jsx)("button",{type:"submit",className:"mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-all",onClick:t,children:"Sign Up"})]}),(0,l.jsxs)("p",{className:"mt-4 text-sm text-gray-600 text-center",children:["Already have an account?",(0,l.jsx)("b",{className:"text-teal-500 cursor-pointer ",onClick:t,children:"Log In here"})]})]})};function u(){let[e,t]=(0,n.useState)(!0),r=()=>{t(!e)};return(0,l.jsxs)("div",{className:"relative flex h-screen bg-gradient-to-r from-teal-400 to-teal-600",children:[(0,l.jsx)("div",{className:"absolute inset-y-0 ".concat(e?"left-0":"right-0"," w-1/2 flex items-center justify-center bg-white shadow-xl transition-all duration-700 ease-in-out"),children:(0,l.jsx)("h2",{className:"text-4xl font-bold text-teal-600",children:e?"Welcome to Login":"Welcome to Signup"})}),(0,l.jsx)("div",{className:"absolute inset-y-0 ".concat(e?"right-0":"left-0"," w-1/2 flex items-center justify-center bg-white shadow-xl transition-all duration-700 ease-in-out"),children:(0,l.jsx)("div",{children:e?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s,{toggle:r})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o,{toggle:r})})})})]})}},4472:()=>{},1106:(e,t,r)=>{e.exports=r(6397)},6715:(e,t,r)=>{e.exports=r(8440)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6170),t(8440))),_N_E=e.O()}]);