import React from "react";
import "../styles/Team.css";
import ArthurImage from '../images/Arthur.jpg';
import CrisImage from '../images/Cris.jpg';
import IgorImage from '../images/Igor.jpg';
import MatheusImage from '../images/matheus.jpg';
import VictorImage from '../images/Victor.jpg';

const teamMembers = [
  { name: "Arthur Nunes", email: "arthurnunes@iduff.com", image: ArthurImage },
  { name: "Cristhyan Lima", email: "cristhyanlima@iduff.com", image: CrisImage },
  { name: "Igor Burns", email: "iburns@iduff.com", image: IgorImage },
  { name: "Matheus Fossi", email: "mfossi@iduff.com", image: MatheusImage },
  { name: "Victor Garcia", email: "victorcalbo@iduff.com", image: VictorImage },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Conheça a Nossa Equipe</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={`./Public/images/${member.image}`}
              alt={member.name}
              className="team-member-image"
            />
            <h3>{member.name}</h3>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
