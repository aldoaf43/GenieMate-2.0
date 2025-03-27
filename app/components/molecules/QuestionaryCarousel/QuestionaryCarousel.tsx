import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, QACard } from "@/app/components"
import { QA } from "@/app/models"
import React from "react";


interface Props {
    data: QA[]
}

export const QuestionaryCarousel: React.FC<Props> = ({ data }) => {
  
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