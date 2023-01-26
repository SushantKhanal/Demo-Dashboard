import "./Skills.css";
import React, { useState } from "react";
import { SKILLS_DATA } from "./SkillsData";

function Skills() {
  const [skillsData, setSkillsData] = useState(SKILLS_DATA);
  const [updateCounter, setUpdateCounter] = useState(0);

  const toggleSkillsHandler = (id) => {
    const skills = skillsData;
    skills[id].open = !skills[id].open;
    setSkillsData(skills);
    setUpdateCounter(updateCounter + 1); //because component was not updating
  };

  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle"></span>

        <div className="skills__container container grid">
          {Object.values(skillsData).map((item) => (
            <div key={item.title}>
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className={`uil ${item.iconName} skills__icon`}></i>

                  <div>
                    <h1 className="skills__title">{item.title}</h1>
                    <span className="skills__subtitle">{item.subTitle}</span>
                  </div>

                  <i
                    className="uil uil-angle-down skills__arrow"
                    onClick={() => toggleSkillsHandler(item.id)}
                  ></i>
                </div>
                <div className="skills__list grid">
                  {item.open &&
                    item.skillDetails.map((itemDetail) => (
                      <div className="skills__data" key={itemDetail.name}>
                        <div className="skills__titles">
                          <h3 className="skills__name">{itemDetail.name}</h3>
                          <span className="skills__number">
                            {itemDetail.score}%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__html__css"></span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
