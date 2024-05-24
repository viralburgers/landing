// Fonts
import { DrukTrial, DrukWideTrial } from "@/app/fonts/index";

// Utils
import { cn } from "../lib/utils";

// Components
import { Button } from "../components/ui/button";
import BurgersRain from "../components/BurgersRain";

// Data
import { Burgers } from "@/data/burgers";

const MenuPresentation = () => {
  return (
    <section className="relative flex flex-col justify-end py-20 xl:h-screen bg-secondary text-background overflow-hidden">
      <BurgersRain images={Burgers} />
      <Title />
    </section>
  );
};

const Title = () => {
  return (
    <div className="text-center uppercase z-50">
      <span className={cn(DrukTrial.className, "text-4xl xl:text-7xl ")}>
        La calidad
      </span>
      <h2
        className={cn(
          DrukWideTrial.className,
          "uppercase font-black text-5xl xl:text-9xl -tracking-[.11em] leading-[.82em] xl:leading-[.80em] mb-8 -translate-y-2.5 -translate-x-2.5 mt-1 md:mt-0"
        )}
      >
        No se <br></br>negocia
      </h2>
      <Button variant="action" className="rounded-full xl:text-lg mt-5">
        Ver menu
      </Button>
    </div>
  );
};

const Switcher = () => {
  return (
    <div className="flex gap-3">
      <Button
        variant="outline"
        className="border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-secondary min-w-24"
      >
        Burgers
      </Button>
      <Button
        variant="outline"
        className="rounded-full font-semibold hover:bg-accent hover:text-secondary min-w-24"
      >
        Choripanes
      </Button>
    </div>
  );
};

export default MenuPresentation;
