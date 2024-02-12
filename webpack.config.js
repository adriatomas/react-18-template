const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isDevelopment = env.development || false;
  
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: ['babel-loader'],
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            {
              loader: isDevelopment
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.(sass|css)$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      port: 8080,
      hot: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css'],
    },
  };
};
