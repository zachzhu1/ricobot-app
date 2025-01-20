import Image from "next/image";
import { Raleway } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function Home() {
  const generateImages = () => {
    const res = [];
    for (let i = 1; i <= 6; i++) {
      res.push({
        id: i,
        thumbnailSrc: `/assets/${i}-thumbnail.png`,
        thumbnailAlt: `Thumbnail ${i}`,
        bgSrc: `/assets/${i}-background.png`,
        bgAlt: `Background ${i}`,
        foreground: i === 1 ? `/assets/${i}-foreground-cutout.png` : null,
      });
    }
    return res;
  };
  const thumbnails = generateImages();

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={`w-screen h-[1200px] bg-white pt-32`}>
      <div
        className={`${raleway.variable} font-[family-name:var(--font-raleway)] h-[85%] w-full sm:h-0 bg-[#09101a]`}
      >
        {/* Background Images*/}
        <div className="relative w-full aspect-[3/2] z-0">
          {/* Modal */}
          <div className="gradient-box w-full h-full relative z-10"></div>
          <Image
            src={thumbnails[activeSlide].bgSrc}
            alt="Background"
            fill
            objectFit="cover"
          />
          {/* Foreground */}
          {thumbnails[activeSlide].foreground && (
            <div className="absolute sm:-top-[90px] -top-[70px] bottom-0 right-0 sm:w-1/2 w-2/5">
              <Image
                src={thumbnails[activeSlide].foreground!}
                alt="Overflowing Image"
                fill
                objectFit="contain"
              />
            </div>
          )}
        </div>

        <div className="cotainer mx-auto p-10 z-10 absolute top-32 h-full w-full">
          {/* Content */}
          <div className="text-white mb-20 sm:mb-40">
            <h1 className="text-[17px] sm:text-[31px] font-black uppercase leading-none max-w-32 sm:max-w-56 mb-28">
              more from rico the dog
            </h1>
            <h2 className="text-[12px] sm:text-[14px] font-extrabold uppercase w-32 h-12 border-4 rounded-l-[1.5rem] rounded-r-[1.5rem] flex justify-center items-center">
              <span>rico is back!</span>
            </h2>
            <h3 className="text-[49px] sm:text-[35px] font-black uppercase mb-4">
              ricobot
            </h3>
            <p className="text-[14px] md:text-[16px] font-medium max-w-[18rem] sm:max-w-[31rem] mb-8">
              Charge into a brand-new supersized adventure with RICO across 50
              exciting and diverse worlds, available now on PS5!
            </p>
            <button className="px-6 py-2 bg-white text-[#09101A] text-[14px] sm:text-[16px] font-black uppercase h-16 rounded-l-[2rem] rounded-r-[2rem]">
              learn more
            </button>
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4 sm:flex items-baseline justify-between sm:w-[80%]">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={thumbnail.id}
                className={`cursor-pointer ${
                  activeSlide === index ? "gradient-border" : ""
                }`}
                onClick={() => {
                  setActiveSlide(index);
                }}
              >
                <Image
                  src={thumbnail.thumbnailSrc}
                  alt={thumbnail.thumbnailAlt}
                  width={activeSlide === index ? 180 : 120}
                  height={activeSlide === index ? 180 : 120}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
