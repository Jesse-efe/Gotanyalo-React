import React, { useState } from 'react';
import { FormContainer } from "../Components/MyStyledComponents";
import FormPage1 from "../Components/FormPage1";
import FormPage2 from "../Components/FormPage2";
import FormPage3 from "../Components/FormPage3";

const FormComponent = () => {
  const defaultState = {
    projectType: "",
    description: "",
    workPreference:"",
    budget: "",
    day: "",
    month: "",
    year: "",
    obstacles: "",
    expertise: [],
    links: [],
    hoursPerWeek: "",
    skills: [],
    engagementType: [],
  }
  const [formPage, setFormPage] = useState(0);
  const [formDetails, setFormDetails] = useState(defaultState);

  const submitForm = (e) => {
    e.preventDefault();
    setFormDetails(defaultState);
    setFormPage(0);
    console.log(formDetails);
  }

  const handleFormInput = (e) => {
    setFormDetails({...formDetails, [e.target.name]: e.target.value });
  }
  return(
    <FormContainer>
      {
        formPage === 0 ? 
          <FormPage1
            setFormPage={setFormPage}
            handleFormInput={handleFormInput}
            formDetails={formDetails}
          />
        : (
            formPage === 1 ?
              <FormPage2
                setFormPage={setFormPage}
                handleFormInput={handleFormInput}
                formDetails={formDetails}
              />
            :
            <FormPage3
              setFormPage={setFormPage}
              handleFormInput={handleFormInput}
              formDetails={formDetails}
              onSubmit={submitForm}
            />
          )
      }
    </FormContainer>
  )
}


export default FormComponent;