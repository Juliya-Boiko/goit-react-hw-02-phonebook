import styled from "styled-components";
import { Form, Field } from 'formik';


export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 20px;
`;

export const Label = styled.label`
display: flex;
align-items: center;
justify-content: space-between;
width: 16rem;
    margin-bottom: 10px;

  color: #9baacf;
`;

export const ContactField = styled(Field)`
/* width: 10rem; */
    height: 2rem;
    padding-left: 1.4rem;
    font-family: inherit;
    border: none;
    outline: none;
    border-radius: .5rem;
    box-shadow: inset .2rem .2rem .5rem #c8d0e7;
    background: none;
    color: ${p => p.theme.colors.accent};

    :focus { 
        outline: none; 
        box-shadow: .3rem .3rem .6rem #c8d0e7,  -.2rem -.2rem .5rem white; 
    }
`;

export const PrimaryButton = styled.button`
  /* width: 6rem; */
  /* height: 6rem; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  transition: all 0.3s ease;
  color: #E4EBF5;
  box-shadow: inset .2rem .2rem 1rem #8abdff, inset -.2rem -.2rem 1rem #5b0eeb, .3rem .3rem .6rem #c8d0e7, 
  -.2rem -.2rem .5rem white;
    &:hover {
        color: ${p => p.theme.colors.white};
    }
    &:active {
      box-shadow:inset .2rem .2rem 1rem #5b0eeb, inset -.2rem -.2rem 1rem #8abdff;
    }
`;

// export const FormInput = styled(Field)``;