import { Theme } from '@thematic/core'
import { connect } from 'react-redux';
import { ControlPanel } from './components/ControlPanel'
import { ThemeEditor } from './components/ThemeEditor'
import './App.css'

export interface AppProps {
    theme: Theme
}

const AppComponent = ({ theme }: AppProps) => (
    <div className="App">
        <div>
            <ControlPanel />
        </div>
        <div className="main">
            <div className="editor">
                <ThemeEditor />
            </div>
        </div>
    </div>
)

export const App = connect((state: any) => ({
    theme: state.theme
}))(AppComponent)