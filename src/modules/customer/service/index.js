import axios from 'axios'

export async function getTutorial () {
    const response = await axios.get('http://localhost:3000/api/tutorial')
    return response
}
