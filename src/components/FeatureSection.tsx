import Label from "./Label";
import { CiCircleCheck } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import ChartCard1 from "./ChartCard1";

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
      <div className="grid grid-cols-1 xl:grid-cols-[50%_50%] mt-8 justify-items-center items-center gap-8 w-full">
        <div>
          <div className="flex flex-col p-6 bg-[#f9fafb] rounded-lg shadow-lg max-w-[544px]">
            <span className="bg-lightBlue p-3 rounded-xl w-fit">
              <CiCircleCheck className="text-darkBlue text-[25px]" />
            </span>
            <h1 className="text-black text-lg md:text-xl font-semibold my-3">
              Fractional Shares
            </h1>
            <p className="text-lightGrey text-[16px] leading-relaxed">
              Invest in your favorite companies without needing to buy a full
              share. With our fractional shares feature, you can start investing
              with as little as 100FRW. This allows you to own a portion of
              high-value stocks like Bank Of Kigali, Equity, and more.
            </p>
          </div>
          <div className="flex flex-col p-6 bg-[#f9fafb] rounded-lg shadow-lg max-w-[544px] mt-6">
            <span className="bg-lightBlue p-3 rounded-xl w-fit">
              <IoIosPhonePortrait className="text-darkBlue text-[25px]" />
            </span>
            <h1 className="text-black text-lg md:text-xl font-semibold my-3">
              Instant Deposits
            </h1>
            <p className="text-lightGrey text-[16px] leading-relaxed">
              Skip the wait! With instant deposits, you get immediate access to
              your funds so you can start trading right away. When you initiate
              a deposit, the platform fronts the money to your account while the
              actual transfer is processed. This ensures you don’t miss out on
              timely market opportunities due to delayed fund transfers.
            </p>
          </div>
          <div className="flex flex-col p-6 bg-[#f9fafb] rounded-lg shadow-lg max-w-[544px] mt-6">
            <span className="bg-lightBlue p-3 rounded-xl w-fit">
              <CiMail className="text-darkBlue text-[25px]" />
            </span>
            <h1 className="text-black text-lg md:text-xl font-semibold my-3">
              Instant Trades on RSX
            </h1>
            <p className="text-lightGrey text-[16px] leading-relaxed">
              Effortlessly execute buy and sell orders on the Rwanda Stock
              Exchange (RSX) with lightning-fast transaction speeds. Our
              platform ensures that your trades are processed in real-time,
              giving you a competitive edge in capturing the best market
              opportunities. With a seamless interface and instant
              confirmations, you can trade confidently and efficiently, knowing
              your transactions are handled with precision and speed.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-center bg-[#f9fafb] rounded-lg shadow-lg p-6 max-w-[544px]">
          <h1 className="text-black text-xl md:text-2xl font-semibold mb-4">
            Yearly Total Income
          </h1>
          <ChartCard1 />
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
