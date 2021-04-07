import React from 'react'
import styled from 'styled-components/native'

import MoviesList from './components/MoviesList'

const Container = styled.View`
  flex: 1;
  background-color: #191817;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

const Title = styled.Text`
  font-size: 24px;
  color: #FF7B02;
  padding-bottom: 10px;
`


const App = () => {
  return (
    <Container>
      <Title>Movie Time</Title>
      <Title>🎬 </Title>
      
        <MoviesList/>
      
    </Container>
  )
}

export default App
