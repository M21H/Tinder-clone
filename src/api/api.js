import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://tinder-clone-backend-m21h.herokuapp.com/',
})

export default instance 
