"use client";

import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
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
      icon: BsTwitter,
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
      <div className="mxauto px-4 lg:pb20 lg:py-16 lg:px-20">
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
          
          <p className="flex items-center justify-center text-fadeOrange font-raleway text-lg py-2 pb-6 ">
            <span>© 2023 Emmanuel Okon </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
