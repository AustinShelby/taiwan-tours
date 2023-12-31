import { setEnableCaching } from "@/utils/curryFetch";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  setEnableCaching(false);
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: "draft",
    starts_with: "tours/",
    is_startpage: false,
  });

  const slugs = response.data.stories.map((story) => ({
    slug: story.slug,
  }));

  return slugs;
};

const fetchTour = async (slug: string) => {
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

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: isEnabled ? "draft" : "published",
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

const TourPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const story = await fetchTour(slug);

  if (!story) {
    notFound();
  }

  return (
    <div {...storyblokEditable(story.content)}>
      <StoryblokStory story={story} />
    </div>
  );
};

export default TourPage;
