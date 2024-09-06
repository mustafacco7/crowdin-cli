"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[8070],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const i={description:"Explore the Crowdin CLI FAQ page for quick answers to your questions. Find troubleshooting tips to optimize your Crowdin CLI experience."},a="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Explore the Crowdin CLI FAQ page for quick answers to your questions. Find troubleshooting tips to optimize your Crowdin CLI experience.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/crowdin-cli/faq",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/faq.md",tags:[],version:"current",frontMatter:{description:"Explore the Crowdin CLI FAQ page for quick answers to your questions. Find troubleshooting tips to optimize your Crowdin CLI experience."},sidebar:"tutorialSidebar",previous:{title:"Exit Codes",permalink:"/crowdin-cli/exit-codes"}},l={},p=[{value:"Downloaded translations don&#39;t match the current project configuration",id:"downloaded-translations-dont-match-the-current-project-configuration",level:3},{value:"Due to missing respective sources, the following translations will be omitted",id:"due-to-missing-respective-sources-the-following-translations-will-be-omitted",level:3},{value:"No sources found for pattern",id:"no-sources-found-for-pattern",level:3},{value:"JSON: empty string keys",id:"json-empty-string-keys",level:3},{value:"PKIX path building failed",id:"pkix-path-building-failed",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"faq"},"FAQ"),(0,o.yg)("h3",{id:"downloaded-translations-dont-match-the-current-project-configuration"},"Downloaded translations don't match the current project configuration"),(0,o.yg)("p",null,"I'm trying to download translations and I get the following error: ",(0,o.yg)("inlineCode",{parentName:"p"},"Downloaded translations don't match the current project configuration. The translations for the following sources will be omitted"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")),(0,o.yg)("p",null,'The issue is related to the "',(0,o.yg)("a",{parentName:"p",href:"https://support.crowdin.com/file-management/#file-settings"},(0,o.yg)("em",{parentName:"a"},"Resulting file after translations export")),'" file setting. This setting is used to define the resulting files and directory structure in the exported archive with translations.'),(0,o.yg)("p",null,"For CLI, this export pattern should match the ",(0,o.yg)("inlineCode",{parentName:"p"},"translation")," pattern in the ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," configuration file. CLI will pass it on source upload, but in case of files uploaded in ",(0,o.yg)("strong",{parentName:"p"},"different way")," or ",(0,o.yg)("strong",{parentName:"p"},"patterns mismatch")," it should be specified updated."),(0,o.yg)("p",null,"The best way to update the ",(0,o.yg)("em",{parentName:"p"},"Resulting file after translations export")," - is to run sources upload. Another way - manually modify files settings in Crowdin."),(0,o.yg)("p",null,"It might affect some existing integrations because the files structure will change in an exported archive with translations."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The warning may appear in cases where all source files are located in a branch in the Crowdin project, but the branch was not specified when executing the CLI command (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin download -b main")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin_branch_name: main")," for ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/crowdin/github-action"},"GitHub Action"),").")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If you use ",(0,o.yg)("a",{parentName:"p",href:"https://developer.crowdin.com/configuration-file/#general-configuration"},"double asterisk")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"translation")," pattern, the CLI will automatically fill the ",(0,o.yg)("em",{parentName:"p"},"Resulting file after translations export")," pattern with all subdirectories during the source upload.")),(0,o.yg)("h3",{id:"due-to-missing-respective-sources-the-following-translations-will-be-omitted"},"Due to missing respective sources, the following translations will be omitted"),(0,o.yg)("p",null,"I'm trying to download translations and I get the following error: ",(0,o.yg)("inlineCode",{parentName:"p"},"Due to missing respective sources, the following translations will be omitted: ..."),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")),(0,o.yg)("p",null,"It's related to the \"",(0,o.yg)("a",{parentName:"p",href:"https://support.crowdin.com/file-management/#file-settings"},(0,o.yg)("em",{parentName:"a"},"Resulting file after translations export")),'" file setting in the Crowdin project. During the source push, the CLI will automatically set it, and it will be the same as the ',(0,o.yg)("inlineCode",{parentName:"p"},"translation")," pattern of the ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," configuration file group (except for cases of using a double asterisk)."),(0,o.yg)("p",null,"In the current case, the translation pattern is probably ",(0,o.yg)("strong",{parentName:"p"},"empty")," on the Crowdin side."),(0,o.yg)("p",null,"Possible workaround: run the ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin push")," command to update the sources in the Crowdin project and set the correct translation export pattern."),(0,o.yg)("h3",{id:"no-sources-found-for-pattern"},"No sources found for pattern"),(0,o.yg)("p",null,"Downloading sources doesn't work, getting the warning ",(0,o.yg)("inlineCode",{parentName:"p"},"No sources found for '***' pattern. Check the source paths in your configuration file"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer 1:")),(0,o.yg)("p",null,"Probably, the same issue as in ",(0,o.yg)("a",{parentName:"p",href:"/faq#downloaded-translations-dont-match-the-current-project-configuration"},"Downloaded translations don't match the current project configuration"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer 2:")),(0,o.yg)("p",null,"Check your ",(0,o.yg)("inlineCode",{parentName:"p"},"base_path")," configuration. ",(0,o.yg)("inlineCode",{parentName:"p"},"base_path")," configured in the ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," config should be ",(0,o.yg)("strong",{parentName:"p"},"relative to the config location"),", not the current directory. When CLI searching files it uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"base_path")," + ",(0,o.yg)("inlineCode",{parentName:"p"},"source")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"translation")," pattern relative to the ",(0,o.yg)("inlineCode",{parentName:"p"},"crowdin.yml")," location."),(0,o.yg)("p",null,"In case you need a base path related to the current working directory, probably you need to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--base-path")," command parameter instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"base_path")," in config. The command parameter has a higher priority than config ",(0,o.yg)("inlineCode",{parentName:"p"},"base_path"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'crowdin download -c ~/project/crowdin.yml --base-path "..."\n')),(0,o.yg)("h3",{id:"json-empty-string-keys"},"JSON: empty string keys"),(0,o.yg)("p",null,"Empty strings keys appear after translations download for JSON file format (",(0,o.yg)("a",{parentName:"p",href:"https://github.com/crowdin/crowdin-cli/issues/457"},"#457"),", ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/crowdin/crowdin-cli/issues/497"},"#497"),", ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/crowdin/crowdin-cli/issues/502"},"#502"),")"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")),(0,o.yg)("p",null,"This is caused by using the ",(0,o.yg)("em",{parentName:"p"},"Skip untranslated strings")," export option when some translations are missing. By default, Crowdin will export these keys but the value will be empty. If you need such untranslated strings to be trimmed completely from the exported JSON files, please ",(0,o.yg)("a",{parentName:"p",href:"https://crowdin.com/contacts"},"contact")," our Customer Success Service."),(0,o.yg)("h3",{id:"pkix-path-building-failed"},"PKIX path building failed"),(0,o.yg)("p",null,"Crowdin CLI fails with an error ",(0,o.yg)("inlineCode",{parentName:"p"},"Java unable to find valid certification path to api.crowdin.com. ... PKIX path building failed"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")),(0,o.yg)("p",null,"This is an issue with the certificates and is not related to the CLI. Try the following options:"),(0,o.yg)("p",null,"1) Renew the certificate on your PC: the mentioned errors could be related to the old certificate version;\n2) Try to run the same CLI commands using another PC or laptop;\n3) Run the CLI from the same machine, but fully change the directory and path (as the example: run CLI from another local disk instead of the current one, because there is a chance it's connected with disk permissions);\n4) Connect to another network and try to run the same command;"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21076179/pkix-path-building-failed-and-unable-to-find-valid-certification-path-to-requ"},(0,o.yg)("strong",{parentName:"a"},"Read more")),"."))}u.isMDXComponent=!0}}]);