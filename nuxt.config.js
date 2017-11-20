const values = require('object.values')

if (!Object.values) {
	values.shim()
}

module.exports = {
	router: {
		middleware: 'store'
	},
  /*
  ** Headers of the page
  */
  head: {
    title: 'Node mismatch',
    meta: [
      { charset: 'utf-8' },
			{ name: 'robots', content: 'noindex, nofollow' },
      { name: 'theme-color', content: '#3c443b' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
			'lodash'
		],

    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
