import {
  ADDRESS,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  HOURS,
  MAP_EMBED,
  MAP_DIRECTIONS,
  ORDER_URL,
} from '../data/siteData'
import { IconPhone, IconMapPin } from './Icons'

export default function Location() {
  return (
    <section id="location" className="scroll-mt-20 bg-cream py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Visit Us</h2>
        <p className="mt-1 text-charcoal-light">69-32 Grand Ave · Maspeth, Queens</p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:items-start">
          <div className="h-fit overflow-hidden rounded-2xl border border-chrome-light shadow-sm lg:sticky lg:top-24">
            <iframe
              title="Good Eats location on Google Maps — 69-32 Grand Ave, Maspeth"
              src={MAP_EMBED}
              className="block h-[280px] w-full sm:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-warm-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-charcoal">Contact</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <a
                    href={MAP_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 text-sm text-charcoal-light transition-colors hover:text-diner-red"
                  >
                    <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-diner-red" />
                    <span>{ADDRESS}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex gap-3 text-sm font-semibold text-charcoal transition-colors hover:text-diner-red"
                  >
                    <IconPhone className="h-5 w-5 shrink-0 text-diner-red" />
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a
                    href={EMAIL_HREF}
                    className="text-sm font-medium text-charcoal-light transition-colors hover:text-diner-red"
                  >
                    {EMAIL}
                  </a>
                </li>
              </ul>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-charcoal px-5 py-2 text-sm font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl bg-warm-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-charcoal">Hours</h3>
              <p className="mt-1 text-xs text-charcoal-light">Open daily</p>
              <p className="mt-2 font-semibold text-charcoal">8:00 AM – 8:30 PM</p>
              <details className="mt-3 group">
                <summary className="cursor-pointer text-sm font-semibold text-diner-orange hover:text-diner-red">
                  View all days
                </summary>
                <ul className="mt-2 space-y-1.5 border-t border-cream pt-2 text-sm">
                  {HOURS.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4">
                      <span className="text-charcoal">{row.day}</span>
                      <span className="text-charcoal-light">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="rounded-2xl border border-dashed border-chrome bg-warm-white/50 p-4">
              <h3 className="font-heading text-base font-bold text-charcoal">Parking</h3>
              <p className="mt-1.5 text-sm text-charcoal-light">
                Street parking on Grand Ave and nearby side streets. Check posted signs for metered
                hours.
              </p>
            </div>

            <a
              href={ORDER_URL}
              className="flex min-h-[48px] items-center justify-center rounded-full bg-diner-red text-sm font-bold text-white transition-colors hover:bg-diner-orange"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
