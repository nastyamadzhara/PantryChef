import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import ChefHatIcon1 from '../../assets/11397342_chef_hat_icon 1.svg'
import background1 from '../../assets/pexels-cottonbro-4252133 1.png'
import background2 from '../../assets/pexels-heyho-6508357 1.png'
import background3 from '../../assets/pexels-valeriya-842545 1.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate('/signup')
    }
    const handleClick2 = () => {
        navigate('/recipe')
    }
    return (
        <div className="home-desktop">
            <Header />
            <div className="header-section">
                <img
                    className="chef-hat-icon"
                    src={ChefHatIcon1}
                    alt="Chef Hat Icon"
                />
                <p className="intro-text">
                    Welcome! I am PantryChef and I will be your guide in the
                    world of easy and convenient recipes.
                </p>
            </div>
            <div className="steps-section">
                <div className="step">
                    <img src={background2} alt="Step 1" />
                    <div className="step-label">
                        Step 1: Choose the products you have in the fridge.
                    </div>
                </div>
                <div className="step">
                    <img src={background1} alt="Step 2" />
                    <div className="step-label2">
                        Step 2: Choose the tastiest recipe and put some effort.
                    </div>
                </div>
                <div className="step">
                    <img src={background3} alt="Step 3" />
                    <div className="step-label">Step 3: Enjoy your meal!</div>
                </div>
            </div>
            <div className="actions-section">
                <button className="action-button" onClick={handleClick1}>
                    Get started
                </button>
                <p className="or-text">or...</p>
                <p className="inspiration-text">
                    I have a lot of experience in cooking and know several
                    delicious recipes. Click below and I'll share one of them!
                </p>
                <button className="inspiration-button" onClick={handleClick2}>
                    I have inspiration!
                </button>
            </div>
        </div>
    )
}

export default Home
