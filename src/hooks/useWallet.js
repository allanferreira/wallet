import {useSelector, useDispatch} from 'react-redux'
import currency from '@/services/currency'

export default () => {

    const products = useSelector(state => state.products)
    const wallet = useSelector(state => state.wallet)
    const dispatch = useDispatch()

    const addWallet = () => {
        let wallet = currency(0.0)
        const approvedProducts = products.filter(product => product.status === 'Aprovado')
      
        approvedProducts.forEach(({value, cashbackPercentage}) => {
            const cashbackValue = currency(value/cashbackPercentage)
            wallet = wallet.add(cashbackValue)
        })

        dispatch({
            type: '@wallet/SET',
            value: wallet.format()
        })
    }

    return {
        wallet,
        addWallet,
    }
}
