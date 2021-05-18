import React, { useState } from 'react';

import './Contact.css';
import './StyleGeneral.css';
import './Animations.css';

import YorkMap from '../../images/map/map.png';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.mailHandler = this.mailHandler.bind(this);
        this.mailSubmit = this.mailSubmit.bind(this);
        this.handleFormChange = this.handleOptionChange.bind(this);
        this.handleInfoClear = this.handleInfoClear.bind(this);
        this.enteredNameChangeHandler = this.enteredNameChangeHandler.bind(this);
        this.enteredEmailChangeHandler = this.enteredEmailChangeHandler.bind(this);
        this.roughBudgetChangeHandler = this.roughBudgetChangeHandler.bind(this);
        this.conceptDescriptionChangeHandler = this.conceptDescriptionChangeHandler.bind(this);
        this.materialsChangeHandler = this.materialsChangeHandler.bind(this);
        this.submitNewHandler = this.submitNewHandler.bind(this);
        this.state = {
            contactType:"",
            enteredName:"",
            enteredEmail:"",
            roughBudget:"",
            conceptDescription:"",
            materials:"",
            form1Hide:{'display':'none'},
            form2Hide:{'display':'none'},
            form3Hide:{'display':'none'},
        };
    }

    mailHandler(event){
        fetch("/mail", {
            method:'POST',
            cache: 'no-cache',
            headers:{
                'content_type':'application/json'
            }
        })
        let sendInfo = {}
        if (this.contactType === "NEWBUILD"){
            sendInfo = {
                subject: this.contactType + ' - ' + this.enteredName,
                text: "Rough Budget: $" + this.roughBudget + "%0d%0a" +
                      "Concept Description: " + this.conceptDescription + "%0d%0a" + 
                      "Materials: " + this.materials + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        }
        else if (this.contactType === "REPAIR"){
            sendInfo = {
                subject: this.contactType + ' - ' + this.enteredName,
                text: "Issues/Repairs: " + this.conceptDescription + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        }
        else if (this.contactType === "DONATE"){
            sendInfo = {
                subject: this.contactType + ' - ' + this.enteredName,
                text: "Materials to Donate: " + this.conceptDescription + "%0d%0a",
            };
            window.open('mailto:inquire@dentedzebra.best?subject='+sendInfo.subject+'&body='+sendInfo.text);
        };        
    }

    enteredNameChangeHandler = (event) =>
    {
        this.setState({enteredName: event.target.value});
    };

    enteredEmailChangeHandler = (event) =>
    {
        this.setState({enteredEmail: event.target.value});
    };

    roughBudgetChangeHandler = (event) =>
    {
        this.setState({roughBudget: event.target.value});
    };

    conceptDescriptionChangeHandler = (event) =>
    {
        this.setState({conceptDescription: event.target.value});
    };

    materialsChangeHandler = (event) =>
    {
        this.setState({materials: event.target.value});
    };

    // used to determine the form that is shown.
    handleFormChange = (event) =>
    {
        if (event.target.value === "newBuild"){
            this.setState({setForm1:{"display": "flex"}});
            this.setState({setForm2:{"display": "none"}});
            this.setState({setForm3:{"display": "none"}});
            this.setState({contactType:"NEWBUILD"});
        }
        else if (event.target.value === "repairUpgrade"){
            this.setState({setForm1:{"display": "none"}});
            this.setState({setForm2:{"display": "flex"}});
            this.setState({setForm3:{"display": "none"}});
            this.setState({contactType:"REPAIR"});
        }
        else if (event.target.value === "donate"){
            this.setState({setForm1:{"display": "none"}});
            this.setState({setForm2:{"display": "none"}});
            this.setState({setForm3:{"display": "flex"}});
            this.setState({contactType:"DONATE"});
        }
        else
        {
            this.setState({setForm1:{"display": "none"}});
            this.setState({setForm2:{"display": "none"}});
            this.setState({setForm3:{"display": "none"}});
        }
    }

    handleInfoClear = () =>
    {
        setEnteredName('');
        setEnteredEmail('');
        setRoughBudget('');
        setConceptDescription('');
        setMaterials('');
    };

    submitNewHandler = (event) =>
    {
        event.preventDefault();
        sendEmail();
        handleInfoClear();
    };

    render(){
        return (
            <div className="general contact-page animate__fadeIn">
                <h1>Contact Us</h1>
                <h2><u>Important Information</u></h2>
                <p><b>NOTE:</b> As of right now we are only building speakers for the York Region (Canada) area (see below for a map) 
                    If that causes any inconveniences we do apologize, and are planning to expand in the near future.</p>
                <img alt="york_region_map" src={YorkMap} />
                <p>We will generally get back within 24 hours to ask any more questions we require before beginning the design.</p>
                {/* create the initial option for forms */}
                <form className="general">
                    <label>Contact Us About:</label>
                    <select id="contactType" name="contactType" onChange={handleFormChange}>
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
}

export default Contact;