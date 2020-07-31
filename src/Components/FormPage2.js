import React, { useState } from "react";
import { ButtonGrid, H5, H6, Span, StartDateGrid, Textarea } from "./MyStyledComponents";
import Button from "./Button";

const FormPage2 = ({ setFormPage, formDetails, handleFormInput }) => {
  const [errors, setErrors] = useState({
    budget: "",
    startDate: "",
    obstacles: ""
  });
  const requiredFields = ["budget", "obstacles"];

  const handleFocus = ({ target: { name } }) => {
    if(name === "month" || name === "day" || name === "year") {
      setErrors({...errors, startDate: ""})
    }else {
      setErrors({...errors, [name]: ""})
    }
  }

  const handleNext = (e) => {
    let foundErrors = {};
    for (let field of requiredFields) {
      if(formDetails[field].trim() === "") {
        switch(field) {
          case "budget":
            foundErrors.budget = "Please give us an estimate of your budget";
            break;
          case "obstacles":
            foundErrors.obstacles = "Please tell us what obstacles you have faced so far.";
            break;
          default:
            break;
        }
      }
    };

    const dateString = `${formDetails.year}-${formDetails.month}-${formDetails.day}`;
    const projectDate = new Date(dateString).toString();

    if(projectDate === "Invalid Date") {
      foundErrors.startDate = "Please enter a valid date";
    }

    setErrors({ ...errors, ...foundErrors });
    if(Object.values(foundErrors).length === 0) return setFormPage(2)
  }
  return (
    <>
      <H5 marginTop="40px">
        Budget
        <Span>*</Span>
      </H5>
      {errors.budget !== "" && <H6 marginBottom="2px">{errors.budget}</H6>}
      <Textarea
        name="budget"
        value={formDetails.budget}
        onChange={(e) => handleFormInput(e)}
        onFocus={(e) => handleFocus(e)}
      >
      </Textarea>

      <H5>
        Start Date
        <Span>*</Span>
      </H5>
      {errors.startDate !== "" && <H6 marginBottom="2px">{errors.startDate}</H6>}
      <StartDateGrid>
        <div style={{textAlign: "center"}}>
          <H5 marginTop="0" marginBottom="0">Month</H5>
          <input
            type="text"
            name="month"
            size="3"
            placeholder="12"
            value={formDetails.month}
            onChange={(e) => handleFormInput(e)}
            onFocus={(e) => handleFocus(e)}
          />
        </div>

        <div style={{textAlign: "center"}}>
          <H5 marginTop="0" marginBottom="0">Day</H5>
          <input
            type="text"
            name="day"
            size="3"
            placeholder="31"
            value={formDetails.day}
            onChange={(e) => handleFormInput(e)}
            onFocus={(e) => handleFocus(e)}
          />
        </div>

        <div style={{textAlign: "center"}}>
          <H5 marginTop="0" marginBottom="0">Year</H5>
          <input
            type="text"
            name="year"
            size="4"
            placeholder="2020"
            value={formDetails.year}
            onChange={(e) => handleFormInput(e)}
            onFocus={(e) => handleFocus(e)}
          />
        </div>

      </StartDateGrid>

      <H5>
        What issues  or obstacles (if any) have you had with this product/project?
        <Span>*</Span>
      </H5>
      {errors.obstacles !== "" && <H6 marginBottom="2px">{errors.obstacles}</H6>}
      <Textarea
        name="obstacles"
        value={formDetails.obstacles}
        onChange={(e) => handleFormInput(e)}
        onFocus={(e) => handleFocus(e)}
      >
      </Textarea>

      <ButtonGrid>
        <Button
          text="Back"
          backgroundColor="#000000"
          onClick={(e) => setFormPage(0) }
        />
        <Button
          text="Next"
          onClick={(e) => handleNext(e)}
        />
      </ButtonGrid>
    </>
  )
}

export default FormPage2;
