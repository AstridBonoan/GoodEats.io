import { REVIEWS, GOOGLE_REVIEWS_URL } from '../data/siteData'
import { IconStar } from './Icons'

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-warm-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-2 text-charcoal-light">
            Real reviews from Google — friendly staff, huge portions, comfort food
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="flex flex-col rounded-2xl border border-chrome-light bg-cream p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-0.5 text-mustard" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <IconStar key={i} />
                  ))}
                </div>
                {review.source && (
                  <span className="rounded-full bg-warm-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-charcoal-light">
                    {review.source}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 text-charcoal">
                <span className="font-heading font-semibold">— {review.name}</span>
                {review.date && (
                  <span className="mt-0.5 block text-xs text-charcoal-light">{review.date}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-diner-red px-6 py-3 font-bold text-diner-red transition-colors hover:bg-diner-red hover:text-white"
          >
            Read more on Google
          </a>
        </div>
      </div>
    </section>
  )
}
