import React from "react";
import Image from "next/image";

import first_img from "../../public/img/img-1.jpg";
import second_img from "../../public/img/img-2.jpg";
import axios from "axios";

export default async function ImagePage() {
  const searchURL = "https://api.pexels.com/v1/search";
  const apiKey = "KljHUtAfB6qfaXgxgQ7BjUpklGuML3vyfFS3vE9HSPbw7mdeKNIas5Er";

  const dataImage1 = await axios
    .get(searchURL, {
      params: {
        query: "summer",
        per_page: 7,
      },
      headers: {
        Authorization: apiKey,
      },
    })
    .then((data) => data);

    const image1 = dataImage1.data.photos[0].src.original;
    const image2 = dataImage1.data.photos[1].src.original;
    const image3 = dataImage1.data.photos[2].src.original;
    const image4 = dataImage1.data.photos[3].src.original;
    const image5 = dataImage1.data.photos[4].src.original;
    const image6 = dataImage1.data.photos[5].src.original;
    const image7 = dataImage1.data.photos[6].src.original;
  

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn&apos;t care if you live or
              die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden relative rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={image1}
                          alt="Image 1"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image1}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                         src={image2}
                         alt="Image 1"
                         className="h-full w-full object-cover object-center"
                         priority
                         blurDataURL={image2}
                         fill={true}
                         placeholder="blur"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                          src={image3}
                          alt="Image 1"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image3}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                          src={image4}
                          alt="Image 1"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image4}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                          src={image5}
                          alt="Image 1"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image5}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                          src={image6}
                          alt="Image 6"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image6}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                      <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <Image
                          src={image7}
                          alt="Image 7"
                          className="h-full w-full object-cover object-center"
                          priority
                          blurDataURL={image7}
                          fill={true}
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
