import React from "react";

import { Notification } from "../../models/notification/NoticePopUp";

import './pop_up_style/pop_up.css'

const PopUp = (prop: Notification) => {

    return (
        <div className="pop_up_container" id="modal_container">
            <div className="content_pop_up">
                <div className="pop_up">
                    <p>{prop.message}</p>
                </div>
            </div>
        </div>
    )
}
export default PopUp