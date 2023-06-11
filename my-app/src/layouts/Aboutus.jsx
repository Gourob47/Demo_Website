import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="container pt-3" style={{ fontFamily: "sans-serif" }}>
        <div className="row">
          <div className="col-lg-8">
            <p style={{ fontWeight: "bolder", fontSize: "3.1rem" }}>About Us</p>
            <p>
              Desh Career is Career based newsletter in Bengali language. This
              newsletter has published weekly. This is published in every
              Saturday at 12.00 PM.
            </p>
            <p>We focus on Career trend, news, smart job etc. </p>
            <p>
              If you want to contact us: you can send an email to{" "}
              <a href="/">contact.deshcareer@gmail.com</a>{" "}
            </p>
            <p>
              If you want to meet with us, you can come to our office based on
              an appointment.{" "}
            </p>
            <p>Our Office address:</p>
            <p>House: 13/3,</p>
            <p>Road: 2,</p>
            <p>Shyamoly, Dhaka-1207</p>
            <p className="pb-5">+8801880811047</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
