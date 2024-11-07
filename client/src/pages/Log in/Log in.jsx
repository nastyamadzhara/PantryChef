import React, { useState } from 'react'
import './Log in.css'
import CarrotIcon from '../../assets/416371_carrot_food_vegetables_vegetarian_icon 1.svg'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signup')
    }

    const logInOn = async () => {
        setError('')
        if (username && password) {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/auth/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                    }
                )

                if (response.ok) {
                    const data = await response.json()
                    localStorage.setItem('token', data.token)
                    navigate('/')
                } else {
                    const data = await response.json()
                    setError(data.message || 'Невірний логін або пароль')
                }
            } catch (err) {
                setError('Сталась помилка при з’єднанні з сервером')
            }
        } else {
            setError('Будь ласка, заповніть всі поля')
        }
    }

    return (
        <div className="back">
            <div className="bigRectangleElement">
                <div className="log-in-logo">
                    <img
                        className="log-in-carrotIcon"
                        src={CarrotIcon}
                        alt="Element carrot food"
                    />
                    <p className="textTitle">PantryChef</p>
                </div>

                <form className="smallRectangleElement">
                    <p className="textTitle2">Log in</p>

                    <label className="label">Enter a nickname</label>
                    <input
                        className="textInput"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="label">Enter a password</label>
                    <input
                        className="textInput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </form>

                <button className="button" onClick={logInOn}>
                    Next
                </button>

                {error && <p className="errorMessage">{error}</p>}

                <div className="textBlock">
                    <p className="text2">
                        Don't have an account?{' '}
                        <u onClick={handleClick}>Sign up</u>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn
