import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  return (
    <div name="pricing" className="text-whiteText">
      <div className="w-full bg-black absolute h-[75vh] bg-blend-overlay"></div>
      <div className="max-w-[1200px] mx-auto relative px-8 py-[80px]">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl text-center font-semibold">Pricing</h1>
          <p className="text-4xl font-bold text-center">
            The Right place for your Data
          </p>
          <p className="text-xl text-center">
            Nostrud labore enim nulla do tempor aliquip eu do aliquip ad. Velit
            tempor tempor aliqua Lorem quis magna officia occaecat elit
            voluptate adipisicing. Cillum ea aliqua laborum cillum aliquip.
          </p>
        </div>
        <div className="grid grid-cols-1 mdburger:grid-cols-2 px-2 py-[100px] gap-6 mt-[10px] mdburger:mt-[100px]">
          <div className="bg-cardWhite text-black rounded-xl p-8 flex flex-col gap-4 drop-shadow-xl">
            <div className="flex">
              <h3 className="bg-tealWeb px-2 py-1 rounded-3xl text-whiteText uppercase">
                standard
              </h3>
            </div>

            <p className="flex items-end">
              <span className="text-5xl font-bold">$50</span>
              <span className="text-xl mb-[4px] font-semibold">/Month</span>
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
            </div>
            <div>
              <button className="w-full bg-cobalt p-2 text-whiteText rounded-lg font-bold hover:bg-black ease-in duration-300">
                Get Offer
              </button>
            </div>
          </div>
          <div className="bg-cardWhite text-black rounded-xl p-8 flex flex-col gap-4 drop-shadow-xl">
            <div className="flex">
              <h3 className="bg-blueNav px-2 py-1 rounded-3xl text-whiteText uppercase">
                premium
              </h3>
            </div>

            <p className="flex items-end">
              <span className="text-5xl font-bold">$110</span>
              <span className="text-xl mb-[4px] font-semibold">/Month</span>
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
              <div className="flex gap-2">
                <AiOutlineCheck style={{ fontSize: "25px", color: "green" }} />
                <p className="text-base font-extralight">
                  Sit elit tempor irure aute excepteur
                </p>
              </div>
            </div>
            <div>
              <button className="w-full bg-cobalt p-2 text-whiteText rounded-lg font-bold hover:bg-black ease-in duration-300">
                Get Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
