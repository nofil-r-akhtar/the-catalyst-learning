import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__content">
        <h2>About Us</h2>
        <p>
          The Catalyst Learning Centre is dedicated to empowering students through innovative, personalized learning experiences. 
          We believe in nurturing curiosity, building strong academic foundations, and inspiring a lifelong love of learning. 
          Our team of passionate educators and mentors is committed to helping every learner reach their full potential.
        </p>
      </div>
      {/* Optional image */}
      {/* <div className="about-us__image">
        <img src="/about-us-image.jpg" alt="Our mission" />
      </div> */}
    </section>
  );
}

export default AboutUs;
