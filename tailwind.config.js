import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans], // Основной шрифт
        mono: ['Roboto Mono', ...fontFamily.mono] // Моноширинный
        // // Дополнительные шрифты (например, Geist)
        // geist: ['Geist', 'sans-serif']
      }
    }
  }
}
