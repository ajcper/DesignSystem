import * as React from "react";
import StyledNewOne from "./styled/StyledNewOne";

interface Props {
  children: React.ReactNode;
}

const NewOne: React.SFC<Props> = ({
  children,
}) => (
  <StyledNewOne>
    {children}
  </StyledNewOne>
);

export default NewOne;
