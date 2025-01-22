import React from 'react';
import styles from "./Home.module.css";
import MainSection from '../../modules/MainSection/MainSection';

const Home = () => {
    return (
        <div className={ styles.home }>
            <MainSection/>
        </div>
    );
}

export default Home;
