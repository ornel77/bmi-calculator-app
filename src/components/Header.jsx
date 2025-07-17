const Header = () => {
  return (
    <header className="lg:w-full relative">
      <div className="absolute bg-linear-to-r from-gradient-1 to-gradient-2 top-0 left-0 w-full lg:w-[70%] -z-10 rounded-b-4xl lg:rounded-4xl h-[650px] lg:h-full" />
      <div className="container lg:py-88 p-6">
        <div className="flex justify-center mb-8 lg:justify-normal">
          <img src="/assets/images/logo.svg" alt="logo"/>
        </div>


        <section className="lg:flex lg:items-center gap-8">
          <div className="lg:flex-1 text-center lg:text-left">
            <h1 className=" text-blue-900 font-semibold text-5xl mb-6 ">
              Body Mass <br /> Index Calculator
            </h1>
            <p className="text-grey-500 leading-[150%]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>

          {/* FORMULAIRE */}
          <form className="lg:flex-1 bg-white rounded-2xl p-6 mt-8 lg:mt-0 drop-shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">
              Enter your details below
            </h2>

            {/* Metric or Imperial */}
            <fieldset className="flex mb-6">
              <label htmlFor="metric" className="flex-1">
                <input type="radio" id="metric" name="unit" className="" />
                <span className="ml-4 font-semibold text-16">Metric</span>
              </label>
              <label htmlFor="imperial" className="flex-1">
                <input type="radio" id="imperial" name="unit" />
                <span className="ml-4 font-semibold text-16">Imperial</span>
              </label>
            </fieldset>

            {/* DATA */}
            <fieldset className="flex gap-3.5 flex-col md:flex-row">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="height"
                  className="text-grey-500 text-sm font-medium"
                >
                  Height
                </label>
                <div className="flex items-center border border-grey-500 rounded-xl px-6 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    id="height"
                    type="number"
                    placeholder="170"
                    // value={height}
                    // onChange={(e) => setHeight(e.target.value)}
                    className="w-full text-2xl font-semibold text-gray-900 focus:outline-none"
                  />
                  <span className="ml-2 text-blue-500 font-semibold text-2xl">
                    cm
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="weight"
                  className="text-grey-500 text-sm font-medium"
                >
                  Weight
                </label>
                <div className="flex items-center border border-grey-500 rounded-xl px-6 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    id="weight"
                    type="number"
                    placeholder="80"
                    // value={weight}
                    // onChange={(e) => setWeight(e.target.value)}
                    className="w-full text-2xl font-semibold text-gray-900 focus:outline-none"
                  />
                  <span className="ml-2 text-blue-500 font-semibold text-2xl">
                    kg
                  </span>
                </div>
              </div>
            </fieldset>
            <section className="mt-6 bg-blue-500 text-white p-8 rounded-2xl md:flex md:justify-between md:items-center md:gap-6">
              <div className="flex-1">
                <p>Your BMI is...</p>
                <div className="mt-2 font-semibold text-5xl">
                  23.4
                </div>
              </div>
              <p className="font-extralight mt-6 md:mt-0 leading-[150%] text-14 flex-1">
                Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className="font-semibold">63.3kgs - 85.2kgs</span>.
              </p>
            </section>
          </form>
        </section>
      </div>
    </header>
  );
};
export default Header;
