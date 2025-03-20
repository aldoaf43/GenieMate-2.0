import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/api";
import { ResumeRequest, ResumeResponse } from "@/app/models";

export const useResumeFile = () => {
  
  return useMutation<ResumeResponse, Error, ResumeRequest>({
    mutationFn: async (requestBody: ResumeRequest) => {
      
    },
  });
};