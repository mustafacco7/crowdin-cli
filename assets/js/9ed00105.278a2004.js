"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[9004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={description:"Discover essential configuration tips and guidelines for the Crowdin CLI."},o="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Discover essential configuration tips and guidelines for the Crowdin CLI.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/crowdin-cli/configuration",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"Discover essential configuration tips and guidelines for the Crowdin CLI."},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/crowdin-cli/installation"},next:{title:"Autocompletion",permalink:"/crowdin-cli/autocompletion"}},p={},c=[{value:"Sample configuration file",id:"sample-configuration-file",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Split Project Configuration and API Credentials",id:"split-project-configuration-and-api-credentials",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Crowdin CLI uses a YAML configuration file that contains a description of the resources to manage: files to be uploaded into Crowdin and the locations of the corresponding translations."),(0,a.kt)("p",null,"To use Crowdin CLI, you should first generate your configuration file and then run the tool. By default, Crowdin CLI looks for a configuration file named ",(0,a.kt)("em",{parentName:"p"},"crowdin.yaml")," or ",(0,a.kt)("em",{parentName:"p"},"crowdin.yml")," (so you don\u2019t have to specify the file name unless it\u2019s different from ",(0,a.kt)("em",{parentName:"p"},"crowdin.yaml"),")."),(0,a.kt)("p",null,"To create the configuration file run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin init\n")),(0,a.kt)("p",null,"When calling Crowdin CLI in terminal make sure you are in your project root directory. Otherwise, you need to specify a configuration file path using  ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin upload sources --config /path/to/your/config/file\n")),(0,a.kt)("h3",{id:"sample-configuration-file"},"Sample configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="crowdin.yml"',title:'"crowdin.yml"'},'"project_id": "12"\n"api_token": "54e01--your-personal-token--2724a"\n"base_path": "."\n"base_url": "https://api.crowdin.com"\n\n"preserve_hierarchy": true\n\n"files": [\n  {\n    "source" : "/locales/**/*",\n    "translation" : "/%two_letters_code%/%original_file_name%"\n  }\n]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Credentials configuration:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"project_id")),(0,a.kt)("td",{parentName:"tr",align:null},"Crowdin Project ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"api_token")),(0,a.kt)("td",{parentName:"tr",align:null},"Crowdin personal access token. The token owner should have at least Manager permissions in the project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"base_url")),(0,a.kt)("td",{parentName:"tr",align:null},"Crowdin API base URL. Can be omitted for crowdin.com. For Crowdin Enterprise use the ",(0,a.kt)("inlineCode",{parentName:"td"},"https://{organization-name}.api.crowdin.com"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information how to configure Crowdin CLI, check the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.crowdin.com/configuration-file/"},"Configuration File")," article.")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Crowdin CLI supports the use of environment variables for configuration. For example, you can load the API credentials from an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="crowdin.yml"',title:'"crowdin.yml"'},'"project_id_env": "CROWDIN_PROJECT_ID"\n"api_token_env": "CROWDIN_PERSONAL_TOKEN"\n"base_path_env": "CROWDIN_BASE_PATH"\n"base_url_env": "CROWDIN_BASE_URL"\n')),(0,a.kt)("p",null,"Environment variables have lower priority and will be used if any of the parameters are missing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="crowdin.yml"',title:'"crowdin.yml"'},'"project_id_env": "CROWDIN_PROJECT_ID"      # Low priority\n"api_token_env": "CROWDIN_PERSONAL_TOKEN"   # Low priority\n"base_path_env": "CROWDIN_BASE_PATH"        # Low priority\n"base_url_env": "CROWDIN_BASE_PATH"         # Low priority\n\n"project_id": "project-id"                  # High priority\n"api_token": "personal-access-token"        # High priority\n"base_path": "/project-base-path"           # High priority\n"base_url": "https://api.crowdin.com"       # High priority\n')),(0,a.kt)("p",null,"The CLI will also ",(0,a.kt)("strong",{parentName:"p"},"automatically")," pick up the environment variables if they are set in the shell. The supported environment variables are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CROWDIN_PERSONAL_TOKEN")),(0,a.kt)("td",{parentName:"tr",align:null},"Personal Access Token required for authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CROWDIN_PROJECT_ID")),(0,a.kt)("td",{parentName:"tr",align:null},"Numerical ID of the Crowdin project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CROWDIN_BASE_URL")),(0,a.kt)("td",{parentName:"tr",align:null},"Base URL of Crowdin server for API requests execution (",(0,a.kt)("inlineCode",{parentName:"td"},"https://api.crowdin.com")," for crowdin.com, ",(0,a.kt)("inlineCode",{parentName:"td"},"https://{organization-name}.api.crowdin.com")," for Crowdin Enterprise)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CROWDIN_BASE_PATH")),(0,a.kt)("td",{parentName:"tr",align:null},"Path to your project directory on a local machine (default: ",(0,a.kt)("inlineCode",{parentName:"td"},"."),")")))),(0,a.kt)("h2",{id:"split-project-configuration-and-api-credentials"},"Split Project Configuration and API Credentials"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," file contains a description of the resources to manage and API credentials (",(0,a.kt)("inlineCode",{parentName:"p"},"project_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"api_token"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"base_path"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"base_url"),")."),(0,a.kt)("p",null,"It means that it's unsafe to commit this file into the code repository because the API key would be accessible to other users. Crowdin CLI supports two types of configuration files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a description of the resources to manage, residing in the project directory"),(0,a.kt)("li",{parentName:"ul"},"API credentials, probably residing in ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.crowdin.yml"))),(0,a.kt)("p",null,":::\nAPI credentials from the ",(0,a.kt)("inlineCode",{parentName:"p"},".crowdin.yml")," configuration file have higher priority than credentials from the project directory(",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml"),").\n:::"),(0,a.kt)("p",null,"If you need to run a command with user-specific credentials (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"upload sources"),"), run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin upload sources --identity 'path-to-user-credentials-file'\n")),(0,a.kt)("p",null,"But if user-specific credentials file residing in ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.crowdin.yml")," you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin upload sources\n")),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.crowdin.com/configuration-file/"},"Configuration File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/crowdin"},"Commands"))))}u.isMDXComponent=!0}}]);