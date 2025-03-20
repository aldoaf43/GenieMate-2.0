import React from "react";
import { useAtom } from "jotai";
import { inputFileAtom } from "@/app/components";
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
    <div className="absolute bottom-4 left-3 flex flex-row gap-4 items-center space-y-4">
    <label className=" cursor-pointer">
        <PaperClipIcon className="h-4 w-4 text-gray-400 hover:text-blue-600" />
        <input
        type="file"
        className="hidden"
        onChange={handleFileChange} // Handle file uploads
        accept=".pdf,.txt,.doc,.docx"
        />
    </label>
    {selectedFile && (
        <div className="text-sm text-gray-600">
          📂 {selectedFile.name}
        </div>
      )}
    </div>
  );
};
