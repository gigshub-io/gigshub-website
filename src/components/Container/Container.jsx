export const Container = ({ children, className = "" }) => {
  return (
    <div className={`md:w-containerLg md:m-auto ${className}`}>{children}</div>
  );
};
