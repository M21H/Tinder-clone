import React from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from '../../api/api'

const TinderCards = () => {
	const [people, setPeople] = React.useState([])

	React.useEffect(() => {
		async function fetchData() {
			const response = await axios.get('tinder/cards')
			setPeople(response.data)
		}
		fetchData()
	}, [])

	const swiped = (direction, nameToDelete) => {
		console.log('removing ' + nameToDelete)
	}

	const outOfFrame = name => {
		console.log(name + ' left the screen')
	}

	console.log('>>RENDER<<')

	return (
		<div className='tinderCards'>
			<div className='tinderCards__container'>
				{people.map(person => (
					<TinderCard
						className='swipe'
						key={person._id}
						preventSwipe={['up', 'down']}
						onSwipe={dir => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
						{...person}>
						<div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards
