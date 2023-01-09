import {automata_g, automata_k1, automata_k2, automata_n} from '../constants'
import {Dimensions} from '../types'

export const automataAlg = (dimensions: Dimensions, state: number[][]) => {
  const {rows, columns} = dimensions
  let next_state: number[][] = []

  for (let i = 0; i < rows; i++) {
    next_state.push([])
    for (let j = 0; j < columns; j++) {
      let sum = 0
      let ill = 0
      let infected = 0
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if ((di == 0 && dj == 0) || Math.abs(di) + Math.abs(dj) == 2) continue
          let k = (i + di + rows) % rows
          let l = (j + dj + columns) % columns
          let neighbor = state[k][l]
          if (neighbor >= automata_n) {
            ill++
          } else if (neighbor > 0) {
            infected++
          }
          sum += neighbor
        }
      }
      sum += state[i][j]
      if (state[i][j] >= automata_n) {
        next_state[i][j] = 0
      } else if (state[i][j] > 0) {
        next_state[i][j] = Math.min(
          Math.floor(sum / (infected + ill + 1)) + automata_g,
          automata_n
        )
      } else {
        next_state[i][j] =
          Math.floor(infected / automata_k1) + Math.floor(ill / automata_k2)
      }
    }
  }
  state = next_state

  return state
}
