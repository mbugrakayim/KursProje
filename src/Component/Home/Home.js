import React from "react";
import styles from "./Home.module.css";
import video1 from "../../images/video/porshe.mp4";
import video2 from "../../images/video/deneme.mp4"
import CustomerRegister from "../Register/CustomerRegister";

function Home() {
  return (
    <div>
      <div className={styles.intro}>
        <div className="video">
          <video
            id="background-video"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
      <section id="section-about" className={styles.sectionPadding}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "LEVIBRUSH",
                  fontSize: "500%",
                }}
                className="logoTitle"
              >
                Merhaba Dunya
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p
                style={{
                  fontSize: "125%",
                  textAlign: "center",
                  color: "#41454d",
                }}
              >
                <br />
                Merhaba Dünya Uygulamasına Hoşgeldiniz, bu uygulama tamamen
                ücretsizdir.
                <br />
                <br />
                Bu proje,{" "}
                <a href="">
                  Merve ÇATAK
                </a>{" "}
                Tarafından verilen "Kurumsal Kaynak Planlama" Kursu için tekrar ve
                geliştirme projesi amacıyla oluşturulmuştur. Proje, Web sitesi
                olup Burç Yorumları, Film ve Oyun
                özelliklerine sahiptir. Burç Yorumlarında, 12 Burç'un Yorumu,
                Film sayfasında, filmler, film fragmanları ve Yorumları,
                Oyun sayfasında, Bilgi Yarışması oyunlarına sahiptir.

                <br />
                <br />
                Merhaba Dünya uygulamasına{" "}
                <a href="https://github.com/mbugrakayim">github</a> üzerinden
                ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <hr style={{ width: "100%" }} />
            </div>
          </div>


          <div className={styles.features}>
            <div className={styles.wrapper}>
              <ul>
                <li className={styles.feature1}>
                  <h4 className={styles.h4Name}>I Want To Play Game</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                </li>
                <li className={styles.feature2}>
                  <h4 className={styles.h4Name}>Horoscope</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                </li>
                <li className={styles.feature3}>
                  <h4 className={styles.h4Name} >Movies</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                </li>
                <div className={styles.clear}></div>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section id="register">
        <div className="container">
          <CustomerRegister />
          <div className="row">
            <div className="col-sm-12">
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
