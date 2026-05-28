const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

export default function Logo({
  className = 'h-11 w-auto max-w-[180px] object-contain md:h-12 md:max-w-[200px]',
}) {
  return (
    <img
      src={LOGO_SRC}
      alt="Good Eats"
      className={className}
      width={200}
      height={48}
      decoding="async"
    />
  )
}
