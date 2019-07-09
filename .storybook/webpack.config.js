const path = require("path");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../.storybook")
    ],
    use: [
      require.resolve("cache-loader"),
      {
        loader: require.resolve("ts-loader"),
        options: {
          reportFiles: ["../src"]
        }
      },
      require.resolve("react-docgen-typescript-loader"),
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../')
  });
  config.resolve.extensions.push(".eot", ".woff2", ".woff");

  return config;
};