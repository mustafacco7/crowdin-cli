"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[8149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,k=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return t?r.createElement(k,p(p({ref:n},m),{},{components:t})):r.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={},p="crowdin string add",o={unversionedId:"commands/crowdin-string-add",id:"commands/crowdin-string-add",title:"crowdin string add",description:"Description",source:"@site/docs/commands/crowdin-string-add.md",sourceDirName:"commands",slug:"/commands/crowdin-string-add",permalink:"/crowdin-cli/commands/crowdin-string-add",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-string-add.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin string list",permalink:"/crowdin-cli/commands/crowdin-string-list"},next:{title:"crowdin string edit",permalink:"/crowdin-cli/commands/crowdin-string-edit"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crowdin-string-add"},"crowdin string add"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Add a new source string"),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"crowdin string add <text> [CONFIG OPTIONS] [OPTIONS]\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"<","text",">"),(0,a.kt)("br",{parentName:"p"}),"\n","Set text for the new source string"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--identifier"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Set an identifier for the new source string"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--max-length"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Set a max. length of the translated text for the new source string"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--context"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Add a context for the new source string"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--file"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a file the new source string should be added to (multiple files\ncould be specified)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--label"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Attach labels to strings (multiple labels can be specified)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--branch"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--hidden"),(0,a.kt)("br",{parentName:"p"}),"\n","Choose whether or not the added strings should be hidden in your Crowdin\nproject"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--one"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Plural form one (singular)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--two"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Plural form two (dual)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--few"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Plural form few (paucal)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--many"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Plural form many"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--zero"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Plural form zero"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),(0,a.kt)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),(0,a.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,a.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,a.kt)("h2",{id:"config-options"},"Config Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Add a new string with the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.home")," key to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/values/strings.xml"),"\nfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'crowdin string add Home --file src/values/strings.xml --identifier "app.home"\n')),(0,a.kt)("p",null,"Add a new string with the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.download")," key to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/values/strings.xml")," file (branch ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'crowdin string add Download --file main/src/values/strings.xml --identifier "app.download"\n')),(0,a.kt)("p",null,"Add a new string with the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.hello")," key to the ",(0,a.kt)("inlineCode",{parentName:"p"},"strings.xml")," file,\nwith labels ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"home"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'crowdin string add "Hello world" --file strings.xml --identifier "app.hello" --label app --label home\n')),(0,a.kt)("p",null,"Add a new plural string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'crowdin string add Cats --file strings.xml --identifier "ui.cats" --one "cat"\n')),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<text>"),' argument is used as the "other" plural\nform.'),(0,a.kt)("p",null,"If your source language contains more plural forms, you can also specify\nthem using the ","`","--two', ","`","--few', ","`","--many' and ","`","--zero' options."))}c.isMDXComponent=!0}}]);