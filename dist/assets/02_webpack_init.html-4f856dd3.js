import{_ as n,o as s,c as e,f as a}from"./app-38f27126.js";const i={},l=a(`<h1 id="webpack-基本使用" tabindex="-1"><a class="header-anchor" href="#webpack-基本使用" aria-hidden="true">#</a> webpack 基本使用</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>创建文件和文件夹：</p><ul><li>dist 文件夹：用于存放之后打包的文件</li><li>src 文件夹：用于存放写的源文件 <ul><li>index.js：项目的入口文件</li><li>module.js：定义模块工具函数，可以在其他地方引用</li><li>index.html：浏览器打开展示的首页 html</li><li>package.json：通过 npm init 生成的，npm 包管理文件，<strong>取名时千万不能叫 webpack</strong></li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将\`index.js\`打包成\`main.js\`</span>
webpack ./src/index.js ./dist/main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打包后 dist 文件夹下会生成一个 main.js 文件，只需要将这个 js 文件在 index.html 引入即可</p></blockquote><h2 id="安装-webpack" tabindex="-1"><a class="header-anchor" href="#安装-webpack" aria-hidden="true">#</a> 安装 webpack</h2><p>webpack 的安装目前分为两个：webpack、webpack-cli。</p><ol><li><p>初始化 package.json，运行命令自动生成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
<span class="token function">npm</span> init <span class="token parameter variable">-y</span> <span class="token comment">#一切默认，不用输入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载并安装 webpack</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack//最新版本
<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>//指定版本
<span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack-cli
   <span class="token comment"># webpack 和 webpack-cli 一起安装</span>
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli –g <span class="token comment"># 全局安装</span>
<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli –D <span class="token comment"># 局部安装</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-g：全局安装，<strong>不推荐全局安装 webpack</strong></li><li>-D：--save-dev 的简写，<strong>开发和测试，本地环境</strong></li><li>-S：--save 的简写， <strong>生产环境，线上环境</strong></li></ul></li></ol><h2 id="配置-webpack" tabindex="-1"><a class="header-anchor" href="#配置-webpack" aria-hidden="true">#</a> 配置 webpack</h2><ol><li><p>新建文件<code>webpack.config.js</code>文件</p></li><li><p>在<code>webpack.config.js</code>中配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>module.exports = <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">//开发环境</span>
<span class="token punctuation">}</span>;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行指令: webpack，相当于</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>webpack ./src/index.js ./dist/main.js <span class="token parameter variable">-mode</span><span class="token operator">=</span>development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：本地安装的 webpack 不会自动添加到环境变量中，如果没有全局安装过 webpack，直接使用 webpack 命令就会报错。</strong></p><p>实际开发中，一般也不会直接使用 webpack 打包 js 文件，所以不推荐按全局安装，而是使用<code>npm run dev/build</code></p></li><li><p>在<strong>package.json</strong>文件中的 scripts 节点下，配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span> <span class="token comment">//scripts下的节点，使用npm run执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行脚本，启动 webpack 进行项目的打包构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev <span class="token comment"># mode=development，速度快，体积大</span>
<span class="token function">npm</span> run build <span class="token comment"># mode=production，速度慢，体积小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>开发中，使用 development，因为，追求打包的速度，而不是体积。</p><p>此时，会优先在本地中找 webpack，实际开发中，一般都会使用本地的 webpack</p></li></ol><h2 id="报错处理" tabindex="-1"><a class="header-anchor" href="#报错处理" aria-hidden="true">#</a> 报错处理</h2><p><strong>情况 1：</strong></p><p>在通过 vs code 运行 webpack 进行打包时，报错 webpack : 无法加载文件 D:\\nodejs\\node_global\\webpack.ps1，因为在此系统上禁止运行脚本。解决方案：</p><ul><li><p>以管理员身份运行 vscode</p></li><li><p>执行：get-ExecutionPolicy，显示 Restricted，表示状态是禁止的</p></li><li><p>执行：set-ExecutionPolicy RemoteSigned</p></li><li><p>这时再执行 get-ExecutionPolicy，就显示 RemoteSigned</p></li><li><p>全局安装<code>npm install webpack@&lt;version&gt; -g</code></p></li></ul><p><strong>情况 2：</strong></p><p>webpack 可能有些默认配置，违背有可能报错。</p><p>在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.默认的打包入口文件为 src -&gt; index.js</span>
<span class="token comment"># 2.默认的输出文件路径为 dist -&gt; main.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<strong>可以在 webpack.config.js 中修改打包的默认约定</strong>，如果没有按照规定取名，打包也会出错</p>`,20),c=[l];function p(t,o){return s(),e("div",null,c)}const r=n(i,[["render",p],["__file","02_webpack_init.html.vue"]]);export{r as default};