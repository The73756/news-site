import webpack from 'webpack'
import { buildDevServer } from './build-dev-server'
import { buildLoaders } from './build-loaders'
import { buildPlugins } from './build-plugins'
import { buildResolvers } from './build-resolvers'
import { BuildOptions } from './types/config'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
    },
  }
}
