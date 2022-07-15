import s from "./Projects.module.css"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { setProjects } from "../../redux/reducers/Projects_reducer"

export const Projects = () => {
    let dispatch = useDispatch()
    let projects = useSelector(state => state.projects.projects)

    useEffect(() => {
        dispatch(setProjects())
    }, [])

    let mapProjects = projects.map( p => {
        return (
            <div className={s.column} key = {p.id}>
                <img className={s.img} src={p.imgSrc} alt="" />
                <div className={s.about}>
                    <div>
                        <h3 className={s.h3}>{p.name}</h3>
                        <p className={s.p}>{p.about}</p>
                    </div>
                    <a href={p.url} className = {s.url}>Перейти на сайт</a>
                </div>
            </div>
        )
    } )

    return(
        <div className={s.projects+" Container"}>
            <h2 className={"h2"}>Мої проєкти</h2>

            <div className={s.row}>
                {mapProjects}
            </div>
        </div>
    )
}