// Fonts
import { DrukTrial } from "@/app/fonts/index";

// Utils
import { cn } from "../lib/utils";
import Message from "../components/Message";

const PlaceYourOrder = () => {
  return (
    <section className="min-h-screen w-full bg-[url('../public/images/PlaceYourOrderBackground.png')] flex flex-col items-center justify-between py-2 overflow-hidden hover:cursor-pointer group">
      <div className="w-fit flex flex-col items-center mt-10">
        <h2
          className={cn(
            DrukTrial.className,
            "uppercase text-9xl xl:text-[160px] text-background text-center leading-[.8em] font-bold transition ease-in-out duration-1000 group-hover:text-accent group-hover:scale-125"
          )}
        >
          Hace tu <br></br>pedido
        </h2>

        <video
          src="/videos/burgers.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="-translate-y-2 rounded-xl shadow-2xl shadow-black z-10"
        ></video>
      </div>

      <Message />
    </section>
  );
};

export default PlaceYourOrder;
