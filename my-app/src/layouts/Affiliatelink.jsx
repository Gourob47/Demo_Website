import React from "react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";

const Affiliatelink = () => {
  const well = {
    margin: "0px",
    borderRadius: "5px",
    boxShadow: "0px 0px 3px  #000000",
    padding: "3px",
    backgroundColor: "#FFFFFF",
  };
  const well1 = {
    border: "none",
    outline: "none",
    boxShadow: "none",
  };

  const [container, setContainer] = useState(false);
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setContainer(true);
      setEmail("");
    } else {
      setContainer(false);
    }
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (
    <>
      <div className="container pb-5" style={{ fontFamily: "sans-serif" }}>
        <div className="row pb-5">
          <div className="col-lg-8">
            <p style={{ fontWeight: "bolder", fontSize: "3.5rem" }}>
              Search your Invitation
            </p>
            <form className="pb-5">
              <div class="input-group " style={well}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <div className="input-group-prepand pt-2 pr-2">
                  <button
                    type="submit"
                    className="btn btn-danger pl-5 pr-5"
                    onClick={submit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {container && (
              <>
                <p>
                  <strong>
                    My Affiliate Link: https://deshcareer.com/ref-769541
                  </strong>{" "}
                </p>
                <p>
                  {" "}
                  <strong>Total Affiliate: 0</strong>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliatelink;
