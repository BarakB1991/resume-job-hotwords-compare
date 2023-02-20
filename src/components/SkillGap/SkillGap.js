import './SkillGap.css';
import React from 'react';

function formatAsPercentage(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num * 1);
}

function SkillGap({ skillGapList }) {
  return (
    <div>
      <ul>
        {skillGapList.map((skill, index) => (
          <li key={index}>
            <div>
              <span>{skill[0]}</span>
            </div>
            <span>{formatAsPercentage(skill[1])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGap;

