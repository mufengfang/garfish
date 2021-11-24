"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[515],{4635:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7711);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(t),c=r,k=u["".concat(l,".").concat(c)]||u[c]||s[c]||i;return t?a.createElement(k,p(p({ref:n},d),{},{components:t})):a.createElement(k,p({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2512:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=t(8538),r=t(7765),i=(t(7711),t(4635)),p=["components"],o={title:"API \u53c2\u8003",slug:"/api/new",order:2},l=void 0,m={unversionedId:"api/instance",id:"api/instance",isDocsHomePage:!1,title:"API \u53c2\u8003",description:"run",source:"@site/docs/api/instance.md",sourceDirName:"api",slug:"/api/new",permalink:"/api/new",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/instance.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao.shaw",lastUpdatedAt:1637726877,formattedLastUpdatedAt:"2021/11/24",frontMatter:{title:"API \u53c2\u8003",slug:"/api/new",order:2},sidebar:"api",previous:{title:"\u6982\u89c8",permalink:"/api"},next:{title:"channel",permalink:"/api/attributes"}},d=[{value:"run",id:"run",children:[{value:"Options",id:"options",children:[]}]}],s={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"run"},"run"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.run(options: Options) : Garfish")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"domgetter---element--string"},(0,i.kt)("inlineCode",{parentName:"h4"},"domGetter: () => Element | string")),(0,i.kt)("p",null,"\u53ef\u586b\u5165\u83b7\u53d6\u6302\u8f7d\u70b9\u7684\u8282\u70b9\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"querySelect")," \u53ef\u9009\u5230\u7684\u5b57\u7b26\u3002"),(0,i.kt)("h4",{id:"apps-arrayappinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"apps: Array<AppInfo>")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u4e3b\u6846\u67b6\u4e0d\u4f1a\u81ea\u52a8\u4e0e\u8fdc\u7a0b Garfish \u7ba1\u7406\u5e73\u53f0\u5173\u8054\uff0c\u9700\u8981\u624b\u52a8\u6ce8\u5165\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5b50\u5e94\u7528\u8d44\u6e90\u5730\u5740\u9700\u8981\u652f\u6301\u8de8\u57df\uff08",(0,i.kt)("strong",{parentName:"li"},"\u8bf7\u63a7\u5236\u5141\u8bb8\u7684\u8303\u56f4\uff0c\u82e5\u6ca1\u6709\u8bbe\u7f6e\u5141\u8bb8\u7684\u8303\u56f4\u53ef\u80fd\u9020\u6210\u5b89\u5168\u98ce\u9669"),"\uff09\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Garfish")," \u4f1a\u6839\u636e\u8d44\u6e90\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"mineType")," \u5224\u65ad\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"html entry")," \u8fd8\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"js entry"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"js"),"\uff0c\u5bfc\u51fa\u5185\u5bb9\u5fc5\u987b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"provider: { render, destroy }"),"\u3002\n:::")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AppInfo: { name, entry, activeWhen, active, deactive }"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u6a21\u677f\u540d\u79f0\uff0c\u8bf7\u786e\u4fdd\u8be5\u540d\u79f0\u7684\u552f\u4e00\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry")," \u5b50\u5e94\u7528\u5165\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeWhen")," \u8def\u5f84\u540d\u79f0\uff0c\u6fc0\u6d3b\u5b50\u5e94\u7528\u7684\u8def\u5f84\uff0c\u586b\u5199\u6839\u8def\u7531, \u4f5c\u4e3a\u51fd\u6570\u4f7f\u7528\u8bf7\u52ff\u4f7f\u7528\u5f02\u6b65\u903b\u8f91"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u5e94\u7528\u6fc0\u6d3b\u65f6\u89e6\u53d1\u89e6\u53d1\uff0c\u7528\u4e8e\u4ee3\u66ff Garfish \u5185\u90e8\u9ed8\u8ba4\u7684\u6e32\u67d3\u903b\u8f91\u3002\u82e5\u5e94\u7528\u65e0\u6cd5\u5feb\u901f\u63a5\u5165\uff0c\u53ef\u901a\u8fc7\u8be5\u94a9\u5b50\u6e32\u67d3 ",(0,i.kt)("inlineCode",{parentName:"li"},"iframe"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://site.bytedance.net/docs/4545/6924/ifame"},"\u8be6\u60c5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deactive")," \u5e94\u7528\u9500\u6bc1\u65f6\u89e6\u53d1\uff0c\u7528\u4e8e\u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish")," \u5185\u90e8\u9ed8\u8ba4\u7684\u9500\u6bc1\u903b\u8f91\uff0c\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"active")," \u914d\u7f6e\u540c\u65f6\u5b58\u5728\u6216\u540c\u65f6\u4e0d\u5b58\u5728"))),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6cd5\uff1a")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Garfish.run({\n  apps: [\n    {\n      name: 'vue-app',\n      // \u8868\u660e\u5728\u8def\u7531\u8df3\u8f6c\u5230 /vue-app \u65f6\u4f1a\u89e6\u53d1 vue-app \u5e94\u7528\u7684\u6e32\u67d3\n      // \u79bb\u5f00 /vue-app \u65f6\u4f1a\u89e6\u53d1\u5e94\u7528\u7684\u5378\u8f7d\n      activeWhen: '/vue-app',\n      entry: 'http://localhost:3000',\n    },\n    {\n      name: 'react-app',\n      // \u5f53 activeWhen \u4e3a\u51fd\u6570\u65f6\uff0c\u5f53\u901a\u8fc7 history api \u89e6\u53d1\u8def\u7531\u53d8\u5316\u65f6\uff0c\u4f1a\u89e6\u53d1\u8be5\u51fd\u6570\u7528\u4e8e\u5224\u65ad\u662f\u5426\u9700\u8981\u6fc0\u6d3b\u5e94\u7528\uff0c\u5f53\u51fd\u6570\u8fd4\u56de true \u65f6\u8868\u660e\u6fc0\u6d3b\u8be5\u5e94\u7528\n      // \u8be5\u51fd\u6570\u53ef\u4ee5\u89e6\u53d1\u4ee5 /react-app \u5f00\u5934\u7684\u6240\u6709\u5b50\u5e94\u7528\uff0c\u4f8b\u5982\uff1a/react-app2\u3001/react-app \u7b49\u5747\u4f1a\u89e6\u53d1\u5e94\u7528\u7684\u6e32\u67d3\n      // \u6ce8\u610f\uff1a\u4f7f\u7528\u51fd\u6570\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 activeWhen \u7684 path \u53c2\u6570\u4f5c\u4e3a\u5339\u914d\u76ee\u6807\uff0c\u56e0\u4e3a Garfish \u6846\u67b6\u5185\u90e8\u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa\u7b26\u5408\u5b50\u5e94\u7528\u7684 basename\n      activeWhen: (path) => path.startsWith('/react-app') !== -1,\n      entry: 'http://localhost:3000',\n    },\n  ],\n});\n")),(0,i.kt)("h4",{parentName:"div",id:"basename-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"basename?: string")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8be5\u53c2\u6570\u7528\u4e8e\u4f5c\u4e3a\u5b50\u5e94\u7528\u6fc0\u6d3b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath"),"\uff0c\u5e76\u4e14\u53ef\u4ee5\u63d0\u4f9b\u7ed9\u5b50\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basepath"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"activeWhen: '/detail'"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"basename: '/toutiao'"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u5c06\u4f1a\u5728\u8df3\u8f6c\u5230\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"/toutiao/detail")," \u6fc0\u6d3b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u8df3\u8f6c\u57fa\u4e8e\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"/toutiao/detail"),"\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5b50\u5e94\u7528\u672c\u8eab\u5177\u5907\u8def\u7531\uff0c\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u4f20\u9012\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename"),"\uff0c\u4f5c\u4e3a\u8def\u7531\u57fa\u7840\u8def\u5f84\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6cd5\uff1a"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e3b\u5e94\u7528\u7684 index.js\nconst basePath = 'toutiao';\nconst router = new VueRouter({\n  mode: 'history',\n  base: basePath,\n});\n\nGarfish.run({\n  basename: basePath,\n  domGetter: '#submodule',\n  apps: [\n    {\n      name: 'react',\n      activeWhen: '/react',\n      entry: `http://localhost:3000/index.js`,\n    },\n  ],\n});\n\nconst app = new Vue({ router }).$mount('#app');\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b50\u5e94\u7528\u7684 index.js\n// \u83b7\u53d6\u6846\u67b6\u4f20\u8f93\u7684\u4e3b\u5e94\u7528\u63d0\u4f9b\u7684 basename\uff0c\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 basename\uff0c\u5728\u8def\u7531\u8df3\u8f6c\u65f6\u5c06\u5176\u4f5c\u4e3a\u6839\u8def\u7531\nclass App extends React.Component<Props> {\n  render() {\n    return (\n      <BrowserRouter basename={this.props.basename}>\n        <div>\n          <ul>\n            <li>\n              <Link to=\"/\">Home</Link>\n            </li>\n          </ul>\n          <Route exact path=\"/\" component={Index}></Route>\n        </div>\n      </BrowserRouter>\n    );\n  }\n}\n\nexport function provider() {\n  return {\n    render({ dom, basename }) {\n      // \u6e32\u67d3\u5230\u5b50\u5e94\u7528html\u91cc\u7684\u67d0\u4e2a\u8282\u70b9\n      ReactDOM.render(<App basename={basename} />, dom.querySelector('#root'));\n    },\n\n    destroy({ dom }) {\n      const root = dom && dom.querySelector('#root');\n      if (root) {\n        ReactDOM.unmountComponentAtNode(root);\n      }\n    },\n  };\n}\n")),(0,i.kt)("h4",{parentName:"div",id:"sandbox-sandboxconfig--false"},(0,i.kt)("inlineCode",{parentName:"h4"},"sandbox?: SandboxConfig | false")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshot?: boolean")," \u662f\u5426\u5f00\u542f\u5feb\u7167\u6c99\u7bb1\uff0c\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h4",{parentName:"div",id:"props-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"props?: Object")),(0,i.kt)("p",{parentName:"div"},"\u63d0\u4f9b\u53c2\u6570\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," \u53c2\u6570"),(0,i.kt)("h4",{parentName:"div",id:"protectvariable-arraystring"},(0,i.kt)("inlineCode",{parentName:"h4"},"protectVariable?: Array<string>")),(0,i.kt)("p",{parentName:"div"},"\u4fdd\u5b58\u6307\u5b9a\u53d8\u91cf\uff0c\u5728\u6c99\u76d2\u5207\u6362\u8fc7\u7a0b\u4e2d\u4e0d\u8fdb\u884c\u6e05\u9664"),(0,i.kt)("h4",{parentName:"div",id:"autorefreshapp-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"autoRefreshApp?: boolean")),(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4e3b\u5e94\u7528\u8df3\u8f6c\u5b50\u5e94\u7528\u5b50\u8def\u7531\u4f1a\u66f4\u65b0\u7ec4\u4ef6"),(0,i.kt)("h4",{parentName:"div",id:"beforeload-appinfo-appinfo--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"beforeLoad?: (appInfo: AppInfo) => void")),(0,i.kt)("p",{parentName:"div"},"\u8d44\u6e90\u52a0\u8f7d\u524d\u8c03\u7528\uff0c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5c06\u963b\u6b62\u52a0\u8f7d ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"\uff0c\u6b64\u65f6\u5c31\u53ef\u80fd\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"app")),(0,i.kt)("h4",{parentName:"div",id:"beforemount-appinfo-appinfo-path-string--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"beforeMount?: (appInfo: AppInfo, path: string) => void")),(0,i.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u6302\u8f7d\u524d\u8c03\u7528"),(0,i.kt)("h4",{parentName:"div",id:"aftermount-appinfo-appinfo-path-string--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"afterMount?: (appInfo: AppInfo, path: string) => void")),(0,i.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u6302\u8f7d\u540e\u8c03\u7528"),(0,i.kt)("h4",{parentName:"div",id:"beforeunmount-appinfo-appinfo-path-string--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"beforeUnmount?: (appInfo: AppInfo, path: string) => void")),(0,i.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u9500\u6bc1\u524d\u8c03\u7528"),(0,i.kt)("h4",{parentName:"div",id:"afterunmount-appinfo-appinfo-path-string--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"afterUnmount?: (appInfo: AppInfo, path: string) => void")),(0,i.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u9500\u6bc1\u540e\u8c03\u7528"),(0,i.kt)("h4",{parentName:"div",id:"customloader-provider-any-path-string-module-app--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"customLoader?: (provider: any, path: string, module: App) => void")),(0,i.kt)("p",{parentName:"div"},"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u89c4\u5219"),(0,i.kt)("h4",{parentName:"div",id:"errorloadapp-err-error-appinfo-appinfo--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"errorLoadApp?: (err: Error, appInfo: AppInfo) => void")),(0,i.kt)("p",{parentName:"div"},"\u6355\u83b7\u52a0\u8f7d\u5b50\u5e94\u7528\u7684\u9519\u8bef"),(0,i.kt)("h4",{parentName:"div",id:"errormountapp-err-error-appinfo-appinfo--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"errorMountApp?: (err: Error, appInfo: AppInfo) => void")),(0,i.kt)("p",{parentName:"div"},"\u6355\u83b7\u6302\u8f7d\u5b50\u5e94\u7528\u65f6\u7684\u9519\u8bef"),(0,i.kt)("h4",{parentName:"div",id:"errorunmountapp-err-error-appinfo-appinfo--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"errorUnmountApp?: (err: Error, appInfo: AppInfo) => void")),(0,i.kt)("p",{parentName:"div"},"\u6355\u83b7\u5378\u8f7d\u5b50\u5e94\u7528\u65f6\u7684\u9519\u8bef"),(0,i.kt)("h4",{parentName:"div",id:"onnotmatchrouter-path-string--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"onNotMatchRouter?: (path: string) => void")),(0,i.kt)("p",{parentName:"div"},"\u672a\u5339\u914d\u5230\u5bf9\u5e94\u5b50\u5e94\u7528\u65f6\u89e6\u53d1"),(0,i.kt)("h3",{parentName:"div",id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from '@byted/garfish';\n\nGarfish.run({\n  sandbox: false,\n  basename: '/exmaple',\n  domGetter: '#submodule',\n  beforeMount() {\n    console.log('\u5e94\u7528\u6302\u8f7d\u524d');\n  },\n  afterUnmount() {\n    console.log('\u5e94\u7528\u9500\u6bc1\u540e');\n  },\n  apps: [\n    {\n      name: 'index',\n      activeWhen: '/index',\n      entry: 'sourceUrl', // js entry \u6216\u8005\u662f html entry\n    },\n  ],\n});\n")),(0,i.kt)("h2",{parentName:"div",id:"setexternal"},"setExternal"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.setExternal(nameOrObject: string | Record<string, any>, value?: any) : Garfish")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nameOrObject : Externals: { name: string, value: any }"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u5e94\u7528\u516c\u5171\u6a21\u5757\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," \u6a21\u5757\u5b9e\u4f8b")))),(0,i.kt)("h3",{parentName:"div",id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e3b\u5e94\u7528\u5171\u4eab\u7ec4\u4ef6\nimport Vue from 'vue';\nimport Vuex from 'vuex';\nimport VueRouter from 'vue-router';\nimport Garfish from '@byted/gar'\n\nGarfish.setExternal({\n  'vue': Vue,\n  'vuex': Vuex,\n  'vue-router': VueRouter,\n});\n\n\n// \u5b50\u5e94\u7528\uff0c\u4e0d\u4f1a\u5c06\u5171\u4eab\u7684\u4f9d\u8d56\u6253\u5305\u8fdb\u5165\u6e90\u7801\u3002\u5b50\u5e94\u7528\u5c06\u4f1a\u4f7f\u7528\u4e3b\u5e94\u7528\u5171\u4eab\u7684\u6a21\u5757\n// webpack.config.js\nmodule.exports = {\n  externals: {\n    'vue': 'vue',\n    'vuex': 'vuex',\n    'vue-router': 'vue-router',\n  },\n},\n")),(0,i.kt)("h2",{parentName:"div",id:"registerapp"},"registerApp"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.registerApp(app: AppInfo | AppInfo[]) : Garfish")),(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f\uff0c\u9664\u4e86\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.run")," \u542f\u52a8\u65f6\u6ce8\u518c\u4fe1\u606f\u5916\uff0c\u8fd8\u5141\u8bb8\u901a\u8fc7\u6b64\u65b9\u6cd5\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.registerApp({\n  name: 'childApp',\n  entry: 'sourceUrl',\n  activeWhen: '/xx',\n});\n\n// \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4\uff0c\u6ce8\u518c\u591a\u4e2a app\nGarfish.registerApp([\n  {\n    name: 'childApp',\n    entry: 'sourceUrl',\n    activeWhen: '/xx',\n  },\n]);\n")),(0,i.kt)("h2",{parentName:"div",id:"getglobalobject"},"getGlobalObject"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.getGlobalObject() : Window")),(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u83b7\u53d6\u539f\u751f\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u65e0\u8bba\u6b64\u65f6\u5904\u4e8e\u4e3b\u5e94\u7528\u8fd8\u662f\u5b50\u5e94\u7528\u4e2d\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const nativeWindow = Garfish.getGlobalObject();\n")),(0,i.kt)("h2",{parentName:"div",id:"setglobalvalue"},"setGlobalValue"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.setGlobalValue(key: string | symbol, value: any) : Garfish")),(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u7ed9\u5168\u5c40\u5bf9\u8c61\u8bbe\u7f6e\u4e00\u4e2a\u503c\uff0c\u8fd9\u4f1a\u5141\u8bb8\u9003\u9038\u6c99\u7bb1\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.setGlobalValue('a', 1);\nconsole.log(Garfish.getGlobalObject().a); // 1\n")),(0,i.kt)("h2",{parentName:"div",id:"clearescapeeffect"},"clearEscapeEffect"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.clearEscapeEffect(key: string | symbol): Garfish")),(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u53d1\u73b0\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u884c\u4e3a\u4f1a\u9003\u9038\u6c99\u7bb1\u7cfb\u7edf\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u6cd5\u6765\u6e05\u9664\u9003\u9038\u7684\u53d8\u91cf\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.clearEscapeEffect('webpackJsonp');\n")),(0,i.kt)("h2",{parentName:"div",id:"loadapp"},"loadApp"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp(appName: string, options?: Options) : App | null")),(0,i.kt)("p",{parentName:"div"},"\u624b\u52a8\u52a0\u8f7d\u7684 api\uff0c\u8be6\u7ec6\u7684\u7528\u6cd5\u8bf7\u770b",(0,i.kt)("a",{parentName:"p",href:"/api/attributes/loadApp"},"\u624b\u52a8\u52a0\u8f7d app \u6587\u6863")))))}u.isMDXComponent=!0}}]);