import { ORDER_URL } from '../data/siteData'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400&q=85&auto=format&fit=crop'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-16 md:min-h-[90vh]">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Diner breakfast spread with burgers, pancakes, and comfort food"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 md:px-6 md:py-28">
        <p className="animate-fade-in mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-chrome-light md:text-base">
          Maspeth, Queens
        </p>
        <h1 className="animate-fade-in font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Comfort Food
          <br />
          <span className="text-diner-orange">Done Right</span>
        </h1>
        <p className="animate-fade-in-delay mt-5 max-w-lg text-lg text-cream md:text-xl">
          Breakfast, lunch, and dinner served fresh every day in Maspeth, Queens.
        </p>
        <div className="animate-fade-in-delay mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#menu"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-diner-red px-8 py-3.5 text-center font-bold text-white transition-colors hover:bg-diner-orange"
          >
            View Menu
          </a>
          <a
            href={ORDER_URL}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-chrome-light bg-white/10 px-8 py-3.5 text-center font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Order Online
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-chrome via-mustard to-diner-red" aria-hidden />
    </section>
  )
}
