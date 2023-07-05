export type BuildMode = 'production' | 'development' | undefined

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
  apiUrl: string
}

export class BuildPaths {}
