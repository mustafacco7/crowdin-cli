"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[4275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=o,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="crowdin tm list",p={unversionedId:"commands/crowdin-tm-list",id:"commands/crowdin-tm-list",title:"crowdin tm list",description:"Description",source:"@site/docs/commands/crowdin-tm-list.md",sourceDirName:"commands",slug:"/commands/crowdin-tm-list",permalink:"/crowdin-cli/commands/crowdin-tm-list",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/commands/crowdin-tm-list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin tm",permalink:"/crowdin-cli/commands/crowdin-tm"},next:{title:"crowdin tm upload",permalink:"/crowdin-cli/commands/crowdin-tm-upload"}},l={},c=[],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crowdin-tm-list"},"crowdin tm list"),(0,o.kt)("h1",{id:"description"},"Description"),(0,o.kt)("p",null,"Show a list of translation memories"),(0,o.kt)("h1",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crowdin tm list [CONFIG OPTIONS] [OPTIONS]\n")),(0,o.kt)("h1",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),(0,o.kt)("br",{parentName:"p"}),"\n","Show this help message and exit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--plain"),(0,o.kt)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,o.kt)("br",{parentName:"p"}),"\n","Provide more information on the command execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),(0,o.kt)("br",{parentName:"p"}),"\n","Print version information and exit"),(0,o.kt)("h1",{id:"config-options"},"Config Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"))}d.isMDXComponent=!0}}]);