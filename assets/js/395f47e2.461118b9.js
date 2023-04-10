"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[6801],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5323:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const o={},a="Advanced Usage",l={unversionedId:"advanced",id:"advanced",title:"Advanced Usage",description:"Using CLI with Proxy Server",source:"@site/docs/advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/crowdin-cli/advanced",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/advanced.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CI/CD Integration",permalink:"/crowdin-cli/ci-cd"},next:{title:"FAQ",permalink:"/crowdin-cli/faq"}},c={},d=[{value:"Using CLI with Proxy Server",id:"using-cli-with-proxy-server",level:3},{value:"Ignoring hidden files during upload sources",id:"ignoring-hidden-files-during-upload-sources",level:3}],s={toc:d},u="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,i.kt)("h3",{id:"using-cli-with-proxy-server"},"Using CLI with Proxy Server"),(0,i.kt)("p",null,"Crowdin CLI provides the possibility to work with a proxy server. Each time you run a command, Crowdin CLI checks whether the operating system has the configured environment variables."),(0,i.kt)("p",null,"Supported environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY_HOST")," - the name or the IP address of the host at which the proxy server is located"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY_PORT")," - the port used by the proxy server for listening"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY_USER")," - the username used for authentication on a proxy server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY_PASSWORD")," - the password used for authentication on a proxy server")),(0,i.kt)("h3",{id:"ignoring-hidden-files-during-upload-sources"},"Ignoring hidden files during upload sources"),(0,i.kt)("p",null,"To ignore hidden files during sources upload, add the following to your configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="crowdin.yml"',title:'"crowdin.yml"'},'settings: {\n    "ignore_hidden_files": false\n}\n')))}p.isMDXComponent=!0}}]);