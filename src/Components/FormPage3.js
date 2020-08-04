import React, { useState } from "react";
import Select from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { ButtonGrid, H5, H6, Span, HourInput, FormPage3Container } from "./MyStyledComponents";
import Button from "./Button";

const FormPage3 = ({ setFormPage, onSubmit, handleFormInput, formDetails, options}) => {
  const [errors, setErrors] = useState({
    expertise: "",
    skills: "",
    engagementType: "",
    hoursPerWeek: ""
  });

  const ids = {
    "react-select-3-input": "expertise",
    "react-select-7-input": "skills",
    "react-select-9-input": "engagementType"
  }

  const requiredFields = ["expertise", "skills", "engagementType", "hoursPerWeek"]

  const animatedComponents = makeAnimated();

  const myStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      marginTop: -12,
      marginBottom: 30,
      borderColor: "#000"
    }),    
  }

  const handleFocus = (e) => {
    if(e.target.name === "hoursPerWeek") setErrors({...errors, hoursPerWeek: ""})
    else setErrors({...errors, [ids[e.target.id]]: ""})
  }

  const handleSubmit = (e) => {
    let foundErrors = {};
    for (let field of requiredFields) {
      if(field === "hoursPerWeek" && formDetails[field].trim() === "") {
        foundErrors.hoursPerWeek = "Please tell us how many hours per week you expect.";
      } else if(formDetails[field].length === 0) {
        switch(field) {
          case "expertise":
            foundErrors.expertise = "Please tell us the areas of expertise of the project.";
            break;
          case "skills":
            foundErrors.skills = "Please tell us the skills you are looking for.";
            break;
          case "engagementType":
            foundErrors.engagementType = "Please tell us the engagement types you will be using.";
            break;
          default:
            break;
        }
      }
    };
    setErrors({ ...errors, ...foundErrors});
    if(Object.values(foundErrors).length === 0) return onSubmit(e);
  }

  return (
    <FormPage3Container>
      <div style={{gridArea: "expertise"}}>
        <H5 marginTop="22px" marginBottom="0">
          Area of expertise
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          options={options.expertise}
          styles={myStyles}
          defaultValue={formDetails.expertise}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="expertise"
          onFocus={(e) => handleFocus(e)}
          onChange={(e) => handleFormInput({ target: { name: "expertise", value: e }})}
        >
        </Select>
        {errors.expertise !== "" && <H6 marginTop="-27px">{errors.expertise}</H6>}

        <H5 marginTop="25" marginBottom="0">
          Links
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">(Type links to project. Multiple links allowed).</H6>
        <Select
          styles={myStyles}
          isMulti
          placeholder="Links to project"
          closeMenuOnSelect={false}
          defaultValue={formDetails.links}
          components={animatedComponents}
          name="links"
          onFocus={(e) => handleFocus(e)}
          onChange={(e) => handleFormInput({ target: { name: "links", value: e }})}
        >
        </Select>
      </div>

      <div style={{gridArea: "empty"}}></div>
      
      <div style={{gridArea: "skills"}}>
        <H5 marginTop="22px" marginBottom="0">
          Skills
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          styles={myStyles}
          options={options.skills}
          isMulti
          defaultValue={formDetails.skills}
          closeMenuOnSelect={false}
          components={animatedComponents}
          onFocus={(e) => handleFocus(e)}
          name="skills"
          onChange={(e) => handleFormInput({ target: { name: "skills", value: e }})}
        >
        </Select>
        {errors.skills !== "" && <H6 marginTop="-27px">{errors.skills}</H6>}

        <H5 marginTop="25" marginBottom="0">
          Type of Engagement
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          styles={myStyles}
          options={options.engagementType}
          isMulti
          closeMenuOnSelect={false}
          defaultValue={formDetails.engagementType}
          components={animatedComponents}
          name="engagementType"
          onFocus={(e) => handleFocus(e)}
          onChange={(e) => handleFormInput({ target: { name: "engagementType", value: e }})}
        >
        </Select>
        {errors.engagementType !== "" && <H6 marginTop="-27px">{errors.engagementType}</H6>}
      </div>
      
      <div style={{gridArea: "hours"}}>
        <H5 marginTop="90px" marginBottom="2px" mobile="true">
          Hours per week
          <Span>*</Span>
        </H5>
        {errors.hoursPerWeek !== "" && <H6 marginBottom="2px">{errors.hoursPerWeek}</H6>}
        <HourInput
          type="text"
          name="hoursPerWeek"
          value={formDetails.hoursPerWeek}
          onFocus={(e) => handleFocus(e)}
          onChange={(e) => handleFormInput(e)}
        />
      </div>

      <div style={{gridArea: "empty"}}></div>

      <ButtonGrid marginTop="170px" marginLeft="0" style={{gridArea: "button"}}>
        <Button backgroundColor="#000000" text="Back" onClick={(e) => setFormPage(1)}></Button>
        <Button text="Done" onClick={(e) => handleSubmit(e)}></Button>
      </ButtonGrid>
      
    </FormPage3Container>
  )
}

export default FormPage3;