export const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-8/12 m-auto max-w-6xl ${className}`}>{children}</div>
  );
};
// Option1: max-w-5xl/max-w-5xl reduced the size of the container
// Option2: px-8 add padding on left and right
// Option3: Combines both max-w-6xl px-6
