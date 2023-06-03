const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: true,

  presets: [presets.imports(), presets.node(), presets.typescript(), presets.react()],

  extend: {
    rules: {
      'import/no-default-export': 'off',
    },
  },
})
