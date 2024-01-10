import './navBar.css'
import logo from './assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className="encabezado">
            <div className='encabezado__logo'>
                <img src={logo} alt="Logo E.S. Chocolates" />
                <h3 className="titulo">E.S. Chocolates</h3>
            </div>
            <nav className="menu">
                <select className="menu__seleccion" name="" id="">
                    <option disabled selected>PRODUCTOS</option>
                    <option value="2">BARRAS DE CHOCOLATE</option>
                    <option value="3">REGALERÍA DE CHOCOLATES</option>
                    <option value="4">CHOCOLATES VARIOS</option>
                </select>
            </nav>
            <CartWidget number={0}/>
        </header>
    )
}

export default NavBar