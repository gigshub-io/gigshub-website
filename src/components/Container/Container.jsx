export const Container = ({ children, className = "" }) => {
  return <div className={`w-container m-auto ${className}`}>{children}</div>;
};
