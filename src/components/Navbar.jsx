// import React from "react";
// import { useState } from "react";
// import { close, logo, menu } from "../../public/assets";
// import { navLinks } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       {/* <h1 className="font-bold rounded-md cursor-pointer">ExpenseTracker</h1> */}
//       <Link href="/" >
//         <Image src={logo} alt="logo" className="w-[124px] h-[32px] cursor-pointer"></Image>
//       </Link>

//       {/* Conditional rendering of menu toggle based on screen size */}
//       <div className="sm:hidden">
//         <Image
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle((prev) => !prev)}
//         />
//       </div>
//       {/* Navigation links */}
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
//               } text-black`}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>
//           </li>
//         ))}
//       </ul>

//       {/* Sidebar for mobile */}
//       <div className="sm:hidden">
//         <div
//           className={`${toggle ? "flex" : "hidden"
//             } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex flex-col justify-end items-center flex-1">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-10"
//                   } text-white`}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from "react";
import { close, logo, menu } from "../../public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-[124px] h-[32px] cursor-pointer" />
      </Link>

      <div className="sm:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
          >
            <a href={nav.id.startsWith("mailto:") ? nav.id : `#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-10"} text-white`}
              >
                <a href={nav.id.startsWith("mailto:") ? nav.id : `#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
