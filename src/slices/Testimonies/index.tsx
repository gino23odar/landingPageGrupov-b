import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for testimonies (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Testimonies;
