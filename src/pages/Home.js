// Home.js
import React from "react";
import TitleComponent from "../components/Title";
import firstImage from "../assets/first-image.png";
import secondImage from "../assets/second-image.png";
import thirdImage from "../assets/thrid-image.png";
import fourthImage from "../assets/fourth-image.png";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F3F3FF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", marginTop: "50px", width: "1259px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                maxWidth: "559px",
              }}
            >
              <TitleComponent />
              <p style={{ fontFamily: "DM Sans", maxWidth: "659px" }}>
                We automate applications, tailor CVs, and ensure ideal Matches,
                so you can focus on what truly matters - nailing interviews.
              </p>
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    backgroundColor: "#3C3C8E",
                    borderRadius: "30px",
                    paddingRight: "30.89px",
                    paddingLeft: "30.89px",
                    foontSize: "12px",
                    paddingTop: "9.67px",
                    paddingBottom: "9.67px",
                    border: "5px solid #D0D0FF",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                    color: "#ffffff",
                    gap: "6.45px",
                    width: "Fixed (128.94px)",
                    height: "Hug (37.34px)",
                  }}
                >
                  {" "}
                  Get Hired
                </button>
              </div>
            </div>

            <div style={{ marginLeft: "50px" }} className="banner-container">
              <div
                className="image-container"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  style={{ margin: "10px", width: "256px", height: "252px" }}
                  src={firstImage}
                  // alt="First Image"
                />
                <img
                  style={{ margin: "10px", width: "256px", height: "252px" }}
                  src={secondImage}
                  // alt="Second Image"
                />
              </div>
              <div
                className="image-container"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  style={{ margin: "10px", width: "256px", height: "252px" }}
                  src={thirdImage}
                  // alt="First Image"
                />
                <img
                  style={{ margin: "10px", width: "256px", height: "252px" }}
                  src={fourthImage}
                  // alt="Second Image"
                />
              </div>
            </div>
            <div
              className="image-container"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <div
                className="image-container"
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
