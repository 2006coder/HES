import React from 'react';
import './TeamSectionStyles.css';
import member1 from '../../assets/noah.jpg';
import member2 from '../../assets/arata.jpg';
import member3 from '../../assets/shubhagini.jpg';
import member4 from '../../assets/sora.jpg';
import member5 from '../../assets/bach.png';
import member6 from '../../assets/saki.jpg';

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-container">

        {/* Member 1 */}
        <div className="team-member">
          <img src={member1} alt="Team Member 1" />
          <h3>Noah Radtke</h3>
          <p className="title">Cofounder and Project Lead</p>
          <p className="bio">Majoring in Biochemistry and minoring in Medical Humanities</p>
        </div>

        {/* Member 2 */}
        <div className="team-member">
          <img src={member2} alt="Team Member 2" />
          <h3>Arata Katayama</h3>
          <p className="title">Cofounder and Project Lead</p>
          <p className="bio">Majoring in Software Engineering at Columbia University</p>
        </div>

        {/* Member 5 */}
        <div className="team-member">
          <img src={member5} alt="Team Member 5" />
          <h3>Bach</h3>
          <p className="title">Lead backend developer</p>
          <p className="bio">Majoring in Computer Science Science</p>
        </div>

        {/* Member 3 */}
        <div className="team-member">
          <img src={member3} alt="Team Member 3" />
          <h3>Shubhagini Shah</h3>
          <p className="title">Health Data Analyst</p>
          <p className="bio">Majoring in Neuroscience</p>
        </div>

        {/* Member 4 */}
        <div className="team-member">
          <img src={member4} alt="Team Member 4" />
          <h3>Sora Owada</h3>
          <p className="title">Backend Coding</p>
          <p className="bio">Majoring in Computer Science</p>
        </div>

        

        {/* Member 6 */}
        <div className="team-member">
          <img src={member6} alt="Team Member 6" />
          <h3>Saki Takizawa</h3>
          <p className="title">UI/UX Specialist</p>
          <p className="bio">Majoring in Computer Science and minoring in Music</p>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;