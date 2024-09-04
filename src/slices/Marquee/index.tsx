import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { MdStars } from "react-icons/md";

/**
 * Props for `Marquee`.
 */
export type MarqueeProps = SliceComponentProps<Content.MarqueeSlice>;

/**
 * Component for "Marquee" Slices.
 */
const Marquee = ({ slice }: MarqueeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full"
    >
      <div className="marquee-container w-full bg-brightorange py-4">
        <div className="marquee-content flex text-2xl lg:text-5xl text-concretewhite text-extrabold overflow-hidden">
          <p>{slice.primary.slogan1}</p>
          <p>{slice.primary.slogan2}</p>
          <p>{slice.primary.slogan3}</p>
          <p>{slice.primary.slogan1}</p>
          <p>{slice.primary.slogan2}</p>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
