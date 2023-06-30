import path from 'path'
import webpack from 'webpack'
import { BuildPath } from '../build/types/config'

export default function storybookConfig({ config }: { config: webpack.Configuration }) {
  const paths: BuildPath = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    build: '',
    entry: '',
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.plugins?.push(
    new webpack.DefinePlugin({
      WEBPACK_IS_DEV: true,
    })
  )

  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': paths.src,
    }
  }

  return config
}
