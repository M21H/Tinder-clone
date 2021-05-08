import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'

import { IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'

export const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon className='header__icon' fontSize='large' />
			</IconButton>
			<img className='header__logo' src={logo} alt='tinder logo' />
			<IconButton>
				<ForumIcon className='header__icon' fontSize='large' />
			</IconButton>
		</div>
	)
}
