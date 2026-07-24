import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      {players.map((item) => (
        <li key={item.name}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
};

const Scorebelow70 = ({ players }) => {
  const players70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      {players70.map((item) => (
        <li key={item.name}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
};

export { ListofPlayers, Scorebelow70 };