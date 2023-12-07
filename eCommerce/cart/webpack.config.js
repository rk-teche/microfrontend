const htmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports =
{
    mode: 'development',
    devServer:
    {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes:
            {
                "./CartShow": "./src/bootstrap.js"
            },
            shared: ["faker"]
        }),
        new htmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
};