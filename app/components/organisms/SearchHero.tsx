import React from "react";
import Image from "next/image";
import PillActions from "@/app/components/molecules/PillActions/PillActions";

export const SearchHero = ({
  children,
  hasSearched,
}: {
  children: React.ReactNode;
  hasSearched: boolean;
}) => {
  return (
    <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-center px-4 pt-32 sm:px-12 sm:pt-4">
      <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row">
        <div className="w-full">
          {!hasSearched ? (
            <div className="flex flex-col items-center justify-center text-center gap-3 ">
              <div>
                <h1 className="mb-4 font-roboto-mono text-4xl font-black text-[#111111] dark:text-white md:text-6xl">
                  Improve Your Notes with{" "}
                  <span className="text-blue-700">AI</span>
                </h1>
                <h2 className="mb-4 flex flex-col items-center font-roboto-mono text-xl font-light text-[#111111] dark:text-white">
                  Summarize, organize, and enhance your study materials
                  effortlessly.
                </h2>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-center font-roboto-mono text-xl font-bold text-[#111111] dark:text-white">
                <span className="inline-flex items-center gap-1">
                  AI-powered summaries to boost your learning efficiency.
                  <Image
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                    alt="✨"
                    width="32"
                    height="32"
                  />
                </span>
              </p>
            </div>
          )}
          {children}
        </div>
      </div>
      <PillActions />
    </div>
  );
};