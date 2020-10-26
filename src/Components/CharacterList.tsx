import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import CharacterCard from './CharacterCard'
class Characters extends Component {
  constructor(props) {
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
              console.log(resp.results);
              const characters = resp.results;
        
              const Charactersarray = characters.map(character => <CharacterCard name= {results.name} />);

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