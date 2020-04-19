import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default () => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const addProduct = useCallback(async (data) => {
        dispatch({
            type: '@products/ADD',
            value: data
        })
    }, [dispatch])

    const setProducts = useCallback(async (data) => {
        dispatch({
            type: '@products/SET',
            value: data
        })
    }, [dispatch])

    return {
        products,
        addProduct,
        setProducts,
    }
}
