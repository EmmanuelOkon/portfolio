import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/static";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] dark:text-white  text-teal-100 title ">
          Still not satisfied with what&nbsp;
          <span className="text-teal dark:text-teal">you</span>&nbsp;see
          here?
        </h1>
        <p className="dark:text-white text-teal-100 body tracking-wider md:mt-10 my-5 text-center">
          Reach out to me and I&apos;ll show you more.
        </p>
        <a href="mailto:emmahhokon@gmail.com">
          <MagicButton
            title="Send a mail"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center body ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {year} Emmanuel Okon
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity75 dark:bg-teal  bg-teal-100 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank" rel="noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
              {/* <img src={info.img} alt="icons" width={20} height={20} /> */}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
