import { useState } from 'react';
import ButtonRating from './ButtonRating';
import { Logo } from './Logo';

const buttons = [1, 2, 3, 4, 5];

export const CardRating = () => {
  const [valueRating, setValueRating] = useState<number>(0);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const handleVote = (value: number) => {
    setValueRating(value);
  };

  const handleSummit = () => {
    setCanSubmit(valueRating > 0);
  };

  return (
    <main className="bg-gradient-to-b from-slate-800 to-gray-900 w-[24rem] p-8 rounded-3xl flex flex-col">
      {canSubmit ? (
        <div>Tank you</div>
      ) : (
        <>
          <Logo />
          <h1 className="text-white text-2xl/loose font-bold mt-6">
            How did we do?
          </h1>
          <p className="text-sm/5">
            Please let us know how we did with your suppert request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <section className="flex gap-3 justify-between my-6">
            {buttons.map((item: number) => (
              <ButtonRating handleClick={() => handleVote(item)} value={item} />
            ))}
          </section>
          <button
            onClick={handleSummit}
            className="bg-orange-500 text-sm tracking-widest rounded-full text-white p-3 rounded- hover:bg-white hover:text-orange-500"
          >
            SUBMIT
          </button>
        </>
      )}
    </main>
  );
};
