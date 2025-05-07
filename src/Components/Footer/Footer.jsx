import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer w-11/12 mx-auto sm:footer-horizontal  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Our Policy</h6>
          <Link to="/privacy-policy" className="link link-hover text-black">
            Privacy Policy
          </Link>
          <Link to="/terms-condition" className="link link-hover">
            Terms & Conditions
          </Link>
          <Link to="/return-policy" className="link link-hover">
            Return Policy
          </Link>
          <Link to="/terms-service" className="link link-hover">
            Terms of Service
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact us
          </Link>
          <Link to="/faq" className="link link-hover">
            Faq
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a
              target="_blank"
              href="https://www.facebook.com/mdraseduzzaman.rased0/"
            >
              {" "}
              <FaFacebook />{" "}
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/freelancer.rased/"
            >
              {" "}
              <GrInstagram />{" "}
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/freelancer-rased/"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a target="_blank" href="https://x.com/freelancerrased">
              {" "}
              <FaTwitter />{" "}
            </a>
            <a target="_blank" href="https://www.youtube.com/@freelancerrased">
              {" "}
              <FaYoutube />{" "}
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
