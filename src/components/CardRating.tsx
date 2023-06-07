import { useState } from 'react';

import { ThankYou } from './ThankYou';
import { VoteCard } from './VoteCard';

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
    <main className="bg-gradient-to-b from-slate-800 to-gray-900 md:w-[24rem] w-[20rem] py-8 px-4 rounded-3xl">
      {canSubmit ? (
        <ThankYou value={valueRating} />
      ) : (
        <VoteCard handleSubmit={handleSummit} handleVote={handleVote} />
      )}
    </main>
  );
};
