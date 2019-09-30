import CanelaBoldEot from './../../exportable/assets/fonts/Canela-Bold-Web.eot';
import CanelaBoldWoffTwo from './../../exportable/assets/fonts/Canela-Bold-Web.woff2';
import CanelaBoldWoff from './../../exportable/assets/fonts/Canela-Bold-Web.woff';

import RobotoRegularEot from './../../exportable/assets/fonts/Roboto-Regular-webfont.eot';
import RobotoRegularWoff from './../../exportable/assets/fonts/Roboto-Regular-webfont.woff';

import RobotoMediumEot from './../../exportable/assets/fonts/Roboto-Medium-webfont.eot';
import RobotoMediumWoff from './../../exportable/assets/fonts/Roboto-Medium-webfont.woff';

import RobotoBoldEot from './../../exportable/assets/fonts/Roboto-Bold-webfont.eot';
import RobotoBoldWoff from './../../exportable/assets/fonts/Roboto-Bold-webfont.woff';

import RobotoLightEot from './../../exportable/assets/fonts/Roboto-Light-webfont.eot';
import RobotoLightWoff from './../../exportable/assets/fonts/Roboto-Light-webfont.woff';

export const fontFamilyNames = {
  CanelaBold: '"Canela Bold"',
  RobotoBold: '"Roboto Bold"',
  RobotoMedium: '"Roboto Medium"',
  RobotoRegular: '"Roboto Regular"',
  RobotoLight: '"Roboto Light"',
  RobotoItalic: '"Roboto Italic"',
  OpenSansMedium: '"Open Sans Regular"',
  MaterialFontIcons: '"Material Icons"',
  navIcons: '"navIcons"',
};

const fontFamilies = `
  @font-face {
    font-family: "Canela Bold";
    src: url(${CanelaBoldEot});
    src: 
      url(${CanelaBoldWoffTwo}) format("woff2"),
      url(${CanelaBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Roboto Regular";
    src: url(${RobotoRegularEot});
    src: 
      url(${RobotoRegularWoff}) format("woff");
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Roboto Medium";
    src: url(${RobotoMediumEot});
    src: 
      url(${RobotoMediumWoff}) format("woff");
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Roboto Bold";
    src: url(${RobotoBoldEot});
    src: 
      url(${RobotoBoldWoff}) format("woff");
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Roboto Light";
    src: url(${RobotoLightEot});
    src: 
      url(${RobotoLightWoff}) format("woff");
    font-style: normal;
    font-stretch: normal;
  }
  `;

export default fontFamilies;
