const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-playroom",
    "@storybook/preset-scss",
    "storybook-addon-outline",
    "@storybook/addon-measure"
  ],
  webpackFinal: async (config) => {
    // config.module.rules = [
    //   {
    //     test: /\.css$/,
    //     use: [
    //       {
    //         loader: "postcss-loader",
    //         options: {
    //           // HERE: OPTIONS
    //           postcssOptions: {
    //             plugins: [require("tailwindcss"), require("autoprefixer")],
    //           },
    //         },
    //       },
    //     ],
    //     include: path.resolve(__dirname, "../"),
    //   }
    // ];

    const moduleRules = [
      {
        test: /.*\.(?:le|c|sc)ss$/,
        exclude: /node_modules/,
        use: [
         
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
        include: path.resolve(__dirname, "../"),
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      //   include: path.resolve(__dirname, '../'),
      // }
    ];
    config.module.rules = [...config.module.rules, ...moduleRules];
    
    return config;
  },
};
