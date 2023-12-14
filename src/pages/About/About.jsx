import React from "react";

const About = () => {
  return (
    <div
      className="bg-light-blue"
      style={{
        textAlign: "center",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <p style={{width:"80%",fontSize:"20px",flexWrap:"wrap"}}>
        Looking for some free blog sites to help you start sharing your writing
        with the world? Whether you just want to share updates with your family
        and friends or you want to start a blog and build a broader audience,
        we’ve put together ten great sites where you can start a blog for free.
      </p>
    </div>
  );
};

export default About;
