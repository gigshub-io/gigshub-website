export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`sm:w-containerSm md:w-containerMd lg:w-containerLg xl:w-containerXl 2xl:w-container2xl m-auto ${className}`}
    >
      {children}
    </div>
  );
};
