(this.webpackJsonptw2_01_blog=this.webpackJsonptw2_01_blog||[]).push([[0],{14:function(e,t,_){},22:function(e,t,_){"use strict";_.r(t),_.d(t,"actionTypes",(function(){return c}));var c={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",MULTIPLE_CHOICE_START_FETCHING:"MULTIPLE_CHOICE_START_FETCHING",MULTIPLE_CHOICE_FETCHED:"MULTIPLE_CHOICE_FETCHED",MULTIPLE_CHOICE_FETCH_ERROR:"MULTIPLE_CHOICE_FETCH_ERROR"}},24:function(e,t,_){"use strict";_.r(t);var c=_(0),n=_.n(c),a=_(2),r=_.n(a),i=(_(14),_(9)),h=_(3),o=_(7),E=_(8),u=_(22).actionTypes,l={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},T={multiple_choice_fetching:!1,multiple_choice_fetched:!1,multiple_choice_fetch_error:"",multiple_choice_data:[],multiple_choice_dataLength:0},C=Object(h.b)({reducerMainNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case u.MAIN_NAV_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case u.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerMultipleChoice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.MULTIPLE_CHOICE_START_FETCHING:return{multiple_choice_fetching:!0,multiple_choice_data:[]};case u.MULTIPLE_CHOICE_FETCHED:return{multiple_choice_data:t.data,multiple_choice_fetched:!0,multiple_choice_dataLength:t.data.length};case u.MULTIPLE_CHOICE_FETCH_ERROR:return{multiple_choice_fetched:!1,multiple_choice_fetching:!1,multiple_choice_fetch_error:t.error};default:return e}}}),d=Object(h.a)(E.a,Object(o.createLogger)()),I=Object(h.c)(C,d),f=_(1);var s=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Router..."})})};var H=function(){return Object(f.jsx)(i.a,{store:I,children:Object(f.jsx)(s,{})})},g=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,25)).then((function(t){var _=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;_(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.1f8d4775.chunk.js.map