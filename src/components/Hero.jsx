
import styles from "@/styles/styles";
import { discount, robot } from "../../public/assets";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section id="home" className="md:sm:ss:text-sm">
     
     <div className="mb-8 mt-12 sm:mt-20 px-4 sm:px-7 lg:px-8 flex flex-col items-center justify-center text-center"> 

     <div className='mx-auto z-0 mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            ExpenseTracker.money is now on develop! stay Tuned for Further Update
          </p>
      </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-3xl lg:text-7xl sm:text-base'>
        All-in-One Solution for Effortless{' '}
          <span className='text-blue-600'>Expense</span>{' '}
          Tracking.
        </h1>
        <p className='mt-5 max-w-fit text-zinc-700 sm:text-lg'>
        
        <TypeAnimation sequence={[
    
    'Seamlessly track expenses with any UPI',
    1000,
    'Seamlessly track expenses with any Credit card',
    1000,
    'Seamlessly track expenses with any Bank',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
        </p>

    
    </div> 

     
    </section>
  );
}





// <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} >
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       

//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text=[72px] text-[52px] text-black ss:leading-[100.8px] leading-[100.8px]">
//             The Next <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Generation</span>
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr:0">
//             <GetStarted />
//           </div>
//         </div>
//         <h1 className=" font-poppins font-semibold ss:text=[68px] text-[52px] text-black ss:leading-[100.8px] leading-[100.8px] w-full">
//           Expense Tracker
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
//           uwgfuiefn ieufbjelbfru uergfbuvejlv eufbgvhfd jvegeru uegfvjerb vj
//           eurbvhebkuverf uyerbvhdf jbasdlbvj
//         </p>
//       </div>
//       <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}  >
//         <Image src={robot}
//           alt="robot"
//           className="w-[100%] h-[100%] relative z-5"
//         />
//         <div className="absolute z-[0] w-[40%] h-[35%] top -0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
//         <div className="absolute z-[0] w-[50%] h-[50%] r-20 bottom-20 blue__gradient" />
//       </div>
//     </section>