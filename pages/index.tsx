import {Grid, IconButton, Typography} from '@mui/material'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSpotify,
} from '@tabler/icons'

// import SpotifyCard from '../src/components/spotifyCard'

import type {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <>
      {/* <SpotifyCard /> */}
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{minHeight: '100vh'}}
      >
        <Typography variant='h1' align='center'>
          Lukas Greičius
        </Typography>
        <Typography variant='h2' align='center'>
          Full Stack TypeScript developer
        </Typography>
        <Grid item sx={{pt: 2}}>
          <IconButton href='https://www.linkedin.com/in/lukas-grei%C4%8Dius-609955217/'>
            <IconBrandLinkedin size='32' />
          </IconButton>
          <IconButton href='https://github.com/lgreitis/'>
            <IconBrandGithub size='32' />
          </IconButton>
          <IconButton href='https://open.spotify.com/playlist/51IERYOUUwMAimdgaRE2Si?si=274b38785a7b4a62'>
            <IconBrandSpotify size='32' />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
