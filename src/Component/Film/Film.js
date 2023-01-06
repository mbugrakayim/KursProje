import React, { useEffect, useState } from 'react'
import styles from './Film.module.css'
import Films from './Films.json'


function Film() {
    const [filt, setFilt] = useState("");

   const akKadro = (e) =>{
    window.document.title="Mümkünse Geri Gelme"
   }

    return (
        <div className={styles.container}>
            <div className="row  d-flex justify-content-center align-items-center">

                <div className="col-md-8">
                    <div className={styles.search}>
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" onChange={e => setFilt(e.target.value)} placeholder="Looking for a movie? I hope you will find " />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>

            <div className={styles.movieListContainer}>
                {
                    Films.filter(val => {
                        if (filt == "") {
                            return val;
                        } else if (val.filmAdı.toLocaleLowerCase().includes(filt.toLocaleLowerCase())) {
                            return val;
                        }
                    }).map(val => {
                        return (
                            <div className={styles.movieListWrapper} key={val.id}>
                                <a href='https://www.akparti.org.tr' target="_blank" rel="noopener noreferrer"  onClick={e=> akKadro(e)}>
                                   
                                    <img className={styles.movieItemImg} src={val.imgSrc} alt="" />
                                </a>
                                <span className={styles.movieItemTitle}>{val.filmAdı}</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Film;
