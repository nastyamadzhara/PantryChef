import React, { useState } from 'react'
import './Sign up.css'
import CarrotIcon from '../../assets/416371_carrot_food_vegetables_vegetarian_icon 1.svg'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }

    const registrationOn = async (e) => {
        e.preventDefault()
        if (username && password) {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/auth/register',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                    }
                )
                navigate('/login')
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
                <div className="sign-up-logo">
                    <img
                        className="sign-up-carrotIcon"
                        src={CarrotIcon}
                        alt="Element carrot food"
                    />
                    <p className="textTitle">PantryChef</p>
                </div>

                <form
                    className="smallRectangleElement"
                    onSubmit={registrationOn}
                >
                    <p className="textTitle2">Create an account</p>

                    <label className="label">Enter a nickname</label>
                    <input
                        className="textInput"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>

                    <label className="label">Create a password</label>
                    <input
                        className="textInput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    ></input>

                    <button className="button" type="submit">
                        Next
                    </button>
                </form>

                {error && <div className="error-message">{error}</div>}

                <div className="textBlock">
                    <p className="text2">
                        Already have one? <u onClick={handleClick}>Log in</u>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
