import './cartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({ number } ) => {
    return (
        <div className='container__cart'>
            <ShoppingCartIcon className='cart__icon'/>
            <span className='cart__number'>{number}</span>
        </div>
    )
}

export default CartWidget