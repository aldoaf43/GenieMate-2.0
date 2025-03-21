import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { Button, FileUploader, Textarea } from "@/app/components";

export const SearchBar = ({
  searchTerm,
  handleInputChange,
  handleButtonClick,
  placeholder,
  fileUploaded
}: {
  searchTerm: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleButtonClick: () => void;
  placeholder: string;
  fileUploaded: boolean
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <Textarea
          className="w-full rounded-xl border border-gray-300 p-4 pr-14 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none shadow-sm dark:bg-dark-foreground dark:text-white dark:border-none"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          onKeyDown={(e) => e.key === "Enter" && handleButtonClick()}
          rows={3}
        />
        <FileUploader/>
        

        <Button
          className="absolute bottom-4 right-3 flex h-8 w-8 items-center justify-center shadow-md"
          variant={!searchTerm.trim() && fileUploaded?"noShadow" : "default"}
          onClick={handleButtonClick}
          disabled={!searchTerm.trim() && fileUploaded}
        >
          <ArrowUpIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};