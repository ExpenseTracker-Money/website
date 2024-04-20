import React from "react";
import styles from "@/styles/styles";
import Head from "next/head";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonial,
  CTA,
  Footer,
} from "@/components";
import AllTransaction from "@/components/AllTrasnsaction";



export default function index() {
  return (
    <div className=" w-full bg-primary overflow-hidden">
      <Head>
        {/* Set title */}
        <title>Expense Tracker</title>
    
        {/* Add meta description */}
        <meta
          name="description"
          content="Easily track your spending, categorise transactions, and gain clarity on your financial milestones.Take Control of Your Finances with ExpenseTracker.money"
        />
        <meta
          name="keywords"
          content="Expense tracker Budgeting tool Financial management Personal finance Money management Budget planner Expense manager Financial tracker Spending tracker Finance app
              Budget app
              Money tracker
              Financial planning
              Expense monitoring
              Financial organization
              Ai Expense Tracker
              Auto track Expense Tracker
              "
        />
        {/* Add other meta tags as needed */}
      </Head>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`bg-primary sm:px-16 px-6 flex justify-center items-center -m-10`}
      >
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary sm:px-16 px-6 flex justify-center items-center`}
      >
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
