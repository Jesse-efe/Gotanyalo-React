import styled from 'styled-components'

export const H5 = styled.h5`
  margin-top: ${props => props.marginTop || "30px"};
  margin-bottom: ${props => props.marginBottom || "5px"};
  font-size: calc(.7vw + 6px);
`;

export const H6 = styled.h6`
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  color: ${props => props.color || "red"};
`;

export const Span = styled.span`
  color: ${props => props.color || "red"};
  margin-left: ${props => props.marginLeft || "1px"};
`;

export const Textarea = styled.textarea`
  width: 95%;
  resize: none;
  overflow: scroll;
  font-family: Roboto;
  padding-top: 10px;
  padding-left: 10px;
`;

export const ButtonGrid = styled.div`
  margin-top: ${props => props.marginTop || "20px"};
  margin-left: ${props => props.marginLeft || "50%"};
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 360px) {
    margin-left: 0;
  }
`;

export const HourInput = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
`;

export const FormPage3Container = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  @media (max-width: 360px) {
    display: block
  }
`;

export const IconDiv = styled.div`
  text-align: center;
  padding-top: 15%;
  padding-bottom: 1%;
  @media (max-width: 360px) {
    padding-top: 3%;
  }
`;

export const P = styled.p`
  margin-top: 0;
  font-size: calc(.3em + .4vw);
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  @media (max-width: 600px) {
    display: block;
  }
`;

export const StartDateGrid = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-gap: 10px;
`;

export const FormContainer = styled.div`
  padding-bottom: 25px;
  width: 50%;
  background-color: #fff;
  margin: 25vh auto 25vh;
  padding-left: 5%;
  padding-right: 5%;
  box-shadow: 5px 5px 5px 0 lightgrey;
  @media (max-width: 360px) {
    width: 70%;

  }
`;

export default {
  ButtonGrid,
  FormContainer,
  FormPage3Container,
  NavigationGrid,
  H5,
  H6,
  HourInput,
  IconDiv,
  P,
  Span,
  StartDateGrid,
  Textarea
};