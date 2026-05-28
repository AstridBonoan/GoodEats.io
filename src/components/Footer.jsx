import {
  FOOTER_LINKS,
  ADDRESS,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  HOURS,
  ORDER_URL,
  COPYRIGHT,
  ROUTES,
} from '../data/siteData'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-chrome-light bg-charcoal text-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href={ROUTES.home} className="inline-block">
              <Logo className="h-10 w-auto max-w-[160px] object-contain" />
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Good food, good life — hearty American favorites in Maspeth. Dine in, takeout, or delivery
              daily 8 AM – 8:30 PM.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={ORDER_URL} className="text-sm font-semibold text-diner-orange transition-colors hover:text-white">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {HOURS.map((row) => (
                <li key={row.day}>
                  <span className="font-semibold text-white">{row.day}:</span> {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Location</h3>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>{ADDRESS}</p>
              <p>
                <a href={PHONE_HREF} className="font-semibold text-white hover:text-diner-orange">
                  {PHONE}
                </a>
              </p>
              <p>
                <a href={EMAIL_HREF} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal-light pt-6 text-center text-sm text-chrome">
          <p>
            &copy; {year} {COPYRIGHT} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
