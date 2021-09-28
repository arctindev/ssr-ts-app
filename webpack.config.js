const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    // }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  mode: "production",
  entry: {
    main: "./client/index.tsx",
    ["service-worker"]: "./client/service-worker.ts",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "public"),
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
};
