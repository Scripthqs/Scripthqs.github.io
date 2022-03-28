(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{518:function(e,v,t){"use strict";t.r(v);var s=t(21),_=Object(s.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-cli脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli脚手架"}},[e._v("#")]),e._v(" Vue CLI脚手架")]),e._v(" "),t("h2",{attrs:{id:"_1-单页面应用程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-单页面应用程序"}},[e._v("#")]),e._v(" 1 单页面应用程序")]),e._v(" "),t("p",[e._v("单页面应用程序（英文名：Single Page Application）简称 SPA，顾名 思义，指的是一个 Web 网站中只有唯一的一个 HTML 页面，所有的功能 与交互都在这唯一的一个页面内完成.")]),e._v(" "),t("h2",{attrs:{id:"_2-vue-cli简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-cli简介"}},[e._v("#")]),e._v(" 2 Vue CLI简介")]),e._v(" "),t("p",[e._v("在开发大型项目，必然会使用Vue CLI工具")]),e._v(" "),t("ul",[t("li",[e._v("在Vue.js开发大型应用时，需要考虑代码目录结构，项目结构和部署、热加载，代码单元测试等事情")]),e._v(" "),t("li",[e._v("使用脚手架工具可以帮助我们完成这些事情")])]),e._v(" "),t("p",[e._v("CLI全称Command-Line Interface，翻译为命令行界面，但是俗称脚手架。")]),e._v(" "),t("p",[e._v("Vue CLI是官方发布vue.js项目脚手架，可以"),t("strong",[e._v("快速搭建Vue开发环境和对应的webpack配置")]),e._v("。脚手架依赖node和webpack。")]),e._v(" "),t("h2",{attrs:{id:"_3-安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装和使用"}},[e._v("#")]),e._v(" 3  安装和使用")]),e._v(" "),t("p",[e._v("vue-cli 是 npm 上的一个全局包，使用 npm install 命令，安装cli")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("基于 vue-cli 快速生成工程化的 Vue 项目：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue create 项目的名称\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[e._v("vue ui")]),e._v("以图形化界面创建和管理项目，导入项目即可使用")])]),e._v(" "),t("li",[t("p",[e._v("ESlint：检测代码规范")])]),e._v(" "),t("li",[t("p",[e._v("unit test：单元测试")])]),e._v(" "),t("li",[t("p",[e._v("e2e test：e2e测试，end to end，安装Nightwatch，进行自动化测试的工具")])])]),e._v(" "),t("h2",{attrs:{id:"_4-vuecli目录解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vuecli目录解析"}},[e._v("#")]),e._v(" 4 vuecli目录解析")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("public文件夹：相当于cli2对static目录,index.html")])]),e._v(" "),t("li",[t("p",[e._v(".browserslistrc：浏览器相关支持情况")])]),e._v(" "),t("li",[t("p",[e._v("assets 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源")])]),e._v(" "),t("li",[t("p",[e._v("components 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下")])]),e._v(" "),t("li",[t("p",[e._v("main.js 是项目的入口文件。整个项目的运行，要先执行 main.js")])]),e._v(" "),t("li",[t("p",[e._v("App.vue 是项目的根组件。")])]),e._v(" "),t("li",[t("p",[e._v(".editorconfig：项目文本相关配置")])]),e._v(" "),t("li",[t("p",[e._v(".eslintignore：代码规范忽略文件配置")])]),e._v(" "),t("li",[t("p",[e._v(".gitignore：git仓库忽略文件配置")])]),e._v(" "),t("li",[t("p",[e._v(".postcssrc.js：CSS相关转化配置")])]),e._v(" "),t("li",[t("p",[e._v(".babel.config.js：ES代码相关转化配置")])])]),e._v(" "),t("h2",{attrs:{id:"_5-vuecli修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-vuecli修改配置"}},[e._v("#")]),e._v(" 5 vuecli修改配置")]),e._v(" "),t("p",[e._v("Vue3.x脚手架隐藏了所有webpack相关的配置，若想查看具体的配置可以执行")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("vue inspect > output.js")]),e._v(" 只能查看，不能修改")])]),e._v(" "),t("p",[e._v("修改配置的方法：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("vuecli3.x的很多相关配置被隐藏，使用vue ui即可使用图形化管理配置")])]),e._v(" "),t("li",[t("p",[e._v("在node_modules文件夹下的@vue文件夹中可以找到隐藏的配置")])]),e._v(" "),t("li",[t("p",[e._v("自己创建vue.config.js文件，mudule.exports = {}自定义配置文件")])]),e._v(" "),t("li",[t("p",[e._v("另外，在用户下找到.vuerc可删除修改一些保存的配置")])])]),e._v(" "),t("h2",{attrs:{id:"_6-runtime-compiler和runtime-only"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-runtime-compiler和runtime-only"}},[e._v("#")]),e._v(" 6 runtime-compiler和runtime-only")]),e._v(" "),t("p",[e._v("Vue程序的运行流程；")]),e._v(" "),t("ol",[t("li",[e._v("写出template（模板）")]),e._v(" "),t("li",[e._v("parse（解析）成ast（抽象语法树）abstract syntax tree")]),e._v(" "),t("li",[e._v("compile（编译）成render函数")]),e._v(" "),t("li",[e._v("vdom（虚拟dom）")]),e._v(" "),t("li",[e._v("ui（真实dom）")])]),e._v(" "),t("ul",[t("li",[e._v("runtime-compiler解析步骤：template->ast->render->vdom->ui")]),e._v(" "),t("li",[e._v("runtime-only解析步骤：render->vdom->ui(性能更好，代码更少)")])]),e._v(" "),t("p",[e._v("render函数中的h是createElement函数，createElement('标签','{标签属性}',['标签中的内容'])")]),e._v(" "),t("p",[e._v("render函数可以直接传入组件，"),t("code",[e._v("render:createElement => createElement(App)")])]),e._v(" "),t("p",[e._v("使用runtime-only版本时，.vue文件的template由vue-template-compiler直接编译成render函数")]),e._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[e._v("new Vue({\n  render: h => h(App),\n}).$mount('#app')\n//相当于\nnew Vue({\n  el: '#app',\n  render: h => h(App),\n})\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[t("strong",[e._v("浏览器无法解析.vue文件，通过vue-template-compiler将vue文件转换成js文件")])]),e._v(" "),t("h2",{attrs:{id:"_7-vue-项目的运行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue-项目的运行流程"}},[e._v("#")]),e._v(" 7 vue 项目的运行流程")]),e._v(" "),t("p",[e._v("通过"),t("strong",[e._v("main.js把App.vue渲染到index.html")]),e._v("的指定区域中。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("App.vue")]),e._v(" 用来编写待渲染的"),t("strong",[e._v("模板结构")])]),e._v(" "),t("li",[t("strong",[e._v("index.html")]),e._v(" 中需要预留一个 "),t("strong",[e._v("el 区域")])]),e._v(" "),t("li",[e._v("main.js 把 "),t("strong",[e._v("App.vue")]),e._v(" 渲染到了 "),t("strong",[e._v("index.html")]),e._v(" 所预留的区域中")])]),e._v(" "),t("h2",{attrs:{id:"_8-components和views文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-components和views文件夹"}},[e._v("#")]),e._v(" 8 components和views文件夹")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("两个文件夹都是用来方组件的，")])]),e._v(" "),t("li",[t("p",[e._v("如果每个组件是通"),t("strong",[e._v("过路由来切换的")]),e._v("，就放在"),t("strong",[e._v("views里面")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("不使用路由")]),e._v("切换，"),t("strong",[e._v("可复用")]),e._v("的组件，放在"),t("strong",[e._v("components里面")])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);