import { merge } from "webpack-merge";
import { baseWebpackConfig } from "./webpack.config.base";
import CssnanoPlugin from "cssnano-webpack-plugin";
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

export default merge(baseWebpackConfig, {
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
