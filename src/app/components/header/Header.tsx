import Link from 'next/link';
import './header.css';

const Navbar = () => {
    return (
        <header className="header">
            <Link href='/'>
                <span className='logo'>JM</span>
            </Link>
            <div>Jesús Müller</div>
        </header>
    )
};

export default Navbar;