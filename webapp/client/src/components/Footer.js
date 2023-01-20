import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Konstantin Komovits</p>
            </div>
            <div className="d-flex">
              <a href="tel: +358401420221">+358401420221</a>
            </div>
            <div className="d-flex">
              <a href="mailto: konsta.2106@gmail.com">konsta.2106@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 margin-sm">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href='#home'>Home</a>
                <br />
                <a className="footer-nav" href='#about'>About me</a>
                <br />
                <a className="footer-nav" href='#skills'>Skills</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav" href='#experience'>Experience</a>
                <br />
                <a className="footer-nav" href='#contact'>Contact me</a>
                <br />
                <a href="https://github.com/konsta2106" target="_blank" rel="noreferrer" className="footer-nav">Github</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 align-items-center margin-sm margin-md">
            <div className="d-flex justify-content-center margin-sm">
              <SocialIcon
                url="https://www.linkedin.com/in/konstantin-komovits/"
                target="_blank"
                className='social'
              />
              <SocialIcon
                url="https://www.facebook.com/konstantin.komovits/"
                target="_blank"
                className='social'
              />
              <SocialIcon
                url="https://www.instagram.com/konsta2106/"
                target="_blank"
                className='social'
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;aboutKonsta | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
