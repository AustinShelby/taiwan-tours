import { curryFetch } from "@/utils/curryFetch";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: isEnabled ? "draft" : "published",
    resolve_relations: "tour_list.tours",
  });
  return response.data.story;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: isEnabled ? "draft" : "published",
    resolve_relations: "tour_list.tours",
  });

  const content = response.data.story.content;

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      images: [
        {
          url: `${content.image.filename}/m/1200x630/filters:quality(75)`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const HomePage = async () => {
  const story = await fetchHomePage();

  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory
        bridgeOptions={{ resolveRelations: ["tour_list.tours"] }}
        story={story}
      />
    </div>
  );
};

export default HomePage;
