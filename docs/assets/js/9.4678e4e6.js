(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{248:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"server-side-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Server Side Table")]),t._v(" "),a("h2",{attrs:{id:"why-remote-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-remote-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Why Remote Mode?")]),t._v(" "),a("p",[t._v("Vue-good-table's in-built features like sorting, paging, filtering etc. are all performed client side and therefore are great for most of the use-cases. Sometimes though, we might have "),a("strong",[t._v("too much data to render all of it at once on the UI")]),t._v(". In such cases, we would want to do things like sorting, paging, filtering on the server side. Fortunately, vue-good-table comes with "),a("code",[t._v("remote mode")]),t._v(" to switch from client side to server side.")]),t._v(" "),a("p",[t._v("When remote mode is on, vue-good-table does not perform sorting, paging, filtering etc. on the client side but instead emits events that we can use to then send proper parameters to the back-end. The server then is expected to send the correct rows to display on the UI.")]),t._v(" "),a("p",[t._v("Following is a workflow you can use to get a server powered vue-good-table instace:")]),t._v(" "),a("h2",{attrs:{id:"prep-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prep-work","aria-hidden":"true"}},[t._v("#")]),t._v(" Prep Work")]),t._v(" "),a("h3",{attrs:{id:"what-do-we-send-to-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-do-we-send-to-server","aria-hidden":"true"}},[t._v("#")]),t._v(" What do we send to server?")]),t._v(" "),a("p",[t._v("Before we dive into remote mode, lets agree on what we're going to be sending to the server. A set of parameters that tells the server exactly what rows I need to get back. Here's a proposed parameter object to send:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("serverParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// a map of column filters example: {name: 'john', age: '20'}")]),t._v("\n  columnFilters"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sort"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    field"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// example: 'name'")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 'asc' or 'desc'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// what page I want to show")]),t._v("\n  perPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// how many items I'm showing per page")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("With the above information, server should be able to generate the relevant rows to send back.")]),t._v(" "),a("h3",{attrs:{id:"what-does-the-server-send-back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-the-server-send-back","aria-hidden":"true"}},[t._v("#")]),t._v(" What does the server send back?")]),t._v(" "),a("p",[t._v("Two things are required for the server to send back")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("relevant rows")]),t._v(" - set of rows for the current page, matching the current filter and sort.")]),t._v(" "),a("li",[a("strong",[t._v("totalRecords")]),t._v(" - number of total records matching the params we sent (not just the current page). This is required for the pagination to work correctly.")])]),t._v(" "),a("h2",{attrs:{id:"set-mode-to-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-mode-to-remote","aria-hidden":"true"}},[t._v("#")]),t._v(" Set mode to remote")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("remote"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("pagination-options")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    enabled: true,\n  }"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":totalRows")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("totalRecords"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("this tells VGT to not do client side paging/sorting/filtering")]),t._v(" "),a("h2",{attrs:{id:"provide-handlers-for-user-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-handlers-for-user-events","aria-hidden":"true"}},[t._v("#")]),t._v(" Provide handlers for user events")]),t._v(" "),a("p",[t._v("Now instead of doing the above client side, each user interaction will generate events. So lets provide handlers for those events:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("remote"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("@on-page-change")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onPageChange"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("@on-sort-change")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onSortChange"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("@on-column-filter")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onColumnFilter"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("@on-per-page-change")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onPerPageChange"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":totalRows")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("totalRecords"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("pagination-options")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    enabled: true,\n  }"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("... in data")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("data")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    columns"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    totalRecords"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    serverParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      columnFilters"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sort"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        field"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      perPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("... handlers")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("updateParams")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverParams "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{attrs:{class:"token function"}},[t._v("onPageChange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateParams")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentPage"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loadItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("onPerPageChange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateParams")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("perPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentPerPage"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loadItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("onSortChange")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateParams")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sort"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sortType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          field"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columnIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loadItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{attrs:{class:"token function"}},[t._v("onColumnFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateParams")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loadItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// load items is what brings back the rows from server")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("loadItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("getFromServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serverParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("totalRecords "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("totalRecords"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"so-what-is-happening"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-what-is-happening","aria-hidden":"true"}},[t._v("#")]),t._v(" So, what is happening?")]),t._v(" "),a("ol",[a("li",[t._v("Everytime the user interacts with the table, an appropriate event is emitted.")]),t._v(" "),a("li",[t._v("Along with this, VGT knows that this event will now result in fetching things from the backend. So it starts a loading screen.")]),t._v(" "),a("li",[t._v("In the handler of that event, we first update the "),a("code",[t._v("serverParams")]),t._v(" and then send a request to the backend.")]),t._v(" "),a("li",[t._v("When we get the response back, we update both the totalRecords and the rows data objects.")]),t._v(" "),a("li",[t._v("Row object's update signifies to VGT that the loading event is now done, and VGT shows the new rows on the table.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you want to show loading notification manually, you can do so using table's "),a("code",[t._v(":isLoading=true")]),t._v(" property.")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("to style the loading dom, you can use the slot - "),a("code",[t._v("loadingContent")])])]),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("So that wasn't too bad. You now have VGT that's powered completely by your backend server.")])])}],!1,null,null,null);e.options.__file="remote-workflow.md";s.default=e.exports}}]);