import React from "react";
import { ResumeResponseData } from "@/app/models";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Skeleton, QuestionaryCarousel } from "@/app/components";


type Props = {
  responses: ResumeResponseData[];
  isPending: boolean;
  error: Error | null;
  onRetry: () => void;
};

export const  ResponseDisplay: React.FC<Props> = ({ responses, isPending, error, onRetry }) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-16 sm:px-12 sm:pt-4">
      <div className="relative max-w-4xl mx-auto w-full flex flex-col items-start justify-center gap-4">
        
        {error && (
          <div className="mt-4 p-4 rounded-lg shadow-md w-full">
            <p>⚠️ <strong>{error.message}</strong></p>
            <button
              onClick={onRetry}
              className=" rounded-3xl w-full sm:w-auto px-4 text-black py-2 text-base flex items-center gap-2 dark:text-white dark:border-gray-500 border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Retry 🔄
            </button>
          </div>
        )}
        {!error && responses.map((response, index) => {
          const elements = [];

          if (response.resume) {
            elements.push(
              <Button
                key={"resume-"+index}
                onClick={()=> downloadFile(response.resume.download_url, response.resume.filename)}
                variant={"default"}
                className=" flex items-center justify-between h-auto gap-5"
              >
                <div className="flex flex-col items-start gap-1">
                  <p className="text-sm font-bold">{response.resume.filename}</p>
                  <p className="text-xs">PDF Document 📄</p>
                </div>
                <ArrowDownTrayIcon className="h-5 w-5" />
              </Button>
            );
          }
          

          if (response.questionary) {
            const qa = parseQA(response.questionary);
            const intro = parseIntro(response.questionary);
            elements.push (
              <div key={"questionary-"+index} className="mt-4 p-4" style={{ alignSelf: "center" }}>
                <p>📝 {intro}</p>
                <QuestionaryCarousel data={qa} />
              </div>
              
            );
          }

          return <React.Fragment key={`response-${index}`}>{elements}</React.Fragment>;
        })}
        
        {isPending && (
          <div className="space-y-2">
          <Skeleton className="h-4 w-100 sm:w-50" />
          <Skeleton className="h-4 w-80 sm:w-40" />
          </div>
        )}
      </div>
    </div>
  );
};

function downloadFile(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = "http://localhost:8000/api"+url;
  a.download = filename; // triggers download
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function parseQA(text: string): { question: string; answer: string }[] {
  const regex = /(?:^|\n)(\d+)\.\s\*\*(.*?)\*\*\s*[\n\r]+([\s\S]*?)(?=(?:\n\d+\.|\n*$))/g;

  const result = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [, , question, answer] = match;
    result.push({
      question: question.trim(),
      answer: answer.trim().replace(/\n+/g, ' '), // Optional: flatten line breaks in answer
    });
  }

  return result;
}

export function parseIntro(text: string): string {
  const firstQuestionMatch = text.match(/(\d+)\.\s\*\*/);

  let intro = "";
  if (firstQuestionMatch) {
    intro = text.slice(0, firstQuestionMatch.index).trim();
  }

  return intro;
}