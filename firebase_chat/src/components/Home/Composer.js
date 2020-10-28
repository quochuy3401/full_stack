import React, { useState } from "react";
import { firebaseDb } from "../../fisebase";
import { Input } from "../share/Input";

export const Composer = (props) => {
    const [msg, setMsg] = useState("");
    const handleChangeMsg = (event) =>{
        setMsg(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        firebaseDb.collection("messages").add({
            content: msg,
            sender: props.loggedInUser.email,
            conversationId: props.activeCon.id
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input value="" onChange={handleChangeMsg} type="text" label ="Your msg"/>
            <button type="submit">Send</button>
        </form>
    )
}