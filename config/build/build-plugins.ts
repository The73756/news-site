import svg from '@neodx/svg/webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
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
      output: 'public',
      metadata: {
        path: 'src/shared/ui/icon/sprite.gen.ts',
        runtime: {
          size: true,
          viewBox: true,
        },
      },
      group: true,
      resetColors: {
        replaceUnknown: 'currentColor',
      },
    }),
    new webpack.DefinePlugin({
      'WEBPACK_IS_DEV': isDev,
      'API_URL': JSON.stringify(apiUrl),
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      'PROJECT': JSON.stringify(project),
    }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    )
  }

  return plugins
}
