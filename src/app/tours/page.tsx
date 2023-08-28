import { TourCard } from "@/components/TourCard";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  const isEnabled = process.env.PREVIEW !== "true";
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: isEnabled ? "draft" : "published",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  console.log(`Fetching all tours`);
  const isEnabled = process.env.PREVIEW !== "true";
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: isEnabled ? "draft" : "published",
    starts_with: "tours/",
    is_startpage: false,
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory story={story} />
      <div className=" bg-main py-16">
        <div className="grid md:grid-cols-2 component gap-8 ">
          {tours.map((tour: any, index: number) => (
            <TourCard tour={tour} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
