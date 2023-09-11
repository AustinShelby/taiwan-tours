import { FC } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export const Grid: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div className={`${blok.alt_style ? "bg-secondary" : "bg-main"}`}>
      <div
        className="py-16 w-full max-w-xl mx-auto px-4 md:max-w-5xl"
        {...storyblokEditable(blok)}
      >
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold">
          {blok.heading}
        </h2>
        <div
          className={`grid mt-12 ${
            blok.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          } gap-8`}
        >
          {blok.items.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  );
};
