(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",BLOG_START_FETCHING:"BLOG_START_FETCHING",BLOG_FETCHED:"BLOG_FETCHED",BLOG_FETCH_ERROR:"BLOG_FETCH_ERROR",TAXONOMY_START_FETCHING:"TAXONOMY_START_FETCHING",TAXONOMY_FETCHED:"TAXONOMY_FETCHED",TAXONOMY_FETCH_ERROR:"TAXONOMY_FETCH_ERROR",SELECTED_YEAR_MONTH:"SELECTED_YEAR_MONTH"}},43:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),o=n.n(r),s=(n(43),n(3)),i=n(21),l=n(37),d=n(38),j=n(11).actionTypes,b={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},u={blog_fetching:!1,blog_fetched:!1,blog_fetch_error:"",blog_data:[],blog_dataLength:0},h={taxonomy_fetching:!1,taxonomy_fetched:!1,taxonomy_fetch_error:"",taxonomy_data:[],taxonomy_dataLength:0},O={blog_YearMonth:null},x=Object(i.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case j.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case j.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.BLOG_START_FETCHING:return{blog_fetching:!0,blog_data:[]};case j.BLOG_FETCHED:return{blog_data:t.data,blog_fetched:!0,blog_dataLength:t.data.length};case j.BLOG_FETCH_ERROR:return{blog_fetched:!1,blog_fetching:!1,blog_fetch_error:t.error};default:return e}},reducerTaxonomy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TAXONOMY_START_FETCHING:return{taxonomy_fetching:!0,taxonomy_data:[]};case j.TAXONOMY_FETCHED:return{taxonomy_data:t.data,taxonomy_fetched:!0,taxonomy_dataLength:t.data.length};case j.TAXONOMY_FETCH_ERROR:return{taxonomy_fetched:!1,taxonomy_fetching:!1,taxonomy_fetch_error:t.error};default:return e}},reducerBlogYearMonth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SELECTED_YEAR_MONTH:return{blog_YearMonth:t.YearMonth};default:return e}}}),m=Object(i.a)(d.a,Object(l.createLogger)()),v=Object(i.c)(x,m),g=n(6),f=n(5),_=n(0);var p=function(e){var t=e.data;return Object(_.jsx)("div",{children:t.length>0&&t.map((function(e){return Object(_.jsx)("ul",{children:Object(_.jsx)("li",{children:Object(_.jsx)(g.b,{to:"/blog-post/".concat(e.nid),children:e.title})})},e.nid)}))})},N=n(4);var T=function(e){var t=e.title,n=e.body_1,c=e.nid,a=e.field_tags,r=e.created,o=e.index,s=new Date(r);return Object(_.jsxs)("div",{className:"p-5 border-1 border my-5 border-gray-300",children:[Object(_.jsxs)("div",{className:"mb-4",children:[Object(_.jsx)("h1",{className:"text-2xl",children:t}),Object(_.jsxs)("div",{className:"my-2 flex justify-end font-thin",children:["Date:",s.getDate()," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],", ",s.getFullYear()]}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:n+"..."}})})]}),Object(_.jsxs)("div",{className:"flex flex-row",children:[Object(_.jsx)(g.b,{className:"border border-gray-600 px-5 py-1",to:"/blog-post/".concat(c),children:"More"}),Object(_.jsxs)("p",{className:"ml-10",children:["Tag: ",a]})]}),Object(_.jsxs)("div",{className:"w-full text-xs mt-4 font-thin flex justify-center",children:["Index - ",o]})]})};var y=function(e){var t=e.tid,n=e.data,a=n.length+5,r=t||null;console.log(r);var o=10,s=Object(c.useState)([]),i=Object(N.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(1),b=Object(N.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(0),x=Object(N.a)(O,2),m=x[0],v=x[1],g=Object(c.useState)(0),f=Object(N.a)(g,2),p=f[0],y=f[1],E=Object(c.useState)(o),w=Object(N.a)(E,2),C=w[0],M=w[1];Object(c.useEffect)((function(){d(n.slice(p,C)),v()}),[n,p,C]),console.log("Pages",p,C,m);var A=function(e){switch(e){case"next":p>=a-o?(y(p),M(C)):(y(p+o),M(C+o)),h(u+1);break;case"prev":0===p?(y(p),M(C)):(y(p-o),M(C-o)),h(u-1);break;default:return""}};return Object(_.jsxs)("div",{children:[r&&Object(_.jsxs)("h2",{className:"m-5",children:["Tag Id: ",t]}),l.length>0&&l.map((function(e,t){var n=e.field_tags_1.split(",");return(null===r||n.includes(r))&&Object(_.jsx)(T,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created,index:t},e.nid)})),Object(_.jsxs)("div",{className:"flex justify-center",children:[u>1&&Object(_.jsx)("div",{onClick:function(){return A("prev")},className:"ml-3",children:"Prev"}),Object(_.jsxs)("div",{children:["- Page ",u,"-"]}),C<=a&&Object(_.jsx)("div",{onClick:function(){return A("next")},className:"mr-3",children:"Next"})]})]})},E=n(11),w=n(13),C=n.n(w),M="https://yellow-website.com/d9-blog";var A=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(c.useEffect)((function(){console.log("test"),t===[]&&e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(M,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(M,"/rest/blog"),a="http://localhost:3000"===window.location.origin?"./data/blog.json":c,r="".concat(M,"/rest/taxonomy"),o="http://localhost:3000"===window.location.origin?"./data/taxonomy.json":r;return function(t){t({type:E.actionTypes.MAIN_NAV_START_FETCHING}),C.a.get(n,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:E.actionTypes.BLOG_START_FETCHING}),C.a.get(a,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.BLOG_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.BLOG_FETCH_ERROR,fetched:!1,error:e})})),t({type:E.actionTypes.TAXONOMY_START_FETCHING}),C.a.get(o,e).then((function(e){console.log("action",e.data),t({type:E.actionTypes.TAXONOMY_FETCHED,data:e.data})})).catch((function(e){t({type:E.actionTypes.TAXONOMY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e,t]),Object(_.jsx)("div",{})};var R=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return console.log("DATA ----",e),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"HOME PAGE"}),Object(_.jsx)(p,{data:e}),Object(_.jsx)(y,{data:e})]})};var S=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:"About page"})})};var F=function(){return Object(_.jsx)("div",{children:"Contact page"})};var H=function(){var e=Object(s.c)((function(e){return e.reducerTaxonomy.taxonomy_data}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"my-5",children:"Taxonomy"}),Object(_.jsx)("div",{className:"flex flex-row",children:e.length>0&&e.map((function(e){var t=e.name;return Object(_.jsx)("div",{className:"m-2",children:Object(_.jsx)(g.b,{to:"/blogs-by-tag/".concat(e.tid),children:t.substring(0,15)})},e.tid)}))})]})},L=n(26);var k=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)([]),n=Object(N.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(N.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(),b=Object(N.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(),x=Object(N.a)(O,2),m=x[0],v=x[1];Object(c.useEffect)((function(){var t=[];e&&e.map((function(e){var n=new Date(e.created).getFullYear();t.push(n);var c=Object(L.a)(new Set(t));d(c)}))}),[e]),Object(c.useEffect)((function(){var t=[];u&&e&&e.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth();parseInt(u)===n&&t.push(c);var a=Object(L.a)(new Set(t));r(a)}))}),[u,e]);var g=Object(s.b)();Object(c.useEffect)((function(){var e="".concat(u,"-").concat(m);u&&m&&g(function(e){return{type:E.actionTypes.SELECTED_YEAR_MONTH,YearMonth:e}}(e))}),[m,u,l,a,g]),console.log(u,m);var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(_.jsxs)("form",{children:[Object(_.jsxs)("select",{onChange:function(e){return h(e.target.value)},children:[Object(_.jsx)("option",{children:"-- Year --"}),l.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]}),Object(_.jsxs)("select",{onChange:function(e){return v(e.target.value)},children:[Object(_.jsx)("option",{children:"-- Month --"}),a.map((function(e,t){return Object(_.jsx)("option",{value:e,children:f[e]},t)}))]})]})};var I=function(e){var t=e.YearMonth,n=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(_.jsx)("div",{children:n.length>0&&n.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth(),a="".concat(n,"-").concat(c);return t===a&&Object(_.jsx)(T,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created},e.nid)}))})};var Y=function(){var e=Object(s.c)((function(e){return e.reducerBlogYearMonth.blog_YearMonth}));return Object(_.jsxs)("div",{className:"m-10",children:[Object(_.jsx)("div",{className:"my-10",children:Object(_.jsx)("h1",{children:"BLOG POST"})}),Object(_.jsx)("div",{children:Object(_.jsx)(k,{})}),Object(_.jsx)(H,{}),null===e?Object(_.jsx)(y,{}):Object(_.jsx)(I,{YearMonth:e})]})};var G=function(){return Object(_.jsx)("div",{className:"w-5",children:Object(_.jsx)(g.b,{to:"/blog-search",children:Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(_.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})};var D=function(){return Object(_.jsxs)("div",{className:"w-full flex justify-end py-5",children:[Object(_.jsx)("div",{className:"w-5 mr-4 hidden md:block",children:Object(_.jsx)(G,{})}),Object(_.jsx)("div",{className:"w-5 mr-4",children:Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(_.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),Object(_.jsx)("div",{className:"w-5 mr-2",children:Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(_.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})})})]})};var B=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{style:{width:"4rem",height:"auto"},src:"./logo-sqr.png",alt:"logo"})})};var X=function(e){var t=e.showHideNav,n=e.data;return Object(_.jsx)("div",{className:"grid gap-2 md:flex font-thin text-sm",children:n.length>0&&n.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(g.b,{to:"/".concat(e.uri.replace("base:","")),onClick:t,className:"px-3 py-2",children:e.title})},e.key)}))})};var V=function(e){var t=e.crossed;return Object(_.jsxs)("div",{className:"cursor-pointer p-5",children:[Object(_.jsxs)("div",{className:"".concat(t?"hidden":""),children:[Object(_.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(_.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(_.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(_.jsx)("div",{className:"".concat(t?"":"hidden"),children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(_.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var J=function(){var e=Object(c.useState)(!1),t=Object(N.a)(e,2),n=t[0],a=t[1];function r(){return a(!n)}var o=Object(s.c)((function(e){return e.reducerMainNav.nav_data}));return console.log("menudata",o),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"flex bg-gray-900 text-gray-100",children:[Object(_.jsx)(A,{}),Object(_.jsxs)("div",{className:"flex flex-col w-28 md:w-full md:order-2",children:[Object(_.jsx)("div",{className:"md:hidden",children:Object(_.jsxs)("div",{className:"flex relative",children:[Object(_.jsx)("div",{onClick:r,children:Object(_.jsx)(V,{crossed:n})}),Object(_.jsx)("div",{className:"relative top-5",children:Object(_.jsx)(G,{})})]})}),Object(_.jsx)("div",{className:"hidden md:block md:py-5",children:Object(_.jsx)(X,{data:o||[]})})]}),Object(_.jsx)("div",{className:"flex justify-center w-full md:w-28 md:order-1",children:Object(_.jsx)(B,{})}),Object(_.jsx)("div",{className:"w-28 md:order-3",children:Object(_.jsx)(D,{})})]}),Object(_.jsx)("div",{className:"".concat(n?"flex py-5 md:hidden":"hidden"),children:Object(_.jsx)(X,{showHideNav:r,data:o||[]})})]})},P=n(15),U=n.n(P),q=n(20),W=null,z=Object(q.a)(U.a.mark((function e(){var t,n,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W){e.next=14;break}return t=M+"/session/token",e.prev=2,e.next=5,C.a.get(t,{withCredentials:!0});case 5:n=e.sent,c=n.data,W=C.a.create({baseURL:M,withCredentials:!0,headers:{"X-CSRF-Token":c},params:{_format:"json"}}),console.log("Created new axios instance",W),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",W),e.abrupt("return",W);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));var K=function(e){var t=e.nid,n=Object(c.useState)(""),a=Object(N.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(N.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(N.a)(j,2),u=b[0],h=b[1],O=function(){var e=Object(q.a)(U.a.mark((function e(n){var c,a,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={entity_id:[{target_id:"".concat(t)}],subject:[{value:"".concat(l)}],entity_type:[{value:"node"}],comment_type:[{target_id:"comment"}],field_name:[{value:"comment"}],comment_body:[{value:"".concat(r),basic_html:"basic_html"}]},e.prev=2,e.next=5,z();case 5:return a=e.sent,e.next=8,a.post("/comment",c);case 8:s=e.sent,console.log("Node created :",s.status),201===s.status&&(d(""),o(""),h(!0)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"mt-10",children:[Object(_.jsx)("div",{className:"".concat(u?"block flex justify-center":"hidden"),children:Object(_.jsx)("p",{className:"text-xl",children:"Thank you. Your comment has been submited"})}),Object(_.jsxs)("form",{onSubmit:O,className:"".concat(u?"hidden":"bock flex flex-col"),children:[Object(_.jsx)("h1",{children:"Comment Form"}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{type:"text",className:"mb-3 border border-gray-600 p-3",required:!0,name:"title",onChange:function(e){return d(e.target.value)},value:l,placeholder:"Title"})}),Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{className:"mb-3 border border-gray-600 h-36 p-3",required:!0,name:"comment",onChange:function(e){return o(e.target.value)},value:r,placeholder:"Comment.."})}),Object(_.jsx)("input",{className:"border border-gray-600",type:"submit",name:"submit",value:"Submit"})]})]})};var Q=function(){var e=Object(f.f)().nid,t=Object(s.c)((function(e){return e.reducerBlog.blog_data})),n="".concat(M,"/user/login_status?_format=json"),a=Object(c.useState)(""),r=Object(N.a)(a,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){C()({method:"GET",url:n,headers:{Accept:"application/vnd.api+json"}}).then((function(e){console.log("LOGIN STATUS",e.data),1===e.data?i(!0):i(!1)})).catch((function(e){return console.log("ERROR USER LOGIN STATUS",e)}))}),[n]),console.log("login-Status",o),Object(_.jsx)("div",{children:t.length>0&&t.map((function(t){return t.nid===e&&Object(_.jsxs)("div",{className:"p-10 m-5",children:[Object(_.jsx)("h1",{className:"text-3xl my-5",children:t.title}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:t.field_image,alt:t.field_image_1})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})}),Object(_.jsx)("div",{className:"".concat(o?"block":"hidden"),children:Object(_.jsx)(K,{nid:e})}),Object(_.jsx)("div",{className:"".concat(o?"hidden":"block mt-10"),children:Object(_.jsx)("p",{children:"Please Login for comment"})})]},t.nid)}))})};var Z=function(){var e=Object(f.f)().tid;return Object(_.jsx)(y,{tid:e})};var $=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)(),n=Object(N.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(N.a)(o,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){e.length>0&&a&&d(e.filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())||e.title.toLowerCase().includes(a.toLowerCase())})))}),[a,e]),console.log(a,l,e),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"m-5",children:[Object(_.jsx)("h1",{className:"text-2xl",children:"Search"}),Object(_.jsx)("input",{className:"w-96 p-2 border",type:"text",onChange:function(e){return r(e.target.value)},value:a})]}),l.length>0&&l.map((function(e){var t=e.body.substring(0,250),n=function(e,t){var n=e;return t.replace(new RegExp(n,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}(a,e.title);return Object(_.jsxs)("div",{className:"my-10 border p-10",children:[Object(_.jsx)("h2",{className:"text-2xl",children:Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}),Object(_.jsx)("div",{className:"mb-5",dangerouslySetInnerHTML:{__html:t}}),Object(_.jsx)(g.b,{className:"border px-6 py-2 my-5",to:"/blog-post/".concat(e.nid),children:"Read"})]},e.nid)}))]})};var ee=function(){return Object(_.jsx)("div",{className:"bg-gray-100 min-h-full w-full",children:Object(_.jsxs)(g.a,{children:[Object(_.jsx)(J,{}),Object(_.jsxs)(f.c,{children:[Object(_.jsx)(f.a,{exact:!0,path:"/",component:R}),Object(_.jsx)(f.a,{path:"/about",component:S}),Object(_.jsx)(f.a,{path:"/contact",component:F}),Object(_.jsx)(f.a,{path:"/blog",component:Y}),Object(_.jsx)(f.a,{path:"/blog-post/:nid",component:Q}),Object(_.jsx)(f.a,{path:"/blogs-by-tag/:tid",component:Z}),Object(_.jsx)(f.a,{path:"/blog-search",component:$})]})]})})};var te=function(){return Object(_.jsx)(s.a,{store:v,children:Object(_.jsx)(ee,{})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(te,{})}),document.getElementById("root")),ne()}},[[72,1,2]]]);
//# sourceMappingURL=main.bf59bb08.chunk.js.map