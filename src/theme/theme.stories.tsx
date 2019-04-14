import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ColorDisplay, MediaQueryDisplay, TextDisplay, LayerDisplay } from './themeDisplay';
import theme from './index';

const baseStylesStory = storiesOf('Base Styles', module);
// const mediaQueryStory = storiesOf('Themes/Media Queries', module);
// const textStory = storiesOf('Themes/Text', module);
// const layerStory = storiesOf('Themes/Layers', module);

const colors = Object.keys(theme.colors).map((key) => (
  <ColorDisplay name={key} color={theme.colors[key]} />
));

const mediaQueries = Object.keys(theme.mq).map((key) => (
  <MediaQueryDisplay name={key} />
));

const text = Object.keys(theme.text).map((key) => (
  <TextDisplay name={key} />
));


const layers = Object.keys(theme.layers).map((key) => (
  <LayerDisplay name={key} />
));

baseStylesStory.add(
  'Colours',
  () => (
    <React.Fragment>
      {colors}
    </React.Fragment>
  ),
);

baseStylesStory.add(
  'Media Queries',
  () => (
    <React.Fragment>
      {mediaQueries}
    </React.Fragment>
  ),
);

baseStylesStory.add(
  'Text',
  () => (
    <React.Fragment>
      {text}
    </React.Fragment>
  ),
);

baseStylesStory.add(
  'Layers',
  () => (
    <React.Fragment>
      {layers}
    </React.Fragment>
  ),
);

