"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[596],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={},o="CI/CD Integration",l={unversionedId:"ci-cd",id:"ci-cd",title:"CI/CD Integration",description:"Integrate the localization of your Crowdin project into the workflow you've set up on your repo. This includes automatically uploading new source strings to Crowdin and downloading translations. This approach ensures effective synchronization of all translatable texts and helps to avoid potential translation delays before the application deployment.",source:"@site/docs/ci-cd.md",sourceDirName:".",slug:"/ci-cd",permalink:"/crowdin-cli/ci-cd",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/ci-cd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin label delete",permalink:"/crowdin-cli/commands/crowdin-label-delete"},next:{title:"Advanced Usage",permalink:"/crowdin-cli/advanced"}},c={},s=[{value:"Examples",id:"examples",level:2},{value:"Using NPM package",id:"using-npm-package",level:2},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cicd-integration"},"CI/CD Integration"),(0,a.yg)("p",null,"Integrate the localization of your Crowdin project into the workflow you've set up on your repo. This includes automatically uploading new source strings to Crowdin and downloading translations. This approach ensures effective synchronization of all translatable texts and helps to avoid potential translation delays before the application deployment."),(0,a.yg)("p",null,"One way to do this is to use Crowdin CLI with your CI tools. You can use Crowdin CLI with built-in CI tools or with third-party alternatives. If you use GitHub Actions for workflow automation, read more about our ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/marketplace/actions/crowdin-action"},"GitHub Crowdin Action"),", which is also based on Crowdin CLI."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"CI/CD pipeline",src:n(944).A,width:"1762",height:"438"})),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/crowdin/github-action"},"GitHub Actions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/gitlab-ci"},"GitLab CI/CD")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/jenkins"},"Jenkins")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/azure-pipelines"},"Azure Pipelines")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/codecommit"},"AWS CodeCommit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/bitbucket-pipelines"},"Bitbucket Pipelines")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/circle-ci"},"CircleCI")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/drone-ci"},"Drone CI")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/go-task"},"Go Task")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://store.crowdin.com/grunt"},"Grunt"))),(0,a.yg)("h2",{id:"using-npm-package"},"Using NPM package"),(0,a.yg)("p",null,"Crowdin CLI can be ",(0,a.yg)("a",{parentName:"p",href:"/installation#npm"},"installed via NPM"),", so you can easily use it in any CI/CD workflow that has Node installed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml",metastring:'title="GitHub Actions Workflow"',title:'"GitHub',Actions:!0,'Workflow"':!0},"name: Run crowdin cli command\n\non:\n  workflow_dispatch:\n\njobs:\n  cli:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n\n      - name: Install Crowdin CLI\n        run: npm i -g @crowdin/cli\n\n      - name: Run command\n        run: crowdin -V\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"You can use the ",(0,a.yg)("inlineCode",{parentName:"li"},"--keep-archive")," option with the ",(0,a.yg)("a",{parentName:"li",href:"/commands/crowdin-download"},(0,a.yg)("inlineCode",{parentName:"a"},"crowdin download"))," command if you need to process the translations archive in some way (for example, upload it to the pipeline artifacts)."),(0,a.yg)("li",{parentName:"ul"},"It's recommended to use the ",(0,a.yg)("inlineCode",{parentName:"li"},"--no-progress")," flag for the CLI execution in CI/CD environment. It will keep the execution logs cleaner and more readable."),(0,a.yg)("li",{parentName:"ul"},"The CLI can automatically pick up the credentials from the ",(0,a.yg)("a",{parentName:"li",href:"/configuration#environment-variables"},"Environment Variables")," if they are set in the shell."))),(0,a.yg)("h2",{id:"further-reading"},"Further Reading"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/configuration"},"Configuration")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/commands/crowdin"},"Commands")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/exit-codes"},"Exit Codes"))))}d.isMDXComponent=!0},944:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ci_cd_pipeline-6d9453324d058a5e703d4c2821e6c735.png"}}]);