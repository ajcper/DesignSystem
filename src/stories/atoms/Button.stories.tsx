import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from './../../utils/wInfo';
import Button from './../../exportable/components/atoms/Button/Button';

const stories = storiesOf('Components/atoms/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    // <div>hi</div>
    <Button
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    >
      {text('Label', 'Default')}
    </Button>
  )),
);
