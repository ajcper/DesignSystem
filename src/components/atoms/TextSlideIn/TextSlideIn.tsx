import * as React from "react";
import SplitText from 'react-pose-text';
import { StyledTextSlideIn, Wrapper, AnimationContainer, TextUpWrapper, TextUp } from "./styled/StyledTextSlideIn";


interface Props {
  children: React.ReactNode;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const charPoses = {
  exit: { opacity: 1, y: 80 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * getRandomArbitrary(1, 15),
    transition: { ease: [.23,1,.32,1], duration: 800 }
  }
};

const TextSlideIn: React.SFC<Props> = ({
  children,
}) => (
  <StyledTextSlideIn>
      <Wrapper>
        <TextUpWrapper>
            {/* <TextUp>Word to loop</TextUp> */}
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Text slide in animation 
            </SplitText>
        </TextUpWrapper>
    </Wrapper>
  </StyledTextSlideIn>
);

export default TextSlideIn;
