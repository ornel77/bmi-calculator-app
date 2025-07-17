const AdviceCard = ({advice}) => {
  return (
    <article className="flex flex-col gap-8 md:gap-10 lg:gap-8 md:flex-row lg:flex-col md:items-center md:justify-between lg:justify-normal lg:items-start">
      <div>
        <img src={advice.img} alt="icon"/>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">{advice.title}</h3>
        <p className="mt-6 font-light text-grey-500">
          {advice.content}
        </p>
      </div>
    </article>
  );
};
export default AdviceCard;
