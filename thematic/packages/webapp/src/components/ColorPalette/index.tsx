import { mark2style, useThematic } from '@thematic/react'
import { FC, Fragment } from 'react'

export const ColorPalette: FC<{}> = ({}) => {
    const theme = useThematic()
    const foregroundColor = theme.application().foreground().hex()
    const backgroundColor = theme.application().background().hex()
    const background = (
        <Fragment>
            <span>
                <span style={{ color: foregroundColor }}>
                    Background {backgroundColor}
                </span>
            </span>
        </Fragment>
    )
    return (
        <div
            style={{
                border: `1px solid ${foregroundColor}`,
                background: backgroundColor,
                padding: '10px 30px 30px 30px',
                color: foregroundColor,
                textAlign: 'left'
            }}
        >
            <h2 style={{ color: foregroundColor }}>Application colors</h2>
            <ul
                style={{
                    fontSize: 18,
                    listStyleType: 'none',
                    paddingLeft: 0,
                }}
            >
                <li>
                    {foregroundColor} on {background}

                </li>
                <li>
                    on
                </li>
            </ul>
        </div>
    )
}