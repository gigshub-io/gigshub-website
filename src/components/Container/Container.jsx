export const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-7xl m-auto ${className}`}>{children}</div>
  );
};
