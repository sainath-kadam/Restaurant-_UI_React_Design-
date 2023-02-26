import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Our food is special because it provides us with essential nutrients for good health and reflects our culture and heritage. It is a source of pleasure, comfort, and social bonding. Additionally, the diversity of our food reflects the richness of our environment and the skills and knowledge of our farmers and food producers.
            </p>
            <p>
            Furthermore, the way we grow, produce, and consume food affects the environment, economy, and society, making it an important aspect of sustainability and global well-being.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
