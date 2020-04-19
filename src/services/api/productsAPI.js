import api from './index'

export default {
    all: () => api.get('products.json'),
}
