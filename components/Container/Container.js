import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import styles from '../../styles/container.module.css'

const Container = (props) => {

const [navState, setNavState] = useState(false)

    return (
        <div>
            <style jsx global>{`
            * {
                padding: 0;
                margin: 0;
                transition: 0.2s ease;
              }
              
              body {
                background: url(background.png) no-repeat center center fixed; 
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
              }
                            
              @media screen and (min-width: 1024px) {
                .logo {
                  left: 25%;
                }
              }
            `}

            </style>
            <div className={styles.hamburger} onClick={() => setNavState(!navState)}>
              <div className={navState ? `${styles.line} ${styles.line1}` : `${styles.line}`}></div>
              <div className={navState ? `${styles.line} ${styles.line2}` : `${styles.line}`}></div>
              <div className={navState ? `${styles.line} ${styles.line3}` : `${styles.line}`}></div>
             </div>
            <Navbar isActive={navState}/>
            <Sidebar isActive={navState}/>
            <div className={styles.container}>
              {props.children}
            </div>
        </div>
    )
}

export default Container
