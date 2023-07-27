import { TourCard } from "@/components/TourCard";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: "draft",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: "draft",
    starts_with: "tours/",
    is_startpage: 0,
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory story={story} />
      <div className="grid grid-cols-2 gap-16 max-w-2xl mx-auto px-4 lg:max-w-5xl">
        {tours.map((tour: any, index: number) => (
          <div key={index} className={`${index === 0 ? "col-span-2" : ""}`}>
            <TourCard tour={tour} large={index === 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
