import { resolve } from "path";
import _HtmlWebpackPlugin from "html-webpack-plugin";
import _MiniCssExtractPlugin from "mini-css-extract-plugin";
import _ESLintPlugin from "eslint-webpack-plugin";
import _StyleLintPlugin from "stylelint-webpack-plugin";
import { htmlFileNames } from "./files";

export const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: resolve(__dirname, "../.eslintrc.json"),
  context: resolve(__dirname, "../src/ts"),
  files: "**/*.ts",
});

export const StyleLintPlugin = new _StyleLintPlugin({
  configFile: resolve(__dirname, "../stylelint.config.js"),
  context: resolve(__dirname, "../src/scss"),
  files: "**/*.scss",
});

export const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/[name].[hash:6].css",
});

export const HtmlWebpackPlugins = htmlFileNames.map(
  (name: string) =>
    new _HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: resolve(__dirname, `../src/${name}.html`),
      chunks: ["global", name],
    }),
);
