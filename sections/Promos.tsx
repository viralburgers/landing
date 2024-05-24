import React from "react";

// Fonts
import { DrukTrial } from "@/app/fonts/index";

// Utils
import { cn } from "../lib/utils";
import Image from "next/image";

export const Promos = () => {
  return (
    <section>
      <MessageBar />
      <div className="bg-secondary p-10">
        <PromoCards />
      </div>
    </section>
  );
};

function MessageBar() {
  return (
    <div
      className={cn(
        DrukTrial.className,
        "bg-accent py-2 text-center uppercase text-4xl"
      )}
    >
      NO TE PIERDAS LAS PROMOS ANTI-CRISIS
    </div>
  );
}

function PromoCards() {
  return (
    <ul className="grid xl:grid-cols-3 gap-3 relative">
      {Array.from({ length: 6 }).map((_, index) => (
        <li>
          <Image
            src="/images/306738363_109120358523597_7150591617958190726_n.jpg"
            alt=""
            width={1920}
            height={1080}
          />
        </li>
      ))}
    </ul>
  );
}
