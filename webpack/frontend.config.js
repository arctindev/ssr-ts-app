const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const frontendConfig = {
    externals: {
      react: "React",
      ["react-dom"]: "ReactDOM",
      ["react-router-dom"]: "ReactRouterDOM",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        ignoreOrder: false,
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css"],
    },
    mode: "production",
    entry: {
      main: "./client/index.tsx",
    },
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js",
      path: path.resolve(__dirname, "./../public"),
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), "..."],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(js|(j|t)sx?)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/react",
              [
                "@babel/env",
                {
                  targets: {
                    browsers: ["last 2 versions"],
                  },
                },
              ],
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      ],
    },
  }

module.exports = frontendConfig;