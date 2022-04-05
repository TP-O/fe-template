import { resolve } from "path";
import { merge } from "webpack-merge";
import { baseWebpackConfig } from "./webpack.config.base";
import WebpackDevServer from "webpack-dev-server";

declare module "webpack" {
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}

export default merge(baseWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    watchFiles: [resolve(__dirname, "../src")],
  },
});
