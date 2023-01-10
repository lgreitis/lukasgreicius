import {css} from '@emotion/react'
import {IconX} from '@tabler/icons'
import {useEffect} from 'react'
import useAutomata from './useAutomata'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const GridBackground = (props: Props) => {
  const {state, rows, columns, updateGridData, remakeGrid} = useAutomata()

  useEffect(() => {
    const interval = setInterval(updateGridData, 600)

    return () => {
      clearInterval(interval)
    }
  }, [updateGridData])

  useEffect(() => {
    window.addEventListener('resize', remakeGrid)

    return () => {
      window.removeEventListener('resize', remakeGrid)
    }
  }, [remakeGrid])

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        `}
      >
        {state && (
          <div
            css={css`
              position: absolute;
              height: 100vh;
              width: 100vw;
              overflow: hidden;

              display: grid;
              grid-template-columns: repeat(${columns}, 1fr);
              grid-template-rows: repeat(${rows}, 1fr);
            `}
          >
            {state.map((_, i) => {
              return state[i].map((el, x) => {
                return (
                  <div
                    key={`i${i}x${x}`}
                    className='icon'
                    style={{
                      opacity: el / 119 >= 0.98 ? 1 : 0,
                      transform:
                        el / 119 >= 0.98 ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <IconX style={{color: '#e0ff0d'}} />
                  </div>
                )
              })
            })}
          </div>
        )}
        {props.children}
      </div>
      <style jsx>
        {`
          .icon {
            color: '#e0ff0d';
            transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            will-change: opacity, transform;
          }
        `}
      </style>
    </>
  )
}

export default GridBackground

{
  /* <IconX
css={css`
  color: #e0ff0d;
`}
/> */
}
