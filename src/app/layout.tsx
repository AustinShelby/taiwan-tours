import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
  storyblokEditable,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import Link from "next/link";
import { curryFetch } from "@/utils/curryFetch";
import { draftMode } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: curryFetch,
  },
});

const fetchSiteData = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory("site-data", {
    version: isEnabled ? "draft" : "published",
  });
  return response.data.story;
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const story = await fetchSiteData();
  return (
    <>
      <StoryblokProvider>
        <html
          lang="en"
          className={`${inter.variable} ${plus_jakarta_sans.variable}`}
        >
          <body className="font-sans">
            <header className="bg-main">
              <nav className="component py-8 flex justify-between items-baseline">
                <Link href={"/"}>Home</Link>
                <Link href={"/tours"}>Browse Tours</Link>
              </nav>
            </header>
            {children}
            <footer
              {...storyblokEditable(story.content)}
              className="bg-secondary"
            >
              <StoryblokStory story={story} />
            </footer>
          </body>
        </html>
      </StoryblokProvider>
    </>
  );
};

export default RootLayout;
