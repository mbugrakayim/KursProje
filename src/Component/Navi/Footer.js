import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{ padding: "20px 0", background: "black" }}
      >
        <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
          <a   className={styles.btn} href="https://github.com/mbugrakayim">
            <i className="fab fa-github fa-3x" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <h3 style={{ color: "white" }}>Hakkımızda</h3>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <Link  className={styles.btn} to={"/"}><span>Mustafa Buğra KAYİM</span> </Link>
                </li>
                <li>
                  <Link  className={styles.btn} to={"/"}><span>Hasan Can DEĞİRMENCİ</span></Link>
                </li>
                <li>
                  <Link  className={styles.btn} to={"/"}><span>Kevser EMRE</span></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <h3 style={{ color: "white" }}>Sosyal Medya</h3>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <a  className={styles.btn}  href="https://www.linkedin.com/in/mbugrakayim/">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}}  href="https://github.com/mbugrakayim">
                    <i className="fab fa-github fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                  
                </li>
                <li>
                <a  className={styles.btn}  href="https://www.linkedin.com/in/mbugrakayim/">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}}  href="https://github.com/mbugrakayim">
                    <i className="fab fa-github fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                </li>
                <li>
                <a  className={styles.btn}  href="https://www.linkedin.com/in/mbugrakayim/">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}}  href="https://github.com/mbugrakayim">
                    <i className="fab fa-github fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                  <a  className={styles.btn} style={{paddingLeft:"20px"}} href="https://github.com/mbugrakayim">
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div>
            <p style={{ color: "white" }}>@2022 Network Akademisi Projesi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
