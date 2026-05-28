import { REVIEWS } from '../data/siteData'
import { IconStar } from './Icons'

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-warm-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            What Locals Say
          </h2>
          <p className="mt-2 text-charcoal-light">Friendly staff, huge portions, real comfort food</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="flex flex-col rounded-2xl border border-chrome-light bg-cream p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-0.5 text-mustard" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 font-heading font-semibold text-charcoal">— {review.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
