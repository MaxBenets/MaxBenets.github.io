import s from "./About.module.css"

export const About = () => {
    return(
        <div className={s.about+" Container"}>
            <h2 className={"h2"}>Про мене</h2>
            <p className={"p"}>
                Мене звати Максим і мені 15 років. Займаюсь програмуванням з дванадцяти років, останній рік вивчаю розробку сайтів. Основний фреймворк для розробки сайтів в мене React, на ньому у мене створенно декілька проєктів.
            </p>
        </div>
    )
}