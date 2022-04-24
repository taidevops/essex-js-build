import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './state'

const root = document.createElement('div')
document.body.appendChild(root)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	root,
)