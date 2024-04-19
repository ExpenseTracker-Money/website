import styles, { layout } from "@/styles/styles";
import { allTransactions, apple, bill, detailTransactions, google,widgets } from "../../public/assets";
import Image from "next/image";

const AllTransaction = () => (
  <section
    id="product"
    className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
  >
    <div className=" flex justify-center items-center md:mr-0 mr-0 md:mt-0 mt-5 relative">
    <Image src={allTransactions} alt="card" className="w-[50%] h-[100%] rounded-xl object-contain"/>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
      Effortless Transaction History <br className="sm:block hidden" /> 
      </h2>
      <p className=" font-poppins font-normal text-dimblack text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Seamless Transaction History: Access Records from Any UPI, Bank, or Credit Card with Ease
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default AllTransaction;
