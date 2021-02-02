import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.css'

const navbar = () => {
    return (
        <div className={styles.navbarGrid}>
            <h1>Kabelsalad</h1>
            <NavLink to='/cart'>Warenkorb</NavLink>
        </div>
    )
};

export default navbar;