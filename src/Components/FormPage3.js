import React from "react";
import Select from "react-select";
import { ReactComponent as Add } from "../assets/icons/Add.svg";
import Button from "./Button";

const FormPage3 = ({ setFormPage, onSubmit }) => {
  const options = [
    { value:"Web", label: "Web" },
    { value:"Mobile", label: "Mobile" },
    { value:"Data Science", label: "Data Science" }
  ]

  const myStyles = {
    control: (styles) => ({ ...styles, width: "100%", marginTop: -12, borderColor: "#000"})
  }

  const styles = {
    container: {
      display:"grid",
      gridTemplateColumns:"45% 10% 45%"
    },
    input: {
      width: "97.5%",
      height: 30,
      marginTop: 8,
      borderRadius: 4,
      borderWidth: 1
    },
    hoursPerWeek: {
      width: "40%",
      height: 30,
      borderRadius: 4,
      borderWidth: 1
    },
    buttonGrid: {
      marginTop: 100,
      display:"grid",
      gridTemplateColumns: "50% 50%"
    }
  }
  return (
    <div style={styles.container}>
      <div>
        <h6>Area of expertise</h6>
        <Select
          options={options}
          styles={myStyles}
          name="expertise">
        </Select>
        <input
          type="text"
          name="expertiseInput"
          style={styles.input}
        />
        <Add style={{marginTop: 3}}/>

        <h6 style={{marginTop: 25}}>Links</h6>
        <Select
          styles={myStyles}
          options={options}
          name="links">
        </Select>
        <Add style={{marginTop: 3}}/>

        <h6 style={{marginTop: 90, marginBottom: 2}}>Hours per week</h6>
        <input
          type="text"
          name="hoursPerWeek"
          style={styles.hoursPerWeek}/>
      </div>

      <div></div>
      
      <div>
        <h6>Skills</h6>
        <Select
          styles={myStyles}
          options={options}
          name="skills">
        </Select>
        <Add style={{marginTop: 3}}/>

        <h6 style={{marginTop: 65}}>Type of Engagement</h6>
        <Select
          styles={myStyles}
          options={options}
          name="engagementType">
        </Select>
        <input
          type="text"
          name="engagementTypeInput"
          style={styles.input}
        />
        <Add style={{marginTop: 3}}/>

        <div style={styles.buttonGrid}>
          <Button backgroundColor="#000000" text="Back" onClick={(e) => setFormPage(1)}></Button>
          <Button text="Done" onClick={(e) => onSubmit}></Button>
      </div>
      </div>
      
    </div>
  )
}

export default FormPage3;