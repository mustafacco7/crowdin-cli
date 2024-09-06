"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[8365],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),s=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(r),d=t,m=g["".concat(l,".").concat(d)]||g[d]||y[d]||o;return r?a.createElement(m,i(i({ref:n},c),{},{components:r})):a.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[g]="string"==typeof e?e:t,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7056:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(8168),t=(r(6540),r(5680));const o={},i="crowdin glossary upload",p={unversionedId:"commands/crowdin-glossary-upload",id:"commands/crowdin-glossary-upload",title:"crowdin glossary upload",description:"Description",source:"@site/docs/commands/crowdin-glossary-upload.md",sourceDirName:"commands",slug:"/commands/crowdin-glossary-upload",permalink:"/crowdin-cli/commands/crowdin-glossary-upload",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-glossary-upload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin glossary list",permalink:"/crowdin-cli/commands/crowdin-glossary-list"},next:{title:"crowdin glossary download",permalink:"/crowdin-cli/commands/crowdin-glossary-download"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Notes",id:"notes",level:2}],c={toc:s},g="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"crowdin-glossary-upload"},"crowdin glossary upload"),(0,t.yg)("h2",{id:"description"},"Description"),(0,t.yg)("p",null,"Upload glossary to localization resources"),(0,t.yg)("h2",{id:"synopsis"},"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"crowdin glossary upload <file> [CONFIG OPTIONS] [OPTIONS]\n")),(0,t.yg)("h2",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"<","file",">"),(0,t.yg)("br",{parentName:"p"}),"\n","File to upload"),(0,t.yg)("h2",{id:"options"},"Options"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--id"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Glossary identifier for uploading to the existing glossary"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--language"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Glossary language identifier"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--scheme"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Defines data columns scheme (used only for CSV or XLS/XLSX files\nconfiguration)"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--first-line-contains-header"),(0,t.yg)("br",{parentName:"p"}),"\n","Defines whether the file contains the first-row header that shouldn\u2019t be\nimported (used only for CSV or XLS/XLSX files)"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-V"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--version"),(0,t.yg)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--help"),(0,t.yg)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--no-progress"),(0,t.yg)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-v"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--verbose"),(0,t.yg)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--no-colors"),(0,t.yg)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-c"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--config"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,t.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--identity"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--plain"),(0,t.yg)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,t.yg)("h2",{id:"config-options"},"Config Options"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"-T"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"--token"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,t.yg)("em",{parentName:"p"},"\u2026"),(0,t.yg)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,t.yg)("h2",{id:"notes"},"Notes"),(0,t.yg)("p",null,"To form the scheme for your CSV or XLS/XLSX glossary file, use the\nfollowing constants:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"term_{language_code}")," \u2013 Column contains terms.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"{column_number}")," \u2013 Column number.Numbering starts from 0.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"description_{language_code}")," \u2013 Column contains term descriptions.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"partOfSpeech_{language_code}")," \u2013 Column contains part of speech for\nterms."))),(0,t.yg)("p",null,"Where ",(0,t.yg)("inlineCode",{parentName:"p"},"{language_code}")," \u2013 Language code for the specified language.See\nthe full list of ",(0,t.yg)("a",{parentName:"p",href:"https://developer.crowdin.com/language-codes"},"Supported\nLanguages"),"."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"--first-line-contains-header")," \u2013 used to skip the import of the first\nrow (header)."))}y.isMDXComponent=!0}}]);