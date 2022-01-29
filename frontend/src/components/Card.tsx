import React from 'react';

type Arcana = 'major' | 'minor';
type Suit = 'pentacles' | 'swords' | 'cups' | 'wands';
type Trumps = 'fool'; // add more
type Minors = 'ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'page' | 'knight' | 'queen' | 'king';
type Face = Trumps | Minors;
type CardType = 'action' | 'goal' | 'facet';

interface CardProps {
  arcana: Arcana;
  suit: Suit;
  face: Face;
  name: string;
  label: string;
  type: CardType;
  cardDescription: object;
}

const Card: React.FC<CardProps> = ({ arcana, suit, face, name, label, type}: CardProps) => (
  <div className="card-body" id={name}>
    <div className="card-border">
      <div className="card-header" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <div className="suit-container"><span>{suit}</span>  <span>{face}</span></div>
        <div className="card-label">{label}</div>
      </div>
      <div className="card-body">

      </div>
    </div>
  </div>
);

export default Card;
