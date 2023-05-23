import{_ as n,o as s,c as a,f as p}from"./app-38f27126.js";const t={},e=p(`<h1 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array" aria-hidden="true">#</a> 数组(Array)</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建数组</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//数组的长度</span>
arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token comment">//遍历数组</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组的增删改查" tabindex="-1"><a class="header-anchor" href="#数组的增删改查" aria-hidden="true">#</a> 数组的增删改查</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//数组末尾添加元素x</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token comment">//数组首部添加元素x</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token comment">//数组删除末尾元素x</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//数组删除首部元素x</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//数组的splice方法(会改变原数组)</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> k<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//i是开始的索引，k是删除的个数，p是插入的个数</span>
<span class="token comment">//数组的slice方法(不会改变原数组)</span>
arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//截取数组，b是开始的索引，e是结束的索引(不包括该元素)，e不传代表arr.length</span>
<span class="token comment">//splice和slice索引参数都可以是负数</span>

<span class="token comment">//拼接数组</span>
arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//数组转换成字符串</span>
arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//转字符串并且使用/替换,</span>
arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">,</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//另外</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//可以做类型判断</span>

<span class="token comment">//every方法</span>
arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给一个函数，该函数对数组的每一项都返回true则返回true</span>
<span class="token comment">//some方法</span>
arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给一个函数，该函数对数组的任意一项返回true则返回true</span>
<span class="token comment">//filter方法</span>
arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给一个函数，返回一个新数组，该数组的每一项执行函数返回true</span>
<span class="token comment">//map方法</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给一个函数，返回一个新数组，给数组的每一项都执行这个函数</span>
<span class="token comment">//forEach方法没有返回值，遍历数组</span>

<span class="token comment">//indexOf方法</span>
arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回与给定参数相等的第一个索引，没有则返回-1</span>
<span class="token comment">//lastIndexOf方法</span>
arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回与给定参数相等的最后一个索引，没有则返回-1</span>
<span class="token comment">//reverse方法</span>
arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//翻转数组</span>
<span class="token comment">//sort方法</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//数组排序，默认按照字母顺序，也可以按照指定函数</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//升序排序</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//降序排列</span>

<span class="token comment">//reduce方法</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>callback<span class="token punctuation">[</span><span class="token punctuation">,</span> initialValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
callback（一个在数组中每一项上调用的函数，接受四个函数：）
<span class="token operator">-</span> previousValue（上一次调用回调函数时的返回值，或者初始值）
<span class="token operator">-</span> currentValue（当前正在处理的数组元素）
<span class="token operator">-</span> currentIndex（当前正在处理的数组元素下标）
<span class="token operator">-</span> <span class="token function">array（调用reduce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法的数组）
initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

<span class="token comment">//实现累加器</span>
<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> t
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> total <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">per<span class="token punctuation">,</span>cur<span class="token punctuation">,</span>i<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> per<span class="token operator">+</span>cur
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","01_array.html.vue"]]);export{r as default};