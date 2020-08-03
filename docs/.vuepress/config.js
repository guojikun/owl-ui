const navbar = require("./config/navbar.js");
const sidebar = require("./config/sidebar.js");
const plugins = require("./config/sidebar.js");

module.exports = {
    title: "fox-design",
    description: "vue通用组件库fox-design",
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
    },
    plugins,
    extraWatchFiles: [
        ".vuepress/conf/sidebar.js", // 使用相对路径
        ".vuepress/conf/navbar.js", // 使用绝对路径
        ".vuepress/conf/plugins.js", // 使用绝对路径
    ],
};
