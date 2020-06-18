const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin"); // 引入 vue-loader 文件

const resolve = function (dir) {
    return path.resolve(__dirname, dir);
};

const config = {
    mode: "production",
    entry: resolve("../src/index.js"),
    output: {
        path: resolve("../lib"),
        filename: "owl-ui.js",
        libraryTarget: "umd",
        library: "owl-ui",
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 处理 .vue 文件
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // 管理文字资源
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]?[hash]", // 处理结果将保持原文件名，文件路径后添加哈希值避免缓存
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            "@": resolve("../src/"),
        },
    },
    plugins: [
        new VueLoaderPlugin(), // 这里 vue 需要额外添加一个插件，将定义的 .js 、 .css 规则应用到 .vue 文件中
    ],
};

module.exports = config;
