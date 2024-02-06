import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-first">
        <h1>About 902 Youth</h1>
        <p>Empowering Youth for a Brighter Future</p>
        <p>
          Welcome to 902 Youth Inc., a vibrant non-profit nestled in the heart
          of Cambridge, Massachusetts, dedicated to shaping the future of young
          minds. Our commitment extends beyond words; we actively drive change
          and make a real impact in the lives of today's youth.
        </p>
        <br />
        <p>
          As we take you on a journey through our diverse programs, from
          empowering coding bootcamps to providing a platform for
          self-expression through our podcast, you'll witness the transformative
          power of education and inclusivity.
        </p>
        <br />
        <p>
          At 902 Youth, we're not just an organization; we're a community that
          believes in the potential of every young individual. Our initiatives
          are geared towards building a better world by investing in the next
          generation.
        </p>
      </div>
      <section className="specific-wander">
        <h2>About Wander</h2>
        <p>
          Wander is a program brought to you by 902 Youth, with a goal to
          motivate the youth to get outside and enjoy the outdoors. 902 Youth is
          committed to providing educational resources to help individuals and
          families be prepared for any situation while they're enjoying time
          outside.
        </p>
      </section>
    </div>
  );
};

export default About;
