import React, { Component } from 'react';
import Animate from '../transitions/animation';
import CharacterIcons from './CharacterIcons';
import ScoreDisplay from './scoreDis';

const boardChars = [
    {
        name: 'Archangel',
        img: 'img/angelrs.jpg',
        clicked: false
    },
    {
        name: 'Antman',
        img: 'img/antmanrs.jpg',
        clicked: false
    },
    {
        name: 'Beast',
        img: 'img/beastrs.jpg',
        clicked: false
    },
    {
        name: 'Black Cat',
        img: 'img/blackcatrs.jpg',
        clicked: false
    },
    {
        name: 'Bulls-Eye',
        img: 'img/bullsrs.jpg',
        clicked: false
    },
    {
        name: 'Cable',
        img: 'img/cablers.jpg',
        clicked: false
    },
    {
        name: 'Captain America',
        img: 'img/caprs.jpg',
        clicked: false
    },
    {
        name: 'Deadpool',
        img: 'img/Deadpoolrs.jpg',
        clicked: false
    },
    {
        name: 'Wolverine',
        img: 'img/wolviers.jpg',
        clicked: false
    },
    {
        name: 'Ironman',
        img: 'img/ironmanrs.jpg',
        clicked: false
    },
    {
        name: 'Loki',
        img: 'img/lokirs.gif',
        clicked: false
    },
    {
        name: 'Doctor Octopus',
        img: 'img/ockrs.jpg',
        clicked: false
    },
    {
        name: 'The Punisher',
        img: 'img/Punisherrs.jpg',
        clicked: false
    },
    {
        name: 'Red-Skull',
        img: 'img/redskullrs.jpg',
        clicked: false
    },
    {
        name: 'Spiderman',
        img: 'img/spideyrs.jpg',
        clicked: false
    },
    {
        name: 'Rogue',
        img: 'img/Roguers.jpg',
        clicked: false
    },
    {
        name: 'Thor',
        img: 'img/thorrs.jpg',
        clicked: false
    },
    {
        name: 'Iron-Fist',
        img: 'img/Ironfistrs.jpg',
        clicked: false
    }];

    const shuffleBoard = arr => (
        arr
          .map(a => [Math.random(), a])
          .sort((a, b) => a[0] - b[0])
          .map(a => a[1]) 
    );

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: { score: 0 },
            characters: shuffleBoard( boardChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleBoard( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: { ...this.state.user, score: this.state.user.score + 1 }
            });

        } else {
            this.setState({
                characters: shuffleBoard(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: { ...this.state.user, score: 0 }
            });           
        }        
    }

    render(){
        return (
            <div className="Board">               
                <Animate 
                    in={true}
                    duration={100}
                    direction={'bottom'}
                    delay={'.2s'}>
                    <ScoreDisplay score={this.state.user.score} />
                </Animate>

                <CharacterIcons characters={this.state.characters} 
                            onCharacterClick={this.onCharacterClick} />
                  <Animate 
                    in={true}
                    duration={100}
                    length={'200px'}
                    direction={'bottom'}
                    delay={'.2s'}>
                    <h4>Click on every hero or villian only once. After you click a character the images will reshuffle.<br/>If you click the same character twice the game will start over.</h4>
                </Animate>
            </div>
        )
    }

}