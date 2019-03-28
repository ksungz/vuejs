// build/webpack.base.conf.js
module.exports = {
  resolve: {
    alias: {
      'vue$' : 'vue/dist/vue.esm.js',
      '@'    : resolve('src'),
      // src 디렉토리 내부에 sass 디렉토리를 생성한 후, 별칭(alias)을 등록합니다.
      'sass' : path.resolve(__dirname, './src/sass'),
    }
  }
}