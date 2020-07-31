import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetch("https://formendpoints.herokuapp.com/form_fields")
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
  })

  const submitForm = (e) => {
    e.preventDefault();
    setFormDetails(defaultState);
    setFormPage(0);
    console.log(formDetails);
  }

  const handleFormInput = ({ target: { name, value }}) => {
    setFormDetails({...formDetails, [name]: value });
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