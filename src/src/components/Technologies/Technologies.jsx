import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTechnologies } from "../../redux/reducers/Technologies_reducer"
import s from "./Technologies.module.css"

export const Technologies = () => {
    let dispatch = useDispatch()
    let tech = useSelector(state => state.technologies.technologies)

    useEffect(() => {
        dispatch(setTechnologies())
    }, [])

    let mapTech = tech.map( t => {
        return <div className={s.skill} key = {t.id}>
            <img className={s.img} src={t.imgSrc} />
            <span className={s.name}>{t.name}</span>
        </div>
    })

    return(
        <div className={s.tech+" Container"}>
            <h2 className="h2">Використовую такі технології як:</h2>
            <div className={s.skillBox}>
                {mapTech}
            </div>
        </div>
    )
}