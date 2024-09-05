'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import clsx from 'clsx'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label='main navigation' className='flex justify-end md:justify-around items-center  w-full pr-1 overflow-hidden'> 
      <div className='flex justify-center w-[15%] md:w-[7%] pr-2'>
        <NameLogo />
      </div>
      <div className="absolute inset-0
       z-10 bg-[url('/textures/bricks.jpg')] opacity-25 mix-blend-soft-light"></div>
      <ul className='nav-header flex flex-col justify-center w-[80%] bg-softBlack text-concretewhite min-h-[7lvh] mt-2'>
        <div className='flex flex-col items-center justify-center'>
          <button 
            aria-expanded={open}
            aria-label="Menu abierto"
            className="block p-2 text-2xl z-20 text-concretewhite md:hidden"
            onClick={() => {setOpen(true); console.log('this')}}
          >
            <span>Open</span>
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-concretewhite bg-opacity-100  pr-4 pt-14 transition-transform duration-200 ease-in-out overflow-hidden",
            open ? "translate-y-0" : "translate-y-[-100%]",
          )}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <ul className="relative z-10">
              <li>first</li>
              <li>second</li>
            </ul>
          </div>
          <button
            aria-label="Menu Cerrado"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl dark:text-slate-800 text-slate-50"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <DesktopMenu />
      </ul>
      <div className="bg-concretewhite">
        <button
          aria-expanded={open}
          aria-label="Menu abierto"
          className="hidden sm:block p-2 text-2xl text-brightorange "
          onClick={() => setOpen(true)}
        >
          <span>Open</span>
        </button>
      </div>
    </nav>
  )
}

const NameLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Inicio"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      <div className='flex justify-center items-center overflow-hidden'>
        {/* LOGO */}
        <img src='/logos/logo.jpg' alt='logo' className="w-full z-50" />
      </div>
    </Link>
  )
}

const DesktopMenu = () => {
  return (
    <div className='relative flex-row justify-center items-center gap-2 py-0 z-50 hidden md:flex'>
      <ul className='flex flex-row w-full sm:w-[60%] justify-between text-concretewhite '>
        <li>
          <span className='text-lg hover:drop-shadow-custom-shadow'>Nosotros</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
      </ul>
    </div>
  )
}

export default NavBar