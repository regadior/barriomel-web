import { icons, type IconName } from "@/data/icons"

type IconProps = {
  name: IconName
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  const glyph = icons[name]
  const isStroke = glyph.style === "stroke"

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : undefined}
      strokeWidth={isStroke ? 1.75 : undefined}
      strokeLinecap={isStroke ? "round" : undefined}
      strokeLinejoin={isStroke ? "round" : undefined}
      aria-hidden="true"
    >
      {glyph.paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}
