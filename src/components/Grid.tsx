import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export const Grid: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div
      className="max-w-2xl mx-auto px-4 lg:max-w-5xl py-16"
      {...storyblokEditable(blok)}
    >
      <h2 className="text-5xl font-bold">{blok.heading}</h2>
      <div
        className={`grid mt-12 ${
          blok.items.length === 2 ? "grid-cols-2" : "grid-cols-3"
        } gap-8`}
      >
        {blok.items.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};
