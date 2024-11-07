import React from 'react'
import './Recipe.css'
import Header from '../../components/Header'
import backgroundImage from '../../assets/pexels-karolina-grabowska-4033634 1.png'

function Recipe() {
    return (
        <div className="recipe-desktop">
            <Header />
            <img
                src={backgroundImage}
                alt={'backgroundImage'}
                className="recipe-backgroundImage"
            ></img>

            <div className="recipe-container">
                <div className="img"></div>
                <p className="name">Name</p>
                <p className="text">Індігрієнти</p>
                <p className="text">
                   {' '}
                </p>
            </div>
        </div>
    )
}

export default Recipe
