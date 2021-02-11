import React from 'react';
import ImageOne from '../images/Breakfast.jpeg';
import ImageTwo from '../images/SmilyEgg.jpeg';

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Breakfast Egg</h2>
                    <p className="mb-2">Wake up, it's time to eat! Yumi!</p>
                    <span>$16</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
                <div className="cemter-content">
                    <h2 className="text-2xl mb-2">Smily Egg</h2>
                    <p className="mb-2">Hey! Have a great day!</p>
                    <span>$free</span>
                </div>
            </div>
        </>
    );
};

export default Content;
