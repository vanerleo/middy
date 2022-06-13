"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8185],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},265:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"ws-router"},d=void 0,u={unversionedId:"routers/ws-router",id:"routers/ws-router",title:"ws-router",description:"This handler can route to requests to one of a nested handler based on routeKey of an WebSocket event from API Gateway (WebSocket).",source:"@site/docs/routers/ws-router.md",sourceDirName:"routers",slug:"/routers/ws-router",permalink:"/docs/routers/ws-router",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/routers/ws-router.md",tags:[],version:"current",lastUpdatedAt:1655141669,formattedLastUpdatedAt:"6/13/2022",frontMatter:{title:"ws-router"},sidebar:"tutorialSidebar",previous:{title:"http-router",permalink:"/docs/routers/http-router"},next:{title:"Upgrade",permalink:"/docs/category/upgrade"}},s={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This handler can route to requests to one of a nested handler based on ",(0,a.kt)("inlineCode",{parentName:"p"},"routeKey")," of an WebSocket event from API Gateway (WebSocket)."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install this middleware you can use NPM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/ws-router\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"routes")," (array","[{routeKey, handler}]",") (required): Array of route objects.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"routeKey")," (string) (required): AWS formatted route key. ie ",(0,a.kt)("inlineCode",{parentName:"li"},"$connect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$disconnect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handler")," (function) (required): Any ",(0,a.kt)("inlineCode",{parentName:"li"},"handler(event, context, {signal})")," function")))),(0,a.kt)("p",null,"NOTES:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Errors should be handled as part of the router middleware stack ",(0,a.kt)("strong",{parentName:"li"},"or")," the lambdaHandler middleware stack. Handled errors in the later will trigger the ",(0,a.kt)("inlineCode",{parentName:"li"},"after")," middleware stack of the former."),(0,a.kt)("li",{parentName:"ul"},"Shared middlewares, connected to the router middleware stack, can only be run before the lambdaHandler middleware stack.")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsRouterHandler from '@middy/ws-router'\nimport wsResponseMiddleware from '@middy/ws-response'\nimport validatorMiddleware from '@middy/validator'\n\nconst connectHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return 'connected'\n  })\n\nconst disconnectHandler = middy()\n  .use(validatorMiddleware({eventSchema: {...} }))\n  .handler((event, context) => {\n    return 'disconnected'\n  })\n\nexport const handler = middy()\n  .use(wsResponseMiddleware())\n  .handler(wsRouterHandler([\n    {\n      routeKey: '$connect',\n      handler: connectHandler\n    },\n    {\n      routeKey: '$disconnect',\n      handler: disconnectHandler\n    }\n  ]))\n")))}m.isMDXComponent=!0}}]);