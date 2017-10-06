import Typography from 'typography';

const headerGoogleFont = 'Source Sans Pro';
const bodyGoogleFont = 'Open Sans';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 1.666,
  headerFontFamily: [headerGoogleFont, 'sans-serif'],
  bodyFontFamily: [bodyGoogleFont, 'sans-serif'],
  googleFonts: [
    {
      name: bodyGoogleFont,
      styles: [
        '300',
        '400'
      ],
    },
    {
      name: headerGoogleFont,
      styles: [
        '500'
      ]
    }
  ],
});

export default typography;
