import React from 'react';
import { ImageField, KeyTextField, RichTextField } from '@prismicio/types';

type ItemProps = {
    name: KeyTextField;
    comment: RichTextField;
    image: ImageField<never>;
}

type TestimonialProps = {
    item: ItemProps;
}

const Testimonial: React.FC<TestimonialProps> = ({item}) => {
  return (
    <div className="testimonialBox">
        <div className="testimonial">
            <div className="h4">{item.name}</div>
        
            <div className="content">
            <div className="h3">Fam ?</div>
            <p>This is Pradeep Saran, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial