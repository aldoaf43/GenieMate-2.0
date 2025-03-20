import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ToggleMode } from "@/app/components";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-20 w-full dark:bg-dark-background sm:relative border-b-4 border-border dark:border-darkNavBorder">
      <div className="px-4 py-6 sm:px-12">
        <Disclosure as={"nav"}>
          {({ open }) => (
            <>
              <div className="relative flex items-center justify-between">
                {/* Left Side Logo and Navigation Links */}
                <div className="flex items-center gap-8">
                  <Link href="/">
                    <div className="flex items-center ">
                      <Image
                        src="/images/genie.webp"
                        alt="Genie Mate Logo"
                        width={40}
                        height={40}
                        className="block dark:hidden"
                      />
                      <Image
                        src="/images/genie-dark.webp"
                        alt="Genie Mate Logo Dark"
                        width={40}
                        height={40}
                        className="hidden dark:block"
                      />
                      <h2 className="cursor-pointer font-public-sans text-2xl font-black">
                        Genie Mate
                      </h2>
                    </div>
                  </Link>
                  {/* Desktop Links */}
                  {/* <div className="hidden items-center gap-10 md:flex">
                    <NavLinks />
                  </div> */}
                </div>
                {/* Right Side User Menu and Action Button */}
                <div className="hidden items-center gap-8 md:flex">
                <ul className="flex flex-col gap-4 sm:flex-row md:items-center md:gap-8">
                  <li>
                    <ToggleMode />
                  </li>
                </ul>
                </div>
                <div className="flex space-x-4 md:hidden">
                  {/* <ToggleMode /> */}
                  <DisclosureButton className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="size-6 dark:text-white" />
                    ) : (
                      <Bars3Icon className="size-6 dark:text-white" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
              {/* Mobile Dropdown Menu */}
              <DisclosurePanel className="">
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-20 z-50 w-full border-t bg-white shadow-lg dark:border-t-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="mt-4 space-y-4 p-4">
                      {/* <NavLinks /> */}
                      <ul className="flex flex-col gap-4 sm:flex-row md:items-center md:gap-8">
                        <li>
                          <ToggleMode />
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
