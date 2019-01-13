import React from 'react';
import Character from './character';

const CharacterIcons = (props) => {
    return(
        <div className="characterIcons">
            {props.characters.map( (character, index) => <Character character={character} index={index} onCharacterClick={props.onCharacterClick} key={character.name} />)}
        </div>
    )
};

export default CharacterIcons;
