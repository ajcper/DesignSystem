import styled from "../../../../utils/styled-components";

export const StyledTextSlideIn = styled<{}, "div">("div")`
  color: ${({ theme }) => theme.colors.primaryColor};
`;


export const Wrapper = styled.div`
    height: 40px;
    background-color: lightcoral;  
    ${({theme}) => theme.mq.atTablet`
        background-color: lightblue;  
    `}
    user-select: none;
    font-size: 5rem;
`  

export const TextUpWrapper = styled.div`
    overflow: hidden;
    display: block;
    height: auto;
    position: absolute;
    width: auto;

    & > div {
        font-size: 3rem;
    }
`

export const TextUp = styled.div`
   position: relative;
   top: 20px;
   font-size: 3rem;
`