"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[4746],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>u});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),s=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,u=d["".concat(l,".").concat(m)]||d[m]||y[m]||a;return r?o.createElement(u,i(i({ref:n},c),{},{components:r})):o.createElement(u,i({ref:n},c))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7615:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(8168),t=(r(6540),r(5680));const a={},i="crowdin download sources",p={unversionedId:"commands/crowdin-download-sources",id:"commands/crowdin-download-sources",title:"crowdin download sources",description:"Description",source:"@site/docs/commands/crowdin-download-sources.md",sourceDirName:"commands",slug:"/commands/crowdin-download-sources",permalink:"/crowdin-cli/commands/crowdin-download-sources",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-download-sources.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin download translations",permalink:"/crowdin-cli/commands/crowdin-download-translations"},next:{title:"crowdin status",permalink:"/crowdin-cli/commands/crowdin-status"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Notes",id:"notes",level:2}],c={toc:s},d="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(d,(0,o.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"crowdin-download-sources"},"crowdin download sources"),(0,t.yg)("h2",{id:"description"},"Description"),(0,t.yg)("p",null,"Download sources from Crowdin to the specified place"),(0,t.yg)("h2",{id:"synopsis"},"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"crowdin (download|pull) sources [CONFIG OPTIONS] [OPTIONS]\n")),(0,t.yg)("h2",{id:"options"},"Options"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-b"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--branch"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--reviewed"),(0,t.yg)("br",{parentName:"p"}),"\n","Download only reviewed sources (Crowdin Enterprise only)"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--version"),(0,t.yg)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--help"),(0,t.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,t.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,t.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,t.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-c"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--config"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--identity"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--plain"),(0,t.yg)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--dryrun"),(0,t.yg)("br",{parentName:"p"}),"\n","Print a command output without execution"),(0,t.yg)("h2",{id:"config-options"},"Config Options"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-T"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--token"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-i"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-s"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--source"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Path to the source files"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-t"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--translation"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Path to the translation files"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--dest"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify file name in Crowdin"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--[no-]preserve-hierarchy"),(0,t.yg)("br",{parentName:"p"}),"\n","Choose whether to save the directory hierarchy in the Crowdin project"),(0,t.yg)("h2",{id:"notes"},"Notes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"This command relies on the source files and folder structure in\nCrowdin and will download them to the same structure locally. If\nyou\u2019re using the ",(0,t.yg)("inlineCode",{parentName:"li"},"preserve_hierarchy")," option as ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),", it may skip\ndirectories when uploading sources to Crowdin and as a result the\ndownloaded sources may be placed in a different location than the\noriginal ones. It\u2019s highly recommended to use\n",(0,t.yg)("inlineCode",{parentName:"li"},'"preserve_hierarchy": true')," if you want to use this command.")))}y.isMDXComponent=!0}}]);