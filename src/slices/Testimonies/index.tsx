import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Testimonial from "@/components/Testimonial";

/**
 * Props for `Testimonies`.
 */
export type TestimoniesProps = SliceComponentProps<Content.TestimoniesSlice>;

/**
 * Component for "Testimonies" Slices.
 */
const Testimonies = ({ slice }: TestimoniesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="testimonios"
      className="flex justify-start items-center w-full"
    >
      <h2 className="text-5xl font-extrabold text-softBlack bg-dullwhite bg-opacity-55 rounded-br-2xl p-4">{slice.primary.title}</h2>
      <div>
        {slice.primary.card.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
