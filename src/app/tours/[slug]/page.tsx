import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

// localhost:3000/api/draft?secret=MY_SECRET_TOKEN&slug=/tours/kaohsiung-culture-tour

// TODO: What happens when someone builds the website, runs it, and creates a new tour in Storyblok?
// TODO: Will this show it. Yes. which is weird.
// TODO: Make dynamic on staging, static on production
export const generateStaticParams = async () => {
  // const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: true ? "draft" : "published",
    starts_with: "tours/",
    is_startpage: false,
  });

  const slugs = response.data.stories.map((story) => ({
    slug: story.slug,
  }));

  console.log(slugs);

  return slugs;
};

export const dynamicParams = process.env.STATIC === "true" ? false : true;

const fetchTour = async (slug: string) => {
  console.log(`Fetching tour: ${slug}`);
  try {
    const { isEnabled } = draftMode();
    const client = getStoryblokApi();
    const response = await client.getStory(`tours/${slug}`, {
      version: isEnabled ? "draft" : "published",
    });

    return response.data.story;
  } catch (e) {
    return undefined;
  }
};

const TourPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const story = await fetchTour(slug);

  if (!story) {
    console.log(`Not found: ${slug}`);
    notFound();
  }

  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory story={story} />
    </div>
  );
};

export default TourPage;
