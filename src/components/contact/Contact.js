import React from "react";

function Contact(props){

    return(
        <div className="contact">
            <div className="contact-all">
                <div className="name">{props.firstName + " " + props.lastName}</div>
                <div className="gender">{props.gender}</div>
            </div>
            <div className="phone">{props.phone}</div>
        </div>
    )
}
export default Contact;