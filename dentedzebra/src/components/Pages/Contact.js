import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h2 class="title">Contact Us</h2>
            <h4><u>Important Information</u></h4>
            <p><b class="bold">NOTE:</b> As of right now we are only building speakers for the York Region (Canada) area (can check
                this <u><a href="https://www.google.com/maps/place/Regional+Municipality+of+York,+ON/@44.0913566,-79.7459881,10z/data=!3m1!4b1!4m5!3m4!1s0x882acdaee4d2a679:0x108dcfb46a288a64!8m2!3d43.9884612!4d-79.4703885" target="_blank">MAP</a></u> 
                to see if you are within the area of operations. If that causes any inconveniences we do apologize, and are
                planning to expand in the near future.</p>
            <h4><u>New Builds</u></h4>
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
                    <th><u><b class="bold"><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
            <h4><u>Repairs and Upgrades</u></h4>
            <p>If your looking to repair or upgrade a set of speakers send us an email with <span class="bold">UPGRADE</span> 
                in the subject line and send us a picture, let's see what cool stuff you have that we can make better!
            </p>
            <table>
                <tr>
                    <th>Email: </th>
                    <th><u><b class="bold"><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
            <h4><u>Donating</u></h4>
            <p>If your looking to donate old speakers, wood, parts, equipment, anything, also send an email with <span class="bold">DONATE</span>
                in the subject and we will let you know if we need the stuff. If you do decide to donate, THANK YOU! Not only are you helping us, but also the environment.
            </p>
            <p>We will generally get back within 24 hours to ask any more questions we require before beginning the design.</p>
            <table>
                <tr>
                    <th>Email: </th>
                    <th><u><b class="bold"><a href="mailto:inquire@dentedzebra.best">inquire@dentedzebra.best</a></b></u></th>
                </tr>
            </table>
        </div>
    );
}

export default Contact;