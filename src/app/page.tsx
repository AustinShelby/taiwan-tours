import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/home`, {
    version: "draft",
    resolve_relations: "tour_list.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  return (
    <div>
      <StoryblokStory
        bridgeOptions={{ resolveRelations: ["tour_list.tours"] }}
        story={story}
      />
    </div>
  );
};

export default HomePage;
