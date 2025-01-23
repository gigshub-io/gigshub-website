/**
 * @param { size: "small" | "medium" | "large" }
 * @param { padding: "longText" | "shortText" }
 * @param { kind: "primary" | "dark" }
 * @returns
 */

// py-3 px-9 / px-4 py-2
const sizeClasses = {
  small: "text-xs px-6",
  medium: "text-xs px-7 py-2 ",
  large: "text-base px-9 py-3 ",
};
const colorClasses = {
  primary: "bg-[#3F33C0]",
  transparent: "bg-transparent",
};

export const Button = ({
  children,
  onClick,
  size = "large",
  kind = "primary",
  type = "button",
  className,
  ...rest
}) => 
  {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center bg-primary rounded-md font-bold text-white ${sizeClasses[size]} ${colorClasses[kind]} ${className}`}
    >
      {children}
    </button>
  );
};
