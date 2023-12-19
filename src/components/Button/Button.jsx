export const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-purple rounded-full px-[30.89px] py-[9.67px] text-xs border-[5px] border-solid border-pale-purple shadow-button text-white w-40"
    >
      {children}
    </button>
  );
};
