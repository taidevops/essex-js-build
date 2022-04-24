import { FC, ReactNode } from 'react'

export interface MarkProps {
    children: ReactNode
    size: number
}

export interface ThemedMarkProps {
	config: any
	size: number
}

const svgAttrs = config => ({
	fill: config.fill().hex(),
})

const Mark: FC<MarkProps> = props => {
    const { children, size } = props
    return (
        <svg width={size} height={size} style={{ backgroundColor: 'none' }}>
            {children}
        </svg>
    )
}

export const Rect: FC<ThemedMarkProps> = props => {
	const { config, size } = props
	return (
		<Mark {...props}>
			<rect width={size} height={size} {...svgAttrs(config)} />
		</Mark>
	)
}