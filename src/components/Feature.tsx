import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Feature: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-main rounded-sm p-8 shadow-sm"
    >
      <h3 className="text-3xl font-bold">{blok.title}</h3>
      <p className="text-lg mt-6">{blok.content}</p>
    </div>
  );
};
