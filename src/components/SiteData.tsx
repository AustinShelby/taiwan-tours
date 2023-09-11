import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const SiteData: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="component py-4">
      <p className="opacity-80">{blok.footer}</p>
    </div>
  );
};
