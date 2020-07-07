module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
