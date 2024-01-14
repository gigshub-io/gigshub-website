export const Container = ({ children, className = "" }) => {
  return <div className={`w-containerLg m-auto ${className}`}>{children}</div>;
};
