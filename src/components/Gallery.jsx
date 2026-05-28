import { GALLERY_IMAGES } from '../data/siteData'

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Inside Good Eats</h2>
          <p className="mt-2 text-charcoal-light">Real food, real neighborhood vibes</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.src} className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
