'use client'

import { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Card from "@/components/Card";
import {PrismicNextImage} from "@prismicio/next";
import { ImageField } from '@prismicio/types';

/**
 * Props for `Servicios`.
 */
export type ServiciosProps = SliceComponentProps<Content.ServiciosSlice>;

/**
 * Component for "Servicios" Slices.
 */
const Servicios = ({ slice }: ServiciosProps): JSX.Element => {
  const [active, setActive] = useState<ImageField | null>(null)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col w-full relative justify-center min-h-[55lvh] items-start py-6 bg-dullwhite overflow-hidden"
    >
      <div>
        {active && <PrismicNextImage field={active} className="absolute w-full h-full object-cover z-10" />}
      </div>
      <h2 className="text-5xl font-extrabold p-4 mb-4 z-20 bg-concretewhite bg-opacity-55 rounded-br-2xl">{slice.primary.title}</h2>
      
      <div className="flex flex-col xl:flex-row justify-around w-full overflow-scroll gap-8 text-2xl font-bold z-20">
        {slice.primary.item.map((item, index) => (
          <Card key={index} text={item.servicio +''} image={item.image} setActive={setActive} />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
