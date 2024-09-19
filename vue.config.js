const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* 
    En las opciones de carga (loaderOptions:) de css (css:) para sass (sass:),
    agregamos datos adicionales (additionalData:) importando el archivo que contenga el .sass
    De esta forma ponemos a disposicion de todo el proyecto el contenido del fichero .scss
    Pd: para que se aplique el canvio hay que reiniciar er server: npm run serve
  */
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
})
