import { resolve } from "path";
import { Configuration, ProgressPlugin } from "webpack";
import { entryPoints } from "./files";
import * as Plugins from "./plugins";
import * as Loaders from "./loaders";

export const commonWebpackConfig: Configuration = {
  entry: {
    global: "./src/ts/global.ts",
    ...entryPoints,
  },
  output: {
    path: resolve(__dirname, "../docs"),
    filename: "js/[name].[hash:6].js",
    assetModuleFilename: "assets/[name].[hash:6][ext]",
    clean: true,
  },
  plugins: [
    Plugins.ESLintPlugin,
    Plugins.StyleLintPlugin,
    Plugins.MiniCssExtractPlugin,
    ...Plugins.HtmlWebpackPlugins,
    new ProgressPlugin(),
  ],
  module: {
    rules: [Loaders.TsLoader, Loaders.SassLoader, Loaders.AssetLoader],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": resolve(__dirname, "../src/"),
    },
  },
};
