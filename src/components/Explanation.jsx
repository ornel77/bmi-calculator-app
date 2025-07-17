const Explanation = () => {
  return (
    <section className="mt-16 md:flex justify-between items-center md:gap-72 container">
      <div className="flex-1">
        <img src="/assets/images/image-man-eating.webp" alt="" />
      </div>
      <div className=" mt-12 flex-1">
        <h2 className="text-32 lg:text-5xl leading-[110%] font-semibold text-blue-900">
          What your BMI result means
        </h2>
        <p className="mt-8 leading-[150%] text-16 text-grey-500">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};
export default Explanation;
