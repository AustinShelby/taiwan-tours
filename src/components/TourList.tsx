import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { TourCard } from "./TourCard";

export const TourList: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div className="bg-main py-24">
      <div
        className="max-w-xl mx-auto px-4 md:max-w-5xl w-full"
        {...storyblokEditable(blok)}
      >
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold">
          {blok.heading}
        </h2>
        <div className={`grid mt-12 md:grid-cols-2 gap-8`}>
          {blok.tours.map((nestedBlok: any, index: number) => (
            <TourCard tour={nestedBlok} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
