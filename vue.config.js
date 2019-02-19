module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    // Use inline SVG by default, add ?external to the URL if you want external loading
    // See: https://vue-svg-loader.js.org/faq.html#how-to-use-both-inline-and-external-svgs
    svgRule
      .oneOf('external')
      .resourceQuery(/external/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
      .end()
      .end()
      .oneOf('inline')
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          // Options: https://github.com/svg/svgo/blob/master/.svgo.yml
          plugins: [{ removeViewBox: false }, { prefixIds: true }, { removeXMLNS: true }]
        }
      })
  },
}
