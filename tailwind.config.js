/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1240px",
        }
      },
      fontSize: {
        'custom-base': "13px",
        'custom-xl': "15px",
        'custom-2xl': "22px",
        'custom-3xl': "40px",
        'custom-4xl': "50px",
        'custom-5xl': "60px",
        'custom-6xl': "80px",
        'custom-7xl': "120px",
      },
      lineHeight: {
        'custom-base': "13px",
        'custom-xl': "15px",
        'custom-2xl': "18px",
        'custom-3xl': "19.92px",
        'custom-4xl': "22px",
        'custom-5xl': "22.22px",
        'custom-6xl': "26px",
        'custom-7xl': "30px",
        'custom-8xl': "39.84px",
        'custom-9xl': "44px",
        'custom-10xl': "52px",
        'custom-11xl': "70px",
        'custom-12xl': "104px",
      },
      colors: {
        'green': "#097980",
        'yellow': "#d2f038",
        'red': "#ff4242",
      },
      boxShadow: {
        'custom-xl': "0px 10px 40px 0px #41566B0D",
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/images/png/hero-bg.png')",
        'blue-bg': "url('/public/assets/images/webp/bg-blue.webp')",
        'green-bg': "url('/public/assets/images/webp/bg-green.webp')",
        'yellow-bg': "url('/public/assets/images/webp/bg-yellow.webp')",
        'goals-bg': "url('/public/assets/images/webp/goals-bg.webp')",
        'outsmart-bg': "url('/public/assets/images/webp/outsmart-bg.webp')",
        'tab-industry-bg': "url('/public/assets/images/webp/industry-tab-active-bg.webp')",
        'tab-proprietary-bg': "url('/public/assets/images/webp/tab-proprietary-bg.webp')",
        'tab-proprietary-mobile-bg': "url('/public/assets/images/webp/tab-proprietary-mobile-bg.webp')", 
        'tab-focused-bg': "url('/public/assets/images/webp/tab-focused-bg.webp')",
        'tab-focused-mobile-bg': "url('/public/assets/images/webp/focused-mobile-bg.webp')",
        'actual-bg': "url('/public/assets/images/webp/actual-bg.webp')",
      },
      fontFamily: {
        'maison': "'maison neue',sans serif",
        'shone': "'shone schmal',sans serif",
      }
    },
  },
  plugins: [],
}

