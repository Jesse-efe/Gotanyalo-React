import React from "react";
import { ReactComponent as Mobile } from "../assets/icons/Mobile.svg";
import { ReactComponent as AudioVisual } from "../assets/icons/AudioVisual.svg";
import { ReactComponent as Website } from "../assets/icons/Website.svg";
import { ReactComponent as Games } from "../assets/icons/Games.svg";
import { ReactComponent as Business } from "../assets/icons/Business.svg";
import { ReactComponent as Finance } from "../assets/icons/Finance.svg";
import { ReactComponent as Support } from "../assets/icons/Support.svg";
import { ReactComponent as Other } from "../assets/icons/Other.svg";


const ProjectNavigation = () => {
  const styles = {
    p: {
      marginTop: 0,
      fontSize: "calc(.3em + .4vw)"
    },
    icon: {
      height: 35,
    }
  }
  return (
    <>
      <div style={{display: "grid", gridTemplateColumns: "repeat(8, 1fr)"}}>
        <div style={{textAlign: "center"}}>
          <Mobile style={styles.icon}/>
          <p style={styles.p}>Mobile</p>
        </div>
        <div style={{textAlign: "center"}}>
          <AudioVisual style={styles.icon}/>
          <p style={styles.p}>Audio/Visual</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Website style={styles.icon}/>
          <p style={styles.p}>Website</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Games style={styles.icon}/>
          <p style={styles.p}>Mobile Games</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Business style={styles.icon}/>
          <p style={styles.p}>Business</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Finance style={styles.icon}/>
          <p style={styles.p}>Finance</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Support style={styles.icon}/>
          <p style={styles.p}>Support/Assistance</p>
        </div>
        <div style={{textAlign: "center"}}>
          <Other style={styles.icon}/>
          <p style={styles.p}>Other</p>
        </div>
      </div>
    </>
  )
}

export default ProjectNavigation;