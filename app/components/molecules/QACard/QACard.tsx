import { QA } from "@/app/models";
import { QaAtom } from "@/app/store";
import { useAtom } from "jotai";
import { Card, CardContent } from "@/app/components";
import React from "react";
import { cn } from "@/app/utils";

interface Props {
    item: QA;
}

export const QACard: React.FC<Props> = ({ item }) => {
    const [flipped, setFlipped] = useAtom(QaAtom);
  return (
     <Card
        className={cn(
            "duration-700 transition-transform preserve-3d cursor-pointer h-50",
            flipped === item ? "rotate-y-180" : ""
        )}
        onClick={() => setFlipped(flipped === item ? null : item)}
        >
        <CardContent className={cn("backface-hidden absolute top-0 h-full w-full flex flex-col items-center justify-center")}>
                <h3 className="text-lg font-bold">{item.question}</h3>
            </CardContent>
            
        <CardContent className={cn("rotate-y-180 backface-hidden absolute top-0 h-full w-full flex flex-col items-center justify-center")}>
            <p className="text-base font-normal">{item.answer}</p>
        </CardContent>
    </Card>
  );
};


