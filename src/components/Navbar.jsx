import { useState, useEffect } from 'react'
import { NAV_LINKS, ORDER_URL } from '../data/siteData'
import { IconMenu, IconClose } from './Icons'
import Logo from './Logo'

function NavAnchor({ link, onClick, className }) {
  const props = link.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <a href={link.href} className={className} onClick={onClick} {...props}>
      {link.label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-white/95 shadow-md backdrop-blur-sm' : 'bg-warm-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6 md:py-3" aria-label="Main">
        <a href="#" className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-diner-orange">
          <Logo />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href + link.label}>
              <NavAnchor
                link={link}
                className="text-sm font-semibold text-charcoal-light transition-colors hover:text-diner-orange"
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-diner-orange px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-diner-red md:inline-block"
          >
            Order Online
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-charcoal lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-chrome-light bg-warm-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href + link.label}>
                <NavAnchor
                  link={link}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-charcoal hover:bg-cream"
                />
              </li>
            ))}
            <li>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-diner-orange px-4 py-3 text-center font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
