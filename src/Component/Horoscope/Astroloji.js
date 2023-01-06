import React, { useState } from 'react'
import styles from './Horos.module.css';
import imgKoc from './images/koc.jpg';
import imgBoga from './images/boga.jpg';
import imgIkiz from './images/ikizler.jpg';
import imgYen from './images/yengec.jpg';
import imgAs from './images/aslan.jpg';
import imgBas from './images/basak.jpg';
import imgTer from './images/terazi.jpg';
import imgAkrep from './images/akrep.jpg';
import imgYay from './images/yay.jpg';
import imgOg from './images/oglakk.jpg';
import imgKova from './images/kova.jpg';
import imgBal from './images/balık.jpg';
import Koc from './Burclar/Koc';
import Akrep from './Burclar/Akrep';
import Aslan from './Burclar/Aslan';
import Balik from './Burclar/Balik';
import Basak from './Burclar/Basak';
import Boga from './Burclar/Boga';
import Ikizler from './Burclar/Ikizler';
import Kova from './Burclar/Kova';
import Oglak from './Burclar/Oglak';
import Terazi from './Burclar/Terazi';
import Yay from './Burclar/Yay';
import Yengec from './Burclar/Yengec';


function Astroloji() {
    const [popUpKoc, setPopUpKoc] = useState(false);
    const [popUpAkrep, setPopUpAkrep] = useState(false);
    const [popUpAslan, setPopUpAslan] = useState(false);
    const [popUpBalik, setPopUpBalik] = useState(false);
    const [popUpBasak, setPopUpBasak] = useState(false);
    const [popUpBoga, setPopUpBoga] = useState(false);
    const [popUpIkizler, setPopUpIkizler] = useState(false);
    const [popUpKova, setPopUpKova] = useState(false);
    const [popUpOglak, setPopUpOglak] = useState(false);
    const [popUpTerazi, setPopUpTerazi] = useState(false);
    const [popUpYay, setPopUpYay] = useState(false);
    const [popUpYengec, setPopUpYengec] = useState(false);
    return (
        <div className={styles.body}>
            <div className={styles.slider}>
                <span style={{ "--i": 1 }}>
                    <a href="#koc" onClick={() => setPopUpKoc(true)}>
                        <img src={imgKoc} alt="" />
                    </a>
                </span>
                <span style={{ "--i": 2 }}><a href="#boga" onClick={() => setPopUpBoga(true)} ><img src={imgBoga} alt="" /></a></span>
                <span style={{ "--i": 3 }}><a href="#ikizler" onClick={() => setPopUpIkizler(true)}><img src={imgIkiz} alt="" /></a></span>
                <span style={{ "--i": 4 }}><a href="#yengec" onClick={() => setPopUpYengec(true)}><img src={imgYen} alt="" /></a></span>
                <span style={{ "--i": 5 }}><a href="#aslan" onClick={() => setPopUpAslan(true)}><img src={imgAs} alt="" /></a></span>
                <span style={{ "--i": 6 }}><a href="#basak" onClick={() => setPopUpBasak(true)}><img src={imgBas} alt="" /></a></span>
                <span style={{ "--i": 7 }}><a href="#terazi" onClick={() => setPopUpTerazi(true)}><img src={imgTer} alt="" /></a></span>
                <span style={{ "--i": 8 }}><a href="#akrep" onClick={() => setPopUpAkrep(true)}><img src={imgAkrep} alt="" /></a></span>
                <span style={{ "--i": 9 }}><a href="#yay" onClick={() => setPopUpYay(true)}><img src={imgYay} alt="" /></a></span>
                <span style={{ "--i": 10 }}><a href="#oglak" onClick={() => setPopUpOglak(true)}><img src={imgOg} alt="" /></a></span>
                <span style={{ "--i": 11 }}><a href="#kova" onClick={() => setPopUpKova(true)}><img src={imgKova} alt="" /></a></span>
                <span style={{ "--i": 12 }}><a href="#balik" onClick={() => setPopUpBalik(true)}><img src={imgBal} alt="" /></a></span>
            </div>
            {popUpKoc && <Koc closePopUp={setPopUpKoc} />}
            {popUpAkrep && <Akrep closePopUp={setPopUpAkrep} />}
            {popUpAslan && <Aslan closePopUp={setPopUpAslan} />}
            {popUpBalik && <Balik closePopUp={setPopUpBalik} />}
            {popUpBasak && <Basak closePopUp={setPopUpBasak} />}
            {popUpBoga && <Boga closePopUp={setPopUpBoga} />}
            {popUpIkizler && <Ikizler closePopUp={setPopUpIkizler} />}
            {popUpKova && <Kova closePopUp={setPopUpKova} />}
            {popUpOglak && <Oglak closePopUp={setPopUpOglak} />}
            {popUpTerazi && <Terazi closePopUp={setPopUpTerazi} />}
            {popUpYay && <Yay closePopUp={setPopUpYay} />}
            {popUpYengec && <Yengec closePopUp={setPopUpYengec} />}

        </div>

    )
}
export default Astroloji;