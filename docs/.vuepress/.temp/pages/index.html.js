export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/img/hero.png\",\"heroText\":null,\"tagline\":null,\"actions\":[{\"text\":\"关于我 →\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\"},{\"title\":\"主题\",\"details\":\"提供了一个开箱即用的默认主题。你也可以挑选一个社区主题，或者创建一个你自己的主题。\"},{\"title\":\"插件\",\"details\":\"灵活的插件API，使得插件可以为你的站点提供许多即插即用的功能。\"},{\"title\":\"打包工具\",\"details\":\"默认的打包工具是 Vite ，也同样支持 Webpack 。选一个你喜欢的来使用吧！\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[],\"git\":{\"updatedTime\":1684839917000},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
