module.exports = {
  outputDir: 'docs',
  publicPath: '',
  indexPath: 'index.html',
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].minify = false
        return args
      })
  }
}