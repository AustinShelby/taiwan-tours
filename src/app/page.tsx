import { curryFetch } from "@/utils/curryFetch";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { draftMode } from "next/headers";

// TODO: Will setting preview mode not make this route SSG
// TODO: Setting fetchCache = "auto" will make this page static.
const fetchHomePage = async () => {
  // const isEnabled = process.env.PREVIEW === "true";
  const { isEnabled } = draftMode();
  console.log(`Fetching home page`);
  console.log(`Preview mode ${isEnabled ? "ON" : "OFF"}`);
  const client = getStoryblokApi();
  // TODO: using draftMode() stops this page from being PREVIEWally generated.
  // TODO: Provide custom fetch function to getStory where the cache property is set depending on if
  // TODO: draftMode() is enabled
  const response = await client.getStory("home", {
    version: isEnabled ? "draft" : "published",
    resolve_relations: "tour_list.tours",
  });
  return response.data.story;
};
// https://localhost:3010/api/draft?secret=MY_SECRET_TOKEN&slug=

const HomePage = async () => {
  const story = await fetchHomePage();
  // await fetch("https://127.0.0.1:3010/api", { cache: "force-cache" });
  // await curryFetch("https://test-api.austinshelby.com/");
  await fetch("https://test-api.austinshelby.com/");

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
