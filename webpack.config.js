const path = require("path");

const DIST = path.resolve(__dirname, "./dist/web");

module.exports = {
    entry: path.resolve(__dirname, "./source/index.js"),

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                "ie": 11
                            }
                        }]
                    ]
                }
            }
        ]
    },

    node: {
        buffer: "empty",
        crypto: "empty",
        dns: "empty",
        fs: "empty",
        http: "empty",
        https: "empty",
        net: "empty",
        path: "empty",
        stream: "empty"
    },

    output: {
        filename: "webdav.js",
        path: DIST,
        library: "WebDAV",
        libraryTarget: "umd"
    }
};
