(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{633:function(t,_,s){"use strict";s.r(_);var a=s(21),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-的撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-的撤销"}},[t._v("#")]),t._v(" Git 的撤销")]),t._v(" "),s("h2",{attrs:{id:"_1、情况-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、情况-1"}},[t._v("#")]),t._v(" 1、情况 1")]),t._v(" "),s("p",[t._v("用暂存区的文件覆盖工作目录的文件 ，会改变工作目录的文件")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git checkout 文件")])])]),t._v(" "),s("p",[t._v("此时，工作目录中这个文件就会被暂存区的文件所覆盖，这个操作不会影响暂存区的文件状态")]),t._v(" "),s("h2",{attrs:{id:"_2、情况-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、情况-2"}},[t._v("#")]),t._v(" 2、情况 2")]),t._v(" "),s("p",[t._v("将文件从暂存区中删除 ，不会更改工作区的文件")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git rm --cached 文件")])])]),t._v(" "),s("p",[t._v("将暂存区的文件从暂存区撤出，不会更改工作区的文件（即： "),s("strong",[t._v("git status")]),t._v(" 提示的 被修改 且 被加入暂存区的内容，会被撤销，工作区文件不会变）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git restore --staged 文件")])])]),t._v(" "),s("p",[s("strong",[t._v("注意：这两条命令产生的结果一样，可以替换使用")])]),t._v(" "),s("h2",{attrs:{id:"_3、情况-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、情况-3"}},[t._v("#")]),t._v(" 3、情况 3")]),t._v(" "),s("p",[t._v("将不在暂存区的文件撤销更改 （即： "),s("strong",[t._v("git status")]),t._v(" 提示的 被修改 但 未被加入暂存区的内容，会被撤销）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git restore 文件")])])]),t._v(" "),s("h2",{attrs:{id:"_4、情况-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、情况-4"}},[t._v("#")]),t._v(" 4、情况 4")]),t._v(" "),s("p",[t._v("将 git 仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git log")]),t._v(" 查看之前提交版本的 commitID")]),t._v(" "),s("li",[s("code",[t._v("git reset --hard commitID")])])]),t._v(" "),s("p",[s("strong",[t._v("此时，就知道当初提交描述的重要性")])])])}),[],!1,null,null,null);_.default=v.exports}}]);