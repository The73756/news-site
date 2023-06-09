import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.(scss|css)$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          import: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[name]__[local]-[hash:8]' : '[hash:8]',
          },
        },
      },
      'postcss-loader',
    ],
  }
}
