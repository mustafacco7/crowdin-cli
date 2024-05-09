"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[6233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=o,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a="crowdin comment",c={unversionedId:"commands/crowdin-comment",id:"commands/crowdin-comment",title:"crowdin comment",description:"Description",source:"@site/docs/commands/crowdin-comment.md",sourceDirName:"commands",slug:"/commands/crowdin-comment",permalink:"/crowdin-cli/commands/crowdin-comment",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-comment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin tm download",permalink:"/crowdin-cli/commands/crowdin-tm-download"},next:{title:"crowdin comment list",permalink:"/crowdin-cli/commands/crowdin-comment-list"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],l={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crowdin-comment"},"crowdin comment"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Manage string comments in a Crowdin Project"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crowdin comment [SUBCOMMAND] [CONFIG OPTIONS] [OPTIONS]\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"crowdin-comment-list"},(0,o.kt)("strong",{parentName:"a"},"list")),(0,o.kt)("br",{parentName:"p"}),"\n","List comments in a project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"crowdin-comment-resolve"},(0,o.kt)("strong",{parentName:"a"},"resolve")),(0,o.kt)("br",{parentName:"p"}),"\n","Resolve reported issues with source strings or translations"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),(0,o.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,o.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),(0,o.kt)("br",{parentName:"p"}),"\n","Display version information and exit"))}d.isMDXComponent=!0}}]);