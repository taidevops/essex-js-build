import { Theme } from '@thematic/core'
import { FC } from 'react'
import { connect } from 'react-redux'

import { ColorSelection } from './ColorSelection'

export interface CoolerPickerProps {

}

const CoolerPickerComponent: FC<CoolerPickerProps> = ({}) => {
    return (
        <div>
            <ColorSelection />
        </div>
    )
}

export const CoolerPicker = connect(null, {
    
})(CoolerPickerComponent)