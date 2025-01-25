import React from "react";
import '../App.css'; // Adjust the path to go one directory up to src

const About = () => {
  return (
    <div className="about-container" style={{ paddingBottom: '100px' }}> {/* Add padding to the bottom */}
      <h1>About Our Company</h1>
      <p>
        Welcome to our Blogging Company! We are dedicated to providing a platform for individuals to share their thoughts, ideas, and stories with the world. Our mission is to empower voices and foster a community of creativity and expression.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src={"https://m.foolcdn.com/media/dubs/images/Brian_Chesky_Airbnb.width-880.jpg"} alt="CEO" />
          <h3>John Doe</h3>
          <p>CEO - John is the visionary behind our company, leading us towards success with his innovative ideas.</p>
          
        </div>
        <div className="team-member">
          <img src={"https://indianbusinesstimes.com/wp-content/uploads/2021/12/1639653960_whatsapp-image-2021-12-16-at-16-28-30.jpeg"} alt="CTO" />
          <h3>Jane Smith</h3>
          <p>CTO - Jane oversees our technology and ensures that our platform is user-friendly and efficient.</p>
        </div>
        <div className="team-member">
          <img src={"https://www.hindustantimes.com/ht-img/img/2023/05/12/550x309/Nikhil_Kamath_1664434472230_1683893932471.jpg"} alt="COO" />
          <h3>Mike Johnson</h3>
          <p>COO - Mike manages our operations and ensures that everything runs smoothly.</p>
        </div>
      </div>
    </div>
  );
};

export default About;