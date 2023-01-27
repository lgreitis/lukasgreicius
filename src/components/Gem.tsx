import {useCubeTexture} from '@react-three/drei'
import {ThreeElements, useLoader} from '@react-three/fiber'
import {useMemo} from 'react'
import {AdditiveBlending, Mesh} from 'three'
import {OBJLoader} from 'three-stdlib'

const Gem = (props: ThreeElements['group']) => {
  const envMap2 = useCubeTexture(
    [
      'diamond-square-small.jpg',
      'diamond-square-small.jpg',
      'diamond-square-small.jpg',
      'diamond-square-small.jpg',
      'diamond-square-small.jpg',
      'diamond-square-small.jpg',
    ],
    {path: ''}
  )

  const obj = useLoader(OBJLoader, '/rock.obj')

  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh
        g = _c.geometry
      }
    })
    return g
  }, [obj])

  return (
    <group {...props} scale={1.3}>
      <mesh geometry={geometry}>
        <meshLambertMaterial
          color='#ee0000'
          envMap={envMap2}
          blending={AdditiveBlending}
          transparent
          refractionRatio={0.9}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshLambertMaterial
          color='#00dd00'
          envMap={envMap2}
          blending={AdditiveBlending}
          transparent
          refractionRatio={0.9 - 0.005}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshLambertMaterial
          color='#0000dd'
          envMap={envMap2}
          blending={AdditiveBlending}
          transparent
          refractionRatio={0.9 - 0.01}
        />
      </mesh>
    </group>
  )
}

export default Gem
