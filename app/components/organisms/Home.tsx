"use client";


import {ResponseDisplay, Navbar, SearchBar, SearchHero, Seo } from "@/app/components";
import { useAtom } from "jotai";
import { useResume } from "@/app/hooks";
import { ResumeRequest, ResumeResponseData } from "@/app/models";
import { searchAtom, responsesAtom, inputAtom, inputFileAtom, actionsAtom } from "@/app/store";

export default function Home() { 
  const [, setRequest] = useAtom(searchAtom);
  const [responses, setResponses] = useAtom(responsesAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [inputFile, setInputFile] = useAtom(inputFileAtom);
  const [selectedActions] = useAtom(actionsAtom);
  const { mutate, error, isPending } = useResume();

  const handleButtonClick = () => {
    const requestData: ResumeRequest = inputFile? { file: inputFile, actions: selectedActions } : { text: input, actions: selectedActions };

    setRequest(requestData);
    
    mutate(requestData, {
      onSuccess: (newResponse: ResumeResponseData) => {
        setResponses((prevResponses: ResumeResponseData[]) => [...prevResponses, newResponse]);
      },
    });

    setInputFile(null);
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <main>
      <Seo />
      <Navbar />
       <SearchHero hasSearched={responses.length > 0}>
        <SearchBar
          searchTerm={input}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          placeholder="Drop your notes here and let's make them better!..."
          fileUploaded={!inputFile}
        />
       </SearchHero>
       <ResponseDisplay responses={responses} isPending={isPending} error={error} onRetry={handleButtonClick} />
    </main>
  );
}
