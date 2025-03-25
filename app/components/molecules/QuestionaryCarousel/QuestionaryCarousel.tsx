import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, QACard } from "@/app/components"
import { QA } from "@/app/models"
import { useAtom } from "jotai";
import { QaAtom } from "@/app/store";
import React from "react";

import { cn } from "@/app/utils"


interface Props {
    data: QA[]
}

export const QuestionaryCarousel: React.FC<Props> = ({ data }) => {
    const [flipped, setFlipped] = useAtom(QaAtom);
  
    return (
      <Carousel className="max-w-xl mx-auto">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="p-4">
              <QACard item={ item }/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }