import React from 'react';

import './Contact.css';
import './StyleGeneral.css';
import './Animations.css';

import YorkMap from '../../images/map/map.png';

class Contact extends React.Component {
    constructor(props){
        super(props);
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
            messageSentHide:{'display':'none'},
        };
    }

    mailHandler(event){
        fetch("/api/mail", {
            method:'POST',
            cache: 'no-cache',
            headers:{
                'content_type':'application/json'
            },
            body: JSON.stringify({
                contactType: this.state.contactType,
                name: this.state.enteredName,
                email: this.state.enteredEmail,
                roughBudget: this.state.roughBudget,
                conceptDescription: this.state.conceptDescription,
                materials: this.state.materials,
            })
        })
        .then(response => response.json())
        .then(this.setState({messageSentHide:{'display':'flex'}}))
        .then(this.setState({form1Hide:{"display": "none"}}))
        .then(this.setState({form2Hide:{"display": "none"}}))
        .then(this.setState({form3Hide:{"display": "none"}}))
    };

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
            this.setState({messageSentHide:{'display':'none'}});
            this.setState({form1Hide:{"display": "flex"}});
            this.setState({form2Hide:{"display": "none"}});
            this.setState({form3Hide:{"display": "none"}});
            this.setState({contactType:"NEWBUILD"});
        }
        else if (event.target.value === "repairUpgrade"){
            this.setState({messageSentHide:{'display':'none'}});
            this.setState({form1Hide:{"display": "none"}});
            this.setState({form2Hide:{"display": "flex"}});
            this.setState({form3Hide:{"display": "none"}});
            this.setState({contactType:"REPAIR"});
        }
        else if (event.target.value === "donate"){
            this.setState({messageSentHide:{'display':'none'}});
            this.setState({form1Hide:{"display": "none"}});
            this.setState({form2Hide:{"display": "none"}});
            this.setState({form3Hide:{"display": "flex"}});
            this.setState({contactType:"DONATE"});
        }
        else
        {
            this.setState({messageSentHide:{'display':'none'}});
            this.setState({form1Hide:{"display": "none"}});
            this.setState({form2Hide:{"display": "none"}});
            this.setState({form3Hide:{"display": "none"}});
        }
    }

    handleInfoClear = () =>
    {
        this.setState({enteredName:''});
        this.setState({enteredEmail:''});
        this.setState({roughBudget:''});
        this.setState({conceptDescription:''});
        this.setState({materials:''});
    };

    submitHandler = (event) =>
    {
        event.preventDefault();
        this.mailHandler(event);
        this.handleInfoClear();
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
                    <select id="contactType" name="contactType" onChange={this.handleFormChange}>
                        <option value="">Choose an Option</option>
                        <option value="newBuild">New Speaker Build</option>
                        <option value="repairUpgrade">Repair or Upgrade Speaker</option>
                        <option value="donate">Donation</option>
                    </select>
                </form>

                {/* newBuild form */}
                <form style={this.state.form1Hide} onSubmit={this.submitHandler}>
                    <h2><u>New Build</u></h2> 
                    <label>Name:</label>
                    <input type="text" id="clientName" value={this.state.enteredName} onChange={this.enteredNameChangeHandler} ></input>
                    <label>Email:</label>
                    <input type="text" id="email" value={this.state.enteredEmail} onChange={this.enteredEmailChangeHandler}></input>
                    <label>Rough Budget:</label>
                    <input type="number" min="1.00" id="budget" value={this.state.roughBudget} onChange={this.roughBudgetChangeHandler}></input>
                    <label>Concept Design Idea:</label>
                    <textarea id="conceptIdea" value={this.state.conceptDescription} onChange={this.conceptDescriptionChangeHandler}></textarea>
                    <label>Any Materials You have to Contribute:</label>
                    <textarea id="materials" value={this.state.materials} onChange={this.materialsChangeHandler}></textarea>
                    <p></p>
                    <button className="general__button button__ripple" type="submit">Send Email</button>
                </form>
                {/* repair and upgrade form */}
                <form style={this.state.form2Hide} onSubmit={this.submitHandler}>
                    <h2><u>Repair / Upgrade</u></h2>
                    <label>Name:</label>
                    <input type="text" id="clientName" value={this.state.enteredName} onChange={this.enteredNameChangeHandler} ></input>
                    <label>Email:</label>
                    <input type="text" id="email" value={this.state.enteredEmail} onChange={this.enteredEmailChangeHandler}></input>
                    {/* issue upgrades */}
                    <label>Issues/Upgrades:</label>
                    <textarea id="conceptIdea" value={this.state.conceptDescription} onChange={this.conceptDescriptionChangeHandler}></textarea>
                    <p></p>
                    <button className="general__button button__ripple" type="submit">Send Email</button>
                </form>
                {/* donation form */}
                <form style={this.state.form3Hide} onSubmit={this.submitHandler}>
                    <h2><u>Donation</u></h2>
                    <label>Name:</label>
                    <input type="text" id="clientName" value={this.state.enteredName} onChange={this.enteredNameChangeHandler} ></input>
                    <label>Email:</label>
                    <input type="text" id="email" value={this.state.enteredEmail} onChange={this.enteredEmailChangeHandler}></input>
                    {/* material donation */}
                    <label>Materials To Donate:</label>
                    <textarea id="conceptIdea" value={this.state.conceptDescription} onChange={this.conceptDescriptionChangeHandler}></textarea>
                    <p></p>
                    <button className="general__button button__ripple" type="submit">Send Email</button>
                </form>
                <h2 style={this.state.messageSentHide}>Email Sent!</h2>
                <p>Can also email us directly for any other inquires.</p>
                <p><u><b><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></p>
            </div>
        );
    }
}

export default Contact;