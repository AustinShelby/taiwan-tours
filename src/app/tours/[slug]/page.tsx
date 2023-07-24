import { TourCard } from "@/components/TourCard";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

const fetchTour = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/tours/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const TourPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const story = await fetchTour(slug);

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
};

export default TourPage;
