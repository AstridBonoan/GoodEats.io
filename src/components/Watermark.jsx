const LOGO = `${import.meta.env.BASE_URL}bonoan-labs-watermark.png`

export default function Watermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[45] overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="absolute -inset-[40%] opacity-[0.07]"
        style={{
          backgroundImage: `url(${LOGO})`,
          backgroundSize: 'min(320px, 55vw) auto',
          backgroundRepeat: 'repeat',
          transform: 'rotate(-28deg)',
        }}
      />

      <div className="absolute right-3 bottom-24 flex items-center gap-2 opacity-[0.28] md:right-6 md:bottom-6">
        <img src={LOGO} alt="" className="h-7 w-auto drop-shadow-sm md:h-9" />
        <span className="hidden font-heading text-[10px] font-semibold uppercase tracking-widest text-charcoal sm:block">
          Bonoan Labs
        </span>
      </div>
    </div>
  )
}
