import React from "react";
import Button from "./Button";

const FormPage2 = ({ setFormPage }) => {
  const styles = {
    budget: {
      marginTop: 40,
      marginBottom: 5
    },
    budgetInput: {
      width: "95%",
      height: 64,
      resize: "none",
      overflow: "scroll"
    },
    startDate: {
      marginTop: 30,
      marginBottom: 5
    },
    startDateGrid: {
      display: "grid",
      gridTemplateColumns: "40px 40px 40px",
      gridGap: 10
    },
    h6: {
      marginTop: 0,
      marginBottom: 0
    },
    obstacleTextarea: {
      width: "95%",
      height: 64,
      resize: "none",
      overflow: "scroll"
    },
    buttonGrid: {
      marginTop: 20,
      marginLeft: "50%",
      display:"grid",
      gridTemplateColumns: "50% 50%"
    }
  }
  return (
    <>
      <h6 style={styles.budget}>Budget</h6>
      <input style={styles.budgetInput} name="budget" />

      <h6 style={styles.startDate}>Start Date</h6>
      <div style={styles.startDateGrid}>
        <div style={{textAlign: "center"}}>
          <h6 style={styles.h6}>Month</h6>
          <input type="text" name="day" size="3"/>
        </div>

        <div style={{textAlign: "center"}}>
          <h6 style={styles.h6}>Day</h6>
          <input type="text" name="month" size="3"/>
        </div>

        <div style={{textAlign: "center"}}>
          <h6 style={styles.h6}>Year</h6>
          <input type="text" name="year" size="4"/>
        </div>

      </div>

      <h6 style={{marginTop: 30, marginBottom: 5}}>
        What issues  or obstacles (if any) have you had with this product/project?
      </h6>
      <textarea style={styles.obstacleTextarea} name="obstacles"></textarea>

      <div style={styles.buttonGrid}>
        <Button
          text="Back"
          backgroundColor="#000000"
          onClick={(e) => setFormPage(0)}
        />
        <Button
          text="Next"
          onClick={(e) => setFormPage(2)} 
        />
      </div>
    </>
  )
}

export default FormPage2;
