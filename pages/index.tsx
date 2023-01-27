import {css, Grid, IconButton, Typography} from '@mui/material'
import {Effects, OrbitControls} from '@react-three/drei'
import {Canvas, extend} from '@react-three/fiber'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSpotify,
} from '@tabler/icons'
import {UnrealBloomPass} from 'three-stdlib'

import type {NextPage} from 'next'
import {Suspense} from 'react'
import Gem from '../src/components/Gem'

extend({UnrealBloomPass})

const Home: NextPage = () => {
  return (
    // <GridBackground>
    <Suspense fallback={null}>
      <div
        css={css`
          height: 100vh;
          width: 100vw;

          top: 0;
          right: 0;
        `}
      >
        <Canvas>
          <color attach='background' args={['#121212']} />
          <ambientLight />
          <Effects disableGamma>
            {/* threshhold has to be 1, so nothing at all gets bloom by default */}
            <unrealBloomPass threshold={0.56} strength={1.4} radius={0.7} />
          </Effects>
          <Gem position={[0, 2, 0]} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>
      <div
        css={css`
          position: absolute;
          padding-top: 20%;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          z-index: 2;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <Typography
          css={css`
            z-index: 99999;
          `}
          variant='h1'
          align='center'
        >
          Lukas Greičius
        </Typography>
        <Typography
          css={css`
            z-index: 99999;
          `}
          variant='h2'
          align='center'
        >
          Full Stack TypeScript developer
        </Typography>
        <Grid item sx={{pt: 2}}>
          <IconButton
            title='LinkedIn'
            href='https://www.linkedin.com/in/lukas-grei%C4%8Dius-609955217/'
          >
            <IconBrandLinkedin size='32' />
          </IconButton>
          <IconButton title='Github' href='https://github.com/lgreitis/'>
            <IconBrandGithub size='32' />
          </IconButton>
          <IconButton
            title='Spotify Playlist'
            href='https://open.spotify.com/playlist/51IERYOUUwMAimdgaRE2Si?si=274b38785a7b4a62'
          >
            <IconBrandSpotify size='32' />
          </IconButton>
        </Grid>
      </div>
    </Suspense>
    // </GridBackground>
  )
}

export default Home

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      unrealBloomPass: any
    }
  }
}
