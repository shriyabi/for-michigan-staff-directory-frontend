/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
	colors:{
		beige: {
			light:'#fcf3e8',
			DEFAULT:'#e6d2bb',
			dark:'#b3a494',	
		},
		maple: {
			light:'#c7a7ab',
			DEFAULT:'#a98f92',
			dark:'#69585a',
		},
		
  },
},
},
  plugins: [],
}

