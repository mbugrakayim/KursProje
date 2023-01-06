import React, { useEffect, useMemo, useState } from 'react'
import style from './BilgiYarismasi.module.css'
import Trivia from './Trivia';
import Timer from './Times';

function BilgiYarismasi() {
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("0 TL");
    const data = [
        {
            id: 1,
            question: "Hangisi Nesne Arayüzlerini ve Soyutlamayı İfade Eder ? ",
            answers: [
                {
                    text: "Class",
                    correct: false,
                },
                {
                    text: "Method",
                    correct: false,
                },
                {
                    text: "Collections",
                    correct: false,
                },
                {
                    text: "Interface",
                    correct: true,
                },
            ],
        },
        {
            id: 2,
            question: "Bir Sınıfa ait tüm nesnelerin erişebileceği, sınıfa özgü olan nesne ve değişkenleri belirleyen Anahtar Kelime Hangisidir ?",
            answers: [
                {
                    text: "static",
                    correct: true,
                },
                {
                    text: "public",
                    correct: false,
                },
                {
                    text: "private",
                    correct: false,
                },
                {
                    text: "protected",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Tabloları Birleştirmek için Kullanılan İnner, Left, Right ve Outer Join yapıları ile ilgili açıklamalardan Hangisi Doğrudur ?",
            answers: [
                {
                    text: "İnner Join'de , Outer Join yöntemiyle gelmeyen kayıtları gelmesini sağlar",
                    correct: false,
                },
                {
                    text: "Outer Join Veri Tekrarını önler",
                    correct: false,
                },
                {
                    text: "Outer Join Eşiti Olan Birleştirme diye geçer.",
                    correct: false,
                },
                {
                    text: "İnner Join Veri Tekrarını Önler",
                    correct: true,
                },
            ],
        },{
            id: 4,
            question: "Emp ( Id, Name, DeptId )  ve Dept ( Id, Name) şemadaki tablolarda Emp tablosunda 10 kayıt , Dept tablosunda ise 5 kayıt yer almaktadır. Select * From Emp, Dept  Sorgusuna Göre sonuç cıktısında kaç Row listelenir ?",
            answers: [
                {
                    text: "10",
                    correct: false,
                },
                {
                    text: "5",
                    correct: false,
                },
                {
                    text: "50",
                    correct: true,
                },
                {
                    text: "15",
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question: "Bellek Üzerinde En Az Yer Kaplayan Veri Türü Hangisidir ?",
            answers: [
                {
                    text: "bool",
                    correct: true,
                },
                {
                    text: "byte",
                    correct: false,
                },
                {
                    text: "short",
                    correct: false,
                },
                {
                    text: "char",
                    correct: false,
                },
            ],
        },{
            id: 6,
            question: "Aşağıdaki Anahtar Kelimelerden Hangisi bir Sınıftan Nesne Üretmemizi Sağlar ?",
            answers: [
                {
                    text: "this",
                    correct: false,
                },
                {
                    text: "new",
                    correct: true,
                },
                {
                    text: "super",
                    correct: false,
                },
                {
                    text: "Hiçbiri",
                    correct: false,
                },
            ],
        },{
            id: 7,
            question: "Hangisi DDL Komutu Değildir ?",
            answers: [
                {
                    text: "Delete",
                    correct: true,
                },
                {
                    text: "Truncate",
                    correct: false,
                },
                {
                    text: "Create",
                    correct: false,
                },
                {
                    text: "Drop",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: "Select , Insert ve Update Hangi Komut Türüne Aittir ?",
            answers: [
                {
                    text: "DDL (Data Definition Language)",
                    correct: false,
                },
                {
                    text: "DML (Data Manipulation Language)",
                    correct: true,
                },
                {
                    text: "DCL (Data Control Language)",
                    correct: false,
                },
                {
                    text: "TCL (Transaction Control)",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "1-Super Anahtar Kelimesi :super class içindeki metotlara field’lara ve constructor’lara erişmek için kullanılır.\n2-This Anahtar Kelimesi : aynı sınıfa ait olan field’lara, metotlara ve constructor’lara erişilebilir\nSuper ve This Anahtar Kelimeleri İçin Açıklamalardan Hangileri Doğrudur ?",
            answers: [
                {
                    text: "1-Doğru 2-Doğru",
                    correct: true,
                },
                {
                    text: "1-Yanlış 2-Doğru",
                    correct: false,
                },
                {
                    text: "1-Yanlış 2-Yanlış",
                    correct: false,
                },
                {
                    text: "1-Doğru 2- Yanlış",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question: "Aşağıdakilerden Hangisi Sonsuz Döngüye Neden Olmaz ?",
            answers: [
                {
                    text: "for(int i = 0 ; i < 10 ; i--)",
                    correct: false,
                },
                {
                    text: "for(;;)",
                    correct: false,
                },
                {
                    text: "while(true)",
                    correct: false,
                },
                {
                    text: "for(int i = 0 ; i < 10 ; i++",
                    correct: true,
                },
            ],
        },
    ];
    const moneyPyramid = useMemo(
        () =>
            [
                { id: 1, amount: " 100 TL" },
                { id: 2, amount: " 200 TL" },
                { id: 3, amount: " 300 TL" },
                { id: 4, amount: " 500 TL" },
                { id: 5, amount: " 1.000 TL" },
                { id: 6, amount: " 2.000 TL" },
                { id: 7, amount: " 4.000 TL" },
                { id: 8, amount: " 8.000 TL" },
                { id: 9, amount: " 16.000 TL" },
                { id: 10, amount: " 32.000 TL" },
                { id: 11, amount: " 64.000 TL" },
                { id: 12, amount: " 125.000 TL" },
                { id: 13, amount: " 250.000 TL" },
                { id: 14, amount: " 500.000 TL" },
                { id: 15, amount: " 1.000.000 TL" },
            ].reverse(),
        []
    );
    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);
    return (


        <div className={style.app}>
            <div className={style.main}>
                {timeOut ? (
                    <>
                        <h1 className={style.endText}>Akıyor Bu Akşam Maşallah: {earned}</h1>
                        <button className={style.startButton} onClick={(e)=>window.location.reload() }>Sar Başa</button>
                    </>

                ) : (
                    <>
                        <div className={style.top}>
                            <div className={style.timer}>
                                <Timer
                                    setTimeOut={setTimeOut}
                                    questionNumber={questionNumber}
                                />
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <Trivia
                                data={data}
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                                setTimeOut={setTimeOut}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className={style.pyramid}>
                <ul className={style.moneyList}>
                    {moneyPyramid.map((m , index) => (
                        <li key={index}
                            className={
                                questionNumber === m.id
                                    ? style.moneyListItemActive
                                    : style.moneyListItem
                            }
                        >
                            <span className={style.moneyListItemNumber}>{m.id}</span>
                            <span className={style.moneyListItemAmount}>{m.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default BilgiYarismasi