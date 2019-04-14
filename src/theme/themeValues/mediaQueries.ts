import { css } from 'styled-components';

const standardMediaQueries = {
  atTablet: 768,
  atDesktop: 1024,
  atWidescreen: 1440,
};

const customMediaQueries = {

};

const gridMediaQueries = {
  gOneMax: 1100,
  g1three: 525,
  g1four: 715,
  g1six: 880,
  g2two: 620,
  g2three: 880,
};

const mediaQueryBreakPoints = {
  ...standardMediaQueries,
  ...customMediaQueries,
  ...gridMediaQueries,
};

const mediaQueries = Object.keys(mediaQueryBreakPoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  const emSize = mediaQueryBreakPoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default mediaQueries;
