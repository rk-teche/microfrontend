const htmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports =
{
    mode: 'development',
    devServer:
    {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes:
            {
                "./ProductIndex": "./src/bootstrap.js"
            },
            shared: ["faker"]
        }),
        new htmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
};