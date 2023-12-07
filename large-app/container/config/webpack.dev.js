const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJSON = require("../package.json");

const devConfig = {
    mode: "development",
    devServer:
    {
        port: 8080,
        historyApiFallback:
        {
            index: "index.html"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: packageJSON.dependencies
        }),
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};

module.exports = merge(commonConfig, devConfig);