import{_ as e,o as l,c as i,f as o}from"./app-75be3b02.js";const d={},c=o('<h1 id="offset、scroll、client" tabindex="-1"><a class="header-anchor" href="#offset、scroll、client" aria-hidden="true">#</a> offset、scroll、client</h1><h2 id="offset-系列" tabindex="-1"><a class="header-anchor" href="#offset-系列" aria-hidden="true">#</a> offset 系列</h2><p>offset：偏移、补偿、位移，offset 系列是 js 中的一套<strong>获取元素尺寸</strong>的便捷办法。</p><ul><li><code>offsetWidth</code> width + padding + border 不包括 margin</li><li><code>offsetHeight</code> Height + padding + border 不包括 margin</li><li><code>offsetLeft</code> 当前元素相对于其包含块的水平偏移量</li><li><code>offsetTop</code>当前元素相对于其包含块的垂直偏移量 <ul><li><strong>从父亲的 padding 开始算起，父亲的 border 不算在内</strong></li></ul></li><li>上面 4 个方法返回的是数字，不带单位</li><li>上面 4 个方法是只读的,<code>.style</code>才可以赋值</li><li><code>offsetParent</code>获取当前元素的包含块。</li></ul><h2 id="scroll-系列" tabindex="-1"><a class="header-anchor" href="#scroll-系列" aria-hidden="true">#</a> scroll 系列</h2><ul><li><code>scrollWidth</code> 获取元素整个滚动区域的宽度。包括 width 和 padding，不包括 border 和 margin。</li><li><code>scrollHeight</code> 获取元素整个滚动区域的高度。包括 width 和 padding，不包括 border 和 margin。</li><li><code>scrollLeft</code>获取水平滚动条滚动的距离。</li><li><code>scrollTop</code>获取垂直滚动条滚动的距离。</li><li>同样上面的方法返回值都是数字，不带单位</li></ul><h2 id="client-系列" tabindex="-1"><a class="header-anchor" href="#client-系列" aria-hidden="true">#</a> client 系列</h2><ul><li><code>clientHeight</code> 返回元素的可见高度（width + padding）。</li><li><code>clientWidth</code> 返回元素的可见宽度（height + padding）。</li><li>当 body/html 元素调用时，获取的网页可视区域宽度和高度。</li><li><code>clientX</code> 鼠标距离可视区域左侧距离。</li><li><code>clientY</code> 鼠标距离可视区域上侧距离。</li><li><code>clientTop</code> 盒子的上 border。</li><li><code>clientLeft</code> 盒子的左 border。</li><li><code>pageX = clientX + scrollLeft</code>(IE 不支持)</li><li><code>pageY = clientY + scrollTop</code>(IE 不支持)</li></ul><h2 id="判断滚动到底部" tabindex="-1"><a class="header-anchor" href="#判断滚动到底部" aria-hidden="true">#</a> 判断滚动到底部</h2><ul><li>当某个元素满足 <code>scrollHeight - scrollTop &lt;= clientHeight</code> 时，说明垂直滚动条滚动到底了。</li><li>当某个元素满足 <code>scrollWidth - scrollLeft &lt;= clientWidth</code> 时，说明水平滚动条滚动到底了。</li></ul>',10),t=[c];function r(a,s){return l(),i("div",null,t)}const h=e(d,[["render",r],["__file","19_js_scroll.html.vue"]]);export{h as default};