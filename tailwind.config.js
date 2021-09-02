module.exports = {
	purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					default: '#182841',
				},
				accent: {
					yellow: '#C08B21',
				},
				green: {
					default: '#3FA899',
				},
				yellow: {
					lite: '#E7C740',
					default: '#F3BB1C',
				},
				red: {
					default: '#F03738',
				},
				white: '#FFFBFB',
			},
		},
		fontFamily: {
			kantumruy: ['Kantumruy', 'sans-serif'],
			inter:['Inter', 'sans-serif']
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		}
	},
	plugins: [],
}
