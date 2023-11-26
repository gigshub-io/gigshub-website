import React from "react";

const TitleComponent = () => {
  const titleStyles = {
    // width: "Hug (759px)",
    // height: "Hug (253px)",
    // top: "174px",
    // left: "321px",
    // gap: "24px",
    color: "#1E1E53",
    fontFamily: "DM Sans",
    fontSize: "79px", // You can adjust the font size as needed
    fontWeight: 700,
  };

  return (
    <div style={titleStyles}>
      Turbocharge your job search with{" "}
      <span style={{ color: "#7575E5" }}>Gigshub</span>
    </div>
  );
};

export default TitleComponent;
