/**
 * @param { heading: "1" | "2" | "3" | "4" | "5"  }
 * @returns
 */
const headingClasses = {
  1: {
    heading: "font-sans text-5xl font-bold text-dark-purple tracking-wide",
    paragraph: "font-sans text-xl font-medium text-dark-purple",
  },
  2: {
    heading: "font-sans text-4xl font-bold text-dark-purple tracking-wide",
    paragraph: "font-sans text-base font-normal text-dark-purple",
  },
  3: {
    heading: "font-sans text-3xl font-bold text-dark-purple tracking-wide",
    paragraph: "font-sans text-base font-normal text-dark-purple",
  },
  4: {
    heading: "font-sans text-2xl font-bold text-dark-purple tracking-wide",
    paragraph: "font-sans text-base font-normal text-dark-purple",
  },
  5: {
    heading: "font-sans text-xl font-bold text-dark-purple tracking-wide",
    paragraph: "font-sans text-base font-normal text-dark-purple",
  },
};

export const TextDisplay = ({
  headingType,
  headingText,
  paragraphText,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p
        className={`${headingClasses[headingType].heading}`}
      >{`Heading ${headingType}`}</p>
      <p className={`${headingClasses[headingType].paragraph}`}>
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.
      </p>
    </div>
  );
};
