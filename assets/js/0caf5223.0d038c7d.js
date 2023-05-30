"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[3490],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>y});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={},i="crowdin glossary",s={unversionedId:"commands/crowdin-glossary",id:"commands/crowdin-glossary",title:"crowdin glossary",description:"Description",source:"@site/docs/commands/crowdin-glossary.md",sourceDirName:"commands",slug:"/commands/crowdin-glossary",permalink:"/crowdin-cli/commands/crowdin-glossary",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/commands/crowdin-glossary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin bundle add",permalink:"/crowdin-cli/commands/crowdin-bundle-add"},next:{title:"crowdin glossary list",permalink:"/crowdin-cli/commands/crowdin-glossary-list"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crowdin-glossary"},"crowdin glossary"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Manage glossaries"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crowdin glossary [SUBCOMMAND] [CONFIG OPTIONS] [OPTIONS]\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"crowdin-glossary-list"},(0,o.kt)("strong",{parentName:"a"},"list")),(0,o.kt)("br",{parentName:"p"}),"\n","Show a list of glossaries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"crowdin-glossary-upload"},(0,o.kt)("strong",{parentName:"a"},"upload")),(0,o.kt)("br",{parentName:"p"}),"\n","Upload glossary to localization resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"crowdin-glossary-download"},(0,o.kt)("strong",{parentName:"a"},"download")),(0,o.kt)("br",{parentName:"p"}),"\n","Download glossary"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),(0,o.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,o.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),(0,o.kt)("br",{parentName:"p"}),"\n","Display version information and exit"))}m.isMDXComponent=!0}}]);