module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_reset.scss";
          @import "~@/assets/scss/_breakpoints.scss";
          @import "~@/assets/scss/_colors.scss";
          @import "~@/assets/scss/_fonts.scss";
          @import "~@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
};
