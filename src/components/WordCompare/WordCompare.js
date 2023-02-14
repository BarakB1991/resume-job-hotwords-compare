import React, { useState } from 'react';
import './WordCompare.css';

const WordCompare = ({
  skills: { resultHardSkillsFound, resultSoftSkillsFound },
}) => {
  const [isZeroKeysInJobHidden, setIsZeroKeysInJobHidden] = useState(true);

  const handleHideZeroKeysInJobButton = () => {
    setIsZeroKeysInJobHidden(!isZeroKeysInJobHidden);
  };

  return (
    <div>
      <h3>Hard Skills</h3>
      {resultHardSkillsFound ? (
        <table>
          <thead>
            <tr>
              <th>Skill Name</th>
              <th>Resume Count</th>
              <th>Job Post Count</th>
            </tr>
          </thead>
          <tbody>
            {resultHardSkillsFound.map((skill, index) => {
              const skillName = Object.keys(skill)[0];
              if (!skill[skillName].jobPost && isZeroKeysInJobHidden) {
                return null;
              }
              const resumeCount = skill[skillName].resume;
              const jobPostCount = skill[skillName].jobPost;
              return (
                <tr key={index}>
                  <td>{skillName}</td>
                  <td>{resumeCount}</td>
                  <td>{jobPostCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>'No Hard Skills'</p>
      )}
      <h3>Soft Skills</h3>
      {resultSoftSkillsFound ? (
        <table>
          <thead>
            <tr>
              <th>Skill Name</th>
              <th>Resume Count</th>
              <th>Job Post Count</th>
            </tr>
          </thead>
          <tbody>
            {resultSoftSkillsFound.map((skill, index) => {
              const skillName = Object.keys(skill)[0];
              if (!skill[skillName].jobPost && isZeroKeysInJobHidden) {
                return null;
              }
              const resumeCount = skill[skillName].resume;
              const jobPostCount = skill[skillName].jobPost;
              return (
                <tr key={index}>
                  <td>{skillName}</td>
                  <td>{resumeCount}</td>
                  <td>{jobPostCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>'No Soft Skills'</p>
      )}
      <button className='btn-secondary' onClick={handleHideZeroKeysInJobButton}>
        {isZeroKeysInJobHidden
          ? 'Show all skills'
          : 'Show only relevant skills'}
      </button>
    </div>
  );
};

export default WordCompare;
