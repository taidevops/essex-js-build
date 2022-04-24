import { Pivot, PivotItem } from '@fluentui/react'
import { FC } from 'react'
import { ColorPalette } from '../ColorPalette'
import { CoolerPicker } from '../CoolerPicker'
import { MarkGrid } from '../MarkGrid'
import './index.css'

export const ThemeEditor: FC<{}> = ({}) => {
    return (
        <div className="editor-wrapper">
            <Pivot>
                <PivotItem className="tab" headerText="Color Picker">
                    <CoolerPicker />
                </PivotItem>
                <PivotItem className="tab" headerText="Color Picker">
                    <MarkGrid />
                </PivotItem>
            </Pivot>
            <ColorPalette />
            <div className="footer">
                <div className="privacy">
                    This site does not collection any personal information or use cookies.&nbsp;
                </div>
            </div>
        </div>
    )
}