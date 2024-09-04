import React from 'react';
import { ImageField, KeyTextField, RichTextField, NumberField } from '@prismicio/types';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { isFilled } from '@prismicio/client';
import StarRating from '@/components/StarRating';

type ItemProps = {
    name: KeyTextField;
    calificacion: KeyTextField;
    comment: RichTextField;
    image: ImageField<never>;
}

type TestimonialProps = {
    item: ItemProps;
}

const Testimonial: React.FC<TestimonialProps> = ({item}) => {
  return (
    <div className="testimonialBox mx-8">
        <div className="testimonial ">
            <div className="flex justify-center items-start">
                <div className='rounded-full border-2 border-brightorange overflow-hidden w-24 h-24'>
                    {isFilled.image(item.image) 
                    ? <PrismicNextImage field={item.image} className="w-full h-full object-cover" /> 
                    : <img src="/user.jpeg" alt="user" className="w-full h-full object-cover" />
                    }
                </div>
            </div>
            <div className="h4 mt-4">{item.name}</div>
            <div className="h3 mt-1"><StarRating rating={parseInt(item.calificacion+'')} /></div>
            <div className="content text-xl mt-2">
                <PrismicRichText field={item.comment} />
            </div>
        </div>
    </div>
  )
}

export default Testimonial