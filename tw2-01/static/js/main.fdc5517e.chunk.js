(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t),c.d(t,"actionTypes",(function(){return n}));var n={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",BLOG_START_FETCHING:"BLOG_START_FETCHING",BLOG_FETCHED:"BLOG_FETCHED",BLOG_FETCH_ERROR:"BLOG_FETCH_ERROR"}},38:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(13),s=c.n(r),o=(c(38),c(9)),i=c(15),d=c(31),l=c(32),j=c(10).actionTypes,h={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},b={blog_fetching:!1,blog_fetched:!1,blog_fetch_error:"",blog_data:[],blog_dataLength:0},g=Object(i.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case j.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case j.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.BLOG_START_FETCHING:return{blog_fetching:!0,blog_data:[]};case j.BLOG_FETCHED:return{blog_data:t.data,blog_fetched:!0,blog_dataLength:t.data.length};case j.BLOG_FETCH_ERROR:return{blog_fetched:!1,blog_fetching:!1,blog_fetch_error:t.error};default:return e}}}),u=Object(i.a)(l.a,Object(d.createLogger)()),v=Object(i.c)(g,u),O=c(14),_=c(3),x=c(1);var f=function(){return Object(x.jsxs)("div",{children:["home",Object(x.jsx)("h1",{children:"Blogs"})]})};var m=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"About page"})})};var p=function(){return Object(x.jsx)("div",{children:"Contact page"})};var N=function(){var e=Object(o.c)((function(e){return e.reducerBlog.blog_data}));return console.log(e),Object(x.jsx)("div",{children:"BLog page"})},T=c(33);var w=function(){return Object(x.jsx)("div",{className:"w-5",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})};var E=function(){return Object(x.jsxs)("div",{className:"w-full flex justify-end py-5",children:[Object(x.jsx)("div",{className:"w-5 mr-4 hidden md:block",children:Object(x.jsx)(w,{})}),Object(x.jsx)("div",{className:"w-5 mr-4",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})}),Object(x.jsx)("div",{className:"w-5 mr-2",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})};var y=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("img",{style:{width:"4rem",height:"auto"},src:"./logo-sqr.png",alt:"logo"})})};var A=function(e){var t=e.showHideNav,c=e.data;return Object(x.jsx)("div",{className:"grid gap-2 md:flex font-thin text-sm",children:c.length>0&&c.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(O.b,{to:e.uri.replace("base:",""),onClick:t,className:"px-3 py-2",children:e.title})},e.key)}))})};var C=function(e){var t=e.crossed;return Object(x.jsxs)("div",{className:"cursor-pointer p-5",children:[Object(x.jsxs)("div",{className:"".concat(t?"hidden":""),children:[Object(x.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(x.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(x.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(x.jsx)("div",{className:"".concat(t?"":"hidden"),children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(x.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var R=function(){var e=Object(n.useState)(!1),t=Object(T.a)(e,2),c=t[0],a=t[1];function r(){return a(!c)}var s=Object(o.c)((function(e){return e.reducerMainNav.nav_data}));return console.log("menudata",s),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex bg-gray-900 text-gray-100",children:[Object(x.jsxs)("div",{className:"flex flex-col w-28 md:w-full md:order-2",children:[Object(x.jsx)("div",{className:"md:hidden",children:Object(x.jsxs)("div",{className:"flex relative",children:[Object(x.jsx)("div",{onClick:r,children:Object(x.jsx)(C,{crossed:c})}),Object(x.jsx)("div",{className:"relative top-5",children:Object(x.jsx)(w,{})})]})}),Object(x.jsx)("div",{className:"hidden md:block md:py-5",children:Object(x.jsx)(A,{data:s||[]})})]}),Object(x.jsx)("div",{className:"flex justify-center w-full md:w-28 md:order-1",children:Object(x.jsx)(y,{})}),Object(x.jsx)("div",{className:"w-28 md:order-3",children:Object(x.jsx)(E,{})})]}),Object(x.jsx)("div",{className:"".concat(c?"flex py-5 md:hidden":"hidden"),children:Object(x.jsx)(A,{showHideNav:r,data:s||[]})})]})},F=c(10),H=c(20),L=c.n(H),I="https://yellow-website.com/d9-blog";var M=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){console.log("test"),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(I,"/api/menu_items/main"),c="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;console.log(c);var n="".concat(I,"/rest/blog"),a="http://localhost:3000"===window.location.origin?"./data/blog.json":n;return console.log(a),function(t){t({type:F.actionTypes.MAIN_NAV_START_FETCHING}),L.a.get(c,e).then((function(e){console.log("action",e.data),t({type:F.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:F.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:F.actionTypes.BLOG_START_FETCHING}),L.a.get(a,e).then((function(e){console.log("action",e.data),t({type:F.actionTypes.BLOG_FETCHED,data:e.data})})).catch((function(e){t({type:F.actionTypes.BLOG_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(x.jsxs)("div",{className:"bg-gray-100 min-h-full w-full",children:[Object(x.jsxs)(O.a,{children:[Object(x.jsx)(R,{}),Object(x.jsxs)(_.c,{children:[Object(x.jsx)(_.a,{exact:!0,path:"/",component:f}),Object(x.jsx)(_.a,{path:"/about",component:m}),Object(x.jsx)(_.a,{path:"/contact",component:p}),Object(x.jsx)(_.a,{path:"/blog",component:N})]})]}),Object(x.jsx)("h1",{className:"text-5xl",children:"Router..."})]})};var B=function(){return Object(x.jsx)(o.a,{store:v,children:Object(x.jsx)(M,{})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),G()}},[[66,1,2]]]);
//# sourceMappingURL=main.fdc5517e.chunk.js.map