import webpack from "webpack";
import { BuildOptions } from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
