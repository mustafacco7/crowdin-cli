"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[7220],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),y=a,g=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return r?t.createElement(g,p(p({ref:n},d),{},{components:r})):t.createElement(g,p({ref:n},d))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(8168),a=(r(6540),r(5680));const o={},p="crowdin upload",i={unversionedId:"commands/crowdin-upload",id:"commands/crowdin-upload",title:"crowdin upload",description:"Description",source:"@site/docs/commands/crowdin-upload.md",sourceDirName:"commands",slug:"/commands/crowdin-upload",permalink:"/crowdin-cli/commands/crowdin-upload",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-upload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin pre-translate",permalink:"/crowdin-cli/commands/crowdin-pre-translate"},next:{title:"crowdin upload sources",permalink:"/crowdin-cli/commands/crowdin-upload-sources"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2}],d={toc:c},s="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"crowdin-upload"},"crowdin upload"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Upload source files to a Crowdin project"),(0,a.yg)("h2",{id:"synopsis"},"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"crowdin (upload|push) [SUBCOMMAND] [CONFIG OPTIONS] [OPTIONS]\n")),(0,a.yg)("h2",{id:"commands"},"Commands"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-upload-translations"},(0,a.yg)("strong",{parentName:"a"},"translations")),(0,a.yg)("br",{parentName:"p"}),"\n","Upload existing translations to your Crowdin project"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"crowdin-upload-sources"},(0,a.yg)("strong",{parentName:"a"},"sources")),(0,a.yg)("br",{parentName:"p"}),"\n","Upload source files to a Crowdin project"),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-b"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--branch"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--label"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Attach labels to strings (multiple labels can be specified)"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--delete-obsolete"),(0,a.yg)("br",{parentName:"p"}),"\n","Delete obsolete files and folders from the Crowdin project that no\nlonger match the source configuration or have been deleted locally"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--[no-]auto-update"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify whether to update existing source files in the Crowdin project\nor only upload new ones. Updates by default"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--excluded-language"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify languages the sources should not be translated into. Can be\nspecified multiple times"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--version"),(0,a.yg)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--help"),(0,a.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,a.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,a.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,a.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--config"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,a.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,a.yg)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--identity"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--tree"),(0,a.yg)("br",{parentName:"p"}),"\n","List contents of directories in a tree-like format in dryrun mode"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--dryrun"),(0,a.yg)("br",{parentName:"p"}),"\n","Print a command output without execution"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--plain"),(0,a.yg)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,a.yg)("h2",{id:"config-options"},"Config Options"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-T"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--token"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--source"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Path to the source files"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-t"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"--translation"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Path to the translation files"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--dest"),"=",(0,a.yg)("em",{parentName:"p"},"\u2026"),(0,a.yg)("br",{parentName:"p"}),"\n","Specify file name in Crowdin"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"--[no-]preserve-hierarchy"),(0,a.yg)("br",{parentName:"p"}),"\n","Choose whether to save the directory hierarchy in the Crowdin project"))}m.isMDXComponent=!0}}]);