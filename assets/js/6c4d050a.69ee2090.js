"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5512],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),u=n(7094),s=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),N=g.tabGroupChoices,T=g.setTabGroupChoices,O=(0,a.useState)(w),E=O[0],j=O[1],z=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=N[h];null!=P&&P!==E&&b.some((function(e){return e.value===P}))&&j(P)}var x=function(e){var t=e.currentTarget,n=z.indexOf(t),r=b[n].value;r!==E&&(C(t),j(r),null!=h&&T(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=z.indexOf(e.currentTarget)+1;n=null!=(r=z[a])?r:z[0];break;case"ArrowLeft":var l,o=z.indexOf(e.currentTarget)-1;n=null!=(l=z[o])?l:z[z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return z.push(e)},onKeyDown:I,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},3058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),u=["components"],s={title:"http-header-normalizer"},d=void 0,c={unversionedId:"middlewares/http-header-normalizer",id:"middlewares/http-header-normalizer",title:"http-header-normalizer",description:"This middleware normalizes HTTP header names to their canonical format. Very useful if clients are",source:"@site/docs/middlewares/http-header-normalizer.md",sourceDirName:"middlewares",slug:"/middlewares/http-header-normalizer",permalink:"/docs/middlewares/http-header-normalizer",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-header-normalizer.md",tags:[],version:"current",lastUpdatedAt:1669794281,formattedLastUpdatedAt:"11/30/2022",frontMatter:{title:"http-header-normalizer"},sidebar:"tutorialSidebar",previous:{title:"http-event-normalizer",permalink:"/docs/middlewares/http-event-normalizer"},next:{title:"http-json-body-parser",permalink:"/docs/middlewares/http-json-body-parser"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This middleware normalizes HTTP header names to their canonical format. Very useful if clients are\nnot using the canonical names of header (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," as opposed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type"),")."),(0,l.kt)("p",null,"API Gateway does not perform any normalization, so the headers are propagated to Lambda\nexactly as they were sent by the client."),(0,l.kt)("p",null,"Other middlewares like ",(0,l.kt)("a",{parentName:"p",href:"#jsonbodyparser"},(0,l.kt)("inlineCode",{parentName:"a"},"jsonBodyParser"))," or ",(0,l.kt)("a",{parentName:"p",href:"#urlencodebodyparser"},(0,l.kt)("inlineCode",{parentName:"a"},"urlEncodeBodyParser")),"\nwill rely on headers to be in the canonical format, so if you want to support non-normalized headers in your\napp you have to use this middleware before those ones."),(0,l.kt)("p",null,"This middleware will copy the original headers in ",(0,l.kt)("inlineCode",{parentName:"p"},"event.rawHeaders"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-header-normalizer\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-header-normalizer\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"normalizeHeaderKey")," (function) (optional): a function that accepts an header name as a parameter and returns its\ncanonical representation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"canonical")," (bool) (optional): if true, modifies the headers to canonical format, otherwise the headers are normalized to lowercase (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler\n  .use(httpHeaderNormalizer())\n")))}h.isMDXComponent=!0}}]);