"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[5039],{5680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>y});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),m=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(a),c=i,y=p["".concat(d,".").concat(c)]||p[c]||g[c]||r;return a?t.createElement(y,l(l({ref:n},s),{},{components:a})):t.createElement(y,l({ref:n},s))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1583:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var t=a(8168),i=(a(6540),a(5680));const r={title:"Crowdin CLI 4.0",description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project.",authors:["andrii-bodnar","yevheniyJ"],image:"./img/social-card.png",tags:["release"]},l=void 0,o={permalink:"/crowdin-cli/blog/2024/05/28/cli-v4",editUrl:"https://github.com/lingui/js-lingui/tree/main/website/blog/2024-05-28-cli-v4/index.md",source:"@site/blog/2024-05-28-cli-v4/index.md",title:"Crowdin CLI 4.0",description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project.",date:"2024-05-28T00:00:00.000Z",formattedDate:"May 28, 2024",tags:[{label:"release",permalink:"/crowdin-cli/blog/tags/release"}],readingTime:5.475,hasTruncateMarker:!0,authors:[{name:"Andrii Bodnar",title:"Engineering Manager",url:"https://github.com/andrii-bodnar",imageURL:"https://github.com/andrii-bodnar.png",key:"andrii-bodnar"},{name:"Yevheniy Oliynyk",title:"Full stack Java/NodeJS developer",url:"https://github.com/yevheniyJ",imageURL:"https://github.com/yevheniyJ.png",key:"yevheniyJ"}],frontMatter:{title:"Crowdin CLI 4.0",description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project.",authors:["andrii-bodnar","yevheniyJ"],image:"./img/social-card.png",tags:["release"]},nextItem:{title:"Files Management",permalink:"/crowdin-cli/blog/2024/01/23/files-management"}},d={image:a(7389).A,authorsImageUrls:[void 0,void 0]},m=[{value:"Requirements",id:"requirements",level:2},{value:"New commands",id:"new-commands",level:2},{value:"New command options",id:"new-command-options",level:2},{value:"Command updates",id:"command-updates",level:2},{value:"Pre-translate",id:"pre-translate",level:3},{value:"String",id:"string",level:3},{value:"List",id:"list",level:3},{value:"Glossary",id:"glossary",level:3},{value:"TM",id:"tm",level:3},{value:"Screenshot",id:"screenshot",level:3},{value:"Init",id:"init",level:3},{value:"Lint",id:"lint",level:3},{value:"Bundle",id:"bundle",level:3},{value:"Exit codes",id:"exit-codes",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Deprecations and backward compatibility",id:"deprecations-and-backward-compatibility",level:2},{value:"Download targets",id:"download-targets",level:3},{value:"Task command",id:"task-command",level:3},{value:"Command output updates",id:"command-output-updates",level:2}],s={toc:m},p="wrapper";function g(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Today we are happy to announce Crowdin CLI ",(0,i.yg)("strong",{parentName:"p"},"4.0"),"! \ud83e\udd73"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"social-card image",src:a(7389).A,width:"939",height:"646"})),(0,i.yg)("p",null,"It has been almost five years since the release of Crowdin CLI 3.0. During this time, we have received extensive feedback from our users and worked diligently to improve the tool. As a result, we've made many changes and improvements."),(0,i.yg)("p",null,"The new version of Crowdin CLI introduces a lot of new features and enhancements. We've added new commands, updated existing ones, and significantly improved the overall user experience."),(0,i.yg)("p",null,"This post is intended to highlight the most important changes and help you migrate from CLI 3.x with ease. It is not a comprehensive guide, but rather a list of the most important changes."),(0,i.yg)("h2",{id:"requirements"},"Requirements"),(0,i.yg)("p",null,"As part of this release, the minimum Java version has been updated to ",(0,i.yg)("strong",{parentName:"p"},"17 LTS"),"."),(0,i.yg)("h2",{id:"new-commands"},"New commands"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-config"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin config"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-project"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin project"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-language"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin language"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-branch-clone"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin branch clone"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-branch-merge"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin branch merge"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/autocompletion"},(0,i.yg)("inlineCode",{parentName:"a"},"crowdin completion")))),(0,i.yg)("h2",{id:"new-command-options"},"New command options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("div",{style:{width:"150px"}},"Command")),(0,i.yg)("th",{parentName:"tr",align:null},"Option/Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"init")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--quiet")," option to skip interactive input prompts")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"string add")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--branch")," option to specify the branch to which the new string should be added")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"string list")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--directory")," and ",(0,i.yg)("kbd",null,"--scope")," options to filter strings by directory and scope")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"pre-translate")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--file")," option to specify the file(s) in the Crowdin project to pre-translate")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"pre-translate")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"ai")," method and ",(0,i.yg)("kbd",null,"--ai-prompt")," parameter to allow pre-translation via AI")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"file upload")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--type")," and ",(0,i.yg)("kbd",null,"--parser-version")," options to specify the file type and parser version respectively")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"file upload")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--context")," option to provide a context about the whole file")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"file list")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--verbose")," option to show more information about the files")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"language list")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("kbd",null,"--all")," option to list all languages for the current account")))),(0,i.yg)("h2",{id:"command-updates"},"Command updates"),(0,i.yg)("h3",{id:"pre-translate"},"Pre-translate"),(0,i.yg)("p",null,"We've made significant changes to the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-pre-translate"},(0,i.yg)("inlineCode",{parentName:"a"},"pre-translate"))," command. The command now requires the ",(0,i.yg)("kbd",null,"--file")," parameter for file-based projects. The ",(0,i.yg)("kbd",null,"--file")," parameter determines which files to pre-translate. Previously, the command relied on the current configuration, and it was only possible to pre-translate the files that matched the configuration patterns. Now you can specify any file(s) in the Crowdin project to pre-translate."),(0,i.yg)("p",null,"Tip: Use the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-file-list"},(0,i.yg)("inlineCode",{parentName:"a"},"file list"))," command to get the file paths in the current project."),(0,i.yg)("h3",{id:"string"},"String"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-string-edit"},(0,i.yg)("inlineCode",{parentName:"a"},"string edit"))," command changes:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Moved ",(0,i.yg)("kbd",null,"id")," to a parameter instead of a command option."),(0,i.yg)("li",{parentName:"ul"},"Now ",(0,i.yg)("kbd",null,"--identifier")," is used as an option to edit and not to find the needed string."))),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-string-delete"},(0,i.yg)("inlineCode",{parentName:"a"},"string delete"))," command changes:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Moved ",(0,i.yg)("kbd",null,"id")," to a parameter instead of a command option. Now only 1 string can be removed at a time."),(0,i.yg)("li",{parentName:"ul"},"Removed the ",(0,i.yg)("kbd",null,"--text")," and ",(0,i.yg)("kbd",null,"--identifier")," options. Only ID is used as a string identifier."))),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"comment")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-comment-add"},(0,i.yg)("inlineCode",{parentName:"a"},"comment add"))," command.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'-crowdin string add Download --file main/src/strings.xml --identifier "download"\n+crowdin string add Download --file src/strings.xml --branch main --identifier "download"\n\n-crowdin string edit --id 12 --text new\n+crowdin string edit 12 --text new\n\n-crowdin string delete --id 12\n+crowdin string delete 12\n')),(0,i.yg)("h3",{id:"list"},"List"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"list branches")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-branch-list"},(0,i.yg)("inlineCode",{parentName:"a"},"branch list"))," command."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"list sources")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-config-sources"},(0,i.yg)("inlineCode",{parentName:"a"},"config sources"))," command."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"list translations")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-config-translations"},(0,i.yg)("inlineCode",{parentName:"a"},"config translations"))," command."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"list project")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-file-list"},(0,i.yg)("inlineCode",{parentName:"a"},"file list"))," command."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"list languages")," command has been replaced with the ",(0,i.yg)("a",{parentName:"li",href:"/commands/crowdin-language-list"},(0,i.yg)("inlineCode",{parentName:"a"},"language list"))," command.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin list branches\n+crowdin branch list\n\n-crowdin list project\n+crowdin file list\n\n-crowdin list sources\n+crowdin config sources\n\n-crowdin list translations\n+crowdin config translations\n\n-crowdin list languages\n+crowdin language list\n")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The default language code for the ",(0,i.yg)("inlineCode",{parentName:"p"},"language list")," command output has been changed from ",(0,i.yg)("inlineCode",{parentName:"p"},"two_letters_code")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,i.yg)("p",{parentName:"admonition"},"This change makes it more convenient, as the ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," is used consistently for the ",(0,i.yg)("inlineCode",{parentName:"p"},"--language")," parameter across various commands.")),(0,i.yg)("h3",{id:"glossary"},"Glossary"),(0,i.yg)("p",null,"The ",(0,i.yg)("kbd",null,"--name")," option has been removed from the ",(0,i.yg)("inlineCode",{parentName:"p"},"upload")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"download")," commands, and the ",(0,i.yg)("kbd",null,"<id",">")," parameter is now used instead:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin glossary download --id <id>\n-crowdin glossary download --name <name>\n+crowdin glossary download <id>\n\n-crowdin glossary upload <file> --name <name>\n+crowdin glossary upload <file> --id <id>\n")),(0,i.yg)("p",null,"Tip: Use the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-glossary-list"},(0,i.yg)("inlineCode",{parentName:"a"},"glossary list"))," command to get the ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,i.yg)("h3",{id:"tm"},"TM"),(0,i.yg)("p",null,"The ",(0,i.yg)("kbd",null,"--name")," option has been removed from ",(0,i.yg)("inlineCode",{parentName:"p"},"upload")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"download")," commands, and the ",(0,i.yg)("kbd",null,"<id",">")," parameter is now used instead:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin tm download --id <id>\n-crowdin tm download --name <name>\n+crowdin tm download <id>\n\n-crowdin tm upload <file> --name <name>\n+crowdin tm upload <file> --id <id>\n")),(0,i.yg)("p",null,"Tip: Use the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-tm-list"},(0,i.yg)("inlineCode",{parentName:"a"},"tm list"))," command to get the ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,i.yg)("h3",{id:"screenshot"},"Screenshot"),(0,i.yg)("p",null,"The ",(0,i.yg)("kbd",null,"--name")," option has been replaced with the ",(0,i.yg)("kbd",null,"<id",">")," parameter for the ",(0,i.yg)("inlineCode",{parentName:"p"},"delete")," command because there can be multiple screenshots with the same name:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin screenshot delete <name>\n+crowdin screenshot delete <id>\n")),(0,i.yg)("p",null,"Tip: Use the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-screenshot-list"},(0,i.yg)("inlineCode",{parentName:"a"},"screenshot list"))," command to get the ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),"."),(0,i.yg)("h3",{id:"init"},"Init"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"generate")," alias has been removed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin generate\n+crowdin init\n")),(0,i.yg)("h3",{id:"lint"},"Lint"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"lint")," command has been replaced with the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-config-lint"},(0,i.yg)("inlineCode",{parentName:"a"},"config lint"))," command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"- crowdin lint\n+ crowdin config lint\n")),(0,i.yg)("h3",{id:"bundle"},"Bundle"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"download bundle")," command has been replaced with the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-bundle-download"},(0,i.yg)("inlineCode",{parentName:"a"},"bundle download"))," command."),(0,i.yg)("h2",{id:"exit-codes"},"Exit codes"),(0,i.yg)("p",null,"This release also includes more exit codes (previously we only had ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," for success and ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," for failure)."),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"/exit-codes"},"official documentation")," for more details."),(0,i.yg)("h2",{id:"environment-variables"},"Environment variables"),(0,i.yg)("p",null,"Previously, it was necessary to specify the environment variables in the configuration file in order to load the configuration from them."),(0,i.yg)("p",null,"Now the CLI can automatically pick up the environment variables if they are set in the shell. The supported environment variables are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CROWDIN_PROJECT_ID")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CROWDIN_PERSONAL_TOKEN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CROWDIN_BASE_PATH")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CROWDIN_BASE_URL"))),(0,i.yg)("p",null,"Thanks to this change, it's now easier to work with the CLI in CI/CD environments, especially in the no-configuration-file use case."),(0,i.yg)("p",null,"Visit the ",(0,i.yg)("a",{parentName:"p",href:"/configuration#environment-variables"},"Configuration File")," article for more details."),(0,i.yg)("h2",{id:"deprecations-and-backward-compatibility"},"Deprecations and backward compatibility"),(0,i.yg)("h3",{id:"download-targets"},"Download targets"),(0,i.yg)("p",null,"The deprecated ",(0,i.yg)("inlineCode",{parentName:"p"},"download targets")," command has been removed. The configuration file no longer supports the ",(0,i.yg)("inlineCode",{parentName:"p"},"targets")," section as well. Use ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-bundle"},"Bundles")," instead."),(0,i.yg)("h3",{id:"task-command"},"Task command"),(0,i.yg)("p",null,"Removed backward compatibility for file numeric id in the ",(0,i.yg)("a",{parentName:"p",href:"/commands/crowdin-task-add"},(0,i.yg)("inlineCode",{parentName:"a"},"task add"))," command. Now only file path is supported:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"-crowdin task add --file 12 --language uk\n+crowdin task add --file src/strings.xml --language uk\n")),(0,i.yg)("h2",{id:"command-output-updates"},"Command output updates"),(0,i.yg)("p",null,"In this release, we've also reviewed and improved the output of many commands to make them more informative and user-friendly. Changes include ",(0,i.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"add"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"upload"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"download"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"delete"),", and other commands for various resources."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Need help or have questions? ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/crowdin/crowdin-cli/discussions/781"},"Let's discuss it"),"!")))}g.isMDXComponent=!0},7389:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/social-card-089827b45a604d4b938169e43c27f144.png"}}]);