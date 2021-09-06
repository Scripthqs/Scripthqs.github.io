(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{556:function(_,v,i){"use strict";i.r(v);var l=i(50),t=Object(l.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"git多人协作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git多人协作"}},[_._v("#")]),_._v(" git多人协作")]),_._v(" "),i("h2",{attrs:{id:"_1、git多人协作的流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1、git多人协作的流程"}},[_._v("#")]),_._v(" 1、git多人协作的流程")]),_._v(" "),i("ol",[i("li",[_._v("A在自己计算机中创建本地仓库")]),_._v(" "),i("li",[_._v("A在github中创建远程仓库")]),_._v(" "),i("li",[_._v("A将本地仓库推送到远程仓库")]),_._v(" "),i("li",[_._v("B克隆远程仓库到本地进行开发")]),_._v(" "),i("li",[_._v("B将本地仓库中开发的内容推送到远程仓库")]),_._v(" "),i("li",[_._v("A将远程仓库中的最新内容拉到本地")])]),_._v(" "),i("h2",{attrs:{id:"_2、将本地仓库推送到远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2、将本地仓库推送到远程仓库"}},[_._v("#")]),_._v(" 2、将本地仓库推送到远程仓库")]),_._v(" "),i("p",[_._v("A创建好本地仓库和远程仓库后，将本地仓库推送到远程仓库中。")]),_._v(" "),i("ul",[i("li",[i("code",[_._v("git push 远程仓库地址 分支名称")])]),_._v(" "),i("li",[_._v("第一次推送应该会验证github账号密码")]),_._v(" "),i("li",[_._v("然后计算机会自动保存账号密码，账号密码保存的位置\n"),i("ul",[i("li",[_._v("打开控制面板")]),_._v(" "),i("li",[_._v("点击右上角的查看方式设置为大图标（默认一般是类别）")]),_._v(" "),i("li",[_._v("点击凭据管理器")]),_._v(" "),i("li",[_._v("选择Windows凭据")]),_._v(" "),i("li",[_._v("可以看到这个账号，删除后下次推送还会验证账号密码\n远程仓库地址可以起一个方便的别名，方便推送")])])]),_._v(" "),i("li",[i("code",[_._v("git remote add 别名 远程仓库地址")])]),_._v(" "),i("li",[i("code",[_._v("git push 别名 分支名称")])])]),_._v(" "),i("p",[_._v("这种方法还是不够方便")]),_._v(" "),i("ul",[i("li",[i("code",[_._v("git push -u 远程仓库地址 分支名称")])]),_._v(" "),i("li",[i("code",[_._v("git push -u 别名 分支名称")])]),_._v(" "),i("li",[_._v("以上两种方法选择一种，只要在push后面加上"),i("code",[_._v("-u")]),_._v("下次就可以直接通过"),i("code",[_._v("git push")]),_._v("提交代码")])]),_._v(" "),i("h2",{attrs:{id:"_3、将远程仓库克隆到本地仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3、将远程仓库克隆到本地仓库"}},[_._v("#")]),_._v(" 3、将远程仓库克隆到本地仓库")]),_._v(" "),i("p",[_._v("B在本地计算机中，选择一个合适的地方，打开git bash命令行窗口，将远程仓库克隆到本地。")]),_._v(" "),i("ul",[i("li",[i("code",[_._v("git clone 远程仓库地址")])]),_._v(" "),i("li",[_._v("B克隆的远程仓库依然可以使用A之前创建的别名")]),_._v(" "),i("li",[_._v("B在可以在本地开发功能和提交到本地仓库")]),_._v(" "),i("li",[_._v("注意：此时B还不能直接将本地仓库推送到远程仓库中，如果可以，那么远程仓库将很可能被随意修改。")])]),_._v(" "),i("p",[_._v("A可以github中给B权限，让B成为协作者")]),_._v(" "),i("ul",[i("li",[_._v("点击仓库中settings(设置)")]),_._v(" "),i("li",[_._v("左侧选择Manage access(管理访问)")]),_._v(" "),i("li",[_._v("输入账号密码验证身份")]),_._v(" "),i("li",[_._v("invite a collaborator(邀请协作伙伴)")]),_._v(" "),i("li",[_._v("输入B的github账号")]),_._v(" "),i("li",[_._v("会生成一个邀请链接，A将这个链接发送给B")]),_._v(" "),i("li",[_._v("B访问这个链接，并同意")]),_._v(" "),i("li",[_._v("此时B可以将本地仓库推送到远程仓库")])]),_._v(" "),i("h2",{attrs:{id:"_4、将最新版本更新到本地仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4、将最新版本更新到本地仓库"}},[_._v("#")]),_._v(" 4、将最新版本更新到本地仓库")]),_._v(" "),i("p",[_._v("A将最新的版本拉取到本地仓库")]),_._v(" "),i("ul",[i("li",[i("code",[_._v("git pull 远程仓库地址 分支名称")])]),_._v(" "),i("li",[i("code",[_._v("git pull 别名 分支名称")])]),_._v(" "),i("li",[i("code",[_._v("git pull")]),_._v("也可以直接使用")]),_._v(" "),i("li",[_._v("拉取操作属于读取操作，不需要验证身份")]),_._v(" "),i("li",[_._v("如果远程仓库中的版本高于本地仓库的版本，本地仓库不能向远程仓库进行提交")])]),_._v(" "),i("h2",{attrs:{id:"_5、解决冲突"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5、解决冲突"}},[_._v("#")]),_._v(" 5、解决冲突")]),_._v(" "),i("p",[_._v("在多人同时开发一个项目时，如果两个人同时修改了同一个文件的同一个地方，就会发生冲突，冲突需要人为解决。")]),_._v(" "),i("ul",[i("li",[_._v("使用"),i("code",[_._v("git pull")]),_._v("命令，可以看见文件冲突的开始和结束，再人为修改")])]),_._v(" "),i("h2",{attrs:{id:"_6、为开源项目做贡献"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6、为开源项目做贡献"}},[_._v("#")]),_._v(" 6、为开源项目做贡献")]),_._v(" "),i("p",[_._v("C不是团队成员，也可以向项目提交代码，不过需要项目人A的同意。")]),_._v(" "),i("ul",[i("li",[_._v("C先点击项目的Fork")]),_._v(" "),i("li",[_._v("C会有一个相同的项目")]),_._v(" "),i("li",[_._v("C将这个开源项目克隆到本地\n"),i("ul",[i("li",[i("code",[_._v("git clone Fork项目的地址")])])])]),_._v(" "),i("li",[_._v("C在本地中修改这个项目")]),_._v(" "),i("li",[_._v("C提交到自己Fork的那个项目中\n"),i("ul",[i("li",[i("code",[_._v("git pull Fork开源项目的地址 分支")])])])]),_._v(" "),i("li",[_._v("C点击自己Fork项目的Pull Request")]),_._v(" "),i("li",[_._v("C点击New Pull Request")]),_._v(" "),i("li",[_._v("A可以同意或者拒绝")])])])}),[],!1,null,null,null);v.default=t.exports}}]);