import{_ as n,o as s,c as a,f as e}from"./app-38f27126.js";const t={},p=e(`<h1 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h1><h2 id="watch-侦听器" tabindex="-1"><a class="header-anchor" href="#watch-侦听器" aria-hidden="true">#</a> watch 侦听器</h2><p><strong>watch 侦听器</strong>允许开发者监视数据的变化，从而<strong>针对数据的变化做特定的操作.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.默认有两个参数: newValue/oldValue</span>
    <span class="token function">message</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">info</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2.如果是对象类型, 那么拿到的是代理对象</span>
        <span class="token comment">// console.log(&quot;info数据发生了变化:&quot;, newValue, oldValue)</span>
        <span class="token comment">// console.log(newValue.name, oldValue.name)</span>

        <span class="token comment">// 3.获取原生对象</span>
        <span class="token comment">// console.log({ ...newValue })</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span><span class="token function">toRaw</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>侦听器本质是一个函数，要监视哪个数据的变化，就把数据名作为方法即可。</p><p>监视属性可以：</p><ol><li><code>new Vue</code>时传入 watch 配置</li><li>通过 <code>vm.$watch</code> 监视</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 生命周期回调函数: 当前的组件被创建时自动执行</span>
<span class="token comment">// 一般在该函数中, 会进行网络请求</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ajax/fetch/axios</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;created&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;message数据变化:&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侦听器的格式" tabindex="-1"><a class="header-anchor" href="#侦听器的格式" aria-hidden="true">#</a> 侦听器的格式</h2><ol><li>方法格式的侦听器 <ul><li>缺点 1：无法在刚进入页面的时候，自动触发</li><li>缺点 2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器</li></ul></li><li>对象格式的侦听器，需要使用 handler 函数 <ul><li>好处 1：可以通过 <strong>immediate</strong> 选项，让侦听器自动触发</li><li>好处 2：可以通过 <strong>deep</strong> 选项，让侦听器深度监听对象中每个属性的变化</li></ul></li></ol><h2 id="使用-watch" tabindex="-1"><a class="header-anchor" href="#使用-watch" aria-hidden="true">#</a> 使用 watch</h2><p>使用 watch 检测用户名是否可用</p><p>监听 username 值的变化，并使用 axios 发起 Ajax 请求，检测当前输入的用户名是否可用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;username&quot;</span><span class="token operator">&gt;</span>

<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token keyword">async</span> <span class="token function">username</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
          <span class="token comment">// 使用 axios 发起请求，判断用户名是否可用</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.escook.cn/api/finduser/&#39;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="immediate-选项" tabindex="-1"><a class="header-anchor" href="#immediate-选项" aria-hidden="true">#</a> immediate 选项</h2><p>默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器<strong>立即被调用</strong>，则需要使用 immediate 选项。需要使用 handler 函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// handler 是固定写法，表示当 username 的值变化时，自动调用 handler 处理函数</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.escook.cn/api/finduser/&#39;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 表示页面初次渲染好之后，就立即触发当前的 watch 侦听器</span>
     <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deep-选项" tabindex="-1"><a class="header-anchor" href="#deep-选项" aria-hidden="true">#</a> deep 选项</h2><p>如果 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项，<strong>深度监视</strong>。需要使用 handler 函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听对象属性" tabindex="-1"><a class="header-anchor" href="#监听对象属性" aria-hidden="true">#</a> 监听对象属性</h2><p>如果只想监听对象中单个属性的变化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;name.username&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch-和计算属性" tabindex="-1"><a class="header-anchor" href="#watch-和计算属性" aria-hidden="true">#</a> watch 和计算属性</h2><ol><li>computed 能完成的功能，watch 都可以完成</li><li>watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步操作</li></ol>`,25),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","06_vue_watch.html.vue"]]);export{r as default};