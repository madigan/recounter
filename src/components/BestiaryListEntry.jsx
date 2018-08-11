import React from 'react';

const BestiaryListEntry = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td>{props.xp}</td>
    <td>{props.hitDice}</td>
  </tr>
);

export default BestiaryListEntry;
