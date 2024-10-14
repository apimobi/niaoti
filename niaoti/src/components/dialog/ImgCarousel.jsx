import { useState, useContext } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { DialogClose } from "@radix-ui/react-dialog";
import { DialogContext } from "../../context/DialogContext";

const ImgCarrousel = () => {
    const {data} = useContext(DialogContext);

    console.log('data:', data);

    return (
        <DialogContent className="bg-black sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
            <DialogHeader>
                <DialogClose className="ring-offset-black" />
                <VisuallyHidden.Root>
                    <DialogTitle>{data.title}</DialogTitle>
                    <DialogDescription>{data.description}</DialogDescription>
                </VisuallyHidden.Root>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto m-10"
                        >
                        <CarouselContent>
                            {data.images.map(({image, title}, index) => (
                            <CarouselItem key={index} className="md:basis-1/1">
                                <div className="p-1">
                                    <img className={'mx-auto'} src={image} alt={title} />
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
            </DialogHeader>
            <DialogFooter></DialogFooter>
            {/* <DialogClose className="bg-white"/> */}
        </DialogContent>
    )
}

export default ImgCarrousel;
