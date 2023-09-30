"use client";

import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const navigation = {
  social: [
    {
      icon: AiOutlineGithub,
      href: "https://github.com/EmmanuelOkon",
    },
    {
      icon: FiMail,
      href: "mailto:emmahhokon@gmail.com",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/EO_Udo",
    },
    {
      icon: BiLogoLinkedinSquare,
      href: "https://www.linkedin.com/in/eo-udo/",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-blue" aria-labelledby="footer-heading">
      <div className="px-4 lg:pb20 py-10 lg:py-16 lg:px-20">
        <div className="font-bold text-center ">
          <ul className="flex items-center justify-center ">
            {navigation.social.map((item) => (
              <Link target="_blank" href={item.href} key={item.name} className="mx-4 lg:mx-10 py-1">
                {item.icon && (
                  <item.icon className="w-6 h-6 text-orange hover:cursor-pointer" />
                )}
              </Link>
            ))}
          </ul>
          
          <p className=" text-white font-poppins text-sm font-light pt-6 py-2 pb-6 ">
            <span className="tracking-widest">© 2023 Emmanuel Okon </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
