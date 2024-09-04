import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Mision`.
 */
export type MisionProps = SliceComponentProps<Content.MisionSlice>;

/**
 * Component for "Mision" Slices.
 */
const Mision = ({ slice }: MisionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="mision"
      className="flex justify-start items-center w-full"
    >
      <div className="relative flex flex-wrap justify-center lg:justify-start items-start w-full min-h-[30lvh] bg-dullwhite mt-4 overflow-hidden z-50">
        <div className="flex flex-wrap md:w-[60%]">
          <h2 className="text-5xl font-extrabold text-softBlack bg-concretewhite bg-opacity-100 rounded-br-2xl p-4 mb-8">
            {slice.primary.title}
          </h2>
          <div className="text-2xl text-softBlack font-medium ml-4">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="lg:absolute top-0 right-0">
          <PrismicNextImage field={slice.primary.image} width={600} className="h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Mision;
