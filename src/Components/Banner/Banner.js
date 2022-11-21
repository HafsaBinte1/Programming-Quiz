import React from 'react';
import './Banner.css'
import img from '../../img/PLC-Quiz-Project.webp';

const Banner = () => {
    return (
        <div className='banner row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 mt-4'>
            <div  className='banner-img'>
                <img src={img} alt="" />
            </div>
            <div className='banner-details'>
                <h3><span className='logo'>Programming Quiz</span> is a very Important for  <br />
                  a good Programmer..</h3>
                <p>Coding quizzes are touted as a staple of developer interviews, ostensibly to filter out the silver from the dross, sift the wheat from the chaff. For interviewers, coding quizzes represent a cheap, readily available assessment of prospective job-seekers’ programming abilities.</p>
            </div>
        </div>
    );
};

export default Banner;


