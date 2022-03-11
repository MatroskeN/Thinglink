import css from './Box.module.scss';
import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function Box(props){
    function Button() {
        if(props.url){
            return(
                <a target={"_blank"} href={props.url}>
                    <button>
                        {props.btn}
                    </button>
                </a>
            )
        }
    }
    return(
        <div className={css.root}>
            <div className={css.title}>
                {props.title}
            </div>
            <div className={css.text}>
                {props.text}
            </div>
            {Button()}
        </div>
    )
}

export default Box;