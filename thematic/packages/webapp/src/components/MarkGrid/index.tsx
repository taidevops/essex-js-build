import { SelectionState } from '@thematic/core'
import { useThematic } from '@thematic/react'
import { useState, useCallback, useMemo, FC } from 'react'
import { GridCell } from './GridCell'
import './index.css'

const SIZE = 30

const markKeys = [
	'rect',
	'area',
	'circle',
	'arc',
]

export const MarkGrid: FC = () => {
    const theme = useThematic()
    const [selectionState, setSelectionState] = useState<SelectionState>(
        SelectionState.Normal
    )
    const labelStyle = useMemo(
        () => ({
            fontSize: '0.5em',
            fontWeight: 'bold' as const,
            color: theme.application().lowContrast().hex()
        }),
        [theme],
    )
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={labelStyle}>On-chart marks</div>
            <div className="mark-grid">
                {markKeys.map(key => (
                    <GridCell
                        name={key}
                        size={SIZE}
                        selectionState={selectionState}
                    />
                ))}
            </div>
            <div>Chart chrome</div>
        </div>
    )
}