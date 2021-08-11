import styled from 'styled-components'

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <MainGrid>

      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src="https://github.com/marcoscurymoreira.png" />
        </Box>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da comunidade
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>

    </MainGrid>
  )
}
