import { atom } from "jotai";
import { ResumeRequest, ResumeResponse } from "@/app/models";

export const searchAtom = atom<ResumeRequest>();
export const responsesAtom = atom<ResumeResponse[]>([]);
export const inputAtom = atom<string>("");
export const inputFileAtom = atom<File | null>(null);

