import { NAV_LINKS, ADDRESS, PHONE, PHONE_HREF, HOURS } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-chrome-light bg-charcoal text-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">
              Good <span className="text-diner-orange">Eats</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Neighborhood comfort food in Maspeth, Queens. Breakfast, lunch, and dinner — served with
              big portions and a smile.
            </p>
            <div className="mt-4 flex gap-3">
              {['Facebook', 'Instagram', 'Yelp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-chrome/40 text-xs font-bold text-chrome-light transition-colors hover:border-chrome hover:text-white"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#order" className="text-sm transition-colors hover:text-white">
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
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal-light pt-6 text-center text-sm text-chrome">
          <p>&copy; {year} Good Eats. All rights reserved. Demo redesign.</p>
        </div>
      </div>
    </footer>
  )
}
