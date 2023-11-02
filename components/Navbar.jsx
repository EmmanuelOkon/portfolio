"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { RiMenu2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
// import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const navigation = [{ name: "Projects", href: "/projects" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ pathname = "" }) {
  return (
    <Popover className="w-full z-50 bg-[#041F31] shadow-xl py-2 ">
      <div className="mx-auto px-6 lg:px-20 ">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex flex-shrink-0 items-center justify-start  md:w-0 md:flex-1">
            <a className="flex" href="/">
              <Image
                className="h-10 w-auto"
                width={50}
                height={50}
                src="/man.png"
                alt="Logo"
                priority
              />
            </a>
            <p className="hidden md:block text-white ml-4 md:text-2xl font-bold font-raleway">
              Emmahh
              <span className="text-orange ml-2 font-roboto">{`</>`}</span>
            </p>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center ">
              <RiMenu2Fill
                className="h-6 w-6 outline-0 text-orange ring-0 focus:outline-0 focus:ring-0"
                strokeWidth="1"
                stroke="#EF7C00"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex items-center justify-end z-50 space-x-4"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <span
                    className={classNames(
                      isActive
                        ? "text-orange font-bold text-lg border-b-2 border-orange"
                        : " hover:text-orange  border-blue",
                      "hidden items-center px-2 py-2 text-base font-normal m-0 text-white font-poppins"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <div className="hidden md:flex items-center justify-end">
              <a
                href="mailto:emmahhokon@gmail.com"
                className="flex items-center justify-center text-base font-medium rounded-lg text-white bg-orange hover:bg-fadeOrange hover:text-orange border-2 lg:font-semibold border-orange md:py-2 md:text-lg md:px-4 hover:scale-110"
              >
                Contact Me
              </a>
            </div>
          </Popover.Group>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-20 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-lg bg-white divide-purple-10">
            <div className="pt-4 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400">
                    <GrClose
                      className="h-6 w-6"
                      strokeWidth="3"
                      stroke="#EF7C00"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 text-left">
              <div className="grid gap-y-4 gap-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={classNames(
                          isActive
                            ? "text-blue font-extrabold text-lg"
                            : "text-grey hover:border-b-2",
                          "hidden flx items-center px-2 py-2 text-base font-normal"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    className="flex items-center justify-center text-lg font-medium rounded-md text-white bg-orange hover:bg-fadeOrange hover:text-orange border-2 lg:font-semibold border-orange py-2  px-4"
                    href="mailto:emmahhokon@gmail.com"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
