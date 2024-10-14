/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'source-sans': ["Source Sans 3", "sans-serif"],
  			montserrat: ["Montserrat", "sans-serif"]
  		},
  		colors: {
  			'errie-black': '#252525',
  			'risd-blue': '#5b5af7',
  			'cadet-gray': '#919eab',
  			jet: '#2c2c2c'
  		},
  		backgroundImage: {
  			'grad-theme-135': 'linear-gradient(135deg, rgba(241,178,168,1) 0%, rgba(236,87,168,1) 49%, rgba(91,90,247,1) 100%)'
  		},
  		boxShadow: {
  			navbar: 'rgba(0, 0, 0, 0.1) 0px 14px 28px, rgba(0,0,0,0.22) 0px 10px 10px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

