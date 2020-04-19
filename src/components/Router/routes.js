import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Product from '@/pages/Product'
import Info from '@/pages/Info'

export default [
    {
        name: 'Home',
        component: Home,
        path: '/',
        exact: true,
        hidden: true,
    },
    {
        name: 'Produtos',
        component: Products,
        path: '/dashboard/products',
    },
    {
        name: 'Informações',
        component: Info,
        path: '/dashboard/informations',
    },
    {
        name: 'Produto',
        component: Product,
        path: '/dashboard/product/:slug',
        hidden: true,
    },
]
