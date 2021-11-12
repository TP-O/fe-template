import { resolve } from "path";
import { merge } from "webpack-merge";
import { commonWebpackConfig } from "./webpack.config.common";

export default merge(commonWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    watchFiles: [resolve(__dirname, "../src")],
  },
});
