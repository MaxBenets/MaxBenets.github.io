import s from "./Footer.module.css";

import totop from "./../../to top.png";

import instagram from "../../img/social/instagram.png";
import telegram from "../../img/social/telegram.png";
import github from "../../img/social/github.png";
import mail from "../../img/social/mail.png";

import loader from "./../../img/loader.gif"

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setRecomendation } from "../../redux/reducers/Footer_reducer";
import { useState } from "react";

export const Footer = () => {
   let dispatch = useDispatch();

   let [loaderActive, setLoaderActive] = useState(true);

   let socialState = [
      { id: 0, link: "https://www.instagram.com/maxbenets.web/", imgSrc: instagram},
      { id: 1, link: "https://t.me/maxbenets", imgSrc: telegram },
      { id: 2, link: "https://github.com/maxbenets", imgSrc: github },
      { id: 3, link: "https://mailto:maksimbenets@gmail.com/", imgSrc: mail },
   ];

   let recomendationState = useSelector((state) => state.footer.recomendations);

   useEffect(() => {
      setLoaderActive(true)
      dispatch(setRecomendation());
      setLoaderActive(false)
   }, []);

   let mapSocialState = socialState.map((m) => (
      <a key={m.id} className={s.social_url} href={m.link} target={"blank"}>
         <img className={s.social_img} src={m.imgSrc} alt="" />
      </a>
   ));
   let mapRecomendationState = recomendationState.map((m) => (
        <li key={m.id}>
         <a href={m.link}>{m.name}</a>
        </li>
   ));

   return (
      <footer className={s.footer + " Container"}>
         <div className={s.column}>
            <a href="#header">
               <img className={s.totop_img} src={totop} alt="" />
            </a>
            <h3 className={s.h3}>Максим Бенець</h3>
            <p className={s.p}>Веб розробник і просто хороша людина</p>
         </div>
         <div className={s.column + " " + s.social}>{mapSocialState}</div>
         <div className={s.column + " " + s.recomendation}>
            <h3 className={s.h3}>Рекомендую</h3>
            {
                loaderActive 
                ? <img src = {loader} />
                : <ul className={s.recul}>{mapRecomendationState}</ul>
            }
         </div>
      </footer>
   );
};
