import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Construction from './Construction';

const underConstruction = true

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get('api/skills')
      .then(result => {
        setSkills(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (underConstruction) {
    return <Construction header="Skills" />
  } else {
    return (
      <div id="skills" className="services bg-dark">
        <div className="py-5">
          <div className="container">
            <h1 className="skills-header">Skills</h1>
            <div className="row">
              <div className="col-md-3 col-sm-6 skills-header-sm">
                <div className="box">
                  <h3>Front-end</h3>
                  {skills.filter(element => element.type === "frontend").map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-sm-6 skills-header-sm">
                <div className="box">
                  <h3>Back-end</h3>
                  {skills.filter(element => element.type === "backend").map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-sm-6 skills-header-sm skills-header">
                <div className="box">
                  <h3>Databases</h3>
                  {skills.filter(element => element.type === 'database').map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-sm-6 skills-header-sm skills-header">
                <div className="box">
                  <h3>Tools</h3>
                  {skills.filter(element => element.type === 'tool').map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-sm-6 skills-header-sm">
                <div className="box">
                  <h3>APIs</h3>
                  {skills.filter(element => element.type === "api").map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-sm-6 skills-header-sm">
                <div className="box">
                  <h3>Others</h3>
                  {skills.filter(element => element.type === "azure").map((element, index) => {
                    return (
                      <div key={index} className={`c100 p${element.value} default orange center dark`}>
                        <span>
                          <div className="skill-img-container">
                            <img className="skill-img" src={element.url} alt={element.skillName} />
                          </div>
                        </span>
                        <div className="slice">
                          <div className="bar"></div>
                          <div className="fill"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

export default Skills
