import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const CtaBanner = () => {
  
  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };
  
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Large, bold heading (black text like the screenshot) */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-12">
            Ready to try Jobbyo?
          </h2>

          {/* Single button in your brand color */}
          <Button
            style={{
              backgroundColor: "#3F33C0",
              color: "#FFFFFF",
              padding: "0.75rem 1.5rem",
              fontWeight: "600",
            }}
            onClick={redirect}
          >
            Get started!
          </Button>
        </div>
      </Container>
    </section>
  );
};
