import path from "path";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv, BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;

  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
};
