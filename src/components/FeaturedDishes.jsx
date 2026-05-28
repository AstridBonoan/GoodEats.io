import { FEATURED_DISHES, MENU_URL, ORDER_URL } from '../data/siteData'

export default function FeaturedDishes() {
  return (
    <section className="bg-warm-white py-14 md:py-20" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-10">
          <div>
            <h2 id="featured-heading" className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Featured
            </h2>
            <p className="mt-2 text-charcoal-light">Popular picks from the Good Eats menu</p>
          </div>
          <a
            href={MENU_URL}
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border-2 border-diner-red px-5 py-2 font-bold text-diner-red transition-colors hover:bg-diner-red hover:text-white"
          >
            View Full Menu
          </a>
        </div>

        <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
          {FEATURED_DISHES.map((dish) => (
            <article
              key={dish.id}
              className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-chrome-light bg-cream shadow-sm transition-shadow hover:shadow-md md:w-auto"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-charcoal">{dish.title}</h3>
                  <span className="shrink-0 font-bold text-diner-red">{dish.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{dish.description}</p>
                <a
                  href={ORDER_URL}
                  className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-full bg-diner-red text-sm font-bold text-white transition-colors hover:bg-diner-orange"
                >
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
