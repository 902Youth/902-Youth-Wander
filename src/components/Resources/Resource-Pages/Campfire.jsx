import React from "react";
import pdf1 from '/Campfire/safety-first.pdf'
import pdf2 from '/Campfire/pit.pdf'
import pdf3 from '/Campfire/collecting-wood.pdf'
import pdf4 from '/Campfire/structuring.pdf'
import pdf5 from '/Campfire/maintaining.pdf'
import pdf6 from '/Campfire/extinguishing.pdf'
import campfire from './bear-campfire.png'
import "./campfire.css";

const Campfire = () => {
  const pdfArr = [
    {
      "Safety First!":
        "Playing with fire can be very dangerous, this section will discuss the safety measures you need to take to protect yourself and the wilderness around you.",
    },
    {
      "Building a Pit":
        "A good pit is the best way to contain a campfire and prevent wildfires, this page will give you the best ways on how to accomplish this task.",
    },
    {
      "Collecting Wood":
        "There are things to pay attention to when gathering wood for a fire. This module will discuss what to look for in wood, where to source it, and the three kinds you need for a good campfire.",
    },
    {
      "Structure":
        "Yes, a good campfire has a special design to maintain long burning hours. In this section you will learn a couple ways to build a steady fire.",
    },
    {
      "Maintenance":
        "Once you’ve built the fire pit, sourced your wood, and built the beginning structure you will need to maintain a nice long burn for cooking, staying warm, and providing light.",
    },
    {
      "Putting Out a Fire":
        "Lastly, to prevent wildfires and wildlife harm we must always put out our fires! This page will discuss the ways you can put out your fire in effective ways to ensure no damage will be done. ",
    },
  ];

  const pdfMapping = {
    0: pdf1,
    1: pdf2,
    2: pdf3,
    3: pdf4,
    4: pdf5,
    5: pdf6,
  };

  const handleClick = (id) => {
    const pdfUrl = pdfMapping[id];
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      console.error(`PDF URL not found for element with ID: ${id}`);
    }
  };

  return (
    <div className="campfire-page">
      <section className="cf-one">
        <h1>Campfires take more effort than one would expect...</h1>
        <img className="campfire-clipart"
          src={campfire}
          alt="cartoon black bear roasting a marshmallow over a campfire. The campfire has a smiley face."
        />
      </section>
      <section className="cf-two">
        {pdfArr.map((item, index) => (
          <span
            className="cf-pdf-cards"
            id={index}
            onClick={() => handleClick(index)}
          >
            <h4 id={index}>{Object.keys(item)[0]}</h4>
            <p id={index}>{Object.values(item)[0]}</p>
          </span>
        ))}
      </section>
    </div>
  );
};

export default Campfire;
