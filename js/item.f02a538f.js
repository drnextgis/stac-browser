(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["item"],{2160:function(t,a,s){"use strict";s("c903")},c903:function(t,a,s){},f0df:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item"},[s("b-row",[s("b-col",[t.data.properties.description?s("Description",{attrs:{description:t.data.properties.description}}):t._e(),Array.isArray(t.data.properties.keywords)&&t.data.properties.keywords.length>0?s("Keywords",{attrs:{keywords:t.data.properties.keywords}}):t._e(),t.hasAssets?s("Assets",{attrs:{assets:t.assets,context:t.data}}):t._e(),t.additionalLinks.length>0?s("Links",{attrs:{title:"Additional resources",links:t.additionalLinks}}):t._e()],1),s("b-col",[s("h2",[t._v("Preview")]),t.thumbnails.length>0?s("b-tabs",[s("b-tab",{attrs:{title:"Map"}},[s("Map",{attrs:{stac:t.data}})],1),s("b-tab",{attrs:{title:"Preview"}},[s("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1)],1):s("Map",{attrs:{stac:t.data}})],1)],1),s("b-row",[s("b-col",{staticClass:"properties"},[s("Metadata",{attrs:{data:t.data,type:"Item"}})],1)],1)],1)},i=[],n=s("5530"),r=(s("d3b7"),s("3ca3"),s("ddb0"),s("2f62")),o=s("4d1d"),d=s("160f"),c=s("81d3"),l=s("9a30"),b=s("a100"),p=s("f902"),u=s("6190"),h=s("025e"),f={name:"Item",components:{Assets:o["a"],BTabs:p["a"],BTab:u["a"],Description:d["a"],Links:c["a"],Map:function(){return s.e("chunk-320ef7f6").then(s.bind(null,"a0be"))},Metadata:l["a"],Thumbnails:b["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["data","url"])),Object(r["b"])(["additionalLinks","collectionLink","thumbnails","hasAssets","assets"])),watch:{collectionLink:{immediate:!0,handler:function(t){h["a"].isObject(t)&&this.$store.dispatch("load",{url:t.href})}}}},m=f,w=(s("2160"),s("2877")),k=Object(w["a"])(m,e,i,!1,null,null,null);a["default"]=k.exports}}]);
//# sourceMappingURL=item.f02a538f.js.map