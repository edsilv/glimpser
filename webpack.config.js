var path = require("path");

module.exports = {
    entry: {
        editor: "./src/editor.js",
        viewer: "./src/viewer.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};