(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",BLOG_START_FETCHING:"BLOG_START_FETCHING",BLOG_FETCHED:"BLOG_FETCHED",BLOG_FETCH_ERROR:"BLOG_FETCH_ERROR",TAXONOMY_START_FETCHING:"TAXONOMY_START_FETCHING",TAXONOMY_FETCHED:"TAXONOMY_FETCHED",TAXONOMY_FETCH_ERROR:"TAXONOMY_FETCH_ERROR",SELECTED_YEAR_MONTH:"SELECTED_YEAR_MONTH"}},43:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),o=n.n(r),s=(n(43),n(4)),i=n(3),l=n(21),d=n(37),j=n(38),u=n(11).actionTypes,b={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},h={blog_fetching:!1,blog_fetched:!1,blog_fetch_error:"",blog_data:[],blog_dataLength:0},O={taxonomy_fetching:!1,taxonomy_fetched:!1,taxonomy_fetch_error:"",taxonomy_data:[],taxonomy_dataLength:0},x={blog_YearMonth:null},v=Object(l.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case u.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case u.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.BLOG_START_FETCHING:return{blog_fetching:!0,blog_data:[]};case u.BLOG_FETCHED:return{blog_data:t.data,blog_fetched:!0,blog_dataLength:t.data.length};case u.BLOG_FETCH_ERROR:return{blog_fetched:!1,blog_fetching:!1,blog_fetch_error:t.error};default:return e}},reducerTaxonomy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.TAXONOMY_START_FETCHING:return{taxonomy_fetching:!0,taxonomy_data:[]};case u.TAXONOMY_FETCHED:return{taxonomy_data:t.data,taxonomy_fetched:!0,taxonomy_dataLength:t.data.length};case u.TAXONOMY_FETCH_ERROR:return{taxonomy_fetched:!1,taxonomy_fetching:!1,taxonomy_fetch_error:t.error};default:return e}},reducerBlogYearMonth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SELECTED_YEAR_MONTH:return{blog_YearMonth:t.YearMonth};default:return e}}}),m=Object(l.a)(j.a,Object(d.createLogger)()),g=Object(l.c)(v,m),f=n(5),_=n(13),p=n.n(_),N=n(16),T=n(6),y=n(14),E=n.n(y),w="https://yellow-website.com/d9-blog",C=null,M=Object(N.a)(p.a.mark((function e(){var t,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=14;break}return t=w+"/session/token",e.prev=2,e.next=5,E.a.get(t,{withCredentials:!0});case 5:n=e.sent,c=n.data,C=E.a.create({baseURL:w,withCredentials:!0,headers:{"X-CSRF-Token":c},params:{_format:"json"}}),console.log("Created new axios instance",C),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",C),e.abrupt("return",C);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),A=n(0);var R=function(e){var t=e.data,n=(Object(i.c)((function(e){return e.reducerBlog.blog_data.state})),function(){var e=Object(N.a)(p.a.mark((function e(t,n,c,a){var r,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:[{target_id:"counter"}],nid:[{value:"".concat(t)}],totalcount:[{value:"".concat(n)}],daycount:[{value:"".concat(c)}],timestamp:[{value:"".concat(a)}]},e.prev=1,e.next=4,M();case 4:return o=e.sent,e.next=7,o.post("/node",r);case 7:s=e.sent,console.log("View Count posted :",s.status),201===s.status&&console.log("View Count posted success"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n,c,a){return e.apply(this,arguments)}}());return Object(A.jsx)("div",{children:t.length>0&&t.map((function(e){return Object(A.jsx)("ul",{children:Object(A.jsx)("li",{children:Object(A.jsx)(T.b,{onClick:function(){return n(e.nid,99,5,1362281532)},to:"/blog-post/".concat(e.nid),children:e.title})})},e.nid)}))})};var S=function(e){var t=e.title,n=e.body_1,c=e.nid,a=e.field_tags,r=e.created,o=e.index,s=new Date(r);return Object(A.jsxs)("div",{className:"p-5 border-1 border my-5 border-gray-300",children:[Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("h1",{className:"text-2xl",children:t}),Object(A.jsxs)("div",{className:"my-2 flex justify-end font-thin",children:["Date:",s.getDate()," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],", ",s.getFullYear()]}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:n+"..."}})})]}),Object(A.jsxs)("div",{className:"flex flex-row",children:[Object(A.jsx)(T.b,{className:"border border-gray-600 px-5 py-1",to:"/blog-post/".concat(c),children:"More"}),Object(A.jsxs)("p",{className:"ml-10",children:["Tag: ",a]})]}),Object(A.jsxs)("div",{className:"w-full text-xs mt-4 font-thin flex justify-center",children:["Index - ",o]})]})};var F=function(e){var t=e.tid,n=e.data,a=n.length+5,r=t||null;console.log(r);var o=10,i=Object(c.useState)([]),l=Object(s.a)(i,2),d=l[0],j=l[1],u=Object(c.useState)(1),b=Object(s.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(0),v=Object(s.a)(x,2),m=(v[0],v[1]),g=Object(c.useState)(0),f=Object(s.a)(g,2),_=f[0],p=f[1],N=Object(c.useState)(o),T=Object(s.a)(N,2),y=T[0],E=T[1];Object(c.useEffect)((function(){j(n.slice(_,y)),m()}),[n,_,y]),console.log("Pages",_,y);var w=function(e){switch(e){case"next":_>=a-o?(p(_),E(y)):(p(_+o),E(y+o)),O(h+1);break;case"prev":0===_?(p(_),E(y)):(p(_-o),E(y-o)),O(h-1);break;default:return""}};return Object(A.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3",children:[r&&Object(A.jsxs)("h2",{className:"m-5",children:["Tag Id: ",t]}),d.length>0&&d.map((function(e,t){var n=e.field_tags_1.split(",");return(null===r||n.includes(r))&&Object(A.jsx)(S,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created,index:t},e.nid)})),Object(A.jsxs)("div",{className:"flex justify-center",children:[h>1&&Object(A.jsx)("div",{onClick:function(){return w("prev")},className:"ml-3",children:"Prev"}),Object(A.jsxs)("div",{children:["- Page ",h,"-"]}),y<=a&&Object(A.jsx)("div",{onClick:function(){return w("next")},className:"mr-3",children:"Next"})]})]})},H=n(11);var L=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.reducerBlog.blog_data}));return Object(c.useEffect)((function(){console.log("test"),0===t.length&&e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(w,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(w,"/rest/blog"),a="http://localhost:3000"===window.location.origin?"./data/blog.json":c,r="".concat(w,"/rest/taxonomy"),o="http://localhost:3000"===window.location.origin?"./data/taxonomy.json":r;return function(t){t({type:H.actionTypes.MAIN_NAV_START_FETCHING}),E.a.get(n,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:H.actionTypes.BLOG_START_FETCHING}),E.a.get(a,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.BLOG_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.BLOG_FETCH_ERROR,fetched:!1,error:e})})),t({type:H.actionTypes.TAXONOMY_START_FETCHING}),E.a.get(o,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.TAXONOMY_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.TAXONOMY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[t.length,e]),Object(A.jsx)("div",{})};var k=function(){var e=Object(i.c)((function(e){return e.reducerBlog.blog_data}));return console.log("DATA?",e),Object(A.jsxs)("div",{children:[Object(A.jsx)(L,{}),Object(A.jsx)("h1",{children:"HOME PAGE"}),Object(A.jsx)(R,{data:e}),Object(A.jsx)(F,{data:e})]})};var I=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"About page"})})};var Y=function(){return Object(A.jsx)("div",{children:"Contact page"})};var G=function(){var e=Object(i.c)((function(e){return e.reducerTaxonomy.taxonomy_data}));return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:"my-5",children:"Taxonomy"}),Object(A.jsx)("div",{className:"flex flex-row",children:e.length>0&&e.map((function(e){var t=e.name;return Object(A.jsx)("div",{className:"m-2",children:Object(A.jsx)(T.b,{to:"/blogs-by-tag/".concat(e.tid),children:t.substring(0,15)})},e.tid)}))})]})},B=n(26);var D=function(){var e=Object(i.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),d=l[0],j=l[1],u=Object(c.useState)(),b=Object(s.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(),v=Object(s.a)(x,2),m=v[0],g=v[1];Object(c.useEffect)((function(){var t=[];e&&e.map((function(e){var n=new Date(e.created).getFullYear();t.push(n);var c=Object(B.a)(new Set(t));j(c)}))}),[e]),Object(c.useEffect)((function(){var t=[];h&&e&&e.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth();parseInt(h)===n&&t.push(c);var a=Object(B.a)(new Set(t));r(a)}))}),[h,e]);var f=Object(i.b)();Object(c.useEffect)((function(){var e="".concat(h,"-").concat(m);h&&m&&f(function(e){return{type:H.actionTypes.SELECTED_YEAR_MONTH,YearMonth:e}}(e))}),[m,h,d,a,f]),console.log(h,m);var _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(A.jsxs)("form",{children:[Object(A.jsxs)("select",{onChange:function(e){return O(e.target.value)},children:[Object(A.jsx)("option",{children:"-- Year --"}),d.map((function(e,t){return Object(A.jsx)("option",{value:e,children:e},t)}))]}),Object(A.jsxs)("select",{onChange:function(e){return g(e.target.value)},children:[Object(A.jsx)("option",{children:"-- Month --"}),a.length>0?a.map((function(e,t){return Object(A.jsx)("option",{value:e,children:_[e]},t)})):Object(A.jsx)("option",{children:"- Select Year -"})]})]})};var V=function(e){var t=e.YearMonth,n=Object(i.c)((function(e){return e.reducerBlog.blog_data}));return Object(A.jsx)("div",{children:n.length>0&&n.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth(),a="".concat(n,"-").concat(c);return t===a&&Object(A.jsx)(S,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created},e.nid)}))})};var X=function(){var e=Object(i.c)((function(e){return e.reducerBlogYearMonth.blog_YearMonth})),t=Object(i.c)((function(e){return e.reducerBlog.blog_data}));return Object(A.jsxs)("div",{className:"m-10",children:[Object(A.jsx)("div",{className:"my-10",children:Object(A.jsx)("h1",{children:"BLOG POST"})}),Object(A.jsx)("div",{children:Object(A.jsx)(D,{})}),Object(A.jsx)(G,{}),null===e?Object(A.jsx)(F,{data:t}):Object(A.jsx)(V,{YearMonth:e})]})};var P=function(e){var t=e.nid,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),d=l[0],j=l[1],u=Object(c.useState)(!1),b=Object(s.a)(u,2),h=b[0],O=b[1],x=function(){var e=Object(N.a)(p.a.mark((function e(n){var c,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={entity_id:[{target_id:"".concat(t)}],subject:[{value:"".concat(d)}],entity_type:[{value:"node"}],comment_type:[{target_id:"comment"}],field_name:[{value:"comment"}],comment_body:[{value:"".concat(r),basic_html:"basic_html"}]},e.prev=2,e.next=5,M();case 5:return a=e.sent,e.next=8,a.post("/comment",c);case 8:s=e.sent,console.log("Node created :",s.status),201===s.status&&(j(""),o(""),O(!0)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{className:"mt-10",children:[Object(A.jsx)("div",{className:"".concat(h?"block flex justify-center":"hidden"),children:Object(A.jsx)("p",{className:"text-xl",children:"Thank you. Your comment has been submited"})}),Object(A.jsxs)("form",{onSubmit:x,className:"".concat(h?"hidden":"bock flex flex-col"),children:[Object(A.jsx)("h1",{children:"Comment Form"}),Object(A.jsx)("div",{children:Object(A.jsx)("input",{type:"text",className:"mb-3 border border-gray-600 p-3",required:!0,name:"title",onChange:function(e){return j(e.target.value)},value:d,placeholder:"Title"})}),Object(A.jsx)("div",{children:Object(A.jsx)("textarea",{className:"mb-3 border border-gray-600 h-36 p-3",required:!0,name:"comment",onChange:function(e){return o(e.target.value)},value:r,placeholder:"Comment.."})}),Object(A.jsx)("input",{className:"border border-gray-600",type:"submit",name:"submit",value:"Submit"})]})]})};var J=function(){var e=Object(f.f)().nid,t=Object(i.c)((function(e){return e.reducerBlog.blog_data})),n="".concat(w,"/user/login_status?_format=json"),a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){E()({method:"GET",url:n,headers:{Accept:"application/vnd.api+json"}}).then((function(e){console.log("LOGIN STATUS",e.data),1===e.data?l(!0):l(!1)})).catch((function(e){return console.log("ERROR USER LOGIN STATUS",e)}))}),[n]),console.log("login-Status",o),Object(A.jsx)("div",{children:t.length>0&&t.map((function(t){return t.nid===e&&Object(A.jsxs)("div",{className:"p-10 m-5",children:[Object(A.jsx)("h1",{className:"text-3xl my-5",children:t.title}),Object(A.jsx)("div",{children:Object(A.jsx)("img",{src:t.field_image,alt:t.field_image_1})}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})}),Object(A.jsx)("div",{className:"".concat(o?"block":"hidden"),children:Object(A.jsx)(P,{nid:e})}),Object(A.jsx)("div",{className:"".concat(o?"hidden":"block mt-10"),children:Object(A.jsx)("p",{children:"Please Login for comment"})})]},t.nid)}))})};var U=function(){var e=Object(f.f)().tid;return Object(A.jsx)(F,{tid:e})};var q=function(){var e=Object(i.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)(),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){e.length>0&&a&&j(e.filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())||e.title.toLowerCase().includes(a.toLowerCase())})))}),[a,e]),console.log(a,d,e),Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"m-5",children:[Object(A.jsx)("h1",{className:"text-2xl",children:"Search"}),Object(A.jsx)("input",{className:"w-96 p-2 border",type:"text",onChange:function(e){return r(e.target.value)},value:a})]}),d.length>0&&d.map((function(e){var t=e.body.substring(0,250),n=function(e,t){var n=e;return t.replace(new RegExp(n,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}(a,e.title);return Object(A.jsxs)("div",{className:"my-10 border p-10",children:[Object(A.jsx)("h2",{className:"text-2xl",children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}),Object(A.jsx)("div",{className:"mb-5",dangerouslySetInnerHTML:{__html:t}}),Object(A.jsx)(T.b,{className:"border px-6 py-2 my-5",to:"/blog-post/".concat(e.nid),children:"Read"})]},e.nid)}))]})};var W=function(){return Object(A.jsxs)(f.c,{children:[Object(A.jsx)(f.a,{exact:!0,path:"/",component:k}),Object(A.jsx)(f.a,{path:"/about",component:I}),Object(A.jsx)(f.a,{path:"/contact",component:Y}),Object(A.jsx)(f.a,{path:"/blog",component:X}),Object(A.jsx)(f.a,{path:"/blog-post/:nid",component:J}),Object(A.jsx)(f.a,{path:"/blogs-by-tag/:tid",component:U}),Object(A.jsx)(f.a,{path:"/blog-search",component:q})]})};var z=function(){return Object(A.jsx)("div",{className:"w-5",children:Object(A.jsx)(T.b,{to:"/blog-search",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})};var K=function(){return Object(A.jsxs)("div",{className:"w-full flex justify-end py-5",children:[Object(A.jsx)("div",{className:"w-5 mr-4 hidden md:block",children:Object(A.jsx)(z,{})}),Object(A.jsx)("div",{className:"w-5 mr-4",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),Object(A.jsx)("div",{className:"w-5 mr-2",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})})})]})};var Q=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("img",{style:{width:"4rem",height:"auto"},src:"./logo-sqr.png",alt:"logo"})})};var Z=function(e){var t=e.showHideNav,n=e.data;return Object(A.jsx)("div",{className:"grid gap-2 md:flex font-thin text-sm",children:n.length>0&&n.map((function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(T.b,{to:"/".concat(e.uri.replace("base:","")),onClick:t,className:"px-3 py-2",children:e.title})},e.key)}))})};var $=function(e){var t=e.crossed;return Object(A.jsxs)("div",{className:"cursor-pointer p-5",children:[Object(A.jsxs)("div",{className:"".concat(t?"hidden":""),children:[Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(A.jsx)("div",{className:"".concat(t?"":"hidden"),children:Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var ee=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];function r(){return a(!n)}var o=Object(i.c)((function(e){return e.reducerMainNav.nav_data}));return console.log("menudata",o),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"flex bg-gray-900 text-gray-100",children:[Object(A.jsx)(L,{}),Object(A.jsxs)("div",{className:"flex flex-col w-28 md:w-full md:order-2",children:[Object(A.jsx)("div",{className:"md:hidden",children:Object(A.jsxs)("div",{className:"flex relative",children:[Object(A.jsx)("div",{onClick:r,children:Object(A.jsx)($,{crossed:n})}),Object(A.jsx)("div",{className:"relative top-5",children:Object(A.jsx)(z,{})})]})}),Object(A.jsx)("div",{className:"hidden md:block md:py-5",children:Object(A.jsx)(Z,{data:o||[]})})]}),Object(A.jsx)("div",{className:"flex justify-center w-full md:w-28 md:order-1",children:Object(A.jsx)(Q,{})}),Object(A.jsx)("div",{className:"w-28 md:order-3",children:Object(A.jsx)(K,{})})]}),Object(A.jsx)("div",{className:"".concat(n?"flex py-5 md:hidden":"hidden"),children:Object(A.jsx)(Z,{showHideNav:r,data:o||[]})})]})};var te=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(A.jsx)(i.a,{store:g,children:Object(A.jsx)(T.a,{children:Object(A.jsxs)("div",{className:"bg-gray-100 min-h-full w-full",children:[Object(A.jsx)(ee,{}),Object(A.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center \n            ".concat(n?"":"hidden"),onClick:function(){return a(!1)},children:Object(A.jsx)(T.b,{to:"/",children:"Live Preview"})}),Object(A.jsx)(W,{})]})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(te,{})}),document.getElementById("root")),ne()}},[[72,1,2]]]);
//# sourceMappingURL=main.6a09b46a.chunk.js.map