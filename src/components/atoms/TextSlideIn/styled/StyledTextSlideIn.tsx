import styled from "../../../../utils/styled-components";

export const StyledTextSlideIn = styled<{}, "div">("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Wrapper = styled.div`
    height: 40px;
    ${({theme}) => theme.mq.atTablet`
        background-color: none;  
    `}
    user-select: none;
    /* font-size: 5rem; */
`  

export const TextUpWrapper = styled.div`
    overflow: hidden;
    display: block;
    height: auto;
    position: absolute;
    width: auto;
    & > div {
        ${({theme}) => theme.text.t1}
        font-size: 3rem;
    }
`

export const TextUp = styled.div`
   position: relative;
   top: 20px;
   font-size: 3rem;
`