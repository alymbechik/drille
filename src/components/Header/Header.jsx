import React from 'react';
import logo from "../../assets/HeaderAssets/images/Drile.svg"
import searcher from "../../assets/HeaderAssets/images/search.svg"
import bucket from "../../assets/HeaderAssets/images/bucket.svg"
import person from "../../assets/HeaderAssets/images/person.svg"
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <img src={ logo } alt="" />
            <nav>
                <ul className={ styles.ul }>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={ styles.menu }>
                <a href="#">
                    <img src={ searcher } alt="" />
                    </a>
                <a href="#">
                    <img src={ bucket } alt="" />
                    </a>
                <a href="#">
                    <img src={ person } alt="" />
                    </a>
            </div>
        </header>
    );
}

export default Header;