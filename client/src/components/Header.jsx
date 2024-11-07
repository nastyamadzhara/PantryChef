import React from 'react'
import CarrotIcon from '../assets/416371_carrot_food_vegetables_vegetarian_icon 1.svg'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const handleClick1 = () => {
        navigate('/login')
    }
    const handleClick2 = () => {
        navigate('/signup')
    }
    const handleClick3 = () => {
        navigate('/')
    }

    return (
        <div className="header">
            <div className="logo" onClick={handleClick3}>
                <img
                    className="carrotIcon"
                    src={CarrotIcon}
                    alt="Element carrot food"
                />
                <div>PantryChef</div>
            </div>
            <div className="buttons">
                <button className="header-log-in" onClick={handleClick1}>
                    Log in
                </button>
                <button className="header-sign-up" onClick={handleClick2}>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Header
