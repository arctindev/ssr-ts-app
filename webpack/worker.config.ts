import path from 'path';

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  mode: 'production',
  entry: {
    ['service-worker']: './client/service-worker.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../public'),
  },
  optimization: {
    minimize: true,
    minimizer: ['...'],
  },
  module: {
    rules: [
      {
        test: /\.(js|(j|t)sx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-typescript',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
