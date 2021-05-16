import { Header } from './components/Header/Header'
import { SwipeButtons } from './components/SwipeButtons/SwipeButtons'
import TinderCards from './components/TinderCards/TinderCards'

function App() {
	return (
		<div style={{width: '100%', height: '100%' }}>
			<Header />
			<TinderCards />
			<SwipeButtons />
		</div>
	)
}

export default App
