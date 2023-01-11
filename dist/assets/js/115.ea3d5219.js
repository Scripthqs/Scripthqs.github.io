(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{576:function(s,e,t){"use strict";t.r(e);var n=t(21),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nodejs-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-简介"}},[s._v("#")]),s._v(" NodeJS 简介")]),s._v(" "),t("p",[s._v("相关网址：")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/zh-cn/"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nodejs.cn/"),t("OutboundLink")],1)])])]),s._v(" "),t("p",[s._v("Node.js 是一个开源与跨平台的"),t("code",[s._v("JavaScript")]),s._v("运行时环境。它是在浏览器外运行，它是一个事件驱动异步 I/O 单进程的"),t("strong",[s._v("服务端")]),s._v("JS 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。它使用新的 ECMAScript 标准，不必等待所有用户更新其浏览器，可以通过更改其版本来决定要使用新的标准特性。")]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("浏览器是 JS 的前端运行环境。")]),s._v(" "),t("li",[s._v("Node.js 是 JS 的后端运行环境，在后端中运行无法调用 "),t("strong",[s._v("DOM 和 BOM 等浏览器内置 API。")])]),s._v(" "),t("li",[s._v("nodejs 调用服务查看服务器相关 api gulp 基础 node 环境")])]),s._v(" "),t("h2",{attrs:{id:"_1-node-js-运行环境的核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-js-运行环境的核心"}},[s._v("#")]),s._v(" 1.Node.js 运行环境的核心")]),s._v(" "),t("p",[s._v("Node.js 运行环境的核心是 V8 引擎和 libuv 库。")]),s._v(" "),t("ul",[t("li",[s._v("V8 引擎：编译和执行 JS 代码、管理内存、垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。")]),s._v(" "),t("li",[s._v("libuv：是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。")])]),s._v(" "),t("p",[s._v("V8 的内存限制：在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。")]),s._v(" "),t("h2",{attrs:{id:"_2-nodejs-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-nodejs-应用场景"}},[s._v("#")]),s._v(" 2.NodeJS 应用场景")]),s._v(" "),t("ol",[t("li",[s._v("BFF 中间层\n"),t("ul",[t("li",[s._v("服务于前端的后端（Backend For Frontend）")]),s._v(" "),t("li",[s._v("让前端有能力自由组装后台数据")]),s._v(" "),t("li",[s._v("前端开发者能够自主决定与后台的通讯方式")]),s._v(" "),t("li",[s._v("安全性更高（不会把主服务器暴露在外面）、降低主服务器的复杂度")])])]),s._v(" "),t("li",[s._v("服务端渲染\n"),t("ul",[t("li",[s._v("SSR / Server Side Render")]),s._v(" "),t("li",[s._v("服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可")]),s._v(" "),t("li",[s._v("在服务器端直接就渲染好了，然后一次性打包返回给前端。")]),s._v(" "),t("li",[s._v("优点是有利于 SEO、首屏渲染很快")])])]),s._v(" "),t("li",[s._v("做小型服务、小型网站的后端（基于 Express、Koa 框架）\n"),t("ul",[t("li",[s._v("很多公司的后台管理系统，都是用 Node.js 来开发接口")]),s._v(" "),t("li",[s._v("后台管理系统对性能和并发的要求不是太高")])])]),s._v(" "),t("li",[s._v("做项目构建工具\n"),t("ul",[t("li",[s._v("前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的")])])]),s._v(" "),t("li",[s._v("做 PC 端的软件（基于 Electron 框架）\n"),t("ul",[t("li",[s._v("Electron 是 Node.js 在 PC 客户端的技术。")]),s._v(" "),t("li",[s._v("代码编辑器 VSCode 软件，就是用 JS 语言实现的。")])])])]),s._v(" "),t("p",[s._v("简单概括：")]),s._v(" "),t("ul",[t("li",[s._v("创建应用服务")]),s._v(" "),t("li",[s._v("web 开发（后端）")]),s._v(" "),t("li",[s._v("接口开发（小程序）")]),s._v(" "),t("li",[s._v("客户端应用工具 gulp、webpack、vue 脚手架、react 脚手架、小程序")])]),s._v(" "),t("h2",{attrs:{id:"_3-模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-模块化"}},[s._v("#")]),s._v(" 3.模块化")]),s._v(" "),t("p",[s._v("NodeJs 基于 Commonjs 模块化开发的规范，"),t("strong",[s._v("它定义一个 JS 文件就称之为一个模块")])]),s._v(" "),t("p",[s._v("node 的模块类型：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("核心（内置）模块 - 安装 nodejs 自带的模块")])]),s._v(" "),t("li",[t("p",[s._v("第三方模块 - 需要手动通过(npm/yarn)来进行安装")])]),s._v(" "),t("li",[t("p",[s._v("自定义模块 - 开发者自己编写开发")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'module_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("ES6 标准发布后，module 成为标准，标准使用是以 export 指令导出接口，以 import 引入模块。但是在我们一贯的"),t("strong",[s._v("node 模块中")]),s._v("，我们依然采用的是 CommonJS 规范，"),t("strong",[s._v("使用 require 引入模块")]),s._v("，使用 module.exports 导出接口。")]),s._v(" "),t("h2",{attrs:{id:"_4-nodejs-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-nodejs-安装"}},[s._v("#")]),s._v(" 4.NodeJS 安装")]),s._v(" "),t("p",[s._v("nodejs 环境安装非常便捷，直接可通过官网地址，下载对应的安装软件包即可安装使用。")]),s._v(" "),t("blockquote",[t("p",[s._v("注："),t("code",[s._v("尽量下载长期支持版本(LTS，有些软件是Release)")]),s._v("，如果在工作中有多个 node 环境的切换，可以安装 node 环境管理工具 NVM："),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/coreybutler/nvm-windows/releases"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("nvm 可以让你的电脑中有 N 多个 node 版本。")]),s._v(" "),t("p",[s._v("node8 A 项目 B 项目 node9 C 项目 node10")])]),s._v(" "),t("h3",{attrs:{id:"_4-1-通过-node-js-安装包-不推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-通过-node-js-安装包-不推荐"}},[s._v("#")]),s._v(" 4.1 通过 Node.js 安装包（不推荐）")]),s._v(" "),t("ul",[t("li",[s._v("注意一定要选择偶数版本，因为奇数版不稳定。")]),s._v(" "),t("li",[s._v("如果需要选择其他的版本，重新下载新的安装包，覆盖安装。")]),s._v(" "),t("li",[s._v("覆盖旧版本后，以前版本安装的全局工具包，要重新安装。")]),s._v(" "),t("li",[s._v("无法在多个版本之间切换")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-通过-nvm-安装-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-通过-nvm-安装-推荐"}},[s._v("#")]),s._v(" 4.2 通过 NVM 安装（推荐）")]),s._v(" "),t("p",[s._v("github 地址："),t("code",[s._v("https://github.com/coreybutler/nvm-windows/releases")])]),s._v(" "),t("ul",[t("li",[s._v("NVM：node.js version manager，用来管理 node 的版本。")]),s._v(" "),t("li",[s._v("先在 github 上安装 NVM，然后通过 NVM 安装 Node.js。\n"),t("ul",[t("li",[s._v("nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。")]),s._v(" "),t("li",[s._v("nvm-setup.zip：安装版，推荐使用")])])]),s._v(" "),t("li",[s._v("安装时，选择 NVM 和 Node.js 快捷方式的安装路径")]),s._v(" "),t("li",[s._v("打开 CMD 命令行，输入"),t("code",[s._v("nvm")]),s._v("可以看到里面列出了各种命令")]),s._v(" "),t("li",[t("code",[s._v("nvm -v")]),s._v("，查看已安装的 nvm 版本。")]),s._v(" "),t("li",[t("code",[s._v("nvm ls")]),s._v("查看本地安装的 node 所有版本")]),s._v(" "),t("li",[t("code",[s._v("node -v")]),s._v("，查看正在使用的 node 版本。")])]),s._v(" "),t("p",[s._v("安装 Node.js")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("nvm install 14.16.1")]),s._v("安装，命令中的版本号可自定义")]),s._v(" "),t("li",[t("code",[s._v("nvm use 14.16.1")]),s._v("使用特定版本")]),s._v(" "),t("li",[t("code",[s._v("nvm uninstall 14.16.1")]),s._v("卸载指定版本")]),s._v(" "),t("li",[t("code",[s._v("nvm install latest")]),s._v(" 安装最新的 node 版本")])]),s._v(" "),t("p",[s._v("如果 Node 安装失败，可以在安装路径中找到的 settings.txt 文件中，新增如下两行，修改镜像源：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("node_mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("taobao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\nnpm_mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("taobao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nvm version\nnvm -v\nnvm list\nnvm ls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);