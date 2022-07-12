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
          <IconButton>
            <IconBrandLinkedin size='32' />
          </IconButton>
          <IconButton>
            <IconBrandGithub size='32' />
          </IconButton>
          <IconButton>
            <IconBrandSpotify size='32' />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
