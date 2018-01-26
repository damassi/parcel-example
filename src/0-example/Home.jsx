import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { colors } from '../styles'

export function Home () {
  return (
    <Container>
      <div className='Nav'>
        <div>
          Home
        </div>
        <div>
          Artworks
        </div>
        <div>
          Auctions
        </div>
      </div>
      <div className='Main'>
        <div className='About'>
          <div className='Name'>
            Will Burroughs
          </div>
          <div className='Location'>
            St. Louis, MI
          </div>
        </div>
      </div>
    </Container>
  )
}

const exampleSharedStyles = css`
  font-weight: bold;
  font-size: 25px;
`

const Container = styled.div`
  border: 1px solid ${colors.green};

  .Nav {
    border: 1px solid ${colors.darkGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

  .Main {
    background-color: ${colors.lightGrey};

    .About {
      display: flex;
      align-items: center;

      .Name {
        ${exampleSharedStyles}
      }

      .Location {
        ${exampleSharedStyles}
      }
    }
  }
`
