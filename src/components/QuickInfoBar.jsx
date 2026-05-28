import { QUICK_INFO, PHONE, PHONE_HREF, ADDRESS } from '../data/siteData'
import { QuickInfoIcon, IconPhone, IconMapPin } from './Icons'

export default function QuickInfoBar() {
  return (
    <section className="border-b border-chrome-light bg-cream" aria-label="Quick information">
      <div className="mx-auto max-w-6xl px-4 py-5 md:px-6 md:py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {QUICK_INFO.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-xl bg-warm-white px-2 py-3 text-center shadow-sm sm:flex-row sm:items-center sm:gap-2 sm:px-4 sm:py-3 sm:text-left"
            >
              <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-dark text-diner-red sm:mb-0">
                <QuickInfoIcon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold text-charcoal sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={PHONE_HREF}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-diner-red px-4 py-3 font-bold text-white transition-colors hover:bg-diner-orange sm:justify-start"
          >
            <IconPhone className="h-5 w-5 shrink-0" />
            <span>{PHONE}</span>
          </a>
          <a
            href="#location"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-chrome bg-warm-white px-4 py-3 font-semibold text-charcoal transition-colors hover:border-diner-red hover:text-diner-red sm:justify-start"
          >
            <IconMapPin className="h-5 w-5 shrink-0 text-diner-red" />
            <span className="text-sm sm:text-base">{ADDRESS}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
