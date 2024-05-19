import React, { Fragment, useEffect, useState, useRef } from "react";
import { CgMouse } from "react-icons/cg";
import { DiCelluloid } from "react-icons/di";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import im1 from "../../images/1.png";
import line1 from "../../images/line1.png";
import line2 from "../../images/line2.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import founder from "../../images/6.png"
import im20 from "../../images/20.png";
import ch1 from "../../images/mn.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import ReCAPTCHA from "react-google-recaptcha";
import mn2 from "../../images/mn2.png";
import ct from "../../images/ct.png";
import ct2 from "../../images/ct2.png";
import sot from "../../images/sot.png";
import sot2 from "../../images/sot2.png";
import mt from "../../images/meet.png";
import cl1 from "../../images/cl1.jpg";
import cl2 from "../../images/cl2.jpg";
import cl3 from "../../images/cl3.jpg";
import cl4 from "../../images/cl4.jpg";
import cl5 from "../../images/cl5.png";
import bt1 from "../../images/bt1.png";
import bt2 from "../../images/bt2.jpg";
import bt3 from "../../images/bt3.png";
import bt6 from "../../images/bt6.png";
import oc from "../../images/os.png";
import course from "../../images/course.png";
import vapt from "../../images/vapt1.png";
import { Link,  isMuiElement } from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";

const Home = ({ history }) => {
  

  const navigate = useNavigate()




  const isimge = window.innerWidth >= 768


  const book = ()=>{
   navigate('/book')
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // Add more breakpoints if needed
    ]
  };
  


  const testimonials = [
    {
      content: `"As someone who has had the privilege of collaborating with Nexus Security on numerous pen-testing projects, I can attest to their exceptional skills in manual pen testing. They showcased his technical proficiency by identifying vulnerabilities and simulating cyberattacks. There was methodical in his approach, meticulously exploring applications, network devices, and cloud infrastructures. Beyond technical skills, Employees excels in communication, with thorough, concise, and actionable reports. I cant recommend Nexus Security highly enough for any pen testing engagement."`,
      author: "Ujjal Bose",
      designation: "Solution Junction, Director",
    },
    {
      content: `"I highly recommend Nexus Security for exceptional expertise in ransomware risk mitigation and cybersecurity. Thier proactive strategies and dedication have significantly strengthened our defenses. The contributions have been invaluable to our organisation from last 1 year."`,
      author: "Sanjeev Ahuja",
      designation: "United Marathon Pvt Ltd, Director",
    },
    {
      content: `"I wanted to express my sincere appreciation for the exceptional pentesting services Nexus Security provided. Their attention to detail and thoroughness in identifying vulnerabilities were truly impressive. The findings have been invaluable in enhancing our cybersecurity posture. Thank you for their outstanding work."`,
      author: "Mohammad Ruman",
      designation: "Kreative Digital Media, Founder",
    },
  ];



  return (
    <Fragment>
      <Fragment>
        <MetaData title="Home" />

        <div className={isimge ? `main` : `main`}>
          <div className="Box" style={{marginLeft:'8%'}}>

            <img src={ch1} className={isimge ? `absolute h-96 mt-32 ml-[750px] rounded-md` : ` absolute mt-10  ml-[200px] w-40 h-52  `} alt="Ethical Hacking" />
            <div className="group fg" >
              <p className={isimge ? `providing-high mt-20 ml-20` : ` bg-transparent   providing-high mt-5   `}>
                Securing Data
              </p >
              <p className={isimge ? `providing-high ml-[82px]` : ` providing-high  `} >
                and Systems
              </p>
               <p className={isimge ? `white ml-[82px] ft` : ` white  ft`} >
                Guarding your digital fortress with Nexus cybersecurity solutions and expertise.
              </p>
              <div className={isimge ? ` mt-20 ml-20 top-button` : ` top-button `} >
                <Button className="bn" variant="contained" >Know More</Button>
                <Button className="bn" variant="contained">Get In Touch</Button>
              </div>

            </div>

          </div>

         
            <div className="why">

              <div className={isimge ? `heading fg` : `heading fg`}>
                <h2 className={isimge ? `white-why` : `  text-md ml-[-10px] `}></h2>
                <h2 className={isimge ? `color-why` : ` color-why  `}>Why NEXUS SECURITY?</h2>
              </div>
              <p className={isimge ? `information` : `text-white  ml-2 p-[70px]`}>
                We're more than just a security company. We're your trusted partner in the fight against cybercrime. We'll work with you to understand your unique needs and develop a security plan that's right for you. We don't wait for attacks to happen before we take action. We take a proactive approach to security, constantly identifying and mitigating risks before they can become problems. We know that security threats can be a major source of stress. That's why we're here to give you the peace of mind that comes with knowing your data is in good hands.
              </p>

              <div className={isimge ? `connect` : `ml-10  w-full p-2 m-20 connect `}>
                <div className={isimge ? `block` : `w-full  block `}>
                  <h2 className={isimge ? ` ` : ` `}>Proactive Approach</h2>
                  <p> We don't just react to security incidents; we proactively identify and address potential threats before they can cause damage. We take a comprehensive approach to security, considering all aspects of your IT infrastructure.</p>
                </div>
                {isimge ? <img src={line1} className={isimge ? `line1` : ``} /> : null}
              </div>

             {isimge ? <div className={isimge ? `second connect` : ` connet w-full `}>
                <img src={line2} className="line2" />
                <div className="block">
                  <h2>Nexus Shield </h2>
                  <p>Our proprietary security framework incorporates a layered defense strategy, advanced threat detection, and continuous monitoring to provide impenetrable protection for your business.</p>
                </div>

              </div> : null}
            
              
            { !isimge ? <div className={isimge ? ` connect` : ` w-full connect mb-14`} >
                <div className="block">
                <h2>Nexus Shield </h2>
                  <p>Our proprietary security framework incorporates a layered defense strategy, advanced threat detection, and continuous monitoring to provide impenetrable protection for your business.</p>
                </div>
              </div> : null}
              <div className={isimge ? ` connect` : ` w-full connect`} style={{ "marginTop": 0}}>
                <div className="block">
                  <h2>Tailored Strategies</h2>
                  <p>
                    We understand that every business has unique security needs. We take the time to understand your specific requirements and develop a customized security plan that aligns perfectly with your budget and risk tolerance.</p>
                </div>
              </div>
            </div>
            
         
          <ScrollAnimation animateIn="fadeIn">
            <div className={isimge ? `services ` : `services h-full w-full  mt-10 `}>
              <h2 className={isimge ? `color-why` : `color-why `}>Our Services</h2>
              <div className={isimge ? `ddcards` : ``}>
             
             
                {!isimge ?<div className="">
                  <div className="th gj">
                    <img className="card-img" src={course} />
                    <a href='/vapt'>
                    <div className=" border-2 w-80 ml-4   mt-4 rounded-md  border-gray-400 ">
                    <h2  className="text-white  text-3xl">VAPT</h2>
                   <p  className="text-md text-gray-400">  Web VAPT</p>
                    <p className="text-md text-gray-400 ">  API VAPT</p>
                    <p className="text-md text-gray-400">  Network VAPT</p>
                    <p className="text-md text-gray-400" >   Smart Contract VAPT</p>
                    </div>
                    </a>
                  </div>
                  </div> : null}
                  {isimge ? <div className="card">
              <a href="/vapt">
                  <div className={ isimge ?"th card-data gj" : "flex th card-data"} >
                    <img className={isimge ? `card-img` : `card-img `} src={vapt} />
                    <h2>VAPT</h2>
                   <p>  Web VAPT</p>
                    <p>  API VAPT</p>
                    <p>  Network VAPT</p>
                    <p>  Smart Contract VAPT</p>
                  </div>
                  </a>
                </div> : null}
                {isimge ? <div className="card">
              <a href="/vapt">
                  <div className={ isimge ?"th card-data gj" : "flex th card-data"} >
                    <img className={isimge ? `card-img` : `card-img `} src={course} />
                    <h2>Courses</h2>
                  <a href="/In-house"><p>  In-house Courses</p></a> 
                    <a href="/collab"><p>  Collaborations Courses</p></a>
                    <a href="/udemy"><p>  Udemy Courses</p></a>
                    
                  </div>
                  </a>
                </div> : null}
                {isimge ? <div className="card">
              <a href="/other">
                  <div className={ isimge ?"th card-data gj" : "flex th card-data"} >
                    <img className={isimge ? `card-img` : `card-img `} src={oc} />
                    <h2>Other Services</h2>
                  <p>   Ransomware & litigation</p> 
                <p>  Webinars & Seminars</p>
                    <p>   CTF collaboration</p>
                    <p> Employee Training</p>
                    
                  </div>
                  </a>
                </div> : null}

             {!isimge &&   <div className="">
                  <div className="th  gj">
                    <img className="card-img" src={course} />
                    <div className="border-2 w-80 ml-4  justify-center mt-4 rounded-md  border-gray-400">
                    <h2   className="text-white  text-3xl">Courses</h2>
                    <a href="/In-house"><p className="text-md text-gray-400">  In-house Courses</p></a>
                    <a href="/collab"><p className="text-md text-gray-400">  Collaborations Courses</p></a>
                    <a href="/udemy"><p className="text-md text-gray-400">  Udemy Courses</p></a>
                    </div>
                  </div>
                </div>}
               {!isimge && <div className="">
                  <div className="th  gj">
                    <img className="card-img" src={oc} />
                    <a href="/other">
                    <div className="border-2 w-80 ml-4 justify-center mt-4 rounded-md  border-gray-400">
                    <h2   className="text-white  text-3xl">Other Services</h2>
                  <p className="text-md text-gray-400"> Ransomware & litigation</p>
                    <p className="text-md text-gray-400"> CTF collaboration</p>
                    <p className="text-md text-gray-400"> Webinars & Seminars</p>
                  <p className="text-md text-gray-400">  Employee Training</p>
                    </div>
                    </a>
                  </div>
                </div>}

              
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn ">
            <div className={isimge ? `founder` : ` founder  mt-20 ml-2`}>
              <div className={isimge ? `img-fo` : ``}>
                <img src={founder} className="" />
              </div>
              <div className={isimge ? `about-fo` : `text-md  text-gray-400   `}>
                <p>
                  Meet Armaan Sidana, a trailblazing cybersecurity leader whose prowess in penetration testing has safeguarded over 200 companies. With a stellar record, he's empowered 30,000+ students through his expert guidance. Armaan's mastery extends to hard-hitting certifications like OSCP, CEH, and ISA, specializing in web app security and risk mitigation, making him a beacon of excellence in the industry
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <div className={isimge ? `rest mb-20` : `ml-[-15px]`}>
            <ScrollAnimation animateIn="fadeIn">
              <div className={isimge ? `apart` : `apart`}>
                <div className="lk">
                  <div className="cont">
                    <div className={isimge ? `pic` : `w-60 h-auto`}>
                      <img src={ct} />
                    </div>
                    <div className="shb">
                      <h2>Cutting-edge technology

                      </h2>
                      <p>
                        At Nexus Security, we stay ahead of the curve. We leverage the latest advancements in security solutions to provide you with an unparalleled level of protection.
                      </p>
                    </div>
                  </div>
                  <div className="cont">
                    <div className={isimge ? `pic` : `w-60 h-auto`}>
                      <img src={ct2} />
                    </div>
                    <div className="shb">
                      <h2>Tailored to Your Needs</h2>
                      <p>There's no one-size-fits-all approach to security. Our team of experts will design a state-of-the-art system that addresses your specific vulnerabilities and ensures your complete peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="cont">
                  <div className={isimge ? `pic` : `w-60 h-auto`}>
                      <img src={sot2} />
                    </div>
                    <div className="shb">
                      <h2>Ensuring your satisfaction</h2>
                      <p>At Nexus Security, your satisfaction is paramount. We provide exceptional customer service and ongoing support, ensuring you're not just secure, but confident in your security system.
                      </p>
                    </div>
                  </div>
                  <div className="cont">
                  <div className={isimge ? `pic` : `w-60 h-auto`}>
                      <img src={sot} />
                    </div>
                    <div className="shb">
                      <h2>State-of-the-art security</h2>
                      <p>Our commitment to cutting-edge technology and top-notch security sets us apart.  We are dedicated to providing state-of-the-art solutions that not only keep you safe but also exceed your expectations.</p>
                    </div>
                  </div>
                </div>
               <div className="right">
                  <div className="down heading">
                    <h2 className="white-why"> What sets us apart?</h2>
                  </div>
                  <p>
                    At Nexus Security, we understand that true security goes beyond generic solutions. We offer a unique blend of expertise and innovation that sets us apart in the industry. We offer a comprehensive approach that prioritizes your unique needs and delivers exceptional results.
                  </p>
                  <img className={isimge ? `mn2` : `h-52 w-56 mt-2`} src={mn2} />
                </div>
              </div>
            </ScrollAnimation>
            <div className={isimge ? 'divider' : ``} />
            <ScrollAnimation animateIn="fadeIn">
              <div className={isimge ? `buisness` : `  mt-20  buisness ml-5`}>
                <h1>Businesses</h1>
                <div className="down heading" style={{ paddingLeft: '5%' }}>
                  <h2 className="white-why">that</h2>
                  <h2 className={isimge ? "color-why" : "color-why  "} >&nbsp;trust us</h2>
                </div>
                <div className={isimge ? `data` : ` data h-32 w-96 `} style={{ paddingLeft: '3%' }}>
                  <img src={bt1} />
                  <img src={bt2} />
                  <img src={bt3} />
                  <img src={bt6} />
                </div>

               {isimge &&  <div className={isimge ? "testimonial " : ""}>
                  <h1> Testimonials</h1>
                  <div className={isimge  ? " test-grid " : null} >
                    <div className={isimge ? "testimo" : null}> 
                      <p>
                        "As someone who has had the privilege of collaborating with Nexus Security on numerous pen-testing projects, I can attest to their exceptional skills in manual pen testing. They showcased his technical proficiency by identifying vulnerabilities and simulating cyberattacks. There was methodical in his approach, meticulously exploring applications, network devices, and cloud infrastructures. Beyond technical skills, Employees excels in communication, with thorough, concise, and actionable reports. I cant recommend Nexus Security highly enough for any pen testing engagement."
                      </p>
                      <div className="ab">
                        <div className="qua">
                          <p>Ujjal Bose,
                          </p>
                          <p>Solution Junction, Director</p>
                        </div>
                      </div>
                    </div>
                    <div className="testimo">
                      <p>
                        "I highly recommend Nexus Security for exceptional expertise in ransomware risk mitigation and cybersecurity. Thier proactive strategies and dedication have significantly strengthened our defenses. The contributions have been invaluable to our organisation from last 1 year."
                      </p>
                      <div className="ab">
                        <div className="qua">
                          <p>Sanjeev Ahuja,
                          </p>
                          <p>United Marathon Pvt Ltd, Director
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimo">
                      <p>
                        "I wanted to express my sincere appreciation for the exceptional pentesting services Nexus Security provided. Their attention to detail and thoroughness in identifying vulnerabilities were truly impressive. The findings have been invaluable in enhancing our cybersecurity posture. Thank you for their outstanding work."
                      </p>
                      <div className="ab">
                        <div className="qua">
                          <p>Mohammad Ruman</p>
                          <p>Kreative Digital Media, Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
                {!isimge &&<h1 className="mt-20"> Testimonials</h1>}
    {!isimge  && <Slider {...settings} className="mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={isimge ? "testimo" : null}>
            <p className="text-gray-400 mt-20 text-lg ml-10">{testimonial.content}</p>
            <div className="ab">
              <div className="qua">
                <p className="text-white ml-10 mt-5">{testimonial.author},</p>
                <p className="text-white ml-10 mt-5">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className={isimge ? " partners" : "partners mt-10"}>
                <div className="down heading">
                  <h2 className={"white-why"}>Our</h2>
                  <h2 className={  "color-why" }> {isimge ?"Collaborations": "Collaboration"}</h2>
                  <div className={isimge ? " clb ddata " : "h-28 w-28 mt-10 flex  "}>
                    <img src={cl1} className="rounded-md ml-0" />
                    <img src={cl2} className="rounded-md ml-4" />
                    <img src={cl3}  className="rounded-md ml-4"/>


                  </div>
                  <div className={isimge ?" clb dddata" : "w-28 h-28 flex mt-10  mb-20 "}>
                    <img src={cl4} className="rounded-md ml-4" />
                    <img src={cl5} className="rounded-md ml-4"/>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* ..img */}

            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className= "book ">
                               {isimge ? <img src={mt} /> : null}
                                <div className="book1">
                                  <h3>Book a meeting with us</h3> 
                                    {isimge ? <p>Lets Collaborate and discuss about your business goals.
                                    </p> : null}
                                </div>
                                <Button variant="contained" onClick={book}>Book a meeting</Button>
                            </div>
                        </ScrollAnimation>
       
              
           
            <ScrollAnimation animateIn="fadeIn">

              <div className={isimge ?"contact" : " mt-20 contact"}>
                <div className="baye">
                  <div className="down heading">
                    <h2 className="white-why">
                      <span className="white-why ">Let us know how we can</span> <span className="color-why">help you?</span>
                    </h2>


                  </div>
                  <p>Lets Collaborate and discuss about your business goals</p>
                  <p className="color-why">Email - contact.nexussec@gmail.com</p>
                  <p className="color-why">Phone - +91 7973454063</p>

                </div>
               {isimge &&  <div className="daye ">
                  <h2>  Fill this form and our team will reach out to you soon! </h2>
                  <form className="">
                    <input placeholder="Name" type="text" />
                    <input placeholder="Email" type="text" className="flex" />
                    <textarea placeholder="Message" type="text" className="message" />


                  </form>
                  <div className="ml-20">
                    <Button
                      variant="contained" type="submit" className="tott">Submit</Button>
                  </div>
                </div> }
              </div> 
             {!isimge && <div className="daye ml-8 ">
                  <h2> Fill this form and our team will reach out to you soon!</h2>
                  <form className={isimge ? 'w-[600px]' : `w-[100%]`}>
                    <input placeholder="Name" type="text"  className="w-52"/>
                    <input placeholder="Email" type="text" className="flex" />
                    <textarea placeholder="Message" type="text" className="message" />


                  </form>
                  <div className=" ">
                    <Button
                      variant="contained" type="submit" >Submit</Button>
                  </div>
                </div> }
            </ScrollAnimation>
          </div>

        </div>
      </Fragment>

    </Fragment >
  );
};

export default Home;
