import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

// localhost:3000/api/draft?secret=MY_SECRET_TOKEN&slug=/tours

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

  return (
    <div className="" {...storyblokEditable(story.content)}>
      <StoryblokStory
        bridgeOptions={{ resolveRelations: ["tour_list.tours"] }}
        story={story}
      />
    </div>
  );
};

export default HomePage;
