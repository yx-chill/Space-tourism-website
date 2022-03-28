module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/assets/home/background-home-desktop.jpg')",
        'tablet': "url('/assets/home/background-home-tablet.jpg')",
        'mobile': "url('/assets/home/background-home-mobile.jpg')",
        'des-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'des-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'des-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'tech-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'tech-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'tech-mobile': "url('/assets/technology/background-technology-mobile.jpg')"
      },
      boxShadow: {
        'explore': '0 0 0 44px rgba(255, 255, 255, .1)',
        'explore-md': '0 0 0 88px rgba(255, 255, 255, .1)',
        'active': '0px 1px 2px #000000'
      },
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Bellefair': ['Bellefair', 'sans-serif']
      }
    },
  },
  plugins: [],
}
