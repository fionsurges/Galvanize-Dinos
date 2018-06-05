import React from "react";
import Skills from "./Skills";

const Profiles = props => {

  const profile = props.data.map(dino => {
    return ( <Skills 
                    key={dino.name}
                    image={dino.image}
                    name={dino.name}
                    skills={dino.skills} />
           
    )
  })
  
  return (
    <div>
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {profile}    
        </ul>
      </section>
    </div>
  );
};

export default Profiles;
