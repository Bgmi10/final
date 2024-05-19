import React from 'react';
import { Fragment } from 'react';
import MetaData from "../layout/MetaData";
import './inhouse.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTags } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '@mui/material';
import mt from "../../images/meet.png";

const Inhouse = () => {
  const  isimge = window.innerWidth >= 784

  const book = () =>{
   window.location.href = "/book"
  }
  
  return (
    <Fragment>
      <MetaData title="Inhouse" />
      <div>
        <h1 className="text-center text-white font-bold text-3xl my-8">Programs</h1>
      </div>

      <div>
        <h2 className="text-gray-300 text-lg ml-14 mt-2">Tech & Data</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        <Card
          link="/course/fullstack"
          imgSrc="https://campalin.com/thumbnsil/programs/FULL%20STACK%20THUMBNAIL.png"
          title="Full Stack Development"
        />

        <Card
          link="/course/cybersecurity"
          imgSrc="https://campalin.com/thumbnsil/programs/ETHICAL%20THUMBNAIL.png"
          title="Ethical Hacking"
        />
 
        <Card
          link="/course/datascience"
          imgSrc="https://campalin.com/thumbnsil/programs/data%20thumbnail.png"
          title="Data Science"
        />
      </div>

      <div>
        <h2 className="text-gray-300 text-lg ml-14 mt-8">Management</h2>
      </div>

      <div className="flex justify-center">
        <Card
          link="/course/humanresource"
          imgSrc="https://campalin.com/thumbnsil/programs/HR%20THUMBNAIL.png"
          title="Human Resources"
        />
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="book ">
                               {isimge ? <img src={mt} /> : null}
                                <div className="book1">
                                  <h3>Book a meeting with us</h3> 
                                    {isimge ? <p>Lets Collaborate and discuss about your business goals.
                                    </p> : null}
                                </div>
                                <Button variant="contained" onClick={book}>Book a meeting</Button>
                            </div>
                        </ScrollAnimation>
    </Fragment>
    
  );
};

const Card = ({ link, imgSrc, title, author }) => {

  return (
    <div className=" my-8 sm:w-full md:w-96   " style={{width:'fit-content', margin:'3%'}}>
      <Link to={link} className="course-link">
        <div>
          <img src={imgSrc} className="h-40 rounded-md hover:scale-105" alt="Course Thumbnail" />
        </div>
        <div>
          <p className="offer-text text-blue-500">
            <FontAwesomeIcon icon={faTags} className="text-pink-500" /> Special Offer
          </p>
          <h2 className="text-white font-medium">{title}</h2>
          <p className="text-gray-400 font-semibold">{author}</p>
          <FontAwesomeIcon icon={faArrowCircleRight} className="text-gray-400 ml-[270px] text-2xl hover:text-gray-600" />
        </div>
      </Link>

    
    </div>
  );
};


export default Inhouse;
