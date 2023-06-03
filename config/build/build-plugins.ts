import svg from '@neodx/svg/webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    svg({
      root: 'src/shared/assets/icons',
      output: 'public/sprite',
      definitions: 'src/shared/ui/icon/sprite-definitions.ts',
      group: true,
      resetColors: {
        replaceUnknown: 'currentColor',
      },
    }),
    new webpack.DefinePlugin({
      WEBPACK_IS_DEV: isDev,
    }),
    new ReactRefreshWebpackPlugin(),
  ]
}
