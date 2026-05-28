const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

export default function Logo({
  className = 'h-12 w-auto max-w-[200px] object-contain md:h-14 md:max-w-[240px]',
}) {
  return (
    <img
      src={LOGO_SRC}
      alt="Good Eats"
      className={className}
      width={299}
      height={58}
      decoding="async"
    />
  )
}
