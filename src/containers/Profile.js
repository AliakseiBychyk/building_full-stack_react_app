import React, { Component } from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, ColumnLabels, Column} from '../styled/Profile'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '12/20/2016',
          id: '0002'
        }
      ]
    }
  }

  render() {
    let {email} = this.props.user
    return (     
      <Container>
        <div>
          <h2>Profile!</h2>
        </div>
        <Name>
          {email}  
        </Name>
        <GameList>
          <GameListHeader>
            MyGames  
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctlly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
        </GameList>
      </Container>
    )
  }
}

export default Profile