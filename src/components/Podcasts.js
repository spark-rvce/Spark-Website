import React, { useState } from 'react';
import './Podcasts.css';
import { useSpring, animated, useTrail } from '@react-spring/web';

const PodcastEpisode = ({ title, embedLink, isExpanded, toggleExpand }) => (
  <div className={`podcast-episode ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
    <h3 className="podcast-title">{title}</h3>
    {isExpanded && (
      <div className="podcast-content">
        <iframe
          width="100%"
          height="315"
          src={embedLink}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </div>
);

const PodcastPage = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const podcastEpisodes = [
    {
      title: "KNS Experience - Stories, Strategies & Success| K.N. Subramanya | Principal - RVCE",
      embedLink: "https://www.youtube.com/embed/ceAfsPzPQsw?si=_3uARkO6nTySVTPf"
    },
    {
      title: "Dr. KS Geetha’s Journey- Challenges, Leadership & Vision |Vice Principal-RV College of Engineering",
      embedLink: "https://www.youtube.com/embed/BSohvjHTLNw?si=Ihjzh0-gjuKQsR4I"
    },
    {
      title: "Dean Diaries: Laughs, Stories, and Fun Unleashed!🎙️😂|Dr. Shanmukha Nagaraj | Dean Academics - RVCE",
      embedLink: "https://www.youtube.com/embed/uZfv9dnFVm4?si=iNb7I6RIkDX33x3U"
    },
    {
      title: "Major Speaks–From Army to Administration | Unfiltered Leadership & Impact | Maj.Raghavendra C [Retd]",
      embedLink: "https://www.youtube.com/embed/7cPpynVm8LE?si=wXuDGh7HmrMlBbko"
    },
    {
      title: "Molecules meet Metaphors | A tale of ART and Academia ft. Dr Rajalakshmi Mudbidre| RVCE",
      embedLink: "https://www.youtube.com/embed/KA-sEiwCFS0?si=chQB4CzVLCObOCc-"
    },

    // Episodes Add maaDi
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const trail = useTrail(podcastEpisodes.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <animated.div style={fadeIn} className="podcast-page">
      <h1>Our Podcast</h1>
      <p className="podcast-intro">Welcome to our podcast series! Explore our episodes below.</p>
      <div className="podcast-list">
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            <PodcastEpisode
              {...podcastEpisodes[index]}
              isExpanded={expandedIndex === index}
              toggleExpand={() => toggleExpand(index)}
            />
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default PodcastPage;