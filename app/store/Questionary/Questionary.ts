import { QA } from "@/app/models";
import { atom } from "jotai";

export const QaAtom = atom<QA | null>(null);