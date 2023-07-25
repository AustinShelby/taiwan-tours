import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export const fetchCache = "only-no-store";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: "draft",
    resolve_relations: "tour_list.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  console.log(story.content.blocks[0].content);

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
