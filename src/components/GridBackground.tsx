import {css, keyframes} from '@emotion/react'
import React, {useEffect, useState} from 'react'

const gradientAnim = keyframes`
  from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }
`

const tile = css`
  position: relative;
  ::before {
    background-color: #000;
    content: '';
    position: absolute;
    inset: 0.5px;
  }
`

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const GridBackground = (props: Props) => {
  const [data, setData] = useState<{columns: number; rows: number}>({
    columns: 0,
    rows: 0,
  })

  const updateGridData = () => {
    const columns = Math.floor(document.body.clientWidth / 50)
    const rows = Math.floor(document.body.clientHeight / 50)

    setData({columns, rows})
  }

  useEffect(() => {
    updateGridData()
    window.addEventListener('resize', updateGridData)

    return () => {
      window.removeEventListener('resize', updateGridData)
    }
  }, [])

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;

        animation: ${gradientAnim} 10s linear infinite;

        background: linear-gradient(to right, #5f2c82, #49a09d, #5f2c82);
        background-size: 200%;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: 100vh;
          width: 100vw;
          padding-bottom: 1px;
          padding-right: 1px;

          display: grid;
          grid-template-columns: repeat(${data?.columns}, 1fr);
          grid-template-rows: repeat(${data?.rows}, 1fr);
        `}
      >
        {[...Array(data.columns * data.rows)].map((el, i) => {
          return <div key={i} css={tile} />
        })}
      </div>
      {props.children}
    </div>
  )
}

export default GridBackground
