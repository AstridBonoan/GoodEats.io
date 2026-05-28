import { ADDRESS, EMAIL_HREF, PHONE_HREF } from '../data/siteData'

export default function Careers() {
  return (
    <section id="careers" className="scroll-mt-20 bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Join a Growing Team
        </h2>
        <p className="mt-4 text-lg text-charcoal-light">
          We&apos;re always looking for hardworking people who love food and great service. If you
          take pride in your work and enjoy a fast-paced diner environment, we&apos;d love to hear
          from you.
        </p>
        <div className="mt-8 rounded-2xl border border-chrome-light bg-warm-white p-6 text-left shadow-sm md:p-8">
          <h3 className="font-heading text-lg font-bold text-charcoal">How to apply</h3>
          <p className="mt-3 text-sm text-charcoal-light">
            Send your resume and a short note about yourself by email or phone. We&apos;ll get back
            to you as soon as possible.
          </p>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-charcoal">
            <li>
              Email:{' '}
              <a href={EMAIL_HREF} className="text-diner-orange hover:text-diner-red">
                goodeatsdinerNY@gmail.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href={PHONE_HREF} className="text-diner-orange hover:text-diner-red">
                (718) 478-2420
              </a>
            </li>
            <li>In person: {ADDRESS}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
