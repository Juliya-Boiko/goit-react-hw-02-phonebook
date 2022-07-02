import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: ${props => props.theme.ruler.double}; */
    background-color: ${props => props.theme.colors.shade};
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.normal};
    color: ${p => p.theme.colors.accent};
`;

export const Input = styled.input`
    width: 19rem;
    height: 2rem;
    margin-bottom: 10px;
    padding-left: 1.4rem;
    font-family: inherit;
    border: none;
    outline: none;
    border-radius: .5rem;
    box-shadow: inset .2rem .2rem .5rem #c8d0e7;
    background: none;
    color: ${p => p.theme.colors.accent};

    ::placeholder { 
        color: #bec8e4; 
    }
    :focus { 
        outline: none; 
        box-shadow: .3rem .3rem .6rem #c8d0e7,  -.2rem -.2rem .5rem white; 
    }
`;
