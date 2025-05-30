import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css"
import flipkartLogo from "../assets/flipkart_Logo.svg"

function Header(){

    return(
        <div className={styles.header_Container}>
            <div className={styles.header}>
                <img src={flipkartLogo} alt="Flipkart" style={{padding :'2px'}}></img>
                {/* <i class="bi bi-search"></i> */}
                <input className="form-control" placeholder="Search for Products, Brands and More"></input>
                <div className={styles.headerBtn}>
                    <button className={styles.headerBtn}>Login</button>
                    <button className={styles.headerBtn}>Cart</button>
                    <button className={styles.headerBtn}>Become a Seller</button>
                </div>
            </div>
        </div>
    );
}


export default Header;