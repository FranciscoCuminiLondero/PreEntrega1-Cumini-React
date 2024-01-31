import './itemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProductsById } from '../../server/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    
    const [productDetail, setProductDetail] = useState(null);
    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProductDetail(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [itemId]);

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...productDetail}/>
        </div>
    )
}

export default ItemDetailContainer