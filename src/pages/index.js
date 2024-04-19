import React from "react";
import styles from "@/styles/styles";

import {
  Navbar, Hero, Stats,
  Business,
  Billing,
  CardDeal,
  Testimonial,
  CTA,
  Footer
} from "@/components";
import AllTransaction from "@/components/AllTrasnsaction";

export default function index() {
  return (
    <div className=" w-full bg-primary overflow-hidden">
      <div className='sm:px-16 px-6 flex justify-center items-center' >

        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary sm:px-16 px-6 flex justify-center items-center -m-10`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>

          {/* <Stats /> */}
          <Business />
          <Billing />
          <CardDeal />
          <AllTransaction />
          {/* <Testimonial />  */}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
