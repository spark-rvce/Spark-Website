import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{marginTop:'10px'}}>
      {/* Primary Sections */}
      <section className="primary-section vision">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Vision</h2>
            <p>Believe in studying through projects and activities for renewing knowledge.</p>
            </div>
            <img src="/images/vision.jpg" alt="Vision" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section mission reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/mission.jpeg" alt="Mission" className="section-image" />
            <div className="text-content">
              <h2>Mission</h2>
              <p>Aim to enrich and enhance our community through technical and cultural diversity, curiosity, and the overall development of engineering students. 
                Improving the educational experience beyond classroom walls and enhancing our ethical values. 
                Innovations by out-of-the-box thinking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-section about-chapter">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>About the Chapter</h2>
            <p>RV College is dedicated to the holistic development of individuals, shaping their personalities with strong values and ethics. The institution focuses on providing quality education and, through this chapter, promises a practical, hands-on learning platform to enhance students’ knowledge. The IUCEExRVCE student chapter offers an innovative experience beyond conventional classroom learning. It aims to cultivate leadership qualities and social responsibility among engineers, encouraging them to contribute to society and the environment. By adopting a practical approach to problem-solving and fostering unique ideas and solutions, the chapter motivates students to undertake projects beneficial to society. These projects are integrated into both self-learning topics and the curriculum. Additionally, students are encouraged to participate in competitions and present their ideas, gaining valuable feedback for improvement and development. This approach not only enhances their technical skills but also prepares them to make meaningful contributions to the broader community.</p>
            </div>
            <img src="/images/about.png" alt="About the Chapter" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section about-logo reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/logo.png" alt="About the Logo" className="section-image" />
            <div className="text-content">
              <h2>About our Logo</h2>
              <p>The logo of the student chapter signifies how we as humans started off with small milestones in technology and to where we have come till now, the transformation of a hand holding a light bulb till using the available technology and tools (the human hand on the top and the bionic arm at the bottom)we like to move a step ahead making our planet a better place to live. Through this logo we like to spread the awareness of connecting globally across the world to contribute ourselves in building a sustainable planet through the initiation of this student chapter. And even after this drastic and huge development in the technology, we still have concern about the nature around us and the living beings within this nature and through measures like SDGs we aspire to create a balance and make a difference. Hence, 'Changing the World'  little by little...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Sections */}
      <section className="secondary-section dignitaries-messages">
        <div className="section-content">
          <div className="section-body">
            <h2>Dignitaries Messages</h2>
          </div>
        </div>
      </section>

      <section className="secondary-section principal-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/princi.jpg" alt="Principal's Message" className="section-image" />
            <div className="text-content">
              <h2>Principal's Message</h2>
              <p>The collaboration between RV College of Engineering and IUCEE has flourished for over a decade, driving several impactful initiatives that enhance academic innovation and experiential learning. One of the key outcomes of this partnership was the formation of the SPARK section four years ago, which has since delivered remarkable results.</p>
              <p>Inspired by SPARK's success, the SPARK Chapter was initiated to empower students to lead innovative activities, participate in national and international competitions, and cultivate strong leadership qualities.</p>
              <p>As we thank the outgoing SPARK committee for their dedicated efforts, we warmly welcome the new SPARK committee to carry forward this vision. May this team of 2025-26 take academic excellence to new heights at RV College of Engineering.</p>
              <p><b>Wishing you all the very best!</b></p>
              <p><strong>Dr. K N Subramanya<br />Principal <br />RV College of Engineering</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section vice-principal-message">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Vice Principal's Message</h2>
            <p>It is with immense pride and joy that I extend my heartfelt congratulations to the SPARK club of RV College of Engineering on another remarkable year.</p>
            <p>As a faculty coordinator, I am honored to be part of a community that champions hands-on learning, teamwork, and leadership. This year, the chapter has excelled in bridging classroom learning with real-world applications of technology through various industrial trips and awareness programs on cyber security.</p>
            <p>Coordinating events, workshops, and projects has allowed me to witness the impressive capabilities of our students. SPARK is not just shaping their technical skills but also grooming them as future leaders. The chapter has been a catalyst for innovation on our campus, and I am thrilled to see students engaged in meaningful projects and collaborations with industry experts. The unique platform provided by SPARK enables students to develop a holistic skill set, combining technical proficiency with creativity and problem-solving abilities.</p>
            <p>"Leadership is the capacity to translate vision into reality."<b> – Warren Bennis</b></p>
            <p>Congratulations on your achievements, and I wish you all the very best for the future.</p>
            <p><strong>Dr. K S Geetha<br />Vice Principal <br />RV College of Engineering</strong></p>
          </div>
            <img src="/images/vp.jpeg" alt="Vice Principal's Message" className="section-image" />
          </div>
        </div>
      </section>

      <section className="secondary-section dean-academics-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="Dean Academic's Message" className="section-image" />
            <div className="text-content">
              <h2>Faculty Advisor’s Message</h2>
              <p>As the Faculty Advisor of SPARK, I take immense pride in being part of a vibrant and forward-thinking community that consistently fosters curiosity, innovation, and holistic learning. </p>
              <p>SPARK has emerged as a transformative force on campus, nurturing a culture where students are encouraged to think beyond textbooks and engage deeply with real-world challenges. Through a wide range of hands- on activities—be it technical workshops, interdisciplinary projects, or industry visits—students are developing their technical acumen and soft skills such as communication, teamwork, and leadership.</p>
              <p>evolution of students as they take ownership of ideas, collaborate across domains, and bring their visions to life. These experiences, I believe, are instrumental in shaping them into future-ready professionals and responsible global citizens.</p>
              <p>The chapter has also played a significant role in strengthening our ties with the industry, providing students with exposure to current technologies, market trends, and expectations from the professional sphere.</p>
              <p>I am genuinely proud of what the students have accomplished so far, and I am confident that SPARK will continue to evolve as a beacon of creativity, collaboration, and excellence. Congratulations to the entire team for their incredible efforts. I wish you continued success and many more milestones ahead!</p>
              <p><strong>Dr. Shanmukha N<br />HOD, Mechnaical Engineering<br />RV College of Engineering</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section dsa-message">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Faculty Co-ordinator's Message</h2>
            <p>Honored to welcome passionate student leaders committed to transforming engineering education. SPARK – Study through Projects and Activities for Renewing Knowledge – is more than a name; it’s a mindset focused on growth, action, and reflection. </p>
            <p>Aligned with IUCEE’s vision, SPARK encourages student-driven, globally aware, and socially responsible learning. It operates through various focus areas, from organizing events that energize learning to building strong industry connections that bring real-world experience into the classroom.</p>
            <p>It also values creativity through social media, fosters inclusion and leadership through women empowerment, and inspires academic growth through research and innovation. SPARK empowers students to think critically, act collaboratively, and lead with integrity.</p>
            <p>To our new leaders: lead with heart, serve with purpose, and let SPARK continue to light the way. Let SPARK keep igniting minds and lighting the way forward!</p>
            <p><strong>Dr. Prapulla S B<br />Assistant Professor, CSE<br />RV College of Engineering</strong></p>
          </div>
            <img src="/images/psb.jpg" alt="Vice Principal's Message" className="section-image" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;