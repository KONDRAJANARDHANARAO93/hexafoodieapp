module.exports = {
    // ... other webpack config settings
  
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/', // This determines where your images are output in the build directory
              },
            },
          ],
        },
      ],
    },
  };
  