const translations = require.context("./", true, /\.yml$/)
translations.forEach(translations)
