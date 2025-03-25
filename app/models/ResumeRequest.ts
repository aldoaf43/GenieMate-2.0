export const AVAILABLE_ACTIONS = ["resume", "questionary", "diagram"] as const;

export type ResumeAction = typeof AVAILABLE_ACTIONS[number];


export interface ResumeRequest {
    text?: string;
    file?: File;
    actions?: ResumeAction[];
  }  