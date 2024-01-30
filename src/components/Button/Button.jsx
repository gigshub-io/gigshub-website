/**
 * @param { size: "small" | "medium" | "large" }
 * @param { padding: "longText" | "shortText" }
 * @param { kind: "primary" | "dark" }
 * @returns
 */

// py-3 px-9 / px-4 py-2
const sizeClasses = {
  small: "text-xs px-6 border-[3px]",
  medium: "text-xs px-7 py-2 border-[4px]",
  large: "text-base px-9 py-3 border-[5px]",
};
const colorClasses = {
  primary: "bg-purple",
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
}) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={`items-center rounded-full border-solid border-pale-purple shadow-button text-white ${sizeClasses[size]} ${colorClasses[kind]} ${className}`}
    >
      {children}
    </button>
  );
};
