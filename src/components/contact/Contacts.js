import React, {useState, useEffect} from "react";
import Contact from "./Contact";
import contacts from "./data";


function Contacts(){
    let id = 0;
    const [infoContact, setInfoContact] = useState(contacts);
    const [inputText, setInputText] = useState(``);
    function handleSearchChange(event){ 
        setInputText(event.target.value);
    };
    useEffect(()=>{
        const filterContacts = contacts.filter((props) => {
            return (
                props.lastName.toLowerCase().includes(inputText.toLowerCase()) ||
                props.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
                props.phone.includes(inputText)
             );
        });
        setInfoContact(filterContacts);
    },[inputText]);
    return (
        <div className="block-all">
            <p className="contact-title">Contact</p>
            <div className="search">
                <input className="search-contact" value={inputText} onChange={handleSearchChange} placeholder={`Search`}></input>
                {infoContact.map((props=><Contact {...props} key = {id++}/>))}               
            </div>
        </div>
    );
};

export default Contacts;
