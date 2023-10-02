import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/human.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.human.geometry}
        material={nodes.human.material}
      />
    </group>
  );
}

useGLTF.preload("/human.glb");