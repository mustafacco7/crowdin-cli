"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[3914],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>g});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,g=m["".concat(l,".").concat(d)]||m[d]||y[d]||o;return r?t.createElement(g,a(a({ref:n},s),{},{components:r})):t.createElement(g,a({ref:n},s))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5559:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(8168),i=(r(6540),r(5680));const o={},a="crowdin file list",p={unversionedId:"commands/crowdin-file-list",id:"commands/crowdin-file-list",title:"crowdin file list",description:"Description",source:"@site/docs/commands/crowdin-file-list.md",sourceDirName:"commands",slug:"/commands/crowdin-file-list",permalink:"/crowdin-cli/commands/crowdin-file-list",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-file-list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin file",permalink:"/crowdin-cli/commands/crowdin-file"},next:{title:"crowdin file upload",permalink:"/crowdin-cli/commands/crowdin-file-upload"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2}],s={toc:c},m="wrapper";function y(e){let{components:n,...r}=e;return(0,i.yg)(m,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"crowdin-file-list"},"crowdin file list"),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Show a list of source files in the current project"),(0,i.yg)("h2",{id:"synopsis"},"Synopsis"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"crowdin file list [CONFIG OPTIONS] [OPTIONS]\n")),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-b"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--branch"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--tree"),(0,i.yg)("br",{parentName:"p"}),"\n","List contents of directories in a tree-like format"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--version"),(0,i.yg)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--help"),(0,i.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,i.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,i.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,i.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-c"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--config"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,i.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,i.yg)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--identity"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--plain"),(0,i.yg)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,i.yg)("h2",{id:"config-options"},"Config Options"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-T"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--token"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"-i"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,i.yg)("em",{parentName:"p"},"\u2026"),(0,i.yg)("br",{parentName:"p"}),"\n","Numeric ID of the project"))}y.isMDXComponent=!0}}]);