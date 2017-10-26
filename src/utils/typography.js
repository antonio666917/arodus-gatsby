import Typography from "typography";

const headerGoogleFont = "Raleway";
const bodyGoogleFont = "Karma";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: [headerGoogleFont, "sans-serif"],
  bodyFontFamily: [bodyGoogleFont, "sans-serif"],
  includeNormalize: true,
  googleFonts: [
    {
      name: bodyGoogleFont,
      styles: ["300", "400", "700"]
    },
    {
      name: headerGoogleFont,
      styles: ["900"]
    }
  ]
});

export default typography;
