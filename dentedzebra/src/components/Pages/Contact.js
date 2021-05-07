import React, { useState } from 'react';

import './Contact.css';
import './StyleGeneral.css';
import './Animations.css';

const Contact = () => {

    const [contactType, setContactType] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [roughBudget, setRoughBudget] = useState('');
    const [conceptDescription, setConceptDescription] = useState('');
    const [materials, setMaterials] = useState('');
    const [form1Hide, setForm1] = useState({'display':'none'});
    const [form2Hide, setForm2] = useState({'display':'none'});
    const [form3Hide, setForm3] = useState({'display':'none'});


    const enteredNameChangeHandler = (event) =>
    {
        setEnteredName(event.target.value);
    };

    const enteredEmailChangeHandler = (event) =>
    {
        setEnteredEmail(event.target.value);
    };

    const roughBudgetChangeHandler = (event) =>
    {
        setRoughBudget(event.target.value);
    };

    const conceptDescriptionChangeHandler = (event) =>
    {
        setConceptDescription(event.target.value);
    };

    const materialsChangeHandler = (event) =>
    {
        setMaterials(event.target.value);
    };

    const sendEmail = () =>
    {
        let sendInfo = {}
        if (contactType === "NEWBUILD"){
            sendInfo = {
                subject: contactType + ' - ' + enteredName,
                text: "Rough Budget: $" + roughBudget + "%0d%0a" +
                      "Concept Description: " + conceptDescription + "%0d%0a" + 
                      "Materials: " + materials + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        }
        else if (contactType === "REPAIR"){
            sendInfo = {
                subject: contactType + ' - ' + enteredName,
                text: "Issues/Repairs: " + conceptDescription + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        }
        else if (contactType === "DONATE"){
            sendInfo = {
                subject: contactType + ' - ' + enteredName,
                text: "Materials to Donate: " + conceptDescription + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        };        
    };

    // used to determine the form that is shown.
    const formChange = (event) =>
    {
        if (event.target.value === "newBuild"){
            setForm1({"display": "flex"});
            setForm2({"display": "none"});
            setForm3({"display": "none"});
            setContactType("NEWBUILD");
        }
        else if (event.target.value === "repairUpgrade"){
            setForm1({"display": "none"});
            setForm2({"display": "flex"});
            setForm3({"display": "none"});
            setContactType("REPAIR");
        }
        else if (event.target.value === "donate"){
            setForm1({"display": "none"});
            setForm2({"display": "none"});
            setForm3({"display": "flex"});
            setContactType("DONATE");
        }
        else
        {
            setForm1({"display": "none"});
            setForm2({"display": "none"});
            setForm3({"display": "none"});
        }
    }

    const clearAll = () =>
    {
        setEnteredName('');
        setEnteredEmail('');
        setRoughBudget('');
        setConceptDescription('');
        setMaterials('');
    };

    const submitNewHandler = (event) =>
    {
        event.preventDefault();
        sendEmail();
        clearAll();
    };

    const submitRepairHandler = (event) =>
    {
        event.preventDefault();
        sendEmail();
        clearAll();
    };

    const submitDonateHandler = (event) =>
    {
        event.preventDefault();
        sendEmail();
        clearAll();
    };

    return (
        <div className="general contact-page animate__fadeIn">
            <h1>Contact Us</h1>
            <h2><u>Important Information</u></h2>
            <p><b>NOTE:</b> As of right now we are only building speakers for the York Region (Canada) area (can check
                this <u><a href="https://www.google.com/maps/place/Regional+Municipality+of+York,+ON/@44.0913566,-79.7459881,10z/data=!3m1!4b1!4m5!3m4!1s0x882acdaee4d2a679:0x108dcfb46a288a64!8m2!3d43.9884612!4d-79.4703885" target="__blank">MAP</a></u> to 
                see if you are within the area of operations. If that causes any inconveniences we do apologize, and are
                planning to expand in the near future.</p>
            <p>We will generally get back within 24 hours to ask any more questions we require before beginning the design.</p>
            {/* create the initial option for forms */}
            <form className="general">
                <label>Contact Us About:</label>
                <select id="contactType" name="contactType" onChange={formChange}>
                    <option value="">Choose an Option</option>
                    <option value="newBuild">New Speaker Build</option>
                    <option value="repairUpgrade">Repair or Upgrade Speaker</option>
                    <option value="donate">Donation</option>
                </select>
            </form>

            {/* newBuild form */}
            <form style={form1Hide} onSubmit={submitNewHandler}>
                <h2><u>New Build</u></h2> 
                <label>Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label>Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                <label>Rough Budget:</label>
                <input type="number" min="1.00" id="budget" value={roughBudget} onChange={roughBudgetChangeHandler}></input>
                <label>Concept Design Idea:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <label>Any Materials You have to Contribute:</label>
                <textarea id="materials" value={materials} onChange={materialsChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            {/* repair and upgrade form */}
            <form style={form2Hide} onSubmit={submitRepairHandler}>
                <h2><u>Repair / Upgrade</u></h2>
                <label>Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label>Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                {/* issue upgrades */}
                <label>Issues/Upgrades:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            {/* donation form */}
            <form style={form3Hide} onSubmit={submitDonateHandler}>
                <h2><u>Donation</u></h2>
                <label>Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label>Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                {/* material donation */}
                <label>Materials To Donate:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            <p>Can also email us directly for any other inquires.</p>
            <p><u><b><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></p>
        </div>
    );
}

export default Contact;