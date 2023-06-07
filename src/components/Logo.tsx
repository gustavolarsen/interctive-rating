import StarImg from '../assets/icon-star.svg';
export const Logo = () => {
  return (
    <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center">
      <img
        className="self-center justify-self-center"
        src={StarImg}
        alt="Logo orange star"
      />
    </div>
  );
};
