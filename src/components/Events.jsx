import { PHONE_HREF, EMAIL_HREF, IMAGES } from '../data/siteData'

export default function Events() {
  return (
    <section id="events" className="scroll-mt-20 bg-warm-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Events</h2>
        <p className="mt-2 max-w-2xl text-charcoal-light">
          Good Eats is part of the Maspeth community — from casual family meals to group gatherings.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-chrome-light shadow-sm">
            <img
              src={IMAGES.dinerGuests}
              alt="Guests enjoying food at Good Eats"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="bg-cream p-6">
              <h3 className="font-heading text-xl font-bold text-charcoal">Dine-In Gatherings</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                Bring the family, meet neighbors, or catch up over coffee. Our booths and counter seating
                are ready for breakfast, lunch, and dinner any day of the week.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-chrome-light bg-cream p-6">
            <h3 className="font-heading text-xl font-bold text-charcoal">Catering &amp; Large Orders</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
              Planning something bigger? Ask about catering and large takeout orders for offices, parties,
              and neighborhood events.
            </p>
            <p className="mt-4 text-sm font-semibold text-charcoal">
              <a href={PHONE_HREF} className="text-diner-orange hover:text-diner-red">
                Call us
              </a>{' '}
              or{' '}
              <a href={EMAIL_HREF} className="text-diner-orange hover:text-diner-red">
                email
              </a>{' '}
              to discuss your event.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
