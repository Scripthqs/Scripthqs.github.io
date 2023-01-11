const moment = require("moment");
moment.locale("zh-cn");
module.exports = {
  "@vuepress/last-updated": {
    transformer: (timestamp) => moment(timestamp).format("llll"),
  },
  "@vuepress/back-to-top": {},
  "vuepress-plugin-comment": {
    choosen: "valine",
    // options选项中的所有参数，会传给Valine的配置
    options: {
      el: "#valine-vuepress-comment",
      appId: "IiY25GwsMp8tu2uIC3tAWG1u-gzGzoHsz",
      appKey: "QTFHFPu8lPtlga82b0xsQtcj",
      path: "<%- frontmatter.commentid || frontmatter.permalink %>",
    },
  },
  "@oak-tree-house/encrypt": {
    contentTitle: "加密内容",
    unencryptedText: "内容如下所示，发布时应该加密。",
    encryptedText: "这部分内容是加密的。您需要输入正确的密码来查看它",
    decryptedText: "加密内容解密成功！",
    decryptButtonText: "确定",
    decryptFailText: "解密失败！",
  },
};
