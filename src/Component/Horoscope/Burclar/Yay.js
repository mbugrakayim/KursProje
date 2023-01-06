import React from 'react'
import styles from './Burclar.module.css'
import yayImg from '../images/yay.jpg'
function Yay({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={yayImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Yay burcu dört değişken burçtan biridir (diğerleri İkizler, Başak ve Balık’tır). Değişken burçlar mevsimleri sona erdiren burçlardır ve her mevsimden dersler almışlardır. Her şeyin bir sonu olduğunu bilirler ve görevleri herkesi mevsim değişimine uyum sağlamalarına yardımcı olmaktır. Diğer burçlardan daha bilgedirler. Diğer burçlara göre değişime daha kolay ayak uydurabilirler; pek çok duruma uyum sağlamak için bukalemun gibi renk değiştirirler. Ayrıca Zodyak’ın düzeltmenidirler: Kardinaller bir plan öne sürer, sabitler planı eyleme döker, değişkenler ise eleştirel bir gözle son rötuşları yapar.</p>
                    <br />
                    <p>Yay burcu, ateş elementiyle yönetilen üç burçtan biridir (diğer iki ateş burcu Koç ve Aslan’dır). Yay burcu üçüncü ve sonuncu ateş burcu olduğu için Koç ve Aslan burcunun yarattığı liderlik ateşini dizginleyerek evrensel bir bilgi ve eylem süpernovasına dönüştürür. Zodyak’ın en ilham verici ve iyimser burcu olan Yay burcu bizi meselelerin üstesinden gelmeye ve sınırsız olasılıkların peşinden gitmeye zorlar. Yay burcu gezegen geçişi sırasında seyahat etmeye, öğrenmeye, kültürler arası bağlantı kurup ufkumuzu genişletmeye istekli olabiliriz. Diğer ateş burçları gibi Yay burcunun da sürekli olarak dünyayla temas halinde olması gereklidir.</p>
                    <br />
                    <p>Yay burcunun yönetici gezegeni, güneş sistemimizin en büyük gezegeni Jüpiter’dir. Bu nedenle bu burcun insanları “hayatın kendisinden daha büyük” olabilirler. Nasıl ki Jüpiter gezegenler arasında gaz devlerinden biriyse, kendinden çok emin olan Yay enerjisi de zaman zaman hava gazıyla dolu görünebilir. Bir şey hakkında düşünmeden üzerine atlamak Yay burcunun âdetlerinden biridir. Neyse ki Jüpiter şans getirir ve ayaklarımızı yere sağlam basmamızı sağlar. Yay insanları her şeyin en büyüğünü ve en iyisini isterler; öyle ki zaman zaman aşırıya kaçabilirler. Sınırsız hedonizm ve rahatına düşkünlük, Yay enerjisini kötü bir enerjiye dönüştürebilir.</p>
                    <br />
                    <p>Yay enerjisi kendisini aydınlanma, yolculuk ve doğruluk aracılığıyla gösterir. Meraklı Yay burcu bizi büyüme ve öğrenmeye aç hale getirir, hayatın anlamını bulmamıza yardımcı olacak maceralara sürükler. Felsefi yanı güçlü olan Yay burcu harikulade tartışmalara ilham verir, hayatı derinleştirir. Durmak nedir bilmeyen Yay burcu insanları dış mekân aktivitelerini sever; bu nedenle Yay burcu etkisi altındayken kendinizi yıldızların altında kamp yaparken ya da yeni bir şehri keşfederken bulabilirsiniz. Yay burcunun coşkulu yanı risk almamıza yardımcı olurken altından kalkamayacağımız işlere bulaşmamıza da sebep olabilir; bu nedenle bu burcun etkisi altındayken sınırlarımızı bilmemiz gerekir. Yoksa büyük bir heyecanla yeni projelere başlayıp yarım bırakabiliriz.</p>

                </div>
            </div>
        </div>
    )
}

export default Yay