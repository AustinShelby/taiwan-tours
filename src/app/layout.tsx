import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: "ckbY4lg0OtsQ9U6PCjI7rgtt",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryblokProvider>
        <html
          lang="en"
          className={`${inter.variable} ${plus_jakarta_sans.variable}`}
        >
          <body className="font-sans">{children}</body>
        </html>
      </StoryblokProvider>
    </>
  );
}
