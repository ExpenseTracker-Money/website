import React from "react";
import { layout } from "@/styles/styles";
import { features } from "@/constants";
import Button from "./Button";
import styles from "@/styles/styles";
import Image from "next/image";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-cat-gradient rounded-xl`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
      <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimblack text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
       The Best Expense Tracker, <br className="sm:block hidden" /> Your Ultimate Financial Companion.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily track your spending, categorise transactions, and gain clarity on your financial milestones.Take Control of Your Finances with ExpenseTracker.money
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;