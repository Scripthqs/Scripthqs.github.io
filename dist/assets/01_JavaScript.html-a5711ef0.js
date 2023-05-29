import{_ as a,o as s,c as n,f as t}from"./app-dcac65c0.js";const i={},e=t(`<h1 id="js-简介" tabindex="-1"><a class="header-anchor" href="#js-简介" aria-hidden="true">#</a> js 简介</h1><h2 id="javascript-简介" tabindex="-1"><a class="header-anchor" href="#javascript-简介" aria-hidden="true">#</a> JavaScript 简介</h2><p>JavaScript：从交互的角度，描述<strong>行为</strong>（实现业务逻辑和页面控制）</p><p>JavaScript 基础分为三个部分：</p><ul><li><strong>ECMAScript</strong>：JavaScript 的<strong>语法标准</strong>。包括变量、表达式、运算符、函数、if 语句、for 语句等。</li><li><strong>DOM</strong>：Document Object Model（文档对象模型），操作<strong>页面上的元素</strong>的 API。比如让盒子移动、变色、改变大小、轮播图等等。</li><li><strong>BOM</strong>：Browser Object Model（浏览器对象模型），操作<strong>浏览器部分功能</strong>的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。</li></ul><p>通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。</p><h2 id="javascript-特点" tabindex="-1"><a class="header-anchor" href="#javascript-特点" aria-hidden="true">#</a> JavaScript 特点</h2><ol><li><p>JavaScript 是解释型（脚本）语言，不需要事先被翻译为机器码；而是边翻译边执行（翻译一行，执行一行）</p></li><li><p>单线程，从上到下逐行执行</p></li><li><p>遵循 ECMAScript 标准</p></li></ol><h2 id="javascript-引入方式" tabindex="-1"><a class="header-anchor" href="#javascript-引入方式" aria-hidden="true">#</a> JavaScript 引入方式</h2><p>HTML 中推荐双引号，js 中推荐单引号。js 严格区分大小写。以分号结尾但是可以省略。 有 3 种方式引入 js 代码：</p><ul><li>行内式：直接写 HTML 标签的事件中</li><li>内嵌式：直接编写到<code>&lt;script&gt;</code>标签中。</li><li>引入外部 JS 文件<code>&lt;script src=&quot;tool.js&quot;&gt;&lt;/script&gt;</code></li></ul><h2 id="javascript-输入输出" tabindex="-1"><a class="header-anchor" href="#javascript-输入输出" aria-hidden="true">#</a> JavaScript 输入输出</h2><ul><li>弹出警告框 <code>alert()</code></li><li>控制台输出 <code>console.log()</code></li><li>向 body 中输入内容 <code>document.write()</code></li><li>弹出输入框 <code>prompt()</code>，用户不管输入什么内容，都是字符串。我们可以用一个变量，来接收用户输入的内容。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;弹窗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;控制台打印&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;标题1&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请随便输入点什么东西吧&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-注释语句" tabindex="-1"><a class="header-anchor" href="#javascript-注释语句" aria-hidden="true">#</a> JavaScript 注释语句</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//单行注释</span>
<span class="token comment">/*
  多行注释
 */</span>
<span class="token doc-comment comment">/**
 * 文档注释
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vscode 输入<code>/**</code>就会自动补全文档注释</p><h2 id="javascript-作用" tabindex="-1"><a class="header-anchor" href="#javascript-作用" aria-hidden="true">#</a> JavaScript 作用</h2><ul><li>表单动态校验（密码强度检测）<strong>js 最初的目的</strong></li><li>网页特效</li><li>服务端开发（node.js）</li><li>桌面应用程序（Electron）</li><li>App（Cordova）</li><li>控制硬件-物联网（Ruff）</li><li>游戏开发（cocos2d-js）</li></ul><h2 id="浏览器引擎" tabindex="-1"><a class="header-anchor" href="#浏览器引擎" aria-hidden="true">#</a> 浏览器引擎</h2><p>浏览器分为渲染引擎和 js 引擎</p><ul><li>渲染引擎：用来解析 HTML 和 css，俗称内核，chrome 的内核就是 webkit</li><li>js 引擎：也称 js 解释器。用来读取网页中 JavaScript 代码，对其处理后运行，chrome 浏览器的 js 引擎是 v8</li></ul>`,22),c=[e];function o(l,p){return s(),n("div",null,c)}const d=a(i,[["render",o],["__file","01_JavaScript.html.vue"]]);export{d as default};