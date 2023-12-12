/********************************************************************************
 * WEB322 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Dev Nirmal Shah  Student ID: 172893216 Date: 29-NOV-2023
 *
 *********************************************************************************/
module.exports = {
  content: [`./views/**/*.ejs`], // all .html files
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
};