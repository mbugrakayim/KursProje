import React, { useEffect, useState } from 'react'
import style from './BilgiYarismasi.module.css'

function Trivia({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState(style.answer);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };
    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName(style.answerActive);
        delay(3000, () => {
            setClassName(a.correct ? style.answerCorrect : style.answerWrong);
        });
        // setTimeout(() => {
        //   setClassName(a.correct ? "answer correct" : "answer wrong");
        // }, 3000);

        // setTimeout(() => {
        delay(5000, () => {
            if (a.correct) {
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                });
                // setTimeout(() => {
                //   setQuestionNumber((prev) => prev + 1);
                //   setSelectedAnswer(null);
                // }, 1000);
            } else {
                delay(1000, () => {
                    setTimeOut(true);
                });
                // setTimeout(() => {
                //   setTimeOut(true);
                // }, 1000);
            }
            // }, 5000);
        })
    };
    return (
        <div className={style.trivia}>
            <div className={style.question}>{question?.question}</div>
            <div className={style.answers}>
                {question?.answers.map((a, index) => (
                    <div key={index}
                        className={selectedAnswer === a ? className : style.answer}
                        onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trivia