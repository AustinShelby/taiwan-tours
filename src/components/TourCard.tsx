import { FC } from "react";
import Link from "next/link";

export const TourCard: FC<{ tour: any; large: boolean }> = ({
  tour,
  large,
}) => {
  return (
    <Link href={`/tours/${tour?.slug}`}>
      <div
        className={`relative h-[428px] bg-red-400 hover:-translate-y-3 duration-300 hover:shadow-xl transition-all`}
      >
        <img
          className="object-cover w-full h-full object-center"
          src={tour.content?.main_image.filename}
          alt={tour.content?.main_image.alt}
        />
        <div
          style={{
            background: `linear-gradient(0deg, #0F1422cc 20%, #0F142200 80%)`,
          }}
          className="inset-0 absolute p-12 flex flex-col justify-end"
        >
          <p className="text-white text-xs uppercase text-opacity-80">
            {tour.content?.location}
          </p>
          <h2 className="font-jakarta text-3xl font-extrabold text-white mt-2">
            {tour.content?.name}
          </h2>
          <div className="flex justify-between items-baseline mt-2">
            <div className="flex">
              {Array(5)
                .fill(undefined)
                .map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className={`w-6 h-6 stroke-current text-secondary ${
                      tour.content?.star_rating >= index + 1
                        ? "fill-current"
                        : ""
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
            <p className="text-white tabular-nums slashed-zero">
              {Number(tour.content?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "TWD",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
