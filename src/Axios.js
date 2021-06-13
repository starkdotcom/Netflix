import axios from 'axios';
import {baseUrl} from './Config/constants'

const instance=axios.create({baseURL:baseUrl,})

export default instance