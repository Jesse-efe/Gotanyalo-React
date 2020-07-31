import styled from 'styled-components'

export const H5 = styled.h5`
  margin-top: ${props => props.marginTop || "30px"};
  margin-bottom: ${props => props.marginBottom || "5px"};
  font-size: calc(.7vw + 6px);
  @media (max-width: 600px) {
    text-align: ${props => props.center ? "center" : ""};
    margin-top: ${props => props.mobile ? "50px": (props.marginTop || "30px") }
  }
`;

export const H6 = styled.h6`
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  color: ${props => props.color || "red"};
  font-size: calc(.6vw + 5px);
  @media (max-width: 600px) {
    text-align: ${props => props.center ? "center" : ""};
  }
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
  font-size: calc(.5vw + 12px);
`;

export const ButtonGrid = styled.div`
  margin-top: ${props => props.marginTop || "20px"};
  margin-left: ${props => props.marginLeft || "50%"};
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 450px) {
    margin-left: 0;
    margin-top: 100px;
  }
`;

export const HourInput = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 4px;
  border-width: 1px;
  padding-left: 7px
`;

export const FormPage3Container = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: auto;
  grid-template-areas:
    "expertise empty skills"
    "hours empty button";
  @media (max-width: 450px) {
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
  font-size: calc(5px + .4vw);
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
  padding: 20px 3% 25px 3%;
  width: 55%;
  background-color: #fff;
  margin: 10vh auto 10vh;
  box-shadow: 5px 5px 5px 0 lightgrey;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const SingleButtonDiv = styled.div`
  margin-top: 20px;
  margin-left: 70%;
  @media (max-width: 450px) {
    margin-left: 40%;
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
  SingleButtonDiv,
  StartDateGrid,
  Textarea
};