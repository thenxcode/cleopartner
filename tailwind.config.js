/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**.{html,js}"],
  theme: {
    extend: {},
    screens:{

      phone:{max: '420px'}
    }
  },
  plugins: [],
}
