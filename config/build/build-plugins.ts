import webpack from "webpack";
import { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import svg from "@neodx/svg/webpack";

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    svg({
      root: "src/shared/assets/icons",
      output: "public/sprite",
      definitions: "src/shared/ui/icon/sprite-definitions.ts",
      group: true,
      resetColors: {
        replaceUnknown: "currentColor",
      },
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ];
};
