import styles from "@/styles/styles";
import { logo } from "../../public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import index from "@/pages";

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          {/* <Image
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          /> */}
          <h1 className="font-bold bg-cat-gradient">ExpenseTracker</h1>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to track Expense easy, reliable and secure
          </p>
        </div>
        <div className="flex-[1.5] ww-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimblack hover:text-secondary cursor-pointer ${index != footerLink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
          2024 ExpenseTracker.money. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 bg-red z-50"> {/* Adjust z-50 as needed */}
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
