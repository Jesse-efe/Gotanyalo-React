import React from "react";
import ProjectNavigation from "./ProjectNavigation";
import Button from "./Button";

const FormPage1 = ({ setFormPage }) => {
  const styles = {
    textArea: {
      width: "95%",
      resize: "none",
      overflow: "scroll"
    },
    h6: {
      marginTop: 30,
      marginBottom: 5
    }
  }
  return (
    <>
      <h6>Tell us what project you're working on.</h6>
      <ProjectNavigation />
      
      <h6 style={styles.h6}>Project/Product description</h6>
      <textarea style={{...styles.textArea, height: 64}} name="description"></textarea>
      
      <h6 style={styles.h6}>What is preferred way to work? Remote and or Onsite? Why?</h6>
      <textarea style={{...styles.textArea, height: 36}} name="workPreference"></textarea>
      
      <div style={{marginTop: 20, marginLeft: "70%"}}>
        <Button width="85%" text="Next" onClick={(e) => setFormPage(1)} />
      </div>
    </>
  )
}

export default FormPage1;
