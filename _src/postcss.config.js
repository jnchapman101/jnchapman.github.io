module.exports = {
  map: { inline: false },
  plugins: [
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "../**/*.html",
        { raw: '<div class="navbar-menu is-active"></div>', extension: "html" },
        {
          raw: '<div class="is-collapsible is-active"></div>',
          extension: "html",
        },
      ],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
