declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare const WEBPACK_IS_DEV: boolean
declare const API_URL: string
declare const PROJECT: 'storybook' | 'jest' | 'frontend'

type DeepPartial<T> = T extends object
  ? {
      [K in keyof T]?: DeepPartial<T[K]>
    }
  : T
