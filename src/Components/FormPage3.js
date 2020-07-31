import React from "react";
import Select from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { ButtonGrid, H5, H6, Span, HourInput, FormPage3Container } from "./MyStyledComponents";
import Button from "./Button";

const FormPage3 = ({ setFormPage, onSubmit, handleFormInput, formDetails}) => {
  const options = [
    { value:"Web", label: "Web" },
    { value:"Mobile", label: "Mobile" },
    { value:"Data Science", label: "Data Science" }
  ]

  const animatedComponents = makeAnimated();

  const myStyles = {
    control: (styles) => ({ ...styles, width: "100%", marginTop: -12, borderColor: "#000"}),    
  }

  return (
    <FormPage3Container>
      <div>
        <H5 marginTop="22px" marginBottom="0">
          Area of expertise
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          options={options}
          styles={myStyles}
          defaultValue={formDetails.expertise}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="expertise"
          onChange={(e) => handleFormInput({ target: { name: "expertise", value: e }})}
        >
        </Select>
        <H5 marginTop="25" marginBottom="0">
          Links
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">(Type links to project. Multiple links allowed.</H6>
        <Select
          styles={myStyles}
          isMulti
          placeholder="Links to project"
          closeMenuOnSelect={false}
          defaultValue={formDetails.links}
          components={animatedComponents}
          name="links"
          onChange={(e) => handleFormInput({ target: { name: "links", value: e }})}
        >
        </Select>

        <H5 marginTop="90px" marginBottom="2px">
          Hours per week
          <Span>*</Span>
        </H5>
        <HourInput
          type="text"
          name="hoursPerWeek"
          value={formDetails.hoursPerWeek}
          onChange={(e) => handleFormInput(e)}
        />
      </div>

      <div></div>
      
      <div>
        <H5 marginTop="22px" marginBottom="0">
          Skills
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          styles={myStyles}
          options={options}
          isMulti
          defaultValue={formDetails.skills}
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="skills"
          onChange={(e) => handleFormInput({ target: { name: "skills", value: e }})}
        >
        </Select>

        <H5 marginTop="25" marginBottom="0">
          Type of Engagement
          <Span>*</Span>
        </H5>
        <H6 marginBottom="15px" color="#2f4050;">
          (Select all that apply and type to add to the options)
        </H6>
        <Select
          styles={myStyles}
          options={options}
          isMulti
          closeMenuOnSelect={false}
          defaultValue={formDetails.engagementType}
          components={animatedComponents}
          name="engagementType"
          onChange={(e) => handleFormInput({ target: { name: "engagementType", value: e }})}
        >
        </Select>

        <ButtonGrid marginTop="170px" marginLeft="0">
          <Button backgroundColor="#000000" text="Back" onClick={(e) => setFormPage(1)}></Button>
          <Button text="Done" onClick={(e) => onSubmit(e)}></Button>
        </ButtonGrid>
      </div>
      
    </FormPage3Container>
  )
}

export default FormPage3;