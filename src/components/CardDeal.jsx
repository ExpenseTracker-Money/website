import styles, { layout } from "@/styles/styles";
import { card, widgets,detailTransactions } from "../../public/assets";
import Button from "./Button";
import Image from "next/image";
Image
export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <div className={styles.heading2}>
          <h2 className="text-black">
          Capture Every Transaction Detail <br className="sm:block hidden" /> in few
            easy steps.
          </h2>
        </div>

        <p className="font-poppins font-normal text-dimblack text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Comprehensive Transaction Details: Capture Where, When, Date, Time, and More with the Ability to Save Notes
        </p>
        {/* <Button styles="mt-10" /> */}
      </div>
      <div className={layout.sectionImg}>
        
        <Image
        src={detailTransactions}
        alt="billing"
        height={300}
        width={300}
        className=" relative z-[5] object-contain rounded-xl"
      />

      </div>
    </section>
  );
}
