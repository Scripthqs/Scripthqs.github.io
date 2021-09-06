(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{568:function(s,a,e){"use strict";e.r(a);var t=e(50),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"webpack基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack基本使用"}},[s._v("#")]),s._v(" webpack基本使用")]),s._v(" "),e("h2",{attrs:{id:"_1-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作"}},[s._v("#")]),s._v(" 1.准备工作")]),s._v(" "),e("p",[s._v("创建文件和文件夹：")]),s._v(" "),e("ul",[e("li",[s._v("dist文件夹：用于存放之后打包的文件")]),s._v(" "),e("li",[s._v("src文件夹：用于存放写的源文件\n"),e("ul",[e("li",[s._v("index.js：项目的入口文件")]),s._v(" "),e("li",[s._v("Moudle.js；定义模块工具函数，可以在其他地方引用")]),s._v(" "),e("li",[s._v("index.html：浏览器打开展示的首页html")]),s._v(" "),e("li",[s._v("package.json：通过npm init生成的，npm包管理文件，"),e("strong",[s._v("取名时千万不能叫webpack")])])])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 将`index.js`打包成`main.js`\nwebpack ./src/index.js ./dist/main.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("打包后dist文件夹下会生成一个main.js文件，只需要将这个js文件在index.html引入即可")])]),s._v(" "),e("h2",{attrs:{id:"_2-安装webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装webpack"}},[s._v("#")]),s._v(" 2.安装webpack")]),s._v(" "),e("p",[s._v("1.初始化 package.json，运行命令自动生成")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm init\nnpm init -y //一切默认，不用输入\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("2.下载并安装 webpac")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("npm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev webpack"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//最新版本")]),s._v("\nnpm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev webpack@"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定版本")]),s._v("\nnpm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev webpack"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("-g：全局安装，"),e("strong",[s._v("不推荐全局安装 webpack")])]),s._v(" "),e("li",[s._v("-D：--save-dev的简写，"),e("strong",[s._v("开发和测试，本地环境")])]),s._v(" "),e("li",[s._v("-S：--save的简写， "),e("strong",[s._v("生产环境，线上环境")])])]),s._v(" "),e("h2",{attrs:{id:"_3-配置webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置webpack"}},[s._v("#")]),s._v(" 3.配置webpack")]),s._v(" "),e("p",[s._v("1.新建文件"),e("code",[s._v("webpack.config.js")]),s._v("文件")]),s._v(" "),e("p",[s._v("2.在"),e("code",[s._v("webpack.config.js")]),s._v("中配置：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开发环境")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("3.运行指令: webpack，相当于")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("webpack ./src/index.js ./dist/main.js -mode=development\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("注意：本地安装的webpack不会自动添加到环境变量中，如果没有全局安装过webpack，直接使用webpack命令就会报错。")])]),s._v(" "),e("p",[s._v("实际开发中，一般也不会直接使用webpack打包js文件，所以不推荐按全局安装，而是使用"),e("code",[s._v("npm run dev/bulid")])]),s._v(" "),e("p",[s._v("4.在"),e("strong",[s._v("package.json")]),s._v("文件中的scripts节点下，配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"scripts":{\n\t"dev": "webpack"//scripts下的节点，使用npm run执行\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("5.执行脚本，启动 webpack 进行项目的打包构建")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm run dev //mode=development，速度快，体积大\nnpm run build //mode=production，速度慢，体积小\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("开发中，使用development，因为，追求打包的速度，而不是体积。")]),s._v(" "),e("p",[s._v("此时，会优先在本地中找webpack，实际开发中，一般都会使用本地的webpack")]),s._v(" "),e("h2",{attrs:{id:"_4-报错处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-报错处理"}},[s._v("#")]),s._v(" 4.报错处理")]),s._v(" "),e("p",[e("strong",[s._v("情况1：")])]),s._v(" "),e("p",[s._v("在通过vs code 运行webpack进行打包时，报错webpack : 无法加载文件 D:\\nodejs\\node_global\\webpack.ps1，因为在此系统上禁止运行脚本。解决方案：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("以管理员身份运行vscode")])]),s._v(" "),e("li",[e("p",[s._v("执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的")])]),s._v(" "),e("li",[e("p",[s._v("执行：set-ExecutionPolicy RemoteSigned")])]),s._v(" "),e("li",[e("p",[s._v("这时再执行get-ExecutionPolicy，就显示RemoteSigned")])]),s._v(" "),e("li",[e("p",[s._v("全局安装"),e("code",[s._v("npm install webpack@<version> -g")])])])]),s._v(" "),e("p",[e("strong",[s._v("情况2：")])]),s._v(" "),e("p",[s._v("webpack可能有些默认配置，违背有可能报错。")]),s._v(" "),e("p",[s._v("在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：")]),s._v(" "),e("p",[s._v("① 默认的打包入口文件为 src -> index.js")]),s._v(" "),e("p",[s._v("② 默认的输出文件路径为 dist -> main.js")]),s._v(" "),e("p",[s._v("注意："),e("strong",[s._v("可以在 webpack.config.js 中修改打包的默认约定")]),s._v("，如果没有按照规定取名，打包也会出错")])])}),[],!1,null,null,null);a.default=n.exports}}]);