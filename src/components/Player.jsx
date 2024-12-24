import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-4">
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title className="text-lg font-bold">{name}</Card.Title>
        <Card.Text>
          <p><strong>Team:</strong> {team}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
          <p><strong>Age:</strong> {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150?text=No+Image",
};

export default Player;
