import React, { useState } from "react";
import { H5, H6, SingleButtonDiv, Span, Textarea } from "./MyStyledComponents";
import ProjectNavigation from "./ProjectNavigation";
import Button from "./Button";


const FormPage1 = ({ setFormPage, handleFormInput, formDetails }) => {
  const [errors, setErrors] = useState({
    projectType: "",
    description: "",
    workPreference: ""
  });

  const requiredFields = ["projectType", "description", "workPreference"]

  const handleFocus = ({ target: { name } }) => {
    setErrors({...errors, [name]: ""})
  }

  const handleNext = (e) => {
    let foundErrors = {};
    for (let field of requiredFields) {
      if(formDetails[field].trim() === "") {
        switch(field) {
          case "projectType":
            foundErrors.projectType = "Please pick a project type";
            break;
          case "description":
            foundErrors.description = "Give us a description of the project";
            break;
          case "workPreference":
            foundErrors.workPreference = "Please tell us what your work preference is. Remote or onsite.";
            break;
          default:
            break;
        }
      }
    };
    setErrors({ ...errors, ...foundErrors});
    if(Object.values(foundErrors).length === 0) return setFormPage(1)
  }

  return (
    <>
      <H5 center="true">
        Tell us what project you're working on
        <Span>*</Span>
      </H5>
      {errors.projectType !== "" && <H6 center="true">{errors.projectType}</H6>}
      <ProjectNavigation
        handleFormInput={handleFormInput}
        formDetails={formDetails}
        errors={errors}
        setErrors={setErrors}
      />
      
      <H5>
        Project/Product description
        <Span>*</Span>
      </H5>
      {errors.description !== "" && <H6 marginBottom="2px">{errors.description}</H6>}
      <Textarea
        name="description"
        onChange={(e) => handleFormInput(e)}
        onFocus={(e) => handleFocus(e)}
        value={formDetails.description}
      >
      </Textarea>
      
      <H5>
        What is preferred way to work? Remote and or Onsite? Why?
        <Span>*</Span>
      </H5>
      {errors.workPreference !== "" && <H6 marginBottom="2px">{errors.workPreference}</H6>}
      <Textarea
        name="workPreference"
        onChange={(e) => handleFormInput(e)}
        onFocus={(e) => handleFocus(e)}
        value={formDetails.workPreference}        
      >
      </Textarea>
      
      <SingleButtonDiv>
        <Button width="85%" text="Next" onClick={(e) => handleNext(e)} />
      </SingleButtonDiv>
    </>
  )
}

export default FormPage1;
