/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      colors:{
        "background-content":"#1e1e1f",
        "background":"#121212",
        "button-hover":"#121212",
        "avatar-background":"#373737",
       "about-border":"#333333"
      },
      fontFamily:{
        "Rubik": ["Rubik"],
      }
    },
  },
  plugins: [],
}

