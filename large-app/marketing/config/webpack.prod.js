const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");


const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'marketing',
                exposes: {
                    "./MarketingApp": "./src/bootstrap"
                },
                shared: packageJSON.dependencies
            }
        )
    ]
};

module.exports = merge(commonConfig, prodConfig);