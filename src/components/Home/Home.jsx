import React from "react";
import { useNavigate } from "react-router";
import ResourceSection from "./ResourceSection";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSurvivalSkills = () => {
    navigate("/resources");
  };

  return (
    <>
    <div className="home">
      <div className="top-part">
        <h1>Welcome to Wander</h1>
        <section>
          <p>
            A program brought to you by 902 Youth, with a goal to motivate the
            youth to get outside and enjoy the outdoors. 902 Youth is committed
            to providing educational resources to help individuals and families
            be prepared for any situation while they're enjoying time outside.
          </p>
        </section>
      </div>
    </div>
    <ResourceSection />
    </>
  );
};

export default Home;
