import React from 'react';
import MyImage from '../assets/konsta.png'

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={MyImage} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-me-heading">about Me</h1>
          <p>I thought I knew what coding was after getting a BBA degree in Business Information Technology. I was wrong. The selection of study specialization did not coincide with the desire. Understanding the competence I got is not enough to apply for a job that would give me the joy of work made me stuck in another field of work for a while. </p>
          <p>Being passionate about IT pushed me forward, and one of the milestones in my life was getting accepted to continuing education as a Fullstack Web Developer, which provided me with the basics of JavaScript, Node.js, React, Docker, databases, APIs, DevOps, and software development in overall.</p>
          <p>After education, I was eager and happy to start my IT career as an API designer, designing and architecting APIs in pair with the OpenAPI Specification, taking part in developer experience, and being a friend of the Postman API platform.
            After a while, I had a chance to be involved in the customer interface. Being a part of planning, coordinating, and implementing integrations and data flows in different customer projects gave me new challenges. Seeing the results where data flows between systems was a new way to enjoy the work.</p>
          <p>Currently, I'm a Developer Experience Specialist at Platform of Trust. I love APIs, and I'm keen to translate business requirements into technical specifications and keeping in mind to satisfy the needs of developers.
            As Platform Technical Specialist, I value being a part of customer projects, fulfilling the requirements to move data by configuring data flows and helping partners to use the platform for the same. Understanding the product and the platform from a technical perspective, I help to improve the product by gathering insights.</p>
          <p>During my free time, I continue developing skills and knowledge. Doing small coding or Microsoft Azure courses and reading a book related to IT are part of my hobbies. I also like downhill skiing and going to the gym.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
