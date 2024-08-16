import React from "react";
import { Container } from "../../Container";
import engineIcon from "../../../assets/engine-icon.png";

const companyCardsContent = [
  {
    heading: "Our Mission",
    paragraph:
      "We are committed to bridging the gap between job seekers and employers by offering innovative and user-friendly tools that streamline the hiring process.",
    height: "718px",
  },
  {
    heading: "Our Vision",
    paragraph:
      "To become the leading platform for job seekers and employers, creating a future where finding the perfect job is as easy as a click.",
    height: "683px",
  },
  {
    heading: "Our Values",
    paragraph:
      "Integrity, innovation, and inclusivity are at the heart of everything we do. We strive to create an environment where everyone can thrive.",
    height: "530px",
  },
];

export const CompanyInfoCard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
          {companyCardsContent.map((card, index) => (
            <div
              key={index}
              className="w-card1 flex flex-col justify-between rounded-lg shadow-lg shadow-card-1 shadow-card-2 text-black bg-white"
              style={{ height: card.height }}
            >
              <div className="w-card1 h-cardHeader bg-dark-blue rounded-t-lg">
                <img src={engineIcon} className="h-engineIcon w-engineIcon" />
              </div>
              {/* <div className="p-6">
            
                <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
                <p className="text-base">{card.paragraph}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
