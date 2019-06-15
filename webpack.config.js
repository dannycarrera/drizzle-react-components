const path = require("path");

process.env.BABEL_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  devtool: 'eval-source-map',
  output: {
    filename: "drizzle-react-components.js",
    library: "@wundr/drizzle-react-components",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        options: {
          presets: ["react"],
          plugins: [
            require("babel-plugin-transform-class-properties"),
            require("babel-plugin-transform-object-rest-spread"),
          ],
        },
      },
    ],
  },
  externals: [
    "@wundr/drizzle",
    "@wundr/drizzle-react",
    "prop-types",
    "react",
    "redux",
  ],
};
