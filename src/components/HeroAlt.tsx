import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const HeroAlt: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-main pt-32 pb-16">
      <div
        className="max-w-2xl mx-auto px-4 lg:max-w-5xl"
        {...storyblokEditable(blok)}
      >
        <h1 className="text-5xl lg:text-7xl font-bold font-jakarta text-center text-black">
          {blok.heading}
        </h1>
      </div>
    </section>
  );
};
