import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import PulsatingCircle from './pulsatingCircle';

const SpotifyCard = () => {
  return (
    <Card sx={{display: 'flex', position: 'absolute', top: 16, right: 16}}>
      <CardContent sx={{minWidth: '200px'}}>
        <Grid container alignItems='center'>
          <PulsatingCircle sx={{pr: 1}} />
          <Typography
            color='text.secondary'
            component='div'
            variant='subtitle2'
          >
            I&apos;m listening to:
          </Typography>
        </Grid>
        <Typography component='div' variant='h5'>
          RIOT
        </Typography>
        <Typography color='text.secondary' component='div' variant='subtitle1'>
          Overkill
        </Typography>
      </CardContent>
      <CardMedia
        component='img'
        sx={{width: 151}}
        image='https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/99/88/dc/9988dca8-c4f4-5e73-1f35-d8b13466ca23/703980543160.png/600x600bb.jpg'
        alt='RIOT Overkill album cover'
      />
    </Card>
  )
}

export default SpotifyCard
