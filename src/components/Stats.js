import React from 'react';
import stats1 from '../Images/stats-card_icon-1.png';
import stats2 from '../Images/stats-card_icon-2.png';
import stats3 from '../Images/stats-card_icon-3.png';
import { FaArrowRight } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className='container'>
    <section className="stats" id="stats">
      <ul className="stats-list">
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={stats1} alt="Badge icon" />
            </div>
            <h2 className="h2 card-title">
              2+ <strong>Years of Experience</strong>
            </h2>
            <FaArrowRight color='gray'/>
          </a>
        </li>
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={stats3} alt="Checkmark icon" />
            </div>
            <h2 className="h2 card-title">
              6+ <strong>Completed Projects</strong>
            </h2>
            <FaArrowRight color='gray'/>
          </a>
        </li>
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={stats3} alt="Peoples rating icon" />
            </div>
            <h2 className="h2 card-title">
              5+ <strong>Happy Clients</strong>
            </h2>
        <FaArrowRight color='gray'/>
          </a>
        </li>
      </ul>
    </section>
    </div>
  );
};

export default Stats;
