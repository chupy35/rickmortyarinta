import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import CharacterCard from './CharacterCard'

class Characters extends Component<any, any> {
  constructor(props: any) {
      super(props);
      this.state = {
          CharacterList: [<CharacterCard />, <CharacterCard />, <CharacterCard />, <CharacterCard />],
          Characters: []
      }
  }

  componentDidMount() {
    
      const URL = 'https://rickandmortyapi.com/api/character/'
      axios.get(URL)
          .then((resp) => {
              console.log(resp);
              const characters = resp;
        
              const Charactersarray = characters.data.map((character: any) => <CharacterCard name= {resp} />);

              this.setState({
                  Characters: Charactersarray
              })
          }).catch((err) => {
              console.log(err);

          });
  }
  render() {
      return (
        <CharacterCard></CharacterCard>

      )
  }
}
export default Characters;