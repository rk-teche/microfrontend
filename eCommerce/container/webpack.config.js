const htmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const externalRemotePlugin = require("external-remotes-plugin");

module.exports =
{
    mode: 'development',
    devServer:
    {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes:
            {
                products: "products@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js"
            }
        }),
        new externalRemotePlugin(),
        new htmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
};