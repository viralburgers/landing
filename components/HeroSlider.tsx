import * as React from "react";

// Fonts
import { DrukTrial, DrukWideTrial } from "@/app/fonts/index";

// Next js
import Image from "next/image";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

// Utils
import { cn } from "../lib/utils";
import { Burger } from "@/types";

interface Props {
  data: Burger[];
}

export function HeroSlider({ data }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            className="relative w-full h-screen flex flex-col-reverse xl:flex-row p-0"
            key={index}
          >
            <div className="z-10 xl:w-2/5 place-content-center p-10 text-background h-full bg-secondary">
              <span
                className={cn(
                  DrukTrial.className,
                  "uppercase text-3xl xl:text-6xl"
                )}
              >
                {item.tagline}
              </span>
              <h2
                className={cn(
                  DrukWideTrial.className,
                  "uppercase font-black text-5xl xl:text-8xl -tracking-[.12em] leading-[.80em] xl:leading-[.80em] mb-4 xl:mb-8 -translate-y-2.5 -translate-x-2.5 mt-1 md:mt-0"
                )}
              >
                {item.name}
              </h2>
              <p className="text-xl mb-8">{item.short_desc}</p>
              <Button variant="outline" className="rounded-none">
                Ver burger
              </Button>
            </div>
            <div className=" w-full">
              <div className="bg-black/80 absolute top-0 left-0 w-full h-full"></div>
              <Image
                src="/images/434328900_18047273908720836_3661547227001593026_n.jpg"
                alt=""
                width={1920}
                height={1080}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
