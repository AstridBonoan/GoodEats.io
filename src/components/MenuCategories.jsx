import { useState } from 'react'
import { MENU_CATEGORIES, ORDER_URL } from '../data/siteData'

function CategoryAccordion({ category, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-chrome-light bg-warm-white md:hidden">
      <button
        type="button"
        className="flex w-full min-h-[56px] items-center justify-between gap-3 px-4 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>{category.icon}</span>
          <span className="font-heading text-lg font-bold text-charcoal">{category.title}</span>
        </span>
        <span className={`text-diner-red transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="border-t border-chrome-light px-4 pb-4">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex justify-between gap-4 border-b border-cream py-3 last:border-0"
            >
              <span className="font-medium text-charcoal">{item.name}</span>
              <span className="shrink-0 font-semibold text-diner-red">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function CategoryCard({ category }) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-chrome-light bg-cream transition-shadow hover:shadow-md md:block">
      <div className="border-b border-chrome-light bg-warm-white px-5 py-4">
        <span className="text-3xl" aria-hidden>{category.icon}</span>
        <h3 className="mt-2 font-heading text-xl font-bold text-charcoal">{category.title}</h3>
      </div>
      <ul className="px-5 py-3">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex justify-between gap-3 border-b border-cream-dark py-2.5 last:border-0"
          >
            <span className="text-charcoal">{item.name}</span>
            <span className="shrink-0 font-semibold text-diner-red">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function MenuCategories() {
  const [openId, setOpenId] = useState(MENU_CATEGORIES[0]?.id)

  return (
    <section id="menu" className="bg-cream py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-10">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">Our Menu</h2>
            <p className="mt-2 max-w-xl text-charcoal-light">
              Scan fast, order faster. Breakfast through dinner — generous portions, diner prices.
            </p>
          </div>
          <a
            href={ORDER_URL}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full border-2 border-diner-red px-6 py-2.5 font-bold text-diner-red transition-colors hover:bg-diner-red hover:text-white"
          >
            Full Menu Online
          </a>
        </div>

        <div className="space-y-3 md:hidden">
          {MENU_CATEGORIES.map((cat) => (
            <CategoryAccordion
              key={cat.id}
              category={cat}
              isOpen={openId === cat.id}
              onToggle={() => setOpenId(openId === cat.id ? null : cat.id)}
            />
          ))}
        </div>

        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {MENU_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
