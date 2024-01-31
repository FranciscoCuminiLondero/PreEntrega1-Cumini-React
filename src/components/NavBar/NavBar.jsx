import './navBar.css'
import logo from './assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="encabezado">
            <div >
                <Link className='encabezado__logo' to='/'>
                    <img src={logo} alt="Logo E.S. Chocolates" />
                    <h3 className="titulo">E.S. Chocolates</h3>
                </Link>
            </div>
            <nav className="menu">
                    <NavLink to={`/category/barras`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>BARRAS DE CHOCOLATE</NavLink>
                    <NavLink to={`/category/regaleria`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>REGALERÍA DE CHOCOLATES</NavLink>
                    <NavLink to={`/category/varios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CHOCOLATES VARIOS</NavLink>
            </nav>
            <CartWidget number={0}/>
        </header>
    )
}

export default NavBar