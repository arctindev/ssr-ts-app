const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
  },
  mode: "production",
  entry: ["./client/index.tsx"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(js|(j|t)sx?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/react",
            "@babel/preset-typescript",
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
};
