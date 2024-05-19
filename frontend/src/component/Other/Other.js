import React, { Fragment, useEffect, useState, useRef } from "react";
import "../Home/Home.css";
import MetaData from "../layout/MetaData";
import im1 from "../../images/vapt.png";
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

import mt from "../../images/meet.png";
import web from "../../images/web.png";
import api from "../../images/api.png";
import service from "../../images/network.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from "@mui/material";
import ctf from "../../images/ctf.png";
import emp from "../../images/rtm.png";
import wbi from "../../images/empt.png"

const Other = () => {
    const isimg = window.innerWidth >= 786

    const book = () => {
        window.location.href = '/book'
    }

    return (
        <Fragment>

            <Fragment>
                <MetaData title="other" />

                <div className="bg19" >

                    <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                        <div className="box">
                            <div className="group">
                                {!isimg && <img src={im1} style={{ marginLeft: '100px', width: "250px" }} className="absolute" />}

                                <p className="providing-high">
                                    Other Services
                                </p>

                                <p className="white">

                                    Our VAPT experts leverage industry-leading tools and proven methodologies to deliver a meticulous assessment of your website's security posture. We provide a detailed report outlining vulnerabilities, their severity levels, and recommended remediation steps. Don't wait for a security breach to happen.  Contact Nexus Security today and secure your new website with a comprehensive VAPT.                                    </p>
                                <div className="top-button">
                                    <Button variant="contained">Know More</Button>
                                    <Button variant="contained">Get In Touch</Button>
                                </div>

                            </div>
                            {isimg && <div className="img1" style={{ marginLeft: '0' }}>
                                <img src={im1} style={{ marginLeft: '0' }} />
                            </div>}
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                        <div className="why">

                            <div className="cen">
                                <h2 className={isimg ? "white-cen" : "white-cen mt-10"}> Sub Categories</h2>
                            </div>

                            <div className="cards vap">
                                <div className="card">
                                    <div className="card-data gj">
                                        <img className="card-img" src={api} />
                                        <h2>RansomeWare and Litigation</h2>
                                        <p >{isimg ? " APIs, or Application Programming Interfaces, ensure seamless communication between applications and data. However, these connectors can become security vulnerabilities if not properly secured. Our API Sentinel VAPT service examines your APIs for weaknesses, identifying potential exploits that could compromise sensitive data" : " APIs, or Application Programming Interfaces, ensure seamless communication between applications and data. However, these connectors can become security vulnerabilities if not properly secured. Our API Sentinel VAPT service examines your APIs for weaknesses"}</p>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-data gj">
                                        <img className="card-img" src={ctf} />
                                        <h2>CTF Collab</h2>
                                        <p>{isimg ? " Your website or web application embodies your digital identity. A security breach here can damage your reputation and expose sensitive user data. Our Web Fortress VAPT service serves as an impenetrable wall, rigorously testing your web application for vulnerabilities. We identify and address potential security gaps, fortifying your web presence against cyberattacks." : "Your website or web application embodies your digital identity. A security breach here can damage your reputation and expose sensitive user data. Our Web Fortress VAPT service serves as an impenetrable wall, rigorously testing your web application for vulnerabilities. We identify and address potential security gaps"}</p>

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-data gj">
                                        <img className="card-img" src={wbi} />
                                        <h2>Webinars & Seminars</h2>
                                        <p>{isimg ? "Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions, creating a robust shield for your network, safeguarding against potential cyber threats." : "Your website or web application embodies your digital identity. A security breach here can damage your reputation and expose sensitive user data. Our Web Fortress VAPT service serves as an impenetrable wall, rigorously testing your web application for vulnerabilities. We identify and address potential security gaps"}</p>

                                    </div>
                                </div>
                                <div></div>
                                <div className="card">
                                    <div className="card-data gj">
                                        <img className="card-img" src={emp} />
                                        <h2>Employee Training</h2>
                                        <p>{isimg ? "Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions, creating a robust shield for your network, safeguarding against potential cyber threats." : "Your network serves as the foundation of your digital infrastructure, the gateway for data flow. Our Digital Perimeter VAPT service scrutinizes your network infrastructure, including firewalls, routers, and other devices. We identify exploitable weaknesses and recommend solutions"}</p>

                                    </div>
                                </div>




                            </div>

                        </div>


                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                        <div className="book ">
                            {isimg ? <img src={mt} /> : null}
                            <div className="book1">
                                <h3>Book a meeting with us</h3>
                                {isimg ? <p>Lets Collaborate and discuss about your business goals.
                                </p> : null}
                            </div>
                            <Button variant="contained" onClick={book}>Book a meeting</Button>
                        </div>
                    </ScrollAnimation>
                </div>


            </Fragment>

        </Fragment >
    );
};

export default Other;
