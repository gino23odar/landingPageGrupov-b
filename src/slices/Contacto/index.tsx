'use client'

import React, { useState, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PhoneWidget from "@/components/PhoneWidget";
import emailjs from '@emailjs/browser';

/**
 * Props for `Contacto`.
 */
export type ContactoProps = SliceComponentProps<Content.ContactoSlice>;

/**
 * Component for "Contacto" Slices.
 */
const Contacto = ({ slice }: ContactoProps): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', form.current!, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||'',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handleSuccess();
        },
        (error) => {
          console.log('FAILED...', error.text);
          handleFailure();
        },
      );
  };

  const handleSuccess = () =>{
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
    }, 5000);
  }
  const handleFailure = () =>{
    setFailure(true);
    setTimeout(() => {
        setFailure(false);
    }, 5000);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="contacto"
      className="bg-softBlack w-full px-12 pt-4"
    >
      <div className="flex flex-wrap justify-around items-center">
        <div className="w-1/3">
          <img src="/obreroOk.png" alt="obrero" className="w-3/4 md:w-1/2 h-full object-cover drop-shadow-lg z-50" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {success && 
              <div className='bg-green-500 text-white p-2 rounded-md'>
                  <div>Email sent successfully!</div>
              </div>
          }
          {failure && 
              <div className='bg-green-500 text-white p-2 rounded-md'>
                  <div>Sorry, there was an error.</div>
              </div>
          }
          <div className="project-wrap flex flex-col bg-black p-8 rounded-xl min-w-[30lvw]">
              <h2 className='w-full justify-center text-xl text-concretewhite'>
                  <div>Contáctanos</div>
              </h2>
              <div className="flex flex-col mb-2">
                  <label className="text-concretewhite">{slice.primary.form_name}</label>
                  <input type="text" name="user_name" className='rounded-md text-black p-2' required/>
              </div>
              <div className="flex flex-col mb-2">
                  <label className="text-concretewhite">{slice.primary.form_email}</label>
                  <input type="email" name="user_email" className='rounded-md text-black p-2' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
              </div>
              <div className="flex flex-col mb-2">
                  <label className="text-concretewhite">{slice.primary.form_number}</label>
                  <input type="text" name="user_contact" className='rounded-md text-black p-2'/>
              </div>
              <div className="flex flex-col mb-4">
                  <label className="text-concretewhite">{slice.primary.form_consulta}</label>
                  <textarea name="message"  className='rounded-md text-black p-2'/>
              </div>
              <input type="submit" value="Send" />
          </div>
      </form>
        <PhoneWidget />
      </div>
    </section>
  );
};

export default Contacto;
