import{_ as e,o as a,c as n,f as s}from"./app-38f27126.js";const i={},t=s(`<h1 id="gitignore-和-gitkeep" tabindex="-1"><a class="header-anchor" href="#gitignore-和-gitkeep" aria-hidden="true">#</a> <code>.gitignore</code> 和<code>.gitkeep</code></h1><h2 id="git-忽略清单" tabindex="-1"><a class="header-anchor" href="#git-忽略清单" aria-hidden="true">#</a> git 忽略清单</h2><p>将不需要被 git 管理的文件名字添加到此文件中，在执行 git 命令时，git 就会忽略这些文件。</p><ul><li><code>.gitignore</code> git 忽略清单文件名称</li><li>在这个文件中添加需要忽略的文件夹和文件</li><li>可以直接指定某个文件，指定某个后缀的文件，指定某个文件夹下的文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>test<span class="token punctuation">.</span>txt <span class="token comment">//忽略test.txt文件</span>
<span class="token operator">*</span><span class="token punctuation">.</span>txt <span class="token comment">//忽略后缀为.txt的文件</span>
node_modules <span class="token comment">//忽略node_modules文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-占位文件" tabindex="-1"><a class="header-anchor" href="#git-占位文件" aria-hidden="true">#</a> git 占位文件</h2><p>git 不会将空文件夹上传到服务器，添加.gitkeep 文件即可使用 git 命令将空文件夹上传到服务器.</p><p><code>.gitkeep</code> 是一个占位文件。</p><p><strong>注意：.gitkeep 并不是 Git 的特性。Git 没有对占位文件名有要求，放一个 README 也行。</strong></p><h2 id="readme-md" tabindex="-1"><a class="header-anchor" href="#readme-md" aria-hidden="true">#</a> README.MD</h2><p>该文件可以向仓库添加详细的说明，使用 markdown 文档语法。</p><h2 id="gitignore-不生效原因和解决" tabindex="-1"><a class="header-anchor" href="#gitignore-不生效原因和解决" aria-hidden="true">#</a> gitignore 不生效原因和解决</h2><p>有些时候，发现 gitignore 文件不生效。<code>.gitignore</code> 中已经标明忽略的文件目录下的文件，git push 的时候还会出现在 push 的目录中，或者用 git status 查看状态，想要忽略的文件还是显示被追踪状态。</p><p>原因：在 git 忽略目录中，新建的文件在 git 中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在<code>.gitignore</code> 中已经声明了忽略路径也是不起作用的。</p><p>解决方法：git 清除本地缓存（改变成未 track 状态），然后再提交</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update .gitignore&#39;</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[t];function d(o,r){return a(),n("div",null,c)}const l=e(i,[["render",d],["__file","06_git_igonre.html.vue"]]);export{l as default};