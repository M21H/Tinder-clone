import React from 'react'
import { TinderCard } from './TinderCard/TinderCard'

export const TinderCards = () => {
	const [people, setPeople] = React.useState([
		{
			name: 'Elon Mask',
			url:
				'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
		},
		{
			name: 'Jeff Bezos',
			url:
				'https://www.google.com/search?q=Jeff+Bezos&sxsrf=ALeKk03q4bTQonsBPHQcG6oemthBcVWbSw:1620309227768&tbm=isch&source=iu&ictx=1&fir=1WGyey_CdTk84M%252Ccxh7bmqeRcgmIM%252C_&vet=1&usg=AI4_-kSzPkAbTpfV8YmW0Qrjmy-hyoPbzw&sa=X&ved=2ahUKEwjHycmfmrXwAhVP2SoKHWggD_kQ_h16BAgbEAE#imgrc=1WGyey_CdTk84M',
		},
	])

	

	return (
		<div className='tinderCard'>
			{people.map(person => (
				<TinderCard
					className='swipe'
					key={person.name}
					prewentSwipe={['up', 'down']}
					onSwipe={dir => swiped(dir, person.name)}
					onCardLeftScreen={() => outOfFrame(person.name)}
					{...person}
				/>
			))}
		</div>
	)
}
