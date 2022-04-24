import {
	Dropdown,
	IDropdownOption,
	Toggle,
	SpinButton,
	Position,
} from '@fluentui/react'
import { ColorPickerButton } from '@thematic/fluent'
import { useState, useCallback, FC } from 'react'

import './index.css'

export const ControlPanel: FC<{}> = ({

}) => {
    return (
        <div className="control-wrapper">
            <h1>thematic</h1>
            <div className="controls">
				<div className="control">
                    <Dropdown
                        label="Theme"
                        options={[{
                            key: '1',
                            text: 'hi',
                            data: 'hi'
                        }]}
                        styles={{
                            root: {
                                display: 'flex',
                                flexDirection: 'column',
                            }
                        }}
                    />
                </div>
                <div className="control">
                    <ColorPickerButton label="Accent"/>
                </div>
                <div className="control">
                    <Toggle 
                        label="Dark mode"
                    />
                </div>
            </div>
        </div>
    )
}