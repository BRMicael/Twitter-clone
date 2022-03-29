module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        search: "var(--search)",
        white: "var(--white)",
        gray: "var(--gray)",
        outline: "var(--outline)",
        retweet: "var(--retweet)",
        like: "var(--like)",
        twitter: "var(--twitter)",
        twitterDarkHover: "var(--twitter-dark-hover)",
        twitterLightHover: "var(--twitter-light-hover)",
      },
      screens: {
        'ssm': '340px',
        'vsm': '500px'
      },
    },
  },
  plugins: [],
}
