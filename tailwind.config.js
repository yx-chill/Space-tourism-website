module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('./src/assets/home/background-home-desktop.jpg')",
        'tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        'mobile': "url('./src/assets/home/background-home-mobile.jpg')"
      },
      boxShadow: {
        'explore': '0 0 0 88px rgba(0, 0, 0, .5)'
      }
    },
  },
  plugins: [],
}
