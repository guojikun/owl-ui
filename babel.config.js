module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
                useBuiltIns: "entry",
                corejs: {
                    version: 3, // 使用core-js@3
                    proposals: true,
                },
            },
        ],
    ],
};
