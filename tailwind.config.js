// created babelrc file to get rid of the error : "Parsing error : Cannot find module 'next/babel'"
// added a line in .eslintrc.json
// Ref: https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ['"Nunito Sans"', "sans-serif"],
      logo: ['"Pacifico"', "cursive"],
    },
    extend: {
      colors: {
        primary: "#8035dd",
      },
      backgroundImage: {
        //Ref: https://stackoverflow.com/questions/72466367/how-to-use-background-image-with-tailwind-in-next-js
        "hero-pattern": "url('../public/static/assets/blogs/blog1.jpg')",
        blogsite: "url('../public/static/assets/work/blogsite.jpg')",
        ideas: "url('../public/static/assets/work/ideas.jpg')",
        newsletter: "url('../public/static/assets/work/newsletter.jpg')",
        portfolio: "url('../public/static/assets/work/portfolio.jpg')",
        shareProjects: "url('../public/static/assets/work/shareProjects.jpg')",
        todoapp: "url('../public/static/assets/work/todoapp.jpg')",
        weather: "url('../public/static/assets/work/weather.jpg')",
        weatherApp: "url('../public/static/assets/work/weatherApp.jpg')",
        flashchat: "url('../public/static/assets/work/flashchat.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// Note: We have to replace all the 'img' tags with 'Image' tags for the images to be displayed.
