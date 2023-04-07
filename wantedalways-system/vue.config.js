// 开发环境开启跨域配置
let proxy = {}
if (process.env.NODE_ENV === 'development') {
  proxy = {
    '/api': {
      target: 'http://localhost:8081',
      ws: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}

module.exports = {
  devServer: {
    port: 8000,
    proxy: proxy
  },
  configureWebpack: {
    name: '新华手术器械'
  }
}


