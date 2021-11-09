import { merge } from "webpack-merge";
import { commonWebpackConfig } from "./webpack.config.common";
import CssnanoPlugin from "cssnano-webpack-plugin";
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

export default merge(commonWebpackConfig, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new TerserPlugin(),
      new CssnanoPlugin(),
    ],
  },
});
