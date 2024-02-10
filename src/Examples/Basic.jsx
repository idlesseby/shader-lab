import vertex from './../shaders/basic/vertex.glsl?raw'
import fragment from './../shaders/basic/fragment.glsl?raw'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Center } from '@react-three/drei'

export default function Test() {
  const material = useRef()

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    material.current.uniforms.uTime.value = time
  })

  return <>
    <Center>
      {/* mesh or points */}
      <points> 
        <planeGeometry args={[1,1,50,50]}/>
        <shaderMaterial
          ref={material}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={{
              uTime: { value: 0}
        }}
        />
      </points>
    </Center>
  </>
}
