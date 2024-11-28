import Link from "next/link"
import Form from "../components/form/form"

export default function Login(){

    return(
        <section className="main__section signup">
            <div className="container signup__container form">
                <Form>
                        <div className="form__input input">
                            <label htmlFor="#!" className="input__label"></label>
                            <input 
                                type="email" 
                                name="email"
                                className="input__input input__input--bordered" 
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="form__input input">
                            <label htmlFor="#!" className="input__label"></label>
                            <input 
                                type="password" 
                                name="password"
                                className="input__input input__input--bordered" 
                                placeholder="Password"
                            />
                        </div>
                        <button className="form__button" type="submit">Войти</button>
                        <ul className="form__list">
                            <li className="form__item">
                                <Link href="/remember">Забыли пароль?</Link>
                            </li>
                            <li className="form__item">
                                <Link href="/signup">Регистрация</Link>
                            </li>
                        </ul>
                </Form>
            </div>
        </section>
    )
}