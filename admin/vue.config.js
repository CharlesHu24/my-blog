// vue.config.js
module.exports = {
  outputDir: __dirname + '/../server/admin',
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
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