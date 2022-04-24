import { SelectionState } from '@thematic/core'
import { useThematic, mark2style } from '@thematic/react'
import { CSSProperties, FC, useMemo } from 'react'
import { Rect } from '../svg'

export interface GridCellProps {
    name: string
    size: number
    selectionState?: SelectionState
}

const selectMark = (key: string) => {
    switch (key) {
        case 'react':
        case 'plotArea':
            return Rect
        default:
            return Rect
    }
}

export const GridCell: FC<GridCellProps> = ({ name, size, selectionState }) => {
    const theme = useThematic()
    const Mark = selectMark(name)
    const exampleSize = size * 1.5
    const exampleStyle: CSSProperties = useMemo(
        () => ({
            width: exampleSize,
            height: exampleSize,
        }),
        [theme, exampleSize],
    )
    const config = theme[name]({ selectionState })
    return (
		<div className="mark-grid-cell">
			<h2 className="mark-grid-cell-title">{name}</h2>
			<div className="mark-grid-cell-example" style={exampleStyle}>
				<Mark config={config} size={size} />
			</div>
		</div>
	)
}