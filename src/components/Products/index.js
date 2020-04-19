import React, {useEffect} from 'react'
import Product from '@/components/Product'
import {productsAPI} from '@/services/api'
import useWallet from '@/hooks/useWallet'
import useProducts from '@/hooks/useProducts'
import {Products} from './style'

export default () => {

    const {addWallet} = useWallet()
    const {setProducts, products} = useProducts()

    useEffect(() => {
        (async () => {
            const {data} = await productsAPI.all()
            setProducts(data)
        })()
    }, [])

    useEffect(() => {
        if(products.length === 0) return
        addWallet()
    }, [products])

    return (
        <Products>
            { products.map((product, index) =>
                <Product key={index} {...product}/>
            )}
        </Products>
    )
}
