(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{558:function(t,s,_){"use strict";_.r(s);var v=_(50),i=Object(v.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"通过git命令给github网站设置代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通过git命令给github网站设置代理"}},[t._v("#")]),t._v(" 通过git命令给github网站设置代理")]),t._v(" "),_("p",[t._v("由于github是国外网站，正常访问速度可能非常慢，使用ss/ssr/v2rayN配置的网络能够轻松快速的访问google和github，但是，使用"),_("code",[t._v("git clone")]),t._v("克隆github上仓库代码时，发现克隆的速度仍然非常慢。")]),t._v(" "),_("h2",{attrs:{id:"_1、全局代理-不推荐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、全局代理-不推荐"}},[t._v("#")]),t._v(" 1、全局代理（不推荐）")]),t._v(" "),_("ol",[_("li",[t._v("确定打开了ss/ssr/v2rayN代理")]),t._v(" "),_("li",[t._v("设置全局代理")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global http.proxy http://127.0.0.1:1080")])]),t._v(" "),_("li",[_("code",[t._v("git config --global https.proxy https://127.0.0.1:1080")])])]),t._v(" "),_("p",[t._v("注意：需要打开代理查看设置，确认后面的端口是不是1080，确认是http还是socks5代理，如果是socks5则使用以下命令")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global http.proxy socks5://127.0.0.1:1080")])]),t._v(" "),_("li",[_("code",[t._v("git config --global https.proxy socks5://127.0.0.1:1080")])])]),t._v(" "),_("p",[t._v("比如，我的代理端口是10808，而不是1080，我的代理协议（ss/ssr/v2rayN）都是使用socks5，而不是http。")]),t._v(" "),_("p",[t._v("此时，使用"),_("code",[t._v("git clone")]),t._v("下载的速度是代理网络的速度了，但是只对https协议的仓库地址有效，对SSH协议的仓库地址依然无效。")]),t._v(" "),_("p",[t._v("如需取消全局代理，使用：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global --unset http.proxy")])]),t._v(" "),_("li",[_("code",[t._v("git config --global --unset https.proxy")])])]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("git config --list")]),t._v("可以检查代理网络，按键盘"),_("code",[t._v("q")]),t._v("可以退出列表")]),t._v(" "),_("h2",{attrs:{id:"_2、只对github网站进行代理-推荐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、只对github网站进行代理-推荐"}},[t._v("#")]),t._v(" 2、只对github网站进行代理（推荐）")]),t._v(" "),_("p",[t._v("使用全局代理，会对国内的仓库造成影响，所有只对github网站进行代理，"),_("strong",[t._v("确认端口和协议后")]),t._v("，开始配置代理。")]),t._v(" "),_("p",[t._v("http代理协议：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global http.https://github.com.proxy https://127.0.0.1:1080")])]),t._v(" "),_("li",[_("code",[t._v("git config --global https.https://github.com.proxy https://127.0.0.1:1080")])])]),t._v(" "),_("p",[t._v("socks5代理协议：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global http.https://github.com.proxy socks5://127.0.0.1:1080")])]),t._v(" "),_("li",[_("code",[t._v("git config --global https.https://github.com.proxy socks5://127.0.0.1:1080")])])]),t._v(" "),_("p",[t._v("如果在输入以上命令之前，已经设置了全局代理，先使用以下命令取消：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global --unset http.proxy")])]),t._v(" "),_("li",[_("code",[t._v("git config --global --unset https.proxy")])])]),t._v(" "),_("p",[t._v("取消全局代理的命令并不能取消github网站的代理，如需取消，则要使用以下命令：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --global --unset http.https://github.com.proxy")])]),t._v(" "),_("li",[_("code",[t._v("git config --global --unset https.https://github.com.proxy")])])]),t._v(" "),_("p",[t._v("可以通过以下命令检查设置的代理是否成功，")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git config --list")]),t._v("（按键盘"),_("code",[t._v("q")]),t._v("可以退出列表）")])]),t._v(" "),_("p",[t._v("比如我的config list中可以看到设置的代码，我的代理端口是10808，我的代理协议使用socks5")]),t._v(" "),_("div",{staticClass:"language-cmd line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("http.https://github.com.proxy=socks5://127.0.0.1:10808\nhttps.https://github.com.proxy=socks5://127.0.0.1:10808\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("h2",{attrs:{id:"_3、使用镜像网站替换-尝试了一次好像没成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用镜像网站替换-尝试了一次好像没成功"}},[t._v("#")]),t._v(" 3、使用镜像网站替换（尝试了一次好像没成功）")]),t._v(" "),_("ul",[_("li",[t._v("将原本仓库地址的"),_("code",[t._v("github.com")]),t._v("替换成"),_("code",[t._v("github.com.cnpmjs.org")])]),t._v(" "),_("li",[_("code",[t._v("www.github.com/后面为代码库")]),t._v("替换成"),_("code",[t._v("www.github.com.cnpmjs.org/后面为代码库")])])]),t._v(" "),_("h2",{attrs:{id:"_4、要针对ssh协议的仓库地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、要针对ssh协议的仓库地址"}},[t._v("#")]),t._v(" 4、要针对SSH协议的仓库地址")]),t._v(" "),_("ul",[_("li",[t._v("找到存储SSH密钥的地方"),_("code",[t._v("系统-用户-.ssh 文件夹")])]),t._v(" "),_("li",[t._v("新建config（注意文件类型，没有后缀名，不是txt）")]),t._v(" "),_("li",[t._v("在文件中根据http或者socks5，输入以下两条之一，\n"),_("ul",[_("li",[_("code",[t._v('ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p')])]),t._v(" "),_("li",[_("code",[t._v('ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p')])])])])]),t._v(" "),_("p",[t._v("说明：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("-S")]),t._v(" 指 socks 代理，默认是 socks5")]),t._v(" "),_("li",[_("code",[t._v("-H")]),t._v(" 指 HTTP 代理")]),t._v(" "),_("li",[t._v("后面的 "),_("code",[t._v("%h")]),t._v(" "),_("code",[t._v("%p")]),t._v(" 意思是 Host 和 Port，必须写上")])]),t._v(" "),_("p",[t._v("以上命令针对全局，如果只针对某个网站，使用")]),t._v(" "),_("div",{staticClass:"language-linux line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('Host github.com \nProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("或者")]),t._v(" "),_("div",{staticClass:"language-cmd line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('Host github.com \nProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("h2",{attrs:{id:"_5、注册国内的仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、注册国内的仓库"}},[t._v("#")]),t._v(" 5、注册国内的仓库")]),t._v(" "),_("ul",[_("li",[t._v("注册码云")]),t._v(" "),_("li",[t._v("通过码云 导入github中已有的项目")]),t._v(" "),_("li",[t._v("git clone 码云中的项目")])])])}),[],!1,null,null,null);s.default=i.exports}}]);