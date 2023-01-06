import React from 'react'
import styles from './Burclar.module.css'
import ikizlerImg from '../images/ikizler.jpg'
function Ikizler({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={ikizlerImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. İkizler burcu dört değişken burçtan biridir (diğerleri Başak, Yay ve Balık’tır). Değişken burçlar mevsimleri sona erdiren burçlardır ve her mevsimden dersler almışlardır. Her şeyin bir sonu olduğunu bilirler ve görevleri herkesin mevsim değişimine uyum sağlamasına yardımcı olmaktır. Diğer burçlardan daha bilgedirler. Diğer burçlara göre değişime daha kolay ayak uydurabilirler; pek çok duruma uyum sağlamak için bukalemun gibi renk değiştirirler. Ayrıca Zodyak’ın düzeltmenidirler: Kardinaller bir plan öne sürer, sabit burçlar planı eyleme döker, değişken burçlar ise eleştirel bir gözle son rötuşları yapar.</p>
                    <br />
                    <p>Zodyak’ta hava elementine sahip olan ilk burç İkizler olduğu için İkizler burcu, değişim ve iletişim rüzgârlarını başlatan ilk rüzgâr gibidir. İkizler burcu, büyük ve yaratıcı bir sinerji oluşturarak bir anda insanları iletişime geçirir. İkizler burcu gezegen döngüsündeyken hepimiz arkadaşlarımızla daha fazla zaman geçirmeye meyilli oluruz.</p>
                    <br />
                    <p>Enerjisi hızlı ve telaşlıdır. İkizler burcu iletişimi yönetir; esprili kelime oyunlarına, dinamik diyaloglara ilham verir. İkizler burcu geçişleri beyin fırtınaları ve sosyalleşme açısından harika bir dönemdir. Ayrıca bu burç, fikirlerin buluşmasından yanadır. İkizler burcu gezegen geçişi sırasında konuşma yetilerimiz gelişir; arkadaşlarımızla saatler boyunca o konudan bu konuya konuşurken bulabiliriz kendimizi. Öte yandan hayatın inişli çıkışlı yönünü temsil eder; ayak uydurmayı becerebilirseniz müthiş bir heyecan yaşamış olursunuz.</p>
                    <br />
                    <p>İkizlerin doğası çocuk masumiyetine sahiptir; kardeşliğe, birbirinden tamamen farklı kişiliklere sahip olan dostlar ve akrabalar arası sevgiye olan inançlarını temsil eder. Bu burcun insanlarının görevi farklılıkları birleştirmek ve canlarını kardeşleri ya da arkadaşları uğruna feda etmeye hazır hâle getirmektir.</p>
                    <br />

                </div>
            </div>
        </div>
    )
}

export default Ikizler