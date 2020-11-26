module.exports = {
  configureWebpack: {
    entry: './src/main.js',
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'store': '@/store',
        'views': '@/views',
        'network': '@/network'
      }
    },
    module: {
      rules: [
        {
          test: /pbulic\/css\/\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]

    }
  }
}
