import React, { useState } from 'react';
import nodemailer from 'nodemailer';

import './Contact.css';
import './StyleGeneral.css';
import './Animations.css';

const applicationPass = 'uqhn-culq-gaxg-cwfw';

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


    const transporter = nodemailer.createTransport({
        service: 'mail.privateemail.com',
        port: 465,
        secure: false,
        auth: {
            user: 'inquire@dentedzebra.best',
            pass: applicationPass,
        },
    })

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

    return (
        <div className="general contact-page animate__fadeIn">
            <h1>Contact Us</h1>
            <h2><u>Important Information</u></h2>
            <p><b>NOTE:</b> As of right now we are only building speakers for the York Region (Canada) area (can check
                this <u><a href="https://www.google.com/maps/place/Regional+Municipality+of+York,+ON/@44.0913566,-79.7459881,10z/data=!3m1!4b1!4m5!3m4!1s0x882acdaee4d2a679:0x108dcfb46a288a64!8m2!3d43.9884612!4d-79.4703885" target="__blank">MAP</a></u> to 
                see if you are within the area of operations. If that causes any inconveniences we do apologize, and are
                planning to expand in the near future.</p>
            <p>We will generally get back within 24 hours to ask any more questions we require before beginning the design.</p>
            <form className="general">
                <label for="contactType">Contact Options:</label>
                <select id="contactType" name="contactType" onChange={formChange}>
                    <option value="">Choose an Option</option>
                    <option value="newBuild">New Speaker Build</option>
                    <option value="repairUpgrade">Repair or Upgrade Speaker</option>
                    <option value="donate">Donation</option>
                </select>
            </form>
            <form style={form1Hide} >
                <h2><u>New Build</u></h2>
                <label for="name">Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label for="email">Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                <label for="name">Rough Budget:</label>
                <input type="number" min="1.00" step="100.00" id="budget" value={roughBudget} onChange={roughBudgetChangeHandler}></input>
                <label for="conceptIdea">Concept Design Idea:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <label for="materials">Any Materials You have to Contribute:</label>
                <textarea id="materials" value={materials} onChange={materialsChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            <form style={form2Hide}>
                <h2><u>Repair / Upgrade</u></h2>
                <label for="clientName">Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label for="email">Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                <label for="conceptIdea">Issues/Upgrades:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            <form style={form3Hide}>
                <h2><u>Donation</u></h2>
                <label for="clientName">Name:</label>
                <input type="text" id="clientName" value={enteredName} onChange={enteredNameChangeHandler} ></input>
                <label for="email">Email:</label>
                <input type="text" id="email" value={enteredEmail} onChange={enteredEmailChangeHandler}></input>
                <label for="conceptIdea">Materials To Donate:</label>
                <textarea id="conceptIdea" value={conceptDescription} onChange={conceptDescriptionChangeHandler}></textarea>
                <p></p>
                <button className="general__button button__ripple" type="submit">Send Email</button>
            </form>
            {/*
            <h2><u>New Builds</u></h2>
            <p>In the email please include:</p>
            <ul>
                <li>Your Name</li>
                <li>Rough Budget</li>
                <li>Concept of what you are looking for in your design.</li>
                <li>If applicable, any parts or wood you have to help.</li>
            </ul>
            <table>
                <tr>
                    <th>Email: </th>
                    <th><u><b><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
            <h2><u>Repairs and Upgrades</u></h2>
            <p>If your looking to repair or upgrade a set of speakers send us an email with <b>UPGRADE</b> in 
            the subject line and send us a picture, let's see what cool stuff you have that we can make better!
            </p>
            <table>
                <tr>
                    <th>Email: </th>
                    <th><u><b><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
            <h2><u>Donating</u></h2>
            <p>If your looking to donate old speakers, wood, parts, equipment, anything, also send an email with <b>DONATE</b> in 
                the subject and we will let you know if we need the stuff. If you do decide to donate, THANK YOU! Not only are you helping us, but also the environment.
            </p>
            
            <table>
                <tr>
                    <th>Email: </th>
                    <th><u><b class="bold"><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
            */}
        </div>
    );
}

export default Contact;