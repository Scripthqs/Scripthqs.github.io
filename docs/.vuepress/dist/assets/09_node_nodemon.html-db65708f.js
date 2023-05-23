import{_ as n,o as s,c as a,f as e}from"./app-75be3b02.js";const t={},p=e(`<h1 id="nodejs-express-nodemon" tabindex="-1"><a class="header-anchor" href="#nodejs-express-nodemon" aria-hidden="true">#</a> nodejs+express+nodemon</h1><h2 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 node.js</h2><h2 id="安装-express-服务端框架" tabindex="-1"><a class="header-anchor" href="#安装-express-服务端框架" aria-hidden="true">#</a> 安装 express（服务端框架）</h2><ol><li>初始化环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">--yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>下载 express 包</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>编写 js 代码</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 引入express</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 创建应用对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 创建路由规则</span>
<span class="token comment">// request 是对请求报文的封装</span>
<span class="token comment">// response 是对响应报文的封装</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//  设置响应</span>
  response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 监听端口，启动服务</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;服务已经启动, 8000 端口监听中...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>运行 js 程序</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> .<span class="token punctuation">\\</span>01express使用.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20210209165304650.png" alt="在这里插入图片描述"></p><ol><li>打开网页显示页面 <img src="https://img-blog.csdnimg.cn/20210209165339872.png" alt="在这里插入图片描述"></li><li>调试程序可以查看请求和响应 <img src="https://img-blog.csdnimg.cn/2021020916541663.png" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20210209165526228.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></li></ol><h2 id="安装-nodemon-自动重启工具" tabindex="-1"><a class="header-anchor" href="#安装-nodemon-自动重启工具" aria-hidden="true">#</a> 安装 nodemon 自动重启工具</h2><p>文件内容有修改自动重新启动服务</p><p>安装</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>npm install <span class="token operator">-</span>g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>nodemon server<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","09_node_nodemon.html.vue"]]);export{u as default};