import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/services";
import { ResumeRequest, ResumeResponse, ResumeResponseData } from "@/app/models";

export const useResume = () => {
  return useMutation<ResumeResponseData, Error, ResumeRequest>({
    mutationFn: async (requestBody: ResumeRequest) => {
      const formData = new FormData();
      if (requestBody.file) {
        formData.append("file", requestBody.file);
      }

      if (requestBody.text) {
        formData.append("text", requestBody.text);
      }
      formData.append("actions", JSON.stringify(requestBody.actions));
      
      const response = await fetchData<ResumeResponse>(
        "process_content",
        "POST",
        formData
      );

      if (!response.success || !response.data) {
        throw new Error(response.message || "API request failed");
      }

      const resp : ResumeResponseData = response.data.response as ResumeResponseData;

      return resp;
      
    },
  });
};