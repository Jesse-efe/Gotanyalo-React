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

  /* Change the data here to your preferred defaults for the select
    elements of the form on page 3. Simply keep the data structure.
  */
  const [backendLists, setBackendLists] = useState({
    skills: [
      { value:"Web", label: "Web" },
      { value:"Mobile", label: "Mobile" },
      { value:"Data Science", label: "Data Science" }
    ],
    expertise: [
      { value:"Web", label: "Web" },
      { value:"Mobile", label: "Mobile" },
      { value:"Data Science", label: "Data Science" }
    ],
    engagementType: [
      { value:"Web", label: "Web" },
      { value:"Mobile", label: "Mobile" },
      { value:"Data Science", label: "Data Science" }
    ],
  })

  /* Enable this function and change the api url to the correct endpoint that supplies
     data in the format of the defaults declared above
  */
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try{
  //       const response = await fetch("https://formendpoints.herokuapp.com/form_fields");
  //       const lists = await response.json();
  //       setBackendLists({ ...backendLists, ...lists }); 
  //     }catch(error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchdata();
  // });

  const submitForm = async (e) => {
    e.preventDefault();
    setFormDetails(defaultState);
    setFormPage(0);
    
    /*
      Uncomment lines and add the correct url to send form details to
    */
    // await fetch("https://formendpoints.herokuapp.com/form_fields", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formDetails)
    // });
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
              options={backendLists}
            />
          )
      }
    </FormContainer>
  )
}


export default FormComponent;