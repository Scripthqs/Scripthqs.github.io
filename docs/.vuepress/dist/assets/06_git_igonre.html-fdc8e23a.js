import{_ as e,o as t,c as a,f as i}from"./app-75be3b02.js";const n={},s=i(`<h1 id="gitignore-和-gitkeep" tabindex="-1"><a class="header-anchor" href="#gitignore-和-gitkeep" aria-hidden="true">#</a> <code>.gitignore</code> 和<code>.gitkeep</code></h1><h2 id="git-忽略清单" tabindex="-1"><a class="header-anchor" href="#git-忽略清单" aria-hidden="true">#</a> git 忽略清单</h2><p>将不需要被 git 管理的文件名字添加到此文件中，在执行 git 命令时，git 就会忽略这些文件。</p><ul><li><code>.gitignore</code> git 忽略清单文件名称</li><li>在这个文件中添加需要忽略的文件夹和文件</li><li>可以直接指定某个文件，指定某个后缀的文件，指定某个文件夹下的文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>test<span class="token punctuation">.</span>txt <span class="token comment">//忽略test.txt文件</span>
<span class="token operator">*</span><span class="token punctuation">.</span>txt <span class="token comment">//忽略后缀为.txt的文件</span>
node_modules <span class="token comment">//忽略node_modules文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-占位文件" tabindex="-1"><a class="header-anchor" href="#git-占位文件" aria-hidden="true">#</a> git 占位文件</h2><p>git 不会将空文件夹上传到服务器，添加.gitkeep 文件即可使用 git 命令将空文件夹上传到服务器.</p><p><code>.gitkeep</code> 是一个占位文件。</p><p><strong>注意：.gitkeep 并不是 Git 的特性。Git 没有对占位文件名有要求，放一个 README 也行。</strong></p><h2 id="readme-md" tabindex="-1"><a class="header-anchor" href="#readme-md" aria-hidden="true">#</a> README.MD</h2><p>该文件可以向仓库添加详细的说明，使用 markdown 文档语法。</p>`,11),d=[s];function o(r,c){return t(),a("div",null,d)}const p=e(n,[["render",o],["__file","06_git_igonre.html.vue"]]);export{p as default};