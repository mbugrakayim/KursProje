import React from 'react'
import styles from './Burclar.module.css'
import oglakImg from '../images/oglakk.jpg'
function Oglak({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={oglakImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Yengeç burcu dört kardinal burçtan biridir. Bu burçlar mevsimleri başlatır. Koç, baharı; Yengeç, yazı; Terazi, sonbaharı; Oğlak ise kışı başlatır. Bu burçlar özgün olmayı severler ve yaptıkları her şeyde birinci olmayı isterler. Akım belirleyicidirler; arkadaş ortamlarında partileri, organizasyonları onlar başlatır.</p>
                    <br />
                    <p>Oğlak burcu toprak elementine bağlı üç Zodyak burcundan biridir (diğerleri Boğa ve Başak’tır). Oğlak burcu üçüncü ve sonuncu toprak burcu olduğu için, Boğa burcunun kaya gibi sağlam temelleriyle Başak burcunun hünerli planlarını büyük bir binaya dönüştürerek dünyaya hükmedeceği bir yer haline getirir. Oğlaklar Zodyak’ın usta stratejistleridir, her zaman bir beş-on yıllık planları vardır. Oğlak burcu gezegen döngüsünün etkisi altındayken en büyük hedeflerimizi gerçekleştirmeye ve hayatımızda uzun süreli yapılar inşa etmeye istekli hale geliriz.</p>
                    <br />
                    <p>Oğlak burcu sadece maddi dünyaya odaklanmakla kalmaz, bu dünyayı kullanmayı da becerebilirler. Ne yazık ki toprak elementi onları aynı zamanda sert ve bazen de inatçı kılar; o kadar ki bir ilişkide başka bir perspektiften bakmayı beceremezler. Kendi kişiliklerinden çok farklı olan insanların farklılıklarını kabullenmekte zorlanır ve kendi geleneksel değerlerini dayatmaya çalışabilirler.</p>
                    <br />
                    <p>Oğlak burcunun yönetici gezegeni acımasız ve otoriter Satürn’dür. Ayrıca Satürn psikolojik baskının gezegenidir; bu da Oğlak’ın yıkıcı tavırlarla çıkagelmesine sebep olabilir. Oğlak burcunun kaya gibi görüntüsünün altında korkunç sırlarla karşılaşırsanız şaşırmayın. Satürn’ün etkisi insanları pratik ve sorumluluk sahibi kişiler olmaya itse de diğer yandan da soğuk, mesafeli ve bağışlamaz insanlar olmalarına, suçluluk duygusu hissetmelerine ve geçmişe dönmelerine sebep olur.</p>
                    <br />
                    <p>Oğlak enerjisi inatçı ve kararlıdır; yüce hedeflere adanmış bir enerjidir. Zihnimizi sonuca odaklamamıza ve bitiş çizgisine ulaşmamıza yardımcı olur. Bitiş çizgisine ulaşmak destansı bir yolculuk olabilir; bu nedenle Oğlak’ın çelik gibi sinirlerine ve mukavemetine ihtiyaç duyarız. Az kullanılan yollardan gitmek bu geleneksel burcun tercih edeceği bir şey değildir. Bunun yerine Oğlak burcu zirveye ulaşan en düz ve en basit yolun haritasını çıkarır ve sonra da planına sadık kalır. Oğlak enerjisi son derece sert ve çıkarcı olabilir; vazifeşinas tarafı çöküşüne yol açabilir.</p>

                </div>
            </div>
        </div>
    )
}

export default Oglak