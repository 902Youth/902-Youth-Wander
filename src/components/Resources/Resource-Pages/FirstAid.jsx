import React from "react";
import pdf1 from '/FirstAid/bear-basics.pdf'
import pdf2 from '/FirstAid/step-up.pdf'
import pdf3 from '/FirstAid/general-care.pdf'
import pdf4 from '/FirstAid/ext-prepared.pdf'
import pdf5 from '/FirstAid/beyond.pdf'
import pdf6 from '/FirstAid/doctor.pdf'
import "./firstAid.css";

const FirstAid = () => {
  const pdfArr = [
    {
      "Bear Basics":
        "This kit is structured to provide assistance with small incidents, similar to a pre-made home first-aid kit.",
    },
    {
      "Stepping it Up":
        "This kit is designed to provide some extra necessities built upon the Bare Basics kit",
    },
    {
      "General Care":
        "This kit will be the best general all-around kit for most common activities and accidents",
    },
    {
      "Extremely prepared":
        "This kit takes the General Care bundle to the next level with some added expertise",
    },
    {
      "Above and Beyond":
        "People will question what you are preparing for with the intensity of items within this kit",
    },
    {
      "Are you a Doctor?": "At this point you should look into medical school",
    },
  ];

  const pdfMapping = {
    0: pdf1,
    1: pdf2,
    2: pdf3,
    3: pdf4,
    4: pdf5,
    5: pdf6
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
    <div className="first-aid-page">
      <section className="fa-one">
        <h1>Things to Consider:</h1>
        <p>
          There are a variety of ways to build a first aid kit. The first thing
          you want to take into account is what kind of activities are you
          preparing for? Are you...
        </p>
        <ul>
          <li>Hiking or Camping?</li>
          <li>Skiing or Snowboarding?</li>
          <li>Scuba diving or Snorkeling?</li>
          <li>All of the above?</li>
        </ul>
        <p>
          Each one of these activities will have some of the same items you
          would need in an emergency, but there will be some different items to
          consider for each one.
        </p>
        <img className='first-aid-clipart'
          src="/FirstAid/first-aid.png"
          alt="stylized drawing of a first aid kit, nose spray, scissors, pills, tape, thermometer, pill bottle, and a bandaid"
        />
      </section>
      <section className="fa-two">
        {pdfArr.map((item, index) => (
          <span className="fa-pdf-cards" id={index} onClick={() => handleClick(index)}>
            <h4 key={index}>{Object.keys(item)[0]}</h4>
            <p key={index}>{Object.values(item)[0]}</p>
          </span>
        ))}
      </section>
    </div>
  );
};

export default FirstAid;
