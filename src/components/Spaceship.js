import React from 'react';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h3> Name: {this.props.name} </h3>
                <p> Speed: {this.props.speed} </p>
                <p> Has Rockets? {this.props.hasRockets} </p>
                <p> Colors: {this.props.colors} </p>
            </div>
        );
    }
}
 
Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
}
