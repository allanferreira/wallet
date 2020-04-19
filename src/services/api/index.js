import axios from 'axios'
import productsAPI from './productsAPI'

export default axios.create({
    baseURL: '/data/',
})

export {
    productsAPI,
}
