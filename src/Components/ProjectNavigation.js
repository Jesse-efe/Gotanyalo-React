import React, { useEffect } from "react";
import { P, IconDiv, NavigationGrid } from "./MyStyledComponents";
import { ReactComponent as Mobile } from "../assets/icons/Mobile.svg";
import { ReactComponent as AudioVisual } from "../assets/icons/AudioVisual.svg";
import { ReactComponent as Website } from "../assets/icons/Website.svg";
import { ReactComponent as Games } from "../assets/icons/Games.svg";
import { ReactComponent as Business } from "../assets/icons/Business.svg";
import { ReactComponent as Finance } from "../assets/icons/Finance.svg";
import { ReactComponent as Support } from "../assets/icons/Support.svg";
import { ReactComponent as Other } from "../assets/icons/Other.svg";


const ProjectNavigation = ({ handleFormInput, formDetails, setErrors, errors }) => {
  const icons = [
    "mobile",
    "audioVisual",
    "website",
    "games",
    "business",
    "finance",
    "support",
    "other"
  ];

  useEffect(() => {
    const activeClass = document.getElementById(formDetails.projectType);
    if(activeClass) activeClass.style.backgroundColor = "#ccc";
  });


  const handleClick = ({ target }) => {
    setErrors({...errors, projectType: ""})
    icons.forEach(icon => {
      if(target.parentNode.id === icon || target.parentNode.parentNode.id === icon) {
        handleFormInput({
          target: { name: "projectType", value: icon }
        });
      }else {
        document.getElementById(icon).style.backgroundColor = "";
      }
    })
  }
  return (
    <>
      <NavigationGrid>
        <IconDiv id="mobile" onClick={(e) => handleClick(e)}>
          <Mobile style={{ height: "5vh", width: "3vw" }}/>
          <P>Mobile</P>
        </IconDiv>
        <IconDiv id="audioVisual" onClick={(e) => handleClick(e)}>
          <AudioVisual style={{ height: "5vh", width: "3vw" }}/>
          <P>Audio/Visual</P>
        </IconDiv>
        <IconDiv id="website" onClick={(e) => handleClick(e)}>
          <Website style={{ height: "5vh", width: "3vw" }}/>
          <P>Website</P>
        </IconDiv>
        <IconDiv id="games" onClick={(e) => handleClick(e)}>
          <Games style={{ height: "5vh", width: "3vw" }}/>
          <P>Mobile Games</P>
        </IconDiv>
        <IconDiv id="business" onClick={(e) => handleClick(e)}>
          <Business style={{ height: "5vh", width: "3vw" }}/>
          <P>Business</P>
        </IconDiv>
        <IconDiv id="finance" onClick={(e) => handleClick(e)}>
          <Finance style={{ height: "5vh", width: "3vw" }}/>
          <P>Finance</P>
        </IconDiv>
        <IconDiv id="support" onClick={(e) => handleClick(e)}>
          <Support style={{ height: "5vh", width: "3vw" }}/>
          <P>Support/Assistance</P>
        </IconDiv>
        <IconDiv id="other" onClick={(e) => handleClick(e)}>
          <Other style={{ height: "5vh", width: "3vw" }}/>
          <P>Other</P>
        </IconDiv>
      </NavigationGrid>
    </>
  )
}

export default ProjectNavigation;