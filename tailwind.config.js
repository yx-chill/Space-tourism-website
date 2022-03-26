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
        'mobile': "url('./src/assets/home/background-home-mobile.jpg')",
        'des-desktop': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'des-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
        'des-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",
      },
      boxShadow: {
        'explore': '0 0 0 44px rgba(255, 255, 255, .1)',
        'explore-md': '0 0 0 88px rgba(255, 255, 255, .1)'
      }
    },
  },
  plugins: [],
}
