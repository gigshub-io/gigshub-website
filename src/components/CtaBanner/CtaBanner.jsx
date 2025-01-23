import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const CtaBanner = () => {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Large, bold heading (black text like the screenshot) */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Ready to try GigsHub?
          </h2>

          {/* Single button in your brand color */}
          <Button
            style={{
              backgroundColor: "#3F33C0",
              color: "#FFFFFF",
              padding: "0.75rem 1.5rem",
              fontWeight: "600",
            }}
          >
            Request demo
          </Button>
        </div>
      </Container>
    </section>
  );
};
