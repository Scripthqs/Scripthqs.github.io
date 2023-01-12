(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{619:function(t,s,a){"use strict";a.r(s);var n=a(21),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通过-git-命令给-github-网站设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-git-命令给-github-网站设置代理"}},[t._v("#")]),t._v(" 通过 git 命令给 github 网站设置代理")]),t._v(" "),a("p",[t._v("由于 github 是国外网站，正常访问速度可能非常慢，使用 ss/ssr/v2rayN 配置的网络能够轻松快速的访问 google 和 github，但是，使用"),a("code",[t._v("git clone")]),t._v("克隆 github 上仓库代码时，发现克隆的速度仍然非常慢。")]),t._v(" "),a("h2",{attrs:{id:"_1、全局代理-不推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、全局代理-不推荐"}},[t._v("#")]),t._v(" 1、全局代理（不推荐）")]),t._v(" "),a("ol",[a("li",[t._v("确定打开了 ss/ssr/v2rayN 代理")]),t._v(" "),a("li",[t._v("设置全局代理")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global http.proxy http://127.0.0.1:1080")])]),t._v(" "),a("li",[a("code",[t._v("git config --global https.proxy https://127.0.0.1:1080")])])]),t._v(" "),a("p",[t._v("注意：需要打开代理查看设置，确认后面的端口是不是 1080，确认是 http 还是 socks5 代理，如果是 socks5 则使用以下命令")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global http.proxy socks5://127.0.0.1:1080")])]),t._v(" "),a("li",[a("code",[t._v("git config --global https.proxy socks5://127.0.0.1:1080")])])]),t._v(" "),a("p",[t._v("比如，我的代理端口是 10808，而不是 1080，我的代理协议（ss/ssr/v2rayN）都是使用 socks5，而不是 http。")]),t._v(" "),a("p",[t._v("此时，使用"),a("code",[t._v("git clone")]),t._v("下载的速度是代理网络的速度了，但是只对 https 协议的仓库地址有效，对 SSH 协议的仓库地址依然无效。")]),t._v(" "),a("p",[t._v("如需取消全局代理，使用：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global --unset http.proxy")])]),t._v(" "),a("li",[a("code",[t._v("git config --global --unset https.proxy")])])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("git config --list")]),t._v("可以检查代理网络，按键盘"),a("code",[t._v("q")]),t._v("可以退出列表")]),t._v(" "),a("h2",{attrs:{id:"_2、只对-github-网站进行代理-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、只对-github-网站进行代理-推荐"}},[t._v("#")]),t._v(" 2、只对 github 网站进行代理（推荐）")]),t._v(" "),a("p",[t._v("使用全局代理，会对国内的仓库造成影响，所有只对 github 网站进行代理，"),a("strong",[t._v("确认端口和协议后")]),t._v("，开始配置代理。")]),t._v(" "),a("p",[t._v("http 代理协议：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global http.https://github.com.proxy https://127.0.0.1:1080")])]),t._v(" "),a("li",[a("code",[t._v("git config --global https.https://github.com.proxy https://127.0.0.1:1080")])])]),t._v(" "),a("p",[t._v("socks5 代理协议：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global http.https://github.com.proxy socks5://127.0.0.1:1080")])]),t._v(" "),a("li",[a("code",[t._v("git config --global https.https://github.com.proxy socks5://127.0.0.1:1080")])])]),t._v(" "),a("p",[t._v("如果在输入以上命令之前，已经设置了全局代理，先使用以下命令取消：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global --unset http.proxy")])]),t._v(" "),a("li",[a("code",[t._v("git config --global --unset https.proxy")])])]),t._v(" "),a("p",[t._v("取消全局代理的命令并不能取消 github 网站的代理，如需取消，则要使用以下命令：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --global --unset http.https://github.com.proxy")])]),t._v(" "),a("li",[a("code",[t._v("git config --global --unset https.https://github.com.proxy")])])]),t._v(" "),a("p",[t._v("可以通过以下命令检查设置的代理是否成功，")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git config --list")]),t._v("（按键盘"),a("code",[t._v("q")]),t._v("可以退出列表）")])]),t._v(" "),a("p",[t._v("比如我的 config list 中可以看到设置的代码，我的代理端口是 10808，我的代理协议使用 socks5")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http.https://github.com.proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("socks5://127.0.0.1:10808\nhttps.https://github.com.proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("socks5://127.0.0.1:10808\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("或者找到用户(user)-下面的.gitconfig 文件，直接添加以下代码")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [http]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  sslVerify = false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socks5://127.0.0.1:10808\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socks5://127.0.0.1:10808\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socks5://127.0.0.1:10808\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socks5://127.0.0.1:10808\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socks5://127.0.0.1:10808\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"_3、使用镜像网站替换-尝试了一次好像没成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用镜像网站替换-尝试了一次好像没成功"}},[t._v("#")]),t._v(" 3、使用镜像网站替换（尝试了一次好像没成功）")]),t._v(" "),a("ul",[a("li",[t._v("将原本仓库地址的"),a("code",[t._v("github.com")]),t._v("替换成"),a("code",[t._v("github.com.cnpmjs.org")])]),t._v(" "),a("li",[a("code",[t._v("www.github.com/后面为代码库")]),t._v("替换成"),a("code",[t._v("www.github.com.cnpmjs.org/后面为代码库")])])]),t._v(" "),a("h2",{attrs:{id:"_4、要针对-ssh-协议的仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、要针对-ssh-协议的仓库地址"}},[t._v("#")]),t._v(" 4、要针对 SSH 协议的仓库地址")]),t._v(" "),a("ul",[a("li",[t._v("找到存储 SSH 密钥的地方"),a("code",[t._v("系统-用户-.ssh 文件夹")])]),t._v(" "),a("li",[t._v("新建 config（注意文件类型，没有后缀名，不是 txt）")]),t._v(" "),a("li",[t._v("在文件中根据 http 或者 socks5，输入以下两条之一，\n"),a("ul",[a("li",[a("code",[t._v('ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p')])]),t._v(" "),a("li",[a("code",[t._v('ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p')])])])])]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-S")]),t._v(" 指 socks 代理，默认是 socks5")]),t._v(" "),a("li",[a("code",[t._v("-H")]),t._v(" 指 HTTP 代理")]),t._v(" "),a("li",[t._v("后面的 "),a("code",[t._v("%h")]),t._v(" "),a("code",[t._v("%p")]),t._v(" 意思是 Host 和 Port，必须写上")])]),t._v(" "),a("p",[t._v("以上命令针对全局，如果只针对某个网站，使用")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Host github.com\nProxyCommand "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git的安装路径"')]),t._v(" -S "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080 %h %p\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Host github.com\nProxyCommand "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git的安装路径"')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080 %h %p\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_5、注册国内的仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、注册国内的仓库"}},[t._v("#")]),t._v(" 5、注册国内的仓库")]),t._v(" "),a("ul",[a("li",[t._v("注册码云")]),t._v(" "),a("li",[t._v("通过码云 导入 github 中已有的项目")]),t._v(" "),a("li",[t._v("git clone 码云中的项目")])])])}),[],!1,null,null,null);s.default=v.exports}}]);