import React from "react";
import "C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/styles/Team.css"; // Estilos específicos para o componente Team

const teamMembers = [
  { name: "Arthur Nunes", email: "arthurnunes@iduff.com", image: "Arthur.jpg" },
  { name: "Cristhyan Lima", email: "cristhyanlima@iduff.com", image: "Cris.jpg" },
  { name: "Igor Burns", email: "iburns@iduff.com", image: "Igor.jpg" },
  { name: "Matheus Fossi", email: "mfossi@iduff.com", image: "Matheus.jpg" },
  { name: "Victor Garcia", email: "victorcalbo@iduff.com", image: "Victor.jpg" },
];

const Team = () => {
  return (
    <div className="team">
      <h2>Conheça a Nossa Equipe</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={`./Public/Images/${member.image}`}
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
