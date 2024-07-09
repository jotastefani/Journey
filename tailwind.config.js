// Importação dos tokens para customizar os temas.

import { colors } from "./src/styles/colors"
import { colors, fontFamily } from "./src/styles/fontFamily"

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/app/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors,
        fontFamily,
      },
      
    },
    plugins: [],
  }