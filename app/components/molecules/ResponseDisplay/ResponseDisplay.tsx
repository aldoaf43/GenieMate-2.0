import React from "react";
import { ResumeResponse } from "@/app/models";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";


type Props = {
  responses: ResumeResponse[];
  isPending: boolean;
  error: string | null;
  onRetry: () => void;
};

export const  ResponseDisplay: React.FC<Props> = ({ responses, isPending, error, onRetry }) => {
  return (
    <div className="mx-auto mt-4 flex max-w-5xl flex-col items-center justify-center px-4 pt-16 sm:px-12 sm:pt-4">
      <div className="relative max-w-4xl mx-auto w-full">
        
        {error && (
          <div className="mt-4 p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white w-full">
            <p>⚠️ <strong>{error}</strong></p>
            <button
              onClick={onRetry}
              className=" rounded-3xl w-full sm:w-auto px-4 bg-white text-black py-2 text-base flex items-center gap-2 dark:bg-dark-foreground dark:text-white dark:border-gray-500 border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Retry 🔄
            </button>
          </div>
        )}
        {!error && responses.map((response, index) => {
          if (response.blob) {
            const fileUrl = URL.createObjectURL(response.blob);
            return (
              <a key={index}
                  href={fileUrl} 
                  download={response.fileName} 
                  // className="px-3 py-2 flex flex-row"
                  className=" mt-4 p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white flex flex-row items-center gap-4 w-fit hover:bg-slate-200 dark:hover:bg-slate-800 min-w-72"
                >
                  
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{response.fileName}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PDF Document 📄</p>
                </div>
                <ArrowDownTrayIcon className="h-5 w-5" />
              </a>
            );
          } else if (response.response) {
            return <div key={index} className="mt-4 p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white w-fit">
              <Markdown remarkPlugins={[remarkGfm]}>
                {response.response}
              </Markdown>
            </div>
          }
        })}
        
        {isPending && (
          <div className="mt-4 p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white w-full">
            <span className="animate-pulse text-white">Generating knowledge...</span>
          </div>
        )}
      </div>
    </div>
  );
};