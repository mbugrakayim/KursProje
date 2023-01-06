import React from 'react'
import styles from './Burclar.module.css'
import basakImg from '../images/basak.jpg'
function Basak({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={basakImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Başak burcu dört değişken burçtan biridir (diğerleri İkizler, Yay ve Balık’tır). Değişken burçlar mevsimleri sona erdiren burçlardır ve her mevsimden dersler almışlardır. Her şeyin bir sonu olduğunu bilirler ve görevleri herkesi mevsim değişimine uyum sağlamalarına yardımcı olmaktır. Diğer burçlardan daha bilgedirler. Diğer burçlara göre değişime daha kolay ayak uydurabilirler; pek çok duruma uyum sağlamak için bukalemun gibi renk değiştirirler. Ayrıca Zodyak’ın düzeltmenidirler: Kardinaller bir plan öne sürer, sabitler planı eyleme döker, değişkenler ise eleştirel bir gözle son rötuşları yapar.</p>
                    <br />
                    <p>Başak burcu toprak elementiyle yönetilen üç burçtan biridir. Diğer toprak burçları ise Boğa ve Oğlaktır. Başak burcu Zodyak’taki ikinci toprak burcu olduğu için Boğa’nın işi bıraktığı yerden devralır ve hızlıca kusursuz inşa bir planı yaparak Boğa’nın attığı sağlam temeller üzerinde yükselir. Başak burcu gezegen döngüsü sırasında ayrıntılar içinde ilahi olanı çabucak tespit eder, santim santim eksiksiz bir plan hazırlar ve hedeflerimizi yerine getiririz. Başak enerjisi bizi yeni bir çalışma rutini denemeye ya da o güne kadar benimsediğimiz sistemi yenilemeye teşvik eder. Ayrıca insanları gelecek konusunda endişeli (hatta evhamlı) hale getirebilir. Başak burcu gezegen geçişleri sırasında “ya öyle olursa”lara takılıp kalabiliriz.</p>
                    <br />
                    <p>Başak’ın Boğa ve Oğlak’ın arasında bir toprak burcu olması onu güçlü ama muhafazakâr bir kişi olmaya iter. Gündelik hayatında düzenli ve pratiktir. Hayatları alt üst olduğu zaman bile düzenli bir hayat sürdürürler, hedefleri ve hayallerine bağlı kalırlar. Telafi edilmesi mümkün olmayan bir ayrıntıyı kaçırdıklarından sürekli endişe ettikleri için ayrıntılar içinde kaybolabilir, aşırı eleştirel olabilir ve diğer insanların pek önemsemediği meselelere kafa yorabilirler.</p>
                    <br />
                    <p>Başak burcu, verimlilik bilincine sahip olmamıza ve fiziksel gerçekliklerimizi kavramamıza yardımcı olur. Öte yandan bizi mükemmeliyetçiliğe sürükler: Başak burcu gezegen geçişi sırasında kendimizi en ince detaylarına kadar işlenmiş binlerce karar vermek isteyip de bir adım atamazken bulabiliriz. Başak burcu seçiciliğinin ve yüksek standartlarının faydalı yönleri olsa da ilişkilerimizi mahvedebilir de.</p>

                </div>
            </div>
        </div>
    )
}

export default Basak