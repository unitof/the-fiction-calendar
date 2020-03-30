const del = require('del')
const outputDir = '_site'

module.exports = (eleventyConfig) => {

  // auto-clean output file
  console.log(eleventyConfig)
  const dirToClean = outputDir + '/*'
  del(dirToClean)

  return {
    dir: {
      input: 'content'
    }
  }
}
