import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export const CallToAction: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="bg-secondary">
      <div className="component py-16">
        <h2 className="text-3xl text-black md:text-4xl font-jakarta font-bold text-center">
          {blok.title}
        </h2>
        <div className="flex justify-center mt-8">
          <Link
            className="px-8 py-3 rounded-sm bg-black shadow-sm text-white text-lg font-bold block"
            href={`/tours/`}
          >
            {blok.link_name}
          </Link>
        </div>
      </div>
    </div>
  );
};
