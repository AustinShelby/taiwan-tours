import {
  storyblokEditable,
  StoryblokComponent,
  renderRichText,
  RichTextSchema,
} from "@storyblok/react/rsc";

import { FC } from "react";

export const Page: FC<{ blok: any }> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
