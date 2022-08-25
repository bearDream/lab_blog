module.exports = {
  theme:"antdocs",
  title: "智能感知与计算实验室",
  description: "感知收集 && 智能计算 && 存储共享",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/高科技.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/beardream/",
    editLinks: false,
  },
};