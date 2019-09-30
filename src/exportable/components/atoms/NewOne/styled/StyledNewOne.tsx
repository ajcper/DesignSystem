import styled from "./../../../../../utils/styled-components";

const StyledNewOne = styled<{}, "div">("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export default StyledNewOne;
