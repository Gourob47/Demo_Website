import React from "react";

const Advertisement = () => {
  return (
    <>
      <div className="container pt-3" style={{ fontFamily: "sans-serif" }}>
        <div className="row">
          <div className="col-lg-8">
            <p style={{ fontWeight: "bolder", fontSize: "3.3rem" }}>
              Advertisement
            </p>

            <p>Our audience age is 20-35 Year. </p>

            <p>We focus on Career related content. </p>
            <p>
              If you want to promote your product to our audience, you can give
              advertisement, Sponsored Content.{" "}
            </p>

            <p className="pb-5">
              Our contact email: <a href="/">contact.deshcareer@gmail.com</a>{" "}
              and phone number: +8801880811047
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
