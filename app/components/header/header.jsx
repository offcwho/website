import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="main__header header">
            <div className="container header__container">
                <Link href="/" className="header__link header__link--logo" >
                    <Image 
                        src="./next.svg"
                        width={60}
                        height={60}
                        alt="WebSite Logo"
                        className="header__logo" 
                    />
                </Link>
                <nav className="header__navbar">
                    <menu className="header__menu">
                        <li className="header__item">
                            <Link className="header__link" href="/">Главная</Link>
                        </li>
                    </menu>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link className="header__button" href="/signup">SignUp</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}