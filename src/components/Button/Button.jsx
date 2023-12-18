export const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-purple rounded-full px-[30.89px] py-[9.67px] text-xs border-[5px]"
      style={{
        // border: "solid #D0D0FF",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        color: "#ffffff",
        gap: "6.45px",
        width: "Fixed (128.94px)",
        height: "Hug (37.34px)",
      }}
    >
      {children}
    </button>
  );
};
