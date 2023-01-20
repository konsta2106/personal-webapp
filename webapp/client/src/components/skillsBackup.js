import React from 'react';

const Skills = () => {
  const frontEnd = [
    {
      name: "css3",
      value: "60"
    },
    {
      name: "html5",
      value : "60"
    },
    {
      name: "javascript",
      value: "60"
    },
    {
      name: "reactjs",
      value: "70"
    },
    {
      name: "bootstrap",
      value: "60"
    }
  ]

  const backEnd = [
    {
      name: "nodejs",
      value: "60"
    },
    {
      name: "azurefunction",
      value: "60"
    }
  ]

  const databases = [
    {
      name: "mongodb",
      value: "65"
    },
    {
      name: "cosmosdb",
      value: "65"
    },
    {
      name: "postgres",
      value: "65"
    }
  ]

  const tools = [
    {
      name: "npm",
      value: "65"
    },
    {
      name: "git",
      value : "65"
    },
    {
      name: "swagger",
      value: "80"
    },
    {
      name: "postman",
      value: "75"
    },
    {
      name: "docker",
      value: "60"
    },
    {
      name: "kubernetes",
      value: "55"
    }
  ]


  return (
    <div id="skills" className="services bg-dark">
      <div className="py-5">
        <div className="container">
          <h1 className="skills-header">Skills</h1>
          <div className="row">
            <div className="col-md-3 col-sm-6 skills-header-sm">
              <div className="box">
                <h3>Front-end</h3>
                {frontEnd.map((element, index) => {
                  return (
                    <div key={index} className={`c100 p${element.value} default orange center dark`}>
                  <span>
                  <div className="skill-img-container">
                      <img className="skill-img" src={`skills/${element.name}.png`} />
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
                {backEnd.map((element, index) => {
                  return (
                    <div key={index} className={`c100 p${element.value} default orange center dark`}>
                  <span>
                  <div className="skill-img-container">
                      <img className="skill-img" src={`skills/${element.name}.png`} />
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
                {databases.map((element, index) => {
                  return (
                    <div key={index} className={`c100 p${element.value} default orange center dark`}>
                  <span>
                  <div className="skill-img-container">
                      <img className="skill-img" src={`skills/${element.name}.png`} />
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
                {tools.map((element, index) => {
                  return (
                    <div key={index} className={`c100 p${element.value} default orange center dark`}>
                  <span>
                  <div className="skill-img-container">
                      <img className="skill-img" src={`skills/${element.name}.png`} />
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

export default Skills
