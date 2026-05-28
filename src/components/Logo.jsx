const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

const VARIANT_CLASS = {
  default: '',
  header: 'mix-blend-multiply',
}

export default function Logo({
  className = 'h-11 w-auto max-w-[180px] object-contain md:h-12 md:max-w-[200px]',
  variant = 'default',
}) {
  return (
    <img
      src={LOGO_SRC}
      alt="Good Eats"
      className={`${VARIANT_CLASS[variant] ?? ''} ${className}`.trim()}
      width={200}
      height={48}
      decoding="async"
    />
  )
}
