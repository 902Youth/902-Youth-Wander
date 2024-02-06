import React from "react";
import pdf1 from '/Navigation/compass.pdf'
import pdf2 from '/Navigation/natural.pdf'
import pdf3 from '/Navigation/topographical.pdf'
import pdf4 from '/Navigation/trail-markers.pdf'
import "./navigation.css";

const Navigation = () => {
  const pdfArr = [
    "Compass Skills",
    "Natural Nav",
    "Topography Map",
    "Visual Markers",
  ];

  const pdfMapping = {
    0: pdf1,
    1: pdf2,
    2: pdf3,
    3: pdf4
  }

  const handleClick = (id) => {
    const pdfUrl = pdfMapping[id];
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      console.error(`PDF URL not found for element with ID: ${id}`);
    }
  };

  return (
    <div className="navigation-page">
      <section className="na-one">
        <h1>Navigation</h1>
        <p>
          When exploring the wilderness, it's good to know where you're going,
          but most importantly, how to get back!
        </p>
      </section>
      <section className="na-two">
        <div className="sign-container">
          <img className="sign-post" src="/Navigation/na-sign-image.png" alt="Red and yellow signs pointing east, then west, alternating. They are attached to a blue wooden post" />
          {pdfArr.map((item, index) => (
            <span key={index} className="na-sign-cards">
              <h4 className={`sign-${index}`} onClick={() => handleClick(index)}>{item}</h4>
            </span>
          ))}
        </div>
        <img
          className="na-image"
          src="/Navigation/na-image.png"
          alt="Cartoon warthog standing up-right and backpacking with a red backpack and walking stick"
        />
      </section>
    </div>
  );
};

export default Navigation;
