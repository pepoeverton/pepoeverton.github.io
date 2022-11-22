module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
  ]);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'build',
    },
  };
};
