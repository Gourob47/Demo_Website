import React from "react";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Home = () => {
  const well = {
    margin: "0px",
    borderRadius: "5px",
    boxShadow: "0px 0px 3px  #000000",
    padding: "2px",
    backgroundColor: "#FFFFFF",
  };
  const well1 = {
    border: "none",
    outline: "none",
    boxShadow: "none"
  };
  return (
    <>

   
      <div className="container" style={{fontFamily:'sans-serif'}}>
        <div className="row">
          <div className="col-lg-8">
            <h1
              className="p-2"
              style={{ fontSize: "50px", fontWeight: "bold" }}
            >
              Get Smarter about your career
            </h1>
            <p className="p-2" style={{ fontSize: "17px" }}>
              {" "}
              Get the <strong>5-minute newsletter</strong> keeping about smart
              career
            </p>

            <div className="container pb-4">
              <div className="row">
                <div className="col-lg-12 p-2">
                  <form action="">
                  <div class="input-group " style={well} >
         <div className="input-group-append p-2 m-1">
                      <span className="pt-1 pb-0">
                        <CiMail className="pb-0" style={{ fontSize: "1.2rem" }} />
                      </span>
                    </div>


                    <input
                      style={well1}
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your E-mail address"
                     
                      required
                     
                    />

                    <div className="input-group-prepand pt-2 pr-2">
                      <button type="submit" className="btn btn-danger pl-5 pr-5" >
                        Search
                      </button>
                    </div>
                  </div>
                  </form>

                  <div className="pt-3" style={{ fontSize: "" }}>
                    <p>
                      We're committed to your privacy. DashCareer uses the
                      information you provide to contact you about our relevant
                      content and services. You may unsubscribe from these
                      communications at any time. For more information, check
                      out our Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
};

export default Home;
