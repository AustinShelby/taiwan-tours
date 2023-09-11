import { FC } from "react";
import Link from "next/link";

export const TourCard: FC<{ tour: any }> = ({ tour }) => {
  return (
    <div className="shadow-lg bg-white rounded-sm hover:-translate-y-4 transition-transform duration-300 relative flex flex-col">
      <div className="">
        <img
          className="aspect-square object-cover w-full h-full object-center"
          src={`${tour.content?.main_image.filename}/m/480x480`}
          alt={tour.content?.main_image.alt}
          height={480}
          width={480}
        />
        <div className="absolute left-0 top-8 px-4 py-3 bg-white shadow">
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
                    tour.content?.star_rating >= index + 1 ? "fill-current" : ""
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
        </div>
      </div>
      <div className="p-4 lg:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex gap-4 flex-row justify-between items-baseline">
            <h3 className="text-lg lg:text-2xl font-jakarta font-bold">
              {tour.content?.name}
            </h3>
            <p className="text-lg lg:text-2xl font-jakarta font-black">
              {Number(tour.content?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "TWD",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-current text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-400 uppercase font-bold ml-2 text-xs lg:text-sm tracking-wide">
              {tour.content?.location}, Taiwan
            </p>
          </div>
        </div>

        <p className="hover:underline mt-8 font-bold text-sm lg:text-base">
          View Tour {">"}
        </p>
      </div>

      <Link className="absolute inset-0" href={`/tours/${tour?.slug}`}></Link>
    </div>
  );
};
