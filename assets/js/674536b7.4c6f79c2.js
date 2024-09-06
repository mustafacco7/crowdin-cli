"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[5933],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>g});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,g=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return r?t.createElement(g,i(i({ref:n},s),{},{components:r})):t.createElement(g,i({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(8168),a=(r(6540),r(5680));const o={},i="crowdin branch",c={unversionedId:"commands/crowdin-branch",id:"commands/crowdin-branch",title:"crowdin branch",description:"Description",source:"@site/docs/commands/crowdin-branch.md",sourceDirName:"commands",slug:"/commands/crowdin-branch",permalink:"/crowdin-cli/commands/crowdin-branch",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-branch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin file delete",permalink:"/crowdin-cli/commands/crowdin-file-delete"},next:{title:"crowdin branch list",permalink:"/crowdin-cli/commands/crowdin-branch-list"}},p={},l=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],s={toc:l},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"crowdin-branch"},"crowdin branch"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Manage branches in a Crowdin project"),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crowdin branch [SUBCOMMAND] [CONFIG OPTIONS] [OPTIONS]\n")),(0,a.yg)("h2",{id:"commands"},"Commands"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-branch-add"},(0,a.yg)("strong",{parentName:"a"},"add")),(0,a.yg)("br",{parentName:"p"}),"\n","Create a new branch"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-branch-clone"},(0,a.yg)("strong",{parentName:"a"},"clone")),(0,a.yg)("br",{parentName:"p"}),"\n","Clone branch"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-branch-delete"},(0,a.yg)("strong",{parentName:"a"},"delete")),(0,a.yg)("br",{parentName:"p"}),"\n","Delete a branch"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-branch-list"},(0,a.yg)("strong",{parentName:"a"},"list")),(0,a.yg)("br",{parentName:"p"}),"\n","List branches in the current project"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-branch-merge"},(0,a.yg)("strong",{parentName:"a"},"merge")),(0,a.yg)("br",{parentName:"p"}),"\n","Merge branches"),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--help"),(0,a.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,a.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,a.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,a.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--version"),(0,a.yg)("br",{parentName:"p"}),"\n","Display version information and exit"))}m.isMDXComponent=!0}}]);