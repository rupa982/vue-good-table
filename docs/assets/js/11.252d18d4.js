(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{441:function(e,t,n){},485:function(e,t,n){"use strict";n(441)},523:function(e,t,n){"use strict";n.r(t);var o={name:"custom-row",props:[],data:function(){return{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM do yy"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"2011-07-02",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{},mounted:function(){},components:{}},a=(n(485),n(6)),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-good-table",{attrs:{columns:e.columns,rows:e.rows},scopedSlots:e._u([{key:"table-row",fn:function(t){return["age"==t.column.field?n("span",[n("span",{staticStyle:{"font-weight":"bold",color:"blue"}},[e._v(e._s(t.row.age))])]):n("span",[e._v("\n        "+e._s(t.formattedRow[t.column.field])+"\n      ")])]}}])})],1)}),[],!1,null,null,null);t.default=r.exports}}]);