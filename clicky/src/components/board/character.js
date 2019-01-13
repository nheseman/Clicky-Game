import React, { Component } from 'react';
import Animate from '../transitions/animation';

export default class Character extends Component {

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
    }

    render(){ return(
        <Animate
            delay=".5s"
            duration={200}>
            <div className="character">
                <img 
                    src={this.props.character.img} 
                    alt="MarvelImg" 
                    className="charImg"
                    onClick={this.handleClick}/>
            </div>
        </Animate>
    )
    }
}
