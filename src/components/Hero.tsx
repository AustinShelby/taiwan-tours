import { FC } from "react";
import {
  storyblokEditable,
  renderRichText,
  RichTextSchema,
} from "@storyblok/react/rsc";

export const Hero: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-main pt-32 pb-16">
      <div className="component" {...storyblokEditable(blok)}>
        <div
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.heading, {
              schema: Object.assign({}, RichTextSchema, {
                nodes: {
                  heading: (node: any) => ({
                    tag: [
                      {
                        tag: `h${node.attrs.level}`,
                        attrs: {
                          class:
                            "text-5xl md:text-7xl font-extrabold font-jakarta text-center text-black",
                        },
                      },
                    ],
                  }),
                },
              }),
            }),
          }}
        ></div>
        <p className="text-black text-xl mt-8 text-center">{blok.content}</p>
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
