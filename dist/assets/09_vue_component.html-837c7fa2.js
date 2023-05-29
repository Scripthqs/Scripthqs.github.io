import{_ as n,o as s,c as a,f as p}from"./app-dcac65c0.js";const t={},e=p(`<h1 id="组件的使用" tabindex="-1"><a class="header-anchor" href="#组件的使用" aria-hidden="true">#</a> 组件的使用</h1><h2 id="组件的关系" tabindex="-1"><a class="header-anchor" href="#组件的关系" aria-hidden="true">#</a> 组件的关系</h2><p>组件在被封装好之后，彼此之间是<strong>相互独立的</strong>，在使用组件的时候，根据彼此的<strong>嵌套关系</strong>，形成了父子关系、兄弟关系。</p><h2 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h2><p>使用组件的三个步骤：</p><ol><li>使用 import 语法导入需要的组件</li><li>使用 components 节点注册组件</li><li>以标签形式使用刚才注册的组件</li></ol><p>注意：</p><ul><li>当组件提供了<strong>name 属性</strong>之后，组件的名称，就是 name 属性的值。</li><li><strong>注册的名称</strong>主要是为了以标签的形式写这个组件</li><li>如果<strong>声明组件</strong>的时候，<strong>没有为组件指定 name 名称</strong>，则组件的名称默认就是<strong>注册时候的名称</strong></li><li>为了不混淆，组测组件的名称和声明的 name 属性，<strong>尽量一致</strong></li></ul><h2 id="父子组件" tabindex="-1"><a class="header-anchor" href="#父子组件" aria-hidden="true">#</a> 父子组件</h2><p>通过 components 注册的是私有子组件。</p><p>在<strong>组件 A 的</strong> components 节点下，注册了<strong>组件 F</strong>。</p><p>则组件 <strong>F</strong> 只能用在组件 <strong>A</strong> 中；不能被用在<strong>组件 C</strong> 中</p><p><strong>组件 A 是组件 F 的父组件</strong>。</p><h2 id="注册全局组件" tabindex="-1"><a class="header-anchor" href="#注册全局组件" aria-hidden="true">#</a> 注册全局组件</h2><p>在 vue 项目的 main.js 入口文件中，通过 Vue.component() 方法，可以注册全局组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>my<span class="token operator">-</span>test <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Test <span class="token keyword">from</span> <span class="token string">&quot;./Test.vue&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;myTest&quot;</span><span class="token punctuation">,</span> Test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue.component 中：</p><p>参数 1：字符串格式，表示注册的名称 参数 2：需要被全局注册的组件</p><h2 id="组件的-props" tabindex="-1"><a class="header-anchor" href="#组件的-props" aria-hidden="true">#</a> 组件的 props</h2><p>props 是组件的<strong>自定义属性</strong>，在<strong>封装通用组件</strong>的时候，合理地使用 props 可以极大的<strong>提高组件的复用性</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">]</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他组件以标签形式使用刚才注册的组件，就可以使用 init 属性传值。</p><p>即：<strong>父组件可以通过 props 向子组件传递数据</strong></p><p><strong>注意：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>my<span class="token operator">-</span>test init<span class="token operator">=</span><span class="token string">&quot;9&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token comment">//这种方法，传递的是字符串</span>
<span class="token operator">&lt;</span>my<span class="token operator">-</span>test <span class="token operator">:</span>init<span class="token operator">=</span><span class="token string">&quot;9&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token comment">//v-bind的方法，传递的是数字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>props 是只读的</strong>：</p><p>vue 规定：组件中封装的自定义属性是<strong>只读的</strong>，我们<strong>不能直接修改 props</strong> 的值。否则会直接报错。</p><p>要想修改 props 的值，可以把 <strong>props 的值转存到 data</strong> 中，因为 data 中的数据都是可读可写的！</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">]</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>props 的 default 默认值：</strong></p><p>在声明自定义属性时，可以通过 default 来定义属性的默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>props 的 type 值类型：</strong></p><p>在声明自定义属性时，可以通过 type 来定义属性的值类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>props 的 required 必填项：</strong></p><p>在声明自定义属性时，可以通过 required 选项，将属性设置为必填项，强制用户必须传递属性的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>props 的 validator 自定义验证函数：</strong></p><p>自定义验证函数会将该 prop 的值作为唯一的参数代入，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类型检查 + 其他验证</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">&gt;=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[e];function r(l,i){return s(),a("div",null,o)}const u=n(t,[["render",r],["__file","09_vue_component.html.vue"]]);export{u as default};