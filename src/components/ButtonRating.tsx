interface IButtonPropos {
  value: number;
  handleClick: () => void;
}

const ButtonRating = ({ value, handleClick }: IButtonPropos) => {
  return (
    <button
      onClick={handleClick}
      className="bg-slate-700 w-12 h-12 rounded-full hover:bg-slate-500 hover:text-white active:bg-orange-500"
    >
      {value}
    </button>
  );
};

export default ButtonRating;
