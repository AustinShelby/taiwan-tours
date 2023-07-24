import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const HeroAlt: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-main">
      <div
        className="max-w-2xl mx-auto px-4 lg:max-w-5xl py-16"
        {...storyblokEditable(blok)}
      >
        <h1 className="text-7xl font-extrabold font-jakarta text-center text-white">
          {blok.heading}
        </h1>
      </div>
    </section>
  );
};
