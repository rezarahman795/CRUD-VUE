(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9adb17c"],{"7f7f":function(a,e,n){var t=n("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&t(o,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(a){return""}}})},e8c5:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app"},[n("AppHeader",{attrs:{fixed:""}},[n("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),n("b-link",{staticClass:"navbar-brand",attrs:{to:"#"}},[n("img",{staticClass:"navbar-brand-full",attrs:{src:"img/brand/logo.svg",width:"89",height:"25",alt:"CoreUI Logo"}}),n("img",{staticClass:"navbar-brand-minimized",attrs:{src:"img/brand/sygnet.svg",width:"30",height:"30",alt:"CoreUI Logo"}})]),n("SidebarToggler",{staticClass:"d-md-down-none",attrs:{display:"lg"}}),n("b-navbar-nav",{staticClass:"ml-auto"},[n("DefaultHeaderDropdownAccnt")],1)],1),n("div",{staticClass:"app-body"},[n("AppSidebar",{attrs:{fixed:""}},[n("SidebarHeader"),n("SidebarForm"),n("SidebarNav",{attrs:{navItems:a.nav}}),n("SidebarFooter"),n("SidebarMinimizer")],1),n("main",{staticClass:"main"},[n("Breadcrumb",{attrs:{list:a.list}}),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1)],1),n("TheFooter",[n("div",[n("a",{attrs:{href:"https://coreui.io"}},[a._v("CoreUI")]),n("span",{staticClass:"ml-1"},[a._v("© 2018 creativeLabs.")])]),n("div",{staticClass:"ml-auto"},[n("span",{staticClass:"mr-1"},[a._v("Powered by")]),n("a",{attrs:{href:"https://coreui.io"}},[a._v("CoreUI for Vue")])])])],1)},o=[],r=(n("7f7f"),n("cadf"),n("551c"),n("097d"),{items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{title:!0,name:"Mahasiswa",class:"",wrapper:{element:"",attributes:{}}},{name:"List Student",url:"/mahasiswa",icon:"icon-list"},{name:"Add Student",url:"/mahasiswa/add",icon:"icon-user-follow"},{title:!0,name:"Theme",class:"",wrapper:{element:"",attributes:{}}},{name:"Colors",url:"/theme/colors",icon:"icon-drop"},{name:"Typography",url:"/theme/typography",icon:"icon-pencil"},{title:!0,name:"Components",class:"",wrapper:{element:"",attributes:{}}},{name:"Base",url:"/base",icon:"icon-puzzle",children:[{name:"Breadcrumbs",url:"/base/breadcrumbs",icon:"icon-puzzle"},{name:"Cards",url:"/base/cards",icon:"icon-puzzle"},{name:"Carousels",url:"/base/carousels",icon:"icon-puzzle"},{name:"Collapses",url:"/base/collapses",icon:"icon-puzzle"},{name:"Forms",url:"/base/forms",icon:"icon-puzzle"},{name:"Jumbotrons",url:"/base/jumbotrons",icon:"icon-puzzle"},{name:"List Groups",url:"/base/list-groups",icon:"icon-puzzle"},{name:"Navs",url:"/base/navs",icon:"icon-puzzle"},{name:"Navbars",url:"/base/navbars",icon:"icon-puzzle"},{name:"Paginations",url:"/base/paginations",icon:"icon-puzzle"},{name:"Popovers",url:"/base/popovers",icon:"icon-puzzle"},{name:"Progress Bars",url:"/base/progress-bars",icon:"icon-puzzle"},{name:"Switches",url:"/base/switches",icon:"icon-puzzle"},{name:"Tables",url:"/base/tables",icon:"icon-puzzle"},{name:"Tabs",url:"/base/tabs",icon:"icon-puzzle"},{name:"Tooltips",url:"/base/tooltips",icon:"icon-puzzle"}]},{name:"Buttons",url:"/buttons",icon:"icon-cursor",children:[{name:"Buttons",url:"/buttons/standard-buttons",icon:"icon-cursor"},{name:"Button Dropdowns",url:"/buttons/dropdowns",icon:"icon-cursor"},{name:"Button Groups",url:"/buttons/button-groups",icon:"icon-cursor"},{name:"Brand Buttons",url:"/buttons/brand-buttons",icon:"icon-cursor"}]},{name:"Charts",url:"/charts",icon:"icon-pie-chart"},{name:"Icons",url:"/icons",icon:"icon-star",children:[{name:"CoreUI Icons",url:"/icons/coreui-icons",icon:"icon-star",badge:{variant:"info",text:"NEW"}},{name:"Flags",url:"/icons/flags",icon:"icon-star"},{name:"Font Awesome",url:"/icons/font-awesome",icon:"icon-star",badge:{variant:"secondary",text:"4.7"}},{name:"Simple Line Icons",url:"/icons/simple-line-icons",icon:"icon-star"}]},{name:"Notifications",url:"/notifications",icon:"icon-bell",children:[{name:"Alerts",url:"/notifications/alerts",icon:"icon-bell"},{name:"Badges",url:"/notifications/badges",icon:"icon-bell"},{name:"Modals",url:"/notifications/modals",icon:"icon-bell"}]},{name:"Widgets",url:"/widgets",icon:"icon-calculator",badge:{variant:"primary",text:"NEW"}},{divider:!0},{title:!0,name:"Extras"},{name:"Pages",url:"/pages",icon:"icon-star",children:[{name:"Login",url:"/pages/login",icon:"icon-star"},{name:"Register",url:"/pages/register",icon:"icon-star"},{name:"Error 404",url:"/pages/404",icon:"icon-star"},{name:"Error 500",url:"/pages/500",icon:"icon-star"}]},{name:"Disabled",url:"/dashboard",icon:"icon-ban",badge:{variant:"secondary",text:"NEW"},attributes:{disabled:!0}}]}),i=n("f1fb"),s=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[n("template",{slot:"header"},[n("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/6.jpg",alt:"admin@bootstrapmaster.com"}})]),a._v("\\\n  "),n("template",{slot:"dropdown"},[n("b-dropdown-item",[n("i",{staticClass:"fa fa-user"}),a._v(" Profile")]),n("b-dropdown-item",[n("i",{staticClass:"fa fa-wrench"}),a._v(" Settings")]),n("b-dropdown-item",[n("i",{staticClass:"fa fa-lock"}),a._v(" Logout")])],1)],2)},c=[],l={name:"DefaultHeaderDropdownAccnt",components:{AppHeaderDropdown:i["g"]},data:function(){return{itemsCount:42}}},u=l,d=n("2877"),m=Object(d["a"])(u,s,c,!1,null,null,null);m.options.__file="DefaultHeaderDropdownAccnt.vue";var p=m.exports,b={name:"DefaultContainer",components:{AsideToggler:i["b"],AppHeader:i["f"],AppSidebar:i["h"],AppAside:i["a"],TheFooter:i["e"],Breadcrumb:i["c"],DefaultHeaderDropdownAccnt:p,SidebarForm:i["j"],SidebarFooter:i["i"],SidebarToggler:i["n"],SidebarHeader:i["k"],SidebarNav:i["m"],SidebarMinimizer:i["l"]},data:function(){return{nav:r.items}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched.filter(function(a){return a.name||a.meta.label})}}},g=b,f=Object(d["a"])(g,t,o,!1,null,null,null);f.options.__file="DefaultContainer.vue";e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-a9adb17c.19a05fec.js.map