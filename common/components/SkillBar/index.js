import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SkillBar = ({ skill, details }) => (
  <div className="skill-bar">
    <span>{skill}</span>
    <meter max="5" min="0" optimum="4" high="4" low="1" value="3" />
    <details>
      <summary>See more...</summary>
      <p>{details}</p>
    </details>
  </div>
);

SkillBar.propTypes = {
  details: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillBar;
