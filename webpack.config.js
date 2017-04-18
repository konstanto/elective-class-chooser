"use strict";

let webpack = require("webpack");
let path = require("path");
let fs = require("fs");
let process = require("process");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WriteFilePlugin = require("write-file-webpack-plugin");
var autoprefixer = require("autoprefixer");

let isProduction = process.env.NODE_ENV === "production";
let isDevelopment = !isProduction;

let isHotMode = process.argv.find((a) => { return a.indexOf("webpack-dev-server") >= 0; }) && process.argv.find((a) => { return a.indexOf("--hot") >= 0; });

if (isProduction) {
    console.log("PRODUCTION mode!");
}

let config = {
    entry: {
        app: [
            "client/app/App.tsx"
        ],
        vendor: ["lodash"]
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '.'),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        publicPath: "/"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"],
        root: [path.resolve(".")]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ["ts"] }
        ]
    },
    ts: {
        compilerOptions: {
            noEmit: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "client/index.html",
            minify: { removeComments: true }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"],
            fileName: "[name].bundle.js",
            minChunks: (module) => {
                const userRequest = module.userRequest;

                if (typeof userRequest !== "string") {
                    return false;
                }

                return userRequest.indexOf("node_modules") >= 0;
            }
        })
    ],
    postcss: [autoprefixer({ browsers: ["last 2 versions"] })]
};

if (isHotMode) {
    config.entry.vendor.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");

    config.output.publicPath = "http://localhost:8080/";

    config.module.loaders.find((l) => { return l.test.toString() === /\.tsx?$/.toString() }).loaders.unshift("react-hot");
}

if (isDevelopment) {
    config.module.loaders.push({ test: /\.css/, loaders: ["style", "css", "postcss-loader"] });
    config.module.loaders.push({ test: /\.less$/, loaders: ["style", "css", "postcss-loader", "less"] });
    config.module.loaders.push({ test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)(\?.+)?(#.+)?$/, loaders: ["url-loader?limit=100000"] });

    config.devServer = {
        headers: { "Access-Control-Allow-Origin": "*" },
        publicPath: "http://localhost:8080/",
        https: false,
        outputPath: path.join(__dirname, '../public'),
    };

    config.plugins.push(new WriteFilePlugin({ test: /\.html/ }));
}

if (isProduction) {
    config.output.filename = "[name].[chunkhash].js";

    config.module.loaders.push({ test: /\.css/, loader: ExtractTextPlugin.extract("style", ["css", "postcss-loader"]) });
    config.module.loaders.push({ test: /\.less$/, loader: ExtractTextPlugin.extract("style", ["css", "postcss-loader", "less"]) });
    config.module.loaders.push({ test: /\.(png|gif|jpg)$/, loaders: ["url-loader?limit=100000"] });
    config.module.loaders.push({ test: /\.(woff|woff2|eot|ttf|svg)(\?.+)?(#.+)?$/, loaders: ["base64-font-loader"] });

    config.plugins.push(new ExtractTextPlugin("[name].[contenthash].css", { allChunks: true }));
    config.plugins.push(new webpack.DefinePlugin({ "process.env": { "NODE_ENV": JSON.stringify("production") } }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = config;