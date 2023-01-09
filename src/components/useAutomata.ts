import {createWorkerFactory, useWorker} from '@shopify/react-web-worker'
import {useState} from 'react'
import {automata_n} from '../constants'
import {Dimensions} from '../types'

const newStateArray = (dimensions: Dimensions): number[][] => {
  const {rows, columns} = dimensions

  const state: number[][] = []
  for (let i = 0; i < rows; i++) {
    state.push([])
    for (let j = 0; j < columns; j++) {
      state[i].push(Math.floor(Math.random() * automata_n))
    }
  }

  return state
}

const getDimensions = (): Dimensions => {
  const columns = Math.floor(document.body.clientWidth / 35)
  const rows = Math.floor(document.body.clientHeight / 35)

  return {columns, rows}
}

const createWorker = createWorkerFactory(
  () => import('../utils/automataWorker')
)

const useAutomata = () => {
  const [data, setData] = useState<
    | {
        state?: number[][]
        columns: number
        rows: number
      }
    | undefined
  >()
  const worker = useWorker(createWorker)

  const updateGridData = async () => {
    const dimensions = getDimensions()
    let state = data?.state || newStateArray(dimensions)

    const webWorkerMessage = await worker.automataAlg(dimensions, state)
    state = webWorkerMessage

    setData({...dimensions, state})
  }

  const remakeGrid = () => {
    const dimensions = getDimensions()
    setData({...dimensions, state: newStateArray(dimensions)})
  }

  return {...data, updateGridData, remakeGrid}
}

export default useAutomata
