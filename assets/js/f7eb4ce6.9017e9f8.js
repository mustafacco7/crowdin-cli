"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[7817],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>u});var t=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||i;return r?t.createElement(u,a(a({ref:n},s),{},{components:r})):t.createElement(u,a({ref:n},s))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6871:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(8168),o=(r(6540),r(5680));const i={},a="crowdin project",c={unversionedId:"commands/crowdin-project",id:"commands/crowdin-project",title:"crowdin project",description:"Description",source:"@site/docs/commands/crowdin-project.md",sourceDirName:"commands",slug:"/commands/crowdin-project",permalink:"/crowdin-cli/commands/crowdin-project",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-project.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin config translations",permalink:"/crowdin-cli/commands/crowdin-config-translations"},next:{title:"crowdin project list",permalink:"/crowdin-cli/commands/crowdin-project-list"}},p={},l=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],s={toc:l},d="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"crowdin-project"},"crowdin project"),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Manage projects"),(0,o.yg)("h2",{id:"synopsis"},"Synopsis"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"crowdin project [SUBCOMMAND] [CONFIG OPTIONS] [OPTIONS]\n")),(0,o.yg)("h2",{id:"commands"},"Commands"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"crowdin-project-browse"},(0,o.yg)("strong",{parentName:"a"},"browse")),(0,o.yg)("br",{parentName:"p"}),"\n","Open the current project in the web browser"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"crowdin-project-list"},(0,o.yg)("strong",{parentName:"a"},"list")),(0,o.yg)("br",{parentName:"p"}),"\n","List projects with manager access"),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"--help"),(0,o.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,o.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,o.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,o.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"--version"),(0,o.yg)("br",{parentName:"p"}),"\n","Display version information and exit"))}m.isMDXComponent=!0}}]);