import React from 'react';
import './ContactUs.css'; // Reuse the same styles for consistency

const Credits = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-heading">WEBSITE CREDITS</h1>
      
      <div className="contact-cards">
        {/* Developer 1 */}
        <div className="contact-card">
          <h2>Harsh Gupta</h2>
          <p className="role">Website Developer</p>
          <p className="email">Email: harshgupta.is22@rvce.edu.in</p>
        </div>
        {/* Developer 2 */}
        <div className="contact-card">
          <h2>Adarsh Shrivastava</h2>
          <p className="role">Website Developer</p>
          <p className="email">Email: adarshs.cy22@rvce.edu.in</p>
        </div>
        {/* Developer 3 */}
        <div className="contact-card">
          <h2>Abhishek Saraff</h2>
          <p className="role">Website Developer</p>
          <p className="email">Email: abhisheksaraff.cy22@rvce.edu.in</p>
        </div>

        {/* Developer 4 */}
        <div className="contact-card">
          <h2>Harshit Saroha</h2>
          <p className="role">Website Developer</p>
          <p className="email">Email: harshitsaroha.et23@rvce.edu.in</p>
        </div>

      </div>

      <div className="general-contact">
        <h2>Built using:</h2>
        <p className="email">React.js, React Router, CSS</p>
      </div>
    </div>
  );
};

export default Credits;