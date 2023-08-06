import { FC } from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="pt-32 pb-16 bg-main">
      <div className="max-w-2xl lg:max-w-5xl mx-auto px-4 w-auto">
        <h1 className="text-2xl lg:text-5xl font-extrabold font-jakarta  text-black">
          {blok.name}
        </h1>
        <img
          className="object-cover w-full h-96 pt-12 object-center"
          src={blok.main_image.filename}
          alt=""
        />
        <p className="pt-12 text-lg lg:text-2xl leading-relaxed">
          {blok.description}
        </p>
        <div className="flex lg:flex-row flex-col-reverse gap-8 py-16 items-start">
          <div className="w-full">
            <div
              className="prose lg:prose-lg prose-headings:font-jakarta max-w-none"
              dangerouslySetInnerHTML={{
                __html: renderRichText(blok.body),
              }}
            ></div>
          </div>
          <div className="bg-white border-secondary border rounded-sm shadow-lg p-4 flex-shrink-0 w-full lg:w-72 lg:sticky top-32">
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
