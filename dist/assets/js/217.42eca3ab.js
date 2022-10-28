(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{686:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"表单标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单标签"}},[t._v("#")]),t._v(" 表单标签")]),t._v(" "),s("p",[t._v("在HTML中，一个完整的表单通常由"),s("strong",[t._v("表单域")]),t._v("、"),s("strong",[t._v("表单控件")]),t._v("、"),s("strong",[t._v("提示信息")]),t._v("三个部分组成")]),t._v(" "),s("h2",{attrs:{id:"_1-表单域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-表单域"}},[t._v("#")]),t._v(" 1.表单域")]),t._v(" "),s("p",[t._v("表单域是一个包含表单元素的区域，用"),s("code",[t._v("<form>")]),t._v("标签定义表单域。")]),t._v(" "),s("p",[s("code",[t._v("form")]),t._v("表单标签让用户填写和选择，收集用户信息，用于服务器交换。属性：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name/id")]),t._v("：表单的名称，用于js来操作或控制表单时使用。name可以重复，id是唯一的。")]),t._v(" "),s("li",[s("code",[t._v("action")]),t._v("：指定表单数据的处理程序，一般是PHP，如："),s("code",[t._v('action="login.php"')]),t._v("这个属性将表示，表单将提交到哪里。")]),t._v(" "),s("li",[s("code",[t._v("method")]),t._v("：表单数据的提交方式，一般取值：get(默认)和post，这个属性表示用什么http方法提交，有get和post两种。")]),t._v(" "),s("li",[s("code",[t._v("Enctype")]),t._v("：表单数据的编码方式（加密），Enctype只能在POST方式下使用。取值可以是：\n"),s("ul",[s("li",[t._v("Application/x-www-form-urlencoded：默认加密方式，除了上传文件之外的数据都可以")]),t._v(" "),s("li",[t._v("Multipart/form-data：上传附件时，必须使用这种编码方式。")]),t._v(" "),s("li",[t._v('text/plain： 窗体数据以纯文本形式进行编码，其中不含任何控件或格式字符。空格转换为 "+" 加号，但不对特殊字符编码')])])])]),t._v(" "),s("p",[t._v("get提交和post提交的区别：")]),t._v(" "),s("ul",[s("li",[t._v("get方式将表单的数据，以"),s("code",[t._v("name=value")]),t._v("的形式追加到action后面指定的处理程序后面，两者间使用"),s("code",[t._v("？")]),t._v("隔开，每个表单的"),s("code",[t._v("name=value")]),t._v("间使用"),s("code",[t._v("&")]),t._v("隔开。")]),t._v(" "),s("li",[t._v("get的特点：只适合提交少量信息，并且不太安全，不要提交敏感信息，提交的数据类型仅限于ASCII字符。")]),t._v(" "),s("li",[t._v("post方式将表单数据直接发送（隐藏）到action后面的指定的处理程序，post发送的数据不可见。")]),t._v(" "),s("li",[t._v("post的特点：可以提交海量信息，相对更加安全，提交的数据格式多样（word、excel、rar、img）")])]),t._v(" "),s("h2",{attrs:{id:"_2-表单控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-表单控件"}},[t._v("#")]),t._v(" 2.表单控件")]),t._v(" "),s("h3",{attrs:{id:"_2-1-input输入表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-input输入表单元素"}},[t._v("#")]),t._v(" 2.1.input输入表单元素")]),t._v(" "),s("p",[s("code",[t._v("input")]),t._v("输入标签（文本框），用于接收用户输入。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('<input type="text" />')])])]),t._v(" "),s("p",[t._v("属性值:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("type")]),t._v("：文本类型，属性值可以是：\n"),s("ul",[s("li",[t._v("text：文本。")]),t._v(" "),s("li",[t._v("password：密码。")]),t._v(" "),s("li",[t._v("radio：单选按钮，名字相同的按钮作为一组进行单选，像收音机，按下去一个按钮，其他的就抬起来了，所以叫做radio。")]),t._v(" "),s("li",[t._v("checkbox：多选按钮，name 属性值相同的按钮作为一组进行选择。")]),t._v(" "),s("li",[t._v("hidden：隐藏框，在表单中包含不希望用户看见的信息。")]),t._v(" "),s("li",[t._v("button：普通按钮，结合js代码进行使用。")]),t._v(" "),s("li",[t._v("submit：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。")]),t._v(" "),s("li",[t._v("reset：重置按钮，清空当前表单的内容，并设置为最初的默认值.")]),t._v(" "),s("li",[t._v("image：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。")]),t._v(" "),s("li",[t._v("file：文件选择框。 提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。")])])]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v("：定义input元素的名称，单选框和复选框要有相同的name值")]),t._v(" "),s("li",[s("code",[t._v('value="内容"')]),t._v("：文本框里的默认内容（已经被填好了的）.")]),t._v(" "),s("li",[s("code",[t._v("readonly")]),t._v("：文本框只读，不能编辑。属性值可以不写。")]),t._v(" "),s("li",[s("code",[t._v("disabled")]),t._v("：文本框只读，不能编辑，光标点不进去。属性值可以不写。")]),t._v(" "),s("li",[s("code",[t._v("checked")]),t._v("：属性值也是checked，规定此input元素首次加载也能够当被选中，主要针对单选框和复选框。")]),t._v(" "),s("li",[s("code",[t._v("maxlength")]),t._v("：属性值是正整数，规定输入字段的最大字符数")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-input-和-label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-input-和-label"}},[t._v("#")]),t._v(" 2.2."),s("code",[t._v("<input>和<label>")])]),t._v(" "),s("p",[s("code",[t._v("<label>")]),t._v(" 标签为input元素定义标注。")]),t._v(" "),s("p",[t._v("将一个 "),s("code",[t._v("<label>")]),t._v(" 和一个 "),s("code",[t._v("<input>")]),t._v(" 元素匹配在一起，你需要给 "),s("code",[t._v("<input>")]),t._v(" 一个 "),s("code",[t._v("id")]),t._v(" 属性。而 "),s("code",[t._v("<label>")]),t._v(" 需要一个 "),s("code",[t._v("for")]),t._v(" 属性，其值和  "),s("code",[t._v("<input>")]),t._v(" 的 "),s("code",[t._v("id")]),t._v(" 一样")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cheese"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Do you like cheese?"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cheese"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cheese"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("你也可以将 "),s("code",[t._v("<input>")]),t._v(" 直接放在 "),s("code",[t._v("<label>")]),t._v(" 里，此时则不需要 "),s("code",[t._v("for")]),t._v(" 和 "),s("code",[t._v("id")]),t._v(" 属性，因为关联已隐含存在：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Do you like peas?\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("peas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("目的：扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-select下拉表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-select下拉表单元素"}},[t._v("#")]),t._v(" 2.3.select下拉表单元素")]),t._v(" "),s("p",[t._v("可以使用"),s("code",[t._v("<select>")]),t._v("标签控件定义下拉列表")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("在select中至少包含一对option")]),t._v(" "),s("li",[t._v('在option中定义selected= “selected"时，当前项即为默认选中项')])]),t._v(" "),s("h3",{attrs:{id:"_2-4-textarea文本域元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-textarea文本域元素"}},[t._v("#")]),t._v(" 2.4.textarea文本域元素")]),t._v(" "),s("p",[t._v("当用户输入内容较多的情况下，我们就不能使用文本框表单，此时我们可以使用"),s("code",[t._v("<textarea>")]),t._v("标签")]),t._v(" "),s("p",[t._v("在表单元素中，"),s("code",[t._v("<textarea>")]),t._v("是定义多行文本输入的控件，留言板，评论等")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("textarea"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("请输入内容"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("textarea"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("属性：")]),t._v(" "),s("ul",[s("li",[t._v("cols=”每行中的字符数“")]),t._v(" "),s("li",[t._v("rows=”显示的行数“")])]),t._v(" "),s("p",[s("strong",[t._v("我们在实际开发中不会使用，都是用css来改变大小")])])])}),[],!1,null,null,null);a.default=n.exports}}]);