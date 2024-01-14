export const Container = ({ children, className = "" }) => {
  return <div className={`w-full max-w-7xl ${className}`}>{children}</div>;
};
