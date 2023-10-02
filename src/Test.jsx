import vertex from './shaders/vertex.glsl?raw'
import fragment from './shaders/fragment.glsl?raw'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useGLTF } from "@react-three/drei";

export default function Test() {
  return <>
    <color attach={"background"} args={['#000']}/>

    <Model scale={1.3} position-y={-2.75}/>
  </>
}

function Model(props) {
  const { nodes } = useGLTF("/Astronaut.glb");

  const material = useRef()

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    material.current.uniforms.uTime.value = time
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Astronaut_mesh.geometry}
      >
        <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{
            uTime: { value: 0}
        }}
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Astronaut.glb");
