import Label from "./Label";
import { LuWind } from "react-icons/lu";
import { LuBanknote } from "react-icons/lu";
import { LuArrowRightLeft } from "react-icons/lu";
import P2P from "../assets/Images/6461711.jpg";
import MinDeposit from "../assets/Images/3700387.jpg";
import InstDeposit from "../assets/Images/Na_Nov_15.jpg";

function FeatureSection() {
  return (
    <div className="w-full bg-white justify-items-center my-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <Label title="Our Features" />
      <h1 className="text-black text-lg md:text-4xl font-semibold my-3 text-center">
        Our Key Features
      </h1>
      <p className="text-lightGrey text-base md:text-xl text-center max-w-3xl mx-auto">
        Our services are designed to cater to your specific financial needs{" "}
        <br className="hidden xl:flex" /> and goals.
      </p>
      <div className="grid grid-cols-1 2xl:grid-cols-1 mt-8 justify-items-center items-center gap-8 w-full max-w-[1600px] mx-auto px-4">
        <div className="space-y-12 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={P2P}
              alt="Feature illustration 1"
              className="w-full md:w-[550px] h-[400px] rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1 md:ml-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <LuArrowRightLeft className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">P2P Marketplace</h3>
              </div>
              <p className="text-gray-600 text-base">
                Buy and sell stocks directly with others, securely and easily.
                Trade at your convenience without the middleman, with full
                control over your transactions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={MinDeposit}
              alt="Feature illustration 2"
              className="w-full md:w-[550px] h-[400px] rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1 md:ml-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <LuBanknote className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">No Minimum, Start Now</h3>
              </div>
              <p className="text-gray-600 text-base">
                Invest in top companies with no minimum deposit. Own a part of
                high-value stocks like Bank of Kigali, Equity, and more,
                starting with just 100FRW.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={InstDeposit}
              alt="Feature illustration 3"
              className="w-full md:w-[550px] h-[400px] rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1 md:ml-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <LuWind className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Instant Deposits</h3>
              </div>
              <p className="text-gray-600 text-base">
                Get immediate access to your funds and start trading right away.
                We front the money while the transfer processes, ensuring you
                never miss a market opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
