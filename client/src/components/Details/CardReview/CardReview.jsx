import React from "react";
import s from './CardReview.module.scss';
import userImg from './assets/userimage.jpg'
import star from './assets/star.svg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getChars } from "../../../redux/userActions";
import noUserImg from '../../FeaturedCard/assets/default_user.png'

let order = {}
const CardReview = ({ dataObj, reviewer }) => {
  const data = dataObj
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getChars())
  // },[])
  console.log('reviewer:', reviewer)
  return (
    <div className={s.orders}>
      <div className={s.imgDetail}>
        {
          reviewer ? <img src={reviewer.image} alt="imagen"></img> : <img src={noUserImg}></img>
        }
      </div>

      <div className={s.orderDetail}>
        {
          reviewer ? <h1>{reviewer.name}</h1> : <h1>Usuario anonimo</h1>
        }

        <h2>{data.feedback_client}</h2>
      </div>
      <div className={s.orderDetail2}>
        <h3><img src={star} /> {data.rating}</h3>
      </div>
    </div>
  )
}

export default CardReview
