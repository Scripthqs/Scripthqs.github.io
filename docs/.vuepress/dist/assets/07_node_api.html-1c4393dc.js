import{_ as n,o as s,c as a,f as e}from"./app-75be3b02.js";const t="/assets/JWT-56248376.png",l={},o=e('<h1 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h1><h2 id="接口安全" tabindex="-1"><a class="header-anchor" href="#接口安全" aria-hidden="true">#</a> 接口安全</h2><p>前后端分离式开发需要进行数据交互，传输的数据被偷窥、被抓包、被伪造时有发生，那么如何设计一套比较安全的 API 接口方案呢？</p><blockquote><p>并不是所有的接口都需要考虑安全的，有些接口是公开的，任何人只要知道地址都可以调用，对于一些项目中需要用户登录才能访问的接口才需要考虑安全问题。</p></blockquote><p>一般解决的方案有以下几类：</p><ul><li>token 令牌认证（jwt）</li><li>AK（app key）&amp;SK（secret key）【用户名&amp;密码】</li><li>时间戳超时验证+签名算法字符串</li><li>URL 签名（算法，非对称算法）</li><li>数据脱敏（防范数据库数据泄露）</li><li>HTTPS <ul><li>数字证书（防运营商）</li></ul></li><li>IP 黑/白名单（服务器层面的限制，apache、nginx）</li><li>oAuth2.0</li></ul><blockquote><p>关于<code>JWT</code>：</p></blockquote><p>Json web token（JWT），是基于 token 的鉴权机制，类似于 http 协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息，为应用的扩展提供了便利。JWT 具备以下几个优点：</p><ul><li><p>因 json 的通用性，所以 JWT 是可以进行跨语言</p></li><li><p>JWT 可以在自身存储一些其他业务逻辑所必要的<strong>非敏感</strong>信息</p></li><li><p>便于传输，jwt 的构成非常简单，字节占用很小，所以它是非常便于传输的</p></li><li><p>它不需要在服务端保存会话信息，所以它非常适合应用在前后端分离的项目上</p></li></ul><p>使用 JWT 进行鉴权的工作流程如下（重点）：</p><ul><li>用户使用用户名密码来请求服务器</li><li>服务器进行验证用户的信息（查数据库）</li><li>服务器通过验证发送给用户一个 token（令牌）</li><li>客户端存储 token（Vuex+localStorage），并在每次请求时附送上这个 token 值</li><li>服务端验证 token 值，并返回数据</li></ul><p><img src="'+t+`" alt="JWT"></p><p>JWT 是由三段信息构成的（头部、载荷、签名），将这三部分使用<code>.</code>连接在一起就组成了 JWT 字符串，形如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjNmMmc1N2E5MmFhIn0.eyJpYXQiOjE1NTk1Mjk1MjksImlzcyI6Imh0dHA6XC9cL3d3dy5weWcuY29tIiwiYXVkIjoiaHR0cDpcL1wvd3d3LnB5Zy5jb20iLCJuYmYiOjE1NTk1Mjk1MjgsImV4cCI6MTU1OTUzMzEyOSwianRpIjoiM2YyZzU3YTkyYWEiLCJ1c2VyX2lkIjoxfQ.4BaThL6_TbIMBGLIWZgpnoDQ-JlAjzbiK3y3BcvNiGI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li>头部（header），包含了两（可以更多）部分信息，分别是类型的声明和所使用的加密算法。</li></ul><p>一个完整的头部就像下面的 JSON：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JWT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HS256&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将头部进行 base64 加密/编码（该加密是可以对称解密的），这就得到了 jwt 的第一部分。</p><ul><li>载荷（payload）（body），载荷就是存放有效信息的地方。这些有效信息包含三个部分 <ul><li>标准中约定声明（建议但不强制） <ul><li>签发人</li><li>使用者</li><li>签发时间</li><li>有效期</li><li>....</li></ul></li><li>公共的声明</li><li>私有的声明</li></ul></li></ul><p>定义一个 payload：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;admin&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依旧进行 base64 加密，这就得到了 jwt 的第二部分。</p><ul><li>签名（signature），这个签证信息由三部分组成： <ul><li>经过 base64 编码后的 <ul><li>header</li><li>payload</li></ul></li><li><strong>secret（就是一个字符串，自己定义，值是什么无所谓）</strong></li></ul></li></ul><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> encodedString <span class="token operator">=</span> <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> signature <span class="token operator">=</span> <span class="token constant">HMACSHA256</span><span class="token punctuation">(</span>encodedString<span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就得到了 jwt 的第三部分。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> jwt <span class="token operator">=</span> encodedString <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>signature<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最终将三部分信息通过<code>.</code>进行连接就得到了最终的 jwt 字符串。后续不需要自己去写 jwt 怎么生成的。因此，此流程理解即可。</p><blockquote><p><strong>需要注意的是</strong></p><ul><li>secret 是保存在服务器端的</li><li>jwt 的签发生成也是在服务器端的</li><li>secret 是用来进行 jwt 的<strong>签发</strong>和 jwt 的<strong>验证</strong></li></ul><p>所以，secret 它就是服务端的私钥，在任何场景都不应该泄露出去。一旦其他人（包括客户端的用户）得知这个 secret，那就意味着他们可以自我签发 jwt，接口就没有安全性可言了。</p></blockquote>`,30),i=[o];function p(c,r){return s(),a("div",null,i)}const d=n(l,[["render",p],["__file","07_node_api.html.vue"]]);export{d as default};