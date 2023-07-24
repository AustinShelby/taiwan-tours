import { FC } from "react";
import {
  storyblokEditable,
  renderRichText,
  RichTextSchema,
} from "@storyblok/react/rsc";

export const Hero: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-main">
      <div
        className="max-w-2xl mx-auto px-4 lg:max-w-5xl py-16"
        {...storyblokEditable(blok)}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.heading, {
              schema: Object.assign(RichTextSchema, {
                nodes: {
                  heading: (node: any) => ({
                    tag: [
                      {
                        tag: `h${node.attrs.level}`,
                        attrs: {
                          class:
                            "text-7xl font-extrabold font-jakarta text-center text-white",
                        },
                      },
                    ],
                  }),
                },
              }),
            }),
          }}
        ></div>
        <p className="text-white text-xl mt-8 text-center">{blok.content}</p>
        <div className="w-full aspect-video mt-12">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${blok.youtube_video_id}?autoplay=0&modestbranding=1`}
            title="ServiceNow PutYesToWork"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
