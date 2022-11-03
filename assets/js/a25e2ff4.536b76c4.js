"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"useAnimatedReaction",title:"useAnimatedReaction",sidebar_label:"useAnimatedReaction"},o=void 0,s={unversionedId:"api/hooks/useAnimatedReaction",id:"version-2.5.x/api/hooks/useAnimatedReaction",title:"useAnimatedReaction",description:"useAnimatedReaction hook allows performing certain actions on some shared values' change. The key idea is, all of the shared values included in the first worklet are the inputs set. Every time any of those change both worklets are triggered in the order specified above. Also the second worklet may modify any shared values excluding those used in the first worklet.",source:"@site/versioned_docs/version-2.5.x/api/hooks/useAnimatedReaction.md",sourceDirName:"api/hooks",slug:"/api/hooks/useAnimatedReaction",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedReaction",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"useAnimatedReaction",title:"useAnimatedReaction",sidebar_label:"useAnimatedReaction"},sidebar:"version-2.5.x/docs",previous:{title:"useAnimatedProps",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedProps"},next:{title:"useAnimatedRef",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedRef"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>prepare</code> Function",id:"prepare-function",level:4},{value:"<code>react</code> Function",id:"react-function",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Example",id:"example",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedReaction")," hook allows performing certain actions on some shared values' change. The key idea is, all of the shared values included in the first worklet are the inputs set. Every time any of those change both worklets are triggered in the order specified above. Also the second worklet may modify any shared values excluding those used in the first worklet."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"prepare-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"prepare")," ","[Function]"),(0,r.kt)("p",null,"worklet used for data preparation for the second parameter. It also defines the inputs, in other words on which shared values change will it be called."),(0,r.kt)("h4",{id:"react-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"react")," ","[Function]"),(0,r.kt)("p",null,"worklet which takes data prepared by the ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare")," callback (being the first parameter of the hook) and performs some actions. As a second parameter it receives a result of the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare")," call(starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"). It can modify any shared values but those which are mentioned in the first worklet. Beware of that, because this may result in endless loop and high cpu usage."),(0,r.kt)("h4",{id:"dependencies-array"},(0,r.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,r.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10}","{10}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv1 = useSharedValue(0);\n  const sv2 = useSharedValue(0);\n\n  const derived = useAnimatedReaction(() => {\n    return sv1.value * state;\n  }, (result, previous) => {\n    if (result !== previous) {\n        sv2.value = result - 5;\n    }\n  }, dependencies);\n  //...\n  return <></>\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklets will be rebuilt if there is any change in their bodies or any values from their closure(variables from outer scope used in worklet),"),(0,r.kt)("li",{parentName:"ul"},"empty array(",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),") - worklets will be rebuilt only if their body change,"),(0,r.kt)("li",{parentName:"ul"},"array of values(",(0,r.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklets will be rebuilt if there is any change in thier bodies or any values from the given array.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const x = useSharedValue(0);\nconst x2 = useSharedValue(0);\n\nconst maxX2 = 80;\nuseAnimatedReaction(\n  () => {\n    return x.value / 1.5;\n  },\n  (data) => { // data holds what was returned from the first worklet's execution\n    if (x2.value < maxX2) {\n      x2.value = data;\n    }\n  }\n);\n")))}d.isMDXComponent=!0}}]);