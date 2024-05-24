"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "../lib/utils";

const BurgersRain = ({ images }: Props) => {
  const [animatedImages, setAnimatedImages] = useState<RainImage[]>([]);
  const [orderLaunch, setOrderLaunch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (orderLaunch < images.length) {
        setAnimatedImages((prevImages) => [...prevImages, images[orderLaunch]]);
        setOrderLaunch((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [images, orderLaunch]);

  return animatedImages.map((item) => (
    <Image
      key={item.id}
      className={cn(item.styles, "w-32 xl:w-fit")}
      src={item.url}
      alt={item.url}
      width={item.size}
      height={item.size}
    />
  ));
};

interface Props {
  images: RainImage[];
}

interface RainImage {
  id: number;
  url: string;
  styles: string;
  size: number;
}

export default BurgersRain;
