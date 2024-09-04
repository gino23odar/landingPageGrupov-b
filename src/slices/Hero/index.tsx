import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import MainBanner from "@/components/MainBanner";
import Ctabutton from "@/components/Ctabutton";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='flex justify-center items-center w-full min-h-[60lvh] bg-conretewhite px-1 md:px-6 mb-2'>
        <div className="relative w-full h-full">
          <div className='flex justify-center md:justify-end  items-center w-full bg-softBlack min-h-[60lvh] rounded-b-3xl rounded-tl-3xl sm:rounded-3xl md:px-8 text-concretewhite overflow-hidden'>
              <div className="flex flex-col whitespace-pre-wrap w-[60%] min-h-[50lvh] justify-center items-center text-xl md:text-5xl text-bold align-top">
                <h2 className='ml-12 tracking-tighter'>{slice.primary.hook}<br/>{slice.primary.hook2}</h2>
                <MainBanner />
                <div className="flex ml-6 xl:ml-20 mt-10">
                  <Ctabutton />
                </div>
              </div>
            <img src="/obrero.png" alt="obrero" className="w-3/4 md:w-1/2 h-full object-cover drop-shadow-lg z-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
