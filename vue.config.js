module.exports = {
    publicPath: '/',

    chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'Andr&eacute;s Ruiz'
			return args
		})
	},

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
