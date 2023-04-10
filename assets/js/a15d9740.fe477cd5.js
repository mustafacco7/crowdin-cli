"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[7380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="crowdin string edit",p={unversionedId:"commands/crowdin-string-edit",id:"commands/crowdin-string-edit",title:"crowdin string edit",description:"Description",source:"@site/docs/commands/crowdin-string-edit.md",sourceDirName:"commands",slug:"/commands/crowdin-string-edit",permalink:"/crowdin-cli/commands/crowdin-string-edit",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/commands/crowdin-string-edit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin string add",permalink:"/crowdin-cli/commands/crowdin-string-add"},next:{title:"crowdin string delete",permalink:"/crowdin-cli/commands/crowdin-string-delete"}},l={},c=[],m={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crowdin-string-edit"},"crowdin string edit"),(0,i.kt)("h1",{id:"description"},"Description"),(0,i.kt)("p",null,"Edit existing source string"),(0,i.kt)("h1",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"crowdin string edit [CONFIG OPTIONS] [OPTIONS]\n")),(0,i.kt)("h1",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--context"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Set new context for source string"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--help"),(0,i.kt)("br",{parentName:"p"}),"\n","Show this help message and exit"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--[no-]hidden"),(0,i.kt)("br",{parentName:"p"}),"\n","Change the visibility of the source string"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--id"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Numeric string identifier (get via 'crowdin string list')"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--identifier"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","String identifier"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--label"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Attach labels to strings (multiple labels could be specified)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--max-length"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Set a new max. length of the translated text for the source string"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,i.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,i.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--text"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify new text for the source string"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,i.kt)("br",{parentName:"p"}),"\n","Provide more information on the command execution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--version"),(0,i.kt)("br",{parentName:"p"}),"\n","Print version information and exit"),(0,i.kt)("h1",{id:"config-options"},"Config Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Numerical ID of the project"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"))}s.isMDXComponent=!0}}]);