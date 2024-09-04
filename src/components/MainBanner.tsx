'use client'

import React, { useEffect, useRef} from 'react'
import Typed from 'typed.js';

const MainBanner = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    const typed = new Typed(ref.current, {
      strings: ['asegurada.', 'comprobada.', ],
      typeSpeed: 100,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    }
  }, []);

  return (
          <span ref={ref} className='typewriter p-2 ml-12 xl:ml-20 text-brightorange'>comprobada</span>
  )
}

export default MainBanner