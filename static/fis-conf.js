//fis3 编译sass
fis.match('*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass', {
      outputStyle: "expanded" // nested, expanded, compact, compressed
      // sourceMap: true
  })
});
// 加 md5
fis.match('*.{js,css,png}', {
  useHash: false
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});
//压缩js模块
//fis.match('module/*.js', {
//  // fis-optimizer-uglify-js 插件进行压缩，已内置
//  optimizer: fis.plugin('uglify-js')
//});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

//配置路径
fis.match('*.{eot,svg,ttf,woff,jpg,png}', {
  release: '/dist/$0'
});