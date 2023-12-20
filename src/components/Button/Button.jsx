/**
 * @param { size: "medium" | "small" }
 * @param { padding: "longText" | "shortText" }
 * @param { kind: "primary" | "dark" }
 * @returns
 */
const sizeClasses = {
  small: "text-xs px-8 py-2.5",
  medium: "text-base px-14 py-3",
};
const colorClasses = {
  primary: "bg-purple",
  transparent: "bg-transparent",
};

export const Button = ({
  children,
  onClick,
  size = "medium",
  kind = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type="button"
      onClick={onClick}
      className={`rounded-full border-[5px] border-solid border-pale-purple shadow-button text-white py-3 px-9 ${sizeClasses[size]} ${colorClasses[kind]} ${className}`}
    >
      {children}
    </button>
  );
};
