import React from 'react'
import styles from './Burclar.module.css'
import bogaImg from '../images/boga.jpg'
function Boga({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={bogaImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Boğa burcu dört sabit burçtan biridir; diğer dört sabit burç ise Aslan, Akrep ve Kova’dır. Bu burçlar her mevsimin ortasına denk gelir. Bunlar dengeleyici burçlardır; kendilerine bir amaç belirler ve sonra da inşa etmeye başlarlar. Öncü burçların öne attığı heyecanlı fikirleri alır, bunları somut bir şeye dönüştürürler.</p>
                    <br />
                    <p>Boğa burcu toprak elementi altında gruplanan üç burçtan biridir (diğerleri Başak ve Oğlak’tır). Zodyak döngüsündeki ilk toprak burcu olduğu için binayı oluşturan temel gibidir. Çoğu Boğa insanı dengeleyicidir, kendileri ve başkaları için güvenliği sağlamaya çalışırlar. Meseleleri ayakları yere basan, pratik ve gerçekçi bir bakış açısıyla görmeye meyillidirler. Boğa burcu için para kazanmak kolaydır ve yıllarca aynı proje üzerinde çalışabilirler.</p>
                    <b />
                    <p>Hantal ve inatçı bir burç olan Boğa burcu enerjisinin iki farklı hızı vardır: Ya çayırda otlayan bir öküz gibi gevşemiş bir haldedir ya da boğa güreşindeki bir boğa gibi coşkulu. Boğa burcu içsel bir enerji tasarrufu programına sahiptir. Eğer bir şey zaman ve kaynak yatırımına değerse sabırlı bir şekilde ona ulaşır. Yaptığı işi küçük aşamalara bölmeyi sever.</p>
                    <br />
                    <p>Her ne kadar inatçılıkları olumsuz yanları olsa da bu inatçılıkları bağlılık olarak da adlandırılabilir; her ne olursa olsun görevleri yerine getirme yetenekleri muazzamdır. Bu da onları harika çalışanlar yapan bir özelliktir. Ayrıca uzun süreli arkadaşlık ve sevgililik de Boğa burcunun özelliğidir.</p>
                    <br />
                    <p>Boğa burcunun yönetici gezegeni aşkın, cazibenin, güzelliğin, tatminin, yaratıcılığın ve kadirşinaslığın gezegeni olan Venüs’tür. Boğa burçları sadıktır ve ani değişiklikleri, eleştirileri sevmezler.&nbsp;</p>

                </div>
            </div>
        </div>
    )
}

export default Boga