import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contacto`.
 */
export type ContactoProps = SliceComponentProps<Content.ContactoSlice>;

/**
 * Component for "Contacto" Slices.
 */
const Contacto = ({ slice }: ContactoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="contacto"
    >
      Placeholder component for contacto (variation: {slice.variation}) Slices
    </section>
  );
};

export default Contacto;
