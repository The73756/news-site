import path from 'path'
import { buildWebpackConfig } from './config/build/build-webpack-config'
import { BuildEnv, BuildPath } from './config/build/types/config'

export default function webpack(env: BuildEnv) {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const port = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:5000'

  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: 'frontend',
  })
}
