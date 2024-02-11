import vertex from './../shaders/ColorTransition/vertex.glsl?raw'
import fragment from './../shaders/ColorTransition/fragment.glsl?raw'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Center } from '@react-three/drei'
import { Vector3 } from 'three'
import { gsap } from "gsap";

export default function Test() {
  const material = useRef()
  let firstColor = new Vector3(0.0,0.0,1.0)
  let secColor = new Vector3(1.0,0.0,1.0)
  let progress = { value: 0 }

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    material.current.uniforms.uTime.value = time
    material.current.uniforms.uProgress.value = progress.value
  })

  return <>
    <Center>
      <mesh 
        onPointerEnter={() => gsap.to(progress, {value: 1.3, duration: 1})}
        onPointerLeave={() => gsap.to(progress, {value: 0, duration: 1})}> 
        <planeGeometry args={[1,1,10,10]}/>
        <shaderMaterial
          ref={material}
          vertexShader={vertex}
          fragmentShader={fragment}
          
          uniforms={{
              uTime: { value: 0 },
              uProgress: { value: progress.value },
              uFirstColor: { value: firstColor },
              uSecColor: { value: secColor }
        }}
        />
      </mesh>
    </Center>
  </>
}
