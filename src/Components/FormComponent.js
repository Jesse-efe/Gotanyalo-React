import React, { useState } from 'react';
import styled from 'styled-components';
import FormPage1 from "../Components/FormPage1";
import FormPage2 from "../Components/FormPage2";
import FormPage3 from "../Components/FormPage3";

const FormContainer = styled.div`
  padding-bottom: 25px;
  width: 50%;
  background-color: #fff;
  margin-top: 25vh;
  margin-left: 25%;
  margin-right: 25%;
  padding-left: 50px;
  padding-right: 50px;
  box-shadow: 5px 5px 5px 0 lightgrey;
  overflow-x: scroll;
`;

const FormComponent = () => {
  const [formPage, setFormPage] = useState(0);
  const [formDetails, setFormDetails] = useState({
    description: "",
    projectPreference: "",
    budget: "",
    day: "",
    month: "",
    year: "",
    obstacles: "",
    expertise: "",
    expertiseInput: "",
    links: "",
    hoursPerWeek: "",
    skills: "",
    engagementType: "",
    engagementTypeInput: ""
  });

  const submitForm = () => {
    console.log(formDetails);
  }

  return(
    <FormContainer>
      {
        formPage === 0 ? 
          <FormPage1
            setFormPage={setFormPage}
            setFormDetails={setFormDetails}
          />
        : (
            formPage === 1 ?
              <FormPage2
                setFormPage={setFormPage}
                setFormDetails={setFormDetails}
              />
            :
            <FormPage3
              setFormPage={setFormPage}
              setFormDetails={setFormDetails}
              onSubmit={submitForm}
            />
          )
      }
    </FormContainer>
  )
}


export default FormComponent;