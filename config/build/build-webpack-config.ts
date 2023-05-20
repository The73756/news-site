import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
  };
};
