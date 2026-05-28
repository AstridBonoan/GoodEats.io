import { REWARDS_URL } from '../data/siteData'

export default function Rewards() {
  return (
    <section className="border-y border-chrome-light bg-cream py-12 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">Good Eats Rewards</h2>
          <p className="mt-2 max-w-xl text-charcoal-light">
            Earn points every time you order online and redeem them for free food. Join on the Good Eats
            app or when you order online.
          </p>
        </div>
        <a
          href={REWARDS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-full bg-diner-red px-8 py-3.5 font-bold text-white transition-colors hover:bg-diner-orange"
        >
          Join Rewards
        </a>
      </div>
    </section>
  )
}
