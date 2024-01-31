import './itemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../server/asyncMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [categoryId]);

    return (
        <div className='itemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer