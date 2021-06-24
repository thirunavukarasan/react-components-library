const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
module.exports = {
  components: "./src",
  outputPath: "./dist/playroom",

  //Optional:
  title: "My Awesome Library",
  // themes: './src/themes',
  snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  // scope: './playroom/useScope.js',
  widths: [320, 768, 1024, 1536 ],
  port: 9000,
  openBrowser: true,
  paramType: "search", // default is 'hash'
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: "/playroom/",

  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env", { modules: false }],
                  "@babel/preset-react",
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                // HERE: OPTIONS
                postcssOptions: {
                  plugins: [require("tailwindcss"), require("autoprefixer")],
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css",
      }),
    ],
  }),
  iframeSandbox: "allow-scripts",
};