import React from 'react';
import styles from "./MainSection.module.css"
import sofa from "../../assets/MainSectionAssets/images/sofa.png"
import arrow_left from "../../assets/MainSectionAssets/images/arrow_left.svg"
import arrow_right from "../../assets/MainSectionAssets/images/arrow_right.svg"

const MainSection = () => {
    return (
        <main>
            <img src={ arrow_left } alt="" />
            <div className={ styles.main }>
                <img src={ sofa } alt="" />
                <div className={ styles.text }>
                    <h1>Get ready for Our <br /> stylist chair</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <img src={ arrow_right } alt="" />
        </main>
    );
}

export default MainSection;
