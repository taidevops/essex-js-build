import { Theme } from '@thematic/core'
import { ColorPicker, ColorPickerLayout } from '@thematic/fluent'
import { FC } from 'react'

export interface ColorSelectionProps {

}

export const ColorSelection: FC<ColorSelectionProps> = ({}) => {
    return (
        <div className="color-controls-area">
            <ColorPicker 
                
            />
        </div>
    )
}