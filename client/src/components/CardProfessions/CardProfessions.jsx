import React from "react";
import s from './CardProfessions.module.scss';



const CardProfessions = (job) => {
    let profession = job
    return (
    <div className={s.professionComponent}>
        <div className={s.professionAndDescription}>
            <h1>{profession.job}</h1>
        </div>
        <div className={s.professionStats}>
            <h3>Reseñas</h3>
            <h4>13</h4> 
            {/*arriba irian en el h4 {profession.reviews} */}
        </div>
        <div className={s.professionStats}>
            <h3>Calificación</h3>
            <h4>3.2</h4>
             {/*arriba irian en el h4 {profession.rating} */}
        </div>
    </div>
    )
}

export default CardProfessions

