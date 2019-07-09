import styled from "../../../../utils/styled-components";

const StyledTab = styled<{}, "div">("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export default StyledTab;
