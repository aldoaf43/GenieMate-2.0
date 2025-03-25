export interface ResumeResponse {
  message: string;
  response?: {
    resume: {
      filename: string;
      preview: string;
      download_url: string;
    };
    questionary: string;
    diagram: string;
  };
}  

export interface ResumeResponseData {
  resume: {
    filename: string;
    preview: string;
    download_url: string;
  };
  questionary: string;
  diagram: string;
};