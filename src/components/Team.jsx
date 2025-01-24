import React from "react";
import "../styles/Team.css"; // Estilos específicos para o componente Team

const teamMembers = [
  { name: "Arthur Nunes", email: "arthurnunes@iduff.com", image: "/images/Arthur.jpg" },
  { name: "Cristhyan Lima", email: "cristhyanlima@iduff.com", image: "/images/Cris.jpg" },
  { name: "Igor Burns", email: "iburns@iduff.com", image: "/images/Igor.jpg" },
  { name: "Matheus Fossi", email: "mfossi@iduff.com", image: "/images/matheus.jpg" },
  { name: "Victor Garcia", email: "victorcalbo@iduff.com", image: "/images/Victor.jpg" },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Conheça a Nossa Equipe</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
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

