import { FC } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Testimonial: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="p-8 bg-secondary shadow-sm rounded-sm"
    >
      <div className="flex">
        {Array(5)
          .fill(undefined)
          .map((_, index) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={`w-6 h-6 stroke-current text-tertiary ${
                blok.rating >= index + 1 ? "fill-current" : ""
              }`}
              key={index}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
      </div>
      <p className="text-lg mt-4">{blok.testimonial}</p>
      <div className="flex items-center space-x-4 mt-4">
        <img
          className="w-8 h-8 rounded-full"
          src={blok.picture.filename}
          alt=""
        />
        <p className="text-xl font-bold">{blok.name}</p>
      </div>
    </div>
  );
};
