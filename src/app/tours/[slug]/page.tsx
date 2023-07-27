import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: "draft",
    starts_with: "tours/",
    is_startpage: 0,
  });

  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

const fetchTour = async (slug: string) => {
  const client = getStoryblokApi();

  const response = await client.getStory(`tours/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const TourPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const story = await fetchTour(slug);

  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory story={story} />
    </div>
  );
};

export default TourPage;
