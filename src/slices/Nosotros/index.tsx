import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Nosotros`.
 */
export type NosotrosProps = SliceComponentProps<Content.NosotrosSlice>;

/**
 * Component for "Nosotros" Slices.
 */
const Nosotros = ({ slice }: NosotrosProps): JSX.Element => {
  const imageUrl = slice.primary.image.url;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full min-h-[45lvh] lg:h-[45vh] z-20 "
    >
      <div className="flex w-full justify-center items-center bg-cover bg-top h-full" style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
        <div className="flex flex-col justify-center items-center bg-concretewhite bg-opacity-75 p-4">
          <h2 className="text-xl md:text-5xl font-extrabold text-softBlack">{slice.primary.title}</h2>
          <div className="flex flex-col text-md md:text-2xl font-bold items-center justify-center p-4">
            <PrismicRichText field={slice.primary.descripcion} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
