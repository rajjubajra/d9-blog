(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",BLOG_START_FETCHING:"BLOG_START_FETCHING",BLOG_FETCHED:"BLOG_FETCHED",BLOG_FETCH_ERROR:"BLOG_FETCH_ERROR",TAXONOMY_START_FETCHING:"TAXONOMY_START_FETCHING",TAXONOMY_FETCHED:"TAXONOMY_FETCHED",TAXONOMY_FETCH_ERROR:"TAXONOMY_FETCH_ERROR",SELECTED_YEAR_MONTH:"SELECTED_YEAR_MONTH"}},43:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),o=n.n(r),s=(n(43),n(3)),i=n(21),l=n(37),d=n(38),j=n(11).actionTypes,u={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},b={blog_fetching:!1,blog_fetched:!1,blog_fetch_error:"",blog_data:[],blog_dataLength:0},h={taxonomy_fetching:!1,taxonomy_fetched:!1,taxonomy_fetch_error:"",taxonomy_data:[],taxonomy_dataLength:0},O={blog_YearMonth:null},x=Object(i.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case j.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case j.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.BLOG_START_FETCHING:return{blog_fetching:!0,blog_data:[]};case j.BLOG_FETCHED:return{blog_data:t.data,blog_fetched:!0,blog_dataLength:t.data.length};case j.BLOG_FETCH_ERROR:return{blog_fetched:!1,blog_fetching:!1,blog_fetch_error:t.error};default:return e}},reducerTaxonomy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TAXONOMY_START_FETCHING:return{taxonomy_fetching:!0,taxonomy_data:[]};case j.TAXONOMY_FETCHED:return{taxonomy_data:t.data,taxonomy_fetched:!0,taxonomy_dataLength:t.data.length};case j.TAXONOMY_FETCH_ERROR:return{taxonomy_fetched:!1,taxonomy_fetching:!1,taxonomy_fetch_error:t.error};default:return e}},reducerBlogYearMonth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SELECTED_YEAR_MONTH:return{blog_YearMonth:t.YearMonth};default:return e}}}),g=Object(i.a)(d.a,Object(l.createLogger)()),m=Object(i.c)(x,g),v=n(5),f=n(13),_=n.n(f),p=n(16),N=n(6),T=n(14),y=n.n(T),E="https://yellow-website.com/d9-blog/d9-blog",w=null,C=Object(p.a)(_.a.mark((function e(){var t,n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=14;break}return t=E+"/session/token",e.prev=2,e.next=5,y.a.get(t,{withCredentials:!0});case 5:n=e.sent,c=n.data,w=y.a.create({baseURL:E,withCredentials:!0,headers:{"X-CSRF-Token":c},params:{_format:"json"}}),console.log("Created new axios instance",w),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",w),e.abrupt("return",w);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),A=n(0);var M=function(e){var t=e.data,n=(Object(s.c)((function(e){return e.reducerBlog.blog_data.state})),function(){var e=Object(p.a)(_.a.mark((function e(t,n,c,a){var r,o,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:[{target_id:"counter"}],nid:[{value:"".concat(t)}],totalcount:[{value:"".concat(n)}],daycount:[{value:"".concat(c)}],timestamp:[{value:"".concat(a)}]},e.prev=1,e.next=4,C();case 4:return o=e.sent,e.next=7,o.post("/node",r);case 7:s=e.sent,console.log("View Count posted :",s.status),201===s.status&&console.log("View Count posted success"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n,c,a){return e.apply(this,arguments)}}());return Object(A.jsx)("div",{children:t.length>0&&t.map((function(e){return Object(A.jsx)("ul",{children:Object(A.jsx)("li",{children:Object(A.jsx)(N.b,{onClick:function(){return n(e.nid,99,5,1362281532)},to:"/blog-post/".concat(e.nid),children:e.title})})},e.nid)}))})},R=n(4);var S=function(e){var t=e.title,n=e.body_1,a=e.nid,r=e.field_tags,o=e.created,s=e.index,i=Object(c.useState)(""),l=Object(R.a)(i,2),d=l[0],j=l[1],u=new Date(o);return Object(c.useEffect)((function(){var e=r.split(",");console.log("TAG ARRAY",e);var t=[];e.length>0&&e.map((function(e){return t.push(e.substring(0,12).toUpperCase())})),j(t.join(","))}),[r]),console.log("TAG NEW",d),Object(A.jsxs)("div",{className:"p-5 border-1 border my-5 border-gray-300",children:[Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("h1",{className:"text-2xl",children:t}),Object(A.jsxs)("div",{className:"my-2 flex justify-end font-thin",children:["Date:",u.getDate()," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][u.getMonth()],", ",u.getFullYear()]}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:n+"..."}})})]}),Object(A.jsxs)("div",{className:"flex flex-row",children:[Object(A.jsx)(N.b,{className:"border border-gray-600 px-5 py-1",to:"/blog-post/".concat(a),children:"More"}),Object(A.jsxs)("p",{className:"ml-10 text-xs font-bold",children:["Tag: ",d]})]}),Object(A.jsxs)("div",{className:"w-full text-xs mt-4 font-thin flex justify-center",children:["Index - ",s]})]})};var F=function(e){var t=e.tid,n=e.data,a=n.length+5,r=t||null;console.log(r);var o=10,s=Object(c.useState)([]),i=Object(R.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(1),u=Object(R.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(0),x=Object(R.a)(O,2),g=(x[0],x[1]),m=Object(c.useState)(0),v=Object(R.a)(m,2),f=v[0],_=v[1],p=Object(c.useState)(o),N=Object(R.a)(p,2),T=N[0],y=N[1];Object(c.useEffect)((function(){d(n.slice(f,T)),g()}),[n,f,T]),console.log("Pages",f,T);var E=function(e){switch(e){case"next":f>=a-o?(_(f),y(T)):(_(f+o),y(T+o)),h(b+1);break;case"prev":0===f?(_(f),y(T)):(_(f-o),y(T-o)),h(b-1);break;default:return""}};return Object(A.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3",children:[r&&Object(A.jsxs)("h2",{className:"m-5",children:["Tag Id: ",t]}),l.length>0&&l.map((function(e,t){var n=e.field_tags_1.split(",");return(null===r||n.includes(r))&&Object(A.jsx)(S,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created,index:t},e.nid)})),Object(A.jsxs)("div",{className:"flex justify-center",children:[b>1&&Object(A.jsx)("div",{onClick:function(){return E("prev")},className:"ml-3",children:"Prev"}),Object(A.jsxs)("div",{children:["- Page ",b,"-"]}),T<=a&&Object(A.jsx)("div",{onClick:function(){return E("next")},className:"mr-3",children:"Next"})]})]})},H=n(11);var L=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(c.useEffect)((function(){console.log("test"),0===t.length&&e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(E,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(E,"/rest/blog"),a="http://localhost:3000"===window.location.origin?"./data/blog.json":c,r="".concat(E,"/rest/taxonomy"),o="http://localhost:3000"===window.location.origin?"./data/taxonomy.json":r;return function(t){t({type:H.actionTypes.MAIN_NAV_START_FETCHING}),y.a.get(n,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.MAIN_NAV_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:e})})),t({type:H.actionTypes.BLOG_START_FETCHING}),y.a.get(a,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.BLOG_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.BLOG_FETCH_ERROR,fetched:!1,error:e})})),t({type:H.actionTypes.TAXONOMY_START_FETCHING}),y.a.get(o,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.TAXONOMY_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.TAXONOMY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[t.length,e]),Object(A.jsx)("div",{})};var k=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return console.log("DATA?",e),Object(A.jsxs)("div",{children:[Object(A.jsx)(L,{}),Object(A.jsx)("h1",{children:"HOME PAGE"}),Object(A.jsx)(M,{data:e}),Object(A.jsx)(F,{data:e})]})};var I=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"About page"})})};var Y=function(){return Object(A.jsx)("div",{children:"Contact page"})};var G=function(){var e=Object(s.c)((function(e){return e.reducerTaxonomy.taxonomy_data}));return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:"my-5",children:"Taxonomy"}),Object(A.jsx)("div",{className:"flex flex-row",children:e.length>0&&e.map((function(e){var t=e.name;return Object(A.jsx)("div",{className:"m-2",children:Object(A.jsx)(N.b,{to:"/d9-blog/themes/tw2-01/blogs-by-tag/".concat(e.tid),children:t.substring(0,15)})},e.tid)}))})]})},B=n(26);var D=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)([]),n=Object(R.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(R.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(),u=Object(R.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(),x=Object(R.a)(O,2),g=x[0],m=x[1];Object(c.useEffect)((function(){var t=[];e&&e.map((function(e){var n=new Date(e.created).getFullYear();t.push(n);var c=Object(B.a)(new Set(t));d(c)}))}),[e]),Object(c.useEffect)((function(){var t=[];b&&e&&e.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth();parseInt(b)===n&&t.push(c);var a=Object(B.a)(new Set(t));r(a)}))}),[b,e]);var v=Object(s.b)();Object(c.useEffect)((function(){var e="".concat(b,"-").concat(g);b&&g&&v(function(e){return{type:H.actionTypes.SELECTED_YEAR_MONTH,YearMonth:e}}(e))}),[g,b,l,a,v]),console.log(b,g);var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(A.jsxs)("form",{children:[Object(A.jsxs)("select",{onChange:function(e){return h(e.target.value)},children:[Object(A.jsx)("option",{children:"-- Year --"}),l.map((function(e,t){return Object(A.jsx)("option",{value:e,children:e},t)}))]}),Object(A.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[Object(A.jsx)("option",{children:"-- Month --"}),a.length>0?a.map((function(e,t){return Object(A.jsx)("option",{value:e,children:f[e]},t)})):Object(A.jsx)("option",{children:"- Select Year -"})]})]})};var V=function(e){var t=e.YearMonth,n=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(A.jsx)("div",{children:n.length>0&&n.map((function(e){var n=new Date(e.created).getFullYear(),c=new Date(e.created).getMonth(),a="".concat(n,"-").concat(c);return t===a&&Object(A.jsx)(S,{title:e.title,nid:e.nid,body_1:e.body_1,field_tags:e.field_tags,created:e.created},e.nid)}))})};var X=function(){var e=Object(s.c)((function(e){return e.reducerBlogYearMonth.blog_YearMonth})),t=Object(s.c)((function(e){return e.reducerBlog.blog_data}));return Object(A.jsxs)("div",{className:"m-10",children:[Object(A.jsx)("div",{className:"my-10",children:Object(A.jsx)("h1",{children:"BLOG POST"})}),Object(A.jsx)("div",{children:Object(A.jsx)(D,{})}),Object(A.jsx)(G,{}),null===e?Object(A.jsx)(F,{data:t}):Object(A.jsx)(V,{YearMonth:e})]})};var J=function(e){var t=e.nid,n=Object(c.useState)(""),a=Object(R.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(R.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(!1),u=Object(R.a)(j,2),b=u[0],h=u[1],O=function(){var e=Object(p.a)(_.a.mark((function e(n){var c,a,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={entity_id:[{target_id:"".concat(t)}],subject:[{value:"".concat(l)}],entity_type:[{value:"node"}],comment_type:[{target_id:"comment"}],field_name:[{value:"comment"}],comment_body:[{value:"".concat(r),basic_html:"basic_html"}]},e.prev=2,e.next=5,C();case 5:return a=e.sent,e.next=8,a.post("/comment",c);case 8:s=e.sent,console.log("Node created :",s.status),201===s.status&&(d(""),o(""),h(!0)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{className:"mt-10",children:[Object(A.jsx)("div",{className:"".concat(b?"block flex justify-center":"hidden"),children:Object(A.jsx)("p",{className:"text-xl",children:"Thank you. Your comment has been submited"})}),Object(A.jsxs)("form",{onSubmit:O,className:"".concat(b?"hidden":"bock flex flex-col"),children:[Object(A.jsx)("h1",{children:"Comment Form"}),Object(A.jsx)("div",{children:Object(A.jsx)("input",{type:"text",className:"mb-3 border border-gray-600 p-3",required:!0,name:"title",onChange:function(e){return d(e.target.value)},value:l,placeholder:"Title"})}),Object(A.jsx)("div",{children:Object(A.jsx)("textarea",{className:"mb-3 border border-gray-600 h-36 p-3",required:!0,name:"comment",onChange:function(e){return o(e.target.value)},value:r,placeholder:"Comment.."})}),Object(A.jsx)("input",{className:"border border-gray-600",type:"submit",name:"submit",value:"Submit"})]})]})};var P=function(){var e=Object(v.f)().nid,t=Object(s.c)((function(e){return e.reducerBlog.blog_data})),n="".concat(E,"/user/login_status?_format=json"),a=Object(c.useState)(""),r=Object(R.a)(a,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){y()({method:"GET",url:n,headers:{Accept:"application/vnd.api+json"}}).then((function(e){console.log("LOGIN STATUS",e.data),1===e.data?i(!0):i(!1)})).catch((function(e){return console.log("ERROR USER LOGIN STATUS",e)}))}),[n]),console.log("login-Status",o),Object(A.jsx)("div",{children:t.length>0&&t.map((function(t){return t.nid===e&&Object(A.jsxs)("div",{className:"p-10 m-5",children:[Object(A.jsx)("h1",{className:"text-3xl my-5",children:t.title}),Object(A.jsx)("div",{children:Object(A.jsx)("img",{src:t.field_image,alt:t.field_image_1})}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})}),Object(A.jsx)("div",{className:"".concat(o?"block":"hidden"),children:Object(A.jsx)(J,{nid:e})}),Object(A.jsx)("div",{className:"".concat(o?"hidden":"block mt-10"),children:Object(A.jsx)("p",{children:"Please Login for comment"})})]},t.nid)}))})};var U=function(){var e=Object(v.f)().tid;return Object(A.jsx)(F,{tid:e})};var W=function(){var e=Object(s.c)((function(e){return e.reducerBlog.blog_data})),t=Object(c.useState)(),n=Object(R.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(R.a)(o,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){e.length>0&&a&&d(e.filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())||e.title.toLowerCase().includes(a.toLowerCase())})))}),[a,e]),console.log(a,l,e),Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"m-5",children:[Object(A.jsx)("h1",{className:"text-2xl",children:"Search"}),Object(A.jsx)("input",{className:"w-96 p-2 border",type:"text",onChange:function(e){return r(e.target.value)},value:a})]}),l.length>0&&l.map((function(e){var t=e.body.substring(0,250),n=function(e,t){var n=e;return t.replace(new RegExp(n,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))}(a,e.title);return Object(A.jsxs)("div",{className:"my-10 border p-10",children:[Object(A.jsx)("h2",{className:"text-2xl",children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})}),Object(A.jsx)("div",{className:"mb-5",dangerouslySetInnerHTML:{__html:t}}),Object(A.jsx)(N.b,{className:"border px-6 py-2 my-5",to:"/blog-post/".concat(e.nid),children:"Read"})]},e.nid)}))]})};var q=function(){var e="/d9-blog/themes/tw2-01";return Object(A.jsxs)(v.c,{children:[Object(A.jsx)(v.a,{exact:!0,path:"".concat(e),component:k}),Object(A.jsx)(v.a,{path:"".concat(e,"/about"),component:I}),Object(A.jsx)(v.a,{path:"".concat(e,"/contact"),component:Y}),Object(A.jsx)(v.a,{path:"".concat(e,"/blog"),component:X}),Object(A.jsx)(v.a,{path:"".concat(e,"/blog-post/:nid"),component:P}),Object(A.jsx)(v.a,{path:"".concat(e,"/blogs-by-tag/:tid"),component:U}),Object(A.jsx)(v.a,{path:"".concat(e,"/blog-search"),component:W})]})};var z=function(){return Object(A.jsx)("div",{className:"w-5",children:Object(A.jsx)(N.b,{to:"/blog-search",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})})};var K=function(){return Object(A.jsxs)("div",{className:"w-full flex justify-end py-5",children:[Object(A.jsx)("div",{className:"w-5 mr-4 hidden md:block",children:Object(A.jsx)(z,{})}),Object(A.jsx)("div",{className:"w-5 mr-4",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),Object(A.jsx)("div",{className:"w-5 mr-2",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})})})]})};var Q=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("img",{style:{width:"4rem",height:"auto"},src:"./logo-sqr.png",alt:"logo"})})};var Z=function(e){var t=e.showHideNav,n=e.data;return Object(A.jsx)("div",{className:"grid gap-2 md:flex font-thin text-sm",children:n.length>0&&n.map((function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(N.b,{to:"/d9-blog/themes/tw2-01/".concat(e.uri.replace("base:","")),onClick:t,className:"px-3 py-2",children:e.title})},e.key)}))})};var $=function(e){var t=e.crossed;return Object(A.jsxs)("div",{className:"cursor-pointer p-5",children:[Object(A.jsxs)("div",{className:"".concat(t?"hidden":""),children:[Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(A.jsx)("div",{className:"".concat(t?"":"hidden"),children:Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(A.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var ee=function(){var e=Object(c.useState)(!1),t=Object(R.a)(e,2),n=t[0],a=t[1];function r(){return a(!n)}var o=Object(s.c)((function(e){return e.reducerMainNav.nav_data}));return console.log("menudata",o),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"flex bg-gray-900 text-gray-100",children:[Object(A.jsx)(L,{}),Object(A.jsxs)("div",{className:"flex flex-col w-28 md:w-full md:order-2",children:[Object(A.jsx)("div",{className:"md:hidden",children:Object(A.jsxs)("div",{className:"flex relative",children:[Object(A.jsx)("div",{onClick:r,children:Object(A.jsx)($,{crossed:n})}),Object(A.jsx)("div",{className:"relative top-5",children:Object(A.jsx)(z,{})})]})}),Object(A.jsx)("div",{className:"hidden md:block md:py-5",children:Object(A.jsx)(Z,{data:o||[]})})]}),Object(A.jsx)("div",{className:"flex justify-center w-full md:w-28 md:order-1",children:Object(A.jsx)(Q,{})}),Object(A.jsx)("div",{className:"w-28 md:order-3",children:Object(A.jsx)(K,{})})]}),Object(A.jsx)("div",{className:"".concat(n?"flex py-5 md:hidden":"hidden"),children:Object(A.jsx)(Z,{showHideNav:r,data:o||[]})})]})};var te=function(){return Object(A.jsx)(s.a,{store:m,children:Object(A.jsx)(N.a,{children:Object(A.jsxs)("div",{className:"bg-gray-100 min-h-full w-full",children:[Object(A.jsx)(ee,{}),Object(A.jsx)(q,{})]})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(te,{})}),document.getElementById("root")),ne()}},[[72,1,2]]]);
//# sourceMappingURL=main.95a8c2b4.chunk.js.map