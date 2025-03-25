import React from "react";
import { useAtom } from "jotai";
import { inputFileAtom } from "@/app/store";
import { PaperClipIcon } from "@heroicons/react/24/solid";

export const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useAtom(inputFileAtom);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
    event.target.value = "";
  };

  return (
    <div className="absolute bottom-3 left-3 flex flex-row gap-2 items-center justify-center">
    <label className=" cursor-pointer flex items-center justify-center mb-0">
        <PaperClipIcon className={`h-4 w-4 hover:text-main" ${selectedFile? "text-main":"text-white"}`} />
        <input
        type="file"
        className="hidden"
        onChange={handleFileChange} // Handle file uploads
        accept=".pdf,.txt,.doc,.docx"
        />
    </label>
    {selectedFile && (
        <div className="text-sm flex flex-row">
         <span>{selectedFile.name}</span>
        </div>
      )}
    </div>
  );
};
