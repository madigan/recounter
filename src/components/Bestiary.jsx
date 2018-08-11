import React from 'react';
import BestiaryListEntry from './BestiaryListEntry';

class Bestiary extends React.Component {
  state = {
    bestiaryEntries : [
      { name:"Goblin", description:"Green, slimy, cruel.", xp:25, hitDice:"2d4"},
      { name:"Kobold", description:"Likes furnature.", xp:25, hitDice:"2d4"},
      { name:"Orc", description:"Needs coffee.", xp:50, hitDice:"4d4"}
    ]
  }

  render() {
    return (
      <div>
        <h3>Bestiary</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>XP</th>
                <th>Hit Dice</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.bestiaryEntries.map(entry => {
                <BestiaryListEntry
                  name={entry.name}
                  description={entry.description}
                  xp={entry.xp}
                  hitDice={entry.hitDice} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Bestiary;
