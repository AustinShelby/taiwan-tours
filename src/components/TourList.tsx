import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { TourCard } from "./TourCard";

export const TourList: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div className="bg-main py-24">
      <div
        className="max-w-2xl mx-auto px-4 lg:max-w-5xl"
        {...storyblokEditable(blok)}
      >
        <h2 className="text-5xl font-bold">{blok.heading}</h2>
        <div className={`grid mt-12 grid-cols-2 gap-8`}>
          {blok.tours.map((nestedBlok: any, index: number) => (
            <TourCard large={true} tour={nestedBlok} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
