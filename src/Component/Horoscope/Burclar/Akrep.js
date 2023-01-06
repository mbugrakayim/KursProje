import React from 'react'
import styles from './Burclar.module.css'
import akrepImg from '../images/akrep.jpg'
function Akrep({closePopUp}) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={akrepImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Akrep burcu dört sabit
                        burçtan biridir; diğer dört sabit burç ise Boğa, Aslan ve Kovadır. Bu burçlar her mevsimin ortasına denk
                        gelir. Bunlar dengeleyici burçlardır; kendilerine bir amaç belirler ve sonra da inşa etmeye başlarlar. Öncü
                        burçların öne attığı heyecanlı fikirleri alır, bunları somut bir şeye dönüştürürler.</p>
                    <br />
                    <p>Akrep burcu su elementine bağlı üç burçtan biridir (diğerleri Yengeç ve Balık’tır). Akrep Zodyak’ın ikinci su
                        burcudur. Görevi kendisinin ve başkalarının duygularını güçlendirmek ve kalıcı hale getirmektir. Diğer su
                        grubu burçları gibi akrep de duyguları deneyimlemek ve ifade etmek için yaşar ancak duygulara çok önem verse
                        de dışarıdan belli etmemesi ile diğer su gruplarından farklıdır. Akrep burcunun pek çok sırrı vardır ve
                        daima sırlarını başkalarından saklayarak yaşar.</p>
                    <br />
                    <p>Akrep burçları tutkulu ve iddialı kişilerdir. Gerçeği öğrenene kadar araştırmak en belirgin
                        özelliklerindendir. Kararlı ve belirleyicidirler. Gerçeğin daima farkında olan ve hayallerden ziyade
                        hedeflere odaklanan akrepler evrenin kurallarını çok iyi bilirler. Bu nedenle başkaları tarafından
                        genellikle sert ve şiddetli bulunurlar ancak bu gerçekçi tutum onlara doğal bir şekilde öne çıkmalarını
                        sağlayan liderlik özelliği verir.</p>
                    <br />
                    <p>Akrep burcu belki de en yanlış anlaşılan ve en gizemli burçlardan biridir. Doğaları gereği kapalı kutu olan
                        bu burç, genelde yüzleşmeye cesaret edemediğimiz karanlık ve saklı yerlerimizle karşılaştırır bizi. Yaşam,
                        ölüm ve yeniden doğuşun burcu olan Akrep burcunun enerjisi hayatın bu döngülerini kucaklar ve sürekli olarak
                        kendini dönüştürerek yeniden üretir. Akrep burcu dört farklı şekilde vücut bulur: paylaşmayı sevmeyen,
                        zehirli akrep şeklinde; kaygan, büyüleyici ama ölümcül yılan şeklinde; delici bakışlarıyla etrafı&nbsp; ve
                        avını izleyen kartal şeklinde; son olarak da sürekli yanan ve her şeyi gören, küllerinden doğan Zümrüdüanka
                        kuşu şeklinde. Akrep burcu gezegen geçişi sırasında yoğun duygularla ve yoğun bir enerjiyle uğraşırken
                        bulabiliriz kendimizi. Akrep enerjisinin özü çekici, tutkulu, sadık, koruyucu, akım belirleyici, kontrolcü,
                        güçlü, karizmatik, dikkatli, şifalı, psişik ve cesur olmaktır. Öte yandan negatif Akrep enerjisi de
                        takıntılı, aşırı sahiplenici, kıskanç, ketum, kindar, acımasız, içten pazarlıklı ve manipülatif olabilir.
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Akrep