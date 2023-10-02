import vertex from './shaders/vertex.glsl?raw'
import fragment from './shaders/fragment.glsl?raw'
import { DoubleSide } from "three"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Test = () => {
  const ref = useRef()

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.uniforms.uTime.value = time
  })

  return (
    <mesh scale={4}>
        <boxGeometry args={[1, 1, 1]}/>
        <shaderMaterial
          ref={ref}
          vertexShader={vertex}
          fragmentShader={fragment}
          side={DoubleSide}
          uniforms={{
             uTime: { value: 0}
          }}
        />
      </mesh>
  )
}

export default Test