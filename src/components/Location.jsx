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
    <section id="location" className="scroll-mt-20 bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Visit Us</h2>
        <p className="mt-2 text-charcoal-light">69-32 Grand Ave · Maspeth, Queens</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-chrome-light shadow-sm">
            <iframe
              title="Good Eats location on Google Maps — 69-32 Grand Ave, Maspeth"
              src={MAP_EMBED}
              className="h-[280px] w-full sm:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-warm-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-charcoal">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href={MAP_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 text-charcoal-light transition-colors hover:text-diner-red"
                  >
                    <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-diner-red" />
                    <span>{ADDRESS}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex gap-3 font-semibold text-charcoal transition-colors hover:text-diner-red"
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
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-charcoal px-5 py-2 text-sm font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl bg-warm-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-charcoal">Hours</h3>
              <ul className="mt-4 space-y-2">
                {HOURS.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4 border-b border-cream py-2 last:border-0">
                    <span className="font-semibold text-charcoal">{row.day}</span>
                    <span className="text-charcoal-light">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-chrome bg-warm-white/50 p-5">
              <h3 className="font-heading text-lg font-bold text-charcoal">Parking</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                Street parking available on Grand Ave and nearby side streets in Maspeth. Check posted
                signs for metered or restricted hours.
              </p>
            </div>

            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center rounded-full bg-diner-red font-bold text-white transition-colors hover:bg-diner-orange"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
