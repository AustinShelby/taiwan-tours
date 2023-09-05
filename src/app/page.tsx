import { curryFetch } from "@/utils/curryFetch";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
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

// TODO: Live Edit mode works on this page. Not on other pages

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
