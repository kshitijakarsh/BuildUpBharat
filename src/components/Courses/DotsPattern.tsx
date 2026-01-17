import type { JSX } from "react"

interface DotsPatternProps {
    className?: string
    rows?: number
    cols?: number
    gap?: number
    radius?: number
}

export default function DotsPattern({
    className,
    rows = 8,
    cols = 4,
    gap = 20,
    radius = 2,
}: DotsPatternProps) {
    const dots: JSX.Element[] = []

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row >= 2 && col >= 2) continue

            dots.push(
                <circle
                    key={`${row}-${col}`}
                    cx={col * gap + radius}
                    cy={row * gap + radius}
                    r={radius}
                    fill="white"
                    fillOpacity="0.2"
                />
            )
        }
    }

    const width = cols * gap
    const height = rows * gap

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {dots}
        </svg>
    )
}
