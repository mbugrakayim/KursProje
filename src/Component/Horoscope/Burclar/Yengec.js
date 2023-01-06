import React from 'react'
import styles from './Burclar.module.css'
import yengecImg from '../images/yengec.jpg'
function Yengec({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={yengecImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Yengeç burcu dört
                        kardinal burçtan biridir. Bu burçlar mevsimleri başlatır. Koç, baharı; Yengeç, yazı; Terazi, sonbaharı;
                        Oğlak ise kışı başlatır. Bu burçlar özgün olmayı severler ve yaptıkları her şeyde birinci olmayı isterler.
                        Akım belirleyicidirler; arkadaş ortamlarında partileri, organizasyonları onlar başlatır.</p>
                    <br />
                    <p>Yengeç burcu, tıpkı Akrep ve Balık gibi su elementine bağlıdır. Zodyak’ın ilk su burcu olduğu için, duygu
                        denizinin ve yaratıcı suların akmasını sağlayan bir nehir gibidir. Yengeç burcu insanları etrafındaki
                        herkesin mutlu olmasını ister. Yengeç gezegen döngüsü etkisi altındayken ailemizle ve sevdiklerimizle vakit
                        geçirme ihtiyacı hissederiz.</p>
                    <br />
                    <p>Duyguları ve kalpleri tarafından yönetilen Yengeçler kalabalığa karışmakta güçlük çekerler. Yengeç burcu
                        Dünya’ya en yakın, duygularımızı en çok etkileyen, iç benliğimizi yöneten, derin arzularımızı ve duygusal
                        isteklerimizi ortaya çıkaran bir gök cismi olan Ay tarafından yönetilir; Ay döngüsünün fazları Yengeçlerin
                        içsel gizemlerini derinleştirir ve onların kontrolü dışında, kısa süreli duygusal örüntüler yaratır.
                        Hayatlarının ileriki dönemlerinde ruhsal çalkantılar nedeniyle sabırsızlık, sevgisizlik, bencillik, kendine
                        acıma veya manipülasyon gibi huylar ortaya çıkabilir. Öte yandan hayatlarından memnun oldukları dönemlerde
                        başkalarına yardım etmeyi, çatışmadan kaçınmayı severler.</p>
                    <br />
                    <p>Yengeç enerjisi, tıpkı bir yengeç kıskacı gibi, iş güvenliğinden aile üyelerine kadar rahatlığa dört elle
                        sarılmamıza sebep olur. Ayrıca tıpkı yengecin evini sırtında taşıması gibi, Yengeç burcu insanları da nereye
                        giderseler gitsinler kendilerine güvenli ve rahat bir ortam yaratmaya çalışırlar. Değişim, kök salmayı seven
                        bu burcu huzursuz eder.<br />
                        Yengeç burcu gezegen geçişi sırasında kendimizi duygusal ve nostaljik hissedebiliriz. Duygular ve sezgiler
                        mantığın ve zekânın önüne geçer. Bu dönemler kendimizi ve sevdiklerimizi beslememiz gereken dönemlerdir.
                        Yengeç enerjisi ruhun gıdasıdır ve bir kez bu gıdanın tadına baktığınızda sakinleşmiş, doymuş hissedersiniz.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Yengec