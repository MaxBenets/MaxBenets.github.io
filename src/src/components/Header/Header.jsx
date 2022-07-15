import s from "./Header.module.css"

export const Header = () => {
    return(
        <header id = "header" className={s.header}>
            <div className={"Container"}>
                <img className={s.img} src="https://avatars.githubusercontent.com/u/98233906?v=10" alt="" />
                <h1 className={s.h1}>Максим Бенець</h1>
                <small className =  {s.spechiality}>Front-end розробник</small>
            </div>
        </header>
    )
}