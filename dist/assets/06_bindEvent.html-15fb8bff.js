import{_ as n,o as s,c as a,f as t}from"./app-dcac65c0.js";const p={},e=t(`<h1 id="_6-手写-dom-事件监听-带委托" tabindex="-1"><a class="header-anchor" href="#_6-手写-dom-事件监听-带委托" aria-hidden="true">#</a> 6 手写 DOM 事件监听(带委托)</h1><h2 id="_6-1-理解事件冒泡与事件委托" tabindex="-1"><a class="header-anchor" href="#_6-1-理解事件冒泡与事件委托" aria-hidden="true">#</a> 6.1 理解事件冒泡与事件委托</h2><ul><li><p>事件冒泡的流程</p><ul><li>基于 DOM 树形结构</li><li>事件在目标元素上处理后, 会由内向外(上)逐层传递</li><li>应用场景: 事件代理/委托/委派</li></ul></li><li><p>事件委托/代理</p><ul><li>将多个子元素的同类事件监听委托给(绑定在)共同的一个父组件上</li><li>好处： <ul><li>减少内存占用(事件监听回调从 n 变为 1)</li><li>动态添加的内部元素也能响应</li><li>也不要滥用</li></ul></li></ul></li></ul><h2 id="_6-2-api-相关" tabindex="-1"><a class="header-anchor" href="#_6-2-api-相关" aria-hidden="true">#</a> 6.2 API 相关</h2><ul><li>语法：addEventListener(element, type, fn, selector)</li><li>说明：如果 selector 没有，直接给 element 绑定事件，如果 selector 有，将 selector 对应的多个元素的事件委托绑定给父元素 element</li></ul><h2 id="_6-3-编码实现" tabindex="-1"><a class="header-anchor" href="#_6-3-编码实现" aria-hidden="true">#</a> 6.3 编码实现</h2><ul><li>src/event-bind/index.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
绑定事件监听的通用函数(带委托)
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 得到发生事件的目标</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
      <span class="token comment">// 如果元素被指定的选择器字符串选择, 返回true; 否则返回false。</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 委托绑定调用</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-测试" tabindex="-1"><a class="header-anchor" href="#_6-3-测试" aria-hidden="true">#</a> 6.3.测试</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>自定义事件监听<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>AAA1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>AAA2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>AAA3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>AAA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 功能: 点击每行提示对应的文本 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/hqs-utils.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// 不使用事件委托</span>
      <span class="token comment">// document.querySelectorAll(&#39;li&#39;).forEach(li =&gt; {</span>
      <span class="token comment">//   utils.addEventListener(li, &#39;click&#39;, function (event) {</span>
      <span class="token comment">//     alert(this.innerText)</span>
      <span class="token comment">//   })</span>
      <span class="token comment">// })</span>

      <span class="token comment">// 使用事件委托</span>
      <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      utils<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
        ul<span class="token punctuation">,</span>
        <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;li&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function l(o,i){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","06_bindEvent.html.vue"]]);export{k as default};