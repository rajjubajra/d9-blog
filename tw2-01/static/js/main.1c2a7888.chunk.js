(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t),c.d(t,"actionTypes",(function(){return n}));var n={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",BLOG_START_FETCHING:"BLOG_START_FETCHING",BLOG_FETCHED:"BLOG_FETCHED",BLOG_FETCH_ERROR:"BLOG_FETCH_ERROR",TAXONOMY_START_FETCHING:"TAXONOMY_START_FETCHING",TAXONOMY_FETCHED:"TAXONOMY_FETCHED",TAXONOMY_FETCH_ERROR:"TAXONOMY_FETCH_ERROR",SELECTED_YEAR_MONTH:"SELECTED_YEAR_MONTH"}},41:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(16),o=c.n(r),s=(c(41),c(3)),i=c(19),l=c(35),d=c(36),j=c(11).actionTypes,b={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},u={blog_fetching:!1,blog_fetched:!1,blog_fetch_error:"",blog_data:[],blog_dataLength:0},h={taxonomy_fetching:!1,taxonomy_fetched:!1,taxonomy_fetch_error:"",taxonomy_data:[],taxonomy_dataLength:0},O={blog_YearMonth:null},x=Object(i.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case j.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case j.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.BLOG_START_FETCHING:return{blog_fetching:!0,blog_data:[]};case j.BLOG_FETCHED:return{blog_data:t.data,blog_fetched:!0,blog_dataLength:t.data.length};case j.BLOG_FETCH_ERROR:return{blog_fetched:!1,blog_fetching:!1,blog_fetch_error:t.error};default:return e}},reducerTaxonomy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TAXONOMY_START_FETCHING:return{taxonomy_fetching:!0,taxonomy_data:[]};case j.TAXONOMY_FETCHED:return{taxonomy_data:t.data,taxonomy_fetched:!0,taxonomy_dataLength:t.data.length};case j.TAXONOMY_FETCH_ERROR:return{taxonomy_fetched:!1,taxonomy_fetching:!1,taxonomy_fetch_error:t.error};default:return e}},reducerBlogYearMonth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SELECTED_YEAR_MONTH:return{blog_YearMonth:t.YearMonth};default:return e}}}),v=Object(i.a)(d.a,Object(l.createLogger)()),g=Object(i.c)(x,v),f=c(5),_=c(4),m=c(0);var p=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(m.jsx)("div",{children:e.length>0&&e.map((function(e){return Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(f.b,{to:"/blog-post/".concat(e.nid),children:e.title})})},e.nid)}))})},N=c(6);var T=function(e){var t=e.title,c=e.body_1,n=e.nid,a=e.field_tags,r=e.created,o=e.index,s=new Date(r);return Object(m.jsxs)("div",{className:"p-5 border-1 border my-5 border-gray-300",children:[Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("h1",{className:"text-2xl",children:t}),Object(m.jsxs)("div",{className:"my-2 flex justify-end font-thin",children:["Date:",s.getDate()," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],", ",s.getFullYear()]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:c+"..."}})})]}),Object(m.jsxs)("div",{className:"flex flex-row",children:[Object(m.jsx)(f.b,{className:"border border-gray-600 px-5 py-1",to:"/blog-post/".concat(n),children:"More"}),Object(m.jsxs)("p",{className:"ml-10",children:["Tag: ",a]})]}),Object(m.jsxs)("div",{className:"w-full text-xs mt-4 font-thin flex justify-center",children:["Index - ",o]})]})};var y=function(e){var t=e.tid,c=Object(s.c)((function(e){return e.reducerBlog.blog_data})),a=c.length+5,r=t||null;console.log(r);var o=10,i=Object(n.useState)([]),l=Object(N.a)(i,2),d=l[0],j=l[1],b=Object(n.useState)(1),u=Object(N.a)(b,2),h=u[0],O=u[1],x=Object(n.useState)(0),v=Object(N.a)(x,2),g=(v[0],v[1]),f=Object(n.useState)(0),_=Object(N.a)(f,2),p=_[0],y=_[1],E=Object(n.useState)(o),w=Object(N.a)(E,2),M=w[0],A=w[1];Object(n.useEffect)((function(){j(c.slice(p,M)),g()}),[c,p,M]),console.log("Pages",p,M);var C=function(e){switch(e){case"next":if(p>=a-o)y(p),A(M);else{y(p+o);Math.floor(a/o+a%o);A(M+o)}O(h+1);break;case"prev":0===p?(y(p),A(M)):(y(p-o),A(M-o)),O(h-1);break;default:return""}};return Object(m.jsxs)("div",{children:[r&&Object(m.jsxs)("h2",{className:"m-5",children:["Tag Id: ",t]}),d.length>0&&d.map((function(e,t){var c=e.field_tags_1.split(",");return(null===r||c.includes(r))&&Object(m.jsx)(T,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created,index:t},e.nid)})),Object(m.jsxs)("div",{className:"flex justify-center",children:[h>1&&Object(m.jsx)("div",{onClick:function(){return C("prev")},className:"ml-3",children:"Prev"}),Object(m.jsxs)("div",{children:["- Page ",h,"-"]}),Object(m.jsx)("div",{onClick:function(){return C("next")},className:"mr-3",children:"Next"})]})]})},E=c(11),w=c(18),M=c.n(w),A="https://yellow-website.com/d9-blog";var C=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){console.log("test"),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(A,"/api/menu_items/main"),c="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,n="".concat(A,"/rest/blog"),a="http://localhost:3000"===window.location.origin?"./data/blog.json":n,r="".concat(A,"/rest/taxonomy"),o="http://localhost:3000"===window.location.origin?"./data/taxonomy.json":r;return function(t){t({type:E.actionTypes.MAIN_NAV_START_FETCHING}),M.a.get(c,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:E.actionTypes.BLOG_START_FETCHING}),M.a.get(a,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.BLOG_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.BLOG_FETCH_ERROR,fetched:!1,error:e})})),t({type:E.actionTypes.TAXONOMY_START_FETCHING}),M.a.get(o,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.TAXONOMY_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.TAXONOMY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(m.jsx)("div",{})};var R=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsx)("h1",{children:"HOME PAGE"}),Object(m.jsx)(p,{}),Object(m.jsx)(y,{})]})};var F=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"About page"})})};var H=function(){return Object(m.jsx)("div",{children:"Contact page"})};var L=function(){var e=Object(s.c)((function(e){return e.reducerTaxonomy.taxonomy_data}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"my-5",children:"Taxonomy"}),Object(m.jsx)("div",{className:"flex flex-row",children:e.length>0&&e.map((function(e){var t=e.name;return Object(m.jsx)("div",{className:"m-2",children:Object(m.jsx)(f.b,{to:"/blogs-by-tag/".concat(e.tid),children:t.substring(0,15)})},e.tid)}))})]})},S=c(24);var I=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(n.useState)([]),c=Object(N.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)([]),i=Object(N.a)(o,2),l=i[0],d=i[1],j=Object(n.useState)(),b=Object(N.a)(j,2),u=b[0],h=b[1],O=Object(n.useState)(),x=Object(N.a)(O,2),v=x[0],g=x[1];Object(n.useEffect)((function(){var t=[];e&&e.map((function(e){var c=new Date(e.created).getFullYear();t.push(c);var n=Object(S.a)(new Set(t));d(n)}))}),[e]),Object(n.useEffect)((function(){var t=[];u&&e&&e.map((function(e){var c=new Date(e.created).getFullYear(),n=new Date(e.created).getMonth();parseInt(u)===c&&t.push(n);var a=Object(S.a)(new Set(t));r(a)}))}),[u,e]);var f=Object(s.b)();Object(n.useEffect)((function(){var e="".concat(u,"-").concat(v);u&&v&&f(function(e){return{type:E.actionTypes.SELECTED_YEAR_MONTH,YearMonth:e}}(e))}),[v,u,l,a,f]),console.log(u,v);var _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(m.jsxs)("form",{children:[Object(m.jsxs)("select",{onChange:function(e){return h(e.target.value)},children:[Object(m.jsx)("option",{children:"-- Year --"}),l.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]}),Object(m.jsxs)("select",{onChange:function(e){return g(e.target.value)},children:[Object(m.jsx)("option",{children:"-- Month --"}),a.map((function(e,t){return Object(m.jsx)("option",{value:e,children:_[e]},t)}))]})]})};var Y=function(e){var t=e.YearMonth,c=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(m.jsx)("div",{children:c.length>0&&c.map((function(e){var c=new Date(e.created).getFullYear(),n=new Date(e.created).getMonth(),a="".concat(c,"-").concat(n);return t===a&&Object(m.jsx)(T,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created},e.nid)}))})};var D=function(){var e=Object(s.c)((function(e){return e.reducerBlogYearMonth.blog_YearMonth}));return Object(m.jsxs)("div",{className:"m-10",children:[Object(m.jsx)("div",{className:"my-10",children:Object(m.jsx)("h1",{children:"BLOG POST"})}),Object(m.jsx)("div",{children:Object(m.jsx)(I,{})}),Object(m.jsx)(L,{}),null===e?Object(m.jsx)(y,{}):Object(m.jsx)(Y,{YearMonth:e})]})};var B=function(){return Object(m.jsx)("div",{className:"w-5",children:Object(m.jsx)(f.b,{to:"/blog-search",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})};var G=function(){return Object(m.jsxs)("div",{className:"w-full flex justify-end py-5",children:[Object(m.jsx)("div",{className:"w-5 mr-4 hidden md:block",children:Object(m.jsx)(B,{})}),Object(m.jsx)("div",{className:"w-5 mr-4",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),Object(m.jsx)("div",{className:"w-5 mr-2",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})})})]})};var k=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{style:{width:"4rem",height:"auto"},src:"./logo-sqr.png",alt:"logo"})})};var V=function(e){var t=e.showHideNav,c=e.data;return Object(m.jsx)("div",{className:"grid gap-2 md:flex font-thin text-sm",children:c.length>0&&c.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(f.b,{to:"/".concat(e.uri.replace("base:","")),onClick:t,className:"px-3 py-2",children:e.title})},e.key)}))})};var X=function(e){var t=e.crossed;return Object(m.jsxs)("div",{className:"cursor-pointer p-5",children:[Object(m.jsxs)("div",{className:"".concat(t?"hidden":""),children:[Object(m.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(m.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(m.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(m.jsx)("div",{className:"".concat(t?"":"hidden"),children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(m.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var J=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),c=t[0],a=t[1];function r(){return a(!c)}var o=Object(s.c)((function(e){return e.reducerMainNav.nav_data}));return console.log("menudata",o),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"flex bg-gray-900 text-gray-100",children:[Object(m.jsx)(C,{}),Object(m.jsxs)("div",{className:"flex flex-col w-28 md:w-full md:order-2",children:[Object(m.jsx)("div",{className:"md:hidden",children:Object(m.jsxs)("div",{className:"flex relative",children:[Object(m.jsx)("div",{onClick:r,children:Object(m.jsx)(X,{crossed:c})}),Object(m.jsx)("div",{className:"relative top-5",children:Object(m.jsx)(B,{})})]})}),Object(m.jsx)("div",{className:"hidden md:block md:py-5",children:Object(m.jsx)(V,{data:o||[]})})]}),Object(m.jsx)("div",{className:"flex justify-center w-full md:w-28 md:order-1",children:Object(m.jsx)(k,{})}),Object(m.jsx)("div",{className:"w-28 md:order-3",children:Object(m.jsx)(G,{})})]}),Object(m.jsx)("div",{className:"".concat(c?"flex py-5 md:hidden":"hidden"),children:Object(m.jsx)(V,{showHideNav:r,data:o||[]})})]})};var P=function(){var e=Object(_.f)().nid;console.log("NODE ID - ",e);var t=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(m.jsx)("div",{children:t.length>0&&t.map((function(t){return t.nid===e&&Object(m.jsxs)("div",{className:"p-10 m-5",children:[Object(m.jsx)("h1",{className:"text-3xl my-5",children:t.title}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.field_image,alt:t.field_image_1})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})})]},t.nid)}))})};var W=function(){var e=Object(_.f)().tid;return Object(m.jsx)(y,{tid:e})};var q=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(n.useState)(),c=Object(N.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)([]),i=Object(N.a)(o,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){e.length>0&&a&&d(e.filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())||e.title.toLowerCase().includes(a.toLowerCase())})))}),[a,e]),console.log(a,l,e),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"m-5",children:[Object(m.jsx)("h1",{className:"text-2xl",children:"Search"}),Object(m.jsx)("input",{className:"w-96 p-2 border",type:"text",onChange:function(e){return r(e.target.value)},value:a})]}),l.length>0&&l.map((function(e){var t=e.body.substring(0,250),c=function(e,t){var c=e;return t.replace(new RegExp(c,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}(a,e.title);return Object(m.jsxs)("div",{className:"my-10 border p-10",children:[Object(m.jsx)("h2",{className:"text-2xl",children:Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:c}})}),Object(m.jsx)("div",{className:"mb-5",dangerouslySetInnerHTML:{__html:t}}),Object(m.jsx)(f.b,{className:"border px-6 py-2 my-5",to:"/blog-post/".concat(e.nid),children:"Read"})]},e.nid)}))]})};var z=function(){return Object(m.jsx)("div",{className:"bg-gray-100 min-h-full w-full",children:Object(m.jsxs)(f.a,{children:[Object(m.jsx)(J,{}),Object(m.jsxs)(_.c,{children:[Object(m.jsx)(_.a,{exact:!0,path:"/",component:R}),Object(m.jsx)(_.a,{path:"/about",component:F}),Object(m.jsx)(_.a,{path:"/contact",component:H}),Object(m.jsx)(_.a,{path:"/blog",component:D}),Object(m.jsx)(_.a,{path:"/blog-post/:nid",component:P}),Object(m.jsx)(_.a,{path:"/blogs-by-tag/:tid",component:W}),Object(m.jsx)(_.a,{path:"/blog-search",component:q})]})]})})};var K=function(){return Object(m.jsx)(s.a,{store:g,children:Object(m.jsx)(z,{})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),Q()}},[[69,1,2]]]);
//# sourceMappingURL=main.1c2a7888.chunk.js.map