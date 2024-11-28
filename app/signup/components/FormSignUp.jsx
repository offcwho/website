'use client'

import Link from "next/link"
import { useState } from "react"
import { API_URL } from "../../components/api/api"
import axios from "axios"
import { useMutation, useQuery, QueryClientProvider, QueryClient } from "@tanstack/react-query"



export default function FormSignUp(){
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const mutation = useMutation({
        mutationFn: async(users) => {
            return axios.post(`https://6745a079512ddbd807f8f61b.mockapi.io/users`, users)
        }
    })

    async function fetchUsers() {
        return (await axios.get("https://6745a079512ddbd807f8f61b.mockapi.io/users"))
            .Object.fromEntries(data)
    }

    const { data, isLoading, isError } = useQuery(
        {
            queryFn: fetchUsers,
            queryKey: ['users']
        }
    )

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const obj = Object.fromEntries(formData)

        if(obj.password == obj.password_repeat){
            console.log("ok")
            setError(false)
            if(obj.email != data.email){
                console.log(data.email)
                setSuccess(true)
            } else{
                console.log("false")
                setSuccess(false)
            }
        } else {
            setError(true)
            console.log("error")
        }
        //console.log(Object.fromEntries(formData))

        event.target.reset()
    }
    return(
            <section className="main__section signup">
                <div className="container signup__container form">
                    <form className="form__form" onSubmit={handleFormSubmit}>
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
                            <div className="form__input input">
                                <label htmlFor="#!" className="input__label"></label>
                                <input 
                                    type="password" 
                                    name="password_repeat"
                                    className="input__input input__input--bordered" 
                                    placeholder="Password Repeat"
                                />
                            </div>
                            <button className="form__button" type="submit">Регистрация</button>
                            <ul className="form__list">
                                <li className="form__item">
                                    <Link href="/remember">Забыли пароль?</Link>
                                </li>
                                <li className="form__item">
                                    <Link href="/login">Войти</Link>
                                </li>
                            </ul>
                            { error == true ? <span className="form__error">Пароли не совпадают</span> : "" }
                            { success == true ? <span className="form__error form__success">Вы успешно зарегистрировались</span> : ""}
                            { success == false ? <span className="form__error">Аккаунт с такой почтой уже зарегистрирован</span> : ""}
                    </form>
                </div>
            </section>
    )
}