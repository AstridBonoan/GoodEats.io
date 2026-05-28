import { GALLERY_IMAGES } from '../data/siteData'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Inside Good Eats</h2>
          <p className="mt-2 text-charcoal-light">Food, coffee, and classic diner atmosphere</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.alt}
              className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
                  i === 0 ? 'aspect-[2/1] md:aspect-auto md:h-full md:min-h-[320px]' : 'aspect-square'
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
