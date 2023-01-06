import React from 'react'
import styles from './Burclar.module.css'
import teraziImg from '../images/terazi.jpg'
function Terazi({ closePopUp }) {
    return (
        <div className={styles.popUpBack}>
            <div className={styles.popUpContainer}>
                <div className={styles.closeBtn}>
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className={styles.over}>

                    <img className={styles.sol} src={teraziImg} alt="" style={{ width: "200px", height: "200px", borderRadius: "66px" }} />

                    <h2>GENEL ÖZELLİKLER</h2>
                    <p>Burçlar üç farklı niteliğe göre gruplanır: kardinal (öncü), değişken ve sabit burçlar. Terazi burcu dört kardinal burçtan biridir. Bu burçlar mevsimleri başlatır. Koç, baharı; Yengeç, yazı; Terazi, sonbaharı; Oğlak ise kışı başlatır. Bu burçlar özgün olmayı severler ve yaptıkları her şeyde birinci olmayı isterler. Akım belirleyicidirler; arkadaş ortamlarında partileri, organizasyonları onlar başlatır.</p>
                    <br />
                    <p>Terazi burcu hava elementi ile yönetilen üç burçtan biridir. Diğerleri ise İkizler ve Kova’dır. Terazi burcu ikinci hava burcu olduğu için, İkizler’in başlattığı iletişim rüzgarlarını nezaket, görgü ve toplumsal bağ rüzgarlarına dönüştürür. Ama Terazi burcunun rüzgarları fırtına gücünde değildir; değişim rüzgarlarını o kadar nazik ve yumuşak bir şekilde getirir ki başka bir noktaya ulaştığınızı güçbela anlarsınız. Hava elementinin özü iletişim ve zekâdır; fikirlerin yayılmasına yardımcı olur. Terazi’nin kişiler arası anlayış gücü de buna eklendiğinde, bağlılıklar, faydalı diyaloglar, başarılı ilişkiler ortaya çıkar. Terazi burcu gezegen geçişi sırasında, tek başımıza yapmayı beceremediğimiz görevleri yapabilmek için kendimize bir eş arayışı içine girebiliriz. Yönettiği burçlara keskin bir zeka veren hava elementi tarafından yönetilen Terazi burcu, güzel kitapları, bitmek bilmez tartışmaları ve söyleyecek çok şeyi olan insanları sever. Terazi burcunun yönetici gezegeni Venüs bu burcun insanlarının harika sevgililer olmalarını sağlasa da diğer yandan da onları pahalı, maddi değeri yüksek şeylere de düşkün kılar.</p>
                    <br />
                    <p>Adalet terazisi ile sembolize edilen Terazi burcu denge ve adalet timsalidir. Bu burcun etkisi, ne kadar büyük olursa olsun her türlü meselenin dengeye kavuşmasını sağlar. Büyük bir yasal ya da ahlâkî çatışmanın çözülmesinden tutun bir tablonun nereye asılması gerektiğini belirlemeye kadar, Terazi enerjisini kişiler arası ve estetik ahengi tesis etmeden alıkoyacak hiçbir şey yoktur. Terazi burcu gezegen geçişi sırasında ilişkilerimizde tekrardan zemin kazanır ve hayatlarımızda daha fazla denge arayışına gireriz. Terazi enerjisi toplumsal meziyetlerimizi güçlendirir ve dikkatimizi güzelliğe yönlendirir.</p>
                    <br />
                    <p>Terazi burcu insanları barışçıl ve adildir. Yalnız kalmaktan nefret ederler. Yanlarında kendileri için bir ayna görevi görecek birilerinin olmasını isterler. Bu bireylerin en çok hoşuna giden şey denge ve simetridir; her daim adalet ve eşitlik peşindedirler. Öte yandan çatışmadan kaçmak için neredeyse her şeyi yapar, mümkün olan her yerde barışı sürdürmeye çalışırlar.</p>

                </div>
            </div>
        </div>
    )
}

export default Terazi