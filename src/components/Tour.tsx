import { FC } from "react";
import {
  storyblokEditable,
  renderRichText,
  RichTextSchema,
  ISbNode,
} from "@storyblok/react/rsc";
import Image from "next/image";
import ReactDOMServer from "react-dom/server";
import { CallToAction } from "./CallToAction";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="pt-32 pb-16 bg-main">
      <div className="component">
        <h1 className="text-3xl md:text-5xl font-bold font-jakarta text-black">
          {blok.name}
        </h1>
        <Image
          className="object-cover w-full pt-12 object-center"
          src={blok.main_image.filename}
          width={blok.main_image.filename.split("/")[5].split("x")[0]}
          height={blok.main_image.filename.split("/")[5].split("x")[1]}
          alt={blok.main_image.alt}
          sizes="(max-width: 992px) calc(100vw - 32px), 992px"
          priority={true}
        />
        <p className="pt-12 text-lg md:text-2xl leading-relaxed">
          {blok.description}
        </p>
        <div className="flex md:flex-row flex-col-reverse gap-8 py-16 items-start">
          <div className="w-full">
            <div
              className="prose md:prose-lg prose-headings:font-jakarta max-w-none"
              dangerouslySetInnerHTML={{
                __html: renderRichText(blok.body, {
                  resolver: (component, data) => {
                    switch (component) {
                      case "call_to_action":
                        return ReactDOMServer.renderToStaticMarkup(
                          <div className="not-prose">
                            <CallToAction blok={data} />
                          </div>
                        );
                    }
                  },
                  schema: Object.assign({}, RichTextSchema, {
                    nodes: {
                      ...RichTextSchema.nodes,
                      image: (node: ISbNode) => ({
                        singleTag: [
                          {
                            tag: `img`,
                            attrs: {
                              src: `${node.attrs.src}/m/672x0`,
                              alt: node.attrs.alt,
                              loading: "lazy",
                              width: node.attrs.src.split("/")[5].split("x")[0],
                              height: node.attrs.src
                                .split("/")[5]
                                .split("x")[1],
                            },
                          },
                        ],
                      }),
                    },
                  }),
                }),
              }}
            ></div>
          </div>
          <div className="bg-white border-secondary border rounded-sm shadow-lg p-4 flex-shrink-0 w-full md:w-72 md:sticky top-32">
            <p className="text-center text-xl">{blok.name}</p>
            <p className="text-center font-bold text-xl mt-12 font-jakarta">
              {Number(blok.price).toLocaleString("en-US", {
                style: "currency",
                currency: "TWD",
                minimumFractionDigits: 0,
              })}
            </p>
            <button className="w-full bg-black px-8 py-3 rounded-sm shadow-sm mt-4 text-white font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
