import React from 'react'
import image1 from '../../assets/jason-briscoe-GliaHAJ3_5A-unsplash 1.png'
import './Profile.css'
import Header from '../../components/Header'

function Profile() {
    return (
        <div className="profile-desktop">
            <Header />
            <img
                src={image1}
                alt="image1"
                className="profile-backgroundImage"
            />
            <div className="box">
                <div className="circle"></div>
                <p className="textProfile">nickname</p>
                <div className="container">
                    <p className="textProfile">0</p>
                    <p className="textProfile">0</p>
                    <p className="textProfile">Saved</p>
                    <p className="textProfile">Cooked</p>
                </div>
                <div>
                    <div className="recentlyWatched">
                        <div className="recentlyWatchedChild" />

                        <div className="rectangleParent">
                            <div className="recentlyWatched1">
                                Recently watched
                            </div>
                            <div className="groupChild" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
