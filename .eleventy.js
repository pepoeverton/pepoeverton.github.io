const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/styles/');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/scripts/');
  eleventyConfig.addWatchTarget('./src/scripts/');
  eleventyConfig.addWatchTarget('./src/styles/');

  eleventyConfig.addNunjucksAsyncShortcode(
    'svgIcon',
    async (src, alt, sizes) => {
      let metadata = await Image(src, {
        formats: ['svg'],
        dryRun: true,
      });
      return metadata.svg[0].buffer.toString();
    }
  );

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'build',
    },
  };
};
