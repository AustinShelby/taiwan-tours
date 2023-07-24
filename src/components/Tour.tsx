import { FC } from "react";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="">
      <div className="h-[600px] relative bg-blue-700">
        <img
          className="object-cover w-full h-full object-center mix-blend-multiply opacity-50 grayscale"
          src={blok.main_image.filename}
          alt=""
        />
        <div className="absolute inset-0 py-16">
          <div className="relative lg:max-w-5xl max-w-2xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-extrabold font-jakarta  text-white">
              {blok.name}
            </h1>
            <div
              className="prose prose-invert max-w-none mt-8"
              dangerouslySetInnerHTML={{
                __html: renderRichText(blok.description),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mt-8 flex gap-x-8 mx-auto px-4 lg:max-w-5xl py-16">
        <div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: renderRichText(blok.body),
            }}
          ></div>
        </div>
        <div className="bg-black p-32 w-96"></div>
      </div>
    </section>
  );
};
