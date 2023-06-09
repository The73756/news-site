import webpack from 'webpack'
import { buildBabelLoader, buildCssLoader, buildTsLoader } from './loaders'
import { BuildOptions } from './types/config'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  const cssLoader = buildCssLoader(isDev)
  const babelLoader = buildBabelLoader()
  const typescriptLoader = buildTsLoader()

  return [babelLoader, typescriptLoader, cssLoader]
}
