import localFont from "next/font/local";
import { Ubuntu } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const DrukTrial = localFont({
  src: [
    {
      path: "./Druk-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Druk-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Druk-Heavy-Trial.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Druk-Super-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const DrukWideTrial = localFont({
  src: [
    {
      path: "./DrukTextWide-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DrukTextWide-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./DrukTextWide-Heavy-Trial.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./DrukTextWide-Super-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
});
