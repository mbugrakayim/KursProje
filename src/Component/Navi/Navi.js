import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerLogin from "../Register/CustomerLogin";
import styles from "./Navi.module.css";

function Navi() {
  const [openModal, setOpenModal] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    setLogIn(JSON.parse(localStorage.getItem("loggedin")));
  });


  const LogOut = (e) => {
    e.preventDefault();
    alertify.warning("Güle Güle...");
    setLogIn(!JSON.parse(localStorage.getItem("loggedin")));
    localStorage.removeItem("loggedin");
    history("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-black fixed-top">
        <div className="container">
          <div className={styles.slider}>
            <Link className={styles.btn} style={{ transition: "none" }} to={"/"}>
              <span className={styles.logo}>Dec</span>
            </Link>

          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className={styles.box} >
                <Link className={styles.btn} to={"/"}>
                  Home
                </Link>
              </li>
              <li className={styles.box} >
                <Link className={styles.btn} to={"/bilgiyarismasi"}>
                  Games
                </Link>
                {/* <ul>
                  <li style={{ paddingTop: "1.5rem" }}>
                    <a className={styles.btn} href="/blackjack">BlackJack</a>
                  </li>
                  <li>
                    <a className={styles.btn} href="#">Bilgi Yarışması</a>
                  </li>
                </ul> */}
              </li>
              <li className={styles.box} >
                <Link className={styles.btn} to={"/movies"}>
                  Movies
                </Link>
              </li>
              <li className={styles.box} >
                <Link className={styles.btn} to={"/horoscope"}>
                  Horoscope
                </Link>
              </li>
              {!logIn ? (
                <>
                  <li className={styles.box} id="Login" >
                    <a className={styles.btn} href="#register"  >
                      Register
                    </a>
                  </li>
                  <li className={styles.box} id="Login" >
                    <a href="#login" className={styles.btn}
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      Login
                    </a>
                  </li>

                </>

              ) : (
                <>
                  <li className={styles.box}>
                    <a href="/" className={styles.btn}
                      onClick={(e) => {
                        LogOut(e);
                      }}
                    >
                      LogOut
                    </a>
                  </li>
                </>
              )
              }

            </ul>
          </div>
        </div>
      </nav>
      {openModal && <CustomerLogin closeModal={setOpenModal} isLoggedin={setLogIn} />}
    </div>
  );
}

export default Navi;
