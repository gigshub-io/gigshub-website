// Home.js
import React from "react";
import Navigation from "../components/Navigation";
import TitleComponent from "../components/Title";

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
      <Navigation />
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
          <div style={{ width: "659px" }}>
            <div
              style={{
                marginTop: "50px",
                // maxWidth: "700px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <TitleComponent />
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              justifyContent: "center",
              display: "flex",
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
      </div>
    </div>
  );
};

export default Home;
