import { ORDER_URL, PHONE_HREF, SITE_URL } from '../data/siteData'

export default function OrderingCTA() {
  return (
    <section id="order" className="scroll-mt-20 bg-charcoal py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Hungry? Order Online Now
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-cream-dark">
          Ordering from our website is quick and easy — choose your favorites for pickup or delivery.
          Same big portions, same neighborhood diner you love.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-diner-red px-8 py-3.5 font-bold text-white transition-colors hover:bg-diner-orange"
          >
            Delivery
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-warm-white px-8 py-3.5 font-bold text-charcoal transition-colors hover:bg-cream"
          >
            Pickup
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-chrome px-8 py-3.5 font-bold text-white transition-colors hover:border-chrome-light hover:bg-white/10"
          >
            Call to Order
          </a>
        </div>
        <p className="mt-6 text-sm text-chrome">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
          >
            goodeatsdinerny.com
          </a>
        </p>
      </div>
    </section>
  )
}
