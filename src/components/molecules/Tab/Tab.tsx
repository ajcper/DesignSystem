import * as React from "react";
import StyledTab from "./styled/StyledTab";

interface Props {
  children: React.ReactNode;
}

const Tab: React.SFC<Props> = ({
  children,
}) => (
  <StyledTab>
    {children}
  </StyledTab>
);

export default Tab;
