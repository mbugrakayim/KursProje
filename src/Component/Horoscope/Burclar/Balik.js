import React from 'react'
import styles from './Burclar.module.css'
import balikImg from '../images/balık.jpg'
function Balik({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={balikImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Balık burcu dört değişken burçtan biridir (diğerleri İkizler, Yay ve Başak’tır). Değişken burçlar mevsimleri sona erdiren burçlardır ve her mevsimden dersler almışlardır. Her şeyin bir sonu olduğunu bilirler ve görevleri herkesi mevsim değişimine uyum sağlamalarına yardımcı olmaktır. Diğer burçlardan daha bilgedirler. Diğer burçlara göre değişime daha kolay ayak uydurabilirler; pek çok duruma uyum sağlamak için bukalemun gibi renk değiştirirler. Ayrıca Zodyak’ın düzeltmenidirler: Kardinaller bir plan öne sürer, sabitler planı eyleme döker, değişkenler ise eleştirel bir gözle son rötuşları yapar.</p>
                    <br />
                    <p>Balık burcu su elementine bağlı üç Zodyak burcundan biridir (diğerleri Yengeç ve Akrep’tir). Balık burcu üçüncü ve sonuncu su burcu olduğu için Yengeç’in duygu dalgalarını ve Akrep’in tazyikli sularını duyguların okyanusuna akıtır. Balık enerjisi aktif hale geldiğinde derinlere dalmaya hazır olun; Balık enerjisi şefkatimizi uyandırır, kalplerimizi acı çeken insanlara açmamızı sağlar. Balık burcu gezegen döngüsü sırasında bu enerjinin farkında olsak da olmasak da etrafımızdaki insanlarla sezgisel olarak bağlantı kurabiliriz. Ayrıca kendimizi yaratıcı yollarla ifade edebiliriz: Müzik, film, görsel sanatlar ve dans; tüm bunlar Balık’ın uzmanlık alanıdır.</p>
                    <br />
                    <p>Balık’ın yönetici gezegeni Neptün’dür. Bu nedenle Balıklar diğer burçlara göre daha sezgiseldir ve daha fazla sanatsal yeteneğe sahiptir. Balık burcu insanları cömert, şefkatli, son derece vefalı ve ilgilidir. Yaşam döngüsüne dair sezgisel bir kavrayışları vardır ve bu sayede diğer canlılarla duygusal bir ilişki kurabilirler. Balık burçları bilgelikleriyle bilinirler lakin Uranüs’ün etkisi altındayken bazen dikkat çekmek için şehit rolünü üstlenebilirler. Asla eleştirel olmayan Balık burçları her zaman bağışlayıcıdır. Zodyak burçlarının en hoşgörülüsü olarak bilinirler.</p>
                    <br />
                    <p>Balık burcu illüzyonların, gölgelerin ardında bir görünüp bir kaybolmaların burcudur. Tıpkı Yunan mitolojisindeki Sirenler gibi, Balık burcu da sizi kendi derin sularına çeker ve sonra da duygular okyanusunda boğulmaya bırakabilir. Şefkatli Balık burcu empatiktir, iletişim halinde olduğu herkesin duygularını kavrar ve yansıtır. Zodyak’ın en bilge burcudurlar: En sonuncu burç oldukları için kendilerinden önce gelen her burcun enerjisini deneyimlemişlerdir. Balık enerjisi son derece derindir, asla yüzeye çıkmaz. Esasen bu burç bilinçaltını yönetir ve rüyalarımıza, hayallerimize, iyileşmemiş yaralarımıza hükmeder. Balık burcu gezegen geçişi sırasında kendimize sınırlar çizmek zorunda kalabiliriz; ayrıca şehit rolünü oynamaktan, bağımlı ilişkilerden kaçınmamız gerekebilir.</p>


                </div>
            </div>



        </div>
    )
}

export default Balik