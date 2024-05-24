import React from "react";
import { cn } from "../lib/utils";
import { DrukTrial } from "../app/fonts";

const Message = () => {
  return (
    <div className="whitespace-nowrap">
      {/* Right */}
      <div className="overflow-hidden flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <p
            key={index}
            className={cn(
              DrukTrial.className,
              "uppercase text-7xl text-background/30 text-center font-bold message-item inline-block animate-slideRight"
            )}
          >
            La calidad no se negocia
          </p>
        ))}
      </div>
      {/* Left */}
      <div className="overflow-hidden flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <p
            key={index}
            className={cn(
              DrukTrial.className,
              "uppercase text-7xl text-background/30 text-center font-bold message-item inline-block animate-slideLeft"
            )}
          >
            La calidad no se negocia
          </p>
        ))}
      </div>
    </div>
  );
};

export default Message;
