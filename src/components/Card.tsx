import React, { ReactNode } from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/types';

type CardProps = {
  text: string;
  image: ImageField<never>;
  setActive: (image: ImageField<never>) => void;
}

const Card: React.FC<CardProps> = ({text, image, setActive}) => {
  return (
    <div className="card p-4 relative border-2 border-softBlack overflow-hidden" onClick={() => setActive(image)}>
      <div className="absolute inset-0 z-0">
        <PrismicNextImage field={image} className="w-full h-full object-cover" />
      </div>
      <p className="card-header relative bg-dullwhite bg-opacity-75 rounded-xl p-2 z-10">{text}</p>
    </div>
  )
}

export default Card