import React from 'react'
import styles from './Burclar.module.css'
import kocImg from '../images/koc.jpg'
function Koc({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img  className={styles.sol} src={kocImg} alt="" style={{ width: "200px", height: "200px",borderRadius:"66px"}} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: Kardinal (öncü), değişken ve sabit burçlar. Koç burcu dört kardinal burçtan biridir. Bu burçlar mevsimleri başlatır. Koç, baharı; Yengeç, yazı; Terazi, sonbaharı; Oğlak ise kışı başlatır. Bu burçlar özgün olmayı severler ve yaptıkları her şeyde birinci olmayı isterler. Akım belirleyicidirler; arkadaş ortamlarında partileri, organizasyonları onlar başlatan onlardır.</p>
                    <br />
                    <p>Burçlar üç farklı niteliğe göre gruplanır: Kardinal (öncü), değişken ve sabit burçlar. Koç burcu dört kardinal burçtan biridir. Bu burçlar mevsimleri başlatır. Koç, baharı; Yengeç, yazı; Terazi, sonbaharı; Oğlak ise kışı başlatır. Bu burçlar özgün olmayı severler ve yaptıkları her şeyde birinci olmayı isterler. Akım belirleyicidirler; arkadaş ortamlarında partileri, organizasyonları onlar başlatan onlardır.</p>
                    <br />
                    <p>Güneş, Koç burcuna olağanüstü organizasyon becerileri verir: Öğlen arasından önce tek seferde birden fazla işi bitirmeyi beceremeyen bir Koç burcuyla karşılaşma ihtimaliniz düşüktür. Amaçları için mücadele etmeyi görev edinir, birlikteliğe ve takım çalışmasına önem verirler.</p>
                    <br />
                    <p>Koç burcu insan vücudunda başı yönetir ve başla birlikte harekete geçer. Kelimenin tam anlamıyla başları dik yürürler. Doğal olarak cesurdurlar ve bir şeyi denemekten ya da risk almaktan nadiren korkarlar. Hangi yaşta olursalar olsunlar bir gencin gücüne ve enerjisine sahip olurlar; verilen herhangi bir görevi çabucak yerine getirirler.</p>


                </div>
            </div>



        </div>

    )
}

export default Koc