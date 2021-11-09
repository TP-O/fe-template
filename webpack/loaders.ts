import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const TsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

export const SassLoader = {
  test: /\.(s[ac]|c)ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ],
};

export const AssetLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  type: "asset",
};
