import ThankYouImg from '../assets/illustration-thank-you.svg';

interface IThankYouProps {
  value: number;
}
export const ThankYou = ({ value }: IThankYouProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <img src={ThankYouImg} alt="Thank you ilustration" />

      <span className="bg-slate-700 text-orange-300 py-2 px-4 mt-8 rounded-full text-sm">{`You selected ${value} out of 5`}</span>

      <h1 className="text-white text-2xl/loose font-bold mt-6">Thank you!</h1>
      <p className="text-sm/6 text-center">
        We appreciated you taking the time to given a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
};
