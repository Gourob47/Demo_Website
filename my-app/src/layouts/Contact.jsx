import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container pt-3" style={{ fontFamily: "sans-serif" }}>
        <div className="row">
          <div className="col-lg-8">
            <p style={{ fontWeight: "bolder", fontSize: "3.5rem" }}>
              Contact Us
            </p>
            <p>
              If you want to contact us: you can send an email to{" "}
              <a href="/">contact.deshcareer@gmail.com</a>
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

export default Contact;
