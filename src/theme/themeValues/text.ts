import { css } from 'styled-components';
import mediaQueries from './mediaQueries';
import { fontFamilyNames } from './fonts';

const { CanelaBold, RobotoBold, RobotoMedium, RobotoRegular, RobotoLight } = fontFamilyNames;

const t2Base = {
  fontSize: '1.375rem',
  mq: {
    atTablet: {
      fontSize: '1.625rem',
    },
    atDesktop: {
      fontSize: '1.875rem',
    },
  },
};

const t3Base = {
  fontSize: '1.5rem',
  mq: {
    atTablet: {
      fontSize: '2rem',
    },
    atDesktop: {
      fontSize: '2.5rem',
    },
  },
};

const t4Base = {
  fontSize: '1.25rem',
  mq: {
    atTablet: {
      fontSize: '1.5rem',
    },
    atDesktop: {
      fontSize: '1.625rem',
    },
  },
};

const t5Base = {
  fontSize: '1.125rem',
  mq: {
    atTablet: {
      fontSize: '1.375rem',
    },
    atDesktop: {
      fontSize: '1.5rem',
    },
  },
};

const t6Base = {
  fontSize: '1.125rem',
  mq: {
    atTablet: {
      fontSize: '1.25rem',
    },
    atDesktop: {
      fontSize: '1.375rem',
    },
  },
};

const t7Base = {
  fontSize: '1.3rem',
  mq: {
    atTablet: {
      fontSize: '2rem',
    },
    atDesktop: {
      fontSize: '2.2rem',
    },
  },
};

const bxlBase = {
  fontSize: '1.063rem',
  mq: {
    atTablet: {
      fontSize: '1.188rem',
    },
    atDesktop: {
      fontSize: '1.25rem',
    },
  },
};

const blBase = {
  fontSize: '1rem',
  mq: {
    atTablet: {
      fontSize: '1.125rem',
    },
    atDesktop: {
      fontSize: '1.125rem',
    },
  },
};

const bmBase = {
  fontSize: '0.875rem',
  mq: {
    atTablet: {
      fontSize: '1rem',
    },
    atDesktop: {
      fontSize: '1rem',
    },
  },
};

const bsBase = {
  fontSize: '0.75rem',
  mq: {
    atTablet: {
      fontSize: '0.875rem',
    },
    atDesktop: {
      fontSize: '0.875rem',
    },
  },
};

const bxsBase = {
  fontSize: '0.625rem',
  mq: {
    atTablet: {
      fontSize: '0.75rem',
    },
    atDesktop: {
      fontSize: '0.75rem',
    },
  },
};

const customTitleOne = {
  fontSize: '0.975rem',
  mq: {
    atTablet: {
      fontSize: '1.125rem',
    },
    atDesktop: {
      fontSize: '1.125rem',
    },
  },
};

const customGraphTooltip = {
  fontSize: '0.3125rem',
  mq: {
    atTablet: {
      fontSize: '0.75rem',
    },
    atDesktop: {
      fontSize: '0.75rem',
    },
  },
};

const standardTextStyles = {
  t1: {
    fontFamily: 'Canela Bold',
    fontSize: '1.75rem',
    mq: {
      atTablet: {
        fontSize: '2.5rem',
      },
      atDesktop: {
        fontSize: '3.5rem',
      },
    },
  },
  t2: {
    ...t2Base,
    fontFamily: RobotoRegular,
  },
  t2Light: {
    ...t2Base,
    fontFamily: RobotoLight,
  },
  t3: {
    ...t3Base,
    fontFamily: CanelaBold,
  },
  t3Roboto: {
    ...t3Base,
    fontFamily: RobotoRegular,
  },
  t3RobotoLight: {
    ...t3Base,
    fontFamily: RobotoLight,
  },
  t4: {
    ...t4Base,
    fontFamily: RobotoRegular,
  },
  t4Medium: {
    ...t4Base,
    fontFamily: RobotoMedium,
  },
  t4Bold: {
    ...t4Base,
    fontFamily: RobotoBold,
  },
  t4Light: {
    ...t4Base,
    fontFamily: RobotoLight,
  },
  t5: {
    ...t5Base,
    fontFamily: CanelaBold,
  },
  t5Roboto: {
    ...t5Base,
    fontFamily: RobotoLight,
  },
  t6: {
    ...t6Base,
    fontFamily: RobotoRegular,
  },
  t6Light: {
    ...t6Base,
    fontFamily: RobotoLight,
  },
  t7Roboto: {
    ...t7Base,
    fontFamily: RobotoRegular,
  },
  t7RobotoLight: {
    ...t7Base,
    fontFamily: RobotoLight,
  },
  bxl: {
    ...bxlBase,
    fontFamily: RobotoRegular,
  },
  bxlMedium: {
    ...bxlBase,
    fontFamily: RobotoMedium,
  },
  bxlBold: {
    ...bxlBase,
    fontFamily: RobotoBold,
  },
  bl: {
    ...blBase,
    fontFamily: RobotoRegular,
  },
  blBold: {
    ...blBase,
    fontFamily: RobotoBold,
  },
  blLight: {
    ...blBase,
    fontFamily: RobotoLight,
  },
  bm: {
    ...bmBase,
    fontFamily: RobotoRegular,
  },
  bmMedium: {
    ...bmBase,
    fontFamily: RobotoMedium,
  },
  bmBold: {
    ...bmBase,
    fontFamily: RobotoBold,
  },
  bmLight: {
    ...bmBase,
    fontFamily: RobotoLight,
  },
  bs: {
    ...bsBase,
    fontFamily: RobotoRegular,
  },
  bxs: {
    ...bxsBase,
    fontFamily: RobotoRegular,
  },
  bsMedium: {
    ...bsBase,
    fontFamily: RobotoMedium,
  },
  bxsMedium: {
    ...bxsBase,
    fontFamily: RobotoMedium,
  },
  bxsBold: {
    ...bxsBase,
    fontFamily: RobotoBold,
  },
  bsBold: {
    ...bsBase,
    fontFamily: RobotoBold,
  },
  bsLight: {
    ...bsBase,
    fontFamily: RobotoLight,
  },
  bxs: {
    fontFamily: RobotoRegular,
    fontSize: '0.625rem',
    mq: {
      atTablet: {
        fontSize: '0.75rem',
      },
      atDesktop: {
        fontSize: '0.75rem',
      },
    },
  },
  ct1: {
    ...customTitleOne,
    fontFamily: CanelaBold,
  },
  detail: {
    fontFamily: RobotoRegular,
    fontSize: '0.88rem',
    mq: {
      atTablet: {
        fontSize: '0.94rem',
      },
      atDesktop: {
        fontSize: '1rem',
      },
    },
  },
};

// Add any custom text styling here.
const customTextStyles = {
  CusLargeRobotoLight: {
    ...t3Base,
    fontFamily: RobotoLight,
  },
  CusGraphTooltip: {
    ...customGraphTooltip,
    fontFamily: RobotoRegular,
  },
};

const textStyles = {
  ...standardTextStyles,
  ...customTextStyles,
};

const generateTextMediaQueries = (textStyleMediaQueries) =>
  css`
    ${() => mediaQueries.atTablet`
    font-size: ${textStyleMediaQueries.atTablet.fontSize};
  `}
  ${() => mediaQueries.atDesktop`
    font-size: ${textStyleMediaQueries.atDesktop.fontSize};
  `}
  `;

const text = Object.keys(textStyles).reduce((accum, label) => {
  const textCss = () => css`
    font-family: ${textStyles[label].fontFamily};
    font-size: ${textStyles[label].fontSize};
    ${generateTextMediaQueries(textStyles[label].mq)}
  `;
  return { ...accum, [label]: textCss };
}, {});

export default text;
