"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import { Page } from "./Page";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Hero } from "./Hero";
import { HeroAlt } from "./HeroAlt";
import { Tour } from "./Tour";
import { TourList } from "./TourList";

storyblokInit({
  accessToken: "ckbY4lg0OtsQ9U6PCjI7rgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    feature: Feature,
    hero: Hero,
    hero_alt: HeroAlt,
    tour: Tour,
    tour_list: TourList,
  },
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
