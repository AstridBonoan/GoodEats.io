import { ORDER_URL } from '../data/siteData'

export default function StickyOrderButton() {
  return (
    <a
      href={ORDER_URL}
      className="fixed bottom-4 left-4 right-4 z-40 flex min-h-[52px] items-center justify-center rounded-full bg-diner-red py-3.5 text-center font-bold text-white shadow-lg transition-colors hover:bg-diner-orange md:hidden"
      aria-label="Order online"
    >
      Order Online
    </a>
  )
}
