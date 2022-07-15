import { useState, useRef } from "react"
import s from "./Form.module.css"

export const Form = () => {

    let [nameValue, setNameValue] = useState("");
    let [mailValue, setMailValue] = useState("");
    let [messageValue, setMessageValue] = useState("");

    let nameRef = useRef()
    let mailRef = useRef()
    let messageRef = useRef()

    let inputOnChange = () => {
        setNameValue(nameRef.current.value); 
        setMailValue(mailRef.current.value); 
        setMessageValue(messageRef.current.value)
    }

    return(
        <div className={s.form}>
            <div className="Container">
            <h2 className={"h2 "+s.h2}>Зв'яжіться зі мною</h2>

            <form action="https://www.actionforms.io/e/r/maksim-benec-test">
                <input value = {nameValue} onChange={inputOnChange} ref = {nameRef} type="text" className={s.input} placeholder="Ім'я"/>
                <input value = {mailValue} onChange={inputOnChange} ref = {mailRef} type="mail" className={s.input} placeholder="Поштова скринька"/>
                <textarea value = {messageValue} onChange={inputOnChange} ref = {messageRef} className={s.input + " " + s.textarea} placeholder="Повідомлення"></textarea>
                <button className={s.button}>Зв'язатись зі мною</button>
            </form>
            </div>
        </div>
    )
}