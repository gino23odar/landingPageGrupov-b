'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

import clsx from 'clsx'

const NavBar = ({
  settings,
}: {
  settings: Content.SettingsDocument;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            className="block p-2 text-2xl w-[65%] z-20 text-concretewhite md:hidden"
            onClick={() => {setOpen(true); console.log('this')}}
          >
            <div className='flex flex-col gap-1'>
              <span id="menu-span"></span>
              <span id="menu-span"></span>
              <span id="menu-span"></span>
            </div>
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-concretewhite bg-opacity-100  pr-4 pt-14 transition-transform duration-200 ease-in-out overflow-hidden",
            open ? "translate-y-0" : "translate-y-[-100%]",
          )}
        >
          {settings.data.nav_item.map(({ item_link, link_label }, index) => (
            <React.Fragment key={link_label}>
              <li className="first:mt-8">
                <PrismicNextLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                  )}
                  field={item_link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item_link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-brightorange transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(asLink(item_link) as string)
                        ? "translate-y-6"
                        : "translate-y-18",
                    )}
                  />
                  <span className="relative">{link_label}</span>
                </PrismicNextLink>
              </li>
              {index < settings.data.nav_item.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <button
            aria-label="Menu Cerrado"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl dark:text-slate-800 text-slate-50"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <DesktopMenu settings={settings} pathname={pathname}/>
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
        <img src='/logos/logo.jpg' alt='logo' className="w-full z-10" />
      </div>
    </Link>
  )
}

const DesktopMenu = ({
  settings,
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) => {
  return (
    <div className='relative flex-row justify-center items-center gap-2 py-0 z-50 hidden md:flex'>
      <ul className='flex flex-row w-full sm:w-[60%] justify-between text-concretewhite mr-8'>
        {settings.data.nav_item.map(({ item_link, link_label }, index) => (
        <React.Fragment key={link_label}>
          <li className='text-lg hover:drop-shadow-custom-shadow'>
            <PrismicNextLink
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-concretewhite",
              )}
              field={item_link}
              aria-current={
                pathname.includes(asLink(item_link) as string) ? "page" : undefined
              }
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-brightorange transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(asLink(item_link) as string)
                    ? "translate-y-6"
                    : "translate-y-8",
                )}
              />
              <span className="relative">{link_label}</span>
            </PrismicNextLink>
          </li>
          
        </React.Fragment>
      ))}
      </ul>
    </div>
  )
}

export default NavBar