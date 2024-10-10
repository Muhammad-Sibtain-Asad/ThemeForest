"use client";
import Image from "next/image";
import React from "react";


import Image1 from "../../../public/images/assets/ils_11.png";
import Image2 from "../../../public/images/assets/ils_12.png";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-light tx-dark mb-35">
              Automate your SEO <br /> in 1 click
            </h1>
            <p className="text-lg tx-dark mt-56 mb-70 lg-mt-30 lg-mb-40">
              Discover OTTO SEO, a first-of-its-kind AI SEO tool that will revolutionize <br /> the way you do SEO.
            </p>
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="example@gmail.com"
              />
              <button className="submit-btn" type="submit">
                Start Now
              </button>
            </form>

            {/* End form */}

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src={Image1}
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <Image
        width={537}
        height={658}
        src={Image2}
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero1;
