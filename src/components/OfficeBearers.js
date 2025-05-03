import React from 'react';
import './OfficeBearers.css';
import { useSpring, animated } from '@react-spring/web';

const officeBearers = {
  chairman: { name: 'Dr. K N Subramanya', title: 'Principal', image: '/images/princi.jpg' },
  facultyAdvisors: [
    { name: 'Dr. K.S. GEETHA', title: 'Vice Principal', image: '/images/vp.jpeg' },
    { name: 'Dr. SHANMUKHA NAGARAJ', title: 'HoD, Mechanical Dept.', image: '/images/dean.jpg' },
  ],
  facultyCoordinator: { name: 'Dr. PRAPULLA S B', title: 'Assistant Professor, CSE', image: '/images/psb.jpg' },
  coreTeam: [
    { name: 'President', title: 'Prathik P Kekare, ECE', image: '/images/prathik.jpg' },
    { name: 'Vice-President', title: 'Rupini Hulikatti, IEM', image: '/images/rupini.jpg' },
    { name: 'Secretary', title: 'R Sunidhi, ECE', image: '/images/sunidhi.jpg' },
    { name: 'Joint Secretary', title: 'Ranjith D S, MECH', image: '/images/ranjith.jpg' },
    { name: 'Treasurer', title: 'Tejas Math, ECE', image: '/images/tejas.jpeg' },
  ],
  wings: [
    { name: 'Activities & Events', title: 'Prajwal Jathanna, ECE', image: '/images/prajwal.jpg' },
    { name: 'Industrial Connect and People\'s Operations', title: 'Harshit Saroha, ETE', image: '/images/harshit.jpg' },
    { name: 'Industrial Connect and People\'s Operations', title: 'Aaditya Raj, CSE(CY)', image: '/images/aaditya.jpg' },
    { name: 'Social Media', title: 'Sachin Gowda, EEE', image: '/images/sachin.jpg' },
    { name: 'Social Media', title: 'Vijaylaxmi Patil, EIE', image: '/images/vijaylaxmi.jpg' },
    { name: 'P, R &D', title: 'Shriyansh Agarwal, CSE(CY)', image: '/images/shriyansh.jpg' },
    { name: 'P, R &D', title: 'Ranjith D S, MECH', image: '/images/ranjith.jpg' },
    { name: 'Women Empowerment', title: 'Aarushi Das, BT', image: '/images/aarushi.jpg' },
    { name: 'Women Empowerment', title: 'Dhruthi Rudrangi, ISE', image: '/images/dhruthi.jpg' },
  ],
};

const OfficeBearers = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="office-bearers">
      <section className="details chairman-section">
        <div className="section-header">Chairman</div>
        <div className="bearer-card center-card">
          <img src={officeBearers.chairman.image} alt={officeBearers.chairman.name} className="bearer-image" />
          <h3>{officeBearers.chairman.name}</h3>
          <p>{officeBearers.chairman.title}</p>
        </div>
      </section>
      <section className="details advisors-section">
        <div className="section-header">Faculty Advisors</div>
        <div className="bearers-row">
          {officeBearers.facultyAdvisors.map((advisor, index) => (
            <div key={index} className="bearer-card">
              <img src={advisor.image} alt={advisor.name} className="bearer-image" />
              <h3>{advisor.name}</h3>
              <p>{advisor.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="details coordinator-section">
        <div className="section-header">Faculty Coordinator</div>
        <div className="bearer-card center-card">
          <img src={officeBearers.facultyCoordinator.image} alt={officeBearers.facultyCoordinator.name} className="bearer-image" />
          <h3>{officeBearers.facultyCoordinator.name}</h3>
          <p>{officeBearers.facultyCoordinator.title}</p>
        </div>
      </section>
      <section className="details core-team-section">
        <div className="section-header">Core Team</div>
        <div className="bearers-row">
          {officeBearers.coreTeam.map((member, index) => (
            <div key={index} className="bearer-card">
              <img src={member.image} alt={member.name} className="bearer-image" />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="details wings-section">
        <div className="section-header">Wing Heads</div>
        <div className="bearers-row">
          {officeBearers.wings.slice(0, 4).map((wing, index) => (
            <div key={index} className="bearer-card">
              <img src={wing.image} alt={wing.name} className="bearer-image" />
              <h3>{wing.name}</h3>
              <p>{wing.title}</p>
            </div>
          ))}
        </div>
        <div className="bearers-row">
          {officeBearers.wings.slice(4).map((wing, index) => (
            <div key={index} className="bearer-card">
              <img src={wing.image} alt={wing.name} className="bearer-image" />
              <h3>{wing.name}</h3>
              <p>{wing.title}</p>
            </div>
          ))}
        </div>
      </section>
    </animated.div>
  );
};

export default OfficeBearers;
