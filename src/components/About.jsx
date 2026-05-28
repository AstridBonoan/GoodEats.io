export default function About() {
  return (
    <section id="about" className="bg-warm-white py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&auto=format&fit=crop"
              alt="Good Eats diner interior with booths and warm lighting"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Your Neighborhood Diner
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-diner-red" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Good Eats has been a Maspeth staple for locals who want real diner food — big plates,
              fresh ingredients, and a crew that knows your order before you sit down.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              From early-morning egg sandwiches to late-night burgers, we serve breakfast, lunch, and
              dinner with the fast-paced energy you expect from a Queens neighborhood spot — just
              with a cleaner, easier way to order online.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Large portions', 'Fresh ingredients', 'Family-friendly', 'Breakfast to dinner'].map(
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
          </div>
        </div>
      </div>
    </section>
  )
}
