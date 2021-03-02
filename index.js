import axios from 'axios'
import './styles.scss'

const getJoke = async () => {
	const response = await axios({
		method: 'get',
		url: 'https://icanhazdadjoke.com/',
		headers: { Accept: 'application/json' },
	})
	return response
}

const btn = document.querySelector('.get-joke')
const content = document.querySelector('.joke-content')

const fillContent = async () => {
	let res = await getJoke()
	content.textContent = res.data.joke
}

fillContent()

btn.addEventListener('click', fillContent)
