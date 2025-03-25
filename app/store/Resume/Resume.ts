import { atom } from "jotai";
import { ResumeAction, ResumeRequest, ResumeResponseData } from "@/app/models";

export const searchAtom = atom<ResumeRequest>();
export const responsesAtom = atom<ResumeResponseData[]>([]);
export const inputAtom = atom<string>("");
export const inputFileAtom = atom<File | null>(null);
export const actionsAtom = atom<ResumeAction[]>(["resume"]);

