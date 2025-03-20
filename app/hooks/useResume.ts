import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/services";
import { ResumeRequest, ResumeResponse } from "@/app/models";

export const useResume = () => {
  return useMutation<ResumeResponse, Error, ResumeRequest>({
    mutationFn: async (requestBody: ResumeRequest) => {
      if (requestBody.file) {
        const formData = new FormData();
        if (requestBody.file) {
          formData.append("file", requestBody.file);
        }
        const response = await fetchData<Blob>(
          "file_resume",
          "POST",
          formData,
        );

        if (!response.success || !response.data) {
          throw new Error(response.message || "API request failed");
        }

        // Convert response to Blob
        const fileBlob = await response.data;

        // Extract filename from response headers
        const contentDisposition = response.headers!.get("content-disposition");
        let filename = "download.pdf";
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
          if (match && match[1]) filename = match[1];
        }
        const resp : ResumeResponse = {message: response.message!,  blob: fileBlob, fileName: filename }
        return resp;
      }else {
        const response = await fetchData<ResumeResponse>(
          "resume",
          "POST",
          requestBody
        );
  
        if (!response.success || !response.data) {
          throw new Error(response.message || "API request failed");
        }
        const resp : ResumeResponse = {message: "", response: (response.data as ResumeResponse).response};
        return resp;
      }
      
    },
  });
};