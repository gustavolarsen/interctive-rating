import ButtonRating from './ButtonRating';
import { Logo } from './Logo';

const buttons = [1, 2, 3, 4, 5];

interface IVoteCardPros {
  handleVote: (value: number) => void;
  handleSubmit: () => void;
}

export const VoteCard = ({ handleVote, handleSubmit }: IVoteCardPros) => {
  return (
    <section className="w-full flex flex-col px-4">
      <Logo />
      <h1 className="text-white text-2xl/loose font-bold mt-6">
        How did we do?
      </h1>
      <p className="text-sm/5">
        Please let us know how we did with your suppert request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section className="flex justify-between my-6">
        {buttons.map((item: number) => (
          <ButtonRating handleClick={() => handleVote(item)} value={item} />
        ))}
      </section>
      <button
        onClick={handleSubmit}
        className="bg-orange-500 text-sm tracking-widest rounded-full text-white p-3 rounded- hover:bg-white hover:text-orange-500"
      >
        SUBMIT
      </button>
    </section>
  );
};
