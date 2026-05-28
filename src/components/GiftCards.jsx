import { GIFT_CARD_AMOUNTS, PHONE_HREF, ROUTES } from '../data/siteData'

export default function GiftCards() {
  return (
    <section id="gift-cards" className="scroll-mt-20 bg-warm-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Gift Cards</h2>
          <p className="mt-4 text-charcoal-light">
            Give the gift of a delicious meal. Good Eats gift cards are perfect for any occasion —
            valid for dine-in, takeout, and delivery.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {GIFT_CARD_AMOUNTS.map((amount) => (
            <span
              key={amount}
              className="rounded-full border-2 border-diner-orange bg-cream px-6 py-3 font-heading text-lg font-bold text-charcoal"
            >
              {amount}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-charcoal-light">
          Custom amounts available. Purchase in person at the diner or{' '}
          <a href={PHONE_HREF} className="font-semibold text-diner-orange hover:text-diner-red">
            call (718) 478-2420
          </a>{' '}
          to order a gift card.
        </p>
        <div className="mt-8 text-center">
          <a
            href={ROUTES.location}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-diner-orange px-8 py-3 font-bold text-white transition-colors hover:bg-diner-red"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  )
}
