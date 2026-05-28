import { MENU_URL, IMAGES } from '../data/siteData'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-warm-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={IMAGES.about}
              alt="Inside Good Eats diner with chalkboard menu and booth seating"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Our Story: From the Ground Up
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-diner-red" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              At Good Eats, we started with a simple dream: a place where people enjoy the best comfort
              food made from fresh, quality ingredients — the kind of meals that feel like home, right
              here in Maspeth.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              Our menu is packed with diner classics — juicy burgers, hearty omelettes, fluffy pancakes,
              homemade soups, sandwiches, wraps, and full platters. We take pride in freshness so every
              bite is satisfying and full of flavor.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              Good Eats is more than a diner — it&apos;s part of the Maspeth community. Whether you dine
              in, grab takeout, or order delivery, you&apos;re eating with neighbors and friends.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Large portions', 'Fresh ingredients', 'Dine in & takeout', 'Breakfast through dinner'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 font-semibold text-charcoal">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mustard/20 text-sm text-warm-brown">
                      ✓
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a
              href={MENU_URL}
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-diner-red px-6 py-3 font-bold text-white transition-colors hover:bg-diner-orange"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
