import { FC } from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import Image from "next/image";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="pt-32 pb-16 bg-main">
      <div className="component">
        <h1 className="text-2xl md:text-5xl font-extrabold font-jakarta text-black">
          {blok.name}
        </h1>
        <Image
          className="object-cover w-full h-96 pt-12 object-center"
          src={blok.main_image.filename}
          width={blok.main_image.filename.split("/")[5].split("x")[0]}
          height={blok.main_image.filename.split("/")[5].split("x")[1]}
          alt={blok.main_image.alt}
          sizes="992px"
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
                        return `<div>hey world</div>`;
                    }
                  },
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
