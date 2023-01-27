import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'
import {Box} from '@mui/material'

import theme from '../../styles/theme/theme'

import type {SxProps, Theme} from '@mui/material'

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${theme.palette.success.main};
  border-radius: 50%;
`

const Pulsate = keyframes`
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0.0;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    transform: scale(1.2, 1.2);
    opacity: 0.0;
  }
`

const Ring = styled.div`
  border: 3px solid ${theme.palette.success.main};
  border-radius: 30px;
  height: 25px;
  width: 25px;
  position: absolute;
  animation: ${Pulsate} 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
`

interface PulsatingCircleProps {
  sx?: SxProps<Theme>
}

const PulsatingCircle = ({sx = []}: PulsatingCircleProps) => {
  return (
    <Box
      component='div'
      sx={[
        {
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Ring />
      <Circle />
    </Box>
  )
}

export default PulsatingCircle
