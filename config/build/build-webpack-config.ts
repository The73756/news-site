import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";
import { buildDevServer } from "./build-dev-server";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
  };
};
