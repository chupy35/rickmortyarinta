import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class CharacterCard extends React.Component<any, any>{
   constructor(props: any){
        super(props);
    }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
            
            </Card.Body>
          </Card>
        )
    }
}

export default CharacterCard;