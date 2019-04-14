import * as React from 'react';
import styled from '../../../utils/styled-components';

export interface LayerDisplayProps {
  color: string;
  name: string;
}

const TextBox = styled<{ color: string }, 'div'>('div')`
  width: 200px;
  height: 200px;
  background: ${({ color }) => color};
`;

const TextName = styled<{}, 'div'>('div')`
  background: #FFF;
  height: 50px;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EEE;
  border-top: 0;
`;

const Wrapper = styled<{}, 'div'>('div')`
  margin: 15px;
  display: inline-block;
  width: 200px;
  height: 250px;
  background: #FFF;
`;

const LayerDisplay: React.SFC<LayerDisplayProps> = ({
  color,
  name,
}) => (
  <Wrapper>
    <TextBox color={color} />
    <TextName>
      {name}
    </TextName>
  </Wrapper>
);

export default LayerDisplay;
