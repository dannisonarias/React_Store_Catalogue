import React from 'react';
import 'react-bootstrap';
import './style.css';

const Footer = props => (
  <footer className="site-footer mt-5 p-5">
    <div className="container1">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Dannison Arias
            {' '}
            <i>SIMPLY AMAZING </i>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            {' '}
          </p>
        </div>

        <div className="col-sm-6 col-md-3 p-1">
          <h6>My Skills</h6>
          <ul className="footer-links">
            <li><a href="">Ruby on Rails</a></li>
            <li><a href="">Javascript</a></li>
            <li><a href="">React</a></li>
            <li><a href="">UI Design</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Aws</a></li>
            <li><a href="">and More</a></li>
          </ul>
        </div>

        <div className="col-sm-6 col-md-3 p-1">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Contribute</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container1">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="https://dannisonarias.github.io/"> Dannison Arias</a>
            .
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
            <li><a className="linkedin" href="https://www.linkedin.com/in/dannisonarias/"><i className="fa fa-linkedin" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
