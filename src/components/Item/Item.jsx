import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock}) => {
    return (
        <article key={id} className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    { name }
                </h2>
            </header>
            <picture>
                <img src={ img } alt={ name } className='itemImg' />
            </picture>
            <section>
                <p className='info'>
                    Precio: ${ price }
                </p>
            </section>
            <footer className="itemFooter">
                <Link to={`/item/${id}`} className='seeMore'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item