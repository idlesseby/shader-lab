import vertex from './../shaders/ColorTransition/vertex.glsl?raw'
import fragment from './../shaders/ColorTransition/fragment.glsl?raw'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Center } from '@react-three/drei'
import { Vector3 } from 'three'

export default function Test() {
  const material = useRef()
  let color = new Vector3(0.0,1.0,0.0)

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    material.current.uniforms.uTime.value = time
    material.current.uniforms.uColor.value = color
  })

  return <>
    <Center>
      {/* mesh or points */}
      <mesh onPointerOver={() => {color.set(1.0,0.0,1.0)}} onPointerOut={() => {color.set(0.0,1.0,0.0)}}> 
        <sphereGeometry args={[1,32,16]}/>
        <shaderMaterial
          ref={material}
          vertexShader={vertex}
          fragmentShader={fragment}
          wireframe
          uniforms={{
              uTime: { value: 0 },
              uColor: { value: 0 }
        }}
        />
      </mesh>
    </Center>
  </>
}
