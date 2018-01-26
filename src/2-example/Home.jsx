import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { colors } from '../styles'

export function Home1 () {
  return (
    <Container>
      <Nav>
        <div>
          Home
        </div>
        <div>
          Artworks
        </div>
        <div>
          Auctions
        </div>
      </Nav>
      <Main>
        <Artwork>
          <ArtworkArea>

          </ArtworkArea>
          <ArtworkDetails>

          </ArtworkDetails>
        </Artwork>
        <About>
          <Name>
            Will Burroughs
          </Name>
          <Location>
            St. Louis, MI
          </Location>
        </About>
      </Main>
    </Container>
  )
}

const exampleSharedStyles = css`
  font-weight: bold;
  font-size: 25px;
`

const Container = styled.div`
  border: 1px solid ${colors.green};
`

const Nav = styled.div`
  border: 1px solid ${colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Main = styled.div`
  background-color: ${colors.lightGrey};
`

const About = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  ${exampleSharedStyles};
`

const Location = styled.div`
  ${exampleSharedStyles}
`
