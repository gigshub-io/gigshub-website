import React from "react";

export const Hero = () => {
  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };
  
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        The CV tool that gets you hired
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          We tailor your CV and get you ideal job matches—
          so you can focus on what truly matters: acing interviews.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={redirect} className="px-8 py-3 bg-[#3F33C0] text-white font-semibold rounded-md">
            Get Started—It's Free
          </button>

        </div>

        {/* (Optional) Additional Info or Tagline */}
        {/* <p className="mt-2 text-sm text-gray-400">Try a tagline or short note here</p> */}
      </div>
      
      {/* Mocked Product Screenshot / Video Placeholder */}
      <div className="mt-12 max-w-5xl mx-auto px-4">
      <div className="overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="415"
          src="https://app.supademo.com/embed/cm6eve3f609r6wabovct1hn43?embed_v=2"
          title="YouTube video player"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4 rounded-lg"  
        ></iframe>
        
      </div>
      </div>
    </section>
  );
};
