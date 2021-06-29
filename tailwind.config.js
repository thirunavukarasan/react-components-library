module.exports = {
  prefix: ['weaverz-ai-'],
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content:["./src/**/*.jsx", "./src/**/*.js"],
  } ,
  variants: {
    tableLayout: ["responsive", "hover", "focus"],
  },
  variants: {},
  plugins: [],
}