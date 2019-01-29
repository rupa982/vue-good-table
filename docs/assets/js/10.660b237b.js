(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{202:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("To create grouped rows, you need two things.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),s("grouped-table",{attrs:{options:{enabled:!0}}}),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),s("grouped-table",{attrs:{options:{enabled:!0,headerPosition:"bottom"}}}),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("If you want more control over what the header row looks like, you can use slots the same way you "),s("router-link",{attrs:{to:"/guide/advanced/#custom-row-template"}},[t._v("customize rows")]),t._v(". For example if you want to add a button in the header row or something, this would be the way to do it.")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("In this case, the header row spans across all columns")]),t._v(" "),t._m(14),s("grouped-custom-span",{attrs:{options:{enabled:!0,headerPosition:"top"}}}),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("In this case header row expects a value for each column")]),t._v(" "),t._m(16),s("grouped-custom",{attrs:{options:{enabled:!0,headerPosition:"top"}}}),t._v(" "),t._m(17)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"grouped-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouped-table","aria-hidden":"true"}},[this._v("#")]),this._v(" Grouped Table")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_1-add-groupoptions-to-table-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-groupoptions-to-table-component","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Add groupOptions to table component")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":groupOptions")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n  \tenabled: true\n  }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-good-table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_2-make-sure-the-rows-are-formatted-correctly-grouped-rows-need-to-be-nested-within-header-rows-containing-data-rows-in-their-children-property-for-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-make-sure-the-rows-are-formatted-correctly-grouped-rows-need-to-be-nested-within-header-rows-containing-data-rows-in-their-children-property-for-example","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Make sure the rows are formatted correctly. Grouped rows need to be nested within header rows containing data rows in their children property. For example:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"span"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// span means this header will span all columns")]),t._v("\n    label"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Mammal"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// this is the label that'll be used for the header")]),t._v("\n    html"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// if this is true, label will be rendered as html")]),t._v("\n    children"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Elephant"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"herbivore"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Cat"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"carnivore"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("28")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_3-sometimes-you-might-want-a-summary-row-instead-of-a-header-row-for-example-if-you-want-to-show-total-count-for-your-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sometimes-you-might-want-a-summary-row-instead-of-a-header-row-for-example-if-you-want-to-show-total-count-for-your-group","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Sometimes, you might want a summary row instead of a header row. For example, if you want to show total count for your group")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Mammals Total"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// this is the label that'll be used for the header")]),t._v("\n    diet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    count"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// total count will be displayed here")]),t._v("\n    children"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Elephant"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"herbivore"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Cat"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"carnivore"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("28")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_4-if-you-want-the-header-summary-row-to-show-up-at-the-bottom-of-the-group-you-can-specify-that-in-the-groupoptions-property-of-the-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-if-you-want-the-header-summary-row-to-show-up-at-the-bottom-of-the-group-you-can-specify-that-in-the-groupoptions-property-of-the-table","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. If you want the header/summary row to show up at the bottom of the group, you can specify that in the groupOptions property of the table.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":groupOptions")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n  \tenabled: true,\n    headerPosition: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bottom"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-good-table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_5-what-if-you-wanted-to-add-a-total-count-in-summary-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-what-if-you-wanted-to-add-a-total-count-in-summary-rows","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. What if you wanted to add a total count in summary rows?")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In your column definition add a property, "),a("code",[this._v("headerField")]),this._v(". This is just like "),a("code",[this._v("field")]),this._v(" property but for summary/header rows only. So lets say we wanted to add a "),a("strong",[this._v("sum function")]),this._v(" to this field.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// in columns")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Count'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  field"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'count'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headerField"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sumCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'number'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// in methods we define sumCount")]),t._v("\nmethods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("sumCount")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowObj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowObj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" rowObj"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum "),s("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" rowObj"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"customizing-header-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-header-row","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing Header Row")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"when-mode-is-span"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-mode-is-span","aria-hidden":"true"}},[this._v("#")]),this._v(" When mode is 'span'")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":group-options")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    enabled: true,\n    headerPosition: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("top"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("table-header-row"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-fancy-class"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ props.row.label }}\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-good-table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"when-mode-is-not-span"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-mode-is-not-span","aria-hidden":"true"}},[this._v("#")]),this._v(" When mode is not 'span'")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-good-table")]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":columns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("columns"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":rows")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rows"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":group-options")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    enabled: true,\n    headerPosition: "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("top"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("table-header-row"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.column.field == "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("action"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fancy-btn"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Action"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{props.formattedRow[props.column.field]}}\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-good-table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("ul",[s("li",[t._v("The original row object can be accessed via "),s("code",[t._v("props.row")])]),t._v(" "),s("li",[t._v("The column object can be accessed via "),s("code",[t._v("props.column")])]),t._v(" "),s("li",[t._v("You can access the formatted row data (for example - formatted date) via "),s("code",[t._v("props.formattedRow")])])])])}],!1,null,null,null);o.options.__file="grouped-table.md";a.default=o.exports}}]);