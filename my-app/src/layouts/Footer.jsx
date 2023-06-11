import React from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Bi} from "react-icons/bi";
import {Link } from "react-router-dom";
const Footer = () => {
  const divStyle = {
    backgroundColor: "#0F0D32",
  };

  const pcolor = {
    color: "#8c94b8",
    textAlign: "start",
  };
  const pcolor1 = {
    color: "#8c94b8",
    textDecoration: "none",
  };
  const pcolor2 = {
    color:"#FFFFFF",
    fontSize:'13px',
    textDecoration: "none",
  };
  const well = {
    margin: "0px",
    borderRadius: "5px",
    margin: "0px",
    paddingTop: "3px",
  
  };

  return (
    <div className="" style={divStyle}>
      <div className=" p-3 d-flex flex-row justify-content-center">
        <div className="flex-grow-1 px-1 ">
          <div className="border border-white" style={well}>
            <a href="/">
              {" "}
              <FaFacebook color="white"  style={{height:'20px', width:'30px'}}/>
            </a>
          </div>
        </div>
        <div className="flex-grow-2 px-1">
          <div className="border border-white" style={well}>
            <a href="/">
              {" "}
              <FaYoutube color="white" style={{height:'20px', width:'30px'}} />
            </a>
          </div>
        </div>
        <div className="flex-grow-3 px-1 ">
          <div className="border border-white" style={well}>
            <a href="/">
              {" "}
              <FaLinkedinIn color="white"  style={{height:'20px', width:'30px'}}/>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 m-0 ">
            <div className="d-flex justify-content-center justify-content-lg-start">
          
              <Link to='/'>
            <img
              className="img-fluid"
              width={200}
              src="/images/1.png "
              alt="Image description"
            />
          </Link>
            </div>

            <div className="p-1">
              <p style={pcolor}>
                Desh Career is Career based newsletter in Bengali language. This
                newsletter has published weekly. This is published in every
                Saturday at 12.00 PM.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 pt-3 d-flex justify-content-center ">
            <div>
              <div className="pb-3">
                <p className="" style={{ color: "white", fontSize: "25px" }}>
                  Privacy and Terms
                </p>
              </div>

              <div className="text-center">
                <div className="pb-2">
                <Link to="/privacy/policy" style={pcolor1}> Privacy Policy</Link>
             
                </div>
                <div className="pb-2">
                <Link to="/terms/condition" style={pcolor1}>  Terms Condition</Link>
                
                </div>
                <div className="pb-2">
                <Link to="/faq" style={pcolor1}>FAQ</Link>
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 pt-3">
            <div className="">
              <div className="pb-3 text-lg-right text-center">
                <p className="" style={{ color: "white", fontSize: "25px" }}>
                  Support
                </p>
              </div>

              <div className="  text-lg-right text-center">
                <div className="pb-2">
                  <Link to="/affiliate/link" style={pcolor1}>Affiliate Link</Link>
               
                </div>
                <div className="pb-2">
                <Link to="/contact/us" style={pcolor1}>Contact Us</Link>
               
                </div>
                <div className="pb-2 ok">
                <Link to="/advertisement" style={pcolor1} > Advertise with us</Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top border-light"></div>
      <div className="container">
        <div className="row">
          <div className="pt-2 col-md-6 col-12  text-light" style={{fontSize:'12px'}}>
            <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-lg-end pt-1 pb-2">

            <div className="mr-3" >
            <a style={pcolor2} href="">Terms</a>
            </div>
            <div  className=" mx-3 ">
            <a style={pcolor2} href="">Cookie</a>
            </div>
            <div className="mx-3" >
            <a style={pcolor2} href="">Policy</a>
            </div>
            <div className=" mx-3 ">
            <a style={pcolor2} href="">Terms</a>
            </div>
            <div className=" ml-3" >
            <a   style={pcolor2} href="">Privacy</a>
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
