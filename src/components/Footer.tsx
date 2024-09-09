import React from 'react'

import {socialMedia} from '../constants';

// componente para Links cuando sean necesarios
// const FooterLink = () =>{
//   return (
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         <div className='flex flex-col items-center'>
//           <h2 className="font-bold text-xl mb-4">Nosotros</h2>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Lorem ipsum dolor sit amet</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Consectetur adipiscing elit</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Sed do eiusmod tempor</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Incididunt ut labore</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Dolore magna aliqua</a></li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <h2 className="font-bold text-xl mb-4">Servicios</h2>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Ut enim ad minim veniam</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Quis nostrud exercitation</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Ullamco laboris nisi</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Ut aliquip ex ea commodo</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Consequat</a></li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <h2 className="font-bold text-xl mb-4">Legal</h2>
//           <ul>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Excepteur sint occaecat</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Cupidatat non proident</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Sunt in culpa qui</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Officia deserunt mollit</a></li>
//             <li><a href="#" className="text-gray-400 hover:text-gray-300">Anim id est laborum</a></li>
//           </ul>
//         </div>
//       </div>
//       
//     </div>
//   )
// }

const Footer = () => {
  return (
    <div className='flex w-full p-2'>
        <div className='w-full bg-white bg-opacity-10 rounded'>
            <div className="w-full flex justify-around items-center md:flex-row flex-col p-6 border-t-[1px] border-t-[#3F3E45] rounded-lg">
              <div className='flex old:flex-row flex-col items-center justify-evenly overflow-hidden '>
                {/* <a src={logo} alt="logo" width={} className='object-contain block' /> */}
                <img src='/logos/logo.jpg' alt='logo' className="w-28 h-auto z-10 object-contain" />
              </div>
              
              {/* <div className='flex flex-grow justify-between 2xl:justify-end p-6'>
                <FooterLink />
              </div> */}
              <div className="flex text-center font-bold justify-center items-center">
                <p className="text-bold">© 2024 Grupo V&B. Todos los derechos reservados.</p>
              </div>
              
                <div className="flex flex-row justify-between items-center md:mt-0 mt-2">
                  <ul className='flex relative gap-2 animated-list'>
                    {socialMedia.map((social, index) => (
                      <li key={index}>
                        <div className='flex items-center'>
                          <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
                            <img
                              src={`/logos/${social.icon}.svg`}
                              alt={social.id}
                              className={`w-[47px] h-[45px] object-contain cursor-pointer svg-color`}
                            />
                          </a>
                        </div> 
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer