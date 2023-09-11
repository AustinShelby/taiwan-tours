"use client";
import { storyblokInit, SbBlokData } from "@storyblok/react/rsc";
import { PropsWithChildren, FC } from "react";
import { Page } from "./Page";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Hero } from "./Hero";
import { HeroAlt } from "./HeroAlt";
import { Tour } from "./Tour";
import { TourList } from "./TourList";
import { Testimonial } from "./Testimonial";
import { CallToAction } from "./CallToAction";
import { SiteData } from "./SiteData";

const CustomFallbackComponent: FC<{ blok: SbBlokData }> = ({ blok }) => {
  return (
    <div className="bg-red-50 border rounded border-red-600 px-8 py-4">
      <p className="text-center text-red-600">
        No component defined for <strong>{blok.component}</strong>
      </p>
    </div>
  );
};

storyblokInit({
  components: {
    page: Page,
    grid: Grid,
    feature: Feature,
    hero: Hero,
    hero_alt: HeroAlt,
    testimonial: Testimonial,
    call_to_action: CallToAction,
    tour: Tour,
    tour_list: TourList,
    site_data: SiteData,
  },
  enableFallbackComponent: true,
  customFallbackComponent: CustomFallbackComponent,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
